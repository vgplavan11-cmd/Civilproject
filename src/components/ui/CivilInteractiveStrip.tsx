"use client";

import React from "react";
import { ShieldCheck, Award, Ruler, CheckCircle2, ChevronRight } from "lucide-react";

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
  return (
    <section className="py-20 bg-[#0d0d0d] text-white border-b border-neutral-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neutral-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neutral-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug">
            Engineering Standards That Protect Your Generation.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3.5 leading-relaxed">
            Every residential project executed by Elite Homes is mathematically inspected, tested, and audited according to Bureau of Indian Standards (BIS).
          </p>
        </div>

        {/* Stable 4-Column Grid — Rock-solid shape & smooth GPU hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {CIVIL_STRIP_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-neutral-800/90 bg-gradient-to-b from-[#181818] via-[#121212] to-[#0d0d0d] hover:border-neutral-600 hover:from-[#202020] hover:via-[#151515] hover:to-[#0f0f0f] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-black/90 select-none overflow-hidden"
              >
                {/* Top Subtle Light Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-600 via-white to-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Row: Number Tag & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-neutral-800/90 text-neutral-300 border border-neutral-700/80 group-hover:border-neutral-500 transition-colors">
                      {item.num} • {item.tag}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-neutral-800/90 text-neutral-300 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-neutral-950 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-neutral-100 transition-colors">
                    {item.title}
                  </h3>

                  {/* Key Stat Block */}
                  <div className="mt-4 p-3 rounded-xl bg-black/40 border border-neutral-800/80 group-hover:border-neutral-700/80 transition-colors flex items-baseline justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {item.stat}
                    </span>
                    <span className="text-[11px] font-medium text-neutral-400 text-right max-w-[120px]">
                      {item.statLabel}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Execution Checks (Uniform & Stable across all cards) */}
                <div className="mt-6 pt-5 border-t border-neutral-800/90">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-neutral-400 block mb-3">
                    Engineering Execution Checks
                  </span>
                  <div className="space-y-2">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white shrink-0 mt-0.5 transition-colors" />
                        <span className="leading-snug">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Milestone Footer */}
                  <div className="mt-5 pt-3.5 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-mono text-[11px] tracking-wide text-neutral-400">Milestone Guaranteed</span>
                    <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
