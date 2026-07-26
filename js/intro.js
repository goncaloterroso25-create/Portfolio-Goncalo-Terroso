// ---------------------------------------------------------------
// INTRO SEQUENCE
// Timeline (first visit):
//   0ms      disciplines start flipping, ~130ms each
//   ~700ms   name resolves in, accent rule draws
//   ~1500ms  panels wipe apart, hero is already behind them
//   ~2350ms  intro removed from the document entirely
// Repeat visits within the same session skip straight to the name,
// so it never becomes an obstacle. Anyone who prefers reduced motion,
// or who clicks skip, goes straight to the page.
// ---------------------------------------------------------------
(function(){
  const intro = document.getElementById('intro');
  if(!intro) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const words = Array.from(intro.querySelectorAll('.intro-word'));
  const skipBtn = document.getElementById('introSkip');

  let seen = false;
  try { seen = sessionStorage.getItem('gt-intro-seen') === '1'; } catch(e){}

  const timers = [];
  function after(ms, fn){ timers.push(setTimeout(fn, ms)); }

  function finish(){
    timers.forEach(clearTimeout);
    intro.classList.add('done');
    document.body.classList.remove('intro-active');
    try { sessionStorage.setItem('gt-intro-seen','1'); } catch(e){}
    // let the hero's own entrance animation start from a clean slate
    document.body.classList.add('intro-finished');
  }

  function reveal(){
    intro.classList.add('reveal');
    after(900, finish);
  }

  // No intro at all: reduced motion, or CSS not applied for any reason
  if(reduceMotion){
    finish();
    return;
  }

  document.body.classList.add('intro-active');
  if(skipBtn) skipBtn.addEventListener('click', ()=>{ intro.classList.add('reveal'); after(500, finish); });

  if(seen){
    // returning within the session: name only, straight to the wipe
    intro.classList.add('name-in');
    after(650, reveal);
    return;
  }

  const STEP = 130;
  words.forEach((w,i)=>{
    after(i*STEP, ()=>{
      words.forEach(x=> x.classList.remove('on'));
      w.classList.add('on');
    });
  });
  after(words.length*STEP, ()=>{
    words.forEach(x=> x.classList.remove('on'));
    intro.classList.add('name-in');
  });
  after(words.length*STEP + 800, reveal);
})();
