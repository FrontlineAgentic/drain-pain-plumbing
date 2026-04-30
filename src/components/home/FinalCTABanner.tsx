import Link from "next/link";

export default function FinalCTABanner() {
  return (
    <section className="bg-[#080f1e] py-24 relative overflow-hidden">
      {/* Large orange glow centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-[#E8651A]/12 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        <p className="text-[#E8651A] font-semibold text-sm uppercase tracking-[0.25em] mb-4">
          Ready to Fix It?
        </p>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.05]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Drain emergency?<br />Don&apos;t wait.
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
          Kyle picks up. On-site fast. Jacksonville, Richlands, Camp Lejeune, Sneads Ferry, and Swansboro.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+19105421263"
            className="inline-flex items-center justify-center gap-3 bg-[#E8651A] hover:bg-[#F97316] text-white font-bold text-xl px-10 py-4 rounded-lg transition-all hover:scale-[1.02] shadow-[0_0_50px_rgba(232,101,26,0.4)] font-mono"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            910-542-1263
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 text-white font-semibold text-lg px-8 py-4 rounded-lg border border-white/15 transition-all backdrop-blur-sm"
          >
            Send a Message →
          </Link>
        </div>
      </div>
    </section>
  );
}
