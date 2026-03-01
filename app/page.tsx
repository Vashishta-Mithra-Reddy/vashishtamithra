import type { Metadata } from "next";
import Projects from "@/components/Projects";
// import Image from "next/image";
// import LoadingAnimation from "@/components/LoadingAnimation";
// import BottomGradient from "@/components/BottomGradient";
import Me from "@/components/Me";

export const metadata: Metadata = {
  title: "Home",
  description: "Portfolio of Vashishta Mithra Reddy featuring product design, engineering, and shipped work.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vashishta Mithra Reddy",
    description: "Portfolio of Vashishta Mithra Reddy featuring product design, engineering, and shipped work.",
    url: "/",
    images: [
      {
        url: "/screenshots/webp/navi.webp",
        width: 1200,
        height: 630,
        alt: "Vashishta Mithra Reddy portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vashishta Mithra Reddy",
    description: "Portfolio of Vashishta Mithra Reddy featuring product design, engineering, and shipped work.",
    images: ["/screenshots/webp/navi.webp"],
  },
};

export default function Home() {
  return (
    <>
    {/* <LoadingAnimation> */}
    {/* <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-satoshi animate-in fade-in">
      <h1 className="text-3xl font-bold">
        Vashishta Mithra Reddy | V19
      </h1>
    </div> */}
    <Me/>
    <Projects/>
    {/* </LoadingAnimation> */}
    </>
  );
}
