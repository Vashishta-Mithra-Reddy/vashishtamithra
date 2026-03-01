export const SKILLS_1 = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
  "Python", "Solidity", "Web3", "AI/ML", "RAG", "Fast API"
];

export const SKILLS_2 = [
  "Framer Motion", "PostgreSQL", "Supabase", "Drizzle", "Docker",
  "AWS", "GCP", "Cloudflare", "Arduino", "IoT"
];

export const SKILLS = [...SKILLS_1, ...SKILLS_2];

export const EXPERIENCES = [
  {
    role: "Founding Engineer",
    company: "LiteThink AI",
    period: "Oct 2025 — Jan 2026",
    location: "Hybrid",
    description: [
      "Led end-to-end development of SPM (Super Product Manager), an AI-powered product management assistant, building the product from scratch.",
      "Architected and shipped a Chrome Extension and a web app for real-time product management workflows.",
      "Built scalable frontends using React.js with a strong focus on performance and UX.",
      "Designed backend systems using Firebase and Supabase, including third-party OAuth integrations.",
      "Integrated OpenAI APIs to enable AI-driven product insights, requirement analysis, and task generation.",
      "Owned system design, technical direction, and rapid MVP iteration from concept to delivery."
    ],
    tech: ["Next.js", "React", "Firebase", "Supabase", "OpenAI", "OAuth"]
  },
  {
    role: "Full Stack Developer",
    company: "Persist Ventures",
    period: "Mar 2025 — May 2025",
    location: "Remote",
    description: [
      "Built and launched the backend for Soulmegle, a video chat platform matching users via shared interests and behavior analysis.",
      "Designed a user matching system using OpenAI embeddings stored in Mongo Vector DB, leveraging cosine similarity for interest-based matching.",
      "Integrated AI (OpenAI APIs, AssemblyAI) for matchmaking, content safety, and real-time speech analysis.",
      "Developed with React.js, Express.js, and MongoDB."
    ],
    tech: ["React", "Express", "MongoDB", "OpenAI", "AssemblyAI", "Vector DB"]
  }
];
