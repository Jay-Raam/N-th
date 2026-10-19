import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Initiate Engagement & Private Commissions",
  description:
    "We accept a limited number of commissions per quarter to ensure singular dedication to each partner. Dispatch your project brief directly to our founders.",
  alternates: {
    canonical: "https://n-th.vercel.app/contact",
  },
  openGraph: {
    title: "Initiate Engagement | N'TH STUDIO",
    description: "Dispatch your project brief directly to the atelier.",
    url: "https://n-th.vercel.app/contact",
  },
};

export default function ContactPage() {
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
                <a href="mailto:atelier@nth-studio.com" className="hover:text-white underline underline-offset-4 focus-visible:underline">
                  atelier@nth-studio.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-4 h-4 text-white/40" />
                <a href="tel:+33189480299" className="hover:text-white underline underline-offset-4 focus-visible:underline">
                  +33 1 89 48 02 99
                </a>
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

          {/* Inquiry Form Client Component */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
