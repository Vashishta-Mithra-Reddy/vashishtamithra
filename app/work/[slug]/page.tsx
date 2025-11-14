import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkBySlug, getAllWorkSlugs } from "@/data/work";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { Slider } from "@/components/Slider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return { title: "Work Not Found" };
  const title = `${item.title}: ${item.description}`;
  const description = item.description || item.summary || "Work detail";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/work/${item.slug}`,
      images: item.screenshot ? [{ url: item.screenshot }] : undefined
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function generateStaticParams(): { slug: string }[] {
  return getAllWorkSlugs().map(slug => ({ slug }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return notFound();

  // Use gallery if provided; fallback to single screenshot
  const gallery = item.gallery?.length
    ? item.gallery
    : item.screenshot
    ? [item.screenshot]
    : [];

  return (
    <section className="w-full text-foreground font-satoshi wrapperx flex items-center justify-center">
      <div className="max-w-7xl w-full flex-col-center">
        {/* Header row (unchanged) */}
        <div className="w-full flex items-start gap-4 mb-6 max-w-4xl">
          {item.logo && (
            <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-white border-2 border-foreground/10 border-dotted">
              <Image src={item.logo} alt={`${item.title} logo`} fill className="object-contain p-2" />
            </div>
          )}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-foreground font-jakarta">{item.title}</h1>
            {item.summary && <p className="text-foreground/60 font-bricolage">{item.summary}</p>}
            <div className="mt-2 flex flex-wrap gap-2">
              {item.status && (
                <span className="px-2.5 py-1 text-xs rounded-full bg-foreground/10 text-foreground">
                  {item.status}
                </span>
              )}
              {item.platform && (
                <span className="px-2.5 py-1 text-xs rounded-full bg-blue-500/30 text-white border-2 border-blue-500/30 backdrop-blur-sm">
                  {item.platform}
                </span>
              )}
              {item.date && (
                <span className="px-2.5 py-1 text-xs rounded-full bg-foreground/10 text-foreground">
                  {item.date}
                </span>
              )}
            </div>
          </div>
          <div className="ml-auto">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl bg-foreground/10 text-foreground text-xs tracking-wide hover:bg-foreground/15"
            >
              Back to Projects
            </Link>
          </div>
        </div>

        {/* Bento hero */}
        {gallery.length > 0 && (
          <FadeInWhenVisible>
            <div className="relative group w-full max-w-5xl mx-auto mb-8 overflow-hidden rounded-2xl border-2 border-foreground/10 border-dotted bg-foreground/[0.03] p-3">
              <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-dense gap-3">
                {gallery.map((src, idx) => {
                  const largeTile = idx === 0;
                  const tileClasses = largeTile
                    ? "md:col-span-2 md:row-span-2 h-[220px] md:h-[420px]"
                    : "h-[140px] md:h-[200px]";
                  return (
                    <div key={idx} className={`relative overflow-hidden rounded-xl ${tileClasses}`}>
                      {/* Blurred backdrop */}
                      <Image
                        src={src}
                        alt={`${item.title} background ${idx + 1}`}
                        fill
                        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-10 dark:opacity-40 scale-[1.02] contrast-200 saturate-200 brightness-120 z-0"
                        aria-hidden="true"
                      />
                      {/* Main image */}
                      <Image
                        src={src}
                        alt={`${item.title} photo ${idx + 1}`}
                        fill
                        priority={idx === 0}
                        className="relative z-10 object-cover w-full h-full group-hover:scale-[1.015] transition-all duration-500"
                      />

                      {/* Overlay badges on the primary tile */}
                      {largeTile && (
                        <>
                          {item.status && (
                            <span className="absolute bottom-3 left-3 z-20 px-2.5 py-1 text-xs rounded-full bg-white/10 text-white border-2 border-white/5 backdrop-blur-sm">
                              {item.status}
                            </span>
                          )}
                          {item.platform && (
                            <span className="absolute bottom-3 right-3 z-20 px-2.5 py-1 font-bricolage font-semibold text-xs rounded-full bg-blue-500/30 text-white border-2 border-blue-500/30 backdrop-blur-sm">
                              {item.platform}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeInWhenVisible>
        )}

        {/* Details grid (unchanged) */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          <div className="lg:col-span-2 p-6 rounded-xl border-2 border-foreground/10 border-dotted">
            {item.description && (
              <p className="text-foreground/70 leading-relaxed text-lg font-bricolage">{item.description}</p>
            )}

            {item.highlights?.length ? (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-foreground/80 mb-2">Highlights</h3>
                <ul className="list-disc pl-5 text-foreground/60">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {item.roles?.length ? (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-foreground/80 mb-2">Roles</h3>
                <div className="flex flex-wrap gap-2">
                  {item.roles.map((role, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs rounded-full bg-foreground/10 text-foreground">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="p-6 rounded-xl border-2 border-foreground/10 border-dotted lg:sticky lg:top-28 h-fit">
            <div className="space-y-4">
              {item.tech?.length ? (
                <div>
                  <h3 className="text-sm font-semibold text-foreground/80 mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs rounded-full bg-foreground/10 text-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="flex flex-col gap-2">
                {item.status && (
                  <div className="text-sm text-foreground/60">
                    <span className="font-semibold">Status:</span> {item.status}
                  </div>
                )}
                {item.date && (
                  <div className="text-sm text-foreground/60">
                    <span className="font-semibold">Date:</span> {item.date}
                  </div>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                {item.links?.site && (
                  <Link
                    href={item.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl font-satoshi bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90"
                  >
                    Visit Site
                  </Link>
                )}
                {item.links?.repo && (
                  <Link
                    href={item.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl font-satoshi bg-foreground/10 text-foreground text-sm tracking-wide hover:bg-foreground/15"
                  >
                    View Repo
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex-col-center pt-32">
          <p className="text-foreground/70 leading-relaxed text-3xl font-bricolage font-bold">My other works</p>
          <div className="w-full rounded-xl py-8">
          <Slider />
          </div>
        </div>


      </div>
    </section>
  );
}