"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <section aria-label="Atelier Showreel" className="relative w-full bg-black text-white px-6 md:px-12 py-24 md:py-36 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        {/* Section Headline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50 block mb-6">
              ( 01 / THE CONVICTION )
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-light leading-tight tracking-tight">
              Most agencies produce noise. <br />
              <span className="text-white/40">We author culture.</span>
            </h2>
          </div>

          <div className="md:col-span-4 font-mono text-xs text-white/60 leading-relaxed md:pt-12">
            In an era saturated by disposable media and automated templates, our mission is to construct enduring distinction. We engineer brand systems, high-craft web environments, and spatial storytelling that command reverence.
          </div>
        </div>

        {/* Video Player Container - Semantic Accessible Button */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause atelier showreel" : "Play atelier showreel"}
          className="relative w-full aspect-[16/9] rounded-sm overflow-hidden bg-neutral-950 cursor-pointer group border border-white/10 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <video
            ref={videoRef}
            src="/videos/showreel.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover filter contrast-105 brightness-95"
          />

          {/* Video Control Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transform group-hover:scale-110 group-focus-visible:scale-110 transition-transform duration-300">
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </div>
          </div>

          {/* Bottom badge */}
          <div className="absolute bottom-4 left-6 font-mono text-[11px] uppercase tracking-wider text-white/75 bg-black/60 backdrop-blur-md px-3 py-1 rounded">
            ATELIER REEL &mdash; 2026 ARCHIVE
          </div>
        </button>
      </div>
    </section>
  );
}
