export interface TranslationDict {
  navGames: string;
  navVision: string;
  navContact: string;
  statusActiveDev: string;
  incomingTransmission: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;
  bootLogTitle: string;
  cardTitle: string;
  cardSubtitle: string;
  cardProtocol: string;
  cardOnline: string;
  cardText: string;
  cardBadge: string;
  gamesSectionTitle: string;
  gamesSectionSubtitle: string;
  gameActiveTag: string;
  gameFutureTag: string;
  game1Title: string;
  game1Desc: string;
  game1PlayButton: string;
  game1Slogan: string;
  game1Tech: string;
  game1Features: string;
  mediaVideoPlaceholder: string;
  mediaScreensPlaceholder: string;
  mediaTrailer: string;
  mediaScreens: string;
  gameFutureTitle: string;
  gameFutureDesc: string;
  visionTitle: string;
  visionSubtitle: string;
  philosophyIndependentTitle: string;
  philosophyIndependentDesc: string;
  philosophyCreativeTitle: string;
  philosophyCreativeDesc: string;
  philosophyPlayfulTitle: string;
  philosophyPlayfulDesc: string;
  philosophyEvolvingTitle: string;
  philosophyEvolvingDesc: string;
  philosophyAuthenticTitle: string;
  philosophyAuthenticDesc: string;
  footerCopyright: string;
  footerDesigned: string;
  privacyPolicy: string;
  termsOfService: string;
  contact: string;
  deleteData: string;
  backToGame: string;
  deletePageTitle: string;
  deletePageDesc: string;
  deletePageStepsTitle: string;
  deletePageStep1: string;
  deletePageStep2: string;
  deletePageStep3: string;
  deletePageStep4: string;
  deletePageWarningTitle: string;
  deletePageWarningDesc: string;
  deletePageInGameView: string;
  deletePageScreenshot: string;
  deletePageScreenshotDesc: string;
  bootSteps: string[];
}

