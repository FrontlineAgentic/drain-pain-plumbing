import Image from "next/image";
import Link from "next/link";

export default function KyleStrip() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F7FA] relative">
              <Image
                src="/images/kyle.jpg"
                alt="Kyle Cashion — Owner, Drain Pain Plumbing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#0A1628] text-white rounded-xl px-4 py-3 shadow-xl">
              <p className="text-xs text-white/60 uppercase tracking-wide">NC License</p>
              <p className="font-mono font-semibold text-[#E8651A]">#[LICENSE_NUMBER]</p>
            </div>
          </div>

          <div>
            <p className="text-[#E8651A] font-semibold text-sm uppercase tracking-widest mb-3">
              Who You&apos;re Calling
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Kyle Cashion —<br />Jacksonville&apos;s Plumber
            </h2>
            <div className="space-y-4 text-[#374151] leading-relaxed">
              <p>
                Kyle spent ten years as the lead service-call plumber at Drain Pros — Jacksonville&apos;s
                busiest drain specialist. He launched Drain Pain Plumbing on a $1,000 bootstrap because
                he believed local homeowners deserved a plumber who actually showed up.
              </p>
              <p>
                His custom-built hydro-jetting rig is the only one in Onslow County. When a drain snake
                won&apos;t cut it, Kyle&apos;s the call.
              </p>
              <p>
                His father served 18 years as a Navy diver. That background — discipline, reliability,
                showing up when it counts — is baked into how Drain Pain operates.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-[#F5F7FA] text-[#374151] text-sm px-4 py-2 rounded-full font-medium">
                ✓ NC Licensed &amp; Insured
              </span>
              <span className="bg-[#F5F7FA] text-[#374151] text-sm px-4 py-2 rounded-full font-medium">
                ✓ 10+ Years Experience
              </span>
              <span className="bg-[#F5F7FA] text-[#374151] text-sm px-4 py-2 rounded-full font-medium">
                ✓ Navy Family
              </span>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-block bg-[#0A1628] hover:bg-[#1B3A5C] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Kyle&apos;s Full Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
