import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import CinematicIntro from "@/components/CinematicIntro";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Drain Pain Plumbing | Licensed Plumber Jacksonville NC | 910-542-1263",
    template: "%s | Drain Pain Plumbing",
  },
  description:
    "Drain Pain Plumbing — Jacksonville NC's licensed, insured plumber. Drain cleaning, hydro-jetting, water heaters, 24/7 emergency service. Call 910-542-1263.",
  metadataBase: new URL("https://www.drainpainplumbing.com"),
  openGraph: {
    siteName: "Drain Pain Plumbing",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CinematicIntro />
        <Header />
        <main className="pt-20 flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
