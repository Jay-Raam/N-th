import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Accolades & Honors",
  description:
    "International recognition, design awards, and industry distinctions awarded to N'TH Studio commissions from 2024 to 2026.",
  alternates: {
    canonical: "https://n-th.vercel.app/awards",
  },
  openGraph: {
    title: "Accolades & Honors | N'TH STUDIO",
    description: "Industry awards and jury honors awarded to N'TH Studio commissions.",
    url: "https://n-th.vercel.app/awards",
  },
};

const HONORS = [
  {
    year: "2026",
    title: "Studio of the Year &mdash; Nominee",
    organization: "Awwwards International",
    project: "N'TH Studio Portfolio & Identity",
  },
  {
    year: "2025",
    title: "Site of the Day (SOTD)",
    organization: "Awwwards",
    project: "Utopia Parfumerie Flagship",
  },
  {
    year: "2025",
    title: "FWA of the Month",
    organization: "Favorite Website Awards",
    project: "Aurbse Spatial Platform",
  },
  {
    year: "2025",
    title: "Grand Prix du Branding",
    organization: "Paris Design Awards",
    project: "LGM Precision Rebrand",
  },
  {
    year: "2024",
    title: "Best Experimental Interaction",
    organization: "Webby Awards",
    project: "In_Cognita Generative Exhibition",
  },
  {
    year: "2024",
    title: "Gold Trophy &mdash; Digital Craft",
    organization: "Cannes Lions",
    project: "Haptify Sensory System",
  },
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <section className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col space-y-20">
        {/* Header */}
        <div className="flex flex-col space-y-6 border-b border-white/15 pb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            HONORS &amp; RECOGNITION / 2024 &mdash; 2026
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-light tracking-tight">
            Accolades &amp; Honors
          </h1>
          <p className="font-mono text-xs sm:text-sm text-white/60 max-w-2xl leading-relaxed">
            Recognized by global design juries and cultural institutions for excellence in typography, digital craft, and forward-thinking brand architecture.
          </p>
        </div>

        {/* Awards Table */}
        <div className="flex flex-col border-t border-white/15">
          {HONORS.map((honor, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-b border-white/10 gap-4"
            >
              <div className="flex items-baseline space-x-6 md:space-x-12">
                <span className="font-mono text-xs text-white/40">{honor.year}</span>
                <div>
                  <h2
                    className="text-xl sm:text-2xl font-sans font-normal"
                    dangerouslySetInnerHTML={{ __html: honor.title }}
                  />
                  <p className="font-mono text-xs text-white/50 mt-1">
                    {honor.organization}
                  </p>
                </div>
              </div>

              <div className="font-mono text-xs text-white/60 md:text-right">
                <span className="text-white/40 block md:inline md:mr-2">Commission:</span>
                <span>{honor.project}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pt-8 flex justify-between items-center border-t border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-white/50">
            Have a landmark project in mind?
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-white/20 rounded-full font-mono text-xs uppercase tracking-widest hover:border-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition-all"
          >
            <span>DISCUSS AN ENGAGEMENT</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
