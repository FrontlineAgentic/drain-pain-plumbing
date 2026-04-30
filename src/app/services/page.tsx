import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import LocalBusinessSchema from "@/components/shared/LocalBusinessSchema";
import FinalCTABanner from "@/components/home/FinalCTABanner";

export const metadata: Metadata = {
  title: "Plumbing Services Jacksonville NC | Drain Pain Plumbing",
  description:
    "Drain cleaning, hydro-jetting, water heaters, sump pumps, water lines, garbage disposals, and 24/7 emergency plumbing in Jacksonville NC. Call 910-542-1263.",
  alternates: { canonical: "https://www.drainpainplumbing.com/services" },
};

const services = [
  {
    id: "hydro-jetting",
    icon: "💧",
    name: "Hydro-Jetting",
    description:
      "Kyle built his own hydro-jetting rig — the only custom unit operated by an independent plumber in Onslow County. Hydro-jetting blasts grease, roots, scale, and buildup completely out of the line. No more punching a hole through the clog. The pipe runs clean.",
    priceNote: "Starting at $299",
    featured: true,
  },
  {
    id: "drain-lines",
    icon: "🚿",
    name: "Drain Lines",
    description:
      "Clogged or slow drains cleared fast — kitchen, bath, laundry, floor drains. One visit, done right, no mess left behind.",
    priceNote: "Starting at $99",
    featured: false,
  },
  {
    id: "water-lines",
    icon: "💦",
    name: "Water Lines",
    description:
      "Leaking, broken, or undersized water lines repaired and replaced. We find the source and fix it right the first time — no repeat calls.",
    priceNote: "Call for estimate",
    featured: false,
  },
  {
    id: "water-heaters",
    icon: "🔥",
    name: "Water Heaters",
    description:
      "No hot water? Popping sounds from the tank? We diagnose, repair, or replace with the right unit for your home. Traditional tank and tankless. Same-day service available.",
    priceNote: "Repair from $149 | Replacement from $899",
    featured: false,
  },
  {
    id: "sump-pumps",
    icon: "🔧",
    name: "Sump Pumps",
    description:
      "Installation, repair, and replacement of sump pumps. Keep your basement or crawl space dry year-round — especially important in Onslow County's wet seasons.",
    priceNote: "Call for estimate",
    featured: false,
  },
  {
    id: "garbage-disposals",
    icon: "🗑️",
    name: "Garbage Disposals",
    description:
      "Installation and repair of all major disposal brands. Quick turnaround, no callbacks, done right the first time.",
    priceNote: "Starting at $149",
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <LocalBusinessSchema />
      <PageHero
        label="What We Do"
        title="Plumbing Services in Jacksonville, NC"
        subtitle="Licensed, insured, and done right. From clogged drains to full water line repairs."
      />

      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className={`rounded-2xl p-8 border transition-all ${
                service.featured
                  ? "bg-[#E8651A]/8 border-[#E8651A]/40"
                  : "bg-white/4 border-white/8 hover:bg-white/6 hover:border-white/15"
              }`}
            >
              {service.featured && (
                <span className="inline-block bg-[#E8651A] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide">
                  Our Specialty — Only Hydro-Jetter in Onslow County
                </span>
              )}
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {service.name}
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-white/60">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-sm font-semibold font-mono text-[#E8651A]/80">
                  {service.priceNote}
                </span>
                <a
                  href="tel:+19105421263"
                  className={`inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-lg text-center transition-all hover:scale-[1.02] ${
                    service.featured
                      ? "bg-[#E8651A] hover:bg-[#F97316] text-white shadow-[0_0_25px_rgba(232,101,26,0.3)]"
                      : "bg-white/8 hover:bg-white/15 text-white border border-white/15"
                  }`}
                >
                  Call to Book — 910-542-1263
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTABanner />
    </>
  );
}
