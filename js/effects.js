// ---------------------------------------------------------------
// SIGNATURE ANIMATION — live waveform in the hero
// A cheap sine-based "oscilloscope" line: idle drift + a gentle
// bulge that tracks the pointer. Pauses off-screen and respects
// prefers-reduced-motion. No dependencies.
// ---------------------------------------------------------------
(function(){
  const wrap = document.querySelector('.hero-scope');
  const canvas = document.getElementById('scopeCanvas');
  if(!wrap || !canvas) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  let running = false, rafId = null;
  let pointerX = 0.5; // 0..1 across the width, eased toward the real pointer
  let targetX = 0.5;
  let t = 0;

  // Three overlapping lines. Their hues are offsets from the live theme
  // rather than fixed colours, so the canvas follows the picker exactly
  // like the CSS does — read fresh each frame batch, never cached.
  const lines = [
    { hue:0,   sat:'90%', lig:'46%', amp:0.16, speed:0.55, freq:1.6, phase:0,   width:1.6 },
    { hue:96,  sat:'50%', lig:'62%', amp:0.10, speed:0.42, freq:2.3, phase:2.1, width:1.2 },
    { hue:-27, sat:'55%', lig:'72%', amp:0.07, speed:0.68, freq:1.1, phase:4.2, width:1  }
  ];
  function themeHue(){
    const v = getComputedStyle(document.documentElement).getPropertyValue('--accent-h');
    const n = parseFloat(v);
    return isNaN(n) ? 291 : n;
  }
  const baseAmps = lines.map(l=> l.amp);
  const baseSpeeds = lines.map(l=> l.speed);

  function resize(){
    const rect = wrap.getBoundingClientRect();
    w = rect.width; h = rect.height;
    canvas.width = Math.max(1, w * dpr);
    canvas.height = Math.max(1, h * dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }

  let baseHue = 291;
  // one read per frame, not per line — getComputedStyle is the expensive part
  function draw(){
    baseHue = themeHue();
    ctx.clearRect(0,0,w,h);
    pointerX += (targetX - pointerX) * 0.045;

    lines.forEach(line=>{
      ctx.beginPath();
      const steps = 90;
      for(let i=0;i<=steps;i++){
        const nx = i/steps;
        const x = nx * w;
        // ambient sine drift, plus a pointer-driven bulge (bell curve
        // centred on pointerX) so the line visibly "listens" to the cursor
        const bulge = Math.exp(-Math.pow((nx - pointerX) * 3.2, 2)) * 0.5;
        const y = h*0.55
          + Math.sin(nx * Math.PI * line.freq + t * line.speed + line.phase) * h * line.amp
          - bulge * h * 0.22;
        if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.strokeStyle = `hsl(${baseHue + line.hue} ${line.sat} ${line.lig} / 0.5)`;
      ctx.lineWidth = line.width;
      ctx.lineJoin = 'round';
      ctx.stroke();
    });

    t += 0.016;
  }

  function loop(){
    if(!running) return;
    draw();
    rafId = requestAnimationFrame(loop);
  }
  function start(){
    if(running || reduceMotion) return;
    running = true;
    rafId = requestAnimationFrame(loop);
  }
  function stop(){
    running = false;
    if(rafId) cancelAnimationFrame(rafId);
  }

  // Control surface used by the hidden interactions in js/easter.js:
  // `transient()` kicks a single spike through the line (like a drum
  // hit), `setGain()` scales every amplitude at once.
  window.__scope = {
    transient(){
      lines.forEach(line=>{ line.amp *= 2.6; });
      setTimeout(()=>{ lines.forEach((line,i)=>{ line.amp = baseAmps[i]; }); }, 420);
    },
    setGain(g){
      lines.forEach((line,i)=>{ line.amp = baseAmps[i] * g; });
    },
    setSpeed(mult){
      lines.forEach((line,i)=>{ line.speed = baseSpeeds[i] * mult; });
    },
    isRunning(){ return running; }
  };

  if(reduceMotion){
    // draw a single still frame so the space isn't empty, then stop
    resize(); draw();
  } else {
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', (e)=>{
      // only the horizontal position across the viewport matters
      targetX = Math.min(1, Math.max(0, e.clientX / window.innerWidth));
    }, {passive:true});

    if('IntersectionObserver' in window){
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(entry=> entry.isIntersecting ? start() : stop());
      }, {threshold:0.05});
      io.observe(wrap);
    } else {
      start();
    }
    document.addEventListener('visibilitychange', ()=>{
      if(document.hidden) stop(); else if(wrap.getBoundingClientRect().top < window.innerHeight) start();
    });
  }
})();

