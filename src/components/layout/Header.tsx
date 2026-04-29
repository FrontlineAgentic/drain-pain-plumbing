"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/military", label: "Military" },
  { href: "/locations/jacksonville", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Drain Pain Plumbing"
              width={160}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+19105421263"
              className="text-white font-mono text-sm font-semibold hover:text-[#E8651A] transition-colors"
            >
              910-542-1263
            </a>
            <a
              href="tel:+19105421263"
              className="bg-[#E8651A] hover:bg-[#F97316] text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Call Now
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <a href="tel:+19105421263" className="text-white font-mono text-sm font-semibold">
              910-542-1263
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-1"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1B3A5C] border-t border-white/10">
          <nav className="px-4 py-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/90 hover:text-white text-sm font-medium py-2 border-b border-white/10 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+19105421263"
              className="bg-[#E8651A] text-white text-center font-semibold px-4 py-3 rounded-md mt-2"
            >
              📞 Call Now — 910-542-1263
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
