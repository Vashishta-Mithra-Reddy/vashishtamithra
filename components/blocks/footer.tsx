import Link  from "next/link";
import Image from "next/image";
import ThemeSwitcher from "../theme-switcher";

export default function Footer() {
  const email = "me@vashishtamithra.com";
  const x = "{}";
  const y = "{/**/}";
  const socials = [
    { name: "X (Twitter)", url: "https://x.com/v19tech", icon: "/socials/twitter.svg" },
    { name: "GitHub", url: "https://github.com/Vashishta-Mithra-Reddy", icon: "/socials/github.svg" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vashishta-mithra/", icon: "/socials/linkedin.svg" },
    { name: "Instagram", url: "https://instagram.com/vashishta_mithra_reddy", icon: "/socials/instagram.svg" },
    { name: "Ishta", url: "https://ishta.v19.tech/vashishta", icon: "/socials/ishta.svg" },
  ];

  return (
    <footer className="w-full">
      <div className="w-full max-w-7xl mx-auto mb-16 rounded-xl backdrop-blur-3xl border-none md:border-2 border-foreground/10 md:border-dotted bg-background/60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-3xl font-bold font-satoshi mb-3">V19</Link>
            <p className="font-bricolage text-foreground/80">{x[0]+`Vashishta Mithra Reddy`+x[1]}</p>
            <p className="font-bricolage text-foreground/60">{` Human, `+`Dev, `+`Designer,`}</p>
            <p className="font-bricolage text-foreground/60 italic">& A Freelancer.</p>
            <p className="font-bricolage text-foreground/60 italic">{x[0]+"21, Male"+x[1]}</p>
          </div>


          {/* Contact */}
          <div className="flex flex-col md:items-end items-center gap-3">
            <div className="text-sm text-foreground/25 font-bricolage">
              {y.slice(0, 3)}<span className="text-foreground/90">Connect</span>{y.slice(3)}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="px-4 py-2 rounded-xl bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors"
              >
                {email}
              </a>
              {/* <ThemeSwitcher /> */}
            </div>
            <div className="flex gap-3 mt-1">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl hover:bg-foreground/10 transition"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="opacity-70 hover:opacity-100 transition"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="items-center justify-between border-t-2 border-foreground/10 border-dotted px-8 md:px-10 py-4 md:flex hidden">
          <span className="text-xs text-foreground/50">
            © {new Date().getFullYear()} Vashishta Mithra Reddy. All rights reserved?
          </span>
          <span className="text-xs text-foreground/40">Cause I love building stuff</span>
        </div>
      </div>
    </footer>
  );
}