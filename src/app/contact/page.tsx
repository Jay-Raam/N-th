"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    scope: "Brand Identity",
    timeline: "3-6 Months",
    budget: "$25k - $50k",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <section className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col space-y-20">
        {/* Header */}
        <div className="flex flex-col space-y-6 border-b border-white/15 pb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            INITIATE ENGAGEMENT / COMMISSIONS 2026
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-light tracking-tight max-w-5xl">
            Let’s start from nothing.
          </h1>
          <p className="font-mono text-xs sm:text-sm text-white/60 max-w-2xl leading-relaxed">
            We accept a limited number of commissions per quarter to ensure singular dedication to each partner. Tell us about your vision.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Direct Details */}
          <div className="lg:col-span-5 space-y-12 font-mono text-xs text-white/70">
            <div className="space-y-4">
              <span className="text-white block uppercase tracking-widest text-sm">Direct Atelier Inquiries</span>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-4 h-4 text-white/40" />
                <a href="mailto:atelier@nth-studio.com" className="hover:text-white underline underline-offset-4">
                  atelier@nth-studio.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-4 h-4 text-white/40" />
                <span>+33 1 89 48 02 99</span>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-white block uppercase tracking-widest text-sm">Studios</span>
              <div className="flex items-start space-x-3 text-white/80">
                <MapPin className="w-4 h-4 text-white/40 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-white">Paris:</strong> 14 Rue de la Paix, 75002 Paris, France<br />
                  <strong className="text-white">London:</strong> 22 Redchurch St, London E2 7DD, UK
                </div>
              </div>
            </div>

            <div className="p-6 rounded border border-white/10 bg-neutral-950 space-y-3">
              <span className="text-white block uppercase tracking-wider">Fast-Track Response</span>
              <p className="text-white/60 leading-relaxed">
                All client proposals are reviewed by founding leadership within 24 hours. Fixed-fee proposals provided within 3 business days.
              </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-12 border border-white/20 bg-neutral-950 rounded-sm flex flex-col items-center text-center space-y-6">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-sans font-light">Inquiry Dispatched</h3>
                <p className="font-mono text-xs sm:text-sm text-white/70 max-w-md leading-relaxed">
                  Thank you. Your project brief has been routed directly to our creative directors. We will respond promptly within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 border border-white/20 rounded-full font-mono text-xs uppercase tracking-wider hover:border-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/60 uppercase tracking-wider block">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-950 border border-white/20 rounded-sm px-4 py-3.5 text-white placeholder-white/20 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/60 uppercase tracking-wider block">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-950 border border-white/20 rounded-sm px-4 py-3.5 text-white placeholder-white/20 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/60 uppercase tracking-wider block">Brand / Organization</label>
                    <input
                      type="text"
                      placeholder="Maison..."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-neutral-950 border border-white/20 rounded-sm px-4 py-3.5 text-white placeholder-white/20 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/60 uppercase tracking-wider block">Primary Scope</label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full bg-neutral-950 border border-white/20 rounded-sm px-4 py-3.5 text-white focus:border-white focus:outline-none transition-colors"
                    >
                      <option value="Brand Identity">Brand Identity &amp; System</option>
                      <option value="Digital Flagship">Digital Flagship &amp; WebGL</option>
                      <option value="Unified Atelier">Unified Identity &amp; Flagship</option>
                      <option value="Spatial Direction">Spatial &amp; Generative Motion</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/60 uppercase tracking-wider block">Project Narrative &amp; Objectives *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your brand, key objectives, and any critical launch dates..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-950 border border-white/20 rounded-sm p-4 text-white placeholder-white/20 focus:border-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-semibold rounded-full uppercase tracking-widest hover:bg-neutral-200 transition-all text-xs"
                >
                  DISPATCH COMMISSION BRIEF &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
