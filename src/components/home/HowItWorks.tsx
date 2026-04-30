const steps = [
  {
    number: "01",
    title: "Call or Text",
    body: "Kyle picks up. Describe the problem — he'll tell you what he thinks it is before he even shows up. No hold music, no call centers.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Same-Day On-Site",
    body: "No sub-contractors. Kyle shows up with the right equipment for the job. He's been doing this for 10 years — he's seen your problem before.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Fixed. Clean. Done.",
    body: "The job site gets left the way he found it. No callbacks, no excuses. If something isn't right, Kyle comes back — no questions asked.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8651A]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 reveal">
          <p className="text-[#E8651A] font-semibold text-sm uppercase tracking-[0.25em] mb-3">Process</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How It Works
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl">
            From your first call to a clean job site — here&apos;s what to expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-[#E8651A]/30 via-[#E8651A]/15 to-[#E8651A]/30 pointer-events-none" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} relative flex flex-col gap-5`}
            >
              {/* Step number + icon */}
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0 w-20 h-20 rounded-2xl bg-[#E8651A]/10 border border-[#E8651A]/25 flex items-center justify-center text-[#E8651A]">
                  {step.icon}
                  <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#E8651A] text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
              </div>

              <div>
                <h3
                  className="text-white font-bold text-xl mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 reveal">
          <a
            href="tel:+19105421263"
            className="inline-flex items-center gap-3 bg-[#E8651A] hover:bg-[#F97316] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-[1.02] shadow-[0_0_40px_rgba(232,101,26,0.3)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Start With a Call — 910-542-1263
          </a>
        </div>
      </div>
    </section>
  );
}