// ---------------------------------------------------------------
// CUSTOM CURSOR — desktop / fine-pointer only. A small dot for exact
// aim, with a thin ring around it that answers "is this interactive?"
// before the click — distinct, restrained treatments for navigation,
// primary actions, projects, and plain links.
//
// Position is written straight from the pointer event onto ONE host
// element, every time — no lerped trailing piece. The dot and ring are
// both fixed at translate(-50%,-50%) from that host, so they're always
// exactly centred on the real pointer position; only their size and
// colour transition, never their position.
// ---------------------------------------------------------------
(function(){
  const canHover = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!canHover || reduceMotion) return;

  const host = document.getElementById('cursorHost');
  const label = document.getElementById('cursorLabel');
  if(!host || !label) return;

  let ready = false;
  function onMove(e){
    if(!ready){ ready = true; document.body.classList.add('cursor-ready'); }
    host.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  }
  window.addEventListener('pointermove', onMove, {passive:true});

  // Checked in order from most to least specific — a track-btn inside
  // the nav still reads as "nav", not "generic link".
  const LABELLED = '[data-cursor]';
  const DRAG     = '[data-theme-rail]';
  const NAV      = '.navlinks a, .nav-overlay-links a, .section-nav-item, .lang-current, .lang-opt, .brand[data-target]';
  const BTN      = '.btn, .track-btn, .theme-trigger';
  const LINK     = 'a, button, input, textarea, [role="button"]';

  const STATE_CLASSES = ['cursor-hover','cursor-hover-nav','cursor-hover-btn','cursor-label-active','cursor-drag'];
  function clearStates(){ document.body.classList.remove(...STATE_CLASSES); }

  document.addEventListener('mouseover', (e)=>{
    const labelled = e.target.closest(LABELLED);
    const drag     = e.target.closest(DRAG);
    const nav      = e.target.closest(NAV);
    const btn      = e.target.closest(BTN);
    const link     = e.target.closest(LINK);

    clearStates();
    if(drag){
      document.body.classList.add('cursor-drag');
    } else if(labelled){
      label.textContent = labelled.dataset.cursor;
      document.body.classList.add('cursor-label-active');
    } else if(nav){
      document.body.classList.add('cursor-hover-nav');
    } else if(btn){
      document.body.classList.add('cursor-hover-btn');
    } else if(link){
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', (e)=>{
    // only clear when actually leaving an interactive element, so moving
    // between two children of the same target doesn't flicker the cursor
    const stillInside = e.relatedTarget && e.relatedTarget.closest &&
      (e.relatedTarget.closest(LABELLED) || e.relatedTarget.closest(DRAG) ||
       e.relatedTarget.closest(NAV) || e.relatedTarget.closest(BTN) || e.relatedTarget.closest(LINK));
    if(stillInside) return;
    clearStates();
  });

  // pressing down gives a small, immediate confirmation of the click
  document.addEventListener('pointerdown', ()=> document.body.classList.add('cursor-down'));
  document.addEventListener('pointerup',   ()=> document.body.classList.remove('cursor-down'));

  window.addEventListener('mouseleave', ()=> document.body.classList.remove('cursor-ready'));
  window.addEventListener('mouseenter', ()=> document.body.classList.add('cursor-ready'));

  // ---- Magnetic pull on primary buttons and category filters ----
  // The button leans gently toward the cursor while it's nearby, and
  // springs back once the pointer leaves. Kept deliberately small
  // (0.28 of the offset, capped by the element's own hover transform)
  // so it never fights the cursor's own precision — the pointer's real
  // position is what the cursor ring tracks, not the button's shifted
  // position.
  document.querySelectorAll('.btn, .track-btn').forEach(el=>{
    el.classList.add('magnetic');
    el.addEventListener('mousemove', (e)=>{
      const r = el.getBoundingClientRect();
      const relX = e.clientX - (r.left + r.width/2);
      const relY = e.clientY - (r.top + r.height/2);
      el.style.setProperty('--mx', (relX*0.28)+'px');
      el.style.setProperty('--my', (relY*0.28)+'px');
    });
    el.addEventListener('mouseleave', ()=>{
      el.style.setProperty('--mx','0px');
      el.style.setProperty('--my','0px');
    });
  });
})();

// ---------------------------------------------------------------
// Glass sheen tracking on project cards (see .clip-card::after in CSS)
// ---------------------------------------------------------------
(function(){
  const canHover = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if(!canHover) return;
  document.querySelectorAll('.clip-card').forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - rect.top) / rect.height * 100) + '%');
    });
  });
})();

