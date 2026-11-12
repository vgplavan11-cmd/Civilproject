"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Ruler, 
  Award, 
  HardHat, 
  Target, 
  Eye, 
  Layers 
} from "lucide-react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  const milestones = [
    { year: "2023", title: "Inception & Founding in Madurai", desc: "Founded by passionate civil engineers aiming to eliminate contracting opacity, contractor delays, and hidden escalation costs." },
    { year: "2024", title: "First 10 Turnkey Homes Handover", desc: "Successfully delivered precision 2BHK and 3BHK turnkey houses across Anna Nagar & KK Nagar strictly within the agreed BOQ budget." },
    { year: "2025", title: "Digital Quality Logs & In-House Testing", desc: "Integrated digital daily progress logs, 3D structural modeling, and direct founder supervision across 4 active residential sites." },
    { year: "2026", title: "35,000+ Sq. Ft. Milestone & Model Catalog", desc: "Crossed 35,000 sq.ft. of constructed area and launched standardized, transparent turnkey house packages for Madurai families." }
  ];

  const coreValues = [
    {
      num: "01",
      title: "IS 456 Structural Rigor",
      tag: "Code Standard",
      desc: "Every column, plinth, and slab is calculated with finite element load analysis adhering strictly to BIS code standards.",
      icon: Compass
    },
    {
      num: "02",
      title: "Zero-Tolerance Plumb",
      tag: "0mm Deviation",
      desc: "Laser-aligned vertical column casting ensuring monolithic load transfer with zero eccentric shear drift.",
      icon: Ruler
    },
    {
      num: "03",
      title: "100% In-House Lab Testing",
      tag: "Batch Verified",
      desc: "150mm concrete cubes crushed at 7-day (67%) and 28-day (100%) target strength before stripping formwork.",
      icon: Award
    },
    {
      num: "04",
      title: "Fixed-Price Escrow BOQ",
      tag: "Zero Escalations",
      desc: "Itemized Bill of Quantities fixed before excavation. Payments released only after site engineer verification.",
      icon: Layers
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* =========================================================================
          1. PAGE HERO (Shipyon page-hero pattern with eyebrow dot & Mars Black title)
         ========================================================================= */}
      <section className="bg-slate-50 border-b border-slate-200 pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
              Building Spaces, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-700">
                Elevating Lives.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 mt-5 leading-relaxed font-normal">
              Elite Homes is an engineering-first civil construction firm. Founded by passionate civil engineers, we replace traditional contracting opacity with real-time digital communication, transparent fixed BOQs, and daily founder site supervision.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-black text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-lg shadow-black/20 transition-all active:scale-95"
              >
                <span>Explore House Models</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-950 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl border border-neutral-300 shadow-xs transition-all active:scale-95"
              >
                <span>Speak With Principal Engineer</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ABOUT MOSAIC SECTION (Shipyon about-mosaic asymmetric gallery pattern)
         ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Asymmetric Photographic Mosaic */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                  <Image
                    src="/images/civil-blueprint-hero.jpg"
                    alt="Active Civil Framing Site"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-mono font-bold text-white uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    IS 456 Column Caster
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="relative h-36 rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
                    <Image
                      src="/images/xyz-crest-2bhk.png"
                      alt="Modern 2BHK Elevation"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-mono font-bold text-white uppercase bg-black/60 px-2 py-0.5 rounded">
                      2BHK Turnkey
                    </span>
                  </div>

                  <div className="relative h-36 rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
                    <Image
                      src="/images/xyz-royal-3bhk.png"
                      alt="Luxury 3BHK Villa"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-mono font-bold text-white uppercase bg-black/60 px-2 py-0.5 rounded">
                      3BHK Villa
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge (Shipyon mosaic floating badge) */}
              <div className="absolute -bottom-6 right-2 sm:right-6 max-w-[calc(100%-1rem)] bg-neutral-950 text-white p-3.5 sm:p-4 rounded-2xl border border-neutral-800 shadow-2xl flex items-center gap-3 sm:gap-3.5 z-20 anim-float-card-1">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-black flex items-center justify-center font-black">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-black text-white">35,000+</div>
                  <p className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-tight">
                    Sq. Ft. Built in Madurai
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Narrative Description */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
                Our Origin Story
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-snug">
                Engineering Homes With The Discipline of Infrastructure.
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Traditional contractors often rely on visual approximations and third-party subcontractors who cut corners on steel gauge, cement grades, and water curing.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Elite Homes was founded to change this. We treat every single residential home with the exact mathematical standards of heavy civil projects: isolated footings engineered to 185 kN/m² soil reports, primary Fe550D rebar, in-house cube compressive crushing tests, and laser-aligned plumb checks.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xl sm:text-2xl font-black text-slate-950 block">100%</span>
                  <span className="text-[11px] font-semibold text-slate-600">Founder Site Oversight</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xl sm:text-2xl font-black text-slate-950 block">0 Days</span>
                  <span className="text-[11px] font-semibold text-slate-600">Unexplained Delays</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. VISION & MISSION 3D GLASS WORKSPACE (Shipyon vm-section pattern)
         ========================================================================= */}
      <section className="py-20 bg-[#0d0d0d] text-white border-b border-neutral-800 relative overflow-hidden">
        {/* Ambient Blur Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-neutral-800/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-2">
              Philosophical Compass
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Vision &amp; Engineering Mission
            </h2>
          </div>

          {/* Tab Controls */}
          <div className="flex justify-center mb-8">
            <div className="bg-neutral-900 border border-neutral-800 rounded-full p-1.5 flex items-center gap-1">
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === "vision" ? "bg-white text-black shadow-md" : "text-neutral-400 hover:text-white"
                }`}
              >
                Our Vision
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === "mission" ? "bg-white text-black shadow-md" : "text-neutral-400 hover:text-white"
                }`}
              >
                Our Mission
              </button>
            </div>
          </div>

          {/* Interactive Glassmorphic Workspace Cards (Shipyon vm-pane) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Vision Pane */}
            <div
              className={`p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${
                activeTab === "vision"
                  ? "bg-gradient-to-br from-[#1c1c1c] via-[#141414] to-[#0d0d0d] border-neutral-600 shadow-2xl scale-[1.02]"
                  : "bg-[#141414]/80 border-neutral-800/80 hover:border-neutral-700"
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center mb-5 shadow-lg">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-2">
                  The Long-Term Horizon
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight mb-4">
                  The Benchmark of Structural Integrity
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  To become South India&apos;s most respected residential engineering firm, recognized for establishing scientific mathematical rigor, 100% price transparency, and generational structural durability in every family home we construct.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Zero Short-Cuts Guarantee</span>
              </div>
            </div>

            {/* Mission Pane */}
            <div
              className={`p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${
                activeTab === "mission"
                  ? "bg-gradient-to-br from-[#1c1c1c] via-[#141414] to-[#0d0d0d] border-neutral-600 shadow-2xl scale-[1.02]"
                  : "bg-[#141414]/80 border-neutral-800/80 hover:border-neutral-700"
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-black flex items-center justify-center mb-5 shadow-lg">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                  Operational Execution
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight mb-4">
                  Eliminating Opacity in Civil Construction
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  To empower home builders with itemized, fixed Bills of Quantities (BOQ), daily digital site progress logs, and strict IS 456-compliant construction protocols delivered under personal founder oversight from excavation to handover.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>100% Milestone Billing Security</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ORBITAL CORE VALUES (Shipyon cv-section pattern)
         ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 block mb-2">
              Our Bedrock Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              The 4 Pillars of Elite Homes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Engineering benchmarks that govern every beam we cast and every residential home we construct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.num}
                  className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-neutral-950 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-neutral-950 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                        {val.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-950 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Pillar {val.num}</span>
                    <span className="text-neutral-950 font-bold group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. MILESTONE JOURNEY TIMELINE
         ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-950 tracking-tight">
              Our Track Record &amp; Milestones
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From our first blueprint to 35,000+ sq.ft. of delivered residential homes in Madurai.
            </p>
          </div>

          <div className="relative border-l-2 border-neutral-300 ml-4 sm:ml-32 space-y-10">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                <span className="hidden sm:block absolute -left-28 top-0 text-right w-20 font-black text-lg text-neutral-950">
                  {item.year}
                </span>

                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-neutral-950 group-hover:scale-125 transition-transform" />

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 group-hover:border-neutral-950 transition-colors">
                  <span className="sm:hidden text-xs font-black text-neutral-950 block mb-1">{item.year}</span>
                  <h4 className="text-base font-bold text-slate-950">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CTA BANNER
         ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
            Work With a Civil Firm You Can Trust
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Schedule an in-person consultation at our Madurai office or arrange a site visit with our principal engineer.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white text-xs font-bold px-7 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
            >
              <span>Contact Engineering Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 text-xs font-bold px-7 py-3.5 rounded-xl transition-all active:scale-95"
            >
              <span>Explore House Models</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
