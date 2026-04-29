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
    <section className="py-16 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl font-bold text-[#0A1628] mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Serving Onslow County &amp; Beyond
        </h2>
        <p className="text-[#6B7280] mb-8">
          Fast response times throughout Jacksonville and the surrounding area.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <Link
              key={city.name}
              href={city.href}
              className="bg-white border-2 border-[#0A1628]/10 hover:border-[#E8651A] hover:text-[#E8651A] text-[#0A1628] font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              📍 {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