export const translations: Record<"en" | "fr", TranslationDict> = {
  en: {
    navGames: "Games",
    navVision: "Vision",
    navContact: "Contact",
    statusActiveDev: "STATUS: ACTIVE_DEVELOPMENT",
    incomingTransmission: "[ Incoming Transmission ]",
    heroTitle1: "CODE, GAMES,",
    heroTitle2: "AND UNIVERSES.",
    heroSubtitle: "GG Games Labs is an independent studio project born from my passion for game development. As a solo developer, I design and code interactive experiences at my own pace. The first prototype is quietly taking shape in the shadows.",
    bootLogTitle: "SYSTEM_BOOT_LOG // RUNNING",
    cardTitle: "Transmission In Progress",
    cardSubtitle: "The first project is being prepared behind the scenes.",
    cardProtocol: "PROTOCOL LINK",
    cardOnline: "ONLINE",
    cardText: "Dive into the studio’s first game by clicking the button below.",
    cardBadge: "SMASH_DICE // ARCADE",
    gamesSectionTitle: "The Projects",
    gamesSectionSubtitle: "A glimpse into active development and concepts.",
    gameActiveTag: "In Development",
    gameFutureTag: "In Concept",
    game1Title: "Smash Dice",
    game1Slogan: "Smash the dice, dominate the cosmos.",
    game1Desc: "A fast-paced arcade action and reflex game built solo with Flutter & Flame (Forge2D physics). In the quiet vacuum of a mysterious nebula, smash numbered dice to reduce their value to zero before they escape. Chain combos, unlock achievements, and dominate the global Firebase Hall of Fame.",
    game1PlayButton: "PLAY SMASH DICE",
    game1Tech: "Flutter + Flame Engine (Forge2D Physics)",
    game1Features: "Combos & Multipliers, Firebase Hall of Fame, Achievements, Rewarded Extra Lives",
    mediaVideoPlaceholder: "Gameplay video stream // Transmitting soon",
    mediaScreensPlaceholder: "Visual telemetry // Screenshots incoming",
    mediaTrailer: "Gameplay Video",
    mediaScreens: "Screenshots",
    gameFutureTitle: "Next Universe",
    gameFutureDesc: "A new idea starts drawing its first line. More information will be transmitted here as development unfolds.",
    visionTitle: "Studio Vision",
    visionSubtitle: "A commitment to thoughtful and focused game creation.",
    philosophyIndependentTitle: "Independent",
    philosophyIndependentDesc: "Solo-driven development with freedom to experiment, learn and create without compromise.",
    philosophyCreativeTitle: "Creative",
    philosophyCreativeDesc: "Building unique worlds and experiences through curiosity, experimentation and artistic exploration.",
    philosophyPlayfulTitle: "Playful",
    philosophyPlayfulDesc: "Designing games focused on immersion, fun and memorable player experiences.",
    philosophyEvolvingTitle: "Evolving",
    philosophyEvolvingDesc: "Continuously improving both technically and creatively with every project.",
    philosophyAuthenticTitle: "Authentic",
    philosophyAuthenticDesc: "Creating meaningful projects with personality, simplicity and genuine passion for game development.",
    footerCopyright: "© {year} GG Games Labs. All rights reserved.",
    footerDesigned: "Designed solo. Powered by passion.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    contact: "Contact",
    deleteData: "Delete my data and account",
    backToGame: "Back to Game",
    deletePageTitle: "Delete My Data and Account",
    deletePageDesc: "You can request the deletion of your account and all associated gameplay data at any time. This process is fully automated and can be done directly from within the Smash Dice application.",
    deletePageStepsTitle: "Steps to follow:",
    deletePageStep1: "Open the Smash Dice game on your device.",
    deletePageStep2: "Navigate to the Settings screen (gear icon on the main menu).",
    deletePageStep3: "Tap on the \"Delete account & data\" button.",
    deletePageStep4: "Confirm your action. Your username, play history, and scores will be immediately and permanently deleted from the leaderboard.",
    deletePageWarningTitle: "Warning:",
    deletePageWarningDesc: "This action is irreversible. Once deleted, your username and scores in the Hall of Fame cannot be recovered.",
    deletePageInGameView: "In-game view:",
    deletePageScreenshot: "Screenshot",
    deletePageScreenshotDesc: "To be replaced with the deletion screen",
    bootSteps: [
      "Initializing rendering engine...",
      "Compiling shaders & blueprints...",
      "Procedurally generating universe...",
      "Connecting to matchmaking servers...",
      "Calibrating gameplay loops...",
      "Systems operational. Ready for deployment."
    ]
  },
  fr: {
    navGames: "Jeux",
    navVision: "Vision",
    navContact: "Contact",
    statusActiveDev: "STATUT : DÉVELOPPEMENT ACTIF",
    incomingTransmission: "[ Transmission Entrante ]",
    heroTitle1: "DU CODE, DU JEU,",
    heroTitle2: "DES UNIVERS.",
    heroSubtitle: "GG Games Labs est un projet de studio indépendant né de ma passion pour le jeu vidéo. En tant que développeur solo, je conçois et code des expériences interactives à mon rythme. Le premier prototype prend forme tranquillement dans l'ombre.",
    bootLogTitle: "SYSTEM_BOOT_LOG // RUNNING",
    cardTitle: "Transmission En Cours",
    cardSubtitle: "Le premier projet se prépare en coulisses.",
    cardProtocol: "LIAISON PROTOCOLE",
    cardOnline: "EN LIGNE",
    cardText: "Plongez dans le premier jeu du studio en cliquant sur le bouton ci-dessous.",
    cardBadge: "SMASH_DICE // ARCADE",
    gamesSectionTitle: "Les Projets",
    gamesSectionSubtitle: "Un aperçu du développement actif et des concepts.",
    gameActiveTag: "En Développement",
    gameFutureTag: "Concept",
    game1Title: "Smash Dice",
    game1Slogan: "Smashez les dés, dominez le cosmos.",
    game1Desc: "Un jeu d'arcade d'action rapide et de réflexes développé en solo avec Flutter & Flame (moteur physique Forge2D). Dans le vide d'une nébuleuse mystérieuse, smashez les dés numérotés pour réduire leur valeur à zéro avant qu'ils ne s'échappent. Enchaînez les combos, débloquez des succès et dominez le Hall of Fame mondial Firebase.",
    game1PlayButton: "JOUER À SMASH DICE",
    game1Tech: "Flutter + Flame Engine (Physique Forge2D)",
    game1Features: "Système de Combos & Multiplicateurs, Classement Firebase mondial, Succès, Réanimation",
    mediaVideoPlaceholder: "Flux vidéo de gameplay // Bientôt disponible",
    mediaScreensPlaceholder: "Télémétrie visuelle // Captures d'écran à venir",
    mediaTrailer: "Vidéo de Gameplay",
    mediaScreens: "Captures d'Écran",
    gameFutureTitle: "Futur Univers",
    gameFutureDesc: "Une nouvelle idée dessine ses premières lignes. Plus d'informations seront transmises ici au fil du développement.",
    visionTitle: "Vision du Studio",
    visionSubtitle: "Un engagement envers une création de jeu réfléchie et ciblée.",
    philosophyIndependentTitle: "Indépendant",
    philosophyIndependentDesc: "Développement solo avec liberté d'expérimenter, d'apprendre et de créer sans compromis.",
    philosophyCreativeTitle: "Créatif",
    philosophyCreativeDesc: "Construire des mondes uniques et des expériences grâce à la curiosité, l'expérimentation et l'exploration artistique.",
    philosophyPlayfulTitle: "Ludique",
    philosophyPlayfulDesc: "Concevoir des jeux axés sur l'immersion, le plaisir et des expériences mémorables pour le joueur.",
    philosophyEvolvingTitle: "Évolutif",
    philosophyEvolvingDesc: "Améliorer continuellement tant techniquement que créativement avec chaque projet.",
    philosophyAuthenticTitle: "Authentique",
    philosophyAuthenticDesc: "Créer des projets significatifs avec personnalité, simplicité et passion sincère pour le développement de jeux.",
    footerCopyright: "© {year} GG Games Labs. Tous droits réservés.",
    footerDesigned: "Conçu en solo. Propulsé par la passion.",
    privacyPolicy: "Politique de confidentialité",
    termsOfService: "Conditions d'utilisation",
    contact: "Contact",
    deleteData: "Supprimer mon compte et mes données",
    backToGame: "Retour au jeu",
    deletePageTitle: "Supprimer mon compte et mes données",
    deletePageDesc: "Vous pouvez demander la suppression de votre compte et de toutes les données de jeu associées à tout moment. Ce processus est entièrement automatisé et s'effectue directement depuis l'application Smash Dice.",
    deletePageStepsTitle: "Étapes à suivre :",
    deletePageStep1: "Ouvrez le jeu Smash Dice sur votre appareil.",
    deletePageStep2: "Accédez à l'écran des Paramètres (icône d'engrenage sur l'écran principal).",
    deletePageStep3: "Appuyez sur le bouton \"Delete account & data\".",
    deletePageStep4: "Confirmez votre action. Votre nom d'utilisateur, votre historique et vos scores seront immédiatement et définitivement supprimés du classement.",
    deletePageWarningTitle: "Attention :",
    deletePageWarningDesc: "Cette action est irréversible. Une fois le compte supprimé, votre nom d'utilisateur et vos scores dans le Hall of Fame ne pourront plus être récupérés.",
    deletePageInGameView: "Aperçu dans le jeu :",
    deletePageScreenshot: "Capture d'écran",
    deletePageScreenshotDesc: "Sera remplacé par l'écran de suppression",
    bootSteps: [
      "Initialisation du moteur de rendu...",
      "Compilation des shaders & blueprints...",
      "Génération procédurale de l'univers...",
      "Connexion aux serveurs de matchmaking...",
      "Calibration des boucles de gameplay...",
      "Systèmes opérationnels. Prêt pour le déploiement."
    ]
  }
};
