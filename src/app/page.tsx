"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  HardHat, 
  ShieldCheck, 
  Ruler, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  ChevronDown,
  Compass,
  Calculator
} from "lucide-react";
import { civilServices } from "@/data/servicesData";
import { companyInfo } from "@/data/companyData";
import JournalSpreadCarousel from "@/components/ui/journal-spread-carousel";
import { CIVIL_JOURNAL_SPREADS } from "@/data/journalData";

export default function HomePage() {
  const pillars = [
    {
      title: "Mathematical Structural Rigor",
      desc: "Every column, plinth, and slab is calculated with Finite Element modeling adhering strictly to IS 456-2000 and IS 1893 seismic standards.",
      icon: Compass,
      tag: "Code Compliant"
    },
    {
      title: "100% Batch Concrete Testing",
      desc: "Digital compressive cube testing at 7-day and 28-day curing intervals ensures certified M25/M30 grade strength prior to shuttering removal.",
      icon: Award,
      tag: "IS 516 Testing"
    },
    {
      title: "Fixed Itemized BOQ Guarantee",
      desc: "Transparent Bill of Quantities fixed before excavation begins. Zero hidden costs, zero sudden price escalations, and milestone escrow billing.",
      icon: Ruler,
      tag: "Zero Escalations"
    },
    {
      title: "Direct Founder Site Oversight",
      desc: "Licensed civil founders inspect your site daily, personally auditing rebar tying, slump cone consistency, and concrete compaction.",
      icon: HardHat,
      tag: "Founder Supervised"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* =========================================================================
          1. HERO SECTION (Shipyon-style split layout & floating dock)
         ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen bg-white text-neutral-950 flex flex-col justify-center overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
        {/* Construction blueprint photographic background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/construction-blueprint-hero.jpg"
            alt="Elite Homes Civil Engineering & Construction"
            fill
            priority
            className="object-cover object-center pointer-events-none"
          />
          {/* Soft directional translucent white gradients ensuring perfect text readability while showing the construction image clearly */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headline, Narrative, CTA buttons & Stats Strip */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.14] text-neutral-950">
                Building Modern Homes With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-700">
                  Structural Precision
                </span>{" "}
                &amp; Integrity.
              </h1>

              {/* Subtitle Narrative */}
              <p className="text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed max-w-2xl font-medium">
                Elite Homes delivers turnkey residential houses (2BHK, 3BHK, Custom Luxury Villas) across Madurai with direct founder site supervision, transparent milestone pricing, and IS 456-compliant RCC framing.
              </p>

              {/* Dual CTA Button Group */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto pt-1">
                <Link
                  href="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-neutral-950 hover:bg-black text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-black/25 active:scale-95 transition-all"
                >
                  <span>Explore House Models</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/estimator"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-sm px-6 py-3.5 rounded-xl border border-neutral-300 shadow-md backdrop-blur-md transition-all active:scale-95"
                >
                  <Calculator className="w-4 h-4 text-neutral-950" />
                  <span>Civil Cost Estimator</span>
                </Link>
              </div>

              {/* Glassmorphic Stats Strip */}
              <div className="w-full pt-4">
                <div className="bg-white/80 backdrop-blur-md border border-neutral-200/90 rounded-2xl grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 overflow-hidden shadow-xl">
                  <div className="p-3.5 sm:p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                      {companyInfo.stats.yearsOfExcellence}
                    </div>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-neutral-600 mt-0.5">
                      Civil Experience
                    </p>
                  </div>

                  <div className="p-3.5 sm:p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                      {companyInfo.stats.completedProjects}
                    </div>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-neutral-600 mt-0.5">
                      Homes &amp; Sites
                    </p>
                  </div>

                  <div className="p-3.5 sm:p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                      {companyInfo.stats.squareFeetBuilt}
                    </div>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-neutral-600 mt-0.5">
                      Sq. Ft. Built
                    </p>
                  </div>

                  <div className="p-3.5 sm:p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                      {companyInfo.stats.clientSatisfactionRate}
                    </div>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-neutral-600 mt-0.5">
                      Founder Oversight
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Glassmorphic Engineering Docks */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end w-full space-y-4">
              {/* Floating Card 1 */}
              <div className="w-full max-w-md bg-white/85 backdrop-blur-xl border border-white/80 rounded-2xl p-4 sm:p-5 shadow-xl flex items-center gap-4 hover:scale-[1.02] hover:bg-white/95 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-neutral-950 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-neutral-950">IS 456:2000 RCC Framing</span>
                    <span className="text-[10px] font-mono font-bold text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-300">
                      M25 Mix
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 mt-1 leading-snug">
                    Ductile seismic reinforcement using primary Fe550D TMT rebar with 0mm plumb deviation.
                  </p>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="w-full max-w-md bg-white/85 backdrop-blur-xl border border-white/80 rounded-2xl p-4 sm:p-5 shadow-xl flex items-center gap-4 hover:scale-[1.02] hover:bg-white/95 transition-all duration-300 lg:translate-x-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-950 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-neutral-950">100% In-House Lab Testing</span>
                    <span className="text-[10px] font-mono font-bold text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-300">
                      IS 516
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 mt-1 leading-snug">
                    150mm concrete cubes crushed at 7-day (67%) and 28-day (100%) target strength before stripping.
                  </p>
                </div>
              </div>

              {/* Floating Card 3 */}
              <div className="w-full max-w-md bg-white/85 backdrop-blur-xl border border-white/80 rounded-2xl p-4 sm:p-5 shadow-xl flex items-center gap-4 hover:scale-[1.02] hover:bg-white/95 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-neutral-950 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-neutral-950">10-Year Structural Warranty</span>
                    <span className="text-[10px] font-mono font-bold text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-300">
                      Zero Settle
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 mt-1 leading-snug">
                    Isolated footings &amp; raft foundations engineered to 185 kN/m² safe bearing soil capacity.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll To Explore Indicator */}
        <div className="mt-8 flex flex-col items-center justify-center text-neutral-600 select-none text-xs">
          <span className="tracking-widest uppercase text-[10px] font-bold text-neutral-700">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 mt-1 animate-bounce text-neutral-700" />
        </div>
      </section>

      {/* =========================================================================
          2. OUR CONSTRUCTION SERVICES SECTION (Shipyon category-card style)
         ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight relative inline-block">
              Our Construction Services
              <span className="block w-24 h-1 bg-neutral-950 mx-auto mt-3 rounded-full" />
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-3 leading-relaxed">
              Turnkey execution and structural precision across every phase of residential and commercial construction.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {civilServices.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-neutral-950 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Mars Black Line on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-neutral-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-950 flex items-center justify-center mb-6 group-hover:bg-neutral-950 group-hover:text-white transition-colors duration-300">
                    <Building2 className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug mb-3 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-neutral-950 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                    <span>Explore Specifications</span>
                    <span className="text-xs">&rarr;</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. THE PILLARS OF OUR CIVIL PROMISE (Shipyon vh-section 3D tilt cards)
         ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight relative inline-block">
              The Pillars of Our Civil Promise
              <span className="block w-20 h-1 bg-neutral-950 mx-auto mt-3 rounded-full" />
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Four fundamental commitments that govern every structural beam we cast and every residential home we construct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-slate-50 hover:bg-white border border-slate-200 hover:border-neutral-950 rounded-2xl p-7 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-950 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-neutral-950 group-hover:text-white transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-300">
                      {pillar.tag}
                    </span>

                    <h3 className="text-lg font-bold text-slate-950 mt-3 mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="w-8 h-1 bg-slate-200 group-hover:w-full group-hover:bg-neutral-950 transition-all duration-500 rounded-full mt-6" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY CHOOSE ELITE HOMES (Shipyon wcu-section engineering rigor)
         ========================================================================= */}
      <section className="py-20 bg-[#0d0d0d] text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-snug">
                Zero Compromise on Steel, Cement &amp; Structural Safety.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                A home is only as durable as its geotechnical footing and concrete matrix. Elite Homes treats every single residential home with the mathematical standards of heavy civil infrastructure.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 bg-neutral-900/80 p-4 rounded-xl border border-neutral-800">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 text-white flex items-center justify-center shrink-0 font-black text-xs border border-neutral-700">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Fe550D High-Ductility Rebar</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Superior elongation limits designed to withstand seismic shear tremors without brittle failure.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-neutral-900/80 p-4 rounded-xl border border-neutral-800">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 text-white flex items-center justify-center shrink-0 font-black text-xs border border-neutral-700">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Needle Vibrator Compaction</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Eliminates air voids and honeycombing in high-density column-beam junction joints.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-neutral-900/80 p-4 rounded-xl border border-neutral-800">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 text-white flex items-center justify-center shrink-0 font-black text-xs border border-neutral-700">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">21-Day Ponding Water Curing</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Continuous chemical hydration prevents micro-surface cracks and guarantees maximum tensile capacity.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Comparison Box */}
            <div className="lg:col-span-7 bg-[#141414] rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-2xl">
              <div className="border-b border-neutral-800 pb-4 mb-6 flex items-center justify-between">
                <span className="font-bold text-sm text-white">Standard Construction Quality Audit</span>
                <span className="text-xs text-neutral-400 font-mono">PWD &amp; IS 456 Benchmark</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#1a1a1a] p-4 rounded-xl border border-neutral-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Foundation Type</span>
                  <p className="text-sm font-black text-white mt-1">M25 Isolated &amp; Raft Footings</p>
                  <p className="text-xs text-slate-400 mt-1">Cast directly on 185 kN/m² tested hard rock stratum.</p>
                </div>

                <div className="bg-[#1a1a1a] p-4 rounded-xl border border-neutral-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Cement Standard</span>
                  <p className="text-sm font-black text-white mt-1">53-Grade OPC + Certified M-Sand</p>
                  <p className="text-xs text-slate-400 mt-1">Triple-washed graded silt-free 20mm hard rock aggregates.</p>
                </div>

                <div className="bg-[#1a1a1a] p-4 rounded-xl border border-neutral-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Masonry Enclosure</span>
                  <p className="text-sm font-black text-white mt-1">Thermal Porotherm &amp; Solid Blocks</p>
                  <p className="text-xs text-slate-400 mt-1">Fiber chicken-mesh installed at all concrete-brick joints.</p>
                </div>

                <div className="bg-[#1a1a1a] p-4 rounded-xl border border-neutral-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Payment Security</span>
                  <p className="text-sm font-black text-white mt-1">Milestone Escrow Releases</p>
                  <p className="text-xs text-slate-400 mt-1">Clients pay strictly after site milestone engineer verification.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. LIVE INTERACTIVE 3D DEMO SITES SHOWCASE (Journal Carousel)
         ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight relative inline-block">
            Demo Sites &amp; Architectural Showcases
            <span className="block w-20 h-1 bg-neutral-950 mx-auto mt-3 rounded-full" />
          </h2>
          <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
            Drag, swipe, or flip through our live interactive architectural spreads and active Madurai site construction phases.
          </p>
        </div>

        <div className="w-full relative px-1 sm:px-4">
          <JournalSpreadCarousel 
            spreads={CIVIL_JOURNAL_SPREADS}
            title="Demo Sites"
            height="clamp(480px, 75vh, 680px)"
            autoPlay={4500}
          />
        </div>
      </section>

      {/* =========================================================================
          6. CIVIL ESTIMATOR SPOTLIGHT & CTA (Shipyon global-action-container)
         ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0d0d0d] via-[#141414] to-[#1c1c1c] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-neutral-800">
            <div className="absolute top-0 right-0 w-80 h-80 bg-neutral-700/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl space-y-4 relative z-10 text-center lg:text-left">
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
                Calculate Turnkey Civil Costs &amp; Raw Material Requirements
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Determine your construction budget, Fe550D TMT steel tonnage, cement bag counts, and project timelines with our dedicated engineering calculator based on IS 456-2000 standards.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-300" />
                  Real-time Cost per Sq.Ft
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-300" />
                  Steel &amp; Cement Thumb Rules
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-300" />
                  Fixed-Price BOQ Guarantee
                </span>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full sm:w-auto">
              <Link
                href="/estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-200 text-neutral-950 font-bold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg shadow-black/40 active:scale-95 transition-all"
              >
                <Calculator className="w-4 h-4" />
                <span>Launch Full Civil Estimator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
