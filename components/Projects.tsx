import Image from "next/image";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";
import { title } from "process";
import Link from "next/link";

const allProjects = [
  {
    title: "Citadel",
    description: "A password manager",
    link: "https://citadel.v19.tech/",
    logo: "/logos/citadel.png",
    screenshot: "/screenshots/webp/citadel.webp",
  },
  {
    title: "Hita",
    description: "A wellness platform for a healthier lifestyle.",
    link: "https://hita.v19.tech",
    logo: "/logos/hita.png",
    screenshot: "/screenshots/webp/hita.webp",        
  },
  
  {
    title: "Why Kerala?",
    description: "Trip planner to convince friends.",
    link: "https://whykerala.v19.tech/",
    logo: "/logos/whykerala.png",
    screenshot: "/screenshots/webp/whykerala.webp",        
  },
  {
    title: "The Baga Village",
    description: "Hotel website for a Goa chain.",
    link: "https://bagavillage.vercel.app/",
    logo: "/logos/tbv.png",
    screenshot: "/screenshots/webp/thebagavillage.webp",        
  },
  {
    title: "Nidhi",
    description: "Decentralized fundraising with rewards.",
    link: "https://nidhi.v19.tech",
    logo: "/logos/nidhi.png", 
    screenshot: "/screenshots/webp/nidhi.webp",        
  },
  {
    title: "Vikraya",
    description: "Blockchain crop auction for farmers.",
    link: "https://vikraya.v19.tech",
    logo: "/logos/vikraya.png",
    screenshot: "/screenshots/webp/vikraya.webp",        
  },
  
  {
    title: "Lost Escapes",
    description: "Boutique travel booking experience.",
    link: "https://lostescapes.com/",
    logo: "/logos/lostescapes.jpg",
    screenshot: "/screenshots/webp/lostescapes.webp",        
  },
  {
    title: "Rohtang Apiary",
    description: "For a bee farmer in the Himalayas.",
    link: "https://www.rohtangapiary.com/",
    logo: "/logos/rohtang_apiary.png",  
    screenshot: "/screenshots/webp/rohtangapiary.webp",        
  },
  {
    title: "Doppleganger",
    description: "Live interest-based chat matching.",
    link: "https://xdoppleganger.vercel.app",
    logo: "/logos/doppleganger.png",  
    screenshot: "/screenshots/webp/doppleganger.webp",        
  },
  {
    title: "Infernia (Dragon's Realm)",
    description: "Personal vault with diary and diet logs.",
    link: "https://infernia.v19.tech",
    logo: "/logos/infernia.png",  
    screenshot: "/screenshots/webp/infernia.webp",        
  },
  {
    title: "Ishta.",
    description: "Personal identity showcase platform.",
    link: "https://ishta.v19.tech",
    logo: "/logos/ishta.png",  
    screenshot: "/screenshots/webp/ishta.webp",        
  },
  {
    title: "White Waters",
    description: "Adventure booking site.",
    link: "https://whitewaters.vercel.app",
    logo: "/logos/white_waters_v5.png",  
    screenshot: "/screenshots/webp/whitewaters.webp",        
  },
  {
    title: "Kāryakramah",
    description: "Venue and service provider booking SaaS.",
    link: "https://karyakramah.v19.tech",
    logo: "/logos/karyakramah.png",  
    screenshot: "/screenshots/webp/karyakramah.webp",        
  },
  {
    title: "Kanri | Kāryakramah",
    description: "Venue backend management dashboard.",
    link: "https://kanri.v19.tech/",
    logo: "/logos/karyakramah.png",  
    screenshot: "/screenshots/webp/kanri.webp",        
  },
  {
    title: "Kaizen",
    description: "Gamified Android fitness app.",
    link: "https://www.vashishtamithra.com/",
    logo: "/logos/kaizen.png",       
  },
  {
    title: "Krushi",
    description: "IoT-based soil and animal monitoring.",
    link: "https://github.com/Vashishta-Mithra-Reddy/Agro_T",
    logo: "/logos/krushi.png",        
  },
];

export default function Projects() {
  return (
    <section className="w-full min-h-screen text-foreground font-satoshi">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-foreground/60">Stuff I have built.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allProjects.map((project, index) => (
            <FadeInWhenVisible key={index}>
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start gap-4 transition group border-2 border-foreground/10 border-dotted rounded-2xl p-6"
            >
              
              {project.screenshot && (
                <div className="relative w-full">
                  {/* Blurred Background Screenshot */}
                  <Image
                    src={project.screenshot}
                    alt={`${project.title} background`}
                    width={460}
                    height={200}
                    className="absolute top-0 left-0 w-full h-full object-cover blur-lg opacity-30 dark:opacity-40 scale-[1.04] contrast-200 saturate-200 brightness-110 rounded-xl z-0"
                    aria-hidden="true"
                  />

                  {/* Main Screenshot */}
                  <Image
                    src={project.screenshot}
                    alt={project.title}
                    width={460}
                    height={200}
                    className="relative z-10 object-cover group-hover:scale-[1.015] transition-all duration-500 rounded-xl mb-2"
                  />
                </div>
              )}


              <div className="flex gap-1 w-full py-2.5 rounded-2xl px-2 border-2 border-foreground/10 border-dotted">
              <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-white mr-2">
                <Image
                  src={project.logo}
                  alt={project.title}
                  fill
                  className="p-1 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-sm font-semibold text-foreground/90">{project.title}</h3>
                <p className="text-sm text-foreground/60">{project.description}</p>
              </div>
              </div>
            </Link>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
