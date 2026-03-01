import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vashishta Mithra Reddy for collaborations, product work, and consulting.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact",
    description: "Get in touch with Vashishta Mithra Reddy for collaborations, product work, and consulting.",
    url: "/contact",
    images: [
      {
        url: "/screenshots/webp/hiresynq_light.webp",
        width: 1200,
        height: 630,
        alt: "Contact Vashishta Mithra Reddy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description: "Get in touch with Vashishta Mithra Reddy for collaborations, product work, and consulting.",
    images: ["/screenshots/webp/hiresynq_light.webp"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
