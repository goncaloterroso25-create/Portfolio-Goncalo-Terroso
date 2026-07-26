// ---- Track tabs (Projetos) ----
const trackBtns = document.querySelectorAll('.track-btn');
const panels = document.querySelectorAll('.track-panel');

function activateTrack(name){
  trackBtns.forEach(b=>b.classList.toggle('active', b.dataset.track===name));
  panels.forEach(p=>p.classList.toggle('active', p.id === 'panel-'+name));
  document.querySelectorAll('video').forEach(v=>v.pause());

  // Only centre the active button when the navigation genuinely overflows.
  // The mobile layout now shows all categories in a fixed grid, so forcing
  // scrollIntoView there could move the page unnecessarily.
  const activeBtn = document.querySelector('.track-btn[data-track="'+name+'"]');
  const tracksNav = document.getElementById('tracksNav');
  if(activeBtn && tracksNav && tracksNav.scrollWidth > tracksNav.clientWidth + 1){
    activeBtn.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
  }
}

trackBtns.forEach(btn=>{
  btn.addEventListener('click', ()=> activateTrack(btn.dataset.track));
});

// Links elsewhere on the page (e.g. Destaques) that should jump to a specific tab
document.querySelectorAll('[data-jump]').forEach(link=>{
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    activateTrack(link.dataset.jump);
    document.querySelector('#projetos').scrollIntoView({behavior:'smooth'});
  });
});

// ---- Nav: smooth scroll + active link + progress bar ----
// NOTE: matches links in BOTH the desktop inline nav (#navLinks) and
// the fullscreen mobile menu (#navOverlay) — see js/mobile.js for the
// open/close behaviour, which is otherwise fully independent from this file.
const navLinks = document.querySelectorAll('.navlinks a, .nav-overlay-links a, .brand[data-target]');
const sections = ['#hero','#destaques','#projetos','#sobre','#contacto'].map(s=>document.querySelector(s));
const progressEl = document.getElementById('navProgress');

