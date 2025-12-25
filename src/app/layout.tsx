import "@/styles/globals.css";
import "lenis/dist/lenis.css";

import { type Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import SmoothScroll from "@/components/smooth-scroll";
import Navigation from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "GDGOC LDCE - Google Developer Groups on Campus",
  description:
    "Join GDGOC LDCE and be part of a thriving community of developers at L.D. College of Engineering",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
