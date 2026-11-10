import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { companyInfo } from "@/data/companyData";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-8 border-b border-slate-100">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left space-y-2 max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 relative bg-white rounded-lg shadow-2xs border border-slate-200 p-0.5 overflow-hidden">
                <Image
                  src="/images/elite-homes-logo.jpg"
                  alt="Elite Homes Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-black text-xl tracking-tight text-slate-950">ELITE HOMES</span>
              </div>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider font-medium">
              Building Spaces, Elevating Lives.
            </p>
          </div>

          {/* Clean Simple Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs font-semibold text-slate-700">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/projects" className="hover:text-blue-600 transition-colors">
              Projects &amp; House Models
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="/estimator" className="hover:text-blue-600 transition-colors">
              Cost Estimator
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-600">
            <a
              href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{companyInfo.contact.phone}</span>
            </a>
            <span className="hidden sm:inline-block text-slate-300">|</span>
            <a
              href={`mailto:${companyInfo.contact.email}`}
              className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>{companyInfo.contact.email}</span>
            </a>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© 2026 {companyInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-5 text-slate-500">
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-blue-600 transition-colors">
              Contract Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
