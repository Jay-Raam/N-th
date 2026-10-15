"use client";

import { useEffect, useState } from "react";

const GLITCH_CHARS = "ABCDEFGHIJKLMOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/§èéà";

export default function GlitchText() {
  const [text, setText] = useState("THE UNCHARTED DIMENSION / BEYOND ORDINARY");

  const scramble = () => {
    const original = "THE UNCHARTED DIMENSION / BEYOND ORDINARY";
    let iterations = 0;

    const interval = setInterval(() => {
      setText(
        original
          .split("")
          .map((char, index) => {
            if (char === " " || char === "/") return char;
            if (index < iterations) {
              return original[index];
            }
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );

      if (iterations >= original.length) {
        clearInterval(interval);
      }
      iterations += 1 / 2;
    }, 25);
  };

  useEffect(() => {
    const timer = setTimeout(scramble, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      onMouseEnter={scramble}
      className="relative w-full bg-neutral-950 text-white py-20 md:py-32 px-6 md:px-12 border-b border-white/10 overflow-hidden select-none cursor-crosshair group"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-6 group-hover:text-white transition-colors">
          [ INTERACTIVE PROTOCOL / HOVER TO SCRAMBLE ]
        </span>
        <div className="font-mono text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wider text-white/80 group-hover:text-white transition-colors leading-tight">
          {text}
        </div>
        <div className="mt-8 font-mono text-xs text-white/40 tracking-widest uppercase">
          GLOBAL ATELIER &mdash; 48.8566&deg; N, 2.3522&deg; E
        </div>
      </div>
    </section>
  );
}
