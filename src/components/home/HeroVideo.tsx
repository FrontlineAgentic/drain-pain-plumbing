import Image from "next/image";
import Link from "next/link";

export default function HeroVideo() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#080c18]">
      {/* Giant logo watermark — centered, very faint */}
      <div className="absolute inset-0 flex items-center justify-end pr-0 pointer-events-none select-none">
        <Image
          src="/images/logo.png"
          alt=""
          width={900}
          height={270}
          aria-hidden="true"
          priority
          className="opacity-[0.045] w-[90vw] max-w-[920px] translate-x-[12%]"
        />
      </div>

      {/* Atmospheric glow — orange bloom bottom-left */}
      <div className="absolute -bottom-20 -left-20 w-[700px] h-[600px] bg-[#E8651A]/10 rounded-full blur-[140px] pointer-events-none" />
      {/* Cool blue top-right counter-glow */}
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-[#1B3A5C]/50 rounded-full blur-[120px] pointer-events-none" />
      {/* Subtle vignette fade at very bottom */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080f1e] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-left w-full">
        <p className="text-[#E8651A] font-semibold text-sm uppercase tracking-[0.25em] mb-5">
          Jacksonville, NC · Camp Lejeune · Onslow County
        </p>

        <h1
          className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Take the Pain<br />
          <span className="text-[#E8651A]">Out of Your</span><br />
          Drain.
        </h1>

        <p className="text-white/60 text-xl md:text-2xl mb-10 max-w-xl leading-relaxed">
          Jacksonville&apos;s licensed, insured plumber. Owner-operated. On-site fast.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+19105421263"
            className="inline-flex items-center justify-center gap-3 bg-[#E8651A] hover:bg-[#F97316] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-[1.02] shadow-[0_0_50px_rgba(232,101,26,0.4)]"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Now — 910-542-1263
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 text-white font-semibold text-lg px-8 py-4 rounded-lg border border-white/15 transition-all backdrop-blur-sm"
          >
            Request Service →
          </Link>
        </div>

        {/* Trust pills */}
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          {["NC Licensed & Insured", "10% Military Discount", "24/7 Emergency", "Owner-Operated"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-white/50 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] flex-shrink-0" />
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}
