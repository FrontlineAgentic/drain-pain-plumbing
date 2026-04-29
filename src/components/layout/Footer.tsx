import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white/70 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          <div>
            <Image
              src="/images/logo.png"
              alt="Drain Pain Plumbing"
              width={140}
              height={42}
              className="h-10 w-auto mb-3"
            />
            <p className="text-sm italic text-white/50">&ldquo;Take the pain out of your drain.&rdquo;</p>
            <p className="text-sm mt-3">
              NC License #[LICENSE_NUMBER]<br />
              Insured &amp; Bonded
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/services", "Services"],
                ["/about", "About Kyle"],
                ["/military", "Military Discount"],
                ["/contact", "Contact"],
                ["/locations/jacksonville", "Jacksonville"],
                ["/locations/camp-lejeune", "Camp Lejeune"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>
                <a href="tel:+19105421263" className="text-[#E8651A] font-mono font-semibold hover:text-[#F97316] transition-colors">
                  910-542-1263
                </a>
              </p>
              <p>Jacksonville, NC</p>
              <p className="text-[#22C55E] font-medium">✓ 24/7 Emergency Service</p>
              <p className="text-[#22C55E] font-medium">✓ Military &amp; Veteran Discount</p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-white/40 pt-6">
          © {new Date().getFullYear()} Drain Pain Plumbing. All rights reserved. | Jacksonville, NC
        </p>
      </div>
    </footer>
  );
}
