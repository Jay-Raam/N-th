# N'TH ATELIER — Haute Digital Architecture & Sensory Systems

> "Pure form, radical vision. Where the uncharted begins."

A pixel-by-pixel recreation and bespoke evolution of the award-winning creative studio website [n-th.vercel.app](https://n-th.vercel.app), authored with Next.js 14, Tailwind CSS, TypeScript, Lenis Smooth Scroll, GSAP, and self-hosted WebGL & media pipelines.

---

## Architecture & Features

- **Pixel-by-Pixel Visual Fidelity**: Precise typography metrics, asymmetric editorial layouts, and dynamic responsive grid systems.
- **100% Self-Hosted Assets**: All 7 weights of PP Neue Montreal (`Thin`, `Light`, `Book`, `Regular`, `Medium`, `SemiBold`, `Bold`), IBM Plex Mono, 4 high-definition video loops, and 24 WebP imagery files stored locally in `/public`.
- **Zero External Refer Redirects**: Complete internal routing across portfolio archives, dynamic case study dossiers (`/works/[slug]`), studio manifesto (`/studio`), accolades (`/awards`), methodology (`/method`), inquiry brief dispatch (`/contact`), and technical inquiry dossiers (`/faq/[slug]`).
- **Kinetic WebGL & Canvas**: Custom cursor displacement, ambient glow shaders, and interactive ripple canvas.
- **Inertial Smooth Scrolling**: Lenis inertial scrolling engine synchronized with GSAP ScrollTrigger.
- **Interactive Audio & Video**: Seamless video loops with persistent sound state controllers and custom media players.
- **Micro-Interactions**: Typographic character glitch scramble on hover, cursor-following project vignette previews, and smooth accordion transitions.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router, Static Generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Custom CSS Properties
- **Typography**: PP Neue Montreal (Pangram Pangram), IBM Plex Mono
- **Motion & Smooth Scroll**: GSAP, @studio-freight/lenis
- **Icons**: Lucide React

---

## Project Structure

```bash
├── public/
│   ├── fonts/           # PP Neue Montreal (7 weights) & IBM Plex Mono
│   ├── images/          # 3D floating loader items, project vignettes, studio photography
│   └── videos/          # Hero loop, showreel, and manifesto MP4s
├── src/
│   ├── app/
│   │   ├── awards/      # Accolades & honors archive
│   │   ├── contact/     # Interactive consultation brief dispatch
│   │   ├── faq/[slug]/  # Dedicated technical dossiers
│   │   ├── method/      # 4-stage proprietary atelier methodology
│   │   ├── studio/      # Atelier philosophy, pillars, and locations
│   │   ├── works/       # Portfolio archive with category filters
│   │   │   └── [slug]/  # Dynamic project case study pages
│   │   ├── globals.css  # Typography tokens, animations, custom scrollbars
│   │   ├── layout.tsx   # Root layout, cursor, smooth scroll wrapper
│   │   └── page.tsx     # Atelier flagship experience
│   ├── components/      # Modular UI components (Loader, Hero, Works, FAQ, etc.)
│   └── data/            # Static data stores for projects and FAQs
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Jay-Raam/N-th.git

# Navigate to project directory
cd N-th

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the atelier experience.

---

## License

Crafted for private atelier showcase and creative direction reference.
