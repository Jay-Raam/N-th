import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorksList from "./WorksList";

export const metadata: Metadata = {
  title: "Selected Commissions & Portfolio Archive",
  description:
    "A curation of brand architectures, generative digital flagships, and spatial narratives delivered for global luxury houses and cultural pioneers.",
  alternates: {
    canonical: "https://n-th.vercel.app/works",
  },
  openGraph: {
    title: "Selected Commissions | N'TH STUDIO",
    description: "Brand architectures and digital flagships for cultural pioneers.",
    url: "https://n-th.vercel.app/works",
  },
};

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <section className="pt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col space-y-6 border-b border-white/15 pb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            PORTFOLIO ARCHIVE / 2024 &mdash; 2026
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-light tracking-tight">
            Selected Works
          </h1>
          <p className="font-mono text-xs sm:text-sm text-white/60 max-w-2xl leading-relaxed">
            A curation of brand architectures, generative digital flagships, and spatial narratives delivered for global luxury houses and cultural pioneers.
          </p>
        </div>

        {/* Interactive Filter and Works Grid */}
        <WorksList />
      </section>

      <Footer />
    </main>
  );
}
