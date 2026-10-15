"use client";

import Image from "next/image";
import Link from "next/link";

const GALLERY = [
  {
    src: "/images/studio/billboard.webp",
    alt: "Studio Architectural Installation",
    caption: "Spatial Horizon &mdash; Paris Exhibition",
    span: "col-span-12 md:col-span-8",
    height: "h-80 md:h-[480px]",
  },
  {
    src: "/images/studio/homme-ascenseur.webp",
    alt: "Creative Direction & Tailoring",
    caption: "The Metaphor of Modern Luxury",
    span: "col-span-12 md:col-span-4",
    height: "h-80 md:h-[480px]",
  },
  {
    src: "/images/studio/boule-chelou.webp",
    alt: "Sculptural Form",
    caption: "Synthetic Form Study &mdash; Kinetic Research",
    span: "col-span-12 md:col-span-4",
    height: "h-72 md:h-[380px]",
  },
  {
    src: "/images/studio/beton-plastic.webp",
    alt: "Material Contrasts",
    caption: "Tactile Experiments &mdash; Raw Concrete & Polymer",
    span: "col-span-12 md:col-span-4",
    height: "h-72 md:h-[380px]",
  },
  {
    src: "/images/studio/ballon-bureau.webp",
    alt: "Atelier Workstation",
    caption: "Creative Research &mdash; Physical Mockups",
    span: "col-span-12 md:col-span-4",
    height: "h-72 md:h-[380px]",
  },
];

export default function Studio() {
  return (
    <section id="studio" className="relative w-full bg-black text-white px-6 md:px-12 py-24 md:py-36 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-20">
        {/* Header Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50 block">
              ( 02 / THE ATELIER )
            </span>
          </div>

          <div className="md:col-span-9 flex flex-col space-y-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-light leading-snug tracking-tight">
              We believe true luxury is intentional restraint &mdash; leaving space for what truly matters to resonate.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10 font-mono text-xs text-white/60 leading-relaxed">
              <div>
                <strong className="text-white block mb-2 uppercase tracking-wider">Form follows clarity</strong>
                An augmented creative atelier operating globally. We craft identities, tactile digital interfaces, and spatial narratives for innovators who reject the generic.
              </div>
              <div>
                <strong className="text-white block mb-2 uppercase tracking-wider">Radical precision</strong>
                Every bezier curve, motion timeline, and typographic hierarchy is authored to evoke visceral reverence and effortless utility.
              </div>
            </div>

            <div>
              <Link
                href="/studio"
                className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
              >
                <span>DISCOVER OUR ETHOS &amp; PHILOSOPHY</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Studio Gallery Grid */}
        <div className="grid grid-cols-12 gap-6">
          {GALLERY.map((item, idx) => (
            <div
              key={idx}
              className={`${item.span} ${item.height} relative rounded-sm overflow-hidden bg-neutral-950 border border-white/10 group`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover filter contrast-105 brightness-95 transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end font-mono text-[11px] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span dangerouslySetInnerHTML={{ __html: item.caption }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
