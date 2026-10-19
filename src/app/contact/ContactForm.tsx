"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function ContactForm() {
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

  if (submitted) {
    return (
      <div className="p-12 border border-white/20 bg-neutral-950 rounded-sm flex flex-col items-center text-center space-y-6" role="status" aria-live="polite">
        <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center">
          <Check className="w-8 h-8" aria-hidden="true" />
        </div>
        <h3 className="text-3xl font-sans font-light">Inquiry Dispatched</h3>
        <p className="font-mono text-xs sm:text-sm text-white/70 max-w-md leading-relaxed">
          Thank you. Your project brief has been routed directly to our creative directors. We will respond promptly within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 px-6 py-2.5 border border-white/20 rounded-full font-mono text-xs uppercase tracking-wider hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form id="inquiry" onSubmit={handleSubmit} className="space-y-8 font-mono text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name-input" className="text-white/60 uppercase tracking-wider block">Your Name *</label>
          <input
            id="name-input"
            type="text"
            required
            placeholder="Jane Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-neutral-950 border border-white/20 rounded-sm px-4 py-3.5 text-white placeholder-white/20 focus:border-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email-input" className="text-white/60 uppercase tracking-wider block">Email Address *</label>
          <input
            id="email-input"
            type="email"
            required
            placeholder="jane@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-neutral-950 border border-white/20 rounded-sm px-4 py-3.5 text-white placeholder-white/20 focus:border-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="company-input" className="text-white/60 uppercase tracking-wider block">Brand / Organization</label>
          <input
            id="company-input"
            type="text"
            placeholder="Maison..."
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full bg-neutral-950 border border-white/20 rounded-sm px-4 py-3.5 text-white placeholder-white/20 focus:border-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="scope-select" className="text-white/60 uppercase tracking-wider block">Primary Scope</label>
          <select
            id="scope-select"
            value={formData.scope}
            onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
            className="w-full bg-neutral-950 border border-white/20 rounded-sm px-4 py-3.5 text-white focus:border-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white transition-colors"
          >
            <option value="Brand Identity">Brand Identity &amp; System</option>
            <option value="Digital Flagship">Digital Flagship &amp; WebGL</option>
            <option value="Unified Atelier">Unified Identity &amp; Flagship</option>
            <option value="Spatial Direction">Spatial &amp; Generative Motion</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message-input" className="text-white/60 uppercase tracking-wider block">Project Narrative &amp; Objectives *</label>
        <textarea
          id="message-input"
          rows={5}
          required
          placeholder="Describe your brand, key objectives, and any critical launch dates..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-neutral-950 border border-white/20 rounded-sm p-4 text-white placeholder-white/20 focus:border-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-white text-black font-semibold rounded-full uppercase tracking-widest hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition-all text-xs"
      >
        DISPATCH COMMISSION BRIEF &rarr;
      </button>
    </form>
  );
}
