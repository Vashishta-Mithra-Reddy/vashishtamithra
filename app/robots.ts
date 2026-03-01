import type { MetadataRoute } from "next";

const defaultUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://vashishtamithra.com");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/checkout", "/portal", "/webhooks", "/success"],
      },
    ],
    sitemap: `${defaultUrl}/sitemap.xml`,
    host: defaultUrl,
  };
}
