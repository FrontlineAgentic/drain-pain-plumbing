import Image from "next/image";

export default function PhotoStrip() {
  return (
    <section className="relative h-[65vh] min-h-[420px] overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/hydro-jetting.jpg"
        alt="Kyle Cashion's custom hydro-jetting rig — Drain Pain Plumbing"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Heavy left-side overlay fading right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080c18]/95 via-[#080c18]/65 to-[#080c18]/10" />
      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A1628] to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl reveal">
            <span className="inline-block bg-[#E8651A] text-white text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-wide">
              Our Specialty
            </span>
            <h2
              className="text-white text-4xl md:text-5xl font-bold leading-[1.1] mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Onslow County&apos;s Only<br />Custom Hydro-Jetter
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              Kyle built this rig himself — custom-fitted for the pipe sizes and soil
              conditions in this county. When a drain snake punches a hole through the clog
              and calls it done, Kyle&apos;s hydro-jetter blasts the line completely clean.
            </p>
            <a
              href="tel:+19105421263"
              className="inline-flex items-center gap-2.5 bg-[#E8651A] hover:bg-[#F97316] text-white font-bold px-7 py-3.5 rounded-lg transition-all hover:scale-[1.02] shadow-[0_0_35px_rgba(232,101,26,0.35)]"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Book Hydro-Jetting — 910-542-1263
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
