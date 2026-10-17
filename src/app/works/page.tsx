"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS, Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = ["ALL", "IDENTITY", "DIGITAL", "SPATIAL", "MOTION"];

  const filtered = selectedCategory === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toUpperCase().includes(selectedCategory));

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <section className="pt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col space-y-6 border-b border-white/15 pb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            PORTFOLIO ARCHIVE / 2024 &mdash; 2026
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-light tracking-tight">
            Selected Works
          </h1>
          <p className="font-mono text-xs sm:text-sm text-white/60 max-w-2xl leading-relaxed">
            A curation of brand architectures, generative digital flagships, and spatial narratives delivered for global luxury houses and cultural pioneers.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-white text-black"
                    : "border border-white/20 text-white/60 hover:border-white hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 pt-16">
          {filtered.map((project, idx) => (
            <Link
              key={project.id}
              href={`/works/${project.slug}`}
              className="group flex flex-col space-y-5"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-neutral-950 border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover filter contrast-105 brightness-95 transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-2">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs text-white/40">0{idx + 1}</span>
                    <h2 className="text-2xl sm:text-3xl font-sans font-normal tracking-tight group-hover:underline underline-offset-4">
                      {project.title}
                    </h2>
                  </div>
                  <p className="font-mono text-xs text-white/50 mt-1">
                    {project.tagline}
                  </p>
                </div>

                <div className="font-mono text-xs text-white/40 uppercase text-right">
                  <span>{project.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
