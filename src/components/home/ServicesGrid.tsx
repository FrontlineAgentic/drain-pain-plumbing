import Link from "next/link";
import Image from "next/image";

const services = [
  {
    name: "Hydro-Jetting",
    description: "The only hydro-jetter operated by an independent plumber in Onslow County. Custom-built rig that blasts grease, roots, and buildup out completely.",
    href: "/services#hydro-jetting",
    featured: true,
    image: "/images/hydro-jetting.jpg",
  },
  {
    name: "Drain Lines",
    description: "Clogged or slow drains cleared fast — kitchen, bath, floor drains. No mess left behind.",
    href: "/services#drain-lines",
    featured: false,
  },
  {
    name: "Water Lines",
    description: "Leaking, broken, or undersized water lines repaired and replaced. Fixed right the first time.",
    href: "/services#water-lines",
    featured: false,
  },
  {
    name: "Water Heaters",
    description: "Tank and tankless repair or replacement. Same-day service when you're out of hot water.",
    href: "/services#water-heaters",
    featured: false,
    image: "/images/water-heaters.jpg",
  },
  {
    name: "Sump Pumps",
    description: "Installation, repair, and replacement. Keep your basement or crawl space dry year-round.",
    href: "/services#sump-pumps",
    featured: false,
  },
  {
    name: "Garbage Disposals",
    description: "Installation and repair of all major brands. Quick turnaround, no callbacks.",
    href: "/services#garbage-disposals",
    featured: false,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#080f1e] relative overflow-hidden">
      {/* Subtle top gradient continuation from hero */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0A1628] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 reveal">
          <p className="text-[#E8651A] font-semibold text-sm uppercase tracking-[0.25em] mb-3">Services</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What We Fix
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl">
            From clogged drains to full water line repairs — licensed, insured, done right.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Link
              key={service.name}
              href={service.href}
              className={`reveal reveal-delay-${Math.min(i + 1, 3)} group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                service.featured
                  ? "border-[#E8651A]/50 bg-[#E8651A]/8 row-span-1 lg:col-span-1"
                  : "border-white/8 bg-white/4 hover:bg-white/8 hover:border-white/20"
              }`}
            >
              {/* Photo background for cards that have images */}
              {service.image && (
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
                  {service.featured && (
                    <span className="absolute top-4 left-4 bg-[#E8651A] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                      Our Specialty
                    </span>
                  )}
                </div>
              )}

              <div className="p-6">
                {!service.image && service.featured && (
                  <span className="inline-block bg-[#E8651A] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide">
                    Our Specialty
                  </span>
                )}
                <h3
                  className="text-white font-bold text-xl mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[#E8651A] text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-[#E8651A]/50 text-white/70 hover:text-white px-6 py-3 rounded-lg text-sm font-medium transition-all"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
