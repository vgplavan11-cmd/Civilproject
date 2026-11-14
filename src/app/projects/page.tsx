"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Ruler, 
  Filter, 
  CheckCircle2, 
  Building2, 
  Home, 
  Sparkles, 
  X, 
  Clock, 
  Eye, 
  Layers
} from "lucide-react";
import { CIVIL_RAIL_PROJECTS } from "@/data/civilRailItems";
import { houseProjects, HouseModel } from "@/data/projectsData";
import PictureRailGallery from "@/components/ui/picture-rail-gallery";
import ProjectSpecModal from "@/components/ProjectSpecModal";

type FilterType = "all" | "2bhk" | "3bhk" | "special" | "villa" | "commercial";

interface FilterOption {
  id: FilterType;
  label: string;
  icon?: React.ReactNode;
  count: number;
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedSpecModel, setSelectedSpecModel] = useState<HouseModel | null>(null);

  // Filter options with pre-calculated counts
  const filterOptions: FilterOption[] = useMemo(() => [
    { 
      id: "all", 
      label: "All Models", 
      count: CIVIL_RAIL_PROJECTS.length 
    },
    { 
      id: "2bhk", 
      label: "2BHK Models", 
      icon: <Home className="w-3.5 h-3.5" />,
      count: CIVIL_RAIL_PROJECTS.filter(p => p.type === "2BHK" || p.id.includes("2bhk")).length 
    },
    { 
      id: "3bhk", 
      label: "3BHK Models", 
      icon: <Home className="w-3.5 h-3.5" />,
      count: CIVIL_RAIL_PROJECTS.filter(p => p.type === "3BHK" || p.id.includes("3bhk")).length 
    },
    { 
      id: "special", 
      label: "Special Models", 
      icon: <Sparkles className="w-3.5 h-3.5" />,
      count: CIVIL_RAIL_PROJECTS.filter(p => p.category === "special" || p.type === "Villa" || p.type === "Commercial").length 
    },
    { 
      id: "villa", 
      label: "Luxury Villa", 
      icon: <Sparkles className="w-3.5 h-3.5" />,
      count: CIVIL_RAIL_PROJECTS.filter(p => p.type === "Villa" || p.id.includes("villa")).length 
    },
    { 
      id: "commercial", 
      label: "Commercial", 
      icon: <Building2 className="w-3.5 h-3.5" />,
      count: CIVIL_RAIL_PROJECTS.filter(p => p.type === "Commercial" || p.id.includes("commercial")).length 
    },
  ], []);

  // Filtered rail gallery items
  const filteredRailProjects = useMemo(() => {
    if (activeFilter === "all") return CIVIL_RAIL_PROJECTS;
    if (activeFilter === "2bhk") {
      return CIVIL_RAIL_PROJECTS.filter(p => p.type === "2BHK" || p.id.includes("2bhk"));
    }
    if (activeFilter === "3bhk") {
      return CIVIL_RAIL_PROJECTS.filter(p => p.type === "3BHK" || p.id.includes("3bhk"));
    }
    if (activeFilter === "special") {
      return CIVIL_RAIL_PROJECTS.filter(p => p.category === "special" || p.type === "Villa" || p.type === "Commercial");
    }
    if (activeFilter === "villa") {
      return CIVIL_RAIL_PROJECTS.filter(p => p.type === "Villa" || p.id.includes("villa"));
    }
    if (activeFilter === "commercial") {
      return CIVIL_RAIL_PROJECTS.filter(p => p.type === "Commercial" || p.id.includes("commercial"));
    }
    return CIVIL_RAIL_PROJECTS;
  }, [activeFilter]);

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
          1. PAGE HERO & TYPOLOGY FILTER CONTROLS
         ========================================================================= */}
      <section className="bg-slate-50 border-b border-slate-200 pt-36 sm:pt-44 md:pt-48 pb-10 sm:pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 text-white text-[11px] font-semibold tracking-wide uppercase mb-4 shadow-sm">
              <Building2 className="w-3.5 h-3.5" />
              <span>Architectural Models &amp; Elevations</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
              House Models &amp; Design Specifications
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
              Explore our turnkey residential house models (2BHK, 3BHK, and Special Models including Luxury Villas and Commercial complexes). Each model is engineered with comprehensive RCC structural specifications, high-grade Fe550D rebar, and Vastu compliance.
            </p>
          </div>

          {/* PROJECT TYPOLOGY FILTER BAR */}
          <div className="mt-8 pt-6 border-t border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-neutral-950" />
                  Filter by Project Type:
                </span>
              </div>

              {/* Active Filter Clear Tag */}
              {activeFilter !== "all" && (
                <button
                  onClick={() => setActiveFilter("all")}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 bg-white border border-slate-300 hover:border-neutral-950 px-3 py-1 rounded-full transition-all self-start sm:self-auto cursor-pointer"
                >
                  <span>Filter: <strong>{activeLabel}</strong></span>
                  <X className="w-3.5 h-3.5 text-slate-500 hover:text-black" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-3.5">
              {filterOptions.map((option) => {
                const isActive = activeFilter === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setActiveFilter(option.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-neutral-950 text-white shadow-md shadow-neutral-950/20 ring-2 ring-neutral-950/20 border-neutral-950"
                        : "bg-white text-slate-700 hover:text-neutral-950 hover:bg-slate-100/80 border border-slate-200"
                    }`}
                  >
                    {option.icon && <span>{option.icon}</span>}
                    <span>{option.label}</span>
                    <span 
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
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

            {/* Status indicator */}
            <div className="mt-3 text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-neutral-950">{filteredRailProjects.length}</span> of {CIVIL_RAIL_PROJECTS.length} architectural models
              {activeFilter !== "all" && (
                <span className="text-slate-600"> matching &ldquo;{activeLabel}&rdquo;</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE PICTURE RAIL ELEVATION GALLERY (FILTERED)
         ========================================================================= */}
      <section className="border-b border-slate-200 bg-white pt-6 pb-4">
        <PictureRailGallery
          key={activeFilter}
          items={filteredRailProjects}
          eyebrow={
            activeFilter === "all"
              ? "Architectural Elevation Showcase • Madurai Region"
              : `${activeLabel} Elevation Showcase (${filteredRailProjects.length} Models)`
          }
          heading="Interactive Elevation & House Model Gallery"
          caption="Brush or slide along the hanging brass rail to illuminate each house model. Lift any frame to inspect the structural engineering label."
          autoplay={true}
          labels={{
            front: "Elevation View",
            back: "Civil Specs & Dossier",
            close: "Close Model",
            open: "Lift for structural specs"
          }}
          action={
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-neutral-950 hover:bg-black text-white px-6 py-2.5 text-xs font-bold shadow-md shadow-black/25 transition-all active:scale-[0.98]"
              >
                Request Custom Site Elevation
              </Link>
              <Link
                href="/contact?type=estimate"
                className="rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 px-5 py-2.5 text-xs font-bold text-slate-800 transition-colors"
              >
                Schedule Site Soil &amp; Level Testing
              </Link>
            </div>
          }
        />
      </section>

      {/* =========================================================================
          3. ARCHITECTURAL MODELS SHOWCASE GRID (FILTERED)
         ========================================================================= */}
      <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5 text-neutral-950" />
                <span>Architectural Models Dossier</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                {activeFilter === "all" ? "All Engineering Models" : `${activeLabel}`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Comprehensive blueprints, floor areas, structural safety ratings, and turnkey investment packages for every model.
              </p>
            </div>

            {/* Current Filter Pill Display */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Visible Models:</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold text-neutral-950 shadow-sm">
                {filteredHouseProjects.length} {filteredHouseProjects.length === 1 ? "Model" : "Models"}
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          {filteredHouseProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredHouseProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  {/* Model Image Preview */}
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-md bg-neutral-950/90 text-white text-[11px] font-bold backdrop-blur-sm border border-neutral-700">
                        {project.type}
                      </span>
                      {project.badge && (
                        <span className="px-2.5 py-1 rounded-md bg-white/90 text-neutral-950 text-[11px] font-bold backdrop-blur-sm shadow-sm">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Bottom Pricing & Area Tag */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-300">Turnkey Budget</div>
                        <div className="text-base font-black tracking-tight">{project.baseCost.split("/")[0]}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase font-bold text-slate-300">Built-Up Area</div>
                        <div className="text-xs font-black">{project.builtUpArea}</div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className="text-lg font-black text-slate-950 tracking-tight">
                          {project.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {project.status}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed font-normal">
                        {project.subtitle}
                      </p>

                      {/* Quick Specs Grid */}
                      <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs mb-4">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Carpet Area</span>
                          <span className="font-bold text-slate-800">{project.carpetArea}</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Floors</span>
                          <span className="font-bold text-slate-800">{project.floors}</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Bedrooms</span>
                          <span className="font-bold text-slate-800">{project.bedrooms} Beds, {project.bathrooms} Baths</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Execution</span>
                          <span className="font-bold text-slate-800">{project.estimatedDuration}</span>
                        </div>
                      </div>

                      {/* Engineering Highlights */}
                      <ul className="space-y-1.5 mb-5 text-[11px] text-slate-600">
                        {project.keyHighlights.slice(0, 2).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                      <button
                        onClick={() => setSelectedSpecModel(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold py-2.5 px-3 rounded-xl border border-slate-200 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick Specs</span>
                      </button>
                      <Link
                        href={`/projects/${project.id}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-neutral-950 hover:bg-black text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-sm transition-all"
                      >
                        <span>View Plan</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
              <Building2 className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900">No models match the selected filter</h3>
              <p className="text-xs text-slate-500 mt-1">Please reset the filter to view all models.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-4 px-4 py-2 rounded-xl bg-neutral-950 text-white text-xs font-bold hover:bg-black"
              >
                Reset to All Models
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          4. TECHNICAL COMPARISON MATRIX SECTION
         ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Civil Specification Comparison Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Compare structural engineering parameters and materials across standard 2BHK, 3BHK, and Villa models.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-sm">
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
          5. CUSTOM CIVIL BLUEPRINTS CTA
         ========================================================================= */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-8 sm:p-12 rounded-2xl border-2 border-dashed border-slate-300 bg-white">
            <Ruler className="w-10 h-10 text-neutral-950 mx-auto mb-3" />
            <h3 className="text-2xl font-black text-slate-950">
              Need a Custom Civil Blueprint for Your Plot?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg mx-auto">
              Our structural engineers will analyze your site topography, soil bearing test, and municipal guidelines to draft a custom 2BHK, 3BHK, or multi-storey blueprint.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white text-xs font-bold px-6 py-3 rounded-lg shadow-sm"
              >
                <span>Upload Plot Details / Request Custom Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SPECS MODAL */}
      <ProjectSpecModal
        model={selectedSpecModel}
        onClose={() => setSelectedSpecModel(null)}
      />
    </div>
  );
}