navLinks.forEach(link=>{
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    const target = document.querySelector(link.dataset.target);
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

const topnavEl = document.querySelector('.topnav');
const heroEl = document.getElementById('hero');
const pipFrameEl = document.querySelector('.pip-frame');
const heroScopeEl = document.querySelector('.hero-scope');
const reduceMotionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');

function onScroll(){
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const scrollH = doc.scrollHeight - doc.clientHeight;
  const pct = scrollH>0 ? scrollTop/scrollH : 0;
  if(progressEl) progressEl.style.width = (pct*100)+'%';
  if(topnavEl) topnavEl.classList.toggle('is-scrolled', scrollTop > 24);

  // subtle depth: as the hero scrolls away, the photo drifts a little
  // slower than the page (classic parallax) and the waveform drifts
  // the other way — a quiet cue of depth, not a visual effect on its own
  if(heroEl && !reduceMotionMQ.matches){
    const heroRect = heroEl.getBoundingClientRect();
    const heroHeight = heroRect.height || 1;
    const past = Math.min(1, Math.max(0, -heroRect.top / heroHeight));
    if(pipFrameEl) pipFrameEl.style.transform = `translateY(${past*36}px)`;
    if(heroScopeEl) heroScopeEl.style.transform = `translateY(${past*-24}px)`;
  }

  let idx = 0;
  sections.forEach((sec,i)=>{
    if(sec && sec.getBoundingClientRect().top < window.innerHeight*0.5) idx = i;
  });
  // Match by target href rather than list position: with two nav-link
  // lists (desktop + mobile drawer) sharing the same selector, a plain
  // index comparison would only ever highlight the first list correctly.
  const activeHref = sections[idx] ? ('#' + sections[idx].id) : null;
  navLinks.forEach(l=> l.classList.toggle('active', l.getAttribute('href') === activeHref));
}
document.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// ---- Contextual section navigation (desktop rail) ----
// Answers "where am I?" at a glance: the current section's name stays
// visible, the rest reveal on hover, and clicking jumps there.
(function(){
  const nav = document.getElementById('sectionNav');
  if(!nav) return;
  const items = Array.from(nav.querySelectorAll('.section-nav-item'));

  items.forEach(item=>{
    item.addEventListener('click', ()=>{
      const target = document.querySelector(item.dataset.target);
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });

  function update(){
    let idx = 0;
    sections.forEach((sec,i)=>{
      if(sec && sec.getBoundingClientRect().top < window.innerHeight*0.5) idx = i;
    });
    const activeHref = sections[idx] ? ('#'+sections[idx].id) : null;
    items.forEach(item=>{
      const on = item.dataset.target === activeHref;
      item.classList.toggle('active', on);
      item.setAttribute('aria-current', on ? 'true' : 'false');
    });
  }

  document.addEventListener('scroll', update, {passive:true});
  update();
})();

// ---- Lightbox: fullscreen photo viewer with zoom + pan (no quality loss, no cropping) ----
(function(){
  const overlay = document.getElementById('lightboxOverlay');
  const imgEl = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  if(!overlay || !imgEl) return;

  let scale = 1, originX = 0, originY = 0;
  let isDragging = false, startX = 0, startY = 0;
  let lastTouchDist = null;

  function applyTransform(){
    imgEl.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;
    imgEl.classList.toggle('zoomed', scale > 1.001);
  }
  function resetTransform(){
    scale = 1; originX = 0; originY = 0;
    applyTransform();
  }
  function openLightbox(src, alt){
    imgEl.src = src;
    imgEl.alt = alt || '';
    resetTransform();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    isDragging = false;
    imgEl.classList.remove('dragging');
  }

  document.querySelectorAll('img.js-lightbox').forEach(img=>{
    img.addEventListener('click', ()=> openLightbox(img.currentSrc || img.src, img.alt));
  });

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e)=>{ if(e.target === overlay) closeLightbox(); });
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && overlay.classList.contains('active')) closeLightbox();
  });

  overlay.addEventListener('wheel', (e)=>{
    if(!overlay.classList.contains('active')) return;
    e.preventDefault();
    const prevScale = scale;
    const delta = -e.deltaY * 0.0016;
    scale = Math.min(4, Math.max(1, scale + delta));
    if(scale === 1){ originX = 0; originY = 0; }
    else if(prevScale !== scale){ /* keep current pan position, just rescale */ }
    applyTransform();
  }, {passive:false});

  imgEl.addEventListener('dblclick', ()=>{
    scale = scale > 1 ? 1 : 2.5;
    if(scale === 1){ originX = 0; originY = 0; }
    applyTransform();
  });

  imgEl.addEventListener('mousedown', (e)=>{
    if(scale <= 1) return;
    e.preventDefault();
    isDragging = true;
    imgEl.classList.add('dragging');
    startX = e.clientX - originX;
    startY = e.clientY - originY;
  });
  window.addEventListener('mousemove', (e)=>{
    if(!isDragging) return;
    originX = e.clientX - startX;
    originY = e.clientY - startY;
    applyTransform();
  });
  window.addEventListener('mouseup', ()=>{
    isDragging = false;
    imgEl.classList.remove('dragging');
  });

  // touch: pinch to zoom, one-finger drag to pan when zoomed
  overlay.addEventListener('touchstart', (e)=>{
    if(e.touches.length === 1 && scale > 1){
      startX = e.touches[0].clientX - originX;
      startY = e.touches[0].clientY - originY;
    }
  }, {passive:true});
  overlay.addEventListener('touchmove', (e)=>{
    if(e.touches.length === 2){
      e.preventDefault();
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if(lastTouchDist){
        const delta = (dist - lastTouchDist) * 0.012;
        scale = Math.min(4, Math.max(1, scale + delta));
        if(scale === 1){ originX = 0; originY = 0; }
        applyTransform();
      }
      lastTouchDist = dist;
    } else if(e.touches.length === 1 && scale > 1){
      e.preventDefault();
      originX = e.touches[0].clientX - startX;
      originY = e.touches[0].clientY - startY;
      applyTransform();
    }
  }, {passive:false});
  overlay.addEventListener('touchend', (e)=>{
    if(e.touches.length < 2) lastTouchDist = null;
  });
})();

