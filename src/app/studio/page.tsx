import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <section className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col space-y-24">
        {/* Header */}
        <div className="flex flex-col space-y-6 border-b border-white/15 pb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            THE ATELIER / PHILOSOPHY &amp; ETHOS
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-light tracking-tight max-w-5xl">
            We author digital architecture for leaders who refuse the generic.
          </h1>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-mono text-xs text-white/70 leading-relaxed border-b border-white/15 pb-20">
          <div className="space-y-4">
            <span className="text-white block uppercase tracking-widest text-sm">01 / RESTRAINT AS POWER</span>
            <p>
              True distinction is not additive ornamentation; it is the courage to distill a brand down to its most potent, unforgettable essence.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-white block uppercase tracking-widest text-sm">02 / UNIFIED PRACTICE</span>
            <p>
              Strategy, identity, typography, and frontend engineering are conceived as one continuous medium, avoiding handoff degradation.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-white block uppercase tracking-widest text-sm">03 / ENDURING VALUE</span>
            <p>
              We craft systems designed to outlive temporary trend cycles, establishing cultural gravity that compounds over decades.
            </p>
          </div>
        </div>

        {/* Feature Visual */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 relative aspect-[16/10] rounded-sm overflow-hidden bg-neutral-950 border border-white/10">
            <Image
              src="/images/studio/billboard.webp"
              alt="Atelier Space"
              fill
              className="object-cover filter contrast-105"
            />
          </div>
          <div className="md:col-span-5 space-y-6 md:pl-6">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50 block">
              LOCATIONS &amp; HORIZONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-light tracking-tight">
              Operating fluidly across London, Paris, and global digital realms.
            </h2>
            <p className="font-mono text-xs text-white/60 leading-relaxed">
              Our studio remains deliberately compact, guaranteeing that every partner commissions direct, senior-level attention without bureaucracy.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 border border-white/20 px-6 py-3 rounded-full font-mono text-xs uppercase tracking-widest hover:border-white hover:bg-white hover:text-black transition-all"
              >
                <span>COMMISSION THE ATELIER</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
