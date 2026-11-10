import React from "react";
import Link from "next/link";
import { HardHat, Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-white px-4 py-16 relative overflow-hidden">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10 bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-lg">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 border border-blue-200">
          <HardHat className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
          Civil Survey Code 404
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 mt-4 tracking-tight">
          Structural Reference Not Found
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          The requested civil engineering blueprint, house model, or document coordinates do not exist in our active project archive.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-5 py-2.5 rounded-lg transition-colors"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Browse House Models</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

