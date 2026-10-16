export interface FaqItem {
  id: string;
  slug: string;
  question: string;
  answer: string;
  details: string[];
}

export const FAQS: FaqItem[] = [
  {
    id: "luxury-website",
    slug: "luxury-website",
    question: "What makes a luxury digital experience succeed?",
    answer:
      "A true luxury website succeeds when every single micro-interaction is decided, never decorated. Fewer components, each rigorously deliberate. The digital flagship is never a passive catalogue; it is an active statement of brand sovereignty held in fluid motion.",
    details: [
      "Subtle inertial scrolling and responsive physics that feel weightless.",
      "Custom generative shaders and typographic layouts authored specifically for the brand.",
      "Zero generic framework tropes; complete fidelity from wireframe to deployment.",
    ],
  },
  {
    id: "brand-identity-timeline",
    slug: "brand-identity-timeline",
    question: "What is your typical engagement timeline?",
    answer:
      "A focused identity system takes eight to twelve weeks. A unified brand identity and custom digital atelier together typically span under four to six months. Momentum is defined by clarity of decisive feedback, not file iteration counts.",
    details: [
      "Phase 01: Deep strategic thesis and aesthetic positioning (Weeks 1-3).",
      "Phase 02: Typography, visual system, and spatial motion exploration (Weeks 4-7).",
      "Phase 03: Interactive production, WebGL/frontend engineering, and launch (Weeks 8-16).",
    ],
  },
  {
    id: "branding-studio-or-advertising-agency",
    slug: "branding-studio-or-advertising-agency",
    question: "How does an atelier differ from a conventional ad agency?",
    answer:
      "Advertising agencies focus on ephemeral campaigns designed to generate temporary impressions. An atelier crafts foundational truth: defining what the brand represents across every physical and digital surface before any campaign is ever conceived.",
    details: [
      "Bespoke, partner-led senior involvement on every brief without account layers.",
      "Fixed scopes with guaranteed creative leadership from day one.",
      "Enduring assets designed to remain relevant for a decade.",
    ],
  },
  {
    id: "how-much-does-a-brand-identity-cost",
    slug: "how-much-does-a-brand-identity-cost",
    question: "How are your creative commissions structured and priced?",
    answer:
      "We operate strictly on transparent fixed-fee engagements tailored to project scope and international market breadth. We never bill on ambiguous hourly rates. Clients know exact deliverables, timelines, and budgets prior to project kickoff.",
    details: [
      "Comprehensive Identity Engagements start from fixed tiers based on market reach.",
      "Flagship Digital Architecture and interactive engineering bundled seamlessly.",
      "No hidden surcharges or surprise licensing fees.",
    ],
  },
];