// ---------------------------------------------------------------
// THEME PICKER
// Writes a single number — --accent-h — and the whole stylesheet
// resolves from it. Because the rail is painted with the same
// hsl(h, --accent-s, --accent-l) formula the page uses, the colour
// under your finger IS the colour you get; there's no conversion step
// where the two could disagree.
// Persists in localStorage, with a reset back to the original purple.
// ---------------------------------------------------------------
(function(){
  const KEY = 'gt-accent-h';
  const DEFAULT_H = 291;
  const picks = Array.from(document.querySelectorAll('[data-theme-pick]'));
  if(!picks.length) return;

  const root = document.documentElement;
  let hue = DEFAULT_H;

  function paint(h, save){
    hue = ((h % 360) + 360) % 360;
    root.style.setProperty('--accent-h', hue);
    picks.forEach(p=>{
      const handle = p.querySelector('[data-theme-handle]');
      const val = p.querySelector('[data-theme-val]');
      const rail = p.querySelector('[data-theme-rail]');
      if(handle) handle.style.setProperty('--pos', (hue/360*100).toFixed(2) + '%');
      if(val) val.textContent = Math.round(hue) + '\u00B0';
      if(rail) rail.setAttribute('aria-valuenow', Math.round(hue));
    });
    if(save){ try{ localStorage.setItem(KEY, String(Math.round(hue))); }catch(e){} }
  }

  picks.forEach(pick=>{
    const trigger = pick.querySelector('.theme-trigger');
    const panel   = pick.querySelector('.theme-panel');
    const rail    = pick.querySelector('[data-theme-rail]');
    const reset   = pick.querySelector('[data-theme-reset]');
    const mobileOverlay = pick.closest('#navOverlay');
    const canInteract = ()=> !mobileOverlay || mobileOverlay.classList.contains('open');

    if(trigger){
      trigger.addEventListener('click', (e)=>{
        e.stopPropagation();
        const open = pick.classList.toggle('open');
        trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
        // only one panel open at a time
        picks.forEach(o=>{ if(o !== pick){ o.classList.remove('open');
          const t = o.querySelector('.theme-trigger'); if(t) t.setAttribute('aria-expanded','false'); } });
      });
    }
    if(panel) panel.addEventListener('click', (e)=> e.stopPropagation());

    if(rail){
      const fromEvent = (e)=>{
        const r = rail.getBoundingClientRect();
        const x = Math.min(r.width, Math.max(0, e.clientX - r.left));
        paint((x / r.width) * 360, true);
      };
      // pointer events cover mouse, pen and touch with one path — and
      // capture means a drag keeps working past the edge of the rail
      rail.addEventListener('pointerdown', (e)=>{
        if(!canInteract()) return;
        e.preventDefault();
        pick.classList.add('dragging');
        rail.setPointerCapture && rail.setPointerCapture(e.pointerId);
        fromEvent(e);
      });
      rail.addEventListener('pointermove', (e)=>{
        if(canInteract() && pick.classList.contains('dragging')) fromEvent(e);
      });
      const end = (e)=>{
        pick.classList.remove('dragging');
        if(e && e.pointerId != null && rail.releasePointerCapture){
          try{ rail.releasePointerCapture(e.pointerId); }catch(err){}
        }
      };
      rail.addEventListener('pointerup', end);
      rail.addEventListener('pointercancel', end);
      rail.addEventListener('lostpointercapture', end);

      rail.addEventListener('keydown', (e)=>{
        if(!canInteract()) return;
        const step = e.shiftKey ? 15 : 5;
        if(e.key === 'ArrowRight' || e.key === 'ArrowUp'){ e.preventDefault(); paint(hue + step, true); }
        if(e.key === 'ArrowLeft'  || e.key === 'ArrowDown'){ e.preventDefault(); paint(hue - step, true); }
        if(e.key === 'Home'){ e.preventDefault(); paint(DEFAULT_H, true); }
      });
    }

    if(reset) reset.addEventListener('click', ()=> paint(DEFAULT_H, true));
  });

  document.addEventListener('click', ()=>{
    picks.forEach(p=>{
      p.classList.remove('open');
      const t = p.querySelector('.theme-trigger'); if(t) t.setAttribute('aria-expanded','false');
    });
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') picks.forEach(p=> p.classList.remove('open'));
  });

  let saved = null;
  try{ saved = localStorage.getItem(KEY); }catch(e){}
  paint(saved !== null && !isNaN(parseFloat(saved)) ? parseFloat(saved) : DEFAULT_H, false);
})();

