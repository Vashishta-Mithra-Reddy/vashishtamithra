'use client';

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import LoadingAnimation from "@/components/LoadingAnimation";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
      <section className="w-full min-h-screen text-foreground font-satoshi">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground/60">Get in touch.</h2>
          
          <FadeInWhenVisible>
            <div className="flex flex-col items-center justify-center gap-8 p-8 bg-muted/20 rounded-xl">
              <Mail className="w-16 h-16 text-foreground/60" />
              <h3 className="text-2xl font-semibold text-foreground/90">Email Me</h3>
              <p className="text-lg text-foreground/60 text-center max-w-md">
                Feel free to reach out for collaborations, questions, or just to say hello!
              </p>
              <a 
                href="mailto:me@vashishtamithra.com" 
                className="px-6 py-3 mt-4 rounded-xl font-satoshi bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                me@vashishtamithra.com
              </a>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
  );
}