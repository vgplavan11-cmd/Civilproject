"use client";

import React, { useState } from "react";
import { ShieldCheck, Award, Ruler, CheckCircle2, ChevronRight, HardHat, Truck } from "lucide-react";

interface StripItem {
  id: string;
  num: string;
  tag: string;
  title: string;
  stat: string;
  statLabel: string;
  desc: string;
  specs: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const CIVIL_STRIP_ITEMS: StripItem[] = [
  {
    id: "rcc-framing",
    num: "01",
    tag: "IS 456:2000 Protocol",
    title: "Monolithic RCC Framing",
    stat: "0mm",
    statLabel: "Plumb Deviation Limit",
    desc: "Primary Fe550D ductile seismic reinforcement engineered to withstand seismic shear tremors without brittle failure.",
    specs: ["Ductile rebar detailing per IS 13920", "Heavy-gauge stirrups at high-shear nodes", "Laser-aligned vertical column plumb"],
    icon: ShieldCheck,
  },
  {
    id: "cube-testing",
    num: "02",
    tag: "IS 516 Lab Verified",
    title: "100% In-House Lab Testing",
    stat: "25 N/mm²",
    statLabel: "Compressive Mix Strength",
    desc: "150mm concrete cubes crushed at 7-day (67%) and 28-day (100%) target strength before formwork stripping.",
    specs: ["Digital compressive test verification", "Direct batch slump cone checks", "Certified 53-Grade OPC cement only"],
    icon: Award,
  },
  {
    id: "soil-warranty",
    num: "03",
    tag: "Zero Settle Foundation",
    title: "10-Year Structural Warranty",
    stat: "185 kN/m²",
    statLabel: "Safe Soil Bearing Capacity",
    desc: "Isolated footings & raft foundations engineered strictly according to certified geotechnical soil report results.",
    specs: ["Raft footings on solid rock stratum", "Anti-termite chlorpyrifos chemical barrier", "Substructure damp-proof course (DPC)"],
    icon: Ruler,
  },
  {
    id: "transparent-boq",
    num: "04",
    tag: "Milestone Escrow",
    title: "100% Transparent BOQ Releases",
    stat: "0 Hidden",
    statLabel: "Escalation Cost Guarantee",
    desc: "Clients pay strictly after site milestone inspection and structural engineer verification. Zero surprise billing.",
    specs: ["Itemized Bill of Quantities (BOQ)", "Weekly photographic progress reports", "Direct founder site supervision"],
    icon: CheckCircle2,
  },
];

export default function CivilInteractiveStrip() {
  const [activeId, setActiveId] = useState<string>("rcc-framing");

  return (
    <section className="py-20 bg-[#0d0d0d] text-white border-b border-neutral-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neutral-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neutral-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700/80 mb-4 shadow-inner">
            <HardHat className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300">
              Why Choose Elite Homes • Civil Rigor
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug">
            Engineering Standards That Protect Your Generation.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3.5 leading-relaxed">
            Hover or tap across our civil execution pillars. Each stage is mathematically inspected and audited according to Bureau of Indian Standards (BIS).
          </p>
        </div>

        {/* Interactive Expandable Strip (Shipyon WCU Pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 lg:gap-3 transition-all duration-500 ease-out">
          {CIVIL_STRIP_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-500 relative overflow-hidden flex flex-col justify-between p-6 sm:p-7 select-none ${
                  isActive
                    ? "lg:flex-[1.65] bg-gradient-to-b from-[#181818] via-[#121212] to-[#0d0d0d] border-neutral-600 shadow-2xl shadow-black/80 -translate-y-1"
                    : "lg:flex-1 bg-[#141414]/90 hover:bg-[#181818] border-neutral-800/80 hover:border-neutral-700"
                }`}
              >
                {/* Active Indicator Top Light Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-all duration-500 ${
                    isActive ? "bg-gradient-to-r from-amber-400 via-neutral-100 to-amber-400 shadow-sm" : "bg-transparent"
                  }`}
                />

                {/* Top Row: Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded transition-colors ${
                        isActive ? "bg-amber-400/20 text-amber-300 border border-amber-400/40" : "bg-neutral-800 text-neutral-400"
                      }`}
                    >
                      {item.num} • {item.tag}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-white text-neutral-950 scale-110 shadow-lg shadow-white/20"
                          : "bg-neutral-800/80 text-neutral-400 group-hover:bg-neutral-700 group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Key Stat */}
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                    {item.title}
                  </h3>

                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {item.stat}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {item.statLabel}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Expanded Specifications Checklist (Always visible on mobile, expandable on desktop) */}
                <div
                  className={`mt-6 pt-5 border-t border-neutral-800 transition-all duration-500 ${
                    isActive ? "opacity-100 block" : "lg:opacity-0 lg:h-0 lg:overflow-hidden lg:mt-0 lg:pt-0"
                  }`}
                >
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400 block mb-2.5">
                    Engineering Execution Checks
                  </span>
                  <div className="space-y-2">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle indicator */}
                <div className="mt-6 flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-mono text-[11px]">Milestone Guaranteed</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? "text-amber-400 translate-x-1" : "text-neutral-600"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            Shipyon Live Transit Road Track & Material Delivery Vehicle
           ========================================================================= */}
        <div className="mt-16 pt-8 border-t border-neutral-800/80 relative">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
            <span className="flex items-center gap-2 text-neutral-300 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              Live Site Concrete &amp; Rebar Logistics Track
            </span>
            <span className="hidden sm:inline-block">Madurai District Construction Transit Line</span>
          </div>

          {/* Roadbed Container */}
          <div className="relative w-full h-12 bg-neutral-900/90 rounded-xl border border-neutral-800 overflow-hidden flex items-center px-4">
            {/* Animated Dashed Road Shimmer */}
            <div
              className="absolute inset-x-0 h-1 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(90deg, rgba(245, 158, 11, 0.75) 30%, transparent 0%)",
                backgroundSize: "28px 2px",
                backgroundRepeat: "repeat-x",
                animation: "wcuDashShimmer 22s linear infinite",
              }}
            />

            {/* Continuous Animated Civil Transit Vehicle */}
            <div
              className="absolute flex items-center gap-2 select-none pointer-events-none"
              style={{
                willChange: "right",
                animation: "truckDriveReverse 14s ease-in-out infinite, engineVibration 0.2s linear infinite",
              }}
            >
              <div className="bg-neutral-950 text-white px-2.5 py-1 rounded-md border border-neutral-700 flex items-center gap-1.5 shadow-lg">
                <Truck className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] font-mono font-bold tracking-tight text-white">
                  M25 Mix In-Transit
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
