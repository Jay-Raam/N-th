"use client";

import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import HeroBranding from "@/components/HeroBranding";
import Showreel from "@/components/Showreel";
import Works from "@/components/Works";
import ManifestoVideo from "@/components/ManifestoVideo";
import Studio from "@/components/Studio";
import GlitchText from "@/components/GlitchText";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Intro Loader */}
      <Loader />

      {/* Floating Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* SVG Big Branding */}
      <HeroBranding />

      {/* Showreel Section */}
      <Showreel />

      {/* Works Section */}
      <Works />

      {/* Manifesto Full Video with Sound */}
      <ManifestoVideo />

      {/* Studio Section */}
      <Studio />

      {/* Glitch Typography Section */}
      <GlitchText />

      {/* Faqs Accordion */}
      <Faq />

      {/* Footer */}
      <Footer />
    </main>
  );
}
