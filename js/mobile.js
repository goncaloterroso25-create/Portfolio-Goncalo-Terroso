// =========================================================
// GONÇALO TERROSO — PORTFÓLIO
// MOBILE MENU — fullscreen typographic takeover
//
// Independent from js/main.js: the overlay (#navOverlay) and its
// trigger (#navToggle) are their own markup block in index.html, not
// a repositioned copy of the desktop nav. Safe to load at any screen
// size — on desktop the trigger is hidden, so nothing here fires.
// =========================================================
(function(){
  const toggle  = document.getElementById('navToggle');
  const overlay = document.getElementById('navOverlay');
  if(!toggle || !overlay) return;

  const links = Array.from(overlay.querySelectorAll('.nav-overlay-links a'));
  let lastFocused = null;

  function isOpen(){ return overlay.classList.contains('open'); }

  // Mark the section the visitor is currently in, so the menu doubles
  // as a "you are here" indicator rather than a plain list of links.
  function syncActive(){
    const ids = ['#hero','#destaques','#projetos','#sobre','#contacto'];
    let current = ids[0];
    ids.forEach(id=>{
      const sec = document.querySelector(id);
      if(sec && sec.getBoundingClientRect().top < window.innerHeight * 0.5) current = id;
    });
    links.forEach(a=> a.classList.toggle('active', a.getAttribute('href') === current));
  }

  function openMenu(){
    syncActive();
    lastFocused = document.activeElement;
    overlay.classList.add('open');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded','true');
    overlay.setAttribute('aria-hidden','false');
    document.body.classList.add('nav-open');
    // let the wipe start before moving focus, so screen readers and
    // sighted users land at the same moment
    setTimeout(()=>{ if(links[0]) links[0].focus({preventScroll:true}); }, 260);
  }

  function closeMenu(){
    overlay.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded','false');
    overlay.setAttribute('aria-hidden','true');
    document.body.classList.remove('nav-open');
    if(lastFocused && lastFocused.focus) lastFocused.focus({preventScroll:true});
  }

  toggle.addEventListener('click', ()=> isOpen() ? closeMenu() : openMenu());

  document.addEventListener('keydown', (e)=>{
    if(!isOpen()) return;
    if(e.key === 'Escape'){ closeMenu(); return; }
    // keep tabbing inside the overlay while it's open
    if(e.key === 'Tab'){
      const focusables = overlay.querySelectorAll('a, button');
      if(!focusables.length) return;
      const first = focusables[0];
      const last  = focusables[focusables.length - 1];
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
  });

  // Tapping a link closes the menu; the smooth scroll itself is handled
  // generically for every `.navlinks a, .nav-overlay-links a` in main.js.
  links.forEach(link=> link.addEventListener('click', closeMenu));

  document.addEventListener('scroll', ()=>{ if(!isOpen()) syncActive(); }, {passive:true});

  // If rotated/resized back past the mobile breakpoint while open, close
  // it so it can't get stuck over the (now visible) desktop nav.
  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 760 && isOpen()) closeMenu();
  });

  syncActive();
})();
