"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 md:px-12 py-5 flex items-center justify-between text-white font-mono text-xs tracking-wider uppercase select-none">
        {/* Left: Menu trigger & Quick nav */}
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 py-1 px-2 border border-white/20 rounded hover:border-white transition-colors"
          >
            {isOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            <span className="font-semibold">{isOpen ? "CLOSE" : "MENU"}</span>
          </button>

          <nav className="hidden lg:flex items-center space-x-6 text-white/70">
            <Link href="/works" className="hover:text-white transition-colors">
              WORKS
            </Link>
            <Link href="/studio" className="hover:text-white transition-colors">
              STUDIO
            </Link>
            <Link href="/awards" className="hover:text-white transition-colors">
              AWARDS
            </Link>
            <Link href="/method" className="hover:text-white transition-colors">
              METHOD
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              CONTACT
            </Link>
          </nav>
        </div>

        {/* Center: Brand Name (Mobile) */}
        <Link href="/" className="lg:hidden font-bold tracking-[0.2em] hover:opacity-80 transition-opacity">
          N&apos;TH
        </Link>

        {/* Right: Info & CTA */}
        <div className="flex items-center space-x-5">
          <div className="hidden sm:flex items-center space-x-4 text-white/70">
            <Link href="/studio" className="hover:text-white transition-colors">
              ATELIER
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-bold">EN</span>
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-3.5 py-1.5 border border-white/40 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            BOOK A CALL
          </Link>
        </div>
      </header>

      {/* Fullscreen Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 flex flex-col justify-between p-8 md:p-16 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-20 flex flex-col space-y-6 md:space-y-8">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-4xl md:text-7xl font-sans font-light tracking-tight hover:translate-x-4 transition-transform duration-300"
          >
            HOME
          </Link>
          <Link
            href="/works"
            onClick={() => setIsOpen(false)}
            className="text-4xl md:text-7xl font-sans font-light tracking-tight hover:translate-x-4 transition-transform duration-300"
          >
            WORKS
          </Link>
          <Link
            href="/studio"
            onClick={() => setIsOpen(false)}
            className="text-4xl md:text-7xl font-sans font-light tracking-tight hover:translate-x-4 transition-transform duration-300"
          >
            STUDIO
          </Link>
          <Link
            href="/awards"
            onClick={() => setIsOpen(false)}
            className="text-4xl md:text-7xl font-sans font-light tracking-tight hover:translate-x-4 transition-transform duration-300"
          >
            AWARDS
          </Link>
          <Link
            href="/method"
            onClick={() => setIsOpen(false)}
            className="text-4xl md:text-7xl font-sans font-light tracking-tight hover:translate-x-4 transition-transform duration-300"
          >
            METHOD
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-4xl md:text-7xl font-sans font-light tracking-tight text-white/50 hover:text-white hover:translate-x-4 transition-all duration-300"
          >
            CONTACT &rarr;
          </Link>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 font-mono text-xs uppercase text-white/60">
          <div>
            N&apos;TH STUDIO &mdash; Creative Atelier<br />
            Branding, Spatial Systems &amp; Generative Motion
          </div>
          <div className="flex space-x-6">
            <Link href="/works" onClick={() => setIsOpen(false)} className="hover:text-white">
              Portfolio
            </Link>
            <Link href="/method" onClick={() => setIsOpen(false)} className="hover:text-white">
              Process
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-white">
              Inquiries
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
