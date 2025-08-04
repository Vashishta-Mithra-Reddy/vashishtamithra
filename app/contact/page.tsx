'use client';

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { Copy, Mail } from "lucide-react";
import { toast } from "sonner";
import Image from 'next/image'; // Importing Next.js Image component
import useSound from "use-sound";
import Instagram from "@/socials/instagram.svg";
import X from "@/socials/twitter.svg";
import Ishta from "@/socials/ishta.svg";
import LinkedIn from "@/socials/linkedin.svg";
import GitHub from "@/socials/github.svg";

interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

export default function Contact() {
  const email = "me@vashishtamithra.com";
  const [click] = useSound("/notification.wav", { volume: 0.20 });
  const socials: SocialMedia[] = [
    {
      name: "X (Twitter)",
      url: "https://x.com/v19tech",
      icon: "/socials/twitter.svg",
    },
    {
      name: "GitHub",
      url: "https://github.com/Vashishta-Mithra-Reddy",
      icon: "/socials/github.svg",
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

  return (
    <section className="w-full min-h-screen text-foreground font-satoshi">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold text-foreground/60">Get in touch.</h2>
        </div>

        <FadeInWhenVisible>
          <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-xl">
            <Mail className="w-16 h-16 text-muted" />
            <p className="text-lg text-foreground/60 text-center max-w-md text-balance">
              Feel free to reach out for collaborations, questions, or just to say hello!
            </p>

            <div className="flex flex-row items-center justify-center mt-4 gap-4">
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
          <div className="flex justify-around mt-8 gap-2 py-1 rounded-xl bg-foreground/5 dark:bg-foreground/15">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 transition-all duration-300 group"
                aria-label={social.name}
              >
                {/* Using next/image for social icons */}
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={28} // Width of the icon
                  height={28} // Height of the icon
                  className="group-hover:text-foreground/90 transition-colors"
                />
              </a>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
