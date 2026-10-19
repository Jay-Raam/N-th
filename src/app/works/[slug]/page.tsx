import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.category}`,
    description: project.description,
    alternates: {
      canonical: `https://n-th.vercel.app/works/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | N'TH STUDIO`,
      description: project.description,
      url: `https://n-th.vercel.app/works/${project.slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <article className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col space-y-20">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-3 font-mono text-xs uppercase tracking-wider text-white/50">
          <Link href="/works" className="hover:text-white transition-colors flex items-center space-x-1 focus-visible:underline">
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Archive</span>
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-white" aria-current="page">{project.title}</span>
        </nav>

        {/* Project Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-white/15 pb-16">
          <div className="md:col-span-8 flex flex-col space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
              {project.category} &mdash; {project.year}
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-light tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 font-sans font-light leading-snug pt-4">
              {project.tagline}
            </p>
          </div>

          <div className="md:col-span-4 font-mono text-xs text-white/60 space-y-6 md:pt-12">
            <div>
              <span className="text-white/40 block mb-1">CLIENT</span>
              <span className="text-white text-sm">{project.client}</span>
            </div>
            <div>
              <span className="text-white/40 block mb-1">DISCIPLINES</span>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.services.map((s, i) => (
                  <span key={i} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden bg-neutral-950 border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover filter contrast-105 brightness-95"
            priority
            sizes="100vw"
          />
        </div>

        {/* Case Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-12 border-b border-white/15">
          <div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-white/50">
            [ 01 / THE CONTEXT ]
          </div>
          <div className="md:col-span-8 space-y-8 font-sans font-light text-lg sm:text-xl text-white/80 leading-relaxed">
            <p>{project.description}</p>
            <p className="text-white/60 text-base font-mono leading-relaxed">
              Every deliverable was authored with mathematical restraint. Through custom shaders and bespoke kinetic type systems, we transformed the client&apos;s digital touchpoints into an unforgettable immersive environment.
            </p>
          </div>
        </div>

        {/* Next Project Footer Link */}
        <div className="pt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <Link
            href="/works"
            className="font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white focus-visible:underline transition-colors"
          >
            &larr; BACK TO ALL COMMISSIONS
          </Link>

          <Link
            href={`/works/${nextProject.slug}`}
            className="group flex items-center space-x-4 border border-white/20 px-6 py-4 rounded-full hover:border-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition-all duration-300"
          >
            <span className="font-mono text-xs uppercase tracking-widest">
              NEXT PROJECT: {nextProject.title}
            </span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
