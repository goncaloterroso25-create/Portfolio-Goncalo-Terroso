// =========================================================
// HIDDEN INTERACTIONS
//
// All optional, all silent about themselves, none blocks navigation
// or plays sound without a direct click. Each references a different
// tool of the trade: the slate, the mixing desk, the turntable, the
// credit roll, the transient.
// =========================================================

// ---- shared toast helper ---------------------------------------------
function eggToast(text, ms){
  const el = document.createElement('div');
  el.className = 'egg-toast';
  el.textContent = text;
  document.body.appendChild(el);
  requestAnimationFrame(()=> el.classList.add('in'));
  setTimeout(()=>{
    el.classList.remove('in');
    setTimeout(()=> el.remove(), 400);
  }, ms || 2400);
}

// ---- 1. REC → a clapperboard moment, then a real running timecode ----
// First click: a slate claps shut over the frame, like marking a take.
// Once it lifts, a timecode starts rolling at 25fps and the frame gets
// a quiet recording ring. Click again to call cut.
(function(){
  const label = document.querySelector('.pip-label');
  const code = document.querySelector('.pip-code');
  const frame = document.querySelector('.pip-frame');
  if(!label || !code || !frame) return;

  const left = code.querySelector('span');
  if(!left) return;

  const original = left.textContent;
  let raf = null, t0 = 0, take = 1;

  function pad(n, w){ return String(n).padStart(w || 2, '0'); }

  function tick(now){
    const elapsed = (now - t0) / 1000;
    const h = Math.floor(elapsed / 3600);
    const m = Math.floor(elapsed / 60) % 60;
    const s = Math.floor(elapsed) % 60;
    const f = Math.floor((elapsed % 1) * 25); // 25 fps
    left.textContent = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
    raf = requestAnimationFrame(tick);
  }

  function clapperboard(onDone){
    const board = document.createElement('div');
    board.className = 'clapper';
    board.innerHTML = `
      <div class="clapper-top"><span></span><span></span><span></span><span></span><span></span></div>
      <div class="clapper-body">
        <div class="clapper-row"><b>GT</b><span>PORTFÓLIO</span></div>
        <div class="clapper-row"><b>TAKE</b><span>${pad(take,2)}</span></div>
      </div>`;
    frame.appendChild(board);
    requestAnimationFrame(()=> board.classList.add('clap'));
    setTimeout(()=>{
      board.classList.add('gone');
      setTimeout(()=>{ board.remove(); if(onDone) onDone(); }, 260);
    }, 620);
  }

  label.style.cursor = 'pointer';
  label.setAttribute('title', 'REC');
  label.addEventListener('click', ()=>{
    if(raf){
      cancelAnimationFrame(raf);
      raf = null;
      left.textContent = original;
      label.classList.remove('rolling');
      frame.classList.remove('recording');
      eggToast('CORTE.');
    } else {
      label.classList.add('slating');
      clapperboard(()=>{
        label.classList.remove('slating');
        frame.classList.add('recording');
        label.classList.add('rolling');
        t0 = performance.now();
        raf = requestAnimationFrame(tick);
        take += 1;
      });
    }
  });
})();

// ---- 2. Transients on the waveform ------------------------------------
// Clicking anywhere across the hero sends a spike through the scope,
// the way a drum hit reads on a meter.
(function(){
  const hero = document.getElementById('hero');
  if(!hero) return;
  hero.addEventListener('click', (e)=>{
    if(e.target.closest('a, button, img, video, .clapper')) return;
    if(window.__scope && window.__scope.transient) window.__scope.transient();
  });
})();

