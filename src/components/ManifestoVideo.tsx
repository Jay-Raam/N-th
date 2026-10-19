"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function ManifestoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      videoRef.current.play().catch(() => {});
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="manifesto-video"
      aria-label="Atelier Manifesto Film"
      className="relative w-full h-[85vh] md:h-screen bg-black overflow-hidden border-b border-white/10 select-none"
    >
      {/* Video */}
      <video
        ref={videoRef}
        src="/videos/manifeste.mp4"
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover filter contrast-110 brightness-95"
      />

      {/* Dark vignette gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />

      {/* Floating Sound Toggle Button */}
      <div className="absolute bottom-10 right-8 md:bottom-16 md:right-16 z-20">
        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={!isMuted}
          aria-label={isMuted ? "Turn audio on for manifesto film" : "Mute audio for manifesto film"}
          className="flex items-center space-x-3 px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white font-mono text-xs uppercase tracking-widest hover:border-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition-all duration-300"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-white/60" aria-hidden="true" />
              <span>SOUND OFF</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-white animate-pulse" aria-hidden="true" />
              <span className="font-bold">SOUND ON</span>
            </>
          )}
        </button>
      </div>

      {/* Corner Label */}
      <div className="absolute top-10 left-8 md:top-16 md:left-16 z-20 font-mono text-xs uppercase tracking-[0.25em] text-white/60">
        THE MANIFESTO &mdash; ATELIER PERSPECTIVE
      </div>
    </section>
  );
}
