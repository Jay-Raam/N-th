import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "N'TH STUDIO | Luxury Augmented Design & Digital Atelier",
  description:
    "A visionary augmented-creative studio. Bespoke identities, tactile digital architecture, and cinematic direction for luxury leaders who refuse the conventional.",
  icons: {
    icon: "/images/loader/asterix.webp",
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