// ---- 3. "GONJAY" → studio mode, unmistakably on ------------------------
// Typing the artist alias pushes the whole page into a louder, faster,
// hue-shifting state: the waveform surges, a VU meter appears, and the
// tab title itself starts flickering the mode name — nothing subtle.
(function(){
  const SEQ = 'gonjay';
  let buf = '';
  let active = false;
  let meterEl = null;
  let titleTimer = null;
  const originalTitle = document.title;

  function buildMeter(){
    const wrap = document.createElement('div');
    wrap.className = 'vu-meter';
    wrap.setAttribute('aria-hidden', 'true');
    for(let i=0;i<7;i++){
      const bar = document.createElement('span');
      bar.style.animationDelay = (i * 0.09) + 's';
      wrap.appendChild(bar);
    }
    document.body.appendChild(wrap);
    return wrap;
  }

  function toggleStudio(){
    active = !active;
    document.body.classList.toggle('studio-mode', active);

    if(window.__scope){
      if(window.__scope.setGain) window.__scope.setGain(active ? 2.4 : 1);
      if(window.__scope.setSpeed) window.__scope.setSpeed(active ? 1.8 : 1);
    }

    if(active){
      meterEl = buildMeter();
      requestAnimationFrame(()=> meterEl.classList.add('in'));
      let flip = false;
      titleTimer = setInterval(()=>{
        document.title = flip ? originalTitle : 'STUDIO MODE — GANHO NO MÁXIMO';
        flip = !flip;
      }, 1400);
      eggToast('STUDIO MODE — ON — ganho, ritmo e cor no máximo', 2800);
    } else {
      if(meterEl){ meterEl.classList.remove('in'); setTimeout(()=> meterEl && meterEl.remove(), 350); meterEl = null; }
      if(titleTimer){ clearInterval(titleTimer); titleTimer = null; }
      document.title = originalTitle;
      eggToast('STUDIO MODE — OFF');
    }
  }

  document.addEventListener('keydown', (e)=>{
    if(e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if(tag === 'input' || tag === 'textarea') return;
    if(e.key.length !== 1) return;

    buf = (buf + e.key.toLowerCase()).slice(-SEQ.length);
    if(buf === SEQ){ buf = ''; toggleStudio(); }
  });
})();

// ---- 4. The vinyl spins, and scratches ---------------------------------
// Every little vinyl icon next to a track is a real control: click it
// and it spins up with a short synthesised scratch, built entirely with
// the Web Audio API — no audio file, and it only ever plays on a
// direct click, never on its own.
(function(){
  const discs = document.querySelectorAll('.single-vinyl');
  if(!discs.length) return;

  let ctx = null;
  function scratch(){
    try{
      if(!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
      if(ctx.state === 'suspended') ctx.resume();

      const dur = 0.22;
      const buffer = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for(let i=0;i<data.length;i++) data[i] = (Math.random() * 2 - 1);

      const src = ctx.createBufferSource();
      src.buffer = buffer;
      src.playbackRate.setValueAtTime(1.6, ctx.currentTime);
      src.playbackRate.exponentialRampToValueAtTime(0.35, ctx.currentTime + dur);

      const bandpass = ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(1400, ctx.currentTime);
      bandpass.Q.value = 0.8;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.22, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);

      src.connect(bandpass).connect(gain).connect(ctx.destination);
      src.start();
    } catch(e){ /* Web Audio unavailable — the spin still plays silently */ }
  }

  discs.forEach(disc=>{
    disc.style.cursor = 'pointer';
    disc.addEventListener('click', ()=>{
      disc.classList.remove('spin');
      void disc.offsetWidth; // restart the animation on repeat clicks
      disc.classList.add('spin');
      scratch();
    });
  });
})();

// ---- 5. Reach the footer fast → a quiet "roll credits" nod -------------
// Scrolling all the way to the bottom within a few seconds of arriving
// on the page (rather than idly settling there) briefly rolls a short
// production-style credit line past the footer, like the end of a cut.
(function(){
  const footer = document.querySelector('footer');
  if(!footer || !('IntersectionObserver' in window)) return;
  const start = performance.now();
  let shown = false;

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting || shown) return;
      const elapsed = performance.now() - start;
      if(elapsed > 6000) return; // only rewards a deliberately fast scroll
      shown = true;
      const roll = document.createElement('div');
      roll.className = 'credit-roll';
      roll.textContent = 'REALIZAÇÃO, EDIÇÃO E SOM — GONÇALO TERROSO';
      footer.appendChild(roll);
      requestAnimationFrame(()=> roll.classList.add('in'));
      setTimeout(()=>{ roll.classList.remove('in'); setTimeout(()=> roll.remove(), 500); }, 3200);
      io.disconnect();
    });
  }, {threshold:0.6});
  io.observe(footer);
})();

// ---- 6. A note in the console ------------------------------------------
(function(){
  if(!window.console || !console.log) return;
  const head = 'color:#8c09ad;font-weight:bold;font-size:13px';
  const body = 'color:#A79A87;font-size:11px';
  console.log('%cGONÇALO TERROSO', head);
  console.log('%cMultimedia Producer · Porto, PT\nEste site foi construído à mão: HTML, CSS e JavaScript, sem frameworks.\nHá coisas escondidas aqui — o REC no monitor, os vinis, e escrever "gonjay".\ngoncaloterroso25@gmail.com', body);
})();