// ---- Movement language: different parts of the page move differently ----
(function(){
  // grids that alternate origin by index — reads as being assembled
  const sideSelectors = [
    '.artist-grid > .artist-card',
    '.destaque-video-row > .feat-card',
    '.featured-row > .single-card',
    '.grid-row > .clip-card',
    '.gallery-grid > .gallery-item'
  ];
  // simple rows — small repeated items, kept calm on purpose
  const riseGroupSelectors = [
    '.skill-groups > .skill-group',
    '.contact-grid > .contact-card',
    '.stat-strip > .stat'
  ];
  // standalone feature panels — confident scale-in, like a cut in an edit
  const scaleSelectors = ['.about-quote', '.feat-music-panel'];
  // plain rise, no stagger needed
  const riseSelectors = ['.about-text > p', '.subhead', '.discreet-note'];
  // heading mask-wipe (see .reveal-text in CSS)
  const textSelectors = ['h2.reveal-text > *'];
  // thumbnails that wipe open under a curtain instead of fading
  const curtainSelectors = ['.clip-thumb'];

  const els = new Set();

  sideSelectors.forEach(sel=>{
    document.querySelectorAll(sel).forEach((el,i)=>{
      el.classList.add('reveal-side');
      if(i % 2 === 1) el.classList.add('from-right');
      el.style.animationDelay = Math.min(i,8) * 70 + 'ms';
      els.add(el);
    });
  });
  riseGroupSelectors.forEach(sel=>{
    document.querySelectorAll(sel).forEach((el,i)=>{
      el.classList.add('reveal');
      el.style.animationDelay = Math.min(i,8) * 60 + 'ms';
      els.add(el);
    });
  });
  scaleSelectors.forEach(sel=>{
    document.querySelectorAll(sel).forEach(el=>{
      el.classList.add('reveal-scale');
      els.add(el);
    });
  });
  riseSelectors.forEach(sel=>{
    document.querySelectorAll(sel).forEach(el=>{
      el.classList.add('reveal');
      els.add(el);
    });
  });
  textSelectors.forEach(sel=>{
    document.querySelectorAll(sel).forEach(el=>{
      // .reveal-text sits on the parent h2 (it's the clip boundary);
      // the observer just needs to watch that parent
      const parent = el.closest('.reveal-text');
      if(parent) els.add(parent);
    });
  });
  curtainSelectors.forEach(sel=>{
    document.querySelectorAll(sel).forEach(el=>{
      el.classList.add('reveal-curtain');
      els.add(el);
    });
  });

  if(!('IntersectionObserver' in window)){
    els.forEach(el=> el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  els.forEach(el=> io.observe(el));
})();

// ---- Animated stat counters (e.g. "3.000.000+", "3 milhões", "20+") ----
(function(){
  const targets = document.querySelectorAll('.stat .num, .fmp-stat');
  if(!targets.length || !('IntersectionObserver' in window)) return;

  function animate(el){
    const original = el.textContent.trim();
    const m = original.match(/^([\d.,]+)(.*)$/);
    if(!m) return;
    const digits = m[1].replace(/[.,]/g,'');
    const target = parseInt(digits,10);
    const suffix = m[2];
    if(isNaN(target)) return;

    const dur = 1300;
    const start = performance.now();
    function tick(now){
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = (target >= 1000 ? val.toLocaleString('pt-PT') : val) + suffix;
      if(p < 1) requestAnimationFrame(tick);
      else el.textContent = original;
    }
    requestAnimationFrame(tick);
  }

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.5});
  targets.forEach(el=> io.observe(el));
})();


document.querySelectorAll('.yt-facade').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.dataset.yt;
    const wrap = btn.parentElement;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    wrap.innerHTML = '';
    wrap.appendChild(iframe);
  });
});
