import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import FinalCTABanner from "@/components/home/FinalCTABanner";

export const metadata: Metadata = {
  title: "Plumber in Jacksonville NC | Drain Pain Plumbing | 910-542-1263",
  description: "Drain Pain Plumbing is Jacksonville NC's local licensed plumber. Drain cleaning, hydro-jetting, water heaters, 24/7 emergency service. Call 910-542-1263.",
  alternates: { canonical: "https://www.drainpainplumbing.com/locations/jacksonville" },
};

const schema = { "@context": "https://schema.org", "@type": "Plumber", name: "Drain Pain Plumbing", telephone: "+19105421263", areaServed: { "@type": "City", name: "Jacksonville", containedInPlace: { "@type": "State", name: "North Carolina" } } };

export default function JacksonvillePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero label="Jacksonville, NC" title="Plumber in Jacksonville, NC" subtitle="Your local licensed plumber. Drain cleaning, hydro-jetting, water heaters, 24/7 emergency service." />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#374151] text-lg leading-relaxed mb-8">Drain Pain Plumbing is based in Jacksonville, NC — this is home base. Kyle Cashion has been serving Jacksonville homeowners and businesses for over a decade, first as lead plumber at Drain Pros and now under his own name. Whether you&apos;re dealing with a backed-up kitchen drain, a water heater that quit, or a plumbing emergency at 2 a.m., Kyle picks up and shows up. Fast response times throughout Jacksonville and Onslow County. NC Licensed, insured, and family-owned.</p>
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
