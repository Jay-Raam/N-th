import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://n-th.vercel.app"),
  title: {
    default: "N'TH STUDIO | Luxury Augmented Design & Digital Atelier",
    template: "%s | N'TH STUDIO",
  },
  description:
    "A visionary augmented-creative studio. Bespoke brand architectures, tactile digital flagships, and spatial narratives for luxury leaders who refuse the conventional.",
  keywords: [
    "Digital Atelier",
    "Creative Studio",
    "Luxury Branding",
    "Haute Digital Architecture",
    "WebGL Flagship",
    "Next.js Portfolio",
    "Creative Direction",
  ],
  authors: [{ name: "N'TH Studio Atelier" }],
  creator: "Jay Raam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://n-th.vercel.app",
    siteName: "N'TH STUDIO",
    title: "N'TH STUDIO | Luxury Augmented Design & Digital Atelier",
    description:
      "Bespoke identities, tactile digital architecture, and cinematic direction for luxury leaders who refuse the conventional.",
    images: [
      {
        url: "/images/studio/billboard.webp",
        width: 1200,
        height: 630,
        alt: "N'TH STUDIO Atelier Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N'TH STUDIO | Luxury Augmented Design & Digital Atelier",
    description:
      "Bespoke identities, tactile digital architecture, and cinematic direction for luxury leaders.",
    images: ["/images/studio/billboard.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/loader/asterix.webp",
    apple: "/images/loader/asterix.webp",
  },
  alternates: {
    canonical: "https://n-th.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} bg-black text-white antialiased`}>
      <body className="bg-black text-white selection:bg-white selection:text-black min-h-screen">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
