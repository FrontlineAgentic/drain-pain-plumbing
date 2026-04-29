import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import LocalBusinessSchema from "@/components/shared/LocalBusinessSchema";
import FinalCTABanner from "@/components/home/FinalCTABanner";

export const metadata: Metadata = {
  title: "Military & Veteran Plumber Jacksonville NC | Camp Lejeune | Drain Pain Plumbing",
  description:
    "10% military discount every job. $99 PCS plumbing inspection for Camp Lejeune families moving to Jacksonville NC. Call 910-542-1263.",
  alternates: { canonical: "https://www.drainpainplumbing.com/military" },
};

const inspectionItems = [
  "Water heater condition & age check",
  "All visible supply lines & shutoff valves",
  "Drain flow test — kitchen, baths, laundry",
  "Toilet flush & fill mechanism",
  "Under-sink supply and drain condition",
  "Water pressure test",
  "Visible pipe condition (corrosion, leaks)",
  "Outdoor spigots & hose bibs",
  "Main shutoff valve location & function",
  "Written report with priority findings",
];

export default function MilitaryPage() {
  return (
    <>
      <LocalBusinessSchema />
      <PageHero
        label="Military & Veteran Discount"
        title="The Plumber for Your PCS Move — Jacksonville, NC"
        subtitle="Kyle's father served 18 years as a Navy diver. We take care of the people who serve."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A1628] rounded-2xl p-8 md:p-12 text-center mb-12">
            <p className="text-[#E8651A] font-semibold text-sm uppercase tracking-widest mb-4">🇺🇸 No Exceptions</p>
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              10% Off.<br />Every Job. Every Time.
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Active duty, veterans, reservists, and first responders. Bring your ID and we&apos;ll take it off the top — no forms, no hassle.
            </p>
            <a href="tel:+19105421263" className="inline-block bg-[#E8651A] hover:bg-[#F97316] text-white font-bold text-xl px-10 py-4 rounded-lg transition-colors">
              📞 Call Now — 910-542-1263
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: "🎖️", label: "Active Duty" },
              { icon: "🦅", label: "Veterans" },
              { icon: "⚓", label: "Reservists" },
              { icon: "🚒", label: "First Responders" },
            ].map((item) => (
              <div key={item.label} className="bg-[#F5F7FA] rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-[#0A1628] font-semibold text-sm">{item.label}</p>
                <p className="text-[#22C55E] text-sm font-medium">10% Off</p>
              </div>
            ))}
          </div>

          <div className="border-2 border-[#E8651A] rounded-2xl overflow-hidden mb-12">
            <div className="bg-[#E8651A] px-8 py-6">
              <h2 className="text-white text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                $99 PCS Plumbing Inspection
              </h2>
              <p className="text-white/90 mt-2">Moving to Jacksonville? Know your plumbing before you unpack.</p>
            </div>
            <div className="bg-white px-8 py-8">
              <p className="text-[#374151] mb-6 text-lg">
                PCS moves are chaotic. The last thing you need is a plumbing surprise after you&apos;ve signed a lease or closed on a house. Kyle&apos;s 10-point inspection gives you a written report so you know exactly what you&apos;re dealing with.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inspectionItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#374151] text-sm">
                    <span className="text-[#22C55E] font-bold mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="tel:+19105421263" className="inline-block bg-[#E8651A] hover:bg-[#F97316] text-white font-bold px-8 py-4 rounded-lg transition-colors">
                  Book PCS Inspection — 910-542-1263
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F7FA] rounded-2xl p-8">
            <h3 className="text-[#0A1628] text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Why This Discount Exists
            </h3>
            <p className="text-[#374151] leading-relaxed">
              Kyle&apos;s father served 18 years as a Navy diver — based out of this region, part of this community. The discipline and reliability that comes from a military household is baked into how Drain Pain operates. Showing up when you&apos;re called. Doing the job right the first time. Not leaving until it&apos;s done. The military discount isn&apos;t a marketing line. It&apos;s how we say thank you.
            </p>
          </div>
        </div>
      </section>

      <FinalCTABanner />
    </>
  );
}
