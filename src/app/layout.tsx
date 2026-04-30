import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import CinematicIntro from "@/components/CinematicIntro";

const dmSans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const syne = Syne({ variable: "--font-heading", subsets: ["latin"], display: "swap" });
const dmMono = DM_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Drain Pain Plumbing | Licensed Plumber Jacksonville NC | 910-542-1263",
    template: "%s | Drain Pain Plumbing",
  },
  description:
    "Drain Pain Plumbing — Jacksonville NC's licensed, insured plumber. Drain cleaning, hydro-jetting, water heaters, 24/7 emergency service. Call 910-542-1263.",
  metadataBase: new URL("https://www.drainpainplumbing.com"),
  openGraph: { siteName: "Drain Pain Plumbing", locale: "en_US", type: "website" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable} ${dmMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A1628] relative">
        {/* Grain texture overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[60] opacity-[0.038]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />
        <CinematicIntro />
        <Header />
        <main className="pt-20 flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
