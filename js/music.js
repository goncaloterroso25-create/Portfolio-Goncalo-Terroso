// =========================================================
// MUSIC CATALOGUE: featured productions, selected discography and
// one shared Spotify embed.
//
// To add a release, add an entry to TRACKS. Every field comes from the
// track's public Spotify page:
//   spotify  track ID (open.spotify.com/track/<ID>)
//   art      cover hash: the part of the Spotify image URL after
//            "ab67616d0000xxxx" (the same hash serves 64/300/640 px)
//   len      track length in seconds (used to recognise Spotify's 30 s
//            previews, never to fake progress)
//   credit   key of a translated label in the hidden messages block
//            ("production", "coproduction", "coproduction2")
//   featured 1, 2, 3: order of the large cards (1 is the lead release)
//   region   "restricted" when Spotify limits playback by country: the
//            release stays listed with its link, without a listen control
// The list renders newest first.
//
// The Spotify iFrame API is only requested when a visitor asks to listen.
// Playback happens inside Spotify's own embed: nothing autoplays and the
// page never reports a state Spotify did not report first.
// =========================================================
(function(){
  const TRACKS = [
    { id:'original-carioca', title:'Original Carioca', artists:'PL Quest, MC Kevin o Chris, prodbyiniesta, GonJ', date:'2023-06-05', len:174, spotify:'0Bc5JSx0uOTY5wqg2L6Cbo', art:'f585fbb89593b2891a23b031', credit:'coproduction', featured:1, youtube:'https://www.youtube.com/watch?v=ZdJoa9FAWUc' },
    { id:'freestyle-01', title:'Freestyle 01', artists:'Thxuzz, L3OZIN, GonJ', date:'2022-08-02', len:127, spotify:'1sW0BCO3lnzCx7aYnPzV6K', art:'1f108eda1adfe2f0ecd949a8', credit:'production', featured:2, youtube:'https://www.youtube.com/watch?v=UHzCCiGo_uc' },
    { id:'freestyle-03', title:'Freestyle 03', artists:'Thxuzz', date:'2024-11-08', len:116, spotify:'2U8ogfw2aVxpVyuNVKjUDj', art:'e1a5b73911223f6a9bee24ec', credit:'production', featured:3, youtube:'https://www.youtube.com/watch?v=JYeD5qJOw_4' },
    { id:'fashion', title:'fashion', artists:'Tomazacre', date:'2025-10-07', len:117, spotify:'5cefH5a4m2vlTj5YrDUh7O', art:'183122f1a60ae7e25df7d4d8', credit:'production' },
    { id:'oferenda', title:'Oferenda', artists:'Tinx', date:'2025-09-18', len:176, spotify:'1wynIoVVut2BjnZMuppFlu', art:'f61f7619c5905ebc92320622', credit:'production' },
    { id:'lei-da-atracao', title:'Lei Da Atração', artists:'Tinx', date:'2025-09-18', len:114, spotify:'362qJaYq6gbrFHJY3HR0KH', art:'f61f7619c5905ebc92320622', credit:'production' },
    { id:'abracada-bra', title:'ABRACADA-BRA', artists:'Tinx, aleex, GonJ', date:'2024-10-31', len:71, spotify:'4PsCRmAJSVb6RD9xtJna88', art:'29fe664f4bbc225795bbed1c', credit:'production' },
    { id:'dropout', title:'DROPOUT!', artists:'Divi', date:'2024-04-05', len:151, spotify:'4HhRiWH9VAmfDh1ZwqeUGH', art:'b603e9f93436f5e41781fb22', credit:'production' },
    { id:'pra-baixo', title:'Pra Baixo', artists:'Thxuzz, L3OZIN, GonJ', date:'2023-12-05', len:192, spotify:'5qNIVb8e1IgAnssQbEBEIc', art:'8c02d99ee15d1586c99b2f63', credit:'production' },
    { id:'luv-not-war', title:'Luv not War', artists:'wakeup_trev, GonJ', date:'2023-12-01', len:194, spotify:'58m9176Rj2fatFJ4GrklaO', art:'e3e345abb47f4ada66b0fe7e', credit:'production', region:'restricted' },
    { id:'mafia-boss', title:'Mafia Boss', artists:'Braasa 2580, GonJ, CDB Music', date:'2023-11-17', len:147, spotify:'7bHvt659D4bfXDq5P2AX4F', art:'717843499f426f7ebb454d66', credit:'production' },
    { id:'masterclass', title:'MASTERCLASS', artists:'dazed lex, kolkassfsg, joliotz, GonJ', date:'2023-10-22', len:96, spotify:'4FvtgYERsTwSj4uaHjPAnL', art:'43a13363c5a38a9bd650e82d', credit:'production', region:'restricted' },
    { id:'nos-desce-pra-pista', title:'Nós Desce pra Pista', artists:'Mc Max, prodbyiniesta, L3OZIN, G0njay', date:'2023-04-13', len:167, spotify:'5yZ8cGgyWSSUfhSL76fldj', art:'74f3dc336be741ba2eb01418', credit:'coproduction2' },
    { id:'vira-casaca', title:'Vira Casaca', artists:'Aranha Umaviuvanegra, GonJ', date:'2022-09-09', len:129, spotify:'6OIAKLSv8v8RxXttEdb5xx', art:'1d430e31547463e219b81050', credit:'production' },
    { id:'da-grade-a-liberdade', title:'Da Grade à Liberdade', artists:'Sandrão RZO, Henrique Fogaça, DJ CIA', date:'2022-07-01', len:203, spotify:'379TzMm0R4GGwXZs1hwTtM', art:'2375c5528266e4bb0d37f7ad', credit:'production' },
    { id:'pop-off', title:'Pop Off', artists:'Verse', date:'2022-07-01', len:91, spotify:'1OoJ3pbPASMzLQ0ImNmnVq', art:'13a70ea407ea6d56523d6e9e', credit:'production' },
    { id:'undead', title:'UNDEAD', artists:'shoutz, GonJ', date:'2021-12-12', len:218, spotify:'2s8EcRq9zsLoTw42V4ycbk', art:'01592ed94762bad921745f79', credit:'production' },
    { id:'kenan-and-kel', title:'KENAN & KEL', artists:'luvzy13', date:'2021-11-03', len:110, spotify:'2FHt5zh0wD9cw0HyP0Pq6I', art:'3099cd73584c6f43ac3834cf', credit:'production', region:'restricted' },
    { id:'cartao-clonado', title:'Cartão Clonado', artists:'SK-19', date:'2021-10-24', len:128, spotify:'6vs16hwl8NAVO421fX7wQm', art:'db40f885cab62c7a11804e2c', credit:'production' },
    { id:'recorda', title:'Recorda', artists:'BWS', date:'2021-09-24', len:188, spotify:'2jBJvi15lHjYnyYdS1sLYX', art:'8b3ba8df918d8e5923549070', credit:'production' },
    { id:'nao-sabem-quem-sou', title:'Não Sabem Quem Sou', artists:'CDB Music, MOR3NO, GonJ', date:'2021-08-28', len:112, spotify:'4O61MXY383r7e6ygsl85zL', art:'41dc2f602310b55613f2ce1d', credit:'production' },
    { id:'vacina', title:'Vacina', artists:'MOR3NO, BWS', date:'2020-08-14', len:181, spotify:'0V7PSrJ8tW9e4v5I6hRy4b', art:'4fe474da265f9d2872352fa1', credit:'production' }
  ];

  const root = document.querySelector('[data-music]');
  if(!root) return;

  const gsap = window.gsap || null;
  const panel = document.getElementById('panel-musica');
  const featuredEl = root.querySelector('[data-music-featured]');
  const listEl = root.querySelector('[data-music-list]');
  const rangeEl = root.querySelector('[data-music-range]');
  const layout = root.querySelector('.music-layout');
  const player = root.querySelector('[data-music-player]');
  const artWrap = root.querySelector('[data-music-art-wrap]');
  const infoEl = root.querySelector('[data-music-info]');
  const titleEl = root.querySelector('[data-music-title]');
  const artistEl = root.querySelector('[data-music-artist]');
  const metaEl = root.querySelector('[data-music-meta]');
  const chipEl = root.querySelector('[data-music-chip]');
  const embedEl = root.querySelector('[data-music-embed]');
  const loadBtn = root.querySelector('[data-music-load]');
  const statusEl = root.querySelector('[data-music-status]');
  const externalEl = root.querySelector('[data-music-external]');
  const messages = root.querySelector('[data-music-messages]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motionOK = ()=> !!gsap && !reduceMotion.matches;

  // translated strings live in the DOM so the existing i18n system owns them
  const msg = key=>{ const el = messages.querySelector('[data-msg="'+key+'"]'); return el ? el.textContent.trim() : ''; };
  const art = (hash, size)=> 'https://i.scdn.co/image/ab67616d0000' + ({64:'4851', 300:'1e02', 640:'b273'}[size]) + hash;
  const trackUrl = t=> 'https://open.spotify.com/track/' + t.spotify;
  const year = t=> t.date.slice(0,4);
  const byId = id=> TRACKS.find(t=> t.id === id);
  const h = (tag, attrs, children)=>{
    const el = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([k,v])=>{ if(v !== null && v !== undefined && v !== false) el.setAttribute(k, v); });
    (children || []).forEach(c=>{ if(c !== null && c !== undefined && c !== '') el.append(c); });
    return el;
  };
  const svg = (markup, cls)=>{
    const s = document.createElementNS('http://www.w3.org/2000/svg','svg');
    s.setAttribute('viewBox','0 0 24 24'); s.setAttribute('aria-hidden','true');
    if(cls) s.setAttribute('class', cls);
    s.innerHTML = markup;
    return s;
  };
  const externalIcon = ()=>{ const s = svg('<path d="M7 17 17 7M8 7h9v9"/>', 'external-icon'); s.setAttribute('fill','none'); s.setAttribute('stroke','currentColor'); s.setAttribute('stroke-width','1.8'); return s; };
  const playIcon = ()=>{ const s = svg('<path d="M8 5v14l11-7z"/>', 'music-play-icon'); s.setAttribute('fill','currentColor'); return s; };

  // Translatable label created at runtime: shows the current language but
  // records the Portuguese original the way js/i18n.js expects, so a later
  // switch back to PT restores the right text.
  const label = (key, attrs)=>{
    const src = messages.querySelector('[data-msg="'+key+'"]');
    const el = h('span', Object.assign({'data-i18n': src.dataset.i18n}, attrs), [msg(key)]);
    el.dataset.i18nOrig = src.dataset.i18nOrig !== undefined ? src.dataset.i18nOrig : src.innerHTML;
    return el;
  };
  const credit = t=> label(t.credit);
  const newTab = ()=> label('newtab', {class:'visually-hidden'});
  const external = (href, text, cls)=>{
    const a = h('a', {class:cls, href, target:'_blank', rel:'noopener'}, [text, ' ', newTab()]);
    a.insertBefore(externalIcon(), a.childNodes[1]);
    return a;
  };

  // ---- render: featured releases (one lead, two supporting) ----
  const featured = TRACKS.filter(t=> t.featured).sort((a,b)=> a.featured - b.featured);
  featured.forEach((t,i)=>{
    const lead = i === 0;
    const listen = h('button', {type:'button', class:'music-listen', 'data-music-select':t.id, 'aria-pressed':'false'}, [
      playIcon(),
      label('listen'),
      h('span', {class:'visually-hidden'}, [': ' + t.title]),
      h('span', {class:'music-state', 'data-music-state':''})
    ]);
    featuredEl.append(h('li', {class:'music-feature' + (lead ? ' music-feature--lead' : ''), 'data-track-id':t.id}, [
      h('div', {class:'music-feature-art'}, [
        h('img', lead
          ? {src:art(t.art,640), srcset:art(t.art,300)+' 300w, '+art(t.art,640)+' 640w', sizes:'(max-width:600px) 92vw, 340px', width:'640', height:'640', alt:'', loading:'lazy', decoding:'async'}
          : {src:art(t.art,300), width:'300', height:'300', alt:'', loading:'lazy', decoding:'async'}),
        h('span', {class:'music-feature-num', 'aria-hidden':'true'}, ['0' + (i + 1)])
      ]),
      h('div', {class:'music-feature-body'}, [
        h('div', {class:'music-feature-meta'}, [year(t) + ' · ', credit(t)]),
        h('h4', {class:'music-feature-title'}, [t.title]),
        h('span', {class:'music-feature-line', 'aria-hidden':'true'}),
        h('p', {class:'music-feature-artist'}, [t.artists]),
        h('div', {class:'music-feature-actions'}, [
          listen,
          external(trackUrl(t), 'Spotify', 'music-feature-link'),
          t.youtube ? external(t.youtube, 'YouTube', 'music-feature-link') : null
        ])
      ])
    ]));
  });

  // ---- render: discography, newest first ----
  const catalogue = TRACKS.filter(t=> !t.featured).sort((a,b)=> b.date.localeCompare(a.date));
  catalogue.forEach((t,i)=>{
    const restricted = t.region === 'restricted';
    const cells = [
      h('span', {class:'music-row-num', 'aria-hidden':'true'}, [String(i + 1).padStart(2,'0')]),
      h('span', {class:'music-row-art'}, [
        h('img', {src:art(t.art,64), srcset:art(t.art,64)+' 64w, '+art(t.art,300)+' 300w', sizes:'48px', width:'48', height:'48', alt:'', loading:'lazy', decoding:'async'})
      ]),
      h('span', {class:'music-row-main'}, [
        h('span', {class:'music-row-title'}, [t.title]),
        h('span', {class:'music-row-artist'}, [t.artists])
      ]),
      h('span', {class:'music-row-credit'}, [credit(t)]),
      h('span', {class:'music-row-year'}, [year(t)]),
      restricted ? label('restricted', {class:'music-row-flag'}) : h('span', {class:'music-state', 'data-music-state':''})
    ];
    // a regional restriction keeps the release listed, but without a listen control
    const select = restricted
      ? h('div', {class:'music-row-select is-restricted'}, cells)
      : h('button', {type:'button', class:'music-row-select', 'data-music-select':t.id, 'aria-pressed':'false'}, cells);
    const link = h('a', {class:'music-row-link', href:trackUrl(t), target:'_blank', rel:'noopener'}, [
      h('span', {class:'visually-hidden'}, [label('open'), ': ' + t.title + ' ', newTab()])
    ]);
    link.prepend(externalIcon());
    listEl.append(h('li', {class:'music-row' + (restricted ? ' music-row--restricted' : ''), 'data-track-id':t.id}, [select, link]));
  });

  // moving indicators: one follows the pointer, one marks the selected release
  const listWrap = h('div', {class:'music-list-wrap'});
  listEl.parentNode.insertBefore(listWrap, listEl);
  const hoverBar = h('span', {class:'music-list-hover', 'aria-hidden':'true'});
  const activeBar = h('span', {class:'music-list-active', 'aria-hidden':'true'});
  listWrap.append(hoverBar, activeBar, listEl);

  const years = TRACKS.map(t=> +year(t));
  if(rangeEl) rangeEl.textContent = Math.min(...years) + ' - ' + Math.max(...years) + ' · Spotify';

  // category count: every release plus the spoken-word pieces below
  const count = document.querySelector('.track-btn[data-track="musica"] .count');
  if(count) count.textContent = TRACKS.length + document.querySelectorAll('#panel-musica .music-other > .clip-card').length;

  // ---- state ----
  let active = featured[0] || TRACKS[0];
  let controller = null;
  let loading = null;
  let failed = false;
  // what Spotify has actually reported for the active track
  let playback = {playing:false, played:false, preview:false, ended:false};
  let state = 'selected';
  let swapTl = null;
  let swapToken = 0;

  function setState(next){
    state = next;
    const chipKey = {selected:'chip_selected', loading:'chip_loading', ready:'chip_ready', playing:'playing', paused:'paused', preview:'preview', error:'chip_error'}[state];
    chipEl.textContent = msg(chipKey);
    chipEl.dataset.state = state;
    const statusKey = state === 'loading' ? 'loading'
      : state === 'error' ? 'error'
      : playback.preview ? 'previewNote'
      : state === 'ready' ? 'ready' : '';
    statusEl.textContent = statusKey ? msg(statusKey) : '';
    statusEl.dataset.state = statusKey;
    renderRows();
  }

  function renderRows(){
    root.querySelectorAll('[data-music-select]').forEach(btn=>{
      const on = btn.dataset.musicSelect === active.id;
      const item = btn.closest('[data-track-id]');
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      item.classList.toggle('is-active', on);
      item.classList.toggle('is-playing', on && playback.playing);
      // visible text, not only colour, says where the release is
      const s = btn.querySelector('[data-music-state]');
      s.textContent = on && (controller || loading) ? (playback.playing ? msg('playing') : msg('selected')) : '';
    });
  }

  // the selection marker slides to the active row (hidden for featured releases)
  function placeActiveBar(animate){
    const row = listEl.querySelector('[data-track-id="'+active.id+'"]');
    if(!row || !row.offsetHeight){
      if(gsap) gsap.to(activeBar, {autoAlpha:0, duration:animate ? .2 : 0, overwrite:true});
      else activeBar.style.opacity = 0;
      return;
    }
    const to = {y:row.offsetTop, height:row.offsetHeight, autoAlpha:1};
    if(gsap && animate && motionOK()) gsap.to(activeBar, Object.assign({duration:.5, ease:'power3.inOut', overwrite:true}, to));
    else if(gsap) gsap.set(activeBar, to);
    else Object.assign(activeBar.style, {transform:'translateY('+to.y+'px)', height:to.height+'px', opacity:1});
  }

  function applyNowText(){
    titleEl.textContent = active.title;
    artistEl.textContent = active.artists;
    metaEl.replaceChildren(year(active) + ' · ', credit(active));
    externalEl.href = trackUrl(active);
  }

  function setArt(img){
    img.src = art(active.art,300);
    img.srcset = art(active.art,300)+' 300w, '+art(active.art,640)+' 640w';
    img.sizes = '(max-width:760px) 96px, 132px';
  }

  // artwork wipes in over the previous cover, metadata rises after it;
  // a newer selection simply kills the running transition
  function renderNow(animate){
    applyNowText();
    const imgs = artWrap.querySelectorAll('img');
    const current = imgs[imgs.length - 1];
    imgs.forEach(img=>{ if(img !== current) img.remove(); });
    if(swapTl){ swapTl.kill(); swapTl = null; }
    if(gsap) gsap.set(current, {clearProps:'all'});
    if(!animate || !motionOK()){ setArt(current); return; }

    const fresh = current.cloneNode(false);
    fresh.removeAttribute('loading');
    setArt(fresh);
    const token = ++swapToken;
    gsap.fromTo(infoEl.children, {y:10, opacity:0}, {y:0, opacity:1, duration:.38, stagger:.05, ease:'power3.out', overwrite:true, clearProps:'transform,opacity'});
    const go = ()=>{
      if(token !== swapToken) return;
      artWrap.append(fresh);
      swapTl = gsap.timeline({onComplete:()=>{ current.remove(); gsap.set(fresh, {clearProps:'all'}); swapTl = null; }});
      swapTl.fromTo(fresh, {clipPath:'inset(100% 0% 0% 0%)', scale:1.12}, {clipPath:'inset(0% 0% 0% 0%)', scale:1, duration:.55, ease:'power3.inOut'}, 0)
            .to(current, {scale:.92, autoAlpha:.35, duration:.55, ease:'power3.inOut'}, 0);
    };
    // decode first so the wipe never reveals an empty frame
    (fresh.decode ? fresh.decode() : Promise.resolve()).then(go, go);
  }

  // ---- Spotify iFrame API, requested once and only on demand ----
  function onPlayback(e){
    const d = (e && e.data) || {};
    if(d.playingURI && d.playingURI.split(':').pop() !== active.spotify) return;
    // a logged-out visitor gets a 30 s preview of a longer track
    playback.preview = d.duration > 0 && d.duration <= 31000 && active.len * 1000 > 40000;
    const nowPlaying = !d.isPaused && !d.isBuffering && d.position > 0;
    if(nowPlaying){ playback.played = true; }
    playback.playing = nowPlaying;
    const atEnd = d.duration > 0 && d.position >= d.duration - 600;
    if(nowPlaying) setState('playing');
    else if(playback.played && playback.preview && atEnd) setState('preview');
    else if(playback.played && d.isPaused) setState('paused');
    else if(state === 'loading' || state === 'selected') setState('ready');
    else setState(state);
  }

  function ensureController(){
    if(controller) return Promise.resolve(controller);
    if(loading) return loading;
    failed = false;
    loading = new Promise((resolve, reject)=>{
      const host = document.createElement('div');
      embedEl.replaceChildren(host);
      embedEl.classList.add('is-loaded');
      const timer = setTimeout(()=> reject(new Error('timeout')), 12000);
      const create = IFrameAPI=>{
        IFrameAPI.createController(host, {uri:'spotify:track:'+active.spotify, width:'100%', height:152}, ctrl=>{
          clearTimeout(timer);
          ctrl.addListener('ready', ()=>{ if(state === 'loading') setState('ready'); });
          ctrl.addListener('playback_update', onPlayback);
          resolve(ctrl);
        });
      };
      if(window.SpotifyIframeApi) create(window.SpotifyIframeApi);
      else {
        window.onSpotifyIframeApiReady = IFrameAPI=>{ window.SpotifyIframeApi = IFrameAPI; create(IFrameAPI); };
        const script = document.createElement('script');
        script.src = 'https://open.spotify.com/embed/iframe-api/v1';
        script.async = true;
        script.onerror = ()=>{ clearTimeout(timer); reject(new Error('blocked')); };
        document.head.appendChild(script);
      }
    }).then(ctrl=>{
      controller = ctrl;
      loading = null;
      const iframe = embedEl.querySelector('iframe');
      if(iframe) iframe.setAttribute('title', 'Spotify: ' + active.title);
      return ctrl;
    }).catch(()=>{
      loading = null;
      failed = true;
      embedEl.classList.remove('is-loaded');
      embedEl.replaceChildren(loadBtn);
      setState('error');
      return null;
    });
    setState('loading');
    return loading;
  }

  function select(id, opts){
    const track = byId(id);
    if(!track || track.region === 'restricted') return;
    const changed = track !== active;
    active = track;
    if(changed){
      playback = {playing:false, played:false, preview:false, ended:false};
      renderNow(true);
    }
    placeActiveBar(true);
    const wasLoaded = !!controller;
    if(wasLoaded && changed) setState('loading');
    else renderRows();
    ensureController().then(ctrl=>{
      if(!ctrl) return;
      if(changed && wasLoaded || opts && opts.force){
        // the one embed is reused: loadEntity swaps the track without autoplay
        ctrl.loadEntity('spotify:track:' + active.spotify);
        const iframe = embedEl.querySelector('iframe');
        if(iframe) iframe.setAttribute('title', 'Spotify: ' + active.title);
      }
      if(state === 'loading') setTimeout(()=>{ if(state === 'loading') setState('ready'); }, 1500);
    });
    if(opts && opts.reveal) revealPlayer();
  }

  // keep the player in reach after choosing a track further down the page
  function revealPlayer(){
    const r = player.getBoundingClientRect();
    if(r.top < 60 || r.bottom > window.innerHeight){
      player.scrollIntoView({block:'nearest', behavior: reduceMotion.matches ? 'auto' : 'smooth'});
    }
  }

  root.addEventListener('click', e=>{
    const btn = e.target.closest('[data-music-select]');
    if(btn) select(btn.dataset.musicSelect, {reveal:true});
  });
  loadBtn.addEventListener('click', ()=> select(active.id, {force:failed}));

  // ---- motion: entrances and pointer interactions (GSAP) ----
  if(gsap){
    if(window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add({
      motion:'(prefers-reduced-motion: no-preference)',
      fine:'(hover:hover) and (pointer:fine)'
    }, context=>{
      const {motion, fine} = context.conditions;
      if(!motion) return;
      const cleanups = [];

      // composed entrance, once, when the catalogue scrolls into view
      if(window.ScrollTrigger){
        const tl = gsap.timeline({scrollTrigger:{trigger:featuredEl, start:'top 88%', once:true}});
        tl.from(featuredEl.querySelectorAll('.music-feature-art'), {clipPath:'inset(0% 0% 100% 0%)', duration:.75, stagger:.09, ease:'power3.inOut', clearProps:'clipPath'}, 0)
          .from(featuredEl.querySelectorAll('.music-feature-art img'), {scale:1.18, duration:1, stagger:.09, ease:'power3.out', clearProps:'transform'}, 0)
          .from(featuredEl.querySelectorAll('.music-feature-body > *'), {y:14, opacity:0, duration:.5, stagger:.035, ease:'power3.out', clearProps:'transform,opacity'}, .2);
        gsap.from(listEl.children, {y:12, opacity:0, duration:.42, stagger:.022, ease:'power2.out', clearProps:'transform,opacity',
          scrollTrigger:{trigger:listEl, start:'top 90%', once:true}});
        gsap.from(player, {y:22, opacity:0, duration:.6, ease:'power3.out', clearProps:'transform,opacity',
          scrollTrigger:{trigger:layout, start:'top 85%', once:true}});
      }

      if(fine){
        // featured covers lean toward the pointer inside their frame
        featuredEl.querySelectorAll('.music-feature').forEach(card=>{
          const frame = card.querySelector('.music-feature-art');
          const img = frame.querySelector('img');
          const amount = card.classList.contains('music-feature--lead') ? 5 : 4;
          const xTo = gsap.quickTo(img, 'xPercent', {duration:.6, ease:'power3'});
          const yTo = gsap.quickTo(img, 'yPercent', {duration:.6, ease:'power3'});
          let rect = null;
          const enter = ()=>{ rect = frame.getBoundingClientRect(); gsap.to(img, {scale:1.08, duration:.5, ease:'power3.out', overwrite:'auto'}); };
          const move = e=>{
            if(!rect) return;
            xTo(((e.clientX - rect.left) / rect.width - .5) * -amount);
            yTo(((e.clientY - rect.top) / rect.height - .5) * -amount);
          };
          const leave = ()=>{ rect = null; xTo(0); yTo(0); gsap.to(img, {scale:1, duration:.5, ease:'power3.out', overwrite:'auto'}); };
          card.addEventListener('pointerenter', enter);
          card.addEventListener('pointermove', move);
          card.addEventListener('pointerleave', leave);
          cleanups.push(()=>{ card.removeEventListener('pointerenter', enter); card.removeEventListener('pointermove', move); card.removeEventListener('pointerleave', leave); gsap.set(img, {clearProps:'transform'}); });
        });

        // a soft highlight glides between rows under the pointer
        const enterRow = e=>{
          const row = e.currentTarget;
          const first = +gsap.getProperty(hoverBar, 'opacity') === 0;
          gsap.to(hoverBar, {y:row.offsetTop, height:row.offsetHeight, autoAlpha:1, duration:first ? 0 : .28, ease:'power3.out', overwrite:true});
        };
        const leaveList = ()=> gsap.to(hoverBar, {autoAlpha:0, duration:.2, overwrite:true});
        listEl.querySelectorAll('.music-row').forEach(row=> row.addEventListener('pointerenter', enterRow));
        listWrap.addEventListener('pointerleave', leaveList);
        cleanups.push(()=>{
          listEl.querySelectorAll('.music-row').forEach(row=> row.removeEventListener('pointerenter', enterRow));
          listWrap.removeEventListener('pointerleave', leaveList);
          gsap.set(hoverBar, {autoAlpha:0});
        });
      }
      return ()=> cleanups.forEach(fn=> fn());
    });
  }

  // a hidden panel must not keep playing out of sight; when it returns,
  // the selection marker is measured again (rows have no size while hidden)
  new MutationObserver(()=>{
    if(panel.hidden){ if(controller && playback.playing){ try{ controller.pause(); }catch(err){} } }
    else requestAnimationFrame(()=> placeActiveBar(false));
  }).observe(panel, {attributes:true, attributeFilter:['hidden']});
  let resizeFrame = 0;
  window.addEventListener('resize', ()=>{
    if(resizeFrame) return;
    resizeFrame = requestAnimationFrame(()=>{ resizeFrame = 0; placeActiveBar(false); });
  }, {passive:true});

  // re-apply translated state text after a language change
  document.addEventListener('portfolio:languagechange', ()=>{ setState(state); requestAnimationFrame(()=> placeActiveBar(false)); });

  // initial display: the lead release, no embed yet
  renderNow(false);
  setState('selected');
  placeActiveBar(false);
})();
