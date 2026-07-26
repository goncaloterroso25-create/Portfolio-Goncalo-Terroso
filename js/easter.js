// =========================================================
// HIDDEN INTERACTIONS
//
// Five of them. All optional, none announced, none blocking. Every one
// cleans up after itself: nothing is left in the DOM, no timer keeps
// running, and no overlay ever sits above navigation or content.
// Silent throughout — nothing here plays audio.
// =========================================================

// ---- 1. REC → viewfinder ---------------------------------------------
// Tapping REC turns the hero frame into a recording monitor: framing
// brackets ease in at the corners, a thin reticle finds centre, and a
// timecode runs at 25fps in the corner. No text explains it; the
// interface is the message. Tapping again returns the frame exactly as
// it was. Everything lives inside .pip-frame, which already clips its
// children, so nothing can escape over the page.
(function(){
  const label = document.querySelector('.pip-label');
  const frame = document.querySelector('.pip-frame');
  if(!label || !frame) return;

  let raf = null, t0 = 0, node = null, live = false;

  const pad = (n)=> String(n).padStart(2, '0');

  function build(){
    const el = document.createElement('div');
    el.className = 'vf';
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML =
      '<span class="vf-corner vf-tl"></span><span class="vf-corner vf-tr"></span>' +
      '<span class="vf-corner vf-bl"></span><span class="vf-corner vf-br"></span>' +
      '<span class="vf-reticle"></span>' +
      '<span class="vf-tc">00:00:00:00</span>' +
      '<span class="vf-meta">25 FPS</span>';
    return el;
  }

  function tick(now){
    if(!node){ raf = null; return; }
    const e = (now - t0) / 1000;
    const tc = node.querySelector('.vf-tc');
    if(tc){
      tc.textContent =
        pad(Math.floor(e/3600)) + ':' +
        pad(Math.floor(e/60)%60) + ':' +
        pad(Math.floor(e)%60) + ':' +
        pad(Math.floor((e%1)*25));
    }
    raf = requestAnimationFrame(tick);
  }

  function stopRaf(){
    if(raf){ cancelAnimationFrame(raf); raf = null; }
  }

  function open(){
    if(live) return;
    live = true;
    // guard against any earlier node surviving a rapid double-tap
    frame.querySelectorAll('.vf').forEach(n=> n.remove());
    node = build();
    frame.appendChild(node);
    // next frame, so the entrance transition actually runs
    requestAnimationFrame(()=> node && node.classList.add('on'));
    label.classList.add('rolling');
    t0 = performance.now();
    stopRaf();
    raf = requestAnimationFrame(tick);
  }

  function close(){
    if(!live) return;
    live = false;
    stopRaf();
    label.classList.remove('rolling');
    const dying = node;
    node = null;
    if(!dying) return;
    dying.classList.remove('on');
    // remove only after the fade, and defensively even if it's missed
    setTimeout(()=>{ if(dying && dying.parentNode) dying.remove(); }, 420);
  }

  label.style.cursor = 'pointer';
  label.setAttribute('role', 'button');
  label.setAttribute('tabindex', '0');
  label.setAttribute('aria-label', 'REC');
  label.addEventListener('click', ()=> live ? close() : open());
  label.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); live ? close() : open(); }
  });
  // never leave a timer running in a hidden tab
  document.addEventListener('visibilitychange', ()=>{
    if(document.hidden) stopRaf();
    else if(live && !raf) raf = requestAnimationFrame(tick);
  });
})();

