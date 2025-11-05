'use client';

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { Copy, Mail } from "lucide-react";
import { toast } from "sonner";
import Image from 'next/image'; 
import Link from "next/link";
import useSound from "use-sound";
import { motion } from "framer-motion";
import DarkVeil from "@/components/DarkVeil";



interface SocialMedia {
  name: string;
  url: string;
  icon: string;
  invert?: boolean;
}

export default function Contact() {
  const email = "me@vashishtamithra.com";
  const [click] = useSound("/notification.wav", { volume: 0.20 });
  const socials: SocialMedia[] = [
    {
      name: "X (Twitter)",
      url: "https://x.com/v19tech",
      icon: "/socials/twitter.svg",
      invert: true,
    },
    {
      name: "GitHub",
      url: "https://github.com/Vashishta-Mithra-Reddy",
      icon: "/socials/github.svg",
      invert: true,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vashishta-mithra/",
      icon: "/socials/linkedin.svg",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/vashishta_mithra_reddy",
      icon: "/socials/instagram.svg",
    },
    {
      name: "Ishta",
      url: "https://ishta.v19.tech/vashishta",
      icon: "/socials/ishta.svg",
    },
  ];

  const handleCopyEmail = async () => {
    if (typeof window === "undefined" || !navigator?.clipboard?.writeText) {
      toast.error("Clipboard API is not supported in this environment.");
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy email.");
    }
    click();
  };

  const headingWords = ["Get ", "in ", "touch;"];

  return (
    <section className="w-full pb-16 text-foreground font-satoshi flex items-center justify-center wrapperx md:pb-36">
      <div className="w-full h-full absolute top-0 left-0 dark:block hidden">

        <DarkVeil />

      </div>
      <div className="max-w-7xl mx-auto z-50 md:pt-12">
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold text-foreground/60 text-center flex items-center justify-center">
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "decay" }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        <FadeInWhenVisible> 
          <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-xl">
            <Mail className="w-16 h-16 text-muted-foreground" />
            <p className="text-lg text-foreground/60 text-center max-w-md text-balance">
              Feel free to reach out for collaborations, questions, or just to say hello!
            </p>

            <div className="flex flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${email}`}
                className="px-6 py-3 rounded-xl font-satoshi bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                {email}
              </a>

              <button
                onClick={handleCopyEmail}
                className="rounded-xl flex items-center justify-center gap-4 border-dashed border-2 border-foreground/60 hover:bg-foreground/5 py-2 px-4 cursor-pointer active:scale-95 transition-all duration-300"
              >
                <Copy className="w-6 h-6 text-foreground/60" />
              </button>
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="flex justify-around mt-4 py-1 rounded-xl bg-foreground/5 dark:bg-foreground/15 mx-4 md:mx-2">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 transition-all duration-300 group"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={28} 
                  height={28}
                  className={`group-hover:text-foreground/90 group-hover:scale-110 transition-all duration-300 ${social.invert ? 'dark:invert-75' : ''}`}
                />
              </Link>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
