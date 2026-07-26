// =========================================================
// HIDDEN INTERACTIONS
//
// Four of them, all optional and all silent about themselves. None
// blocks navigation, changes layout, or plays audio without being
// asked. Each references a different part of the work: the timeline,
// the mixing desk, the transient, the credit roll.
// =========================================================

// ---- 1. REC → a real running timecode -------------------------------
// Clicking the REC label on the hero frame starts a timecode counting
// at 25fps, exactly like a camera would. Click again to stop it.
(function(){
  const label = document.querySelector('.pip-label');
  const code = document.querySelector('.pip-code');
  if(!label || !code) return;

  const left = code.querySelector('span');
  if(!left) return;

  const original = left.textContent;
  let raf = null, t0 = 0;

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

  label.style.cursor = 'pointer';
  label.setAttribute('title', 'REC');
  label.addEventListener('click', ()=>{
    if(raf){
      cancelAnimationFrame(raf);
      raf = null;
      left.textContent = original;
      label.classList.remove('rolling');
    } else {
      t0 = performance.now();
      label.classList.add('rolling');
      raf = requestAnimationFrame(tick);
    }
  });
})();

// ---- 2. Transients on the waveform ----------------------------------
// Clicking anywhere across the hero sends a spike through the scope,
// the way a drum hit reads on a meter.
(function(){
  const hero = document.getElementById('hero');
  if(!hero) return;
  hero.addEventListener('click', (e)=>{
    // don't fire when the visitor is actually using a control
    if(e.target.closest('a, button, img, video')) return;
    if(window.__scope && window.__scope.transient) window.__scope.transient();
  });
})();

// ---- 3. "GONJAY" → studio mode --------------------------------------
// Typing the artist alias anywhere on the page pushes the gain up on
// the scope and briefly lifts the accent colours, then settles back.
// A toast names what happened so it never feels like a glitch.
(function(){
  const SEQ = 'gonjay';
  let buf = '';
  let active = false;

  function toast(text){
    const el = document.createElement('div');
    el.className = 'egg-toast';
    el.textContent = text;
    document.body.appendChild(el);
    requestAnimationFrame(()=> el.classList.add('in'));
    setTimeout(()=>{
      el.classList.remove('in');
      setTimeout(()=> el.remove(), 400);
    }, 2600);
  }

  function toggleStudio(){
    active = !active;
    document.body.classList.toggle('studio-mode', active);
    if(window.__scope && window.__scope.setGain) window.__scope.setGain(active ? 2.2 : 1);
    toast(active ? 'STUDIO MODE — ON' : 'STUDIO MODE — OFF');
  }

  document.addEventListener('keydown', (e)=>{
    // ignore while typing in a field, and ignore modifier combos
    if(e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if(tag === 'input' || tag === 'textarea') return;
    if(e.key.length !== 1) return;

    buf = (buf + e.key.toLowerCase()).slice(-SEQ.length);
    if(buf === SEQ){ buf = ''; toggleStudio(); }
  });
})();

// ---- 4. A note in the console ---------------------------------------
// For the one recruiter or developer who opens devtools.
(function(){
  if(!window.console || !console.log) return;
  const head = 'color:#8c09ad;font-weight:bold;font-size:13px';
  const body = 'color:#A79A87;font-size:11px';
  console.log('%cGONÇALO TERROSO', head);
  console.log('%cMultimedia Producer · Porto, PT\nEste site foi construído à mão: HTML, CSS e JavaScript, sem frameworks.\nSe chegaste até aqui, experimenta escrever "gonjay".\ngoncaloterroso25@gmail.com', body);
})();
