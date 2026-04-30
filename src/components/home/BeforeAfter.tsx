import Image from "next/image";

const results = [
  {
    stat: "100%",
    label: "Line clearance",
    note: "vs. ~60% with a drain snake",
  },
  {
    stat: "0",
    label: "Return visits",
    note: "Hydro-jetting stays clean longer",
  },
  {
    stat: "1×",
    label: "Visit to fix it",
    note: "Right equipment, first call",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-[#080f1e] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 reveal">
          <p className="text-[#E8651A] font-semibold text-sm uppercase tracking-[0.25em] mb-3">Results</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Before & After
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl">
            The difference between a snake that punches a hole and a hydro-jetter that clears the pipe completely.
          </p>
        </div>

        {/* Split image panel */}
        <div className="reveal relative rounded-2xl overflow-hidden h-72 md:h-96 border border-white/8">
          {/* BEFORE — left half, grayscale + dark */}
          <div className="absolute inset-0 w-1/2 overflow-hidden">
            <Image
              src="/images/hydro-jetting.jpg"
              alt="Before — clogged drain"
              fill
              className="object-cover object-center grayscale brightness-[0.35]"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-[#080c18]/40" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
              <span className="self-start bg-black/60 border border-white/15 text-white/80 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Before
              </span>
              <div>
                <p className="text-white/50 text-sm md:text-base leading-snug max-w-[180px]">
                  Grease, roots, and buildup blocking the line
                </p>
              </div>
            </div>
          </div>

          {/* AFTER — right half, full color */}
          <div className="absolute inset-0 left-1/2 overflow-hidden">
            <Image
              src="/images/hydro-jetting.jpg"
              alt="After — clear drain, hydro-jetting"
              fill
              className="object-cover object-center brightness-[1.05]"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-[#E8651A]/8" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
              <span className="self-start bg-[#E8651A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                After
              </span>
              <div>
                <p className="text-white text-sm md:text-base leading-snug font-semibold max-w-[180px]">
                  Full flow restored — pipe walls completely clean
                </p>
              </div>
            </div>
          </div>

          {/* Center divider */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/30 z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#080c18] border border-white/20 rounded-full w-10 h-10 flex items-center justify-center shadow-xl">
            <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
            </svg>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 reveal">
          {results.map((r) => (
            <div key={r.label} className="bg-white/4 border border-white/8 rounded-xl px-6 py-5 flex items-start gap-4">
              <span
                className="text-3xl font-bold text-[#E8651A] leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {r.stat}
              </span>
              <div>
                <p className="text-white font-semibold text-sm">{r.label}</p>
                <p className="text-white/40 text-xs mt-0.5">{r.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
