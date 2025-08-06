import Image from "next/image";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";
import { title } from "process";

const allProjects = [
  {
    title: "Hita",
    description: "A wellness platform for a healthier lifestyle.",
    link: "https://hita.v19.tech",
    logo: "/logos/hita.png",
  },
  
  {
    title: "Why Kerala?",
    description: "Trip planner to convince friends.",
    link: "https://whykerala.v19.tech/",
    logo: "/logos/whykerala.png",
  },
  {
    title: "The Baga Village",
    description: "Hotel website for a Goa chain.",
    link: "https://bagavillage.vercel.app/",
    logo: "/logos/tbv.png",
  },
  {
    title: "Nidhi",
    description: "Decentralized fundraising with rewards.",
    link: "https://nidhi.v19.tech",
    logo: "/logos/nidhi.png",
  },
  {
    title: "Vikraya",
    description: "Blockchain crop auction for farmers.",
    link: "https://vikraya.v19.tech",
    logo: "/logos/vikraya.png",
  },
  
  {
    title: "Lost Escapes",
    description: "Boutique travel booking experience.",
    link: "https://lostescapes.com/",
    logo: "/logos/lostescapes.jpg",
  },
  {
    title: "Rohtang Apiary",
    description: "For a bee farmer in the Himalayas.",
    link: "https://www.rohtangapiary.com/",
    logo: "/logos/rohtang_apiary.png",
  },
  {
    title: "Doppleganger",
    description: "Live interest-based chat matching.",
    link: "https://xdoppleganger.vercel.app",
    logo: "/logos/doppleganger.png",
  },
  {
    title: "Infernia (Dragon's Realm)",
    description: "Personal vault with diary and diet logs.",
    link: "https://infernia.v19.tech",
    logo: "/logos/infernia.png",
  },
  {
    title: "Kaizen",
    description: "Gamified Android fitness app.",
    link: "https://www.vashishtamithra.com/",
    logo: "/logos/kaizen.png",
  },
  {
    title: "Ishta.",
    description: "Personal identity showcase platform.",
    link: "https://ishta.v19.tech",
    logo: "/logos/ishta.png",
  },
  {
    title: "White Waters",
    description: "Adventure booking site.",
    link: "https://whitewaters.vercel.app",
    logo: "/logos/white_waters_v5.png",
  },
  {
    title: "Kāryakramah",
    description: "Venue and service provider booking SaaS.",
    link: "https://karyakramah.v19.tech",
    logo: "/logos/karyakramah.png",
  },
  {
    title: "Kanri | Kāryakramah",
    description: "Venue backend management dashboard.",
    link: "https://kanri.v19.tech/",
    logo: "/logos/karyakramah.png",
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
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground/60">Stuff I have built.</h2>
        <div className="space-y-6">
          {allProjects.map((project, index) => (
            <FadeInWhenVisible key={index}>
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 transition group"
            >
              <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-white mr-2">
                <Image
                  src={project.logo}
                  alt={project.title}
                  fill
                  className="p-1 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground/90">{project.title}</h3>
                <p className="text-sm text-foreground/60">{project.description}</p>
              </div>
            </a>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
