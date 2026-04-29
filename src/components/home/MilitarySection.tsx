import Link from "next/link";

export default function MilitarySection() {
  return (
    <section className="py-20 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8651A]/20 border border-[#E8651A]/40 text-[#E8651A] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              🇺🇸 Military &amp; Veteran Discount
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Proudly Serving<br />Military Families at<br />Camp Lejeune
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Kyle&apos;s father served 18 years as a Navy diver. We understand what it means to serve, and
              we honor it — <strong className="text-white">10% off every job, every time</strong> for all
              active-duty, veteran, and first-responder households.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 mb-8">
              <p className="text-white font-semibold text-lg mb-2">PCS Move? Get a $99 Plumbing Inspection</p>
              <p className="text-white/60 text-sm">
                Moving to Jacksonville? Before you unpack, let Kyle inspect your new home&apos;s plumbing.
                10-point inspection — know exactly what you&apos;re dealing with.
              </p>
            </div>
            <Link
              href="/military"
              className="inline-block bg-[#E8651A] hover:bg-[#F97316] text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              See Military Discount →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Active Duty", icon: "🎖️" },
              { label: "Veterans", icon: "🦅" },
              { label: "First Responders", icon: "🚒" },
              { label: "Military Families", icon: "🏠" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-white font-semibold">{item.label}</p>
                <p className="text-[#22C55E] text-sm font-medium mt-1">10% Off</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
