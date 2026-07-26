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

  // three overlapping lines in the site's own accent colours — a quiet
  // nod to the three project categories (music / video / design)
  const lines = [
    { color:'139,9,173',  amp:0.16, speed:0.55, freq:1.6, phase:0,   width:1.6 },
    { color:'75,184,196', amp:0.10, speed:0.42, freq:2.3, phase:2.1, width:1.2 },
    { color:'156,143,224',amp:0.07, speed:0.68, freq:1.1, phase:4.2, width:1  }
  ];
  const baseAmps = lines.map(l=> l.amp);
  const baseSpeeds = lines.map(l=> l.speed);

  function resize(){
    const rect = wrap.getBoundingClientRect();
    w = rect.width; h = rect.height;
    canvas.width = Math.max(1, w * dpr);
    canvas.height = Math.max(1, h * dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }

  function draw(){
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
      ctx.strokeStyle = `rgba(${line.color},0.5)`;
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
// CUSTOM CURSOR — desktop / fine-pointer only. A small dot plus a
// thin ring that grows over anything clickable, and turns into a
// filled label pill ("Ver", "Ouvir"...) over elements that opt in
// via [data-cursor]. Never blurs the content underneath.
// ---------------------------------------------------------------
(function(){
  const canHover = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!canHover || reduceMotion) return;

  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  const label = document.getElementById('cursorLabel');
  if(!dot || !ring || !label) return;

  let mx = window.innerWidth/2, my = window.innerHeight/2;
  let rx = mx, ry = my;
  let ready = false;

  function onMove(e){
    mx = e.clientX; my = e.clientY;
    if(!ready){ ready = true; document.body.classList.add('cursor-ready'); }
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
  }
  window.addEventListener('pointermove', onMove, {passive:true});

  function ringLoop(){
    rx += (mx - rx) * 0.2;
    ry += (my - ry) * 0.2;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(ringLoop);
  }
  requestAnimationFrame(ringLoop);

  const hoverTargets = 'a, button, .js-lightbox, input, textarea, [data-cursor]';
  document.addEventListener('mouseover', (e)=>{
    const labelTarget = e.target.closest('[data-cursor]');
    const plainTarget = e.target.closest(hoverTargets);
    if(labelTarget){
      label.textContent = labelTarget.dataset.cursor;
      document.body.classList.add('cursor-label-active');
      document.body.classList.remove('cursor-hover');
    } else if(plainTarget){
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', (e)=>{
    if(e.target.closest('[data-cursor]')) document.body.classList.remove('cursor-label-active');
    if(e.target.closest(hoverTargets)) document.body.classList.remove('cursor-hover');
  });

  window.addEventListener('mouseleave', ()=> document.body.classList.remove('cursor-ready'));
  window.addEventListener('mouseenter', ()=> document.body.classList.add('cursor-ready'));

  // ---- Magnetic pull on primary buttons and category filters ----
  // The button leans gently toward the cursor while it's nearby, and
  // springs back once the pointer leaves — a small, tactile detail
  // that makes the main calls-to-action feel alive without being a gimmick.
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