// ---- 2. CAM_01 → colour grade ----------------------------------------
// The label under the frame cycles the photo through a few grades, the
// way you'd audition looks in post. Purely CSS filters on the image,
// reset cleanly on the last step of the cycle.
(function(){
  const code = document.querySelector('.pip-code');
  const img = document.querySelector('.pip-frame img');
  if(!code || !img) return;
  const cam = code.querySelector('span');
  if(!cam) return;

  const GRADES = [
    { name:'CAM_01', filter:'' },
    { name:'TEAL_ORANGE', filter:'saturate(1.35) contrast(1.12) hue-rotate(-8deg)' },
    { name:'BLEACH', filter:'saturate(0.25) contrast(1.35) brightness(1.06)' },
    { name:'NIGHT', filter:'saturate(0.85) contrast(1.15) brightness(0.86) hue-rotate(190deg)' }
  ];
  let i = 0;
  const baseFilter = getComputedStyle(img).filter;

  cam.style.cursor = 'pointer';
  cam.setAttribute('role', 'button');
  cam.setAttribute('tabindex', '0');

  function step(){
    i = (i + 1) % GRADES.length;
    const g = GRADES[i];
    // index 0 restores the stylesheet's own look rather than guessing at it
    img.style.filter = i === 0 ? '' : g.filter;
    img.style.transition = 'filter .5s ease';
    cam.textContent = g.name;
  }
  cam.addEventListener('click', step);
  cam.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); step(); }
  });
  void baseFilter;
})();

// ---- 3. Vinyl → spin it by hand --------------------------------------
// Silent, entirely visual. Tap to spin up or wind down; drag across the
// disc to push it faster, slow it, or send it backwards, and it keeps
// the momentum you gave it before easing back to speed. A marker dot
// makes the rotation readable — concentric grooves alone would look
// motionless.
(function(){
  const discs = document.querySelectorAll('.single-vinyl');
  if(!discs.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const CRUISE = 2.6; // degrees per frame at rest speed

  discs.forEach(disc=>{
    const card = disc.closest('.single-card') || disc.parentElement;
    let angle = 0, vel = 0, target = 0;
    let playing = false, raf = null;
    let dragging = false, lastX = 0, moved = 0;

    disc.style.cursor = 'grab';
    disc.setAttribute('role', 'button');
    disc.setAttribute('tabindex', '0');
    disc.setAttribute('aria-label', 'Disco');

    function render(){
      disc.style.transform = 'rotate(' + angle.toFixed(2) + 'deg)';
    }

    function frame(){
      if(!dragging){
        // ease toward the target speed; when stopped this is a spin-down
        vel += (target - vel) * 0.045;
      }
      angle = (angle + vel) % 360;
      render();

      const settled = !playing && Math.abs(vel) < 0.02;
      if(settled){
        vel = 0;
        raf = null;
        return;   // stop the loop entirely once it's at rest
      }
      raf = requestAnimationFrame(frame);
    }

    function kick(){
      if(!raf) raf = requestAnimationFrame(frame);
    }

    function setPlaying(on){
      playing = on;
      target = on ? CRUISE : 0;
      if(card) card.classList.toggle('vinyl-live', on);
      if(reduceMotion){
        // no continuous spinning; just show the live state
        vel = 0; target = 0;
        return;
      }
      kick();
    }

    disc.addEventListener('pointerdown', (e)=>{
      dragging = true; moved = 0; lastX = e.clientX;
      disc.setPointerCapture && disc.setPointerCapture(e.pointerId);
      disc.style.cursor = 'grabbing';
    });

    disc.addEventListener('pointermove', (e)=>{
      if(!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      moved += Math.abs(dx);
      if(reduceMotion) return;
      angle += dx * 0.9;
      vel = dx * 0.9;      // carry the throw as momentum
      render();
      kick();
    });

    function endDrag(e){
      if(!dragging) return;
      dragging = false;
      disc.style.cursor = 'grab';
      if(e && e.pointerId != null && disc.releasePointerCapture){
        try { disc.releasePointerCapture(e.pointerId); } catch(err){}
      }
      // a drag under a few pixels counts as a tap
      if(moved < 4){ setPlaying(!playing); }
      else { if(!playing) setPlaying(true); else kick(); }
    }

    disc.addEventListener('pointerup', endDrag);
    disc.addEventListener('pointercancel', endDrag);
    disc.addEventListener('lostpointercapture', endDrag);

    disc.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); setPlaying(!playing); }
    });

    // a disc scrolled out of view has no business animating
    if('IntersectionObserver' in window){
      new IntersectionObserver((entries)=>{
        entries.forEach(en=>{
          if(!en.isIntersecting && raf){ cancelAnimationFrame(raf); raf = null; }
          else if(en.isIntersecting && playing && !raf){ kick(); }
        });
      }, {threshold:0}).observe(disc);
    }
  });
})();

