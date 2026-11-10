"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Layers, 
  Clock, 
  ArrowRight, 
  BarChart3, 
  HardHat, 
  Info
} from "lucide-react";

export default function CostEstimator() {
  const [modelType, setModelType] = useState<"2BHK" | "3BHK" | "Villa" | "Commercial">("2BHK");
  const [area, setArea] = useState<number>(1200);
  const [grade, setGrade] = useState<"standard" | "premium" | "luxury">("premium");

  // Rates per sq.ft based on grade
  const rates = {
    standard: 1850,
    premium: 2250,
    luxury: 2850
  };

  const currentRate = rates[grade];
  const totalCost = area * currentRate;

  // Material estimates based on standard civil engineering thumb rules
  // Steel: approx 4.0 - 4.5 kg / sq.ft => 0.0042 tonnes / sq.ft
  const steelTonnes = ((area * 4.2) / 1000).toFixed(1);
  // Cement: approx 0.40 - 0.45 bags / sq.ft
  const cementBags = Math.round(area * 0.42);
  // Sand / Aggregates: approx 1.8 - 2.1 cu.ft / sq.ft
  const aggregatesCft = Math.round(area * 1.95);

  // Time estimate
  const getDuration = () => {
    if (area <= 1200) return "6 - 8 Months";
    if (area <= 2000) return "8 - 10 Months";
    if (area <= 3500) return "10 - 13 Months";
    return "14 - 18 Months";
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
      {/* Decorative Blueprint Lines */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-3xl mb-8 relative z-10">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Calculate Your Project &amp; Material Estimate
        </h3>
        <p className="text-sm text-slate-600 mt-2">
          Get real-time indicative civil construction budget estimates based on built-up area, structural specifications, and materials compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Select Model Typology */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              1. Select Project Typology
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(
                [
                  { id: "2BHK", label: "2BHK Model", defaultArea: 1140 },
                  { id: "3BHK", label: "3BHK Model", defaultArea: 1680 },
                  { id: "Villa", label: "Luxury Villa", defaultArea: 2800 },
                  { id: "Commercial", label: "Commercial", defaultArea: 4500 }
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setModelType(item.id);
                    setArea(item.defaultArea);
                  }}
                  className={`py-2.5 px-3 text-xs font-bold rounded-lg border transition-all text-center ${
                    modelType === item.id
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Built-up Area Slider & Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-800">
                2. Built-Up Area (Sq. Ft.)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="600"
                  max="15000"
                  value={area}
                  onChange={(e) => setArea(Math.max(500, Number(e.target.value) || 500))}
                  className="w-28 px-3 py-1.5 text-sm font-bold text-slate-900 border border-slate-300 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-xs font-semibold text-slate-500">Sq. Ft.</span>
              </div>
            </div>
            <input
              type="range"
              min="600"
              max="6000"
              step="50"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>600 Sq.Ft (Compact)</span>
              <span>2,000 Sq.Ft (Family)</span>
              <span>6,000+ Sq.Ft (Estate)</span>
            </div>
          </div>

          {/* Step 3: Material & Finishing Grade */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              3. Specification &amp; Material Grade
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(
                [
                  {
                    id: "standard",
                    title: "Standard IS-Code",
                    sub: "Fe500 Steel + M20 Concrete",
                    rate: rates.standard
                  },
                  {
                    id: "premium",
                    title: "Premium Engineering",
                    sub: "Fe550D + Porotherm + Nano Tiles",
                    rate: rates.premium
                  },
                  {
                    id: "luxury",
                    title: "Luxury Turnkey",
                    sub: "Italian Marble + Smart Home",
                    rate: rates.luxury
                  }
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setGrade(item.id)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    grade === item.id
                      ? "border-blue-600 bg-blue-50/70 ring-1 ring-blue-600"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <p className="font-bold text-xs text-slate-900">{item.title}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{item.sub}</p>
                  <p className="text-xs font-bold text-blue-600 mt-2">
                    ₹{item.rate.toLocaleString("en-IN")} / sq.ft
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results & Breakdown Card */}
        <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
                Indicative Project Cost
              </span>
              <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                Verified Formula
              </span>
            </div>

            <div className="my-4">
              <div className="text-3xl sm:text-4xl font-black text-slate-950">
                ₹{totalCost.toLocaleString("en-IN")}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Estimated Turnkey Execution (Structure + Finishing + MEP)
              </p>
            </div>

            {/* Civil Material Estimation Breakdown */}
            <div className="space-y-2.5 pt-2 pb-4 text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-200/60">
                <span className="text-slate-600 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  Primary TMT Rebar (Fe550D)
                </span>
                <span className="font-bold text-slate-900">{steelTonnes} Metric Tonnes</span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-slate-200/60">
                <span className="text-slate-600 flex items-center gap-1.5">
                  <HardHat className="w-3.5 h-3.5 text-blue-600" />
                  Cement (Grade 53 / 43)
                </span>
                <span className="font-bold text-slate-900">~{cementBags} Bags</span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-slate-200/60">
                <span className="text-slate-600 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
                  Graded Aggregates &amp; M-Sand
                </span>
                <span className="font-bold text-slate-900">~{aggregatesCft} Cu. Ft.</span>
              </div>

              <div className="flex justify-between items-center py-1.5">
                <span className="text-slate-600 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  Estimated Turnaround Time
                </span>
                <span className="font-bold text-blue-700">{getDuration()}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <Link
              href={`/contact?model=${encodeURIComponent(modelType)}&area=${area}&grade=${grade}`}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-sm text-sm transition-all"
            >
              <span>Get Detailed Bill of Quantities (BOQ)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-[10px] text-slate-400 text-center mt-2 flex items-center justify-center gap-1">
              <Info className="w-3 h-3" />
              Final estimate subject to geotechnical soil test &amp; site topography.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

