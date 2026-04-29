import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import FinalCTABanner from "@/components/home/FinalCTABanner";

export const metadata: Metadata = {
  title: "Plumber in Sneads Ferry NC | Drain Pain Plumbing | 910-542-1263",
  description: "Drain Pain Plumbing serves Sneads Ferry, NC. Licensed plumber for coastal homes, drain cleaning, water heaters, 24/7 emergency. Call 910-542-1263.",
  alternates: { canonical: "https://www.drainpainplumbing.com/locations/sneads-ferry" },
};

const schema = { "@context": "https://schema.org", "@type": "Plumber", name: "Drain Pain Plumbing", telephone: "+19105421263", areaServed: { "@type": "City", name: "Sneads Ferry", containedInPlace: { "@type": "State", name: "North Carolina" } } };

export default function SneadsFerryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero label="Sneads Ferry, NC" title="Plumber in Sneads Ferry, NC" subtitle="Coastal homes, aging pipes, drain issues — we know the territory." />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#374151] text-lg leading-relaxed mb-8">Sneads Ferry&apos;s coastal location means older pipes, hard water deposits, and drain issues that show up differently than inland homes. Kyle Cashion has worked these properties and knows what to expect. Drain Pain Plumbing serves Sneads Ferry homeowners with licensed, insured plumbing work — drain cleaning, hydro-jetting for stubborn buildup, water heater replacements, and 24/7 emergency response when something goes wrong at the worst possible time.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {["Hydro-Jetting","Drain Lines","Water Lines","Water Heaters","Sump Pumps","Garbage Disposals"].map((s) => (
              <div key={s} className="bg-[#F5F7FA] rounded-lg px-4 py-3 text-sm font-medium text-[#0A1628] text-center">✓ {s}</div>
            ))}
          </div>
          <a href="tel:+19105421263" className="inline-block bg-[#E8651A] hover:bg-[#F97316] text-white font-bold px-8 py-4 rounded-lg transition-colors">Call 910-542-1263</a>
        </div>
      </section>
      <FinalCTABanner />
    </>
  );
}
