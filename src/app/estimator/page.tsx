import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Ruler
} from "lucide-react";
import CostEstimator from "@/components/CostEstimator";
import CivilInvestmentStackingCards from "@/components/CivilInvestmentStackingCards";
import { companyInfo } from "@/data/companyData";

export const metadata = {
  title: "Civil Construction Cost & Material Estimator | Elite Homes",
  description: "Calculate real-time turnkey civil construction costs, structural steel quantities (Fe550D), cement bags, and project duration for 2BHK, 3BHK, and Villa models in Madurai.",
  keywords: "construction cost estimator, civil calculator, 2bhk cost Madurai, 3bhk building budget, steel and cement estimate, Elite Homes constructions"
};

export default function EstimatorPage() {
  const materialThumbRules = [
    { material: "Reinforcement Steel (Fe550D TMT)", factor: "4.0 – 4.5 Kg / Sq.Ft", compliance: "High ductility seismic zone resilience compliant with IS 1786" },
    { material: "Cement (OPC 53 & PPC)", factor: "0.40 – 0.45 Bags / Sq.Ft", compliance: "Batch-tested compressive cube strength complying with IS 8112" },
    { material: "Coarse & Fine Aggregates (M-Sand)", factor: "1.8 – 2.1 Cu.Ft / Sq.Ft", compliance: "Triple-washed river sand / certified graded 20mm granite jelly" },
    { material: "Solid Masonry Blocks / Bricks", factor: "18 – 22 Units / Sq.Ft", compliance: "High compressive strength (>4 N/mm²) with low water absorption" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-14 sm:py-18 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Civil Construction &amp; Material Estimator
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Plan your construction budget with transparent, code-compliant mathematical estimates. Calculate indicative turnkey costs, structural steel requirements, cement bag counts, and project timelines based on Tamil Nadu PWD and IS 456-2000 standards.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Cost Calculator */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CostEstimator />
        </div>
      </section>

      {/* 3. Cost Component Distribution Matrix */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Where Does Your Civil Investment Go?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every turnkey project executed by Elite Homes follows a transparent, itemized Bill of Quantities (BOQ) with zero hidden cost escalations.
            </p>
          </div>

          <CivilInvestmentStackingCards />
        </div>
      </section>

      {/* 4. Engineering Thumb-Rule Benchmark Table */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Standard Material Consumption Benchmarks
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Engineering consumption factors applied to generate your real-time material requirements.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-xs">
            <table className="w-full text-left text-xs text-slate-700 min-w-[640px]">
              <thead className="bg-[#0d0d0d] text-white font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Raw Material Component</th>
                  <th className="py-3.5 px-4 text-neutral-300">Standard Consumption Factor</th>
                  <th className="py-3.5 px-4">Civil Specification &amp; Quality Benchmark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {materialThumbRules.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{row.material}</td>
                    <td className="py-3.5 px-4 font-black text-neutral-950">{row.factor}</td>
                    <td className="py-3.5 px-4 text-slate-600">{row.compliance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Direct Site Survey / Soil Test Booking CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-8 sm:p-12 rounded-2xl border-2 border-dashed border-slate-300 bg-white">
            <Ruler className="w-10 h-10 text-neutral-950 mx-auto mb-3" />
            <h3 className="text-2xl font-black text-slate-950">
              Need a Custom Bill of Quantities (BOQ) for Your Site?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
              Our registered structural engineers will conduct a complimentary site elevation &amp; soil bearing capacity assessment at your plot in Madurai, providing a fixed, legally binding BOQ.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white text-xs font-bold px-6 py-3 rounded-lg shadow-sm"
              >
                <span>Request Site Inspection &amp; Fixed BOQ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-6 py-3 rounded-lg border border-slate-300"
              >
                <span>Call Civil Desk: {companyInfo.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

