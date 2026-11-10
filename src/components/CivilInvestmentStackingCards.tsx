"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Compass, 
  HardHat, 
  Hammer, 
  Zap, 
  Droplets,
  ChevronDown
} from "lucide-react";
import StackingCards, { StackingCardItem } from "@/components/ui/stacking-cards";
import { cn } from "@/lib/utils";

interface CivilPhase {
  phase: string;
  pct: string;
  title: string;
  desc: string;
  specs: string[];
  image: string;
  badge: string;
  accentBg: string;
  borderAccent: string;
  icon: React.ElementType;
}

const CIVIL_PHASES: CivilPhase[] = [
  {
    phase: "Phase 01",
    pct: "18%",
    title: "Substructure & Foundation",
    desc: "Soil excavation, anti-termite treatment, isolated RCC footings / raft foundation, and plinth beam casting.",
    specs: [
      "Soil safe bearing capacity tested at 185 kN/m²",
      "M25 grade concrete mix with 53-grade OPC cement",
      "Chlorpyrifos anti-termite chemical soil barrier",
      "Seismic tie plinth beam casting per IS 456"
    ],
    image: "/images/nav/projects.jpg",
    badge: "IS 456 M25 Mix",
    accentBg: "bg-[#0d0d0d]",
    borderAccent: "border-neutral-800",
    icon: Compass
  },
  {
    phase: "Phase 02",
    pct: "25%",
    title: "Superstructure RCC Framing",
    desc: "Heavy column casting, beam reinforcement, shuttering, monolithic slab pour with M25/M30 grade concrete.",
    specs: [
      "Fe550D primary rebar (16mm & 12mm) ties",
      "Monolithic slab pour using needle vibrator compaction",
      "21-day continuous ponding water curing standard",
      "Laser-aligned vertical plumb line with 0mm deviation"
    ],
    image: "/images/nav/estimator.jpg",
    badge: "Fe550D TMT Ductile",
    accentBg: "bg-[#141414]",
    borderAccent: "border-neutral-800",
    icon: HardHat
  },
  {
    phase: "Phase 03",
    pct: "16%",
    title: "Masonry & Plastering",
    desc: "High-density solid blocks / wire-cut red bricks, 12mm internal cement plaster, and waterproof external plaster.",
    specs: [
      "Thermal Porotherm clay blocks / high-density solid blocks",
      "1:4 graded river sand mortar for internal wall finish",
      "Fiber chicken-mesh at all beam-brick joints",
      "Double-coat weather-resistant external plaster"
    ],
    image: "/images/nav/home.jpg",
    badge: "Thermal Insulation",
    accentBg: "bg-[#0d0d0d]",
    borderAccent: "border-neutral-800",
    icon: Hammer
  },
  {
    phase: "Phase 04",
    pct: "16%",
    title: "Flooring & Architectural Finishes",
    desc: "Vitrified double-charged tiles / imported marble, granite skirting, anti-skid bathroom tiles, and wall dado.",
    specs: [
      "800x800mm double-charged nano-polish vitrified tiles",
      "Seasoned Burma teak entrance main door & frame",
      "UPVC soundproof multi-chamber glass windows",
      "Polished jet-black granite platform with Franke sink"
    ],
    image: "/images/nav/about.jpg",
    badge: "Vitrified & Teak",
    accentBg: "bg-[#141414]",
    borderAccent: "border-neutral-800",
    icon: Layers
  },
  {
    phase: "Phase 05",
    pct: "14%",
    title: "MEP Electrical & Plumbing",
    desc: "Concealed FRLS copper wiring, CPVC/UPVC water lines tested under 10-bar hydraulic pressure, and branded sanitaryware.",
    specs: [
      "Polycab fire-resistant FRLS concealed copper wiring",
      "Ashirvad SDR-11 CPVC pipes with leak test certification",
      "10-bar hydraulic pressure testing on all pipelines",
      "Kohler / Jaquar water-saving wall-hung sanitary fittings"
    ],
    image: "/images/nav/contact.jpg",
    badge: "10-Bar Hydro Tested",
    accentBg: "bg-[#0d0d0d]",
    borderAccent: "border-neutral-800",
    icon: Zap
  },
  {
    phase: "Phase 06",
    pct: "11%",
    title: "Waterproofing & Facade Painting",
    desc: "3-layer terrace and toilet slab waterproofing, weather-coat silicone exterior paint, and turnkey handover clean.",
    specs: [
      "3-layer elastomeric waterproofing on terrace & sunken slabs",
      "Asian Paints Apex Ultima exterior weather shield",
      "Deep industrial post-construction handover cleaning",
      "Full As-Built CAD dossier & 10-year warranty handbook"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badge: "10-Yr Bonded Guarantee",
    accentBg: "bg-[#141414]",
    borderAccent: "border-neutral-800",
    icon: Droplets
  }
];

export default function CivilInvestmentStackingCards() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToPhase = (index: number) => {
    const el = cardRefs.current[index];
    if (el) {
      const navOffset = 86 + index * 12;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full">
      {/* Quick Phase Selection Pills - Horizontally scrollable on mobile */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1 sm:flex-wrap sm:justify-center mb-6 sm:mb-8">
        {CIVIL_PHASES.map((p, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollToPhase(idx)}
            className="shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:border-neutral-950 hover:text-black hover:bg-neutral-100 transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-neutral-950" />
            <span>{p.phase}</span>
            <span className="font-bold text-neutral-900 bg-neutral-100 px-1.5 py-0.2 rounded-sm border border-neutral-300">
              {p.pct}
            </span>
          </button>
        ))}
      </div>

      {/* Main Stacking Cards Viewport (Window/Page Scroll Driven) */}
      <div className="w-full relative">
        <StackingCards
          totalCards={CIVIL_PHASES.length}
          scaleMultiplier={0.025}
          className="w-full relative"
        >
          {/* Scroll Down Prompt Header */}
          <div className="w-full flex flex-col items-center justify-center text-center select-none text-slate-500 mb-6 sm:mb-10 px-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 tracking-wider mb-1">
              <span>Scroll down webpage to stack civil phases</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce text-neutral-950" />
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-500">
              Each stage stacks chronologically with live budget percentages &amp; civil execution specs
            </p>
          </div>

          {/* Cards List */}
          {CIVIL_PHASES.map((phaseItem, index) => {
            const IconComponent = phaseItem.icon;
            return (
              <StackingCardItem
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                index={index}
                className="mb-16 sm:mb-24 md:mb-32 last:mb-12"
                topPosition={`calc(86px + ${index * 12}px)`}
              >
                <div
                  className={cn(
                    phaseItem.accentBg,
                    phaseItem.borderAccent,
                    "w-full max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border p-4 sm:p-7 md:p-10 shadow-2xl flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center text-white relative overflow-hidden"
                  )}
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-neutral-700/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Left Column: Phase Details */}
                  <div className="flex-1 space-y-3 sm:space-y-4 z-10 w-full">
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-3">
                      <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold tracking-wider uppercase text-neutral-300 bg-neutral-800/80 border border-neutral-700 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                        <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {phaseItem.phase}
                      </span>
                      <span className="text-xs sm:text-sm font-black text-neutral-950 bg-white px-2.5 sm:px-3 py-0.5 rounded-full shadow-sm">
                        {phaseItem.pct} of Budget
                      </span>
                      <span className="text-[10px] sm:text-xs font-medium text-slate-300 bg-neutral-900/90 px-2 py-0.5 rounded-md border border-neutral-700">
                        {phaseItem.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                      {phaseItem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                      {phaseItem.desc}
                    </p>

                    {/* Specifications List */}
                    <div className="pt-2 border-t border-slate-800/90 space-y-1.5 sm:space-y-2">
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                        Civil Execution &amp; Quality Standards:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-200">
                        {phaseItem.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5 sm:gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-neutral-300 shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Visual Image Card */}
                  <div className="w-full md:w-80 lg:w-96 shrink-0 aspect-[16/9] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden relative border border-slate-700/80 shadow-lg z-10">
                    <Image
                      src={phaseItem.image}
                      alt={phaseItem.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between text-[11px] sm:text-xs text-white font-medium bg-slate-950/70 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-slate-700/60">
                      <span className="truncate pr-2">{phaseItem.title}</span>
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-300 shrink-0" />
                    </div>
                  </div>
                </div>
              </StackingCardItem>
            );
          })}

          {/* Bottom Completed Bar */}
          <div className="w-full pt-8 pb-12 flex flex-col items-center justify-center text-center text-slate-600">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-xs">
              <span className="w-2 h-2 rounded-full bg-neutral-950" />
              <span>All 6 Civil Construction Phases Completed &bull; 100% Transparent BOQ</span>
            </div>
          </div>
        </StackingCards>
      </div>
    </div>
  );
}

