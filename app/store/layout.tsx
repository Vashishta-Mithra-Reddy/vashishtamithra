import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store",
  description: "Support projects and purchase digital products from V19.",
  alternates: {
    canonical: "/store",
  },
  openGraph: {
    title: "Store",
    description: "Support projects and purchase digital products from V19.",
    url: "/store",
    images: [
      {
        url: "/screenshots/webp/whykerala.webp",
        width: 1200,
        height: 630,
        alt: "V19 store preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Store",
    description: "Support projects and purchase digital products from V19.",
    images: ["/screenshots/webp/whykerala.webp"],
  },
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
