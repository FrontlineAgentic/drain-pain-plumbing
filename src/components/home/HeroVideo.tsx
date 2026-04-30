import Image from "next/image";
import Link from "next/link";

export default function HeroVideo() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/hero-photo.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-[#0A1628]/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/50 via-transparent to-[#0A1628]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/60 via-transparent to-transparent" />

      {/* Orange accent glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#E8651A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-left">
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

        <p className="text-white/70 text-xl md:text-2xl mb-10 max-w-xl leading-relaxed">
          Jacksonville&apos;s licensed, insured plumber. Owner-operated. On-site fast.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+19105421263"
            className="inline-flex items-center justify-center gap-3 bg-[#E8651A] hover:bg-[#F97316] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-[1.02] shadow-[0_0_40px_rgba(232,101,26,0.35)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Now — 910-542-1263
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-lg border border-white/20 transition-all backdrop-blur-sm"
          >
            Request Service →
          </Link>
        </div>

        {/* Trust signals inline */}
        <div className="mt-12 flex flex-wrap gap-6">
          {["NC Licensed", "Insured & Bonded", "10% Military Discount", "24/7 Emergency"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-white/60 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] flex-shrink-0" />
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
