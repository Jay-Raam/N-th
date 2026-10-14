"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse trail for interactive canvas mask
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const ripples: Array<{ x: number; y: number; r: number; opacity: number }> = [];

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;

      if (Math.random() > 0.4) {
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          r: 10,
          opacity: 0.35,
        });
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient glow following cursor
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        width * 0.4
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.08)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.02)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render expanding ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += 2.5;
        rp.opacity *= 0.96;

        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${rp.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (rp.opacity < 0.01) {
          ripples.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-black text-white px-6 md:px-12 pt-28 pb-10">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-45">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter contrast-125 brightness-90"
          src="/videos/hero-bg.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      {/* Interactive Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none w-full h-full mix-blend-screen"
      />

      {/* Top Tagline */}
      <div className="relative z-20 flex flex-col items-start max-w-4xl mt-12 md:mt-16">
        <span className="font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-white/50 mb-6">
          Augmented Creative Atelier
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-sans font-normal leading-[0.98] tracking-tight">
          Pure form, radical vision. <br />
          <span className="text-white/60 font-light">Where the uncharted begins.</span>
        </h1>
      </div>

      {/* Center CTA Button - Local Route */}
      <div className="relative z-20 my-12 flex items-center">
        <Link
          href="/contact"
          className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-white text-black rounded-full font-mono text-xs uppercase tracking-widest font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]"
        >
          <span className="relative z-10">BOOK A CONSULTATION</span>
          <span className="relative z-10 text-base transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </Link>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-20 w-full pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-white/60">
        <div>
          Independent Creative Practice &mdash; Global Edition
        </div>
        <div className="flex items-center space-x-6">
          <Link
            href="/works"
            className="hover:text-white transition-colors"
          >
            DISCOVER PORTFOLIO
          </Link>
          <span>/</span>
          <Link
            href="/studio"
            className="hover:text-white transition-colors"
          >
            ATELIER ETHOS
          </Link>
          <span>EN</span>
        </div>
      </div>
    </section>
  );
}
