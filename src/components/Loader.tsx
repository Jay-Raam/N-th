"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LOADER_ITEMS = [
  { src: "/images/loader/coeur-bulle-nb.webp", alt: "Coeur", top: "15%", left: "12%", size: "w-28 md:w-44" },
  { src: "/images/loader/papier-froisse.webp", alt: "Papier", top: "25%", left: "75%", size: "w-32 md:w-52" },
  { src: "/images/loader/asterix.webp", alt: "Asterix", top: "70%", left: "18%", size: "w-24 md:w-36" },
  { src: "/images/loader/smiley.webp", alt: "Smiley", top: "65%", left: "80%", size: "w-20 md:w-32" },
  { src: "/images/loader/bonbon.webp", alt: "Bonbon", top: "10%", left: "55%", size: "w-32 md:w-48" },
  { src: "/images/loader/chwing.webp", alt: "Chewing Gum", top: "45%", left: "8%", size: "w-28 md:w-40" },
  { src: "/images/loader/sac-plastic.webp", alt: "Sac", top: "78%", left: "45%", size: "w-24 md:w-36" },
  { src: "/images/loader/chien.webp", alt: "Chien", top: "35%", left: "68%", size: "w-28 md:w-44" },
  { src: "/images/loader/piniata.webp", alt: "Pinata", top: "52%", left: "78%", size: "w-24 md:w-40" },
  { src: "/images/loader/cube.webp", alt: "Cube", top: "82%", left: "72%", size: "w-24 md:w-36" },
  { src: "/images/loader/bouee.webp", alt: "Bouee", top: "18%", left: "32%", size: "w-28 md:w-44" },
];

export default function Loader({ onFinish }: { onFinish?: () => void }) {
  const [count, setCount] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const duration = 1800;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(1, currentStep / steps);
      const eased = Math.round(100 * (1 - Math.pow(1 - progress, 3)));
      setCount(eased);

      const itemsToReveal = Math.floor(progress * LOADER_ITEMS.length);
      setVisibleItems((prev) => {
        if (prev.length >= itemsToReveal) return prev;
        const newArr = [...prev];
        while (newArr.length < itemsToReveal) {
          const randomIndex = Math.floor(Math.random() * LOADER_ITEMS.length);
          if (!newArr.includes(randomIndex)) {
            newArr.push(randomIndex);
          }
        }
        return newArr;
      });

      if (progress >= 1) {
        clearInterval(timer);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsRemoved(true);
            if (onFinish) onFinish();
          }, 800);
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinish]);

  if (isRemoved) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Floating Collage Items */}
      {LOADER_ITEMS.map((item, idx) => {
        const isShown = visibleItems.includes(idx);
        return (
          <div
            key={idx}
            className={`absolute pointer-events-none transition-all duration-500 ease-out transform ${
              isShown ? "opacity-90 scale-100 translate-y-0 rotate-0" : "opacity-0 scale-50 translate-y-8 rotate-6"
            } ${item.size}`}
            style={{
              top: item.top,
              left: item.left,
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={300}
              height={300}
              className="w-full h-auto object-contain filter drop-shadow-2xl"
              priority
            />
          </div>
        );
      })}

      {/* Center Counter */}
      <div className="relative z-10 flex flex-col items-center">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
          N&apos;TH ATELIER &mdash; 2026
        </span>
        <div className="font-mono text-6xl md:text-8xl font-bold tracking-tighter text-white tabular-nums">
          {count.toString().padStart(3, "0")}
        </div>
      </div>
    </div>
  );
}
