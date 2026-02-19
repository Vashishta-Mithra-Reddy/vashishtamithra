import Link from "next/link";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";
import ContributionGraph from "./contribution-graph";
import AnimatedHeading from "./AnimatedHeading";

const SKILLS_1 = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
  "Python", "Solidity", "Web3", "AI/ML", "RAG", "Fast API"
];

const SKILLS_2 = [
  "Framer Motion", "PostgreSQL", "Supabase", "Drizzle", "Docker",
  "AWS", "GCP", "Cloudflare", "Arduino", "IoT"
];

const SKILLS = [...SKILLS_1,...SKILLS_2]

const EXPERIENCES = [
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

export default function Me() {
  return (
    <section className="w-full pb-0 overflow-hidden relative wrapperx">
      {/* Background Gradients */}
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" /> */}

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-12">

          {/* About Me */}
          <div className="w-full max-w-5xl text-left space-y-6 px-8 pt-16">
            {/* <FadeInWhenVisible>
              <h2 className="text-3xl lg:text-3xl text-foreground/85 font-bold font-satoshi">
                About Me
              </h2>
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              <p className="text-lg lg:text-xl text-foreground/80 font-bricolage leading-relaxed">
                I'm <span className="text-foreground underline underline-offset-4 decoration-wavy decoration-blue-500">Vashishta</span> a product-focused Founding Engineer who loves building 0-to-1 AI applications. 
                {/* I specialize in the <span className="font-semibold text-foreground">Next.js, Supabase, and Neon DB</span> ecosystem, 
                with a deep focus on <span className="font-semibold text-foreground">RAG</span> and automation. */}
              </p>
              <p className="text-lg lg:text-xl text-foreground/80 font-bricolage leading-relaxed mt-4">
                I have a proven track record of architecting and shipping production-ready MVPs for international startups, 
                obsessing over performance, scalability, and clean system design.
              </p>
            </FadeInWhenVisible>
          </div>

          {/* Socials - Commented out as requested */}
          {/* <FadeInWhenVisible>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://github.com/Vashishta-Mithra-Reddy"
                target="_blank"
                className="px-8 py-4 rounded-full bg-foreground text-background font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-foreground/10"
              >
                <Github className="w-5 h-5" />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/vashishta-mithra-reddy-vundyala/"
                target="_blank"
                className="px-8 py-4 rounded-full bg-foreground/5 border border-foreground/10 text-foreground font-bold flex items-center gap-3 hover:bg-foreground/10 transition-colors backdrop-blur-sm"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Link>
              <Link
                href="mailto:vashishtamithra@gmail.com"
                className="px-8 py-4 rounded-full bg-foreground/5 border border-foreground/10 text-foreground font-bold flex items-center gap-3 hover:bg-foreground/10 transition-colors backdrop-blur-sm"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </Link>
            </div>
          </FadeInWhenVisible> */}

          {/* Experience */}
          <div className="w-full max-w-5xl space-y-8 px-8">
            <FadeInWhenVisible>
              <div className="flex flex-col items-start gap-4">
                <AnimatedHeading text="Experience" className="!mb-0 !pt-0 !px-0 text-3xl lg:text-3xl text-foreground/90" />
              </div>
            </FadeInWhenVisible>

            <div className="grid grid-cols-1 gap-12 ml-4 mx-auto text-left relative">
              {EXPERIENCES.map((experience, index) => (
                <FadeInWhenVisible key={index}>
                  <div className="group relative">
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold font-jakarta text-foreground">
                          {experience.role}
                        </h3>
                        <p className="text-foreground/60 font-medium font-bricolage text-lg">
                          {experience.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-foreground/40 font-mono mt-2 sm:mt-0 mb-2">
                        <span className="whitespace-nowrap text-xs opacity-80">{experience.location}</span>
                        <span className="whitespace-nowrap">{experience.period}</span>
                      </div>
                    </div>

                    <ul className="list-disc list-outside ml-4 space-y-2 mb-6 text-foreground/70 font-bricolage leading-relaxed marker:text-foreground/30">
                      {experience.description.map((point, i) => (
                        <li key={i} className="pl-1">
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-foreground/5 text-foreground/60 border border-foreground/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>

          <div className="w-full pt-12 space-y-8 max-w-5xl px-8">
            <FadeInWhenVisible>
              <div className="flex flex-col items-start gap-4 mb-8">
                <AnimatedHeading text="Skills? (I mostly work with;)" className="!mb-0 !pt-0 !px-0 text-3xl lg:text-3xl text-foreground/90" />
                {/* <div className="w-20 h-1.5 bg-foreground/10 rounded-full" /> */}
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium rounded-xl bg-foreground/5 border border-foreground/10 text-foreground/80 hover:bg-foreground/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeInWhenVisible>
          </div>

          <div className="space-y-8 w-fit pt-12">
            <FadeInWhenVisible>
              <div className="flex flex-col items-start gap-4 mb-8">
                <AnimatedHeading text="Activity" className="!mb-0 !pt-0 !px-0 text-3xl lg:text-3xl text-foreground/90" />
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="flex justify-center w-full overflow-x-auto pb-4">
                <ContributionGraph />
              </div>
            </FadeInWhenVisible>
            </div>
        </div>
      </div>
    </section>
  );
}
