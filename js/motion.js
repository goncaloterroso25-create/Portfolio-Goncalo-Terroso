// Featured-project motion (Hora do Saber) and ScrollTrigger housekeeping for
// the project category panels, which are display:none while inactive.
(function(){
  const gsap = window.gsap;
  if(!gsap) return;
  const ST = window.ScrollTrigger || null;
  if(ST) gsap.registerPlugin(ST);

  const features = Array.from(document.querySelectorAll('[data-hds-feature]'));
  const visible = el=> !!el.getClientRects().length;
  let pending = [];

  const mm = gsap.matchMedia();
  mm.add({
    motion:'(prefers-reduced-motion: no-preference)',
    fine:'(hover:hover) and (pointer:fine)'
  }, context=>{
    const {motion, fine} = context.conditions;
    if(!motion) return;
    const cleanups = [];

    // entrance: the frame wipes open, the image settles, the copy follows.
    // A feature inside a hidden panel waits until that panel is shown, so it
    // is never measured (or animated) without a size.
    pending = features.map(card=> function build(){
      if(card.dataset.entered || !visible(card)) return false;
      card.dataset.entered = '1';
      const media = card.querySelector('[data-hds-media]');
      const main = media.querySelector('.hds-feature-img, video');
      const inset = card.querySelector('[data-hds-inset]');
      const body = card.querySelector('.hds-feature-body');
      const tl = gsap.timeline({scrollTrigger: ST ? {trigger:card, start:'top 86%', once:true} : null});
      tl.from(media, {clipPath:'inset(0% 100% 0% 0%)', duration:.85, ease:'power3.inOut', clearProps:'clipPath'}, 0)
        .from(main, {scale:1.12, duration:1.1, ease:'power3.out', clearProps:'transform'}, 0)
        .from(body.children, {y:16, opacity:0, duration:.55, stagger:.06, ease:'power3.out', clearProps:'transform,opacity'}, .25);
      if(inset) tl.from(inset, {y:28, rotation:-3, opacity:0, duration:.7, ease:'power3.out', clearProps:'transform,opacity'}, .45);
      return true;
    });
    pending.forEach(build=> build());

    if(fine){
      features.forEach(card=>{
        const img = card.querySelector('[data-hds-parallax]');
        const inset = card.querySelector('[data-hds-inset]');
        if(!img) return; // the video showcase keeps its native controls still
        const frame = img.parentElement;
        const xTo = gsap.quickTo(img, 'xPercent', {duration:.7, ease:'power3'});
        const yTo = gsap.quickTo(img, 'yPercent', {duration:.7, ease:'power3'});
        let rect = null;
        const enter = ()=>{
          rect = frame.getBoundingClientRect();
          gsap.to(img, {scale:1.06, duration:.6, ease:'power3.out', overwrite:'auto'});
          if(inset) gsap.to(inset, {y:-8, rotation:-1.5, duration:.5, ease:'power3.out', overwrite:'auto'});
        };
        const move = e=>{
          if(!rect) return;
          xTo(((e.clientX - rect.left) / rect.width - .5) * -3);
          yTo(((e.clientY - rect.top) / rect.height - .5) * -3);
        };
        const leave = ()=>{
          rect = null; xTo(0); yTo(0);
          gsap.to(img, {scale:1, duration:.6, ease:'power3.out', overwrite:'auto'});
          if(inset) gsap.to(inset, {y:0, rotation:0, duration:.5, ease:'power3.out', overwrite:'auto'});
        };
        card.addEventListener('pointerenter', enter);
        card.addEventListener('pointermove', move);
        card.addEventListener('pointerleave', leave);
        cleanups.push(()=>{
          card.removeEventListener('pointerenter', enter);
          card.removeEventListener('pointermove', move);
          card.removeEventListener('pointerleave', leave);
          gsap.set([img, inset].filter(Boolean), {clearProps:'transform'});
        });
      });
    }
    return ()=>{ cleanups.forEach(fn=> fn()); pending = []; };
  });

  // Category switch: an entrance still waiting inside a panel that was just
  // hidden finishes at once (nothing is left half-drawn), features in the
  // newly shown panel get their entrance, and trigger positions are rebuilt.
  document.addEventListener('portfolio:panelchange', ()=>{
    if(ST){
      ST.getAll().forEach(st=>{
        const el = st.trigger;
        if(el && el.closest('.track-panel[hidden]') && st.animation && st.animation.progress() < 1){
          st.animation.progress(1);
          st.kill();
        }
      });
    }
    pending.forEach(build=> build());
    if(ST) requestAnimationFrame(()=> ST.refresh());
  });
})();
