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
    meta_title: "Gonçalo Terroso: Multimedia Creative",
    meta_description: "Gonçalo Terroso's multimedia portfolio: video editing, motion graphics, sound design, music production and creative technology.",
    meta_social_title: "Gonçalo Terroso: Multimedia Portfolio",
    meta_social_description: "Audiovisual, sound, music and creative technology in Gonçalo Terroso's multidisciplinary work.",
    intro_skip: "Skip",
    nav_inicio: "Home", nav_destaques: "Highlights", nav_projetos: "Projects",
    nav_sobre: "About", nav_contacto: "Contact",
    cv_btn: "View CV", menu_eyebrow: "Navigation",
    nav_toggle_open: "Open menu", nav_toggle_close: "Close menu",

    hero_eyebrow: "MULTIMEDIA PORTFOLIO",
    hero_role: "<b>Multimedia Creative</b> working across audiovisual, sound and digital experiences.",
    tag_musica: "Music Production", tag_video_edit: "Video Editing", tag_motion_graphics: "Motion Graphics",
    tag_sound_design: "Sound Design", tag_design: "Graphic Design", tag_visual_design: "Visual Design",
    tag_creative_tech: "Creative Technology",
    hero_cta_destaques: "See highlights",
    stat_milhoes: "3 million", stat_musica_lbl: "Streams in music production",
    stat_estagio_lbl: "Internship - Pedagogical Innovation Centre",
    stat_projetos_lbl: "Sound, moving image and interaction projects",

    destaques_eyebrow: "My best projects", destaques_h2: "Highlights",
    destaques_note: "Quick proof of a practice spanning sound, moving image and interaction.",
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
    highlight_interaction: "Sound + Image + Interaction",
    highlight_sheepy_desc: "A complete pixel-art exploration game bringing together visual direction, interaction, original music and sound design.",
    explore_project: "Explore project",
    alt_sheepy_title: "Sheepy World: A Cheeky Tale title screen",

    portfolio: "Portfolio", projetos_h2: "Projects",
    projetos_note: "Selected work across sound, moving image, design and interactive experiences.",
    tag_video_motion: "Video & Motion",
    projects_categories_aria: "Project categories",
    technologies_aria: "Technologies",

    tech_intro: "A concise visual introduction to each project; GitHub holds the documentation, decisions and technical detail.",
    tech_game_kicker: "Game · Interactive experience",
    tech_app_kicker: "Digital product · Android",
    sheepy_desc: "A complete pixel-art exploration game with connected regions, memory restoration, dialogue, controller support, save persistence and a native Windows build.",
    sheepy_role: "<strong>My role:</strong> concept, game design, creative direction, iterative development, original music, sound design and QA, using an AI-assisted workflow.",
    sweep_desc: "A functional Android app that scans accessible storage and organises files and app tools for on-device review, with no Internet permission.",
    sweep_role: "<strong>My role:</strong> product concept, feature definition, UX/UI direction, interaction design, testing, debugging, iteration and release decisions; AI-assisted implementation.",
    view_github: "View on GitHub", windows_release: "Windows release",
    aria_sheepy_github: "View Sheepy World on GitHub (opens in a new tab)",
    aria_sheepy_windows: "View the Sheepy World Windows release (opens in a new tab)",
    aria_sweep_github: "View Sweep on GitHub (opens in a new tab)",
    alt_sheepy_gameplay: "Concert scene in Sheepy World's Porto region",
    alt_sweep_categories: "Storage cleanup and management categories in the Sweep app",
    alt_profile_intro: "Gonçalo Terroso", alt_profile_portrait: "Portrait of Gonçalo Terroso",
    aria_thxuzz_spotify: "Listen to Thxuzz on Spotify", aria_pl_quest_spotify: "Listen to PL Quest on Spotify",
    aria_kevin_spotify: "Listen to Kevin O Chris on Spotify", aria_tomazacre_spotify: "Listen to Tomazacre on Spotify",
    aria_dege_spotify: "Listen to DEGE on Spotify", aria_ngc_spotify: "Listen to NGC Daddy on Spotify",
    aria_playlist_spotify: "Open full playlist on Spotify", alt_freestyle_spotify: "Freestyle 03 on Spotify",
    aria_cidade_instagram: "Open Cidade Vazia on Instagram", aria_amor_instagram: "Open Amor em Tempo de Guerra on Instagram",
    alt_plurall_youtube: "PlurALL Roadshow on YouTube",
    alt_utp_youtube: "Universidade Técnica do Porto opening ceremony on YouTube",
    project_close: "Close project", project_nav_aria: "Project sections",
    overview: "Overview", gallery: "Gallery", role_process: "Role &amp; Process",
    gallery_previous: "Previous image", gallery_next: "Next image",
    sheepy_gallery_aria: "Sheepy World gallery", sweep_gallery_aria: "Sweep gallery",
    aria_explore_sheepy: "Explore the Sheepy World project", aria_explore_sweep: "Explore the Sweep project",
    lightbox_aria: "Image viewer",
    sheepy_detail_lead: "A pixel-art exploration experience where memories, places and small interactions shape progression.",
    sheepy_world_title: "Exploration with purpose",
    sheepy_world_copy: "The world connects Autumn Park, River Town, Vila Meow, Snow, Porto and other regions. Memories progress through clues, conversations and Scrapbook fragments, without a traditional quest list.",
    sheepy_systems_title: "Characters and systems",
    sheepy_systems_copy: "Dialogue choices, repeatable interactions, three cats with their own behaviours and a post-game Together Mode bring the spaces to life.",
    sheepy_complete_title: "A complete experience",
    sheepy_complete_copy: "Keyboard and controller support, persistent saves, fullscreen and native Windows distribution make the project playable from beginning to end.",
    sheepy_audio_title: "Sound as part of the world",
    sheepy_audio_copy: "Original music, bespoke sound design for UI and interactions, and audio direction for the wider sound palette.",
    sheepy_role_direction_title: "Creative direction and game design",
    sheepy_role_direction_copy: "Concept, world structure, exploration experience, UI, interactions and visual direction were treated as one creative system.",
    sheepy_role_build_title: "Systems iteration",
    sheepy_role_build_copy: "Development combined systems design, AI-assisted implementation iteration, runtime testing and manual visual review.",
    sheepy_role_audio_title: "Music and audio direction",
    sheepy_role_audio_copy: "I composed the original music and created bespoke sound design for the Scrapbook, inventory, doors, UI and other interactions. I also selected and integrated the wider sound palette.",
    sheepy_role_public_title: "Public edition and QA",
    sheepy_role_public_copy: "I prepared a privacy-safe public edition, replacing private media with fictional content and validating progression, saves, controls, privacy and Windows distribution.",
    alt_sheepy_detail_title: "Title screen and entry into the game",
    alt_sheepy_detail_snow: "Exploration and interaction in the Snow region",
    alt_sheepy_detail_porto: "Concert in the Porto region",
    alt_sheepy_detail_scrapbook: "Scrapbook and object-based progression",
    alt_sheepy_detail_cats: "Vila Meow and cat interactions",
    alt_sheepy_detail_together: "Together Mode available after completion",
    sweep_detail_lead: "An Android app that turns accessible storage into clear decisions, always with review before deletion.",
    sweep_scan_title: "Storage scanning",
    sweep_scan_copy: "It scans only the storage Android makes accessible and groups duplicates, old downloads, installers, archives, large files, screenshots and empty folders.",
    sweep_review_title: "Review before deleting",
    sweep_review_copy: "Every item passes through detailed confirmation. Large files and screenshots are never pre-selected, and the flow clearly reports what was removed.",
    sweep_android_title: "Transparent Android limits",
    sweep_android_copy: "Cache cleanup opens system settings, and unused-app detection depends on the history each device exposes. The interface never pretends to have access it does not have.",
    sweep_private_title: "Private by default",
    sweep_private_copy: "All processing happens on the device, without Internet permission. The app was tested on five physical Android devices.",
    sweep_role_product_title: "Product concept and experience",
    sweep_role_product_copy: "I defined the concept, feature set, UX/UI direction and interaction model around a simple rule: inform first and delete only after deliberate review.",
    sweep_role_build_title: "Assisted implementation",
    sweep_role_build_copy: "Implementation in Kotlin and Jetpack Compose used AI tools under active product direction, interface iteration and functional validation.",
    sweep_role_test_title: "Testing and release decisions",
    sweep_role_test_copy: "I tested the flow on five physical devices, investigated manufacturer differences and kept Android limitations visible instead of presenting estimates as certainty.",
    alt_sweep_detail_home: "Home screen with free space and app tools",
    alt_sweep_detail_categories: "Categories found after a storage scan",
    alt_sweep_detail_results: "Scan results with files ready for review",
    alt_sweep_detail_duplicates: "Duplicate file review with one copy preserved",
    alt_sweep_detail_confirm: "Detailed confirmation before deleting files",
    alt_sweep_detail_complete: "Final result after storage cleanup",

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

    estudos_graficos: "Selected graphic studies", estudo: "Study",
    pecas_design_note: "Selected graphic design pieces made in Photoshop and Illustrator.",
    cursor_view: "View",
    alt_design_air_jordan: "Air Jordan - graphic composition",
    alt_design_malignant: "Malignant study - poster",
    alt_design_jigsaw: "Jigsaw - poster",
    alt_design_saw_japan: "Saw Japan - album cover",
    alt_inverno_photo_shoot: "INVERNØ band photo shoot",
    alt_inverno_logo_light: "INVERNØ logo - light version",
    alt_inverno_logo_dark: "INVERNØ logo - dark version",
    alt_inverno_bc_front: "INVERNØ business card - front",
    alt_inverno_bc_back: "INVERNØ business card - back",
    alt_inverno_bc_presentation: "INVERNØ business card - front and back presentation mockup",
    alt_inverno_bc_box: "INVERNØ business card - presentation box mockup",
    identidade_fotografia: "Identity & Photography",
    desc_inverno_identidade: "Logo creation and image capture/editing for <b style=\"color:var(--text)\">INVERNØ</b>, Rui T's music project, featuring guests André Rodrigues and Gabriel Maia.",
    desc_logo_combinado: "Creation and study of the band's logo, developed in both black and white. Made in <b>Photoshop.</b>",
    desc_logo_mockup: "Simulation of the logo applied to a physical setting, in <b>Photoshop.</b>",
    subsec_cartoes_mockups: "Business Cards & Mockups",
    titulo_bc_frente: "Business Card - Front",
    desc_bc_frente: "Front of the INVERNØ business card, developed as an extension of the band's visual identity.",
    titulo_bc_verso: "Business Card - Back",
    desc_bc_verso: "Back of the INVERNØ business card, developed as an extension of the band's visual identity.",
    titulo_bc_apresentacao: "Business Card - Presentation Mockup",
    desc_bc_apresentacao: "Physical presentation of the INVERNØ business card, front and back.",
    titulo_bc_caixa: "Business Card - Box Mockup",
    desc_bc_caixa: "Premium presentation-box mockup for the INVERNØ business card.",
    sessao_fotografica: "Photo shoot",
    desc_sessao_foto: "Capture and editing of images of the band, later edited in <b>Photoshop</b>, where the logo was added, with further treatment in <b>Lightroom</b>.",
    nota: "Note",
    desc_nota_3d: "I also have occasional experience with 3D modelling and rendering (Blender / Maya), used mainly to support video projects (such as the 3D scene for the Fender ad above).",

    quem_sou: "Who I am", sobre_mim: "About me",
    sobre_note: "A multimedia creative trained in Motion Design and Visual Effects, with a strong background in sound.",
    about_quote: "\"I create multimedia experiences where sound, image and interaction work together.\"",
    about_p1: "I'm a multimedia creative, trained in <strong>Motion Design and Visual Effects</strong> (CTeSP). I work across video editing, motion graphics, camera and sound capture, and music production in <strong>FL Studio</strong>, with over <span class=\"stat\">3 million streams</span> credited across work for international artists.",
    about_p2: "I completed a curricular internship at the <strong>Politécnico do Porto's Pedagogical Innovation Centre</strong>, where I took part in producing institutional audiovisual content - from capture to editing, motion graphics and final post-production.",
    about_p3: "I am currently enrolled in the <strong>Short-cycle Higher Technical Degree in Design and Technologies for Mobile Applications</strong> at <strong>Faculdade de Media Artes e Design (FMAD), Universidade Técnica do Porto</strong>. This next stage accompanies the expansion of my work into creative technology through mobile, web and game projects, with a focus on concept, UX/UI, testing and iteration.",
    sound_music: "Sound & Music", music_production: "Music production", sound_audio_editing: "Sound design & audio editing",
    video_motion: "Video & Motion", captacao_camara_som: "Camera and sound capture",
    supporting_3d: "3D as a supporting skill",
    ux_product: "UX/UI & product thinking", interactive_experiences: "Interactive experiences",
    web_apps_games: "Web · Apps · Games", ai_assisted_dev: "AI-assisted development",

    vamos_falar: "Let's talk", contactos: "Contact",
    contact_sub: "Available for multimedia projects across video and motion, sound and music, and interactive digital experiences. Get in touch through any of the channels below.",
    contact_linkedin_val: "Professional profile", contact_cv_lbl: "Résumé", contact_cv_val: "CV as PDF", contact_github_val: "Creative technology projects",
    telemovel: "Phone",
    footer_portfolio: "Portfolio 2026",
    lightbox_hint: "Scroll / pinch to zoom · drag to move · double-click to enlarge · Esc to close", close: "Close",

    // Colour picker (theming control) — not the language/nav copy above,
    // but the same completeness rule applies.
    cp_site_color: "Site colour", cp_color_label: "Colour", cp_hue: "Hue", cp_reset: "Reset",
  };

  const ES = {
    meta_title: "Gonçalo Terroso: Creativo multimedia",
    meta_description: "Portfolio multimedia de Gonçalo Terroso: edición de vídeo, motion graphics, diseño sonoro, producción musical y tecnología creativa.",
    meta_social_title: "Gonçalo Terroso: Portfolio multimedia",
    meta_social_description: "Audiovisual, sonido, música y tecnología creativa: trabajo multidisciplinar de Gonçalo Terroso.",
    intro_skip: "Saltar",
    nav_inicio: "Inicio", nav_destaques: "Destacados", nav_projetos: "Proyectos",
    nav_sobre: "Sobre mí", nav_contacto: "Contacto",
    cv_btn: "Ver CV", menu_eyebrow: "Navegación",
    nav_toggle_open: "Abrir menú", nav_toggle_close: "Cerrar menú",

    hero_eyebrow: "PORTFOLIO MULTIMEDIA",
    hero_role: "<b>Creativo multimedia</b> con trabajo en audiovisual, sonido y experiencias digitales.",
    tag_musica: "Producción Musical", tag_video_edit: "Edición de vídeo", tag_motion_graphics: "Motion Graphics",
    tag_sound_design: "Diseño Sonoro", tag_design: "Diseño Gráfico", tag_visual_design: "Diseño Visual",
    tag_creative_tech: "Tecnología Creativa",
    hero_cta_destaques: "Ver destacados",
    stat_milhoes: "3 millones", stat_musica_lbl: "Reproducciones en producción musical",
    stat_estagio_lbl: "Prácticas - Centro de Innovación Pedagógica",
    stat_projetos_lbl: "Proyectos de sonido, imagen en movimiento e interacción",

    destaques_eyebrow: "Mis mejores proyectos", destaques_h2: "Destacados",
    destaques_note: "Una muestra directa de una práctica que une sonido, imagen en movimiento e interacción.",
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
    highlight_interaction: "Sonido + Imagen + Interacción",
    highlight_sheepy_desc: "Un juego completo de exploración pixel-art que combina dirección visual, interacción, música original y diseño sonoro.",
    explore_project: "Explorar proyecto",
    alt_sheepy_title: "Pantalla de inicio de Sheepy World: A Cheeky Tale",

    portfolio: "Portfolio", projetos_h2: "Proyectos",
    projetos_note: "Trabajo seleccionado en sonido, imagen en movimiento, diseño y experiencias interactivas.",
    tag_video_motion: "Vídeo y Motion",
    projects_categories_aria: "Categorías de proyectos",
    technologies_aria: "Tecnologías",

    tech_intro: "Una introducción visual y concisa a cada proyecto; GitHub reúne la documentación, las decisiones y los detalles técnicos.",
    tech_game_kicker: "Juego · Experiencia interactiva",
    tech_app_kicker: "Producto digital · Android",
    sheepy_desc: "Juego completo de exploración pixel-art con regiones conectadas, restauración de recuerdos, diálogos, soporte para mando, guardado persistente y versión nativa para Windows.",
    sheepy_role: "<strong>Mi papel:</strong> concepto, game design, dirección creativa, desarrollo iterativo, música original, diseño sonoro y QA, con un flujo de trabajo asistido por IA.",
    sweep_desc: "Aplicación Android funcional que analiza el almacenamiento accesible y organiza archivos y herramientas de apps para revisarlos en el dispositivo, sin permiso de Internet.",
    sweep_role: "<strong>Mi papel:</strong> concepto de producto, definición de funciones, dirección UX/UI, diseño de interacción, pruebas, depuración, iteración y decisiones de lanzamiento; implementación asistida por IA.",
    view_github: "Ver en GitHub", windows_release: "Versión para Windows",
    aria_sheepy_github: "Ver Sheepy World en GitHub (se abre en una pestaña nueva)",
    aria_sheepy_windows: "Ver la versión de Sheepy World para Windows (se abre en una pestaña nueva)",
    aria_sweep_github: "Ver Sweep en GitHub (se abre en una pestaña nueva)",
    alt_sheepy_gameplay: "Escena de concierto en la región Porto de Sheepy World",
    alt_sweep_categories: "Categorías de limpieza y gestión de almacenamiento en la aplicación Sweep",
    alt_profile_intro: "Gonçalo Terroso", alt_profile_portrait: "Retrato de Gonçalo Terroso",
    aria_thxuzz_spotify: "Escuchar a Thxuzz en Spotify", aria_pl_quest_spotify: "Escuchar a PL Quest en Spotify",
    aria_kevin_spotify: "Escuchar a Kevin O Chris en Spotify", aria_tomazacre_spotify: "Escuchar a Tomazacre en Spotify",
    aria_dege_spotify: "Escuchar a DEGE en Spotify", aria_ngc_spotify: "Escuchar a NGC Daddy en Spotify",
    aria_playlist_spotify: "Abrir la playlist completa en Spotify", alt_freestyle_spotify: "Freestyle 03 en Spotify",
    aria_cidade_instagram: "Abrir Cidade Vazia en Instagram", aria_amor_instagram: "Abrir Amor em Tempo de Guerra en Instagram",
    alt_plurall_youtube: "Roadshow PlurALL en YouTube",
    alt_utp_youtube: "Ceremonia de apertura de la Universidade Técnica do Porto en YouTube",
    project_close: "Cerrar proyecto", project_nav_aria: "Secciones del proyecto",
    overview: "Visión general", gallery: "Galería", role_process: "Rol y proceso",
    gallery_previous: "Imagen anterior", gallery_next: "Imagen siguiente",
    sheepy_gallery_aria: "Galería de Sheepy World", sweep_gallery_aria: "Galería de Sweep",
    aria_explore_sheepy: "Explorar el proyecto Sheepy World", aria_explore_sweep: "Explorar el proyecto Sweep",
    lightbox_aria: "Visor de imágenes",
    sheepy_detail_lead: "Una experiencia de exploración pixel-art donde los recuerdos, los lugares y las pequeñas interacciones construyen la progresión.",
    sheepy_world_title: "Exploración con propósito",
    sheepy_world_copy: "El mundo conecta Autumn Park, River Town, Vila Meow, Snow, Porto y otras regiones. Los recuerdos avanzan mediante pistas, conversaciones y fragmentos del Scrapbook, sin una lista tradicional de misiones.",
    sheepy_systems_title: "Personajes y sistemas",
    sheepy_systems_copy: "Los diálogos con elecciones, las interacciones repetibles, tres gatos con comportamientos propios y Together Mode tras completar el juego dan vida a los espacios.",
    sheepy_complete_title: "Una experiencia completa",
    sheepy_complete_copy: "El soporte para teclado y mando, el guardado persistente, la pantalla completa y la distribución nativa para Windows hacen que el proyecto sea jugable de principio a fin.",
    sheepy_audio_title: "El sonido como parte del mundo",
    sheepy_audio_copy: "Música original, diseño sonoro propio para la UI y las interacciones, y dirección de audio para el resto de la paleta sonora.",
    sheepy_role_direction_title: "Dirección creativa y game design",
    sheepy_role_direction_copy: "El concepto, la estructura del mundo, la exploración, la UI, las interacciones y la dirección visual se trataron como un único sistema creativo.",
    sheepy_role_build_title: "Iteración de sistemas",
    sheepy_role_build_copy: "El desarrollo combinó diseño de sistemas, iteración de implementación asistida por IA, pruebas en runtime y revisión visual manual.",
    sheepy_role_audio_title: "Música y dirección de audio",
    sheepy_role_audio_copy: "Compuse la música original y creé diseño sonoro específico para el Scrapbook, el inventario, las puertas, la UI y otras interacciones. También seleccioné e integré el resto de la paleta sonora.",
    sheepy_role_public_title: "Edición pública y QA",
    sheepy_role_public_copy: "Preparé una edición pública segura, sustituyendo media privado por contenido ficticio y validando la progresión, los guardados, los controles, la privacidad y la distribución para Windows.",
    alt_sheepy_detail_title: "Pantalla de título y entrada al juego",
    alt_sheepy_detail_snow: "Exploración e interacción en la región Snow",
    alt_sheepy_detail_porto: "Concierto en la región Porto",
    alt_sheepy_detail_scrapbook: "Scrapbook y progresión mediante objetos",
    alt_sheepy_detail_cats: "Vila Meow e interacciones con gatos",
    alt_sheepy_detail_together: "Together Mode disponible tras completar el juego",
    sweep_detail_lead: "Una aplicación Android que convierte el almacenamiento accesible en decisiones claras, siempre con revisión antes de borrar.",
    sweep_scan_title: "Análisis del almacenamiento",
    sweep_scan_copy: "Analiza solo el almacenamiento al que Android permite acceder y agrupa duplicados, descargas antiguas, instaladores, archivos comprimidos, archivos grandes, capturas y carpetas vacías.",
    sweep_review_title: "Revisar antes de borrar",
    sweep_review_copy: "Cada elemento pasa por una confirmación detallada. Los archivos grandes y las capturas nunca aparecen preseleccionados, y el flujo comunica claramente qué se ha eliminado.",
    sweep_android_title: "Límites de Android transparentes",
    sweep_android_copy: "La limpieza de caché abre los ajustes del sistema y la detección de apps sin uso depende del historial que cada dispositivo expone. La interfaz no finge tener acceso que no tiene.",
    sweep_private_title: "Privacidad por defecto",
    sweep_private_copy: "Todo el procesamiento ocurre en el dispositivo, sin permiso de Internet. La aplicación se probó en cinco dispositivos Android físicos.",
    sweep_role_product_title: "Concepto y experiencia de producto",
    sweep_role_product_copy: "Definí el concepto, las funciones, la dirección UX/UI y el modelo de interacción alrededor de una regla simple: informar primero y borrar solo tras una revisión consciente.",
    sweep_role_build_title: "Implementación asistida",
    sweep_role_build_copy: "La implementación en Kotlin y Jetpack Compose utilizó herramientas de IA bajo una dirección activa de producto, iteración de interfaz y validación funcional.",
    sweep_role_test_title: "Pruebas y decisiones de lanzamiento",
    sweep_role_test_copy: "Probé el flujo en cinco dispositivos físicos, investigué diferencias entre fabricantes y mantuve visibles las limitaciones de Android en lugar de presentar estimaciones como certezas.",
    alt_sweep_detail_home: "Pantalla inicial con espacio libre y herramientas de apps",
    alt_sweep_detail_categories: "Categorías encontradas tras analizar el almacenamiento",
    alt_sweep_detail_results: "Resultados del análisis con archivos listos para revisar",
    alt_sweep_detail_duplicates: "Revisión de archivos duplicados conservando una copia",
    alt_sweep_detail_confirm: "Confirmación detallada antes de borrar archivos",
    alt_sweep_detail_complete: "Resultado final tras limpiar el almacenamiento",

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

    estudos_graficos: "Estudios gráficos seleccionados", estudo: "Estudio",
    pecas_design_note: "Piezas seleccionadas de diseño gráfico realizadas en Photoshop e Illustrator.",
    cursor_view: "Ver",
    alt_design_air_jordan: "Air Jordan - composición gráfica",
    alt_design_malignant: "Estudio de Malignant - póster",
    alt_design_jigsaw: "Jigsaw - póster",
    alt_design_saw_japan: "Saw Japan - portada de álbum",
    alt_inverno_photo_shoot: "Sesión fotográfica de la banda INVERNØ",
    alt_inverno_logo_light: "Logotipo de INVERNØ - versión clara",
    alt_inverno_logo_dark: "Logotipo de INVERNØ - versión oscura",
    alt_inverno_bc_front: "Tarjeta de visita de INVERNØ - anverso",
    alt_inverno_bc_back: "Tarjeta de visita de INVERNØ - reverso",
    alt_inverno_bc_presentation: "Tarjeta de visita de INVERNØ - maqueta de anverso y reverso",
    alt_inverno_bc_box: "Tarjeta de visita de INVERNØ - maqueta de presentación en caja",
    identidade_fotografia: "Identidad y Fotografía",
    desc_inverno_identidade: "Creación de logotipo y captación/edición de imagen para <b style=\"color:var(--text)\">INVERNØ</b>, el proyecto musical de Rui T, con la colaboración de André Rodrigues y Gabriel Maia.",
    desc_logo_combinado: "Creación y estudio del logotipo de la banda, desarrollado en las versiones negra y blanca. Realizado en <b>Photoshop.</b>",
    desc_logo_mockup: "Simulación del logotipo aplicado en un entorno físico, en <b>Photoshop.</b>",
    subsec_cartoes_mockups: "Tarjetas de visita y maquetas",
    titulo_bc_frente: "Tarjeta de visita - Anverso",
    desc_bc_frente: "Anverso de la tarjeta de visita de INVERNØ, desarrollado como extensión de la identidad visual de la banda.",
    titulo_bc_verso: "Tarjeta de visita - Reverso",
    desc_bc_verso: "Reverso de la tarjeta de visita de INVERNØ, desarrollado como extensión de la identidad visual de la banda.",
    titulo_bc_apresentacao: "Tarjeta de visita - Maqueta de presentación",
    desc_bc_apresentacao: "Presentación física de la tarjeta de visita de INVERNØ, frente y reverso.",
    titulo_bc_caixa: "Tarjeta de visita - Maqueta de caja",
    desc_bc_caixa: "Maqueta de una caja de presentación premium para la tarjeta de visita de INVERNØ.",
    sessao_fotografica: "Sesión fotográfica",
    desc_sessao_foto: "Captación y edición de imagen de la banda, editada posteriormente en <b>Photoshop</b>, donde se insertó el logotipo, con tratamiento en <b>Lightroom</b>.",
    nota: "Nota",
    desc_nota_3d: "También tengo experiencia puntual en modelado y renderizado 3D (Blender / Maya), usada sobre todo como apoyo a proyectos de vídeo (como la escena del anuncio Fender arriba).",

    quem_sou: "Quién soy", sobre_mim: "Sobre mí",
    sobre_note: "Creativo multimedia con formación en Motion Design y Efectos Visuales y una sólida trayectoria en sonido.",
    about_quote: "\"Creo experiencias multimedia donde el sonido, la imagen y la interacción trabajan en conjunto.\"",
    about_p1: "Soy creativo multimedia, con formación en <strong>Motion Design y Efectos Visuales</strong> (CTeSP). Trabajo con edición de vídeo, motion graphics, captación de imagen y sonido y producción musical en <strong>FL Studio</strong>, con más de <span class=\"stat\">3 millones de reproducciones</span> acreditadas en trabajos para artistas internacionales.",
    about_p2: "Realicé prácticas curriculares en el <strong>Centro de Innovación Pedagógica del Politécnico do Porto</strong>, donde participé en la producción de contenidos audiovisuales institucionales: desde la captación hasta la edición, los motion graphics y la postproducción final.",
    about_p3: "Actualmente estoy matriculado en el <strong>Curso Técnico Superior Profesional en Diseño y Tecnologías para Aplicaciones Móviles</strong> en la <strong>Faculdade de Media Artes e Design (FMAD), Universidade Técnica do Porto</strong>. Esta nueva etapa acompaña la expansión de mi trabajo hacia la tecnología creativa mediante proyectos móviles, web y juegos, con especial atención al concepto, la UX/UI, las pruebas y la iteración.",
    sound_music: "Sonido y Música", music_production: "Producción musical", sound_audio_editing: "Diseño sonoro y edición de audio",
    video_motion: "Vídeo y Motion", captacao_camara_som: "Captación de cámara y sonido",
    supporting_3d: "3D como competencia de apoyo",
    ux_product: "UX/UI y pensamiento de producto", interactive_experiences: "Experiencias interactivas",
    web_apps_games: "Web · Apps · Juegos", ai_assisted_dev: "Desarrollo asistido por IA",

    vamos_falar: "Hablemos", contactos: "Contacto",
    contact_sub: "Disponible para proyectos multimedia de vídeo y motion, sonido y música, y experiencias digitales interactivas. Contacta por cualquiera de los canales de abajo.",
    contact_linkedin_val: "Perfil profesional", contact_cv_lbl: "Currículum", contact_cv_val: "CV en PDF", contact_github_val: "Proyectos de tecnología creativa",
    telemovel: "Teléfono",
    footer_portfolio: "Portfolio 2026",
    lightbox_hint: "Scroll / pellizcar para zoom · arrastra para mover · doble clic para ampliar · Esc cierra", close: "Cerrar",

    cp_site_color: "Color del sitio", cp_color_label: "Color", cp_hue: "Matiz", cp_reset: "Restablecer",
  };

  const FR = {
    meta_title: "Gonçalo Terroso : Créatif multimédia",
    meta_description: "Portfolio multimédia de Gonçalo Terroso : montage vidéo, motion graphics, design sonore, production musicale et technologies créatives.",
    meta_social_title: "Gonçalo Terroso : Portfolio multimédia",
    meta_social_description: "Audiovisuel, son, musique et technologies créatives : le travail multidisciplinaire de Gonçalo Terroso.",
    intro_skip: "Passer",
    nav_inicio: "Accueil", nav_destaques: "Sélection", nav_projetos: "Projets",
    nav_sobre: "À propos", nav_contacto: "Contact",
    cv_btn: "Voir le CV", menu_eyebrow: "Navigation",
    nav_toggle_open: "Ouvrir le menu", nav_toggle_close: "Fermer le menu",

    hero_eyebrow: "PORTFOLIO MULTIMÉDIA",
    hero_role: "<b>Créatif multimédia</b>, à la croisée de l'audiovisuel, du son et des expériences numériques.",
    tag_musica: "Production Musicale", tag_video_edit: "Montage vidéo", tag_motion_graphics: "Motion Graphics",
    tag_sound_design: "Design Sonore", tag_design: "Design Graphique", tag_visual_design: "Design Visuel",
    tag_creative_tech: "Technologies Créatives",
    hero_cta_destaques: "Voir la sélection",
    stat_milhoes: "3 millions", stat_musica_lbl: "Écoutes en production musicale",
    stat_estagio_lbl: "Stage - Centre d'Innovation Pédagogique",
    stat_projetos_lbl: "Projets de son, image en mouvement et interaction",

    destaques_eyebrow: "Mes meilleurs projets", destaques_h2: "Sélection",
    destaques_note: "Un aperçu direct d'une pratique qui réunit son, image en mouvement et interaction.",
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
    highlight_interaction: "Son + Image + Interaction",
    highlight_sheepy_desc: "Un jeu complet d'exploration en pixel art qui réunit direction visuelle, interaction, musique originale et design sonore.",
    explore_project: "Explorer le projet",
    alt_sheepy_title: "Écran d'accueil de Sheepy World: A Cheeky Tale",

    portfolio: "Portfolio", projetos_h2: "Projets",
    projetos_note: "Une sélection de travaux en son, image en mouvement, design et expériences interactives.",
    tag_video_motion: "Vidéo & Motion",
    projects_categories_aria: "Catégories de projets",
    technologies_aria: "Technologies",

    tech_intro: "Une introduction visuelle et concise à chaque projet ; GitHub rassemble la documentation, les décisions et les détails techniques.",
    tech_game_kicker: "Jeu · Expérience interactive",
    tech_app_kicker: "Produit numérique · Android",
    sheepy_desc: "Jeu complet d'exploration en pixel art avec régions interconnectées, restauration de souvenirs, dialogues, prise en charge des manettes, sauvegarde persistante et version native Windows.",
    sheepy_role: "<strong>Mon rôle :</strong> concept, game design, direction créative, développement itératif, musique originale, design sonore et QA, dans un workflow assisté par IA.",
    sweep_desc: "Application Android fonctionnelle qui analyse le stockage accessible et organise les fichiers et outils liés aux apps pour un examen sur l'appareil, sans autorisation Internet.",
    sweep_role: "<strong>Mon rôle :</strong> concept produit, définition des fonctionnalités, direction UX/UI, design d'interaction, tests, débogage, itération et décisions de lancement ; implémentation assistée par IA.",
    view_github: "Voir sur GitHub", windows_release: "Version Windows",
    aria_sheepy_github: "Voir Sheepy World sur GitHub (s'ouvre dans un nouvel onglet)",
    aria_sheepy_windows: "Voir la version Windows de Sheepy World (s'ouvre dans un nouvel onglet)",
    aria_sweep_github: "Voir Sweep sur GitHub (s'ouvre dans un nouvel onglet)",
    alt_sheepy_gameplay: "Scène de concert dans la région Porto de Sheepy World",
    alt_sweep_categories: "Catégories de nettoyage et de gestion du stockage dans l'application Sweep",
    alt_profile_intro: "Gonçalo Terroso", alt_profile_portrait: "Portrait de Gonçalo Terroso",
    aria_thxuzz_spotify: "Écouter Thxuzz sur Spotify", aria_pl_quest_spotify: "Écouter PL Quest sur Spotify",
    aria_kevin_spotify: "Écouter Kevin O Chris sur Spotify", aria_tomazacre_spotify: "Écouter Tomazacre sur Spotify",
    aria_dege_spotify: "Écouter DEGE sur Spotify", aria_ngc_spotify: "Écouter NGC Daddy sur Spotify",
    aria_playlist_spotify: "Ouvrir la playlist complète sur Spotify", alt_freestyle_spotify: "Freestyle 03 sur Spotify",
    aria_cidade_instagram: "Ouvrir Cidade Vazia sur Instagram", aria_amor_instagram: "Ouvrir Amor em Tempo de Guerra sur Instagram",
    alt_plurall_youtube: "Roadshow PlurALL sur YouTube",
    alt_utp_youtube: "Cérémonie d'ouverture de l'Universidade Técnica do Porto sur YouTube",
    project_close: "Fermer le projet", project_nav_aria: "Sections du projet",
    overview: "Vue d'ensemble", gallery: "Galerie", role_process: "Rôle et processus",
    gallery_previous: "Image précédente", gallery_next: "Image suivante",
    sheepy_gallery_aria: "Galerie de Sheepy World", sweep_gallery_aria: "Galerie de Sweep",
    aria_explore_sheepy: "Explorer le projet Sheepy World", aria_explore_sweep: "Explorer le projet Sweep",
    lightbox_aria: "Visionneuse d'images",
    sheepy_detail_lead: "Une expérience d'exploration en pixel art où les souvenirs, les lieux et les petites interactions construisent la progression.",
    sheepy_world_title: "Une exploration qui a du sens",
    sheepy_world_copy: "Le monde relie Autumn Park, River Town, Vila Meow, Snow, Porto et d'autres régions. Les souvenirs progressent grâce aux indices, aux conversations et aux fragments du Scrapbook, sans liste de quêtes traditionnelle.",
    sheepy_systems_title: "Personnages et systèmes",
    sheepy_systems_copy: "Les dialogues à choix, les interactions répétables, trois chats avec leurs propres comportements et Together Mode après la fin du jeu donnent vie aux espaces.",
    sheepy_complete_title: "Une expérience complète",
    sheepy_complete_copy: "La prise en charge du clavier et des manettes, les sauvegardes persistantes, le plein écran et la distribution native Windows rendent le projet jouable du début à la fin.",
    sheepy_audio_title: "Le son comme partie du monde",
    sheepy_audio_copy: "Musique originale, design sonore sur mesure pour l'UI et les interactions, et direction audio pour le reste de la palette sonore.",
    sheepy_role_direction_title: "Direction créative et game design",
    sheepy_role_direction_copy: "Le concept, la structure du monde, l'exploration, l'UI, les interactions et la direction visuelle ont été pensés comme un seul système créatif.",
    sheepy_role_build_title: "Itération des systèmes",
    sheepy_role_build_copy: "Le développement a combiné design de systèmes, itération d'implémentation assistée par IA, tests en runtime et révision visuelle manuelle.",
    sheepy_role_audio_title: "Musique et direction audio",
    sheepy_role_audio_copy: "J'ai composé la musique originale et créé un design sonore spécifique pour le Scrapbook, l'inventaire, les portes, l'UI et d'autres interactions. J'ai aussi sélectionné et intégré le reste de la palette sonore.",
    sheepy_role_public_title: "Édition publique et QA",
    sheepy_role_public_copy: "J'ai préparé une édition publique respectueuse de la vie privée, remplacé les médias privés par du contenu fictif et validé la progression, les sauvegardes, les contrôles, la confidentialité et la distribution Windows.",
    alt_sheepy_detail_title: "Écran titre et entrée dans le jeu",
    alt_sheepy_detail_snow: "Exploration et interaction dans la région Snow",
    alt_sheepy_detail_porto: "Concert dans la région Porto",
    alt_sheepy_detail_scrapbook: "Scrapbook et progression par les objets",
    alt_sheepy_detail_cats: "Vila Meow et interactions avec les chats",
    alt_sheepy_detail_together: "Together Mode disponible après avoir terminé le jeu",
    sweep_detail_lead: "Une application Android qui transforme le stockage accessible en décisions claires, toujours avec une vérification avant suppression.",
    sweep_scan_title: "Analyse du stockage",
    sweep_scan_copy: "Elle analyse uniquement le stockage auquel Android autorise l'accès et regroupe les doublons, anciens téléchargements, installateurs, archives, fichiers volumineux, captures et dossiers vides.",
    sweep_review_title: "Vérifier avant de supprimer",
    sweep_review_copy: "Chaque élément passe par une confirmation détaillée. Les fichiers volumineux et les captures ne sont jamais présélectionnés, et le parcours indique clairement ce qui a été supprimé.",
    sweep_android_title: "Limites Android transparentes",
    sweep_android_copy: "Le nettoyage du cache ouvre les réglages système et la détection des apps inutilisées dépend de l'historique exposé par chaque appareil. L'interface ne prétend jamais avoir un accès qu'elle n'a pas.",
    sweep_private_title: "Confidentialité par défaut",
    sweep_private_copy: "Tout le traitement se fait sur l'appareil, sans autorisation Internet. L'application a été testée sur cinq appareils Android physiques.",
    sweep_role_product_title: "Concept et expérience produit",
    sweep_role_product_copy: "J'ai défini le concept, les fonctionnalités, la direction UX/UI et le modèle d'interaction autour d'une règle simple : informer d'abord et supprimer uniquement après une vérification consciente.",
    sweep_role_build_title: "Implémentation assistée",
    sweep_role_build_copy: "L'implémentation en Kotlin et Jetpack Compose a utilisé des outils d'IA sous une direction produit active, avec itération de l'interface et validation fonctionnelle.",
    sweep_role_test_title: "Tests et décisions de lancement",
    sweep_role_test_copy: "J'ai testé le parcours sur cinq appareils physiques, étudié les différences entre fabricants et gardé les limites d'Android visibles au lieu de présenter des estimations comme des certitudes.",
    alt_sweep_detail_home: "Écran d'accueil avec espace libre et outils pour les apps",
    alt_sweep_detail_categories: "Catégories trouvées après une analyse du stockage",
    alt_sweep_detail_results: "Résultats de l'analyse avec fichiers prêts à vérifier",
    alt_sweep_detail_duplicates: "Vérification des doublons en conservant une copie",
    alt_sweep_detail_confirm: "Confirmation détaillée avant la suppression des fichiers",
    alt_sweep_detail_complete: "Résultat final après le nettoyage du stockage",

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

    estudos_graficos: "Études graphiques sélectionnées", estudo: "Étude",
    pecas_design_note: "Sélection de créations graphiques réalisées dans Photoshop et Illustrator.",
    cursor_view: "Voir",
    alt_design_air_jordan: "Air Jordan - composition graphique",
    alt_design_malignant: "Étude de Malignant - affiche",
    alt_design_jigsaw: "Jigsaw - affiche",
    alt_design_saw_japan: "Saw Japan - pochette d’album",
    alt_inverno_photo_shoot: "Séance photo du groupe INVERNØ",
    alt_inverno_logo_light: "Logo INVERNØ - version claire",
    alt_inverno_logo_dark: "Logo INVERNØ - version sombre",
    alt_inverno_bc_front: "Carte de visite INVERNØ - recto",
    alt_inverno_bc_back: "Carte de visite INVERNØ - verso",
    alt_inverno_bc_presentation: "Carte de visite INVERNØ - maquette recto verso",
    alt_inverno_bc_box: "Carte de visite INVERNØ - maquette de présentation en boîte",
    identidade_fotografia: "Identité & Photographie",
    desc_inverno_identidade: "Création du logo et prise de vue/retouche pour <b style=\"color:var(--text)\">INVERNØ</b>, le projet musical de Rui T, avec la participation d'André Rodrigues et Gabriel Maia.",
    desc_logo_combinado: "Création et étude du logo du groupe, développé dans les versions noire et blanche. Réalisé dans <b>Photoshop.</b>",
    desc_logo_mockup: "Simulation du logo appliqué dans un environnement physique, dans <b>Photoshop.</b>",
    subsec_cartoes_mockups: "Cartes de visite et maquettes",
    titulo_bc_frente: "Carte de visite - Recto",
    desc_bc_frente: "Recto de la carte de visite INVERNØ, développé comme extension de l'identité visuelle du groupe.",
    titulo_bc_verso: "Carte de visite - Verso",
    desc_bc_verso: "Verso de la carte de visite INVERNØ, développé comme extension de l'identité visuelle du groupe.",
    titulo_bc_apresentacao: "Carte de visite - Maquette de présentation",
    desc_bc_apresentacao: "Maquette de présentation de la carte de visite INVERNØ, recto et verso.",
    titulo_bc_caixa: "Carte de visite - Maquette de boîte",
    desc_bc_caixa: "Maquette d’une boîte de présentation premium pour la carte de visite INVERNØ.",
    sessao_fotografica: "Séance photo",
    desc_sessao_foto: "Prise de vue et retouche des images du groupe, retravaillées ensuite dans <b>Photoshop</b>, où le logo a été intégré, avec un traitement dans <b>Lightroom</b>.",
    nota: "Note",
    desc_nota_3d: "J'ai également une expérience ponctuelle en modélisation et rendu 3D (Blender / Maya), utilisée surtout en appui de projets vidéo (comme le décor de la publicité Fender ci-dessus).",

    quem_sou: "Qui je suis", sobre_mim: "À propos",
    sobre_note: "Créatif multimédia formé en Motion Design et Effets Visuels, avec un solide parcours dans le son.",
    about_quote: "\"Je crée des expériences multimédias où le son, l'image et l'interaction travaillent ensemble.\"",
    about_p1: "Je suis un créatif multimédia, formé en <strong>Motion Design et Effets Visuels</strong> (CTeSP). Je travaille dans le montage vidéo, le motion graphics, la prise de vue et la prise de son, ainsi que la production musicale dans <strong>FL Studio</strong>, avec plus de <span class=\"stat\">3 millions d'écoutes</span> créditées sur des projets pour des artistes internationaux.",
    about_p2: "J'ai effectué un stage curriculaire au <strong>Centre d'Innovation Pédagogique du Politécnico do Porto</strong>, où j'ai participé à la production de contenus audiovisuels institutionnels - de la prise de vue au montage, au motion graphics et à la post-production finale.",
    about_p3: "Je suis actuellement inscrit à la <strong>Formation technique supérieure professionnelle en Design et Technologies pour Applications Mobiles</strong> à la <strong>Faculdade de Media Artes e Design (FMAD), Universidade Técnica do Porto</strong>. Cette nouvelle étape accompagne l'élargissement de mon travail aux technologies créatives à travers des projets mobiles, web et de jeu, avec une attention particulière portée au concept, à l'UX/UI, aux tests et à l'itération.",
    sound_music: "Son & Musique", music_production: "Production musicale", sound_audio_editing: "Design sonore & montage audio",
    video_motion: "Vidéo & Motion", captacao_camara_som: "Prise de vue et de son",
    supporting_3d: "3D comme compétence complémentaire",
    ux_product: "UX/UI & réflexion produit", interactive_experiences: "Expériences interactives",
    web_apps_games: "Web · Apps · Jeux", ai_assisted_dev: "Développement assisté par IA",

    vamos_falar: "Parlons-en", contactos: "Contact",
    contact_sub: "Disponible pour des projets multimédias en vidéo et motion, son et musique, ainsi que pour des expériences numériques interactives. Contactez-moi par l'un des canaux ci-dessous.",
    contact_linkedin_val: "Profil professionnel", contact_cv_lbl: "Curriculum", contact_cv_val: "CV en PDF", contact_github_val: "Projets de technologies créatives",
    telemovel: "Téléphone",
    footer_portfolio: "Portfolio 2026",
    lightbox_hint: "Défiler / pincer pour zoomer · glisser pour déplacer · double-clic pour agrandir · Échap ferme", close: "Fermer",

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
        // Dictionary keys are supported for fully localized alt text. Legacy
        // literal-English values still work exactly as before elsewhere.
        const translated = dict && dict[key] !== undefined ? dict[key] : null;
        el.setAttribute('alt', translated || (lang === 'en' ? key : orig));
      });
      document.querySelectorAll('[data-i18n-cursor]').forEach(el=>{
        const orig = stash(el, 'i18nCursorOrig', el.dataset.cursor || '');
        const key = el.dataset.i18nCursor;
        el.dataset.cursor = (dict && dict[key] !== undefined) ? dict[key] : orig;
      });
      document.querySelectorAll('[data-i18n-aria-label]').forEach(el=>{
        const orig = stash(el, 'i18nAriaLabelOrig', el.getAttribute('aria-label') || '');
        const key = el.dataset.i18nAriaLabel;
        const translated = dict && dict[key] !== undefined ? dict[key] : null;
        el.setAttribute('aria-label', translated || (lang === 'en' ? key : orig));
      });
      document.querySelectorAll('[data-i18n-title]').forEach(el=>{
        const key = el.dataset.i18nTitle;
        const translated = dict && dict[key] !== undefined ? dict[key] : null;
        if(el.tagName === 'TITLE'){
          const orig = stash(el, 'i18nTitleOrig', el.textContent);
          el.textContent = translated || orig;
        } else {
          const orig = stash(el, 'i18nTitleOrig', el.getAttribute('title') || '');
          el.setAttribute('title', translated || orig);
        }
      });
      document.querySelectorAll('[data-i18n-content]').forEach(el=>{
        const orig = stash(el, 'i18nContentOrig', el.getAttribute('content') || '');
        const key = el.dataset.i18nContent;
        const translated = dict && dict[key] !== undefined ? dict[key] : null;
        el.setAttribute('content', translated || orig);
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

      document.dispatchEvent(new CustomEvent('portfolio:languagechange', {
        detail:{lang}
      }));
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
