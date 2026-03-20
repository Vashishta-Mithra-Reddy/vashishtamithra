import Link from "next/link";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";
import TextReveal from "./animations/TextReveal";
import ContributionGraph from "./contribution-graph";
import AnimatedHeading from "./AnimatedHeading";
import HeroImage from "./HeroImage";
import IntroText from "./IntroText";
import { SKILLS, EXPERIENCES } from "@/data/profile";

export default function Me() {
  return (
    <section className="w-full pb-0 overflow-hidden relative">
      {/* Background Gradients */}
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" /> */}

      <div className="max-w-7xl mx-auto px-0 md:px-6">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-16">
          <div className="w-full max-w-5xl px-0 md:px-4 mb-8">
            <HeroImage />
          </div>

          {/* About Me */}
          <div className="w-full max-w-5xl text-left px-2 md:px-8 mb-6">
            {/* <FadeInWhenVisible>
              <h2 className="text-3xl lg:text-3xl text-foreground/85 font-bold font-satoshi">
                About Me
              </h2>
            </FadeInWhenVisible> */}
            {/* <TextReveal delay={0.10}>
              <p className="text-base sm:text-lg lg:text-xl text-foreground/80 font-bricolage leading-relaxed">
                I'm <span className="text-foreground underline underline-offset-4 decoration-wavy decoration-blue-500">Vashishta</span> a product-focused Founding Engineer who loves building 0-to-1 AI applications.
                I specialize in the <span className="font-semibold text-foreground">Next.js, Supabase, and Neon DB</span> ecosystem,
                with a deep focus on <span className="font-semibold text-foreground">RAG</span> and automation.
              </p>
            </TextReveal> */}
            
            <IntroText />
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
          <div className="w-full max-w-5xl space-y-8 px-2 md:px-8">
              <div className="flex flex-col items-start gap-4">
                <AnimatedHeading text="Experience" className="!mb-0 !pt-0 !px-0 text-2xl sm:text-3xl lg:text-3xl text-foreground/90" />
              </div>

            <div className="grid grid-cols-1 gap-12 md:ml-4 mx-auto text-left relative">
              {EXPERIENCES.map((experience, index) => (
                <div key={index} className="group relative">

                    <TextReveal>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold font-jakarta text-foreground">
                          {experience.role}
                        </h3>
                        <p className="text-foreground/60 font-medium font-bricolage text-base sm:text-lg">
                          {experience.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-foreground/40 font-mono mt-2 sm:mt-0 mb-2">
                        <span className="whitespace-nowrap text-xs opacity-80">{experience.location}</span>
                        <span className="whitespace-nowrap">{experience.period}</span>
                      </div>
                    </div>
                    </TextReveal>

                    <div className="ml-4 space-y-2 mb-6 text-foreground/70 font-bricolage leading-relaxed text-sm sm:text-base">
                      {experience.description.map((point, i) => (
                        <div key={i} className="flex items-start gap-2 pl-1">
                          <span className="text-foreground/30 shrink-0 leading-relaxed">•</span>
                          <TextReveal
                            text={point}
                            delay={0.1 + i * 0.08}
                            stagger={0.02}
                          />
                        </div>
                      ))}
                    </div>

                    <TextReveal delay={0.12 + experience.description.length * 0.07 + 0.06}>
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
                    </TextReveal>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full space-y-8 max-w-5xl px-2 md:px-8">
              <div className="flex flex-col items-start gap-4 mb-8">
                <AnimatedHeading text="Skills (I mostly work with;)" className="!mb-0 !pt-0 !px-0 hidden md:block text-2xl sm:text-3xl lg:text-3xl text-foreground/90" />
                <AnimatedHeading text="Skills" className="!mb-0 !pt-0 !px-0 md:hidden text-2xl sm:text-3xl lg:text-3xl text-foreground/90" />

                {/* <div className="w-20 h-1.5 bg-foreground/10 rounded-full" /> */}
              </div>

              <div className="flex flex-wrap gap-x-3 gap-y-5">
                {SKILLS.map((skill, i) => (
                  <TextReveal key={skill} delay={i * 0.04} inline>
                  <span
                    className="px-3 py-1.5 text-xs sm:text-base font-medium rounded-xl bg-foreground/5 border border-foreground/10 text-foreground/80 hover:bg-foreground/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                  </TextReveal>
                ))}
              </div>
          </div>

          <div className="hidden md:block space-y-8 w-fit">
              <div className="flex flex-col items-start gap-4 mb-8">
                <AnimatedHeading text="Activity" className="!mb-0 !pt-0 !px-0 text-3xl lg:text-3xl text-foreground/90" />
              </div>

            <FadeInWhenVisible>
              <div className="justify-center w-full overflow-x-auto pb-4">
                <ContributionGraph />
              </div>
            </FadeInWhenVisible>
            </div>
        </div>
      </div>
    </section>
  );
}
