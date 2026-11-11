"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calculator, Home, PhoneCall, X } from "lucide-react";

export default function CivilQuickActionDock() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling down 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-6 inset-x-0 z-40 flex justify-center px-4 pointer-events-none transition-all duration-500 animate-in fade-in slide-in-from-bottom-6"
    >
      <nav
        aria-label="Floating quick navigation"
        className="pointer-events-auto bg-[#0d0d0d]/90 backdrop-blur-xl border border-neutral-800 text-white rounded-full px-3 py-2 shadow-2xl flex items-center gap-1 sm:gap-2 ring-1 ring-white/10"
      >
        {/* Estimator Action */}
        <Link
          href="/estimator"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full hover:bg-neutral-800 text-xs sm:text-sm font-bold text-white transition-all active:scale-95 group"
        >
          <div className="w-6 h-6 rounded-full bg-neutral-800 group-hover:bg-amber-400 group-hover:text-black flex items-center justify-center transition-colors">
            <Calculator className="w-3.5 h-3.5" />
          </div>
          <span className="hidden sm:inline">Pricing &amp; BOQ</span>
          <span className="sm:hidden">Pricing</span>
        </Link>

        {/* Separator */}
        <div className="w-px h-5 bg-neutral-800" />

        {/* House Models Action */}
        <Link
          href="/projects"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full hover:bg-neutral-800 text-xs sm:text-sm font-bold text-white transition-all active:scale-95 group"
        >
          <div className="w-6 h-6 rounded-full bg-neutral-800 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-colors">
            <Home className="w-3.5 h-3.5" />
          </div>
          <span>Projects</span>
        </Link>

        {/* Separator */}
        <div className="w-px h-5 bg-neutral-800" />

        {/* Contact Action */}
        <Link
          href="/contact"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white text-neutral-950 text-xs sm:text-sm font-bold hover:bg-neutral-200 transition-all active:scale-95 shadow-md"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Site Engineer</span>
          <span className="sm:hidden">Contact</span>
        </Link>

        {/* Close Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="w-7 h-7 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 flex items-center justify-center ml-1 transition-all"
          title="Dismiss dock"
          aria-label="Dismiss dock"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </nav>
    </aside>
  );
}
