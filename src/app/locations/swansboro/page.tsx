import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import FinalCTABanner from "@/components/home/FinalCTABanner";

export const metadata: Metadata = {
  title: "Plumber in Swansboro NC | Drain Pain Plumbing | 910-542-1263",
  description: "Drain Pain Plumbing serves Swansboro, NC. Licensed plumber, fast response, drain cleaning, water heaters, 24/7 emergency service. Call 910-542-1263.",
  alternates: { canonical: "https://www.drainpainplumbing.com/locations/swansboro" },
};

const schema = { "@context": "https://schema.org", "@type": "Plumber", name: "Drain Pain Plumbing", telephone: "+19105421263", areaServed: { "@type": "City", name: "Swansboro", containedInPlace: { "@type": "State", name: "North Carolina" } } };

export default function SwansboroPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero label="Swansboro, NC" title="Plumber in Swansboro, NC" subtitle="Expanding service area. Same fast response, same licensed local plumber." />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#374151] text-lg leading-relaxed mb-8">Drain Pain Plumbing now serves Swansboro homeowners with the same licensed, reliable plumbing service Jacksonville residents have counted on for years. Whether you need a drain cleared, a water heater replaced, or emergency help when a pipe bursts, Kyle responds fast and does the job right. NC licensed, insured, family-owned — and a 10% discount for every military and veteran household, no exceptions.</p>
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
