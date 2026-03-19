type LogoConfig = {
  src: string;
  zoom?: number;
  fit?: "contain" | "cover";
};

type WorkItem = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  logo?: string | LogoConfig | Array<string | LogoConfig>;
  screenshot?: string;
  screenshotDark?: string;
  gallery?: string[];
  links?: { site?: string; repo?: string };
  tech: string[];
  status?: string;
  date?: string;
  highlights: string[];
  roles: string[];
  platform?: string;
  type: 'personal' | 'agency';
};

export const works: WorkItem[] = [
  {
    slug: "hiresynq",
    title: "HireSynQ",
    summary: "Talent hiring and culture-fit matching.",
    description: "A hiring platform that syncs companies with pre-vetted candidates through culture-fit alignment, reducing volume while improving match quality from discovery to final hire.",
    logo: "/logos/v19.png",
    screenshot: "/screenshots/webp/hiresynq_light.webp",
    screenshotDark: "/screenshots/webp/hiresynq_dark.webp",
    links: { site: "https://hiresynq.vercel.app" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "agency",
    highlights: [
      "Three-step hiring flow from connect to hire",
      "Culture-fit alignment for stronger matches",
      "Pre-vetted candidates across Sales, HR, and Ops"
    ],
    roles: ["Frontend", "Design"]
  },
  {
    slug: "rare-cocoa",
    title: "Rare Cocoa",
    summary: "Farm-to-bar chocolate e-commerce.",
    description: "E-commerce website for a handcrafted chocolate brand from Vijayawada. Showcases their preservative-free, small-batch cocoa products with a premium visual identity and gifting experience.",
    logo: "/logos/rarecocoa.png",
    screenshot: "/screenshots/webp/rarecocoa_light.webp",
    screenshotDark: "/screenshots/webp/rarecocoa_dark.webp",
    links: { site: "https://www.rarecocoa.in" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "agency",
    highlights: [
      "Premium product showcase with gifting flows",
      "100% vegan, preservative-free brand identity",
      "Responsive design with dark/light theming"
    ],
    roles: ["Frontend", "Design"]
  },
  {
    slug: "socionova",
    title: "Socionova",
    summary: "Social media marketing agency.",
    description: "A full-service digital marketing agency offering review management for OTAs, PPC advertising, email automation, and social media growth for businesses scaling their online presence.",
    logo: "/logos/socionova.png",
    screenshot: "/screenshots/webp/socionova_light.webp",
    screenshotDark: "/screenshots/webp/socionova_dark.webp",
    links: { site: "https://socionova.in" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "agency",
    highlights: [
      "OTA review management and reputation building",
      "PPC campaigns with A/B testing and budget optimization",
      "Email marketing automation and segmentation"
    ],
    roles: ["Agency Lead", "Frontend"]
  },
  {
    slug: "navi",
    title: "Navi (Project Apotheosis)",
    summary: "Personal agentic life system.",
    description: "An autonomous personal system for tracking goals, journaling, habit management, and daily planning — part of the broader Project Apotheosis initiative for continuous self-improvement.",
    logo: { src: "/logos/navi.png", zoom: 1.2 },
    screenshot: "/screenshots/webp/navi_ai_light.webp",
    screenshotDark: "/screenshots/webp/navi_ai_dark.webp",
    links: { site: "https://navi.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI API"],
    status: "In Development",
    platform: "Agentic System",
    type: "personal",
    highlights: [
      "Goals and routines dashboard",
      "Journal and food tracking",
      "Agentic system for autonomous daily planning"
    ],
    roles: ["Full Stack", "AI Integration", "Product"]
  },
  {
    slug: "sift",
    title: "Sift (Active Recall Engine)",
    summary: "AI-powered active recall engine.",
    description: "Transforms documents into quizzes, flashcards, and structured learning paths using AI. Built around spaced repetition and active recall for deeper knowledge retention.",
    logo: { src: "/logos/sift.png", zoom: 1.2 },
    screenshot: "/screenshots/webp/sift_light.webp",
    screenshotDark: "/screenshots/webp/sift_dark.webp",
    links: { site: "https://sift.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    type: "personal",
    highlights: [
      "Document-to-quiz generation with AI",
      "Spaced repetition and active recall sessions",
      "Progress tracking that targets weak spots"
    ],
    roles: ["Full Stack", "AI Integration"]
  },
  {
    slug: "karyakramah-au",
    title: "Kāryakramah AU",
    summary: "Campus events and venue booking.",
    description: "A central hub for Anurag University students to discover events, register for workshops, and book campus venues with real-time availability and faculty-verified listings.",
    logo: "/logos/karyakramah.png",
    screenshot: "/screenshots/webp/au_light.webp",
    screenshotDark: "/screenshots/webp/au_dark.webp",
    links: { site: "https://au.karyakramah.com" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    type: "personal",
    highlights: [
      "Real-time venue availability tracking",
      "One-click event and workshop registration",
      "Faculty-verified event listings"
    ],
    roles: ["Full Stack", "Design"]
  },
  {
    slug: "hita",
    title: "Hita",
    summary: "AI-powered wellness platform.",
    description: "A wellness platform that helps users discover clean products, trusted remedies, and nutritional information through a context-aware AI assistant powered by RAG and embeddings.",
    logo: "/logos/hita.png",
    screenshot: "/screenshots/webp/hita_light.webp",
    screenshotDark: "/screenshots/webp/hita_dark.webp",
    links: { site: "https://hita.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "RAG", "OpenAI API", "n8n", "PostgreSQL"],
    date: "2025-06-10",
    type: "personal",
    highlights: [
      "Context-aware AI health assistant",
      "Verified product and remedy database",
      "Nutritional information lookup"
    ],
    roles: ["Product", "Frontend", "AI Integration"]
  },
  {
    slug: "contxt",
    title: "Contxt",
    summary: "RAG-as-a-service for developers.",
    description: "A developer platform for plug-and-play knowledge base integration, embedding management, and instant intelligence retrieval. Built to make RAG seamless for any application.",
    logo: "/logos/contxt.svg",
    screenshot: "/screenshots/webp/contxt_light.webp",
    screenshotDark: "/screenshots/webp/contxt_dark.webp",
    links: { site: "https://contxt.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vector DB", "LLMs", "Drizzle ORM"],
    type: "personal",
    highlights: [
      "Plug-and-play knowledge base integration",
      "Embedding management and versioning",
      "Instant retrieval API for developers"
    ],
    roles: ["Full Stack", "AI Integration"]
  },
  {
    slug: "ahara",
    title: "Ahāra",
    summary: "Food diary and health tracker.",
    description: "A cross-platform food diary and trigger analysis app that helps users discover patterns between diet, mood, and health through daily logging and AI-driven insights.",
    logo: "/logos/ahara.svg",
    screenshot: "/screenshots/webp/ahara_light.webp",
    screenshotDark: "/screenshots/webp/ahara_dark.webp",
    links: { site: "https://ahara.v19.tech" },
    tech: ["React Native", "Next.js", "TypeScript", "Expo", "Supabase", "Drizzle ORM"],
    status: "In Development",
    platform: "Native & Web",
    type: "personal",
    highlights: [
      "Fast onboarding and goal setup",
      "Daily logging for food, symptoms, and mood",
      "Pattern discovery and health insights"
    ],
    roles: ["Full Stack", "Mobile"]
  },
  {
    slug: "citadel",
    title: "Citadel",
    summary: "Zero-knowledge password manager.",
    description: "A secure, minimal password manager built with the Web Crypto API. Features zero-knowledge encryption ensuring all data stays client-side and truly private.",
    logo: "/logos/citadel.png",
    screenshot: "/screenshots/webp/citadel_light.webp",
    screenshotDark: "/screenshots/webp/citadel_dark.webp",
    links: { site: "https://citadel.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Web Crypto API", "Radix UI"],
    date: "2025-08-01",
    type: "personal",
    highlights: [
      "Zero-knowledge client-side encryption",
      "Clean UI with smooth micro-interactions",
      "No server-side secret storage"
    ],
    roles: ["Design", "Frontend", "Backend"]
  },
  {
    slug: "saransha",
    title: "Sārāmśa",
    summary: "Social content transcription tool.",
    description: "Extracts insights from social media content by transcribing reels and generating clean AI summaries for quick consumption — get the gist without the scroll.",
    logo: "/logos/v19.png",
    screenshot: "/screenshots/webp/saransha_light.webp",
    screenshotDark: "/screenshots/webp/saransha_dark.webp",
    links: { site: "https://saransha.vercel.app" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Whisper API", "FFmpeg"],
    date: "2025-07-01",
    type: "personal",
    highlights: [
      "Reel-to-text transcription via Whisper",
      "Concise AI-generated summaries",
      "Paste-and-go simplicity"
    ],
    roles: ["Full Stack", "AI Integration"]
  },
  {
    slug: "why-kerala",
    title: "Why Kerala?",
    summary: "Interactive Kerala travel guide.",
    description: "An immersive, scrollable travel guide showcasing Kerala's destinations, cuisine, routes, and culture through interactive Google Maps integration and visual storytelling.",
    logo: "/logos/whykerala.png",
    screenshot: "/screenshots/webp/whykerala.webp",
    links: { site: "https://whykerala.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Google Maps API"],
    date: "2025-11-01",
    type: "personal",
    highlights: [
      "Interactive route planning with Google Maps",
      "Visual food and cuisine showcase",
      "Immersive destination storytelling"
    ],
    roles: ["Design", "Frontend"]
  },
  {
    slug: "the-baga-village",
    title: "The Baga Village",
    summary: "Premium hotel booking website.",
    description: "A high-conversion booking website for a premium hotel collection across Goa and Manali, featuring property showcases, amenity highlights, and streamlined reservation flows.",
    logo: "/logos/tbv.png",
    screenshot: "/screenshots/webp/thebagavillage.webp",
    links: { site: "https://bagavillage.vercel.app" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "2025-08-15",
    type: "agency",
    highlights: [
      "Multi-property showcase with pricing",
      "High-conversion booking flow",
      "Responsive design with AVIF optimization"
    ],
    roles: ["Frontend", "Design"]
  },
  {
    slug: "nidhi",
    title: "Nidhi",
    summary: "Decentralized startup fundraising.",
    description: "A blockchain-powered crowdfunding platform enabling transparent startup funding through smart contracts, token incentives for backers, and expert mentor connections.",
    logo: "/logos/nidhi.png",
    screenshot: "/screenshots/webp/nidhi.webp",
    links: { site: "https://nidhi.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Solidity", "ThirdWeb", "Ethers.js"],
    date: "2025-01-20",
    type: "personal",
    highlights: [
      "Smart contract-powered campaign management",
      "Token incentives for backers",
      "Transparent on-chain fund tracking"
    ],
    roles: ["Frontend", "Web3"]
  },
  {
    slug: "vikraya",
    title: "Vikraya",
    summary: "Blockchain crop auction platform.",
    description: "A decentralized bidding platform for farmers to sell crops directly to buyers through blockchain-verified auctions, ensuring fair pricing and transparent transactions.",
    logo: "/logos/vikraya.png",
    screenshot: "/screenshots/webp/vikraya.webp",
    links: { site: "https://vikraya.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Solidity", "Ethers.js"],
    date: "2025-02-14",
    type: "personal",
    highlights: [
      "Real-time blockchain-verified bidding",
      "Farmer-centric listing and auction UI",
      "Transparent on-chain transaction ledger"
    ],
    roles: ["Frontend", "Web3"]
  },
  {
    slug: "lost-escapes",
    title: "Lost Escapes",
    summary: "Boutique experiential travel platform.",
    description: "A travel booking platform for handcrafted boutique getaways across Himachal Pradesh and Goa, featuring curated stays, destination storytelling, and sustainable tourism practices.",
    logo: "/logos/lostescapes.jpg",
    screenshot: "/screenshots/webp/lostescapes_light.webp",
    screenshotDark: "/screenshots/webp/lostescapes_dark.webp",
    links: { site: "https://lostescapes.com" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    date: "2025-07-01",
    type: "agency",
    highlights: [
      "Curated boutique stays with pricing",
      "Destination storytelling and travel blog",
      "Sustainable tourism-first approach"
    ],
    roles: ["Frontend", "Design"]
  },
  {
    slug: "rohtang-apiary",
    title: "Rohtang Apiary",
    summary: "Himalayan honey farm website.",
    description: "An informative website for a sustainable Himalayan bee farm, showcasing pure unprocessed multi-floral honey from Apis cerana bees with zero-chemical beekeeping practices.",
    logo: "/logos/rohtang_apiary.png",
    screenshot: "/screenshots/webp/rohtangapiary.webp",
    links: { site: "https://www.rohtangapiary.com" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "2025-05-20",
    type: "agency",
    highlights: [
      "Story-driven brand narrative",
      "Product showcase with seasonal pricing",
      "Gallery of farm operations and processes"
    ],
    roles: ["Frontend", "Design"]
  },
  // {
  //   slug: "doppleganger",
  //   title: "Doppleganger",
  //   summary: "Interest-based matching.",
  //   description: "Real-time chat matching platform that connects people who share passions, interests, and quirks through live interest-based pairing.",
  //   logo: "/logos/doppleganger.png",
  //   screenshot: "/screenshots/webp/doppleganger.webp",
  //   links: { site: "https://xdoppleganger.vercel.app" },
  //   tech: ["Next.js", "TypeScript", "Socket.io", "Node.js", "Express", "Redis"],
  //   date: "2025-12-18",
  //   type: "personal",
  //   highlights: ["Real-time chat matching", "Interest-based pairing algorithm", "Live global connections"],
  //   roles: ["Full Stack"]
  // },
  // {
  //   slug: "infernia",
  //   title: "Infernia",
  //   summary: "Gamified personal vault.",
  //   description: "A dragon-themed personal vault combining diary entries and diet tracking with gamification mechanics for an engaging approach to personal data management.",
  //   logo: "/logos/infernia.png",
  //   screenshot: "/screenshots/webp/infernia.webp",
  //   links: { site: "https://infernia.v19.tech" },
  //   tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  //   date: "2025-03-08",
  //   type: "personal",
  //   highlights: [
  //     "Gamified dragon-themed UI",
  //     "Secure diary with daily entries",
  //     "Diet and personal data tracking"
  //   ],
  //   roles: ["Full Stack"]
  // },
  {
    slug: "ishta",
    title: "Ishta.",
    summary: "Personal identity showcase.",
    description: "A digital space where users curate and share their interests, favorites, and personality through fully customizable profiles with elegant typography and minimal layouts.",
    logo: "/logos/ishta.png",
    screenshot: "/screenshots/webp/ishta_light.webp",
    screenshotDark: "/screenshots/webp/ishta_dark.webp",
    links: { site: "https://ishta.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    date: "2025-04-11",
    type: "personal",
    highlights: [
      "Fully customizable personal profiles",
      "Setup in under two minutes",
      "Minimalist design with elegant typography"
    ],
    roles: ["Full Stack", "Design"]
  },
  {
    slug: "white-waters",
    title: "White Waters",
    summary: "Adventure sports booking platform.",
    description: "A booking platform for an adventure tourism company offering kayaking, rafting, trekking, and mountain expeditions across the Himalayas with bold visuals and course galleries.",
    logo: "/logos/white_waters_v5.png",
    screenshot: "/screenshots/webp/whitewaters_light.webp",
    screenshotDark: "/screenshots/webp/whitewaters_dark.webp",
    links: { site: "https://whitewaters.vercel.app" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    date: "2025-09-28",
    type: "agency",
    highlights: [
      "Adventure course catalog with booking",
      "Immersive photography galleries",
      "Safety-first service presentation"
    ],
    roles: ["Frontend", "Design"]
  },
  {
    slug: "karyakramah",
    title: "Kāryakramah",
    summary: "Venue discovery and booking SaaS.",
    description: "A comprehensive venue discovery and booking platform for Hyderabad, featuring real-time availability checking, streamlined booking processes, and an extensive venue directory.",
    logo: "/logos/karyakramah.png",
    screenshot: "/screenshots/webp/karyakramah_light.webp",
    screenshotDark: "/screenshots/webp/karyakramah_dark.webp",
    links: { site: "https://karyakramah.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    date: "2025-05-21",
    type: "personal",
    highlights: [
      "Real-time venue availability checking",
      "Streamlined multi-step booking flow",
      "Extensive venue directory with search"
    ],
    roles: ["Full Stack", "Design", "System Design"]
  },
  {
    slug: "kanri",
    title: "Kanri",
    summary: "Venue management dashboard.",
    description: "The admin backend for Kāryakramah, enabling venue owners to manage listings, update availability, handle bookings, and control access through role-based permissions.",
    logo: "/logos/karyakramah.png",
    screenshot: "/screenshots/webp/kanri_light.webp",
    screenshotDark: "/screenshots/webp/kanri_dark.webp",
    links: { site: "https://kanri.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    date: "2025-06-02",
    type: "personal",
    highlights: [
      "Venue listing management dashboard",
      "Real-time booking and availability control",
      "Role-based access for admins and owners"
    ],
    roles: ["Full Stack", "System Design"]
  },
  // {
  //   slug: "kaizen",
  //   title: "Kaizen",
  //   summary: "Gamified fitness tracker app.",
  //   description: "A native Android fitness application with gamification mechanics, making workouts engaging through game-inspired progress tracking and achievement systems.",
  //   logo: "/logos/kaizen.png",
  //   links: { site: "https://www.vashishtamithra.com/" },
  //   tech: ["Kotlin", "Jetpack Compose", "Firebase", "Room"],
  //   status: "Archived",
  //   platform: "Android",
  //   date: "2022-08-10",
  //   type: "personal",
  //   highlights: [
  //     "Gamification mechanics for fitness goals",
  //     "Native Android UI with Jetpack Compose",
  //     "Real-time workout tracking"
  //   ],
  //   roles: ["Mobile"]
  // },
  // {
  //   slug: "krushi",
  //   title: "Krushi",
  //   summary: "IoT agriculture monitoring system.",
  //   description: "An IoT system for agricultural monitoring that detects animals, controls soil moisture, and streams sensor data to ThingSpeak for real-time cloud dashboards with IFTTT alerts.",
  //   logo: "/logos/krushi.png",
  //   links: { repo: "https://github.com/Vashishta-Mithra-Reddy/Agro_T" },
  //   tech: ["C++", "Python", "Arduino", "IoT Sensors", "ThingSpeak", "IFTTT"],
  //   status: "Archived",
  //   date: "2023-04-06",
  //   type: "personal",
  //   highlights: [
  //     "Animal detection and soil moisture control",
  //     "Real-time sensor data streaming",
  //     "Cloud dashboard with automated alerts"
  //   ],
  //   roles: ["Hardware", "Backend"]
  // }
];

export function getWorkList(): WorkItem[] {
  return works;
}

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return works.find((w) => w.slug === slug);
}

export function getAllWorkSlugs(): string[] {
  return works.map((w) => w.slug);
}
