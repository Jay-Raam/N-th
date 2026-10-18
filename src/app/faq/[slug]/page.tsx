import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQS, FaqItem } from "@/data/faqs";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return FAQS.map((faq) => ({
    slug: faq.slug,
  }));
}

export default function FaqDetailPage({ params }: { params: { slug: string } }) {
  const faq = FAQS.find((f) => f.slug === params.slug);

  if (!faq) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <article className="pt-36 pb-24 px-6 md:px-12 max-w-5xl mx-auto flex flex-col space-y-16">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-3 font-mono text-xs uppercase tracking-wider text-white/50">
          <Link href="/#faqs" className="hover:text-white transition-colors flex items-center space-x-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Inquiries</span>
          </Link>
          <span>/</span>
          <span className="text-white">Dossier</span>
        </div>

        {/* Title */}
        <div className="border-b border-white/15 pb-12 space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50 block">
            ATELIER INSIGHTS &mdash; DOSSIER
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-sans font-light tracking-tight leading-tight">
            {faq.question}
          </h1>
        </div>

        {/* Core Thesis */}
        <div className="space-y-8 font-sans font-light text-xl sm:text-2xl text-white/90 leading-relaxed">
          <p>{faq.answer}</p>
        </div>

        {/* Detailed Points */}
        <div className="p-8 md:p-12 rounded-sm border border-white/10 bg-neutral-950 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-white/50 block">
            Strategic Principles:
          </span>
          <ul className="space-y-4 font-mono text-xs sm:text-sm text-white/70">
            {faq.details.map((point, idx) => (
              <li key={idx} className="flex items-start space-x-4">
                <span className="text-white font-bold">0{idx + 1}.</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <Link
            href="/#faqs"
            className="font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
          >
            &larr; BACK TO ALL INQUIRIES
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center space-x-3 px-6 py-3 border border-white/20 rounded-full font-mono text-xs uppercase tracking-widest hover:border-white hover:bg-white hover:text-black transition-all"
          >
            <span>DISCUSS THIS WITH FOUNDERS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