// ---- 4. "GONJAY" → studio mode ---------------------------------------
// Typing the artist alias pushes the page into a louder state: the
// waveform surges and shifts hue, and a VU meter rises in the corner
// where it can't cover anything. Typing it again puts it back.
(function(){
  const SEQ = 'gonjay';
  let buf = '', active = false, meter = null;

  function buildMeter(){
    const el = document.createElement('div');
    el.className = 'vu-meter';
    el.setAttribute('aria-hidden', 'true');
    for(let i=0;i<7;i++){
      const bar = document.createElement('span');
      bar.style.animationDelay = (i * 0.09) + 's';
      el.appendChild(bar);
    }
    document.body.appendChild(el);
    return el;
  }

  function toggle(){
    active = !active;
    document.body.classList.toggle('studio-mode', active);
    if(window.__scope){
      if(window.__scope.setGain) window.__scope.setGain(active ? 2.4 : 1);
      if(window.__scope.setSpeed) window.__scope.setSpeed(active ? 1.8 : 1);
    }
    if(active){
      document.querySelectorAll('.vu-meter').forEach(n=> n.remove());
      meter = buildMeter();
      requestAnimationFrame(()=> meter && meter.classList.add('in'));
    } else if(meter){
      const dying = meter;
      meter = null;
      dying.classList.remove('in');
      setTimeout(()=>{ if(dying.parentNode) dying.remove(); }, 380);
    }
  }

  document.addEventListener('keydown', (e)=>{
    if(e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if(tag === 'input' || tag === 'textarea') return;
    if(e.key.length !== 1) return;
    buf = (buf + e.key.toLowerCase()).slice(-SEQ.length);
    if(buf === SEQ){ buf = ''; toggle(); }
  });
})();

// ---- 5. The name, re-rendered ----------------------------------------
// Clicking TERROSO re-resolves it letter by letter, the way type lands
// in a motion graphics build. It runs once per click, restores the exact
// original string, and ignores repeat clicks while it's mid-flight.
(function(){
  const el = document.querySelector('.hero h1 .accent');
  if(!el) return;

  const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const original = el.textContent;
  let running = false;

  el.style.cursor = 'pointer';
  el.setAttribute('role', 'button');
  el.setAttribute('tabindex', '0');
  el.setAttribute('aria-label', original);

  function run(){
    if(running) return;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    running = true;

    const chars = original.split('');
    const settleAt = chars.map((_, i)=> 6 + i * 3);   // frames until each letter locks
    let f = 0;
    const total = Math.max.apply(null, settleAt) + 2;

    (function step(){
      el.textContent = chars.map((c, i)=>
        f >= settleAt[i] ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0]
      ).join('');
      f++;
      if(f <= total){
        requestAnimationFrame(step);
      } else {
        el.textContent = original;   // always end on the real string
        running = false;
      }
    })();
  }

  el.addEventListener('click', run);
  el.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); run(); }
  });
})();

// ---- 6. A note in the console ----------------------------------------
(function(){
  if(!window.console || !console.log) return;
  console.log('%cGONÇALO TERROSO', 'color:#8c09ad;font-weight:bold;font-size:13px');
  console.log('%cMultimedia Producer · Porto, PT\nFeito à mão: HTML, CSS e JavaScript, sem frameworks.\nHá coisas escondidas por aqui.\ngoncaloterroso25@gmail.com', 'color:#A79A87;font-size:11px');
})();
