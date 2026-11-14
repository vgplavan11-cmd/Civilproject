"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Ruler, 
  Filter, 
  Building2, 
  Home, 
  Sparkles, 
  X 
} from "lucide-react";
import { houseProjects } from "@/data/projectsData";

type FilterType = "all" | "2bhk" | "3bhk" | "special" | "villa" | "commercial";

interface FilterOption {
  id: FilterType;
  label: string;
  icon?: React.ReactNode;
  count: number;
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  // Filter options with pre-calculated counts
  const filterOptions: FilterOption[] = useMemo(() => [
    { 
      id: "all", 
      label: "All Models", 
      count: houseProjects.length 
    },
    { 
      id: "2bhk", 
      label: "2BHK Models", 
      icon: <Home className="w-3.5 h-3.5" />,
      count: houseProjects.filter(p => p.type === "2BHK").length 
    },
    { 
      id: "3bhk", 
      label: "3BHK Models", 
      icon: <Home className="w-3.5 h-3.5" />,
      count: houseProjects.filter(p => p.type === "3BHK").length 
    },
    { 
      id: "special", 
      label: "Special Models", 
      icon: <Sparkles className="w-3.5 h-3.5" />,
      count: houseProjects.filter(p => p.type === "Villa" || p.type === "Commercial" || p.id.includes("villa") || p.id.includes("commercial")).length 
    },
    { 
      id: "villa", 
      label: "Luxury Villa", 
      icon: <Sparkles className="w-3.5 h-3.5" />,
      count: houseProjects.filter(p => p.type === "Villa").length 
    },
    { 
      id: "commercial", 
      label: "Commercial", 
      icon: <Building2 className="w-3.5 h-3.5" />,
      count: houseProjects.filter(p => p.type === "Commercial").length 
    },
  ], []);

  // Filtered catalog cards from houseProjects
  const filteredHouseProjects = useMemo(() => {
    if (activeFilter === "all") return houseProjects;
    if (activeFilter === "2bhk") {
      return houseProjects.filter(p => p.type === "2BHK");
    }
    if (activeFilter === "3bhk") {
      return houseProjects.filter(p => p.type === "3BHK");
    }
    if (activeFilter === "special") {
      return houseProjects.filter(p => p.type === "Villa" || p.type === "Commercial" || p.id.includes("villa") || p.id.includes("commercial"));
    }
    if (activeFilter === "villa") {
      return houseProjects.filter(p => p.type === "Villa");
    }
    if (activeFilter === "commercial") {
      return houseProjects.filter(p => p.type === "Commercial");
    }
    return houseProjects;
  }, [activeFilter]);

  const activeLabel = useMemo(() => {
    return filterOptions.find(f => f.id === activeFilter)?.label || "All Models";
  }, [activeFilter, filterOptions]);

