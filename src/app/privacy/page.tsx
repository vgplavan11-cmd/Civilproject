import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Lock, FileText, CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/data/companyData";

export const metadata = {
  title: "Privacy & Data Protection Policy | Elite Homes",
  description: "Privacy policy regarding client land survey documents, plot deeds, architectural CAD drafts, and confidential civil engineering records.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-200 pt-28 sm:pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-black mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Client Privacy &amp; Land Document Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Last Updated: November 2026 &bull; {companyInfo.name}
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-xs sm:text-sm text-slate-700 space-y-8 leading-relaxed">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-neutral-950" />
              1. Scope &amp; Engineering Confidentiality
            </h2>
            <p>
              At {companyInfo.name}, we recognize that planning a residential house or commercial complex involves sensitive property information, including title deeds, revenue survey maps, soil borehole stratigraphy reports, and structural drawings. We are committed to safeguarding all proprietary records shared during feasibility assessments, tender bidding, and turnkey site construction.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-neutral-950" />
              2. Information We Collect
            </h2>
            <p className="mb-2">When you request an estimate, schedule a site visit, or sign a construction agreement, we may collect:</p>
            <ul className="space-y-1.5 pl-4 list-disc text-slate-600">
              <li>Client contact details (Full name, phone number, email address, correspondence address).</li>
              <li>Site technical parameters (Plot dimensions, cadastral survey numbers, GPS coordinates, local municipal jurisdiction).</li>
              <li>Geotechnical reports (Standard Penetration Test logs, water table levels, soil bearing capacity data).</li>
              <li>Architectural preferences (Room requirements, Vastu specifications, finishes, and budget guidelines).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neutral-950" />
              3. Use of Technical Data
            </h2>
            <p>
              Your property details are utilized strictly by our in-house civil engineering desk for structural FEA load analysis, STAAD.Pro column-beam design, municipal sanction drafting, and raw material logistics. We never sell, lease, or monetize client records to third-party marketing brokers.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-neutral-950" />
              4. Document Storage &amp; CAD File Retention
            </h2>
            <p>
              Approved architectural 2D blueprints, 3D renders, and structural Bar Bending Schedules (BBS) are archived in our encrypted engineering repository for a minimum of 10 years to support our 10-Year Structural Guarantee inspections and future vertical expansion audits.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Have Questions Regarding Property Data?</h3>
            <p className="text-xs text-slate-600">
              Contact our Legal &amp; Compliance Officer at{" "}
              <a href={`mailto:${companyInfo.contact.email}`} className="text-neutral-950 font-semibold underline hover:text-black">
                {companyInfo.contact.email}
              </a>{" "}
              or visit our Engineering HQ at {companyInfo.contact.headOffice}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
