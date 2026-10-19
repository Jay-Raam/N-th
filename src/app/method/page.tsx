import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Atelier Methodology & Protocol",
  description:
    "Our four-stage proprietary creative methodology: Strategic Distillation, Visual Architecture, Kinetic Engineering, and Cultural Activation.",
  alternates: {
    canonical: "https://n-th.vercel.app/method",
  },
  openGraph: {
    title: "Atelier Methodology | N'TH STUDIO",
    description: "Decisions decided, not decorated. Explore the four-stage atelier protocol.",
    url: "https://n-th.vercel.app/method",
  },
};

const PHASES = [
  {
    step: "01",
    name: "Strategic Distillation",
    duration: "Weeks 01 &mdash; 03",
    description:
      "We interrogate the brand's cultural role, competitive landscape, and foundational paradoxes. The objective is not an exhaustive deck, but a crystal-clear single thesis that guides every subsequent aesthetic decision.",
  },
  {
    step: "02",
    name: "Visual & Typographic Architecture",
    duration: "Weeks 04 &mdash; 07",
    description:
      "Crafting the core visual instruments: custom type designs, mathematical grid systems, color restraint, and physical materiality guidelines. Every form is tested across digital and physical extremes.",
  },
  {
    step: "03",
    name: "Kinetic & Spatial Engineering",
    duration: "Weeks 08 &mdash; 12",
    description:
      "Translating brand identity into living motion: custom WebGL shaders, inertial physics, and cinematic sound design. We build interactive prototypes directly in code rather than static mockups.",
  },
  {
    step: "04",
    name: "Deployment & Cultural Activation",
    duration: "Weeks 13 &mdash; 16+",
    description:
      "Global release orchestration. From digital flagships to physical spatial installations, we oversee the rollout to ensure uncompromised fidelity and lasting cultural reverberation.",
  },
];

export default function MethodPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <section className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col space-y-24">
        {/* Header */}
        <div className="flex flex-col space-y-6 border-b border-white/15 pb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            THE METHODOLOGY / ATELIER PROTOCOL
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-light tracking-tight max-w-5xl">
            Decisions decided, not decorated.
          </h1>
          <p className="font-mono text-xs sm:text-sm text-white/60 max-w-2xl leading-relaxed">
            Our creative process is engineered for momentum. By eliminating agency bloat and working as a senior direct unit with leadership, we transform vision into reality with surgical precision.
          </p>
        </div>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PHASES.map((phase) => (
            <div
              key={phase.step}
              className="p-8 md:p-12 rounded-sm border border-white/10 bg-neutral-950 flex flex-col justify-between space-y-8"
            >
              <div className="flex justify-between items-baseline border-b border-white/10 pb-6">
                <span className="font-mono text-3xl font-light text-white/40">{phase.step}</span>
                <span
                  className="font-mono text-xs uppercase text-white/60"
                  dangerouslySetInnerHTML={{ __html: phase.duration }}
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-sans font-normal tracking-tight">
                  {phase.name}
                </h2>
                <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="font-mono text-xs text-white/60">
            Ready to initiate a commission with our team?
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-black rounded-full font-mono text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition-all"
          >
            <span>COMMISSION THE ATELIER</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
