"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";

export default function Works() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="works"
      onMouseMove={handleMouseMove}
      className="relative w-full bg-black text-white px-6 md:px-12 py-24 md:py-36 border-b border-white/10"
    >
      {/* Floating Hover Vignette */}
      {activeProject && (
        <div
          className="fixed pointer-events-none z-30 hidden md:block w-72 h-96 -ml-36 -mt-48 overflow-hidden rounded-md shadow-2xl transition-transform duration-100 ease-out border border-white/20 will-change-transform"
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          }}
        >
          <Image
            src={activeProject.image}
            alt={activeProject.title}
            fill
            className="object-cover filter contrast-110 brightness-105"
            sizes="300px"
            priority
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        {/* Section Header */}
        <div className="flex flex-col space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            SELECTED COMMISSIONS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-light tracking-tight">
            Good design informs. <br />
            <span className="text-white/40">Revolutionary design transforms.</span>
          </h2>
        </div>

        {/* Project List Table */}
        <div className="flex flex-col border-t border-white/15">
          {PROJECTS.map((project, idx) => (
            <Link
              key={project.id}
              href={`/works/${project.slug}`}
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-white/10 transition-colors duration-300 hover:border-white/40"
            >
              {/* Left Column: Number & Title */}
              <div className="flex items-baseline space-x-6 md:space-x-12">
                <span className="font-mono text-xs text-white/40 group-hover:text-white transition-colors">
                  0{idx + 1}
                </span>
                <div className="flex flex-col">
                  <h3 className="text-3xl sm:text-5xl md:text-6xl font-sans font-normal tracking-tight group-hover:translate-x-3 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-white/50 mt-2 md:hidden">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Center Column: Tagline (Desktop) */}
              <div className="hidden lg:block font-mono text-xs text-white/60 max-w-sm">
                {project.tagline}
              </div>

              {/* Right Column: Category & Arrow */}
              <div className="flex items-center space-x-6 mt-4 md:mt-0 font-mono text-xs text-white/50 group-hover:text-white transition-colors">
                <span className="hidden sm:inline">{project.category}</span>
                <span className="hidden sm:inline text-white/30">/</span>
                <span>{project.year}</span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="pt-6 flex justify-start">
          <Link
            href="/works"
            className="inline-flex items-center space-x-3 px-6 py-3 border border-white/20 rounded-full font-mono text-xs uppercase tracking-widest hover:border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>VIEW COMPLETE ARCHIVE</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
