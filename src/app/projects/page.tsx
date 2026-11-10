"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Ruler
} from "lucide-react";
import { CIVIL_RAIL_PROJECTS } from "@/data/civilRailItems";
import PictureRailGallery from "@/components/ui/picture-rail-gallery";

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-14 sm:py-18 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              House Models &amp; Design Specifications
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Explore our turnkey residential house models (2BHK, 3BHK, and Custom Villas) alongside commercial infrastructure. Each plan is engineered with comprehensive RCC structural specifications, high-grade materials, and Vastu compliance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Picture Rail Elevation Gallery */}
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
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 text-xs font-bold shadow-sm shadow-blue-500/20 transition-all active:scale-[0.98]"
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

      {/* 3. TECHNICAL COMPARISON MATRIX SECTION */}
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
              <thead className="bg-slate-900 text-white font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Engineering Feature</th>
                  <th className="py-3.5 px-4 text-blue-400">2BHK Horizon Model</th>
                  <th className="py-3.5 px-4 text-blue-400">3BHK Royal Palm Model</th>
                  <th className="py-3.5 px-4 text-blue-400">4BHK Sovereign Villa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900">Super Built-Up Area</td>
                  <td className="py-3 px-4 font-semibold text-blue-600">1,140 Sq. Ft.</td>
                  <td className="py-3 px-4 font-semibold text-blue-600">1,680 Sq. Ft.</td>
                  <td className="py-3 px-4 font-semibold text-blue-600">3,150 Sq. Ft.</td>
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

      {/* 4. CUSTOM CIVIL BLUEPRINTS CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-8 sm:p-12 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
            <Ruler className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-black text-slate-950">
              Need a Custom Civil Blueprint for Your Plot?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg mx-auto">
              Our structural engineers will analyze your site topography, soil bearing test, and municipal guidelines to draft a custom 2BHK, 3BHK, or multi-storey blueprint.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-3 rounded-lg shadow-sm"
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
