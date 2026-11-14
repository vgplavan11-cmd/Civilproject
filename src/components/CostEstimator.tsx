"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Layers, 
  Clock, 
  ArrowRight, 
  BarChart3, 
  HardHat, 
  Info,
  CheckCircle2,
  Building2,
  Home,
  Sparkles,
  Printer,
  FileText,
  ShieldCheck,
  CheckSquare,
  Square,
  RefreshCw,
  PhoneCall
} from "lucide-react";
import { companyInfo } from "@/data/companyData";

type ScopeType = "turnkey" | "structure";
type ModelType = "2BHK" | "3BHK" | "Villa" | "Commercial";
type FloorType = "G" | "G1" | "G2" | "G3";
type SoilType = "normal" | "clay" | "rocky";
type GradeType = "standard" | "premium" | "luxury";

interface AddOn {
  id: string;
  name: string;
  description: string;
  cost: number; // Flat cost or multiplier handled in calc
  isPerSqFt?: boolean;
}

const COMMON_ADDONS: AddOn[] = [
  {
    id: "sump",
    name: "8,000L Underground RCC Sump + Overhead Tank",
    description: "Monolithic waterproofed RCC tank with dual submersible piping",
    cost: 95000
  },
  {
    id: "compound",
    name: "Perimeter Compound Wall & Heavy MS Main Gate",
    description: "4-foot solid block boundary wall with decorative MS gate & lighting",
    cost: 125000
  },
  {
    id: "rainwater",
    name: "Rainwater Harvesting Chamber (Madurai PWD Compliant)",
    description: "Deep percolation recharge well with silt trap & gravel filtration",
    cost: 35000
  },
  {
    id: "weathering",
    name: "Rooftop Thermal Clay Weathering Screed",
    description: "Reflective terracotta cool tiles reducing internal summer heat by 5°C",
    cost: 45,
    isPerSqFt: true
  }
];

