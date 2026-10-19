"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use refs for continuous positions to prevent React re-renders on mousemove
  const mousePos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Check coarse pointer (touch devices) and reduced motion preference
    const isCoarse = window.matchMedia("(pointer: coarse)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (isCoarse.matches || prefersReducedMotion.matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest('[role="button"]') ||
        target?.closest("input") ||
        target?.closest("textarea") ||
        target?.closest("select") ||
        target?.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    let animFrame: number;
    const render = () => {
      // Smooth lerp for outer ring
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.18;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      animFrame = requestAnimationFrame(render);
    };

    animFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animFrame);
    };
  }, []); // Run once on mount; do not re-bind on isVisible changes

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className={`fixed left-0 top-0 -ml-4 -mt-4 rounded-full border border-white/60 transition-all duration-200 ease-out will-change-transform ${
          isHovered ? "h-14 w-14 -ml-7 -mt-7 bg-white/10 border-white scale-110" : "h-8 w-8"
        }`}
      />
      {/* Center dot */}
      <div
        ref={dotRef}
        className={`fixed left-0 top-0 -ml-1 -mt-1 rounded-full bg-white transition-opacity duration-150 will-change-transform ${
          isHovered ? "opacity-0" : "h-2 w-2 opacity-100"
        }`}
      />
    </div>
  );
}
