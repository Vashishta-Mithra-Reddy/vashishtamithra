import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import localfont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Footer from "@/components/blocks/footer";
import Header from "@/components/blocks/header";
import BottomNav from "@/components/blocks/bottom-nav";
import BottomGradient from "@/components/BottomGradient";
import ConsoleBrand from "@/components/ConsoleBrand";
import { TooltipProvider } from "@/components/ui/tooltip";
// import GlobalBackground from "@/components/GlobalBackground";
import PWA from "@/components/PWA";
import { ProgressiveBlur } from "@/components/ui/skiper-ui/skiper41";

const defaultUrl = "https://vashishtamithra.com";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Vashishta Mithra Reddy",
    template: "%s | Vashishta Mithra Reddy",
  },
  description: "Portfolio of Vashishta Mithra Reddy featuring product design, engineering, and shipped work.",
  applicationName: "V19",
  manifest: "/manifest.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    title: "V19",
    statusBarStyle: "black-translucent",
  },
  keywords: [
    "Vashishta Mithra Reddy",
    "V19",
    "portfolio",
    "product designer",
    "frontend engineer",
    "full stack",
    "Next.js",
    "React",
    "TypeScript",
    "SaaS",
    "startup",
    "case studies",
    "projects",
  ],
  authors: [{ name: "Vashishta Mithra Reddy", url: "https://www.vashishtamithra.com" }],
  creator: "Vashishta Mithra Reddy",
  publisher: "V19",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "V19",
    title: "Vashishta Mithra Reddy",
    description: "Portfolio of Vashishta Mithra Reddy featuring product design, engineering, and shipped work.",
    url: defaultUrl,
    locale: "en_US",
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
    site: "@v19tech",
    creator: "@v19tech",
    title: "Vashishta Mithra Reddy",
    description: "Portfolio of Vashishta Mithra Reddy featuring product design, engineering, and shipped work.",
    images: ["/screenshots/webp/navi.webp"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  subsets: ["latin"], 
});



const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  display: "swap",
  subsets: ["latin"], 
});

const satoshi = localfont({
  variable: "--font-satoshi",
  weight: "900",
  src: "./fonts/Satoshi-Variable.woff2",
  display: "swap"
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} ${satoshi.variable} ${bricolage.variable} ${jakartaSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {/* Console brand logs */}

          <ConsoleBrand />
          <PWA />
          {/* <GlobalBackground /> */}

          
          <Header />
          <div>
            <TooltipProvider>
            {children}
            </TooltipProvider>
            <Analytics />
          </div>

          <ProgressiveBlur
            height="80px"
            position="bottom"
            blurAmount="14px"
            className="fixed bottom-0 left-0 right-0 z-30"
          />
          
          <Toaster position="bottom-center" />
          {/* <BottomGradient/> */}
          <BottomNav/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
