import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import FinalCTABanner from "@/components/home/FinalCTABanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plumber near Camp Lejeune NC | Military Discount | Drain Pain Plumbing",
  description: "Drain Pain Plumbing serves Camp Lejeune military families. 10% military discount. $99 PCS plumbing inspection. Licensed plumber. Call 910-542-1263.",
  alternates: { canonical: "https://www.drainpainplumbing.com/locations/camp-lejeune" },
};

const schema = { "@context": "https://schema.org", "@type": "Plumber", name: "Drain Pain Plumbing", telephone: "+19105421263", areaServed: { "@type": "City", name: "Camp Lejeune", containedInPlace: { "@type": "State", name: "North Carolina" } } };

export default function CampLejeunePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero label="Camp Lejeune, NC" title="Plumber near Camp Lejeune, NC" subtitle="10% military discount. $99 PCS inspection. Kyle's father served 18 years as a Navy diver." />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#374151] text-lg leading-relaxed mb-8">Drain Pain Plumbing is the go-to plumber for Camp Lejeune families. Kyle Cashion grew up in a Navy household — his father served 18 years as a diver — and he takes care of the military community the way they take care of everyone else: showing up when called, doing the job right, and not leaving until it&apos;s done. Every active-duty, veteran, reservist, and first-responder household gets 10% off, no questions asked. PCSing to Jacksonville? Get Kyle&apos;s $99 pre-move plumbing inspection before you sign anything.</p>
          <div className="bg-[#0A1628] text-white rounded-xl p-6 mb-8">
            <p className="font-semibold text-lg mb-1">🎖️ Military Discount — 10% Every Job</p>
            <p className="text-white/70 text-sm">Active duty, veterans, reservists, first responders. Mention it when you call.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {["Hydro-Jetting","Drain Lines","Water Lines","Water Heaters","Sump Pumps","PCS Inspection"].map((s) => (
              <div key={s} className="bg-[#F5F7FA] rounded-lg px-4 py-3 text-sm font-medium text-[#0A1628] text-center">✓ {s}</div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+19105421263" className="inline-block bg-[#E8651A] hover:bg-[#F97316] text-white font-bold px-8 py-4 rounded-lg transition-colors text-center">Call 910-542-1263</a>
            <Link href="/military" className="inline-block bg-[#0A1628] hover:bg-[#1B3A5C] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center">See Military Discount</Link>
          </div>
        </div>
      </section>
      <FinalCTABanner />
    </>
  );
}
