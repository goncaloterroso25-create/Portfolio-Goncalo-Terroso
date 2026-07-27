// =========================================================
// LANGUAGE SYSTEM — PT (default) / EN / ES / FR
//
// Portuguese lives in the HTML itself and is captured as the fallback
// the first time a language is applied, so it never needs a dictionary.
// Artist, band and project names (Thxuzz, PL Quest, Kevin O Chris,
// INVERNØ, Fender, "Hora do Saber"...) and software names are left
// untranslated on purpose — they're proper nouns.
// =========================================================
(function(){

  const EN = {
    intro_skip: "Skip",
    nav_inicio: "Home", nav_destaques: "Highlights", nav_projetos: "Projects",
    nav_sobre: "About", nav_contacto: "Contact",
    cv_btn: "View CV", menu_eyebrow: "Navigation",
    nav_toggle_open: "Open menu", nav_toggle_close: "Close menu",

    hero_eyebrow: "AUDIOVISUAL PORTFOLIO",
    hero_role: "<b>Multimedia Producer</b> with experience in music and audiovisual production.",
    tag_musica: "Music Production", tag_video_edit: "Video Editing", tag_design: "Graphic Design",
    hero_cta_destaques: "See highlights",
    stat_milhoes: "3 million", stat_musica_lbl: "Streams in music production",
    stat_estagio_lbl: "Internship - Pedagogical Innovation Centre",
    stat_projetos_lbl: "Video, sound and image projects",

    destaques_eyebrow: "My best projects", destaques_h2: "Highlights",
    destaques_note: "The best of my work in music production and video/image.",
    fmp_eyebrow: "Music Production",
    fmp_desc: "Over 3 million streams on tracks I composed and produced in <b style=\"color:var(--text)\">FL Studio</b> for national and international artists.",
    ouvir_spotify: "Listen on Spotify", ver_toda_musica: "See all music production",
    subhead_video_estagio: "Video - Internship at the Pedagogical Innovation Centre",
    badge_estagio_cip: "Internship · Pedagogical Innovation Centre",
    introducao: "Introduction", creditos: "Credits",
    desc_horasaber_intro: "Opening animation for P.PORTO's institutional videocast.",
    desc_horasaber_credits: "Closing and credits sequence of the videocast, with original sound design.",
    motion_ae: "Motion - After Effects", som_flstudio: "Sound - FL Studio",
    identidade_visual: "Visual Identity", badge_design_identidade: "Graphic Design · Visual Identity",
    logotipo: "Logo",
    desc_inverno_logo: "Visual identity created for the INVERNØ music project. Created and edited in <b>Photoshop</b>.",
    desc_inverno_cover: "Cover photography created for the INVERNØ music project. Image capture for use in campaigns and promotion. Edited in <b>Photoshop</b> and <b>Lightroom</b>.",
    ver_projeto_completo: "See full project",

    portfolio: "Portfolio", projetos_h2: "Projects",
    projetos_note: "Projects carried out in different areas of audiovisual production.",
    tag_video_img: "Video & Image",

    faixas_destaque: "FEATURED TRACKS",
    creditos_composicoes: "Credits & original compositions",
    creditos_prod_musical: "Music Production Credits",
    desc_creditos_musical: "Production for several international artists, such as <b>Thxuzz</b>, <b>PL Quest</b> and <b>Kevin O Chris</b>, among others. Over <b>3 million streams/views</b> across streaming platforms.",
    ver_playlist_completa: "See full playlist",
    desc_cidade_vazia: "Musical poem <b>\"Cidade Vazia\"</b> by Rui T, created for a future audiobook. Melodic composition, vocal recording, editing and post-production by me.",
    ver_no_instagram: "View on Instagram",
    desc_amor_guerra: "Musical poem <b>\"Amor em Tempo de Guerra\"</b> by Rui T, created for a future audiobook. Melodic composition, vocal recording, editing and post-production by me.",

    subhead_estagio_cip: "Internship - Pedagogical Innovation Centre",
    estagio: "Internship", estagio_916: "Internship · 9:16",
    jornadas_inovacao: "Innovation Days",
    desc_loop_esmae: "Loop animation for the <b>2026 Internal Pedagogical Innovation Days</b>, at ESMAE. Made in After Effects after organizing the artwork in Illustrator.",
    vertical: "Vertical",
    desc_savethedate: "Vertical <b>\"save the date\"</b> animation for the 2026 Internal Pedagogical Innovation Days. Native format for social media.",
    desc_horasaber_intro_full: "Opening animation for the <b>\"Hora do Saber\"</b> videocast, directed and produced at P.PORTO's Pedagogical Innovation Centre, hosted by Inês Guedes and Sílvia Geraldes. Artwork organized in <b>Illustrator</b>, animation made in <b>After Effects</b>, and sound design in <b>FL Studio</b>. All episodes were later edited in <b>Premiere Pro</b>.",
    desc_horasaber_credits_full: "Closing and credits animation for the <b>\"Hora do Saber\"</b> videocast. Artwork organized in <b>Illustrator</b>, animation made in <b>After Effects</b>, and original music composed and produced in <b>FL Studio</b>. Editing and post-production of all episodes in <b>Premiere Pro</b>.",
    eventos_producao_vivo: "Events & live production",
    desc_plurall: "Opening event of the <b>PlurALL</b> roadshow, at the Porto Innovation Center (PORTIC). Equipment setup and testing, on-site live production support, complete editing and post-production.",
    ver_no_youtube: "Watch on YouTube",
    desc_utp: "Opening ceremony at ISEP's Auditório Magno, attended by the president of P.PORTO, the Minister of Education, Science and Innovation, and <b>Prime Minister Luís Montenegro</b>. Crew, equipment setup and on-site live production support.",
    producao_ao_vivo: "Live production", curtas_reedicoes: "Shorts & re-edits",
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

    estudos_graficos: "Graphic studies", estudo: "Study",
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

    quem_sou: "Who I am", sobre_mim: "About me",
    sobre_note: "Trained in Motion Design and Visual Effects, with a parallel path in music production.",
    about_quote: "\"Music producer with over 3 million streams and a background in motion design - I build sound and image that communicate.\"",
    about_p1: "I'm an audiovisual professional, trained in <strong>Motion Design and Visual Effects</strong> (CTeSP). I'm skilled in video editing, motion graphics, camera and sound capture, and music production in <strong>FL Studio</strong> - already with over <span class=\"stat\">3 million streams</span> credited for international artists.",
    about_p2: "I completed a curricular internship at the <strong>Politécnico do Porto's Pedagogical Innovation Centre</strong>, where I took part in producing institutional audiovisual content - from capture to editing, motion graphics and final post-production.",
    composicao_mistura: "Composition & mixing", captacao_edicao_voz: "Voice recording and editing",
    video_motion: "Video & Motion", captacao_camara_som: "Camera and sound capture",
    modelacao_3d: "3D modelling (Blender/Maya), occasional",

    vamos_falar: "Let's talk", contactos: "Contact",
    contact_sub: "Available for new projects in music production, motion design, audiovisual editing and content for social media. Get in touch through any of the channels below.",
    contact_linkedin_val: "Professional profile", contact_cv_lbl: "Résumé", contact_cv_val: "CV as PDF", contact_github_val: "Code repositories",
    telemovel: "Phone",
    footer_portfolio: "Portfolio 2026",
    lightbox_hint: "Scroll / pinch to zoom · drag to move · double-click to enlarge · Esc to close",

    // Colour picker (theming control) — not the language/nav copy above,
    // but the same completeness rule applies.
    cp_site_color: "Site colour", cp_color_label: "Colour", cp_hue: "Hue", cp_reset: "Reset",
  };

  const ES = {
    intro_skip: "Saltar",
    nav_inicio: "Inicio", nav_destaques: "Destacados", nav_projetos: "Proyectos",
    nav_sobre: "Sobre mí", nav_contacto: "Contacto",
    cv_btn: "Ver CV", menu_eyebrow: "Navegación",
    nav_toggle_open: "Abrir menú", nav_toggle_close: "Cerrar menú",

    hero_eyebrow: "PORTFOLIO AUDIOVISUAL",
    hero_role: "<b>Multimedia Producer</b> con experiencia en producción musical y audiovisual.",
    tag_musica: "Producción Musical", tag_video_edit: "Edición de vídeo", tag_design: "Diseño Gráfico",
    hero_cta_destaques: "Ver destacados",
    stat_milhoes: "3 millones", stat_musica_lbl: "Reproducciones en producción musical",
    stat_estagio_lbl: "Prácticas - Centro de Innovación Pedagógica",
    stat_projetos_lbl: "Proyectos de vídeo, sonido e imagen",

    destaques_eyebrow: "Mis mejores proyectos", destaques_h2: "Destacados",
    destaques_note: "Lo mejor de mi trabajo en producción musical y vídeo/imagen.",
    fmp_eyebrow: "Producción musical",
    fmp_desc: "Más de 3 millones de reproducciones en temas que compuse y produje en <b style=\"color:var(--text)\">FL Studio</b> para artistas nacionales e internacionales.",
    ouvir_spotify: "Escuchar en Spotify", ver_toda_musica: "Ver toda la producción musical",
    subhead_video_estagio: "Vídeo - Prácticas en el Centro de Innovación Pedagógica",
    badge_estagio_cip: "Prácticas · Centro de Innovación Pedagógica",
    introducao: "Introducción", creditos: "Créditos",
    desc_horasaber_intro: "Animación de apertura del videocast institucional del P.PORTO.",
    desc_horasaber_credits: "Cierre y créditos del videocast, con sonorización propia.",
    motion_ae: "Motion - After Effects", som_flstudio: "Sonido - FL Studio",
    identidade_visual: "Identidad Visual", badge_design_identidade: "Diseño Gráfico · Identidad Visual",
    logotipo: "Logotipo",
    desc_inverno_logo: "Creación de identidad visual para el proyecto musical INVERNØ. Creada y editada en <b>Photoshop</b>.",
    desc_inverno_cover: "Creación de fotografía de portada para el proyecto musical INVERNØ. Captación de imágenes para campañas y difusión. Editado en <b>Photoshop</b> y <b>Lightroom</b>.",
    ver_projeto_completo: "Ver proyecto completo",

    portfolio: "Portfolio", projetos_h2: "Proyectos",
    projetos_note: "Proyectos realizados en distintas áreas de la producción audiovisual.",
    tag_video_img: "Vídeo e Imagen",

    faixas_destaque: "TEMAS DESTACADOS",
    creditos_composicoes: "Créditos y composiciones originales",
    creditos_prod_musical: "Créditos de Producción Musical",
    desc_creditos_musical: "Producción para varios artistas a nivel internacional, como <b>Thxuzz</b>, <b>PL Quest</b> y <b>Kevin O Chris</b>, entre otros. Más de <b>3 millones de reproducciones</b> en las plataformas de streaming.",
    ver_playlist_completa: "Ver playlist completa",
    desc_cidade_vazia: "Poema musical <b>\"Cidade Vazia\"</b> de Rui T, en el marco de un futuro audiolibro. Composición melódica, grabación de voz, edición y postproducción a mi cargo.",
    ver_no_instagram: "Ver en Instagram",
    desc_amor_guerra: "Poema musical <b>\"Amor em Tempo de Guerra\"</b> de Rui T, en el marco de un futuro audiolibro. Composición melódica, grabación de voz, edición y postproducción a mi cargo.",

    subhead_estagio_cip: "Prácticas - Centro de Innovación Pedagógica",
    estagio: "Prácticas", estagio_916: "Prácticas · 9:16",
    jornadas_inovacao: "Jornadas de Innovación",
    desc_loop_esmae: "Animación en bucle para las <b>Jornadas Internas de Innovación Pedagógica 2026</b>, en ESMAE. Realizada en After Effects tras organizar el material gráfico en Illustrator.",
    vertical: "Vertical",
    desc_savethedate: "Animación vertical <b>\"save the date\"</b> para las Jornadas Internas de Innovación Pedagógica 2026. Formato nativo para redes sociales.",
    desc_horasaber_intro_full: "Animación de apertura del videocast <b>\"Hora do Saber\"</b>, dirigido y producido en el Centro de Innovación Pedagógica del P.PORTO, presentado por Inês Guedes y Sílvia Geraldes. Material gráfico organizado en <b>Illustrator</b>, animación en <b>After Effects</b> y sonorización en <b>FL Studio</b>. Todos los episodios se editaron después en <b>Premiere Pro</b>.",
    desc_horasaber_credits_full: "Animación de cierre y créditos del videocast <b>\"Hora do Saber\"</b>. Material gráfico organizado en <b>Illustrator</b>, animación en <b>After Effects</b> y música original compuesta y producida en <b>FL Studio</b>. Edición y postproducción de todos los episodios en <b>Premiere Pro</b>.",
    eventos_producao_vivo: "Eventos y producción en directo",
    desc_plurall: "Evento de apertura del roadshow <b>PlurALL</b>, en el Porto Innovation Center (PORTIC). Montaje y pruebas de equipos, apoyo a la producción en directo, edición completa y postproducción.",
    ver_no_youtube: "Ver en YouTube",
    desc_utp: "Ceremonia de apertura en el Auditório Magno del ISEP, con la presencia del presidente del P.PORTO, la Ministra de Educación, Ciencia e Innovación y el <b>Primer Ministro Luís Montenegro</b>. Equipo, montaje técnico y apoyo a la producción en directo.",
    producao_ao_vivo: "Producción en directo", curtas_reedicoes: "Cortos y reediciones",
    desc_disturbia: "Cortometraje dirigido por Gonçalo Terroso, Luís Santos, Guilherme Fangueiro y César Araújo, para la asignatura de Producción y Diseño de Imagen del CTeSP. <b>Función:</b> dirección de arte, parte del guion, edición de vídeo y postproducción de sonido en <b>Premiere Pro</b> y <b>FL Studio</b>.",
    terror_psicologico: "Terror Psicológico",
    desc_50fd: "Reedición de la película <b>\"50 First Dates\"</b>, cambiando el género de Comedia/Romance a Terror Psicológico, en formato tráiler. Edición, etalonaje y sincronización en <b>DaVinci Resolve</b>, además de grabación de audio adicional y postproducción de sonido en <b>FL Studio</b>.",
    anuncio_fender: "Anuncio Fender",
    desc_fender: "Anuncio con estética de los años 80/90 para la marca <b>\"Fender\"</b>. Diseño y renderizado de escena 3D en <b>Blender</b>, edición de vídeo en <b>DaVinci Resolve</b>, música original y diseño sonoro en <b>FL Studio</b>, y expresiones Java en <b>After Effects</b>.",
    design_som: "Diseño Sonoro",
    desc_ironman: "Reedición del sonido de una escena de la película <b>\"Iron Man\"</b>. Salvo las voces, ninguno de los sonidos existe en la escena original: todo fue recreado desde cero.",
    minidoc: "Minidocumental",
    desc_inverno_doc: "Minidocumental de 5 minutos sobre el proyecto musical <b>\"INVERNØ\"</b>, de los músicos Rui Terroso, Gabriel Maia y André Rodrigues. Realizado con Maria Santos y Dinis Vieira. <b>Función:</b> dirección de arte, edición de vídeo, grabación de voz y postproducción de sonido.",
    holograma: "Holograma",
    desc_s23: "Proyecto realizado para la asignatura de <b>Efectos Visuales y Sonoros</b> (2.º año, 1.er semestre del CTeSP). Animación 3D del teléfono creada en <b>Blender</b>, diseño del efecto \"holograma\", edición final y renderizado en <b>DaVinci Resolve</b>, con diseño sonoro original compuesto en <b>FL Studio</b>.",

    estudos_graficos: "Estudios gráficos", estudo: "Estudio",
    pecas_design_note: "Piezas de diseño gráfico realizadas en Photoshop e Illustrator.",
    identidade_fotografia: "Identidad y Fotografía",
    desc_inverno_identidade: "Creación de logotipo y captación/edición de imagen para <b style=\"color:var(--text)\">INVERNØ</b>, el proyecto musical de Rui T, con la colaboración de André Rodrigues y Gabriel Maia.",
    versao_clara: "Versión clara",
    desc_logo_claro: "Creación y estudio del logotipo de la banda, para aplicar sobre fondos claros. Realizado en <b>Photoshop.</b>",
    versao_escura: "Versión oscura",
    desc_logo_escuro: "Creación y estudio del logotipo de la banda, para aplicar sobre fondos oscuros. Realizado en <b>Photoshop.</b>",
    desc_logo_mockup: "Simulación del logotipo aplicado en un entorno físico, en <b>Photoshop.</b>",
    sessao_fotografica: "Sesión fotográfica",
    desc_sessao_foto: "Captación y edición de imagen de la banda, editada posteriormente en <b>Photoshop</b>, donde se insertó el logotipo, con tratamiento en <b>Lightroom</b>.",
    nota: "Nota",
    desc_nota_3d: "También tengo experiencia puntual en modelado y renderizado 3D (Blender / Maya), usada sobre todo como apoyo a proyectos de vídeo (como la escena del anuncio Fender arriba).",

    quem_sou: "Quién soy", sobre_mim: "Sobre mí",
    sobre_note: "Formación en Motion Design y Efectos Visuales, con una trayectoria paralela en producción musical.",
    about_quote: "\"Productor musical con más de 3 millones de reproducciones y formación en motion design: construyo sonido e imagen que comunican.\"",
    about_p1: "Soy profesional del sector audiovisual, con formación en <strong>Motion Design y Efectos Visuales</strong> (CTeSP). Domino la edición de vídeo, los motion graphics, la captación de cámara y sonido, y la producción musical en <strong>FL Studio</strong>, ya con más de <span class=\"stat\">3 millones de reproducciones</span> acreditadas para artistas internacionales.",
    about_p2: "Realicé prácticas curriculares en el <strong>Centro de Innovación Pedagógica del Politécnico do Porto</strong>, donde participé en la producción de contenidos audiovisuales institucionales: desde la captación hasta la edición, los motion graphics y la postproducción final.",
    composicao_mistura: "Composición y mezcla", captacao_edicao_voz: "Grabación y edición de voz",
    video_motion: "Vídeo y Motion", captacao_camara_som: "Captación de cámara y sonido",
    modelacao_3d: "Modelado 3D (Blender/Maya), puntual",

    vamos_falar: "Hablemos", contactos: "Contacto",
    contact_sub: "Disponible para nuevos proyectos de producción musical, motion design, edición audiovisual y contenidos para redes sociales. Contacta por cualquiera de los canales de abajo.",
    contact_linkedin_val: "Perfil profesional", contact_cv_lbl: "Currículum", contact_cv_val: "CV en PDF", contact_github_val: "Repositorios de código",
    telemovel: "Teléfono",
    footer_portfolio: "Portfolio 2026",
    lightbox_hint: "Scroll / pellizcar para zoom · arrastra para mover · doble clic para ampliar · Esc cierra",

    cp_site_color: "Color del sitio", cp_color_label: "Color", cp_hue: "Matiz", cp_reset: "Restablecer",
  };

  const FR = {
    intro_skip: "Passer",
    nav_inicio: "Accueil", nav_destaques: "Sélection", nav_projetos: "Projets",
    nav_sobre: "À propos", nav_contacto: "Contact",
    cv_btn: "Voir le CV", menu_eyebrow: "Navigation",
    nav_toggle_open: "Ouvrir le menu", nav_toggle_close: "Fermer le menu",

    hero_eyebrow: "PORTFOLIO AUDIOVISUEL",
    hero_role: "<b>Multimedia Producer</b> avec une expérience en production musicale et audiovisuelle.",
    tag_musica: "Production Musicale", tag_video_edit: "Montage vidéo", tag_design: "Design Graphique",
    hero_cta_destaques: "Voir la sélection",
    stat_milhoes: "3 millions", stat_musica_lbl: "Écoutes en production musicale",
    stat_estagio_lbl: "Stage - Centre d'Innovation Pédagogique",
    stat_projetos_lbl: "Projets vidéo, son et image",

    destaques_eyebrow: "Mes meilleurs projets", destaques_h2: "Sélection",
    destaques_note: "Le meilleur de mon travail en production musicale et vidéo/image.",
    fmp_eyebrow: "Production musicale",
    fmp_desc: "Plus de 3 millions d'écoutes sur des titres que j'ai composés et produits dans <b style=\"color:var(--text)\">FL Studio</b> pour des artistes nationaux et internationaux.",
    ouvir_spotify: "Écouter sur Spotify", ver_toda_musica: "Voir toute la production musicale",
    subhead_video_estagio: "Vidéo - Stage au Centre d'Innovation Pédagogique",
    badge_estagio_cip: "Stage · Centre d'Innovation Pédagogique",
    introducao: "Introduction", creditos: "Générique",
    desc_horasaber_intro: "Animation d'ouverture du videocast institutionnel du P.PORTO.",
    desc_horasaber_credits: "Clôture et générique du videocast, avec habillage sonore original.",
    motion_ae: "Motion - After Effects", som_flstudio: "Son - FL Studio",
    identidade_visual: "Identité Visuelle", badge_design_identidade: "Design Graphique · Identité Visuelle",
    logotipo: "Logo",
    desc_inverno_logo: "Création de l'identité visuelle du projet musical INVERNØ. Créée et retouchée dans <b>Photoshop</b>.",
    desc_inverno_cover: "Création de la photographie de couverture du projet musical INVERNØ. Prise de vue destinée aux campagnes et à la promotion. Retouche dans <b>Photoshop</b> et <b>Lightroom</b>.",
    ver_projeto_completo: "Voir le projet complet",

    portfolio: "Portfolio", projetos_h2: "Projets",
    projetos_note: "Projets réalisés dans différents domaines de la production audiovisuelle.",
    tag_video_img: "Vidéo & Image",

    faixas_destaque: "TITRES SÉLECTIONNÉS",
    creditos_composicoes: "Crédits & compositions originales",
    creditos_prod_musical: "Crédits de Production Musicale",
    desc_creditos_musical: "Production pour plusieurs artistes internationaux, comme <b>Thxuzz</b>, <b>PL Quest</b> et <b>Kevin O Chris</b>, entre autres. Plus de <b>3 millions d'écoutes/vues</b> sur les plateformes de streaming.",
    ver_playlist_completa: "Voir la playlist complète",
    desc_cidade_vazia: "Poème musical <b>\"Cidade Vazia\"</b> de Rui T, dans le cadre d'un futur livre audio. Composition mélodique, prise de voix, montage et post-production réalisés par mes soins.",
    ver_no_instagram: "Voir sur Instagram",
    desc_amor_guerra: "Poème musical <b>\"Amor em Tempo de Guerra\"</b> de Rui T, dans le cadre d'un futur livre audio. Composition mélodique, prise de voix, montage et post-production réalisés par mes soins.",

    subhead_estagio_cip: "Stage - Centre d'Innovation Pédagogique",
    estagio: "Stage", estagio_916: "Stage · 9:16",
    jornadas_inovacao: "Journées de l'Innovation",
    desc_loop_esmae: "Animation en boucle pour les <b>Journées Internes de l'Innovation Pédagogique 2026</b>, à l'ESMAE. Réalisée dans After Effects après organisation des éléments graphiques dans Illustrator.",
    vertical: "Vertical",
    desc_savethedate: "Animation verticale <b>\"save the date\"</b> pour les Journées Internes de l'Innovation Pédagogique 2026. Format natif pour les réseaux sociaux.",
    desc_horasaber_intro_full: "Animation d'ouverture du videocast <b>\"Hora do Saber\"</b>, dirigé et produit au Centre d'Innovation Pédagogique du P.PORTO, présenté par Inês Guedes et Sílvia Geraldes. Éléments graphiques organisés dans <b>Illustrator</b>, animation dans <b>After Effects</b> et habillage sonore dans <b>FL Studio</b>. Tous les épisodes ont ensuite été montés dans <b>Premiere Pro</b>.",
    desc_horasaber_credits_full: "Animation de clôture et générique du videocast <b>\"Hora do Saber\"</b>. Éléments graphiques organisés dans <b>Illustrator</b>, animation dans <b>After Effects</b> et musique originale composée et produite dans <b>FL Studio</b>. Montage et post-production de tous les épisodes dans <b>Premiere Pro</b>.",
    eventos_producao_vivo: "Événements & production en direct",
    desc_plurall: "Événement d'ouverture du roadshow <b>PlurALL</b>, au Porto Innovation Center (PORTIC). Installation et tests du matériel, soutien à la production en direct sur place, montage complet et post-production.",
    ver_no_youtube: "Voir sur YouTube",
    desc_utp: "Cérémonie d'ouverture à l'Auditório Magno de l'ISEP, en présence du président du P.PORTO, de la Ministre de l'Éducation, de la Science et de l'Innovation, et du <b>Premier ministre Luís Montenegro</b>. Équipe, installation technique et soutien à la production en direct.",
    producao_ao_vivo: "Production en direct", curtas_reedicoes: "Courts-métrages & remontages",
    desc_disturbia: "Court-métrage réalisé par Gonçalo Terroso, Luís Santos, Guilherme Fangueiro et César Araújo, pour le cours de Production et Design d'Image du CTeSP. <b>Rôle :</b> direction artistique, partie du scénario, montage vidéo et post-production sonore dans <b>Premiere Pro</b> et <b>FL Studio</b>.",
    terror_psicologico: "Horreur Psychologique",
    desc_50fd: "Remontage du film <b>\"50 First Dates\"</b>, passant du genre Comédie/Romance à l'Horreur Psychologique, au format bande-annonce. Montage, étalonnage et synchronisation dans <b>DaVinci Resolve</b>, avec enregistrement audio supplémentaire et post-production sonore dans <b>FL Studio</b>.",
    anuncio_fender: "Publicité Fender",
    desc_fender: "Publicité à l'esthétique des années 80/90 pour la marque <b>\"Fender\"</b>. Conception et rendu de la scène 3D dans <b>Blender</b>, montage vidéo dans <b>DaVinci Resolve</b>, musique originale et design sonore dans <b>FL Studio</b>, et expressions Java dans <b>After Effects</b>.",
    design_som: "Design Sonore",
    desc_ironman: "Remontage sonore d'une scène du film <b>\"Iron Man\"</b>. À l'exception des voix, aucun des sons n'existe dans la scène d'origine : tout a été recréé de zéro.",
    minidoc: "Mini-documentaire",
    desc_inverno_doc: "Mini-documentaire de 5 minutes sur le projet musical <b>\"INVERNØ\"</b>, des musiciens Rui Terroso, Gabriel Maia et André Rodrigues. Réalisé avec Maria Santos et Dinis Vieira. <b>Rôle :</b> direction artistique, montage vidéo, prise de voix et post-production sonore.",
    holograma: "Hologramme",
    desc_s23: "Projet réalisé pour le cours d'<b>Effets Visuels et Sonores</b> (2e année, 1er semestre du CTeSP). Animation 3D du téléphone créée dans <b>Blender</b>, conception de l'effet \"hologramme\", montage final et rendu dans <b>DaVinci Resolve</b>, avec un design sonore original composé dans <b>FL Studio</b>.",

    estudos_graficos: "Études graphiques", estudo: "Étude",
    pecas_design_note: "Pièces de design graphique réalisées dans Photoshop et Illustrator.",
    identidade_fotografia: "Identité & Photographie",
    desc_inverno_identidade: "Création du logo et prise de vue/retouche pour <b style=\"color:var(--text)\">INVERNØ</b>, le projet musical de Rui T, avec la participation d'André Rodrigues et Gabriel Maia.",
    versao_clara: "Version claire",
    desc_logo_claro: "Création et étude du logo du groupe, pour une application sur fonds clairs. Réalisé dans <b>Photoshop.</b>",
    versao_escura: "Version sombre",
    desc_logo_escuro: "Création et étude du logo du groupe, pour une application sur fonds sombres. Réalisé dans <b>Photoshop.</b>",
    desc_logo_mockup: "Simulation du logo appliqué dans un environnement physique, dans <b>Photoshop.</b>",
    sessao_fotografica: "Séance photo",
    desc_sessao_foto: "Prise de vue et retouche des images du groupe, retravaillées ensuite dans <b>Photoshop</b>, où le logo a été intégré, avec un traitement dans <b>Lightroom</b>.",
    nota: "Note",
    desc_nota_3d: "J'ai également une expérience ponctuelle en modélisation et rendu 3D (Blender / Maya), utilisée surtout en appui de projets vidéo (comme le décor de la publicité Fender ci-dessus).",

    quem_sou: "Qui je suis", sobre_mim: "À propos",
    sobre_note: "Formation en Motion Design et Effets Visuels, avec un parcours parallèle en production musicale.",
    about_quote: "\"Producteur musical avec plus de 3 millions d'écoutes et une formation en motion design - je construis du son et de l'image qui communiquent.\"",
    about_p1: "Je suis un professionnel de l'audiovisuel, formé en <strong>Motion Design et Effets Visuels</strong> (CTeSP). Je maîtrise le montage vidéo, le motion graphics, la prise de vue et de son, et la production musicale dans <strong>FL Studio</strong> - avec déjà plus de <span class=\"stat\">3 millions d'écoutes</span> créditées pour des artistes internationaux.",
    about_p2: "J'ai effectué un stage curriculaire au <strong>Centre d'Innovation Pédagogique du Politécnico do Porto</strong>, où j'ai participé à la production de contenus audiovisuels institutionnels - de la prise de vue au montage, au motion graphics et à la post-production finale.",
    composicao_mistura: "Composition & mixage", captacao_edicao_voz: "Prise et montage de voix",
    video_motion: "Vidéo & Motion", captacao_camara_som: "Prise de vue et de son",
    modelacao_3d: "Modélisation 3D (Blender/Maya), ponctuelle",

    vamos_falar: "Parlons-en", contactos: "Contact",
    contact_sub: "Disponible pour de nouveaux projets en production musicale, motion design, montage audiovisuel et contenus pour les réseaux sociaux. Contactez-moi par l'un des canaux ci-dessous.",
    contact_linkedin_val: "Profil professionnel", contact_cv_lbl: "Curriculum", contact_cv_val: "CV en PDF", contact_github_val: "Dépôts de code",
    telemovel: "Téléphone",
    footer_portfolio: "Portfolio 2026",
    lightbox_hint: "Défiler / pincer pour zoomer · glisser pour déplacer · double-clic pour agrandir · Échap ferme",

    cp_site_color: "Couleur du site", cp_color_label: "Couleur", cp_hue: "Teinte", cp_reset: "Réinitialiser",
  };

  const DICTS = { en: EN, es: ES, fr: FR };
  const HTML_LANG = { pt:'pt-PT', en:'en', es:'es', fr:'fr' };
  const STORAGE_KEY = 'gt-portfolio-lang';

  // Portuguese is the markup itself: the first time we translate we stash
  // the original text so switching back is lossless.
  function stash(el, prop, value){
    if(el.dataset[prop] === undefined) el.dataset[prop] = value;
    return el.dataset[prop];
  }

  function applyLang(lang, animate){
    const dict = DICTS[lang] || null;   // null => Portuguese
    document.documentElement.lang = HTML_LANG[lang] || 'pt-PT';

    const swap = ()=>{
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const orig = stash(el, 'i18nOrig', el.innerHTML);
        const key = el.dataset.i18n;
        el.innerHTML = (dict && dict[key] !== undefined) ? dict[key] : orig;
      });
      document.querySelectorAll('[data-i18n-alt]').forEach(el=>{
        const orig = stash(el, 'i18nAltOrig', el.getAttribute('alt') || '');
        const key = el.dataset.i18nAlt;
        // alt strings are only authored in EN; other languages fall back to PT
        el.setAttribute('alt', lang === 'en' ? key : orig);
      });
      document.querySelectorAll('[data-i18n-aria-label]').forEach(el=>{
        const orig = stash(el, 'i18nAriaLabelOrig', el.getAttribute('aria-label') || '');
        const key = el.dataset.i18nAriaLabel;
        const translated = dict && dict[key] !== undefined ? dict[key] : null;
        el.setAttribute('aria-label', translated || (lang === 'en' ? key : orig));
      });
      document.querySelectorAll('[data-i18n-title]').forEach(el=>{
        if(el.tagName === 'TITLE'){
          const orig = stash(el, 'i18nTitleOrig', el.textContent);
          el.textContent = lang === 'en' ? el.dataset.i18nTitle : orig;
        } else {
          const orig = stash(el, 'i18nTitleOrig', el.getAttribute('title') || '');
          el.setAttribute('title', lang === 'en' ? el.dataset.i18nTitle : orig);
        }
      });
      document.querySelectorAll('[data-i18n-content]').forEach(el=>{
        const orig = stash(el, 'i18nContentOrig', el.getAttribute('content') || '');
        el.setAttribute('content', lang === 'en' ? el.dataset.i18nContent : orig);
      });

      // selector state, in both the desktop menu and the mobile overlay
      document.querySelectorAll('.lang-opt').forEach(btn=>{
        const on = btn.dataset.lang === lang;
        btn.classList.toggle('active', on);
        if(btn.hasAttribute('role')) btn.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      const code = document.getElementById('langCurrentCode');
      if(code) code.textContent = lang.toUpperCase();

      // the menu button swaps its own label between open/closed states,
      // so it needs both strings rather than a single aria-label
      const toggle = document.getElementById('navToggle');
      if(toggle){
        const openLbl  = (dict && dict.nav_toggle_open)  || 'Abrir menu';
        const closeLbl = (dict && dict.nav_toggle_close) || 'Fechar menu';
        toggle.dataset.labelOpen  = openLbl;
        toggle.dataset.labelClose = closeLbl;
        toggle.setAttribute('aria-label',
          toggle.getAttribute('aria-expanded') === 'true' ? closeLbl : openLbl);
      }
    };

    // A short cross-fade keeps the swap from feeling like a page reload.
    // Scroll position is untouched, so the visitor stays exactly where they were.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(animate && !reduceMotion){
      document.body.classList.add('lang-swapping');
      setTimeout(()=>{
        swap();
        document.body.classList.remove('lang-swapping');
      }, 180);
    } else {
      swap();
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
  }

  // ---- selector wiring ----
  const select = document.getElementById('langSelect');
  const current = document.getElementById('langCurrent');
  if(select && current){
    current.addEventListener('click', (e)=>{
      e.stopPropagation();
      const open = select.classList.toggle('open');
      current.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', ()=>{
      select.classList.remove('open');
      current.setAttribute('aria-expanded','false');
    });
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape'){
        select.classList.remove('open');
        current.setAttribute('aria-expanded','false');
      }
    });
  }

  document.querySelectorAll('.lang-opt').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      applyLang(btn.dataset.lang, true);
      if(select){
        select.classList.remove('open');
        if(current) current.setAttribute('aria-expanded','false');
      }
    });
  });

  // ---- initial language: saved choice, else browser preference, else PT ----
  let initial = 'pt';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved && (saved === 'pt' || DICTS[saved])){
      initial = saved;
    } else {
      const nav = (navigator.language || 'pt').toLowerCase();
      if(nav.startsWith('es')) initial = 'es';
      else if(nav.startsWith('fr')) initial = 'fr';
      else if(!nav.startsWith('pt')) initial = 'en';
    }
  } catch(e){}

  applyLang(initial, false);
})();
