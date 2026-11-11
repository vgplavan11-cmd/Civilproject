"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Ruler, 
  CheckCircle2, 
  Calculator 
} from "lucide-react";
import { CIVIL_RAIL_PROJECTS } from "@/data/civilRailItems";
import { houseProjects, projectFilters } from "@/data/projectsData";
import PictureRailGallery from "@/components/ui/picture-rail-gallery";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects = houseProjects.filter((project) => {
    if (selectedCategory === "all") return true;
    return project.type === selectedCategory;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* =========================================================================
          1. PAGE HERO (Shipyon page-hero pattern with eyebrow dot & Mars Black title)
         ========================================================================= */}
      <section className="bg-slate-50 border-b border-slate-200 pt-36 sm:pt-44 md:pt-48 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Architectural Blueprint Catalog</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
              House Models &amp; Design Specifications
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
              Explore our turnkey residential house models (2BHK, 3BHK, and Custom Villas) alongside commercial infrastructure. Each plan is engineered with comprehensive RCC structural specifications, high-grade materials, and Vastu compliance.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE CATEGORY FILTER TABS & FLOATING CATALOG GRID (Shipyon products-section)
         ========================================================================= */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Shipyon-style Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {projectFilters.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-neutral-950 text-white shadow-lg shadow-black/20 scale-105"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Floating Product Cards Grid (Shipyon product-card--floating pattern) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-neutral-950 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-white/20">
                        {project.type}
                      </span>
                      <span className="bg-amber-400 text-black text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-sm">
                        {project.builtUpArea}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] font-mono text-slate-300 block">
                        Estimated Budget: {project.baseCost}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-slate-950 tracking-tight group-hover:text-neutral-800 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {project.subtitle}
                    </p>

                    {/* Structural Specification Badges */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-950 shrink-0" />
                        <span>IS 456 M25 Mix</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-950 shrink-0" />
                        <span>Fe550D Rebar</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-950 shrink-0" />
                        <span>100% Vastu</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-950 shrink-0" />
                        <span>10-Yr Warranty</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-neutral-950 hover:bg-black text-white text-xs font-bold py-3 rounded-xl shadow-sm transition-all active:scale-95"
                  >
                    <span>View Blueprint Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/estimator?model=${encodeURIComponent(project.title)}&area=${encodeURIComponent(project.builtUpArea.replace(/[^0-9]/g, ""))}`}
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-800 transition-colors"
                    title="Estimate BOQ for this model"
                  >
                    <Calculator className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. INTERACTIVE PICTURE RAIL ELEVATION GALLERY
         ========================================================================= */}
      <section className="border-b border-slate-200 bg-white pt-6 pb-2">
        <PictureRailGallery
          items={CIVIL_RAIL_PROJECTS}
          eyebrow="Architectural Elevation Showcase • Madurai Region"
          heading="Interactive Elevation &amp; House Model Gallery"
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
          4. TECHNICAL COMPARISON MATRIX SECTION
         ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
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
                  <th className="py-3.5 px-4 text-neutral-300">2BHK Horizon Model</th>
                  <th className="py-3.5 px-4 text-neutral-300">3BHK Royal Palm Model</th>
                  <th className="py-3.5 px-4 text-neutral-300">4BHK Sovereign Villa</th>
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-8 sm:p-12 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
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
    </div>
  );
}
