import Link from "next/link";

export default function HeroVideo() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A1628]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/40 via-transparent to-[#0A1628]/80" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-[#E8651A] font-semibold text-sm uppercase tracking-widest mb-4">
          Jacksonville, NC • Camp Lejeune • Onslow County
        </p>
        <h1
          className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Take the Pain Out<br />of Your Drain
        </h1>
        <p className="text-white/80 text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          Jacksonville&apos;s trusted plumber. Licensed, insured, and on-site fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+19105421263"
            className="bg-[#E8651A] hover:bg-[#F97316] text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg"
          >
            📞 Call Now — 910-542-1263
          </a>
          <Link
            href="/contact"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-lg border border-white/30 transition-colors backdrop-blur-sm"
          >
            Send a Message →
          </Link>
        </div>
      </div>
    </section>
  );
}
