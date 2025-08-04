'use client';

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { Copy, Mail } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const email = "me@vashishtamithra.com";

  const handleCopyEmail = async () => {
    if (typeof window === "undefined" || !navigator?.clipboard?.writeText) {
      toast.error("Clipboard not supported in this environment.");
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy email.");
    }
  };

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

            <div className="flex flex-row items-center justify-center mt-4 gap-4">
              <a
                href={`mailto:${email}`}
                className="px-6 py-3 rounded-xl font-satoshi bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                {email}
              </a>

              <button
                onClick={handleCopyEmail}
                className="rounded-xl flex items-center justify-center gap-4 border-dashed border-2 border-foreground/60 hover:bg-foreground/5 py-2 px-4 cursor-pointer"
              >
                <Copy className="w-6 h-6 text-foreground/60" />
              </button>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
