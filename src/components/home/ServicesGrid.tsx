import Link from "next/link";

const services = [
  {
    icon: "💧",
    name: "Hydro-Jetting",
    description: "Our custom-built rig blasts grease, roots, and buildup completely out of the line. The only hydro-jetter operated by an independent plumber in Onslow County.",
    href: "/services#hydro-jetting",
    featured: true,
  },
  {
    icon: "🚿",
    name: "Drain Lines",
    description: "Clogged or slow drains cleared fast — kitchen, bath, floor drains, and everything in between. No mess left behind.",
    href: "/services#drain-lines",
    featured: false,
  },
  {
    icon: "💦",
    name: "Water Lines",
    description: "Leaking, broken, or undersized water lines repaired and replaced. We find the source and fix it right the first time.",
    href: "/services#water-lines",
    featured: false,
  },
  {
    icon: "🔥",
    name: "Water Heaters",
    description: "Repair or full replacement — traditional tank and tankless. Same-day service available when you're out of hot water.",
    href: "/services#water-heaters",
    featured: false,
  },
  {
    icon: "🔧",
    name: "Sump Pumps",
    description: "Installation, repair, and replacement. Keep your basement or crawl space dry year-round.",
    href: "/services#sump-pumps",
    featured: false,
  },
  {
    icon: "🗑️",
    name: "Garbage Disposals",
    description: "Installation and repair of all major disposal brands. Quick turnaround, no callbacks.",
    href: "/services#garbage-disposals",
    featured: false,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What We Fix
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            From clogged drains to full water line repairs — licensed, insured, and done right.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className={`relative group rounded-xl p-6 bg-white border-2 transition-all hover:shadow-lg hover:-translate-y-1 ${
                service.featured
                  ? "border-[#E8651A] shadow-md"
                  : "border-transparent hover:border-[#E8651A]/30"
              }`}
            >
              {service.featured && (
                <span className="absolute -top-3 left-6 bg-[#E8651A] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Our Specialty
                </span>
              )}
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3
                className="text-[#0A1628] font-bold text-xl mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {service.name}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{service.description}</p>
              <span className="mt-4 inline-block text-[#E8651A] text-sm font-semibold group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
