"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Calculator, 
  Phone, 
  ArrowRight
} from "lucide-react";
import { companyInfo } from "@/data/companyData";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Projects & Models", href: "/projects" },
  { name: "Civil Estimator", href: "/estimator" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu on page navigation without cascading effect renders
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileOpen(false);
  }

  // Scroll detection for subtle shadow deepening
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto relative pointer-events-auto">
        {/* Floating Navbar Pill */}
        <div
          className={`bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 ${
            isScrolled 
              ? "shadow-xl border-slate-300/90 bg-white" 
              : "shadow-md hover:shadow-lg"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* 1. Left: Brand Logo & Identity */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group shrink-0"
              onClick={() => setIsMobileOpen(false)}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 relative bg-white rounded-xl shadow-xs border border-slate-200/90 p-1 shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                <Image
                  src="/images/elite-homes-logo.jpg"
                  alt="Elite Homes Logo"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-black text-lg sm:text-xl tracking-tight text-slate-950 font-sans group-hover:text-black transition-colors">
                    ELITE HOMES
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-wider bg-neutral-900 text-white px-1.5 py-0.5 rounded-md border border-neutral-800 shadow-2xs">
                    Madurai
                  </span>
                </div>
                <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider text-slate-500 font-semibold -mt-0.5">
                  Building Spaces, Elevating Lives.
                </span>
              </div>
            </Link>

            {/* 2. Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = 
                  link.href === "/" 
                    ? pathname === "/" 
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "text-white bg-neutral-950 shadow-xs"
                        : "text-slate-700 hover:text-black hover:bg-neutral-100"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-white rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* 3. Right: Primary CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/estimator"
                className="hidden sm:inline-flex items-center gap-2 bg-neutral-950 hover:bg-black text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-black/25 active:scale-95 transition-all shrink-0"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Civil Estimator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                aria-label={isMobileOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              >
                {isMobileOpen ? (
                  <X className="w-5 h-5 text-slate-900" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-900" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Card */}
        {isMobileOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl border border-slate-200/90 shadow-2xl p-4 sm:p-5 flex flex-col gap-1.5 animate-fadeIn">
            {NAV_LINKS.map((link) => {
              const isActive = 
                link.href === "/" 
                  ? pathname === "/" 
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? "bg-neutral-900 text-white"
                      : "text-slate-700 hover:bg-neutral-100 hover:text-black"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100 space-y-2.5">
              <Link
                href="/estimator"
                onClick={() => setIsMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md shadow-black/25 active:scale-95 transition-all"
              >
                <Calculator className="w-4 h-4" />
                <span>Launch Civil Cost Estimator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold py-2.5 px-4 rounded-xl border border-slate-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-900" />
                <span>Direct Site Helpline: {companyInfo.contact.phone}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
