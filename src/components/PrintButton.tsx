"use client";

import React from "react";
import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors shadow-2xs"
      title="Print or Save CAD Specification Sheet as PDF"
    >
      <Printer className="w-3.5 h-3.5 text-blue-600" />
      <span>Print Spec Sheet</span>
    </button>
  );
}

