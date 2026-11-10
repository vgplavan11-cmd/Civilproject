"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  X, 
  Download, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Home, 
  Hammer
} from "lucide-react";
import { HouseModel } from "@/data/projectsData";

interface ProjectSpecModalProps {
  model: HouseModel | null;
  onClose: () => void;
}

export default function ProjectSpecModal({ model, onClose }: ProjectSpecModalProps) {
  if (!model) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded border border-blue-200">
                {model.type} Blueprint
              </span>
              <span className="text-xs text-slate-500 font-medium">Model ID: {model.id}</span>
            </div>
            <h2 className="text-xl font-black text-slate-950 mt-1">{model.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8">
          {/* Floor Plan Blueprint Diagram */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                Civil Engineering 2D Floor Layout &amp; Column Grid
              </h3>
              <span className="text-xs text-blue-600 font-medium">IS-Code Compliant Layout</span>
            </div>
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 p-2 sm:p-4 relative">
              <div className="relative aspect-[16/10] w-full bg-white rounded-lg border border-slate-200 overflow-hidden">
                <Image
                  src={model.image}
                  alt={`${model.title} architectural blueprint`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Built-Up Area</p>
              <p className="text-base font-extrabold text-blue-700 mt-0.5">{model.builtUpArea}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Carpet Area</p>
              <p className="text-base font-extrabold text-slate-900 mt-0.5">{model.carpetArea}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Configuration</p>
              <p className="text-base font-extrabold text-slate-900 mt-0.5">
                {model.bedrooms > 0 ? `${model.bedrooms} BHK` : "Commercial"} | {model.bathrooms} Baths
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Est. Handover</p>
              <p className="text-base font-extrabold text-emerald-700 mt-0.5">{model.estimatedDuration}</p>
            </div>
          </div>

          {/* Room-By-Room Dimension Schedule */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
              <Home className="w-4 h-4 text-blue-600" />
              Room Dimension Schedule
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-700">Living &amp; Dining Hall:</span>
                <span className="font-bold text-slate-900">{model.floorPlanDetails.livingRoom}</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-700">Master Bedroom:</span>
                <span className="font-bold text-slate-900">{model.floorPlanDetails.masterBedroom}</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-700">Bedroom 2:</span>
                <span className="font-bold text-slate-900">{model.floorPlanDetails.secondBedroom}</span>
              </div>
              {model.floorPlanDetails.thirdBedroom && (
                <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-semibold text-slate-700">Bedroom 3 / Study:</span>
                  <span className="font-bold text-slate-900">{model.floorPlanDetails.thirdBedroom}</span>
                </div>
              )}
              <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-700">Kitchen &amp; Utility:</span>
                <span className="font-bold text-slate-900">{model.floorPlanDetails.kitchenUtility}</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-700">Balcony &amp; Sit-out:</span>
                <span className="font-bold text-slate-900">{model.floorPlanDetails.balconyArea}</span>
              </div>
            </div>
          </div>

          {/* Comprehensive Civil Structural Specifications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
              <Hammer className="w-4 h-4 text-blue-600" />
              Structural &amp; Civil Engineering Specifications
            </h3>
            <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white hover:bg-slate-50">
                <span className="font-bold text-slate-900">Foundation Engineering</span>
                <span className="sm:col-span-2 text-slate-600">{model.specs.foundation}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white hover:bg-slate-50">
                <span className="font-bold text-slate-900">Superstructure / RCC</span>
                <span className="sm:col-span-2 text-slate-600">{model.specs.superstructure}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white hover:bg-slate-50">
                <span className="font-bold text-slate-900">Masonry &amp; Partitions</span>
                <span className="sm:col-span-2 text-slate-600">{model.specs.masonry}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white hover:bg-slate-50">
                <span className="font-bold text-slate-900">Flooring &amp; Skirting</span>
                <span className="sm:col-span-2 text-slate-600">{model.specs.flooring}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white hover:bg-slate-50">
                <span className="font-bold text-slate-900">Doors &amp; Fenestration</span>
                <span className="sm:col-span-2 text-slate-600">{model.specs.doorsWindows}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white hover:bg-slate-50">
                <span className="font-bold text-slate-900">Plumbing &amp; Sanitary</span>
                <span className="sm:col-span-2 text-slate-600">{model.specs.plumbingSanitary}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white hover:bg-slate-50">
                <span className="font-bold text-slate-900">Electrical &amp; Switchgear</span>
                <span className="sm:col-span-2 text-slate-600">{model.specs.electrical}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white hover:bg-slate-50">
                <span className="font-bold text-slate-900">Waterproofing System</span>
                <span className="sm:col-span-2 text-slate-600">{model.specs.waterproofing}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-white hover:bg-slate-50">
                <span className="font-bold text-slate-900">Exterior Elevation Finish</span>
                <span className="sm:col-span-2 text-slate-600">{model.specs.exteriorFinish}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Backed by Elite Homes 10-Year Structural Guarantee</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                alert(`Civil specification sheet for ${model.title} queued for download. You can also contact our engineering desk for customized CAD files.`);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-slate-300 rounded-lg text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Spec PDF</span>
            </button>
            <Link
              href={`/contact?model=${encodeURIComponent(model.title)}`}
              onClick={onClose}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-bold text-white transition-colors shadow-sm"
            >
              <span>Book Site Visit / Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

