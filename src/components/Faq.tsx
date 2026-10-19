"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { FAQS } from "@/data/faqs";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" aria-label="Frequently Navigated Inquiries" className="relative w-full bg-black text-white px-6 md:px-12 py-24 md:py-36 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        {/* Header Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50 block">
              ( 03 / INQUIRIES )
            </span>
          </div>

          <div className="md:col-span-9">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-light tracking-tight">
              Questions we frequently navigate
            </h2>
          </div>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-white/15">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="border-b border-white/10 transition-colors duration-300"
              >
                <button
                  type="button"
                  id={headerId}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full py-8 md:py-10 flex items-center justify-between text-left group select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <div className="flex items-baseline space-x-6 md:space-x-12 pr-4">
                    <span className="font-mono text-xs text-white/40 group-hover:text-white transition-colors">
                      0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-sans font-normal tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-white transition-all flex-shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" aria-hidden="true" /> : <Plus className="w-4 h-4" aria-hidden="true" />}
                  </div>
                </button>

                {/* Animated Accordion Drawer */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "max-h-96 opacity-100 pb-10" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-12 md:pl-20 max-w-3xl">
                    <p className="font-mono text-xs md:text-sm text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                    <Link
                      href={`/faq/${faq.slug}`}
                      className="inline-flex items-center space-x-2 mt-4 font-mono text-xs text-white/40 hover:text-white focus-visible:underline transition-colors"
                    >
                      <span>Read comprehensive dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
