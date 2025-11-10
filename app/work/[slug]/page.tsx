import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkBySlug, getAllWorkSlugs } from "@/data/work";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return { title: "Work Not Found // V19" };
  const title = `${item.title} // V19`;
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

  return (
    <section className="container wrapperx flex-col-center">
      <div className="max-w-7xl justify-center flex flex-col items-center">
        <div className="w-full flex items-start gap-4 mb-6">
          {item.logo && (
            <div className="w-14 h-14 relative rounded-xl overflow-hidden bg-white border-2 border-foreground/10 border-dotted">
              <Image src={item.logo} alt={`${item.title} logo`} fill className="object-contain p-2" />
            </div>
          )}
          <div>
            <h1 className="text-3xl font-bold text-foreground font-jakarta">{item.title}</h1>
            {item.summary && <p className="text-foreground/60 font-bricolage">{item.summary}</p>}
          </div>
        </div>

        {item.screenshot && (
          <div className="relative max-w-5xl mx-auto mb-6">
            {/* Blurred background */}
            <Image
              src={item.screenshot}
              alt={`${item.title} background`}
              width={1200}
              height={600}
              className="absolute inset-0 w-full h-full object-cover blur-xl opacity-10 dark:opacity-40 scale-[1.02] contrast-200 saturate-200 brightness-120 rounded-xl z-0"
              aria-hidden="true"
            />
            {/* Main hero image */}
            <Image
              src={item.screenshot}
              alt={`${item.title} screenshot`}
              width={1200}
              height={600}
              className="relative z-10 object-cover rounded-xl border-2 border-foreground/10 border-dotted"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 rounded-xl border-2 border-foreground/10 border-dotted">
            {item.description && (
              <p className="text-foreground/70 leading-relaxed">{item.description}</p>
            )}

            {item.highlights?.length ? (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-foreground/80 mb-2">Highlights</h3>
                <ul className="list-disc pl-5 text-foreground/60">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {item.roles?.length ? (
              <div className="mt-4">
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

          <div className="p-6 rounded-xl border-2 border-foreground/10 border-dotted">
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
      </div>
    </section>
  );
}