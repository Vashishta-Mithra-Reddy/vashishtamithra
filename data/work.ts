type WorkItem = {
  slug: string;
  title: string;
  summary?: string;
  description?: string;
  logo?: string;
  screenshot?: string;
  links?: { site?: string; repo?: string };
  tech?: string[];
  status?: string;
  date?: string;
  highlights?: string[];
  roles?: string[];
  platform?: string;
};

export const works: WorkItem[] = [
  {
    slug: "citadel",
    title: "Citadel",
    summary: "Password manager",
    description: "A secure, minimal password manager built with modern web crypto and a clean UI.",
    logo: "/logos/citadel.png",
    screenshot: "/screenshots/webp/citadel.webp",
    links: { site: "https://citadel.v19.tech/" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Active",
    date: "2024-08-01",
    highlights: [
      "Zero-knowledge encryption approach",
      "Responsive UI with buttery micro-interactions"
    ],
    roles: ["Design", "Frontend", "Backend"]
  },
  {
    slug: "hita",
    title: "Hita",
    summary: "Wellness platform",
    description: "A wellness platform to help people track habits, routines, and health outcomes.",
    logo: "/logos/hita.png",
    screenshot: "/screenshots/webp/hita.webp",
    links: { site: "https://hita.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Active",
    date: "2024-06-10",
    highlights: [
      "Modular habit tracking",
      "Accessible, high-contrast UI"
    ],
    roles: ["Product", "Frontend"]
  },
  {
    slug: "saransha",
    title: "Saransha",
    summary: "Instagram reel transcriber",
    description: "Transcribes reels and provides clean summaries for quick consumption.",
    logo: "/logos/v19.png",
    screenshot: "/screenshots/webp/saransha.webp",
    links: { site: "https://saransha.vercel.app/" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Active",
    date: "2024-07-01",
    highlights: ["Fast transcript rendering", "Clear summaries"],
    roles: ["Frontend"]
  },
  {
    slug: "why-kerala",
    title: "Why Kerala?",
    summary: "Trip planner to convince friends",
    description: "Interactive planner showcasing Kerala destinations and routes.",
    logo: "/logos/whykerala.png",
    screenshot: "/screenshots/webp/whykerala.webp",
    links: { site: "https://whykerala.v19.tech/" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Active",
    date: "2023-11-01",
    highlights: ["Interactive route planning", "Lightweight UI"],
    roles: ["Design", "Frontend"]
  },
  {
    slug: "the-baga-village",
    title: "The Baga Village",
    summary: "Hotel website for a Goa chain",
    description: "A premium booking experience for a boutique hotel chain.",
    logo: "/logos/tbv.png",
    screenshot: "/screenshots/webp/thebagavillage.webp",
    links: { site: "https://bagavillage.vercel.app/" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Shipped",
    date: "2023-08-15",
    highlights: ["High-conversion landing", "Responsive booking UI"],
    roles: ["Frontend", "Designer"]
  },
  {
    slug: "nidhi",
    title: "Nidhi",
    summary: "Decentralized fundraising",
    description: "Fundraising with community rewards using Web3 principles.",
    logo: "/logos/nidhi.png",
    screenshot: "/screenshots/webp/nidhi.webp",
    links: { site: "https://nidhi.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Active",
    date: "2024-01-20",
    highlights: ["Reward mechanics", "Transparent flows"],
    roles: ["Frontend"]
  },
  {
    slug: "vikraya",
    title: "Vikraya",
    summary: "Blockchain crop auction",
    description: "Auction platform for farmers with transparent bidding.",
    logo: "/logos/vikraya.png",
    screenshot: "/screenshots/webp/vikraya.webp",
    links: { site: "https://vikraya.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Active",
    date: "2024-02-14",
    highlights: ["Transparent auctions", "Farmer-first UX"],
    roles: ["Frontend"]
  },
  {
    slug: "lost-escapes",
    title: "Lost Escapes",
    summary: "Boutique travel booking",
    description: "A boutique booking experience with high-end visuals.",
    logo: "/logos/lostescapes.jpg",
    screenshot: "/screenshots/webp/lostescapes.webp",
    links: { site: "https://lostescapes.com/" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Shipped",
    date: "2023-07-01",
    highlights: ["Luxury visuals", "Conversion-focused design"],
    roles: ["Frontend", "Designer"]
  },
  {
    slug: "rohtang-apiary",
    title: "Rohtang Apiary",
    summary: "Bee farmer site in Himalayas",
    description: "A clean, informative site for a Himalayan bee farm.",
    logo: "/logos/rohtang_apiary.png",
    screenshot: "/screenshots/webp/rohtangapiary.webp",
    links: { site: "https://www.rohtangapiary.com/" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Shipped",
    date: "2023-05-20",
    highlights: ["Informational pages", "High-contrast UI"],
    roles: ["Frontend"]
  },
  {
    slug: "doppleganger",
    title: "Doppleganger",
    summary: "Live interest-based chat matching",
    description: "Realtime chat matching based on interests.",
    logo: "/logos/doppleganger.png",
    screenshot: "/screenshots/webp/doppleganger.webp",
    links: { site: "https://xdoppleganger.vercel.app" },
    tech: ["Next.js", "TypeScript"],
    status: "Prototype",
    date: "2022-12-18",
    highlights: ["Realtime matching", "Reactive UI"],
    roles: ["Frontend"]
  },
  {
    slug: "infernia",
    title: "Infernia (Dragon's Realm)",
    summary: "Personal vault",
    description: "Personal vault with diary and diet tracking features.",
    logo: "/logos/infernia.png",
    screenshot: "/screenshots/webp/infernia.webp",
    links: { site: "https://infernia.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Active",
    date: "2024-03-08",
    highlights: ["Diary & diet logs", "Clean dashboards"],
    roles: ["Frontend"]
  },
  {
    slug: "ishta",
    title: "Ishta.",
    summary: "Personal identity showcase",
    description: "Identity and showcase platform with elegant typography.",
    logo: "/logos/ishta.png",
    screenshot: "/screenshots/webp/ishta.webp",
    links: { site: "https://ishta.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Active",
    date: "2024-04-11",
    highlights: ["Elegant type", "Minimal layouts"],
    roles: ["Frontend", "Designer"]
  },
  {
    slug: "white-waters",
    title: "White Waters",
    summary: "Adventure booking site",
    description: "Adventure bookings with bold visuals.",
    logo: "/logos/white_waters_v5.png",
    screenshot: "/screenshots/webp/whitewaters.webp",
    links: { site: "https://whitewaters.vercel.app" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Prototype",
    date: "2023-09-28",
    highlights: ["Bold visuals", "Lightweight stack"],
    roles: ["Frontend"]
  },
  {
    slug: "karyakramah",
    title: "Kāryakramah",
    summary: "Venue & service booking SaaS",
    description: "SaaS for venue and service provider bookings.",
    logo: "/logos/karyakramah.png",
    screenshot: "/screenshots/webp/karyakramah.webp",
    links: { site: "https://karyakramah.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Active",
    date: "2024-05-21",
    highlights: ["SaaS architecture", "Admin flows"],
    roles: ["Frontend", "Designer"]
  },
  {
    slug: "kanri",
    title: "Kanri | Kāryakramah",
    summary: "Venue backend management",
    description: "Admin dashboard for Kāryakramah.",
    logo: "/logos/karyakramah.png",
    screenshot: "/screenshots/webp/kanri.webp",
    links: { site: "https://kanri.v19.tech/" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Active",
    date: "2024-06-02",
    highlights: ["Admin dashboards", "Role-based views"],
    roles: ["Frontend"]
  },
  {
    slug: "kaizen",
    title: "Kaizen",
    summary: "Gamified Android fitness",
    description: "Android app with gamified fitness tracking.",
    logo: "/logos/kaizen.png",
    links: { site: "https://www.vashishtamithra.com/" },
    tech: ["Android", "Kotlin"],
    status: "Archive",
    date: "2022-08-10",
    highlights: ["Gamified experience", "Lightweight UI"],
    roles: ["Mobile"]
  },
  {
    slug: "krushi",
    title: "Krushi",
    summary: "IoT soil & animal monitoring",
    description: "IoT system for agriculture monitoring.",
    logo: "/logos/krushi.png",
    links: { repo: "https://github.com/Vashishta-Mithra-Reddy/Agro_T" },
    tech: ["IoT", "Embedded", "Cloud"],
    status: "Archive",
    date: "2021-11-20",
    highlights: ["Sensor integrations", "Cloud data ingestion"],
    roles: ["Hardware", "Backend"]
  },
  {
    slug: "ahara",
    title: "Ahāra",
    summary: "Food diary and trigger analysis platform.",
    description: "Food diary and trigger analysis platform.",
    logo: "/logos/ahara.svg",
    screenshot: "/screenshots/webp/ahara.webp",
    links: { site: "https://ahara.v19.tech/" },
    status: "Currently Building...",
    platform: "Native & Web"
  }
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