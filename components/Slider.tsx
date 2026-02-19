import Link from "next/link";
import { InfiniteSlider } from "./ui/infinite-slider";
import { getWorkList } from "@/data/work";

interface SliderProps {
  filterType?: 'personal' | 'agency';
}

export function Slider({ filterType = 'personal' }: SliderProps) {
  const allWorks = getWorkList();

  const works = allWorks.filter((work) => {
    if (filterType === 'agency') {
      return work.type === 'agency';
    }
    return work.type !== 'agency';
  });

  return (
    <InfiniteSlider speedOnHover={20} gap={32} className="rounded-xl">
      {works.map((work) => {
        if (work.screenshot) {
          return (
            <Link key={work.slug} href={`/work/${work.slug}`} className="block group font-bricolage">
              <div className="relative w-[360px] h-[200px] rounded-xl overflow-hidden border-2 border-foreground/10 dark:border-none border-dotted bg-foreground/[0.03]">
                {/* Blurred backdrop */}
                <img
                  src={work.screenshot}
                  alt={`${work.title} background`}
                  aria-hidden="true"
                  draggable="false"
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover blur-xl opacity-20 dark:opacity-40 scale-[1.02] contrast-200 saturate-200 brightness-120 rounded-xl z-0 ${work.screenshotDark ? "dark:hidden" : ""}`}
                />
                {work.screenshotDark && (
                  <img
                    src={work.screenshotDark}
                    alt={`${work.title} dark background`}
                    aria-hidden="true"
                    draggable="false"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-10 dark:opacity-40 scale-[1.02] contrast-200 saturate-200 brightness-120 rounded-xl z-0 hidden dark:block"
                  />
                )}
                {/* Main screenshot */}
                <img
                  src={work.screenshot}
                  alt={work.title}
                  draggable="false"
                  decoding="async"
                  className={`relative z-10 object-cover w-full h-full transition-all duration-500 rounded-xl group-hover:scale-[1.015] group-hover:brightness-90 ${work.screenshotDark ? "dark:hidden" : ""}`}
                />
                {work.screenshotDark && (
                  <img
                    src={work.screenshotDark}
                    alt={`${work.title} dark mode`}
                    draggable="false"
                    decoding="async"
                    className="relative z-10 object-cover w-full h-full transition-all duration-500 rounded-xl group-hover:scale-[1.015] group-hover:brightness-90 hidden dark:block"
                  />
                )}

                {/* Hover overlay with backdrop blur + centered description */}
                {work.summary && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl bg-background/20 backdrop-blur-md pointer-events-none">
                    <p className="px-5 py-2 text-center text-md font-bold text-white group-hover:animate-in group-hover:slide-in-from-bottom transition-all duration-500">
                      {work.summary}
                    </p>
                  </div>
                )}

                {/* Overlay badges (fade out on hover for clarity) */}
                {work.title && (
                  <span className="absolute bottom-3 left-3 z-20 px-2.5 py-1 text-xs rounded-full bg-white/10 text-white border-2 border-white/5 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
                    {work.title}
                  </span>
                )}
                {work.platform && (
                  <span className="absolute bottom-3 right-3 z-20 px-2.5 py-1 font-bricolage font-semibold text-xs rounded-full bg-blue-500/30 text-white border-2 border-blue-500/30 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
                    {work.platform}
                  </span>
                )}
              </div>
            </Link>
          );
        }
        return null;
      })}
    </InfiniteSlider>
  );
}

