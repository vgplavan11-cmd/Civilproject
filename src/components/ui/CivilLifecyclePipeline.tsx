"use client";

import React, { useState } from "react";
import { Compass, Hammer, Sparkles, Key, CheckCircle, ShieldAlert } from "lucide-react";

interface PhaseCapsule {
  num: string;
  stageName: string;
  title: string;
  duration: string;
  standards: string;
  details: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const LIFECYCLE_PHASES: PhaseCapsule[] = [
  {
    num: "01",
    stageName: "PHASE 01 • GEOTECHNICAL & SUBSTRUCTURE",
    title: "Soil Investigation & Raft Footings",
    duration: "Weeks 1 – 3",
    standards: "IS 1892 & IS 6403",
    details: [
      "Standard Penetration Test (SPT) verifying 185 kN/m² safe bearing capacity",
      "Chlorpyrifos anti-termite chemical soil barrier treatment under slab",
      "M25 grade isolated & tie-beam casting with 40mm clear cover",
    ],
    icon: Compass,
  },
  {
    num: "02",
    stageName: "PHASE 02 • MONOLITHIC SUPERSTRUCTURE",
    title: "IS 456 Seismic RCC Framing",
    duration: "Weeks 4 – 9",
    standards: "IS 456:2000 & IS 13920",
    details: [
      "Primary Fe550D ductile TMT rebar with zero cold-bend fractures",
      "Laser-aligned vertical column plumb with 0mm allowable drift",
      "21-day continuous ponding water curing for monolithic roof slab",
    ],
    icon: Hammer,
  },
  {
    num: "03",
    stageName: "PHASE 03 • MASONRY & CONDUIT ROUTING",
    title: "Thermal Masonry & Waterproofing",
    duration: "Weeks 10 – 14",
    standards: "IS 2185 & IS 2250",
    details: [
      "High-density Porotherm / solid block masonry with chicken-mesh jointing",
      "Dual-layer waterproof chemical membrane over sunken washrooms & roof",
      "Concealed heavy-gauge FRLS copper electrical conduit channel grooving",
    ],
    icon: Sparkles,
  },
  {
    num: "04",
    stageName: "PHASE 04 • QUALITY SNAG & HANDOVER",
    title: "Architectural Handover & Warranty",
    duration: "Weeks 15 – 18",
    standards: "10-Year Structural Guarantee",
    details: [
      "120-point comprehensive engineering quality snag audit before handover",
      "Teakwood main door fitting, premium vitrified tiles & CP fitting checks",
      "Official handover with Structural Safety & As-Built MEP Blueprint pack",
    ],
    icon: Key,
  },
];

export default function CivilLifecyclePipeline() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = xRatio * 14;
    const rotateX = yRatio * -14;
    e.currentTarget.style.transform = `perspective(900px) rotateY(${rotateY.toFixed(2)}deg) rotateX(${rotateX.toFixed(2)}deg) translateY(-6px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = `perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0px)`;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 relative overflow-hidden">
      {/* Ambient floating dust particles (Shipyon hww-dust pattern) */}
      <div className="absolute top-12 left-[8%] w-4 h-4 rounded-full bg-neutral-900/10 border border-neutral-900/20 anim-dust-1 pointer-events-none" />
      <div className="absolute top-1/3 right-[10%] w-3 h-3 rounded-full bg-neutral-900/15 border border-neutral-900/25 anim-dust-2 pointer-events-none" />
      <div className="absolute bottom-20 left-[15%] w-5 h-5 rounded-full bg-neutral-900/10 border border-neutral-900/20 anim-dust-3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-neutral-950 inline-block" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-800">
              Turnkey Lifecycle Pipeline • How We Build
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            From Geotechnical Soil Test to Key Handover.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3.5 leading-relaxed">
            Every residential villa constructed by Elite Homes follows a disciplined 4-stage execution roadmap with 100% milestone transparency.
          </p>
        </div>

        {/* High-Tech Laser Connection Rail (Shipyon laser-connection-rail pattern) */}
        <div className="relative w-full mb-10 hidden lg:block">
          {/* Base rail */}
          <div className="w-full h-0.5 bg-neutral-200 relative overflow-hidden rounded-full">
            {/* Laser neon pulse sweeping continuously */}
            <div
              className="absolute top-0 h-full w-48 bg-gradient-to-r from-transparent via-neutral-950 to-transparent"
              style={{
                animation: "laserPulseMove 3.5s linear infinite",
              }}
            />
          </div>

          {/* Connected Hub Markers */}
          <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 flex justify-between px-16 pointer-events-none">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="relative flex items-center justify-center">
                {/* 3D Concentric Orbit Rings */}
                <div
                  className="absolute w-7 h-7 rounded-full border border-neutral-400 pointer-events-none"
                  style={{ animation: "rotateRing1 6s linear infinite" }}
                />
                <div
                  className="absolute w-9 h-9 rounded-full border border-neutral-300 pointer-events-none"
                  style={{ animation: "rotateRing2 8s linear infinite" }}
                />
                <div className="w-3.5 h-3.5 rounded-full bg-neutral-950 border-2 border-white shadow-md" />
              </div>
            ))}
          </div>
        </div>

        {/* 4 Interactive 3D Perspective Tilt Capsules (Shipyon hww-capsule pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LIFECYCLE_PHASES.map((phase, idx) => {
            const Icon = phase.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={phase.num}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseMove={handleMouseMove}
                onMouseLeave={(e) => {
                  setHoveredIdx(null);
                  handleMouseLeave(e);
                }}
                className={`group cursor-default bg-white/90 backdrop-blur-xl border rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-lg ${
                  isHovered
                    ? "border-neutral-950 bg-white shadow-2xl"
                    : "border-slate-200/90 hover:border-slate-400"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s, border-color 0.3s",
                }}
              >
                <div>
                  {/* Top Bar: Icon, Phase Badge, Duration */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-black transition-all">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200 block">
                        {phase.duration}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">
                        {phase.standards}
                      </span>
                    </div>
                  </div>

                  {/* Eyebrow and Title */}
                  <span className="text-[11px] font-mono font-bold tracking-tight text-neutral-500 uppercase block mb-1">
                    {phase.stageName}
                  </span>

                  <h3 className="text-xl font-black text-slate-950 tracking-tight mb-4">
                    {phase.title}
                  </h3>

                  {/* Detailed Civil Execution Bullet Points */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    {phase.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                        <CheckCircle className="w-3.5 h-3.5 text-neutral-950 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestone Safety Guarantee Strip */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5 font-bold text-neutral-900">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                    Site Sign-off
                  </span>
                  <span>IS Audited</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
