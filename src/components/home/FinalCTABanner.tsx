import Link from "next/link";

export default function FinalCTABanner() {
  return (
    <section className="bg-[#E8651A] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Drain emergency? Don&apos;t wait.
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Kyle picks up. We&apos;re on-site fast. Jacksonville, Richlands, Camp Lejeune, Sneads Ferry, and Swansboro.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+19105421263"
            className="bg-white text-[#E8651A] font-bold text-xl px-10 py-4 rounded-lg hover:bg-gray-50 transition-colors shadow-lg font-mono"
          >
            910-542-1263
          </a>
          <Link
            href="/contact"
            className="bg-white/20 hover:bg-white/30 text-white font-semibold text-lg px-8 py-4 rounded-lg border border-white/40 transition-colors"
          >
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
}
