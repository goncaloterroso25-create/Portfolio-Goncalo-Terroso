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

// ---- 5. TERROSO → kinetic type ---------------------------------------
// The centrepiece interaction. Each letter is its own element and
// responds to how close the cursor is and how fast it's moving: near
// letters lift toward the viewer, stretch in weight and widen their
// tracking, while their neighbours ease off in proportion. Nothing
// snaps — every value is spring-eased on its own frame loop, so
// sweeping across it feels like dragging a hand through water.
//
// The letters never move far enough to break the word, and the whole
// thing settles back to a clean, legible wordmark the moment the
// cursor leaves. On touch it becomes a one-shot ripple instead.
(function(){
  const host = document.querySelector('.hero h1 .accent');
  if(!host) return;

  const word = host.textContent.trim();
  const canHover = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // rebuild as individual letters, keeping the word readable to
  // screen readers and to anything that copies the text
  host.textContent = '';
  host.setAttribute('aria-label', word);
  const letters = word.split('').map((ch, i)=>{
    const el = document.createElement('span');
    el.className = 'kt';
    el.textContent = ch;
    el.setAttribute('aria-hidden', 'true');
    el.style.setProperty('--i', i);
    host.appendChild(el);
    return { el, i, cur:0, target:0 };
  });

  if(reduce){
    // keep the letters (they're the markup now) but no continuous motion
    host.classList.add('kt-static');
    return;
  }

  let raf = null, active = false;
  let pointerX = -1, lastX = -1, speed = 0;

  function frame(){
    let moving = false;
    const rect = host.getBoundingClientRect();

    letters.forEach(L=>{
      if(active && pointerX >= 0){
        const b = L.el.getBoundingClientRect();
        const cx = b.left + b.width/2;
        // falloff: 1 at the cursor, easing to 0 about 170px away
        const d = Math.abs(pointerX - cx);
        L.target = Math.max(0, 1 - d / 170);
      } else {
        L.target = 0;
      }
      // spring toward the target rather than jumping — this is what
      // makes a fast sweep leave a trailing wave behind the cursor
      L.cur += (L.target - L.cur) * 0.16;
      if(Math.abs(L.target - L.cur) > 0.001) moving = true;

      const v = L.cur;
      if(v > 0.002){
        // weight and width ride the falloff; the lift is deliberately
        // small so the baseline still reads as a single word
        L.el.style.setProperty('--v', v.toFixed(3));
        L.el.style.setProperty('--lift', (-v * 14).toFixed(2) + 'px');
        L.el.style.setProperty('--track', (v * 5).toFixed(2) + 'px');
        // a touch of extra scale when the cursor is moving quickly
        L.el.style.setProperty('--sc', (1 + v * (0.10 + speed * 0.035)).toFixed(3));
      } else {
        L.el.style.setProperty('--v', '0');
        L.el.style.setProperty('--lift', '0px');
        L.el.style.setProperty('--track', '0px');
        L.el.style.setProperty('--sc', '1');
      }
    });

    speed *= 0.88;
    void rect;

    if(moving || active){
      raf = requestAnimationFrame(frame);
    } else {
      raf = null;
    }
  }
  function kick(){ if(!raf) raf = requestAnimationFrame(frame); }

  if(canHover){
    host.addEventListener('pointerenter', ()=>{ active = true; host.classList.add('kt-live'); kick(); });
    host.addEventListener('pointermove', (e)=>{
      if(lastX >= 0) speed = Math.min(3, speed + Math.abs(e.clientX - lastX) * 0.06);
      lastX = e.clientX;
      pointerX = e.clientX;
      active = true;
      kick();
    });
    host.addEventListener('pointerleave', ()=>{
      active = false; pointerX = -1; lastX = -1;
      host.classList.remove('kt-live');
      kick();   // let the spring settle everything back to zero
    });
  } else {
    // touch: a single ripple travelling through the word on tap
    host.style.cursor = 'pointer';
    host.addEventListener('click', ()=>{
      if(host.classList.contains('kt-ripple')) return;
      host.classList.add('kt-ripple');
      setTimeout(()=> host.classList.remove('kt-ripple'), 1100);
    });
  }
})();

// ---- 6. A note in the console ----------------------------------------
(function(){
  if(!window.console || !console.log) return;
  console.log('%cGONÇALO TERROSO', 'color:#8c09ad;font-weight:bold;font-size:13px');
  console.log('%cMultimedia Producer · Porto, PT\nFeito à mão: HTML, CSS e JavaScript, sem frameworks.\nHá coisas escondidas por aqui.\ngoncaloterroso25@gmail.com', 'color:#A79A87;font-size:11px');
})();
