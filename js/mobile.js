// =========================================================
// GONÇALO TERROSO — PORTFÓLIO
// MOBILE NAV — hamburger drawer
//
// Fully independent from js/main.js: the drawer (#navDrawer), its
// scrim (#navScrim) and its trigger (#navToggle) are their own markup
// block in index.html, not a repositioned copy of the desktop nav.
// That's what makes this reliable across screen sizes/zoom levels —
// there's no CSS fighting over where the same element should sit.
//
// This script is safe to include on any screen size: on desktop the
// trigger button is hidden (see css/mobile.css) so nothing here ever
// gets triggered by a user, but the listeners themselves are harmless.
// =========================================================
(function(){
  const toggle = document.getElementById('navToggle');
  const drawer = document.getElementById('navDrawer');
  const scrim  = document.getElementById('navScrim');

  if(!toggle || !drawer || !scrim) return;

  function isOpen(){
    return drawer.classList.contains('open');
  }

  function openDrawer(){
    drawer.classList.add('open');
    scrim.classList.add('active');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nav-open');
  }

  function closeDrawer(){
    drawer.classList.remove('open');
    scrim.classList.remove('active');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nav-open');
  }

  function toggleDrawer(){
    if(isOpen()) closeDrawer();
    else openDrawer();
  }

  toggle.addEventListener('click', toggleDrawer);
  scrim.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && isOpen()) closeDrawer();
  });

  // Tapping a link inside the drawer should close it — the actual
  // smooth-scrolling to the target section is handled generically for
  // every `.navlinks a` (desktop + drawer alike) in js/main.js.
  drawer.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click', closeDrawer);
  });

  // If the window is resized/rotated back past the mobile breakpoint
  // while the drawer happens to be open, close it so it can't get
  // stuck open behind the (now visible) desktop nav.
  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 760 && isOpen()) closeDrawer();
  });
})();
