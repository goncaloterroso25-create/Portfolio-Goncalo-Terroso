// Creative Technology case studies: accessible dialog, fast tabs and deferred galleries.
(function(){
  const dialog = document.getElementById('projectDialog');
  if(!dialog) return;

  const shell = dialog.querySelector('.project-dialog-shell');
  const closeBtn = dialog.querySelector('[data-project-close]');
  const details = Array.from(dialog.querySelectorAll('[data-project-detail]'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const hasGsap = !!window.gsap;
  const hasFlip = hasGsap && !!window.Flip;
  if(hasFlip) window.gsap.registerPlugin(window.Flip);

  let activeDetail = null;
  let lastTrigger = null;
  let lastCardMedia = null;
  let closing = false;

  function syncModalLock(){
    const lightbox = document.getElementById('lightboxOverlay');
    document.body.classList.toggle('modal-open', dialog.open || !!(lightbox && lightbox.open));
  }
  window.__syncPortfolioModalLock = syncModalLock;

  function hydrate(detail){
    detail.querySelectorAll('[data-src]').forEach(img=>{
      if(!img.getAttribute('src')) img.setAttribute('src', img.dataset.src);
    });
    detail.dataset.hydrated = 'true';
  }

  function setDetailTab(detail, name, options){
    const opts = options || {};
    const tabs = Array.from(detail.querySelectorAll('[data-detail-tab]'));
    const panels = Array.from(detail.querySelectorAll('[data-detail-panel]'));
    const target = panels.find(panel=> panel.dataset.detailPanel === name);
    if(!target) return;

    tabs.forEach(tab=>{
      const on = tab.dataset.detailTab === name;
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.tabIndex = on ? 0 : -1;
      if(on && opts.focus) tab.focus({preventScroll:true});
    });
    panels.forEach(panel=>{ panel.hidden = panel !== target; });

    if(hasGsap && opts.animate !== false && !reduceMotion.matches){
      window.gsap.killTweensOf(target);
      window.gsap.fromTo(target,
        {autoAlpha:0, y:10},
        {autoAlpha:1, y:0, duration:.24, ease:'power2.out', clearProps:'opacity,visibility,transform'}
      );
    }
  }

  function setupTabs(detail){
    const tabs = Array.from(detail.querySelectorAll('[data-detail-tab]'));
    tabs.forEach((tab,index)=>{
      tab.addEventListener('click', ()=> setDetailTab(detail, tab.dataset.detailTab, {animate:true}));
      tab.addEventListener('keydown', (event)=>{
        let next = null;
        if(event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if(event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        if(event.key === 'Home') next = 0;
        if(event.key === 'End') next = tabs.length - 1;
        if(next === null) return;
        event.preventDefault();
        setDetailTab(detail, tabs[next].dataset.detailTab, {animate:true, focus:true});
      });
    });
  }

  function setupGallery(gallery){
    const items = Array.from(gallery.querySelectorAll('[data-gallery-item]'));
    const activeImg = gallery.querySelector('[data-gallery-active]');
    const activeCaption = gallery.querySelector('[data-gallery-active-caption]');
    const count = gallery.querySelector('[data-gallery-count]');
    const prev = gallery.querySelector('[data-gallery-prev]');
    const next = gallery.querySelector('[data-gallery-next]');
    if(!items.length || !activeImg || !activeCaption) return;

    let current = 0;
    function render(index, animate){
      current = (index + items.length) % items.length;
      const item = items[current];
      const thumb = item.querySelector('img');
      const caption = item.querySelector('[data-gallery-caption]');
      const src = thumb.currentSrc || thumb.getAttribute('src') || thumb.dataset.src;

      items.forEach((button,i)=>{
        const on = i === current;
        button.setAttribute('aria-pressed', on ? 'true' : 'false');
        button.tabIndex = on ? 0 : -1;
      });
      if(count) count.textContent = (current + 1) + ' / ' + items.length;

      const commit = ()=>{
        activeImg.src = src;
        activeImg.alt = thumb.alt;
        activeCaption.textContent = caption ? caption.textContent : thumb.alt;
      };
      if(hasGsap && animate && !reduceMotion.matches && activeImg.getAttribute('src')){
        window.gsap.killTweensOf(activeImg);
        window.gsap.to(activeImg, {autoAlpha:0, scale:.992, duration:.1, ease:'power1.out', onComplete:()=>{
          commit();
          window.gsap.fromTo(activeImg, {autoAlpha:0, scale:1.008}, {autoAlpha:1, scale:1, duration:.2, ease:'power2.out', clearProps:'opacity,visibility,transform'});
        }});
      } else {
        commit();
      }
    }

    items.forEach((item,index)=>{
      item.addEventListener('click', ()=> render(index, true));
      item.addEventListener('keydown', (event)=>{
        let target = null;
        if(event.key === 'ArrowRight' || event.key === 'ArrowDown') target = (index + 1) % items.length;
        if(event.key === 'ArrowLeft' || event.key === 'ArrowUp') target = (index - 1 + items.length) % items.length;
        if(event.key === 'Home') target = 0;
        if(event.key === 'End') target = items.length - 1;
        if(target === null) return;
        event.preventDefault();
        render(target, true);
        items[target].focus({preventScroll:true});
      });
    });
    if(prev) prev.addEventListener('click', ()=> render(current - 1, true));
    if(next) next.addEventListener('click', ()=> render(current + 1, true));

    gallery.__refreshActive = ()=> render(current, false);
    gallery.__resetGallery = ()=> render(0, false);
  }

  details.forEach(detail=>{
    setupTabs(detail);
    detail.querySelectorAll('[data-project-gallery]').forEach(setupGallery);
  });

  function showDialog(){
    if(typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open','');
  }

  function finishClose(){
    if(dialog.open) dialog.close();
    else dialog.removeAttribute('open');
    closing = false;
    syncModalLock();
    if(window.__setCursorModalHost) window.__setCursorModalHost();
    if(lastTrigger) lastTrigger.focus({preventScroll:true});
    activeDetail = null;
  }

  function closeProject(){
    if(!dialog.open || closing) return;
    closing = true;
    const hero = activeDetail && activeDetail.querySelector('[data-project-hero]');

    if(hasGsap && !reduceMotion.matches){
      const rect = hero && hero.getBoundingClientRect();
      const ghost = rect && lastCardMedia ? hero.cloneNode(false) : null;
      if(ghost){
        ghost.removeAttribute('data-project-hero');
        ghost.className = 'project-flip-ghost';
        Object.assign(ghost.style, {
          position:'fixed', left:rect.left+'px', top:rect.top+'px', width:rect.width+'px', height:rect.height+'px',
          objectFit:getComputedStyle(hero).objectFit || 'cover', zIndex:'1000', pointerEvents:'none'
        });
        document.body.appendChild(ghost);
        finishClose();
        if(hasFlip){
          window.Flip.fit(ghost, lastCardMedia, {
            duration:.46, scale:true, simple:true, ease:'power3.inOut',
            onComplete:()=> ghost.remove()
          });
          window.gsap.to(ghost, {opacity:.2, duration:.46, ease:'power2.in'});
        } else {
          window.gsap.to(ghost, {opacity:0, scale:.96, duration:.24, onComplete:()=> ghost.remove()});
        }
      } else {
        window.gsap.to(shell, {autoAlpha:0, duration:.14, ease:'power1.out', onComplete:()=>{
          finishClose();
          window.gsap.set(shell,{clearProps:'opacity,visibility'});
        }});
      }
    } else {
      finishClose();
    }
  }

  function openProject(name, trigger){
    const detail = details.find(item=> item.dataset.projectDetail === name);
    if(!detail || dialog.open) return;
    lastTrigger = trigger;
    lastCardMedia = document.querySelector('[data-project-card-media="'+name+'"]');

    details.forEach(item=>{ item.hidden = item !== detail; });
    activeDetail = detail;
    dialog.setAttribute('aria-labelledby', name === 'sheepy' ? 'projectDialogTitleSheepy' : 'projectDialogTitleSweep');
    hydrate(detail);
    setDetailTab(detail, 'overview', {animate:false});
    detail.querySelectorAll('[data-project-gallery]').forEach(gallery=> gallery.__resetGallery && gallery.__resetGallery());

    const hero = detail.querySelector('[data-project-hero]');
    const state = hasFlip && lastCardMedia && !reduceMotion.matches
      ? window.Flip.getState(lastCardMedia, {simple:true})
      : null;

    showDialog();
    if(window.__setCursorModalHost) window.__setCursorModalHost(dialog);
    shell.scrollTop = 0;
    syncModalLock();
    closeBtn.focus({preventScroll:true});

    if(hasGsap && !reduceMotion.matches){
      window.gsap.fromTo(shell, {autoAlpha:0}, {autoAlpha:1, duration:.18, ease:'power1.out', clearProps:'opacity,visibility'});
      if(state && hero){
        window.Flip.from(state, {
          targets:hero, duration:.58, ease:'power3.inOut', scale:true, simple:true,
          absolute:true, fade:true, prune:true
        });
      }
      window.gsap.fromTo(detail.querySelector('.project-detail-intro'),
        {autoAlpha:0, y:12},
        {autoAlpha:1, y:0, duration:.34, delay:.08, ease:'power2.out', clearProps:'opacity,visibility,transform'}
      );
    }
  }

  document.querySelectorAll('[data-project-open]').forEach(button=>{
    button.addEventListener('click', ()=> openProject(button.dataset.projectOpen, button));
  });
  closeBtn.addEventListener('click', closeProject);
  dialog.addEventListener('cancel', event=>{ event.preventDefault(); closeProject(); });
  dialog.addEventListener('click', event=>{ if(event.target === dialog) closeProject(); });
  dialog.addEventListener('close', ()=>{
    closing = false;
    syncModalLock();
    if(window.__setCursorModalHost) window.__setCursorModalHost();
  });
  document.addEventListener('portfolio:languagechange', ()=>{
    details.forEach(detail=> detail.querySelectorAll('[data-project-gallery]').forEach(gallery=> gallery.__refreshActive && gallery.__refreshActive()));
  });
})();