// ---------------------------------------------------------------
// NAV HOVER INDICATOR
// One pill that travels between items, instead of five independent
// highlights. A single moving object is much easier to track, so
// "which one am I on?" stops being a question. Falls back silently
// if the markup isn't there.
// ---------------------------------------------------------------
(function(){
  const list = document.getElementById('navLinks');
  if(!list) return;
  if(!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;

  const ind = document.createElement('span');
  ind.className = 'nav-ind';
  ind.setAttribute('aria-hidden','true');
  list.appendChild(ind);

  const items = Array.from(list.querySelectorAll('a'));

  function moveTo(el){
    const lr = list.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    ind.style.setProperty('--w', r.width + 'px');
    ind.style.setProperty('--x', (r.left - lr.left) + 'px');
    list.classList.add('ind-on');
  }
  function rest(){
    // when nothing is hovered, park on the active section's item
    const active = items.find(a=> a.classList.contains('active'));
    if(active) moveTo(active);
    else list.classList.remove('ind-on');
  }

  items.forEach(a=>{
    a.addEventListener('pointerenter', ()=> moveTo(a));
    a.addEventListener('focus', ()=> moveTo(a));
  });
  list.addEventListener('pointerleave', rest);
  window.addEventListener('resize', rest);
  document.addEventListener('scroll', rest, {passive:true});
  // the active class is written by main.js on first scroll pass
  requestAnimationFrame(rest);
})();

// ---------------------------------------------------------------
// LIVE NEGATIVE SPACE
// A handful of slow drifting nodes in the empty margins of a section,
// connected by hairlines when they come close, and gently pushed by
// the cursor. Sits behind everything, never over text, capped at a
// small node count, and paused whenever it's off screen.
// ---------------------------------------------------------------
(function(){
  const host = document.getElementById('sobre');
  if(!host) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // not worth the frame budget on phones, where the section is narrow anyway
  if(window.innerWidth < 900) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'field';
  canvas.setAttribute('aria-hidden','true');
  host.insertBefore(canvas, host.firstChild);

  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0, h = 0, raf = null, running = false;
  let mx = -999, my = -999;

  const NODES = 26;
  const pts = Array.from({length:NODES}, ()=>({
    x: Math.random(), y: Math.random(),
    vx: (Math.random()-.5) * 0.00035,
    vy: (Math.random()-.5) * 0.00035
  }));

  function resize(){
    const r = host.getBoundingClientRect();
    w = r.width; h = r.height;
    canvas.width = Math.max(1, w*dpr); canvas.height = Math.max(1, h*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }

  function hue(){
    const v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--accent-h'));
    return isNaN(v) ? 291 : v;
  }

  function draw(){
    ctx.clearRect(0,0,w,h);
    const baseHue = hue();

    pts.forEach(p=>{
      p.x += p.vx; p.y += p.vy;
      if(p.x < 0 || p.x > 1) p.vx *= -1;
      if(p.y < 0 || p.y > 1) p.vy *= -1;
    });

    // hairlines between near neighbours — the structure, not the dots,
    // is what makes the space read as alive
    for(let i=0;i<pts.length;i++){
      const ax = pts[i].x*w, ay = pts[i].y*h;
      for(let j=i+1;j<pts.length;j++){
        const bx = pts[j].x*w, by = pts[j].y*h;
        const d = Math.hypot(ax-bx, ay-by);
        if(d < 150){
          ctx.strokeStyle = `hsl(${baseHue} 60% 60% / ${(1 - d/150) * 0.13})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(ax,ay); ctx.lineTo(bx,by); ctx.stroke();
        }
      }
      // the cursor nudges nearby nodes without ever capturing them
      const dm = Math.hypot(ax-mx, ay-my);
      const lit = dm < 190 ? (1 - dm/190) : 0;
      ctx.fillStyle = `hsl(${baseHue} 60% ${60 + lit*25}% / ${0.16 + lit*0.5})`;
      ctx.beginPath(); ctx.arc(ax, ay, 1.3 + lit*1.9, 0, Math.PI*2); ctx.fill();
      if(lit > 0){ pts[i].x += (ax-mx)/w * lit * 0.0016; pts[i].y += (ay-my)/h * lit * 0.0016; }
    }
    raf = requestAnimationFrame(draw);
  }

  function start(){ if(!running){ running = true; raf = requestAnimationFrame(draw); } }
  function stop(){ running = false; if(raf){ cancelAnimationFrame(raf); raf = null; } }

  resize();
  window.addEventListener('resize', resize);
  host.addEventListener('pointermove', (e)=>{
    const r = host.getBoundingClientRect();
    mx = e.clientX - r.left; my = e.clientY - r.top;
  });
  host.addEventListener('pointerleave', ()=>{ mx = -999; my = -999; });

  if('IntersectionObserver' in window){
    new IntersectionObserver((es)=> es.forEach(e=> e.isIntersecting ? start() : stop()),
      {threshold:0.02}).observe(host);
  } else start();
  document.addEventListener('visibilitychange', ()=>{ if(document.hidden) stop(); });
})();
