import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import FinalCTABanner from "@/components/home/FinalCTABanner";

export const metadata: Metadata = {
  title: "Plumber in Richlands NC | Drain Pain Plumbing | 910-542-1263",
  description: "Drain Pain Plumbing serves Richlands, NC. Licensed plumber, drain cleaning, hydro-jetting, 24/7 emergency service. Call 910-542-1263.",
  alternates: { canonical: "https://www.drainpainplumbing.com/locations/richlands" },
};

const schema = { "@context": "https://schema.org", "@type": "Plumber", name: "Drain Pain Plumbing", telephone: "+19105421263", areaServed: { "@type": "City", name: "Richlands", containedInPlace: { "@type": "State", name: "North Carolina" } } };

export default function RichlandsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero label="Richlands, NC" title="Plumber in Richlands, NC" subtitle="Fast response from Jacksonville. Licensed, insured, same-county reliability." />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#374151] text-lg leading-relaxed mb-8">Richlands homeowners are right in Kyle&apos;s backyard. Drain Pain Plumbing serves Richlands with the same fast response times as Jacksonville — you&apos;re not getting a subcontractor or a franchise technician. You&apos;re getting Kyle. From routine drain cleaning to emergency calls, Richlands residents get a licensed, insured local plumber who knows Onslow County and shows up when promised. No runaround.</p>
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
