import Image from "next/image";
import Link from "next/link";

export default function KyleStrip() {
  return (
    <section className="py-24 bg-[#0A1628] relative overflow-hidden">
      {/* Subtle orange glow right side */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8651A]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative reveal">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src="/images/kyle.jpg"
                alt="Kyle Cashion — Owner, Drain Pain Plumbing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 via-transparent to-transparent" />
            </div>
            {/* Credential badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#080f1e] border border-[#E8651A]/30 text-white rounded-xl px-5 py-4 shadow-2xl">
              <p className="text-xs text-white/50 uppercase tracking-[0.2em] mb-1">NC License</p>
              <p className="font-mono font-bold text-[#E8651A] text-lg">#[LICENSE_NUMBER]</p>
            </div>
          </div>

          {/* Copy */}
          <div className="reveal reveal-delay-1">
            <p className="text-[#E8651A] font-semibold text-sm uppercase tracking-[0.25em] mb-3">
              Who You&apos;re Calling
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Kyle Cashion —<br />Jacksonville&apos;s Plumber
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-[1.05rem]">
              <p>
                Kyle spent ten years as the lead service-call plumber at Jacksonville&apos;s
                busiest drain specialist. He launched Drain Pain Plumbing because
                local homeowners deserved a plumber who actually showed up.
              </p>
              <p>
                His custom-built hydro-jetting rig is the only one operated by an independent
                plumber in Onslow County. When a drain snake won&apos;t cut it, Kyle&apos;s the call.
              </p>
              <p>
                His father served 18 years as a Navy diver — discipline, reliability,
                showing up when it counts. That&apos;s baked into how Drain Pain operates.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {["NC Licensed & Insured", "10+ Years Experience", "Navy Family"].map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/70 text-sm px-4 py-2 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] flex-shrink-0" />
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 bg-[#E8651A] hover:bg-[#F97316] text-white font-bold px-7 py-3.5 rounded-lg transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(232,101,26,0.25)]"
            >
              Kyle&apos;s Full Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
