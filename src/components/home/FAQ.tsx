"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is hydro-jetting and why is it better than a drain snake?",
    a: "A drain snake punches a hole through the clog and calls it done — the buildup on the pipe walls stays behind. Hydro-jetting uses high-pressure water to blast grease, roots, scale, and debris completely out of the line. The pipe comes out clean, not just temporarily unblocked. Kyle's custom rig is the only one operated by an independent plumber in Onslow County.",
  },
  {
    q: "How fast can you get here for an emergency?",
    a: "Kyle is based in Jacksonville and serves all of Onslow County. For true emergencies — active flooding, burst pipes, sewage backup — call 910-542-1263. He picks up and will give you an honest ETA. Same-day service is standard for most calls.",
  },
  {
    q: "Do you serve my area?",
    a: "Yes — if you're in Jacksonville, Richlands, Camp Lejeune, Sneads Ferry, or Swansboro, you're in our service area. Call 910-542-1263 to confirm if you're outside that range. We're not going to turn down a good job.",
  },
  {
    q: "How much does drain cleaning cost?",
    a: "Drain cleaning typically starts at $99 for a standard clog. Hydro-jetting starts at $299. Water heater repair starts at $149. Every job is different — Kyle will give you a straight answer on the phone before he arrives, so there are no surprises.",
  },
  {
    q: "Are you licensed and insured in North Carolina?",
    a: "Yes. Kyle holds a North Carolina P-1 Plumbing Contractor license and carries full liability insurance and bonding. You can ask for proof any time — he'll have it on the truck.",
  },
  {
    q: "How does the military discount work?",
    a: "10% off every job, every time — for any active-duty service member, veteran, first responder, or military family member. Just mention it when you call. No paperwork required, no fine print. Kyle's father served 18 years as a Navy diver. This one isn't a marketing line.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 reveal">
          <p className="text-[#E8651A] font-semibold text-sm uppercase tracking-[0.25em] mb-3">FAQ</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Common Questions
          </h2>
          <p className="text-white/50 text-lg mt-4">
            Straight answers. No runaround.
          </p>
        </div>

        <div className="space-y-2 reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${
                open === i ? "border-[#E8651A]/40 bg-[#E8651A]/5" : "border-white/8 bg-white/3 hover:border-white/15"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
              >
                <span className="font-semibold text-white text-[0.95rem] leading-snug">{faq.q}</span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all mt-0.5 ${
                    open === i ? "border-[#E8651A] text-[#E8651A] rotate-45" : "border-white/20 text-white/40"
                  }`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-white/60 leading-relaxed text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <p className="text-white/40 text-sm mb-4">Still have questions?</p>
          <a
            href="tel:+19105421263"
            className="inline-flex items-center gap-2 text-[#E8651A] font-semibold hover:text-[#F97316] transition-colors text-lg"
          >
            Call Kyle directly — 910-542-1263
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
