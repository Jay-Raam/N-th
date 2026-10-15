export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  image: string;
  year: string;
  client: string;
  description: string;
  services: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "utopia",
    slug: "utopia",
    title: "Utopia",
    tagline: "Where taste meets architectural meaning.",
    category: "Identity / Digital Atelier",
    image: "/images/works/utopia.webp",
    year: "2026",
    client: "Maison Utopia",
    description:
      "A complete brand rebirth for a contemporary haute-parfumerie house. We designed a holistic visual language spanning bespoke generative typography, tactile packaging, and an immersive digital flagship.",
    services: ["Brand Strategy", "Creative Direction", "3D WebGL Flagship", "Typography Design"],
  },
  {
    id: "aurbse",
    slug: "aurbse",
    title: "Aurbse",
    tagline: "A living sensory instrument for spatial perception.",
    category: "Spatial Platform / AI",
    image: "/images/works/aurbse.webp",
    year: "2025",
    client: "Aurbse Technologies",
    description:
      "Bridging computational geography and architectural sensory design. We constructed an interactive cartographic interface that translates acoustic landscapes into fluid visual topologies.",
    services: ["Interactive Architecture", "Data Aesthetics", "Design System", "Motion Studies"],
  },
  {
    id: "in-cognita",
    slug: "in-cognita",
    title: "In_Cognita",
    tagline: "Seizing the unexpected: the invisible, made tangible.",
    category: "Art Direction / Generative 3D",
    image: "/images/works/in-cognita.webp",
    year: "2025",
    client: "In_Cognita Art Foundation",
    description:
      "An experimental exhibition catalog and digital archive documenting generative synthetic sculptures. Every interaction mimics fluid organic tension and hyper-real light diffraction.",
    services: ["Art Direction", "Generative 3D Shaders", "Digital Archive", "Sound Design"],
  },
  {
    id: "lgm",
    slug: "lgm",
    title: "Lgm",
    tagline: "Swiss engineering rigor meets French haute couture.",
    category: "Brand Re-Architecture",
    image: "/images/works/lgm.webp",
    year: "2025",
    client: "LGM Precision",
    description:
      "Redefining a legacy high-precision engineering firm for global luxury watchmakers and aerospace leaders. Delivered full brand strategy and an interactive catalog in under four months.",
    services: ["Corporate Rebrand", "Interactive Catalog", "Editorial Strategy", "Global Guidelines"],
  },
  {
    id: "haptify",
    slug: "haptify",
    title: "Haptify",
    tagline: "Branding the tactile vocabulary of tomorrow.",
    category: "Sensory Identity / Motion",
    image: "/images/works/haptify.webp",
    year: "2024",
    client: "Haptify Labs",
    description:
      "A radical identity system exploring the lost language of physical touch in high technology. Incorporating variable kinetic logotypes and pressure-sensitive digital interfaces.",
    services: ["Kinetic Identity", "Sensory Interface Design", "Motion Guidelines", "Audio Branding"],
  },
];