export default function CostEstimator() {
  // 1. Core Configuration State
  const [scope, setScope] = useState<ScopeType>("turnkey");
  const [modelType, setModelType] = useState<ModelType>("2BHK");
  const [floors, setFloors] = useState<FloorType>("G1");
  const [area, setArea] = useState<number>(1200);
  const [soil, setSoil] = useState<SoilType>("normal");
  const [grade, setGrade] = useState<GradeType>("premium");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["sump", "rainwater"]);
  const [activeTab, setActiveTab] = useState<"milestones" | "materials" | "specs">("milestones");

  // Base Turnkey Rates per sq.ft
  const baseRates: Record<GradeType, { turnkey: number; structure: number }> = {
    standard: { turnkey: 1850, structure: 1250 },
    premium: { turnkey: 2250, structure: 1520 },
    luxury: { turnkey: 2850, structure: 1890 }
  };

  // Floor Height / Multi-storey Multiplier
  const floorMultiplier: Record<FloorType, number> = {
    G: 1.0,
    G1: 1.02, // +2% for scaffolding and vertical staging
    G2: 1.05, // +5% for pump lift & multi-level shuttering
    G3: 1.08  // +8% for commercial crane, safety netting & high-elevation loads
  };

  // Soil / Foundation cost adjustments per sq.ft
  const soilCostPerSqFt: Record<SoilType, number> = {
    normal: 0,     // Isolated Column Footings (Included)
    clay: 120,     // Raft cum Continuous Tie-Beam (+₹120/sq.ft)
    rocky: 85      // Hydraulic Rock Breaker & Chemical Anchoring (+₹85/sq.ft)
  };

  // Calculations
  const calculations = useMemo(() => {
    const ratePerSqFtBase = baseRates[grade][scope];
    const floorFactor = floorMultiplier[floors];
    const soilRate = soilCostPerSqFt[soil];

    // Core construction cost
    const effectiveRatePerSqFt = Math.round(ratePerSqFtBase * floorFactor + soilRate);
    const coreConstructionCost = area * effectiveRatePerSqFt;

    // Addons cost
    let addonsTotal = 0;
    COMMON_ADDONS.forEach((addon) => {
      if (selectedAddons.includes(addon.id)) {
        if (addon.isPerSqFt) {
          addonsTotal += addon.cost * area;
        } else {
          addonsTotal += addon.cost;
        }
      }
    });

    const totalEstimate = coreConstructionCost + addonsTotal;
    const blendedRatePerSqFt = Math.round(totalEstimate / area);
    const carpetArea = Math.round(area * 0.78); // 78% efficiency thumb rule

    // Milestone Payment Breakdown (100% Escrow Model)
    const milestones = [
      {
        stage: "Phase 01",
        title: "Geotechnical Survey, Earthwork & Raft Foundation",
        pct: 18,
        amount: Math.round(totalEstimate * 0.18),
        duration: "Weeks 1 – 4",
        checks: "Soil bearing capacity test, anti-termite barrier, M25 isolated footings & plinth tie beam"
      },
      {
        stage: "Phase 02",
        title: "RCC Monolithic Superstructure & Roof Slab",
        pct: 25,
        amount: Math.round(totalEstimate * 0.25),
        duration: "Weeks 5 – 10",
        checks: "Fe550D rebar cage alignment, column casting, shuttering inspection & monolithic slab pour"
      },
      {
        stage: "Phase 03",
        title: "Masonry Walls & Concealed MEP Rough-In",
        pct: 16,
        amount: Math.round(totalEstimate * 0.16),
        duration: "Weeks 11 – 15",
        checks: "Porotherm/wire-cut bricks, concealed electrical conduit channel grooving, CPVC pressure testing"
      },
      {
        stage: "Phase 04",
        title: "Internal Plastering & Sunken Waterproofing",
        pct: 15,
        amount: Math.round(totalEstimate * 0.15),
        duration: "Weeks 16 – 19",
        checks: "Dual-layer elastomeric waterproofing over washrooms & terrace, sponge-finished plaster"
      },
      {
        stage: "Phase 05",
        title: "Flooring, Wall Tiling & Joinery Fitting",
        pct: 14,
        amount: Math.round(totalEstimate * 0.14),
        duration: "Weeks 20 – 23",
        checks: "Nano-glazed vitrified/marble laying, teakwood frames, granite sills, modular switchplates"
      },
      {
        stage: "Phase 06",
        title: "Exterior Weathercoat, Fixtures & Snag Handover",
        pct: 12,
        amount: Math.round(totalEstimate * 0.12),
        duration: "Final Month",
        checks: "Silicon-infused exterior paint, Jaquar sanitaryware, deep quality audit, 10-Yr warranty handover"
      }
    ];

    // Raw Materials Takeoff (IS 456-2000 Civil Engineering Formulas)
    const steelFactor = grade === "luxury" ? 4.6 : grade === "premium" ? 4.3 : 4.0;
    const steelTonnes = ((area * steelFactor) / 1000).toFixed(2);
    const cementBags = Math.round(area * (grade === "luxury" ? 0.46 : 0.42));
    const aggregatesCft = Math.round(area * 1.95);
    const bricksUnits = Math.round(area * 20);
    const paintLitres = Math.round(area * 0.45);
    const flooringSqFt = Math.round(area * 0.85);

    // Duration Estimation
    let timeline = "6 – 7 Months";
    if (area > 3500 || floors === "G3") timeline = "14 – 16 Months";
    else if (area > 2200 || floors === "G2") timeline = "10 – 12 Months";
    else if (area > 1400 || floors === "G1") timeline = "8 – 9 Months";

    return {
      effectiveRatePerSqFt,
      coreConstructionCost,
      addonsTotal,
      totalEstimate,
      blendedRatePerSqFt,
      carpetArea,
      milestones,
      steelTonnes,
      cementBags,
      aggregatesCft,
      bricksUnits,
      paintLitres,
      flooringSqFt,
      timeline
    };
  }, [scope, modelType, floors, area, soil, grade, selectedAddons]);

  // Quick plot preset helpers
  const handlePresetArea = (presetSqFt: number, model: ModelType, defaultFloors: FloorType) => {
    setArea(presetSqFt);
    setModelType(model);
    setFloors(defaultFloors);
  };

  // Toggle addon
  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Estimator Header */}
      <div className="max-w-4xl mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 text-white text-[11px] font-semibold uppercase tracking-wider mb-3">
          <FileText className="w-3.5 h-3.5" />
          <span>Interactive Civil Engineering Estimator</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
          Turnkey Civil Construction &amp; Material Estimator
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed max-w-2xl font-normal">
          Accurate structural budgeting based on IS 456-2000 standards, Tamil Nadu PWD schedules, and real-time material indices for Madurai and Southern Tamil Nadu plots.
        </p>

        {/* Scope Mode Switcher */}
        <div className="mt-5 inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => setScope("turnkey")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              scope === "turnkey"
                ? "bg-neutral-950 text-white shadow-sm"
                : "text-slate-600 hover:text-neutral-950"
            }`}
          >
            Full Turnkey Package (Structure + Finishing + MEP)
          </button>
          <button
            type="button"
            onClick={() => setScope("structure")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              scope === "structure"
                ? "bg-neutral-950 text-white shadow-sm"
                : "text-slate-600 hover:text-neutral-950"
            }`}
          >
            Core Structure Only (Grey RCC Frame + Masonry)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* =========================================================================
            LEFT COLUMN: ESTIMATOR PARAMETERS & CONTROLS
           ========================================================================= */}
        <div className="lg:col-span-7 space-y-7">
          {/* 1. Project Typology */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-neutral-950 text-white text-[11px] font-bold flex items-center justify-center">1</span>
                <span>Select Project Typology</span>
              </label>
              <span className="text-[11px] font-semibold text-slate-500">Preset Dimensions</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(
                [
                  { id: "2BHK", label: "2BHK Model", area: 1140, floors: "G1", icon: <Home className="w-3.5 h-3.5" /> },
                  { id: "3BHK", label: "3BHK Model", area: 1680, floors: "G1", icon: <Home className="w-3.5 h-3.5" /> },
                  { id: "Villa", label: "Luxury Villa", area: 2800, floors: "G1", icon: <Sparkles className="w-3.5 h-3.5" /> },
                  { id: "Commercial", label: "Commercial", area: 4500, floors: "G3", icon: <Building2 className="w-3.5 h-3.5" /> }
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handlePresetArea(item.area, item.id, item.floors as FloorType)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                    modelType === item.id
                      ? "bg-neutral-950 text-white border-neutral-950 shadow-md ring-2 ring-neutral-950/20"
                      : "bg-white hover:bg-slate-50 text-slate-700 border-slate-200"
                  }`}
                >
                  <span className={modelType === item.id ? "text-white" : "text-slate-500"}>
                    {item.icon}
                  </span>
                  <span className="text-xs font-bold">{item.label}</span>
                  <span className={`text-[10px] ${modelType === item.id ? "text-slate-300" : "text-slate-500"}`}>
                    {item.area} Sq.Ft
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Number of Floors / Height */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-2.5">
              <span className="w-5 h-5 rounded-full bg-neutral-950 text-white text-[11px] font-bold inline-flex items-center justify-center mr-1.5">2</span>
              Number of Floors / Structural Elevation
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: "G", label: "G Only", sub: "Single Storey" },
                { id: "G1", label: "G + 1", sub: "Duplex Home" },
                { id: "G2", label: "G + 2", sub: "Triplex / Rental" },
                { id: "G3", label: "G + 3", sub: "Commercial / Multi" }
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFloors(f.id as FloorType)}
                  className={`py-2 px-3 rounded-lg border text-center transition-all cursor-pointer ${
                    floors === f.id
                      ? "bg-neutral-950 text-white border-neutral-950 font-bold shadow-xs"
                      : "bg-white hover:bg-slate-50 text-slate-700 border-slate-200 font-medium"
                  }`}
                >
                  <div className="text-xs font-extrabold">{f.label}</div>
                  <div className={`text-[10px] ${floors === f.id ? "text-slate-300" : "text-slate-500"}`}>
                    {f.sub}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Built-Up Area Slider & Plot Presets */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <label className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-neutral-950 text-white text-[11px] font-bold flex items-center justify-center">3</span>
                <span>Super Built-Up Area</span>
              </label>

              {/* Quick Area Presets */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase text-slate-500 hidden sm:inline">Presets:</span>
                {[
                  { label: "30×40", sqft: 1200 },
                  { label: "30×50", sqft: 1500 },
                  { label: "40×60", sqft: 2400 }
                ].map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => setArea(preset.sqft)}
                    className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 cursor-pointer"
                  >
                    {preset.label} ({preset.sqft})
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <input
                type="range"
                min="600"
                max="8000"
                step="50"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-neutral-950"
              />
              <div className="shrink-0 flex items-center gap-1.5">
                <input
                  type="number"
                  min="500"
                  max="15000"
                  value={area}
                  onChange={(e) => setArea(Math.max(500, Number(e.target.value) || 500))}
                  className="w-24 px-2.5 py-1 text-sm font-bold text-slate-900 border border-slate-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-neutral-950"
                />
                <span className="text-xs font-semibold text-slate-600">Sq.Ft</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Carpet Area: <strong className="text-slate-900">~{calculations.carpetArea} Sq.Ft</strong> (78% usable floor)</span>
              <span>Range: 600 – 8,000 Sq.Ft</span>
            </div>
          </div>

          {/* 4. Specification Package & Material Quality */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-neutral-950 text-white text-[11px] font-bold flex items-center justify-center">4</span>
                <span>Civil Specification Tier</span>
              </label>
              <span className="text-[11px] font-bold text-neutral-950">
                ₹{baseRates[grade][scope].toLocaleString("en-IN")} / Sq.Ft
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  id: "standard",
                  title: "Standard IS-Code",
                  subtitle: "Solid concrete blocks, Fe500 steel, M20 mix, standard vitrified tiles",
                  rate: baseRates.standard[scope]
                },
                {
                  id: "premium",
                  title: "Premium Engineering",
                  subtitle: "Porotherm clay blocks, Fe550D TMT, M25 concrete, 4x2 nano tiles, Jaquar",
                  rate: baseRates.premium[scope],
                  recommended: true
                },
                {
                  id: "luxury",
                  title: "Luxury Turnkey",
                  subtitle: "Italian Statuario marble, Fe550D epoxy rebar, M30 mix, teakwood, Grohe",
                  rate: baseRates.luxury[scope]
                }
              ].map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setGrade(tier.id as GradeType)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                    grade === tier.id
                      ? "border-neutral-950 bg-neutral-50 ring-2 ring-neutral-950/20 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  {tier.recommended && (
                    <span className="absolute -top-2 right-3 text-[9px] font-extrabold uppercase bg-neutral-950 text-white px-2 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <div className="text-xs font-extrabold text-slate-950">{tier.title}</div>
                    <div className="text-[11px] text-slate-500 mt-1 leading-snug font-normal">
                      {tier.subtitle}
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Base Rate</span>
                    <span className="text-xs font-black text-neutral-950">₹{tier.rate} / sq.ft</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 5. Soil & Substructure Foundation */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-2">
              <span className="w-5 h-5 rounded-full bg-neutral-950 text-white text-[11px] font-bold inline-flex items-center justify-center mr-1.5">5</span>
              Plot Soil &amp; Substructure Foundation
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: "normal", label: "Hard Red / Gravel Soil", desc: "M25 Isolated Column Footings", extra: "+₹0 / sq.ft" },
                { id: "clay", label: "Clay / Black Cotton", desc: "Engineered Raft cum Tie-Beam", extra: "+₹120 / sq.ft" },
                { id: "rocky", label: "Rocky Strata Ground", desc: "Hydraulic Breaker & Anchor Footing", extra: "+₹85 / sq.ft" }
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSoil(s.id as SoilType)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    soil === s.id
                      ? "border-neutral-950 bg-neutral-950 text-white shadow-xs"
                      : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <div className="text-xs font-bold">{s.label}</div>
                  <div className={`text-[10px] ${soil === s.id ? "text-slate-300" : "text-slate-500"}`}>{s.desc}</div>
                  <div className={`text-[10px] font-extrabold mt-1 ${soil === s.id ? "text-neutral-200" : "text-neutral-950"}`}>{s.extra}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 6. Optional Civil Infrastructure Add-ons */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-2.5">
              <span className="w-5 h-5 rounded-full bg-neutral-950 text-white text-[11px] font-bold inline-flex items-center justify-center mr-1.5">6</span>
              Optional Site Civil Add-Ons (Select all that apply)
            </label>
            <div className="space-y-2">
              {COMMON_ADDONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                const displayCost = addon.isPerSqFt 
                  ? `₹${(addon.cost * area).toLocaleString("en-IN")} (₹${addon.cost}/sq.ft)`
                  : `₹${addon.cost.toLocaleString("en-IN")} Flat`;

                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-slate-50 border-neutral-950 shadow-xs"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 text-neutral-950">
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 fill-neutral-950 text-white" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{addon.name}</div>
                        <div className="text-[10px] text-slate-500 font-normal">{addon.description}</div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-black text-neutral-950">{displayCost}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: ESTIMATION OUTPUT & LIVE BOQ TAKEOFF
           ========================================================================= */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm sticky top-28">
            {/* Top Total Amount Banner */}
            <div className="pb-4 border-b border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
                  Total Indicative Civil Investment
                </span>
                <span className="text-[11px] font-bold bg-white text-neutral-950 px-2 py-0.5 rounded border border-slate-200 shadow-xs">
                  {calculations.timeline} Handover
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-1">
                ₹{calculations.totalEstimate.toLocaleString("en-IN")}
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-2 font-medium">
                <span>Effective Rate: <strong className="text-neutral-950">₹{calculations.blendedRatePerSqFt} / Sq.Ft</strong></span>
                <span>•</span>
                <span>Area: <strong className="text-neutral-950">{area} Sq.Ft</strong></span>
                <span>•</span>
                <span>Elevation: <strong className="text-neutral-950">{floors}</strong></span>
              </div>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1 my-4 p-1 bg-white rounded-xl border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveTab("milestones")}
                className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-all cursor-pointer ${
                  activeTab === "milestones"
                    ? "bg-neutral-950 text-white shadow-xs"
                    : "text-slate-600 hover:text-black"
                }`}
              >
                Milestones
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("materials")}
                className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-all cursor-pointer ${
                  activeTab === "materials"
                    ? "bg-neutral-950 text-white shadow-xs"
                    : "text-slate-600 hover:text-black"
                }`}
              >
                Materials BOQ
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("specs")}
                className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-all cursor-pointer ${
                  activeTab === "specs"
                    ? "bg-neutral-950 text-white shadow-xs"
                    : "text-slate-600 hover:text-black"
                }`}
              >
                IS Codes
              </button>
            </div>

            {/* Tab 1: Stage-Wise Milestone Payment Schedule */}
            {activeTab === "milestones" && (
              <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>100% Milestone Escrow Schedule</span>
                  <span>Amount (INR)</span>
                </div>
                {calculations.milestones.map((m) => (
                  <div key={m.stage} className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-xs flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-[10px] bg-slate-100 text-slate-800 px-1.5 py-0.2 rounded">
                          {m.stage} ({m.pct}%)
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold">{m.duration}</span>
                      </div>
                      <div className="font-bold text-slate-900 truncate mt-0.5">{m.title}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-black text-neutral-950">₹{m.amount.toLocaleString("en-IN")}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Raw Materials Takeoff (IS 456-2000 Thumb-Rules) */}
            {activeTab === "materials" && (
              <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1 text-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Estimated Raw Material Quantities Takeoff
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <span className="text-slate-700 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-neutral-950" />
                    Fe550D TMT Reinforcement Steel
                  </span>
                  <span className="font-black text-slate-950">{calculations.steelTonnes} Tonnes</span>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <span className="text-slate-700 flex items-center gap-1.5">
                    <HardHat className="w-3.5 h-3.5 text-neutral-950" />
                    53-Grade OPC / PPC Cement
                  </span>
                  <span className="font-black text-slate-950">~{calculations.cementBags} Bags (50kg)</span>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <span className="text-slate-700 flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-neutral-950" />
                    Graded 20mm Granite Jelly &amp; M-Sand
                  </span>
                  <span className="font-black text-slate-950">~{calculations.aggregatesCft} Cu.Ft</span>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <span className="text-slate-700 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-neutral-950" />
                    High-Density Masonry Blocks / Bricks
                  </span>
                  <span className="font-black text-slate-950">~{calculations.bricksUnits.toLocaleString("en-IN")} Units</span>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <span className="text-slate-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-neutral-950" />
                    Vitrified Nano-Glazed / Marble Flooring
                  </span>
                  <span className="font-black text-slate-950">~{calculations.flooringSqFt} Sq.Ft</span>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <span className="text-slate-700 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-950" />
                    Exterior Silicone Weathercoat &amp; Emulsion
                  </span>
                  <span className="font-black text-slate-950">~{calculations.paintLitres} Litres</span>
                </div>
              </div>
            )}

            {/* Tab 3: IS Engineering Standards & Quality Compliance */}
            {activeTab === "specs" && (
              <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1 text-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Structural Codes &amp; Quality Assurances
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-neutral-950" />
                    IS 456-2000 RCC Code Compliant
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 font-normal">
                    Concrete mix dynamically audited with digital compression testing cubes at 7-day and 28-day intervals.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-neutral-950" />
                    IS 1893:2016 Seismic Zone-III Resilience
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 font-normal">
                    Ductile rebar detailing per IS 13920 with high-shear node tie spacing protecting your family.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-neutral-950" />
                    10-Year Bonded Structural Warranty
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 font-normal">
                    Guaranteed foundation stability, anti-termite chemical ground barrier, and zero settlement defects.
                  </p>
                </div>
              </div>
            )}

            {/* CTA & Actions */}
            <div className="mt-5 pt-4 border-t border-slate-200 space-y-2.5">
              <Link
                href={`/contact?model=${encodeURIComponent(modelType)}&area=${area}&floors=${floors}&grade=${grade}&soil=${soil}&cost=${calculations.totalEstimate}`}
                className="w-full flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-black/20 text-xs transition-all active:scale-[0.99]"
              >
                <span>Request Site Inspection &amp; Lock Fixed BOQ</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save BOQ</span>
                </button>

                <a
                  href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs font-bold transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Civil Desk</span>
                </a>
              </div>

              <p className="text-[10px] text-slate-500 text-center mt-1 flex items-center justify-center gap-1 font-medium">
                <Info className="w-3 h-3 text-slate-400 shrink-0" />
                <span>Indicative estimate. Final BOQ confirmed after complimentary site survey in Madurai.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
