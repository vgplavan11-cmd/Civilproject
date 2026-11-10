"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X,
  MapPin,
  Phone,
  ArrowRight
} from "lucide-react";
import { 
  InteractiveHoverLinks, 
  InteractiveLinkItem 
} from "@/components/ui/interactive-hover-links";

const CIVIL_NAV_ITEMS: InteractiveLinkItem[] = [
  {
    heading: "Home",
    subheading: "Building Spaces, Elevating Lives",
    imgSrc: "/images/nav/home.jpg",
    href: "/"
  },
  {
    heading: "Projects",
    subheading: "Turnkey 2BHK, 3BHK & Villa Models",
    imgSrc: "/images/nav/projects.jpg",
    href: "/projects"
  },
  {
    heading: "About Us",
    subheading: "Our Story & Architectural Vision",
    imgSrc: "/images/nav/about.jpg",
    href: "/about"
  },
  {
    heading: "Contact Us",
    subheading: "Madurai Office & Consultations",
    imgSrc: "/images/nav/contact.jpg",
    href: "/contact"
  },
  {
    heading: "Estimator",
    subheading: "Instant Construction Cost Calculator",
    imgSrc: "/images/nav/estimator.jpg",
    href: "/estimator"
  }
];

export default function LeftNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Sync state on navigation without cascading effect renders
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Lock body scroll and handle Escape key when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {/* 1. LEFT-SIDE FLOATING MENU BUTTON (Clean Menu trigger, separate from branding) */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
        className="fixed top-4 left-4 sm:top-5 sm:left-5 z-40 flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-neutral-950 hover:text-black transition-all duration-300 text-slate-900 font-extrabold text-xs uppercase tracking-wider group cursor-pointer active:scale-95"
        aria-label="Open Navigation Menu"
      >
        <Menu className="w-4 h-4 text-neutral-950 group-hover:rotate-180 transition-transform duration-300" />
        <span className="font-extrabold tracking-wide">Menu</span>
      </motion.button>

      {/* 2. FULL NAVIGATION DRAWER (Displays when Menu is clicked) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs cursor-pointer"
              aria-hidden="true"
            />

            {/* Sliding Drawer on the left side */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.32 }}
              className="relative z-50 w-[88vw] max-w-[360px] sm:w-[380px] xl:w-[420px] bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto p-4 sm:p-7 border-r border-slate-200"
            >
              {/* Top: Brand Header & Close Button */}
              <div className="pb-6 border-b border-slate-100 flex items-start justify-between gap-3">
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="block flex-1 min-w-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 relative bg-white rounded-xl shadow-xs border border-slate-200 p-1 shrink-0 overflow-hidden">
                      <Image
                        src="/images/elite-homes-logo.jpg"
                        alt="Elite Homes Logo"
                        fill
                        className="object-contain p-0.5"
                        priority
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-black text-lg tracking-tight text-slate-950 font-sans hover:text-black transition-colors">
                          ELITE HOMES
                        </span>
                        <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider bg-neutral-900 text-white px-1.5 py-0.5 rounded-md border border-neutral-800">
                          Madurai
                        </span>
                      </div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-0.5 truncate">
                        Building Spaces, Elevating Lives.
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-700 transition-colors cursor-pointer shrink-0"
                  aria-label="Close Navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Center: Interactive Hover Links Navigation */}
              <div className="py-6 flex-1 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4 px-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Civil Divisions &amp; Pages
                  </span>
                  <span className="text-[10px] font-semibold text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded">
                    Interactive UI
                  </span>
                </div>

                <InteractiveHoverLinks
                  links={CIVIL_NAV_ITEMS}
                  compact={true}
                  activePath={pathname}
                  onLinkClick={() => setIsOpen(false)}
                />
              </div>

              {/* Bottom: Madurai Office Contact & Quick Estimator CTA */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-neutral-950 shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      No. 42, 80 Feet Road, Anna Nagar, Madurai, Tamil Nadu - 625020
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-neutral-950 shrink-0" />
                    <a 
                      href="tel:+919842155678" 
                      className="font-bold text-slate-800 hover:text-black transition-colors"
                    >
                      +91 98421 55678
                    </a>
                  </div>
                </div>

                <Link
                  href="/estimator"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white text-xs font-bold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-black/20 active:scale-98"
                >
                  <span>Get Civil Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