  return (
    <div className="bg-white min-h-screen">
      {/* =========================================================================
          1. PAGE HERO & TYPOLOGY FILTER
         ========================================================================= */}
      <section className="bg-slate-50 border-b border-slate-200 pt-32 sm:pt-40 md:pt-44 pb-8 sm:pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 text-white text-[11px] font-semibold tracking-wide uppercase mb-3 shadow-xs">
              <Building2 className="w-3.5 h-3.5" />
              <span>Architectural House Models</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
              House Models &amp; Design Plans
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-normal">
              Explore our turnkey residential house models (2BHK, 3BHK, and Special Models including Luxury Villas and Commercial complexes) engineered with complete RCC structural specifications and Vastu compliance.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="mt-6 pt-5 border-t border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-neutral-950" />
                Filter by Type:
              </span>

              {activeFilter !== "all" && (
                <button
                  onClick={() => setActiveFilter("all")}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 bg-white border border-slate-300 hover:border-neutral-950 px-2.5 py-0.5 rounded-full transition-all self-start sm:self-auto cursor-pointer shadow-xs"
                >
                  <span>Filter: <strong>{activeLabel}</strong></span>
                  <X className="w-3.5 h-3.5 text-slate-500 hover:text-black" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-2.5">
              {filterOptions.map((option) => {
                const isActive = activeFilter === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setActiveFilter(option.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-neutral-950 text-white shadow-sm ring-1 ring-neutral-950 border-neutral-950"
                        : "bg-white text-slate-700 hover:text-neutral-950 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {option.icon && <span>{option.icon}</span>}
                    <span>{option.label}</span>
                    <span 
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                        isActive 
                          ? "bg-neutral-800 text-neutral-100" 
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {option.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-2.5 text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-neutral-950">{filteredHouseProjects.length}</span> of {houseProjects.length} models
              {activeFilter !== "all" && (
                <span className="text-slate-600"> matching &ldquo;{activeLabel}&rdquo;</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CLEAN & MINIMAL HOUSE MODEL BOXES
         ========================================================================= */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                {activeFilter === "all" ? "All House Models" : activeLabel}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Architectural floor plans and turnkey construction specifications.
              </p>
            </div>

            <span className="self-start sm:self-auto inline-flex items-center px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold text-neutral-950 shadow-xs">
              {filteredHouseProjects.length} {filteredHouseProjects.length === 1 ? "Model" : "Models"}
            </span>
          </div>

          {/* Simple, Readable Boxes Grid */}
          {filteredHouseProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredHouseProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-neutral-900 transition-all duration-300 flex flex-col group"
                >
                  {/* Clean Blueprint View without dark overlays */}
                  <div className="relative aspect-[16/10] bg-slate-50 border-b border-slate-100 flex items-center justify-center p-3 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-neutral-950 text-white text-[10px] font-bold">
                      {project.type}
                    </span>
                  </div>

                  {/* Clean, Simple Info */}
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-base font-black text-slate-950 tracking-tight group-hover:text-black">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 font-medium">
                        {project.builtUpArea} • {project.bedrooms} Beds, {project.bathrooms} Baths • {project.floors}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block leading-tight">Turnkey Package</span>
                        <span className="text-sm font-black text-slate-950">{project.baseCost.split("/")[0]}</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 bg-neutral-950 text-white text-xs font-bold py-1.5 px-3 rounded-lg group-hover:bg-black transition-colors">
                        <span>View Plan</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white rounded-xl border border-dashed border-slate-300 p-6">
              <Building2 className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-slate-900">No models match the selected filter</h3>
              <p className="text-xs text-slate-500 mt-1">Please reset the filter to view all models.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-3 px-3.5 py-1.5 rounded-lg bg-neutral-950 text-white text-xs font-bold hover:bg-black cursor-pointer"
              >
                Reset to All Models
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          3. TECHNICAL COMPARISON MATRIX SECTION
         ========================================================================= */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Civil Specification Comparison Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Compare structural engineering parameters and materials across standard 2BHK, 3BHK, and Villa models.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto shadow-xs">
            <table className="w-full text-left text-xs text-slate-700 min-w-[720px]">
              <thead className="bg-[#0d0d0d] text-white font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Engineering Feature</th>
                  <th className="py-3.5 px-4 text-neutral-300">2BHK Modern Model</th>
                  <th className="py-3.5 px-4 text-neutral-300">3BHK Premium Model</th>
                  <th className="py-3.5 px-4 text-neutral-300">Special Luxury Villa Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900">Super Built-Up Area</td>
                  <td className="py-3 px-4 font-semibold text-neutral-950">1,140 Sq. Ft.</td>
                  <td className="py-3 px-4 font-semibold text-neutral-950">1,680 Sq. Ft.</td>
                  <td className="py-3 px-4 font-semibold text-neutral-950">3,150 Sq. Ft.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900">Structural Foundation</td>
                  <td className="py-3 px-4">Isolated RCC Footings (M25)</td>
                  <td className="py-3 px-4">Raft cum Column Footing (M30)</td>
                  <td className="py-3 px-4">Engineered Raft Foundation (M35)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900">Reinforcement Steel</td>
                  <td className="py-3 px-4">Fe550D High Ductility TMT</td>
                  <td className="py-3 px-4">Fe550D Corrosion Resistant</td>
                  <td className="py-3 px-4">Fe550D Epoxy Coated Option</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900">Masonry Material</td>
                  <td className="py-3 px-4">8&quot; Solid Aerated Blocks</td>
                  <td className="py-3 px-4">Wire-cut High Density Red Bricks</td>
                  <td className="py-3 px-4">Thermal Porotherm + Exposed Brick</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900">Flooring Finish</td>
                  <td className="py-3 px-4">800x800mm Vitrified Tiles</td>
                  <td className="py-3 px-4">1200x800mm Nano-glazed</td>
                  <td className="py-3 px-4">Imported Statuario Italian Marble</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900">Seismic Resilience</td>
                  <td className="py-3 px-4">Zone-III IS 1893:2016</td>
                  <td className="py-3 px-4">Zone-III IS 1893:2016</td>
                  <td className="py-3 px-4">Zone-IV Enhanced SMRF</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900">Warranty Coverage</td>
                  <td className="py-3 px-4 font-bold text-slate-900">10 Years Structural</td>
                  <td className="py-3 px-4 font-bold text-slate-900">10 Years Structural</td>
                  <td className="py-3 px-4 font-bold text-slate-900">15 Years Structural</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CUSTOM CIVIL BLUEPRINTS CTA
         ========================================================================= */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-6 sm:p-10 rounded-2xl border-2 border-dashed border-slate-300 bg-white shadow-xs">
            <Ruler className="w-9 h-9 text-neutral-950 mx-auto mb-2.5" />
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              Need a Custom Civil Blueprint for Your Plot?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg mx-auto">
              Our structural engineers will analyze your site topography, soil bearing test, and municipal guidelines to draft a custom 2BHK, 3BHK, or multi-storey blueprint.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white text-xs font-bold px-6 py-2.5 rounded-lg shadow-sm"
              >
                <span>Upload Plot Details / Request Custom Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
