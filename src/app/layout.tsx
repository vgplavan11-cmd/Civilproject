import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Elite Homes | Building Spaces, Elevating Lives | Civil Engineering & Turnkey Constructions",
  description: "Elite Homes delivers turnkey residential house construction (2BHK, 3BHK, Luxury Villas) in Madurai with direct founder site supervision, transparent pricing, and IS 456-compliant RCC framing.",
  keywords: "Elite Homes, civil engineering, turnkey construction, 2BHK house models, 3BHK blueprints, building contractor Madurai, RCC structure, residential builders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full max-w-full bg-white text-slate-900 antialiased selection:bg-neutral-900 selection:text-white">
        {/* Floating Top Navbar inspired by Shipyon */}
        <Navbar />

        {/* Main website content taking full width */}
        <div className="min-h-screen w-full max-w-full flex flex-col min-w-0">
          <main className="flex-1 w-full max-w-full min-w-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
