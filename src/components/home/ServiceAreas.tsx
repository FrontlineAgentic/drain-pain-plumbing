import Link from "next/link";

const cities = [
  { name: "Jacksonville", href: "/locations/jacksonville" },
  { name: "Richlands", href: "/locations/richlands" },
  { name: "Camp Lejeune", href: "/locations/camp-lejeune" },
  { name: "Sneads Ferry", href: "/locations/sneads-ferry" },
  { name: "Swansboro", href: "/locations/swansboro" },
];

export default function ServiceAreas() {
  return (
    <section className="py-16 bg-[#0A1628] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        <p className="text-[#E8651A] font-semibold text-sm uppercase tracking-[0.25em] mb-3">Service Area</p>
        <h2
          className="text-3xl font-bold text-white mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Serving Onslow County &amp; Beyond
        </h2>
        <p className="text-white/40 mb-8">
          Fast response times throughout Jacksonville and the surrounding area.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <Link
              key={city.name}
              href={city.href}
              className="flex items-center gap-1.5 bg-white/5 border border-white/10 hover:border-[#E8651A]/50 hover:text-[#E8651A] hover:bg-[#E8651A]/5 text-white/70 font-semibold px-6 py-2.5 rounded-full transition-all text-sm"
            >
              <span className="text-[#E8651A]/60 text-xs">📍</span>
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
