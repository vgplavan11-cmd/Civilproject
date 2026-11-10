import type { Metadata, Viewport } from "next";
import "./globals.css";
import LeftNavigation from "@/components/LeftNavigation";
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
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {/* Floating Menu on left side; expands full navigation drawer when clicked */}
        <LeftNavigation />

        {/* Main website content taking full width */}
        <div className="min-h-screen flex flex-col min-w-0">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
