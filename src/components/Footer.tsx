import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { companyInfo } from "@/data/companyData";

export default function Footer() {
  return (
    <footer className="bg-[#020b18] text-white border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/90">
          
          {/* Column 1: Brand & Narrative */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-11 h-11 relative bg-white rounded-xl shadow-md border border-slate-200/90 p-1 shrink-0 overflow-hidden">
                <Image
                  src="/images/elite-homes-logo.jpg"
                  alt="Elite Homes Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-black text-xl tracking-tight text-white font-sans">
                  ELITE HOMES
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-blue-400">
                  Madurai, Tamil Nadu
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              Engineering-first turnkey civil construction. Delivering residential house models (2BHK, 3BHK, Custom Luxury Villas) with direct founder site supervision, transparent BOQs, and IS 456-compliant RCC framing.
            </p>

            <div className="pt-2 text-xs text-slate-400 font-mono">
              <span>MSME Reg: </span>
              <span className="text-blue-400 font-bold">{companyInfo.licenseNo}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300 pb-1 border-b border-slate-800">
              Civil Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-400 transition-colors">
                  House Models &amp; Architectural Plans
                </Link>
              </li>
              <li>
                <Link href="/estimator" className="hover:text-blue-400 transition-colors">
                  Turnkey Civil Cost Estimator
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Our Civil Firm
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Schedule Free Site Survey
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Madurai Office */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300 pb-1 border-b border-slate-800">
              Madurai Civil Desk
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  No. 42, 80 Feet Road, Anna Nagar, Madurai, Tamil Nadu - 625020
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a 
                  href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, "")}`} 
                  className="font-bold text-white hover:text-blue-400 transition-colors"
                >
                  {companyInfo.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a 
                  href={`mailto:${companyInfo.contact.email}`} 
                  className="font-bold text-white hover:text-blue-400 transition-colors"
                >
                  {companyInfo.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-sm"
              >
                <span>Calculate Your Site BOQ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {companyInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">
              Civil Contract Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
