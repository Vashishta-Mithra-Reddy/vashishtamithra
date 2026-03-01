import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Success",
  description: "Payment confirmation for your V19 purchase.",
  alternates: {
    canonical: "/success",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "none",
      "max-snippet": 0,
      "max-video-preview": 0,
    },
  },
  openGraph: {
    title: "Payment Success",
    description: "Payment confirmation for your V19 purchase.",
    url: "/success",
  },
  twitter: {
    card: "summary",
    title: "Payment Success",
    description: "Payment confirmation for your V19 purchase.",
  },
};

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
