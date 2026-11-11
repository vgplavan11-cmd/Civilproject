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
    tag: "IS 456 Protocol",
    title: "Monolithic RCC Framing",
    stat: "0mm",
    statLabel: "Plumb Deviation Limit",
    desc: "Fe550D ductile reinforcement resisting seismic tremors.",
    specs: ["IS 13920 seismic detailing", "Heavy-gauge node ties", "0mm laser column plumb"],
    icon: ShieldCheck,
  },
  {
    id: "cube-testing",
    num: "02",
    tag: "IS 516 Testing",
    title: "100% In-House Lab Testing",
    stat: "25 N/mm²",
    statLabel: "Compressive Mix Strength",
    desc: "7-day & 28-day cube compressive strength verification.",
    specs: ["Digital compressive testing", "Batch slump cone checks", "Certified 53-Grade OPC"],
    icon: Award,
  },
  {
    id: "soil-warranty",
    num: "03",
    tag: "Zero Settle",
    title: "10-Year Structural Warranty",
    stat: "185 kN/m²",
    statLabel: "Safe Soil Bearing Capacity",
    desc: "Raft foundations engineered to geotechnical report.",
    specs: ["Solid rock raft footings", "Anti-termite chemical barrier", "Substructure damp course (DPC)"],
    icon: Ruler,
  },
  {
    id: "transparent-boq",
    num: "04",
    tag: "Milestone Escrow",
    title: "100% Transparent BOQ Releases",
    stat: "0 Hidden",
    statLabel: "Escalation Cost Guarantee",
    desc: "Milestone escrow billing with zero hidden escalations.",
    specs: ["Fixed itemized BOQ", "Weekly photo progress logs", "Direct founder site visits"],
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug">
            Engineering Standards That Protect Your Generation.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed">
            Every residential project executed by Elite Homes is mathematically inspected, tested, and audited according to Bureau of Indian Standards (BIS).
          </p>
        </div>

        {/* Stable 4-Column Grid — Rock-solid shape & smooth GPU hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {CIVIL_STRIP_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-neutral-800/90 bg-gradient-to-b from-[#181818] via-[#121212] to-[#0d0d0d] hover:border-neutral-600 hover:from-[#202020] hover:via-[#151515] hover:to-[#0f0f0f] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-black/90 select-none overflow-hidden"
              >
                {/* Top Subtle Light Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-600 via-white to-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Row: Number Tag & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-800/90 text-neutral-300 border border-neutral-700/80 group-hover:border-neutral-500 transition-colors">
                      {item.num} • {item.tag}
                    </span>

                    <div className="w-9 h-9 rounded-xl bg-neutral-800/90 text-neutral-300 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-neutral-950 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title (Bigger Heading) */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight group-hover:text-neutral-100 transition-colors">
                    {item.title}
                  </h3>

                  {/* Key Stat Block */}
                  <div className="mt-3.5 p-2.5 rounded-xl bg-black/40 border border-neutral-800/80 group-hover:border-neutral-700/80 transition-colors flex items-baseline justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {item.stat}
                    </span>
                    <span className="text-[10px] font-medium text-neutral-400 text-right max-w-[110px] leading-tight">
                      {item.statLabel}
                    </span>
                  </div>

                  {/* Description (Reduced & Small) */}
                  <p className="text-[11px] text-neutral-400 mt-3 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Execution Checks (Reduced Content & Very Small Font) */}
                <div className="mt-5 pt-4 border-t border-neutral-800/90">
                  <span className="text-[9px] uppercase font-mono font-bold tracking-wider text-neutral-500 block mb-2">
                    Engineering Execution Checks
                  </span>
                  <div className="space-y-1.5">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-1.5 text-[10px] sm:text-[11px] text-neutral-300">
                        <CheckCircle2 className="w-3 h-3 text-neutral-400 group-hover:text-white shrink-0 mt-0.5 transition-colors" />
                        <span className="leading-tight">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Milestone Footer */}
                  <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[10px] text-neutral-500">
                    <span className="font-mono text-[10px] tracking-wide text-neutral-400">Milestone Guaranteed</span>
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
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
