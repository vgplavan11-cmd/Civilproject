import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/data/companyData";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-neutral-800 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-neutral-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-14 sm:pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-neutral-800">
          
          {/* Column 1: Brand & Narrative (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-14 h-14 relative bg-white rounded-2xl shadow-lg border border-neutral-700/80 p-1 shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                <Image
                  src="/images/elite-homes-logo.jpg"
                  alt="Elite Homes Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl sm:text-3xl tracking-tight text-white font-sans group-hover:text-neutral-200 transition-colors">
                  ELITE HOMES
                </span>
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold -mt-0.5">
                  Building Spaces, Elevating Lives.
                </span>
              </div>
            </Link>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
              Engineering-first turnkey civil construction. Delivering residential house models (2BHK, 3BHK, Custom Luxury Villas) with direct founder site supervision, transparent BOQs, and IS 456-compliant RCC framing.
            </p>

            <div className="space-y-1.5 pt-1 text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-neutral-500">MSME Reg:</span>
                <span className="text-neutral-200 font-semibold">{companyInfo.licenseNo}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neutral-500">BIS Compliance:</span>
                <span className="text-neutral-200 font-semibold">IS 456:2000 &bull; IS 1893 &bull; IS 516</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-white pb-2.5 border-b border-neutral-800">
              Civil Navigation
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200 inline-block">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors duration-200 inline-block">
                  House Models &amp; Projects
                </Link>
              </li>
              <li>
                <Link href="/estimator" className="hover:text-white transition-colors duration-200 inline-block">
                  Pricing &amp; BOQ Estimator
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200 inline-block">
                  About Our Civil Firm
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200 inline-block">
                  Contact &amp; Site Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Construction Disciplines (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-white pb-2.5 border-b border-neutral-800">
              Turnkey Execution
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>2BHK &amp; 3BHK Turnkey Models</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>Custom Luxury Villa Construction</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>Fe550D Seismic RCC Framing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>In-House Concrete Cube Testing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>Soil SBC Survey &amp; Sanction Plans</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Madurai Headquarters (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-white pb-2.5 border-b border-neutral-800">
              Madurai Civil Desk
            </h4>
            <div className="space-y-3.5 text-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-neutral-300">
                  No. 42, 80 Feet Road, Anna Nagar, Madurai, Tamil Nadu - 625020
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neutral-400 shrink-0" />
                <a 
                  href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, "")}`} 
                  className="font-bold text-white hover:text-neutral-300 transition-colors text-base"
                >
                  {companyInfo.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-neutral-400 shrink-0" />
                <a 
                  href={`mailto:${companyInfo.contact.email}`} 
                  className="font-medium text-white hover:text-neutral-300 transition-colors"
                >
                  {companyInfo.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/estimator"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-200 text-neutral-950 font-bold text-sm px-5 py-3 rounded-xl transition-all shadow-md active:scale-95"
              >
                <span>Calculate Your Site BOQ</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-sm text-neutral-400">
          <p>© 2026 {companyInfo.name}. All rights reserved. Madurai, Tamil Nadu.</p>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-700">&bull;</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Civil Contract Terms
            </Link>
            <span className="text-neutral-700">&bull;</span>
            <span className="text-neutral-400">10-Year Structural Integrity Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
