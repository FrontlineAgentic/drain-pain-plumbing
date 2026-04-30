import type { Metadata } from "next";
import HeroVideo from "@/components/home/HeroVideo";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import PhotoStrip from "@/components/home/PhotoStrip";
import KyleStrip from "@/components/home/KyleStrip";
import MilitarySection from "@/components/home/MilitarySection";
import ReviewsStrip from "@/components/home/ReviewsStrip";
import FAQ from "@/components/home/FAQ";
import ServiceAreas from "@/components/home/ServiceAreas";
import FinalCTABanner from "@/components/home/FinalCTABanner";
import LocalBusinessSchema from "@/components/shared/LocalBusinessSchema";

export const metadata: Metadata = {
  title: "Licensed Plumber Jacksonville NC | Drain Cleaning & Hydro-Jetting | Drain Pain Plumbing",
  description:
    "Drain Pain Plumbing — Jacksonville NC's local licensed plumber. Drain cleaning, hydro-jetting, water heaters, 24/7 emergency service. Military discount. Call 910-542-1263.",
  alternates: {
    canonical: "https://www.drainpainplumbing.com",
  },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <HeroVideo />
      <TrustBar />
      <ServicesGrid />
      <HowItWorks />
      <PhotoStrip />
      <KyleStrip />
      <MilitarySection />
      <ReviewsStrip />
      <FAQ />
      <ServiceAreas />
      <FinalCTABanner />
    </>
  );
}
