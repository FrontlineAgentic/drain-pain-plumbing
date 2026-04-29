import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/shared/ContactForm";
import LocalBusinessSchema from "@/components/shared/LocalBusinessSchema";

export const metadata: Metadata = {
  title: "Contact Drain Pain Plumbing | Jacksonville NC | 910-542-1263",
  description:
    "Contact Drain Pain Plumbing in Jacksonville, NC. Call 910-542-1263 or send a message. 24/7 emergency service available.",
  alternates: { canonical: "https://www.drainpainplumbing.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      <PageHero
        label="Get in Touch"
        title="We Pick Up."
        subtitle="For emergencies, always call. For everything else, the form below works fine."
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#6B7280] text-sm uppercase font-semibold tracking-wide mb-2">Fastest Response</p>
              <a href="tel:+19105421263" className="block text-[#0A1628] font-mono font-bold text-4xl hover:text-[#E8651A] transition-colors mb-6">
                910-542-1263
              </a>
              <a href="tel:+19105421263" className="inline-block bg-[#E8651A] hover:bg-[#F97316] text-white font-bold px-8 py-4 rounded-lg transition-colors mb-10">
                📞 Call Now
              </a>
              <div className="space-y-4 text-[#374151]">
                <div className="flex items-start gap-3">
                  <span className="text-[#22C55E] font-bold text-lg">✓</span>
                  <div>
                    <p className="font-semibold">24/7 Emergency Service</p>
                    <p className="text-[#6B7280] text-sm">We answer nights, weekends, holidays.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#22C55E] font-bold text-lg">✓</span>
                  <div>
                    <p className="font-semibold">Jacksonville &amp; Onslow County</p>
                    <p className="text-[#6B7280] text-sm">Richlands, Camp Lejeune, Sneads Ferry, Swansboro.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#22C55E] font-bold text-lg">✓</span>
                  <div>
                    <p className="font-semibold">Military &amp; Veteran Discount</p>
                    <p className="text-[#6B7280] text-sm">10% off every job. Just mention it when you call.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#6B7280] text-sm uppercase font-semibold tracking-wide mb-6">Or Send a Message</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
