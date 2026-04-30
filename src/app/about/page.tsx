import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import LocalBusinessSchema from "@/components/shared/LocalBusinessSchema";
import FinalCTABanner from "@/components/home/FinalCTABanner";

export const metadata: Metadata = {
  title: "About Kyle Cashion | Licensed Plumber Jacksonville NC",
  description:
    "Kyle Cashion — 10 years as Jacksonville's lead plumber, launched Drain Pain Plumbing on $1,000. NC licensed, insured, Navy family. 910-542-1263.",
  alternates: { canonical: "https://www.drainpainplumbing.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <LocalBusinessSchema />
      <PageHero
        label="Who You're Calling"
        title="Jacksonville's Plumber. Built From the Ground Up."
        subtitle="Kyle Cashion spent ten years doing the work before putting his name on the truck."
      />

      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video rounded-2xl overflow-hidden mb-12 relative">
            <Image
              src="/images/kyle.jpg"
              alt="Kyle Cashion, owner of Drain Pain Plumbing"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/30 to-transparent" />
          </div>

          <div className="space-y-8 text-white/65 leading-relaxed text-lg">
            <div>
              <h2 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Ten Years. One Trade. One County.
              </h2>
              <p>
                Before launching Drain Pain Plumbing, Kyle Cashion spent a decade as the lead service-call
                plumber at Jacksonville&apos;s busiest drain specialist. He handled the calls nobody
                else wanted: burst pipes at 2 a.m., backed-up sewer lines, root intrusions that defeated
                three other plumbers before Kyle showed up with the right equipment.
              </p>
            </div>
            <div>
              <h2 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Started on $1,000
              </h2>
              <p>
                He started Drain Pain Plumbing on $1,000 and a truck. No investors. No franchise fee. Just
                a licensed plumber who knew this county, knew these pipes, and believed local homeowners
                deserved better than whoever Google sent them first.
              </p>
            </div>
            <div>
              <h2 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                The Hydro-Jetter Nobody Else Has
              </h2>
              <p>
                Kyle built his hydro-jetting rig himself — custom-fitted for the pipe sizes and soil
                conditions common in Onslow County. It&apos;s the only one operated by an independent plumber
                in the area. When drain snakes fail, the hydro-jetter clears the line completely.
              </p>
            </div>
            <div>
              <h2 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                A Navy Family
              </h2>
              <p>
                Kyle&apos;s father served 18 years as a Navy diver. That background — showing up when you&apos;re
                called, doing the job right the first time, not leaving until it&apos;s done — is the operating
                standard at Drain Pain. It&apos;s why we offer a 10% discount to every active-duty, veteran,
                and first-responder household, no questions asked.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "NC License", value: "#[LICENSE_NUMBER]", note: "P-1 Contractor" },
              { label: "Experience", value: "10+ Years", note: "Lead service plumber" },
              { label: "Founded", value: "[FOUNDED_YEAR]", note: "Jacksonville, NC" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-1">{item.label}</p>
                <p className="text-[#E8651A] font-bold text-xl font-mono">{item.value}</p>
                <p className="text-white/50 text-sm mt-1">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="tel:+19105421263" className="inline-flex items-center justify-center gap-2 bg-[#E8651A] hover:bg-[#F97316] text-white font-bold px-8 py-4 rounded-lg text-center transition-all hover:scale-[1.02]">
              Call Kyle — 910-542-1263
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-lg border border-white/15 transition-all">
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <FinalCTABanner />
    </>
  );
}
