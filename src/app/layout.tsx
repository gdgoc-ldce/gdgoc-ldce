import "@/styles/globals.css";
import "lenis/dist/lenis.css";

import { type Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import SmoothScroll from "@/components/smooth-scroll";
import Navigation from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://gdgoc-ldce.vercel.app"),
  title: {
    default: "GDGOC LDCE — Google Developer Groups on Campus",
    template: "%s | GDGOC LDCE",
  },
  description:
    "Official GDG On Campus community at L.D. College of Engineering, Ahmedabad. Connect, learn, and build with Google technologies through events, study jams, and hackathons.",
  applicationName: "GDGOC LDCE",
  keywords: [
    "GDG",
    "Google Developer Groups",
    "GDG On Campus",
    "LDCE",
    "Ahmedabad",
    "Gujarat",
    "Student Developers",
    "Google Cloud",
    "Hackathons",
    "Study Jams",
  ],
  authors: [{ name: "GDGOC LDCE", url: "https://gdgoc-ldce.vercel.app" }],
  creator: "GDGOC LDCE",
  publisher: "GDGOC LDCE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "GDGOC LDCE — Google Developer Groups on Campus",
    description:
      "Community-run Google Developer Group at LD College of Engineering in Ahmedabad, Gujarat. Join meetups, hackathons, and learning paths across Google tech.",
    url: "https://gdgoc-ldce.vercel.app",
    siteName: "GDGOC LDCE",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.svg",
        width: 512,
        height: 512,
        alt: "GDGOC LDCE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gdgocldce",
    creator: "@gdgocldce",
    title: "GDGOC LDCE — Google Developer Groups on Campus",
    description:
      "Join GDG On Campus at L.D. College of Engineering to explore Google technologies with fellow student developers.",
    images: ["/images/logo.svg"],
  },
  alternates: {
    canonical: "https://gdgoc-ldce.vercel.app",
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
};

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="font-['Inter']">
        <SmoothScroll />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
