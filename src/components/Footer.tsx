"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative w-full bg-black text-white px-6 md:px-12 pt-24 md:pt-36 pb-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col space-y-24">
        {/* Main CTA Block */}
        <div className="flex flex-col space-y-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            Initiate Engagement
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-sans font-normal tracking-tight leading-[0.95]">
            Let’s author the uncharted
          </h2>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-black rounded-full font-mono text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-all duration-300 hover:scale-105"
            >
              <span>BOOK A CONSULTATION</span>
              <span>&rarr;</span>
            </Link>

            <Link
              href="/contact#inquiry"
              className="inline-flex items-center space-x-3 px-8 py-4 border border-white/30 rounded-full font-mono text-xs uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              <span>SEND BRIEF / INQUIRY</span>
              <span className="font-mono">@</span>
            </Link>
          </div>
        </div>

        {/* Mid-Row: Social & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 border-t border-white/15 font-mono text-xs uppercase">
          <div className="md:col-span-4 flex flex-col space-y-3">
            <span className="text-white/40 block mb-2">Channels</span>
            <Link
              href="/contact"
              className="hover:text-white text-white/70 transition-colors inline-flex items-center space-x-1"
            >
              <span>Direct Inquiries</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/awards"
              className="hover:text-white text-white/70 transition-colors inline-flex items-center space-x-1"
            >
              <span>Industry Recognition</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/studio"
              className="hover:text-white text-white/70 transition-colors inline-flex items-center space-x-1"
            >
              <span>Atelier Archive</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="md:col-span-4 flex flex-col space-y-3">
            <span className="text-white/40 block mb-2">Navigation</span>
            <Link href="/works" className="hover:text-white text-white/70 transition-colors">
              WORKS
            </Link>
            <Link href="/studio" className="hover:text-white text-white/70 transition-colors">
              STUDIO
            </Link>
            <Link href="/awards" className="hover:text-white text-white/70 transition-colors">
              AWARDS
            </Link>
            <Link href="/method" className="hover:text-white text-white/70 transition-colors">
              METHOD
            </Link>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 border border-white/20 rounded-full hover:border-white hover:bg-white hover:text-black transition-all"
            >
              BACK TO TOP &uarr;
            </button>
            <div className="mt-8 md:mt-0 text-left md:text-right text-white/40">
              London &mdash; Paris<br />
              atelier@nth-studio.com
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-white/40 uppercase">
          <div>
            &copy; 2026 &mdash; N&apos;TH STUDIO. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4">
            <span>Augmented Digital Atelier</span>
            <span>&bull;</span>
            <Link href="/method" className="text-white/70 hover:text-white underline underline-offset-2">
              Bespoke Systems
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="text-white/70 hover:text-white underline underline-offset-2">
              Private Commissions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
