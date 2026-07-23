// ---- Language switcher (PT <-> EN) ----
// Company/artist/project names (Thxuzz, PL Quest, Kevin O Chris, INVERNØ, Fender, etc.)
// and the titles of specific creative works are intentionally left untranslated.
(function(){

  const EN = {
    // Nav
    nav_inicio: "Home",
    nav_destaques: "Highlights",
    nav_projetos: "Projects",
    nav_sobre: "About",
    nav_contacto: "Contact",

    // Hero
    hero_eyebrow: "AUDIOVISUAL PORTFOLIO",
    hero_role: "<b>Multimedia Producer</b> with experience in music and audiovisual production.",
    tag_musica: "Music Production",
    tag_video_edit: "Video Editing",
    tag_design: "Graphic Design",
    hero_cta_destaques: "▸ See highlights",
    stat_milhoes: "3 million",
    stat_musica_lbl: "Streams in music production",
    stat_estagio_lbl: "Internship - Pedagogical Innovation Centre",
    stat_projetos_lbl: "Video, sound and image projects",

    // Destaques
    destaques_eyebrow: "My best projects",
    destaques_h2: "Highlights",
    destaques_note: "The best of my work in music production and video/image.",
    fmp_eyebrow: "Music Production",
    fmp_desc: "Over 3 million streams on tracks I composed and produced in <b style=\"color:var(--text)\">FL Studio</b> for national and international artists.",
    ouvir_spotify: "Listen on Spotify",
    ver_toda_musica: "▸ See all music production",
    subhead_video_estagio: "Video - Internship at the Pedagogical Innovation Centre",
    badge_estagio_cip: "Internship · Pedagogical Innovation Centre",
    introducao: "Introduction",
    creditos: "Credits",
    desc_horasaber_intro: "Opening animation for P.PORTO's institutional videocast.",
    desc_horasaber_credits: "Closing and credits sequence of the videocast, with original sound design.",
    motion_ae: "Motion - After Effects",
    som_flstudio: "Sound - FL Studio",
    identidade_visual: "Visual Identity",
    badge_design_identidade: "Graphic Design · Visual Identity",
    logotipo: "Logo",
    desc_inverno_logo: "Visual identity created for the INVERNØ music project. Created and edited in <b>Photoshop</b>.",
    desc_inverno_cover: "Cover photography created for the INVERNØ music project. Image capture for use in campaigns and promotion. Edited in <b>Photoshop</b> and <b>Lightroom</b>.",
    ver_projeto_completo: "▸ See full project",

    // Projetos
    portfolio: "Portfolio",
    projetos_h2: "Projects",
    projetos_note: "Projects carried out in different areas of audiovisual production.",
    tag_video_img: "Video & Image",

    // Música
    faixas_destaque: "▸ FEATURED TRACKS",
    creditos_composicoes: "Credits & original compositions",
    creditos_prod_musical: "Music Production Credits",
    desc_creditos_musical: "Production for several international artists, such as <b>Thxuzz</b>, <b>PL Quest</b> and <b>Kevin O Chris</b>, among others. Over <b>3 million streams/views</b> across streaming platforms.",
    ver_playlist_completa: "▸ See full playlist",
    desc_cidade_vazia: "Musical poem <b>\"Cidade Vazia\"</b> by Rui T, created for a future audiobook. Melodic composition, vocal recording, editing and post-production by me.",
    ver_no_instagram: "▸ View on Instagram",
    desc_amor_guerra: "Musical poem <b>\"Amor em Tempo de Guerra\"</b> by Rui T, created for a future audiobook. Melodic composition, vocal recording, editing and post-production by me.",

    // Vídeo & Imagem
    subhead_estagio_cip: "Internship - Pedagogical Innovation Centre",
    estagio: "Internship",
    estagio_916: "Internship · 9:16",
    jornadas_inovacao: "Innovation Days",
    desc_loop_esmae: "Loop animation for the <b>2026 Internal Pedagogical Innovation Days</b>, at ESMAE. Made in After Effects after organizing the artwork in Illustrator.",
    vertical: "Vertical",
    desc_savethedate: "Vertical <b>\"save the date\"</b> animation for the 2026 Internal Pedagogical Innovation Days. Native format for social media.",
    desc_horasaber_intro_full: "Opening animation for the <b>\"Hora do Saber\"</b> videocast, directed and produced at P.PORTO's Pedagogical Innovation Centre, hosted by Inês Guedes and Sílvia Geraldes. Artwork organized in <b>Illustrator</b>, animation made in <b>After Effects</b>, and sound design in <b>FL Studio</b>. All episodes were later edited in <b>Premiere Pro</b>.",
    desc_horasaber_credits_full: "Closing and credits animation for the <b>\"Hora do Saber\"</b> videocast. Artwork organized in <b>Illustrator</b>, animation made in <b>After Effects</b>, and original music composed and produced in <b>FL Studio</b>. Editing and post-production of all episodes in <b>Premiere Pro</b>.",
    eventos_producao_vivo: "Events & live production",
    desc_plurall: "Opening event of the <b>PlurALL</b> roadshow, at the Porto Innovation Center (PORTIC). Equipment setup and testing, on-site live production support, complete editing and post-production.",
    ver_no_youtube: "▸ Watch on YouTube",
    desc_utp: "Opening ceremony at ISEP's Auditório Magno, attended by the president of P.PORTO, the Minister of Education, Science and Innovation, and <b>Prime Minister Luís Montenegro</b>. Crew, equipment setup and on-site live production support.",
    producao_ao_vivo: "Live production",
    curtas_reedicoes: "Shorts & re-edits",
    desc_disturbia: "Short film directed by Gonçalo Terroso, Luís Santos, Guilherme Fangueiro and César Araújo, for the Production and Image Design course of the CTeSP. <b>Role:</b> art direction, part of the script, video editing and sound post-production in <b>Premiere Pro</b> and <b>FL Studio</b>.",
    terror_psicologico: "Psychological Horror",
    desc_50fd: "Re-edit of the film <b>\"50 First Dates\"</b>, switching genre from Comedy/Romance to Psychological Horror, in trailer format. Editing, color grading and syncing in <b>DaVinci Resolve</b>, plus additional audio recording and sound post-production in <b>FL Studio</b>.",
    anuncio_fender: "Fender ad",
    desc_fender: "Ad with an 80s/90s aesthetic for the <b>\"Fender\"</b> brand. 3D scene design and rendering in <b>Blender</b>, video editing in <b>DaVinci Resolve</b>, original music and sound design in <b>FL Studio</b>, and Java expressions in <b>After Effects</b>.",
    design_som: "Sound Design",
    desc_ironman: "Re-edit of the sound for a scene from the film <b>\"Iron Man\"</b>. Aside from the voices, none of the sounds exist in the original scene - everything was recreated from scratch.",
    minidoc: "Mini-documentary",
    desc_inverno_doc: "5-minute mini-documentary about the music project <b>\"INVERNØ\"</b>, by musicians Rui Terroso, Gabriel Maia and André Rodrigues. Made with Maria Santos and Dinis Vieira. <b>Role:</b> art direction, video editing, voice recording and sound post-production.",
    holograma: "Hologram",
    desc_s23: "Project carried out for the <b>Visual and Sound Effects</b> course (2nd year, 1st semester of the CTeSP). 3D phone animation created in <b>Blender</b>, \"hologram\" effect design, final editing and rendering in <b>DaVinci Resolve</b>, with original sound design composed in <b>FL Studio</b>.",

    // Design Gráfico
    estudos_graficos: "Graphic studies",
    estudo: "Study",
    pecas_design_note: "Graphic design pieces made in Photoshop and Illustrator.",
    identidade_fotografia: "Identity & Photography",
    desc_inverno_identidade: "Logo creation and image capture/editing for <b style=\"color:var(--text)\">INVERNØ</b>, Rui T's music project, featuring guests André Rodrigues and Gabriel Maia.",
    versao_clara: "Light version",
    desc_logo_claro: "Creation and study of the band's logo, for use on light backgrounds. Made in <b>Photoshop.</b>",
    versao_escura: "Dark version",
    desc_logo_escuro: "Creation and study of the band's logo, for use on dark backgrounds. Made in <b>Photoshop.</b>",
    desc_logo_mockup: "Simulation of the logo applied to a physical setting, in <b>Photoshop.</b>",
    sessao_fotografica: "Photo shoot",
    desc_sessao_foto: "Capture and editing of images of the band, later edited in <b>Photoshop</b>, where the logo was added, with further treatment in <b>Lightroom</b>.",
    nota: "Note",
    desc_nota_3d: "I also have occasional experience with 3D modelling and rendering (Blender / Maya), used mainly to support video projects (such as the 3D scene for the Fender ad above).",

    // Sobre
    quem_sou: "Who I am",
    sobre_mim: "About me",
    sobre_note: "Trained in Motion Design and Visual Effects, with a parallel path in music production.",
    about_quote: "\"Music producer with over 3 million streams and a background in motion design - I build sound and image that communicate.\"",
    about_p1: "I'm an audiovisual professional, trained in <strong>Motion Design and Visual Effects</strong> (CTeSP). I'm skilled in video editing, motion graphics, camera and sound capture, and music production in <strong>FL Studio</strong> - already with over <span class=\"stat\">3 million streams</span> credited for international artists.",
    about_p2: "I completed a curricular internship at the <strong>Politécnico do Porto's Pedagogical Innovation Centre</strong>, where I took part in producing institutional audiovisual content - from capture to editing, motion graphics and final post-production.",
    composicao_mistura: "Composition & mixing",
    captacao_edicao_voz: "Voice recording and editing",
    video_motion: "Video & Motion",
    captacao_camara_som: "Camera and sound capture",
    modelacao_3d: "3D modelling (Blender/Maya), occasional",

    // Contacto
    vamos_falar: "Let's talk",
    contactos: "Contact",
    contact_sub: "Available for new projects in music production, motion design, audiovisual editing and content for social media. Get in touch through any of the channels below.",
    telemovel: "Phone",

    // Footer / lightbox
    footer_portfolio: "Portfolio 2026",
    lightbox_hint: "Scroll / pinch to zoom · drag to move · double-click to enlarge · Esc to close",
  };

  const STORAGE_KEY = 'gt-portfolio-lang';

  function applyLang(lang){
    const isEN = lang === 'en';
    document.documentElement.lang = isEN ? 'en' : 'pt-PT';

    // Text content (may include inline HTML like <b>, <strong>, <span>)
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      if(el.dataset.i18nOrig === undefined) el.dataset.i18nOrig = el.innerHTML;
      const key = el.dataset.i18n;
      el.innerHTML = isEN && EN[key] !== undefined ? EN[key] : el.dataset.i18nOrig;
    });

    // alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(el=>{
      if(el.dataset.i18nAltOrig === undefined) el.dataset.i18nAltOrig = el.getAttribute('alt') || '';
      el.setAttribute('alt', isEN ? el.dataset.i18nAlt : el.dataset.i18nAltOrig);
    });

    // aria-label attributes
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el=>{
      if(el.dataset.i18nAriaLabelOrig === undefined) el.dataset.i18nAriaLabelOrig = el.getAttribute('aria-label') || '';
      el.setAttribute('aria-label', isEN ? el.dataset.i18nAriaLabel : el.dataset.i18nAriaLabelOrig);
    });

    // title attributes (e.g. <title> element and any element with a title attr)
    document.querySelectorAll('[data-i18n-title]').forEach(el=>{
      if(el.tagName === 'TITLE'){
        if(el.dataset.i18nTitleOrig === undefined) el.dataset.i18nTitleOrig = el.textContent;
        el.textContent = isEN ? el.dataset.i18nTitle : el.dataset.i18nTitleOrig;
      } else {
        if(el.dataset.i18nTitleOrig === undefined) el.dataset.i18nTitleOrig = el.getAttribute('title') || '';
        el.setAttribute('title', isEN ? el.dataset.i18nTitle : el.dataset.i18nTitleOrig);
      }
    });

    // meta content attributes
    document.querySelectorAll('[data-i18n-content]').forEach(el=>{
      if(el.dataset.i18nContentOrig === undefined) el.dataset.i18nContentOrig = el.getAttribute('content') || '';
      el.setAttribute('content', isEN ? el.dataset.i18nContent : el.dataset.i18nContentOrig);
    });

    // Toggle button state
    document.querySelectorAll('.lang-btn').forEach(btn=>{
      const active = btn.dataset.lang === (isEN ? 'en' : 'pt');
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try { localStorage.setItem(STORAGE_KEY, isEN ? 'en' : 'pt'); } catch(e){}
  }

  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> applyLang(btn.dataset.lang));
  });

  let initial = 'pt';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved === 'en' || saved === 'pt'){
      initial = saved;
    } else if(navigator.language && navigator.language.toLowerCase().indexOf('pt') !== 0){
      initial = 'en';
    }
  } catch(e){}

  applyLang(initial);
})();
