import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Hammer, Layers, AlertCircle } from "lucide-react";
import { companyInfo } from "@/data/companyData";

export const metadata = {
  title: "Civil Contract Terms & Warranty Conditions | Elite Homes",
  description: "Standard turnkey civil contracting terms, 10-Year Structural Guarantee conditions, milestone billing protocols, and material testing policies.",
};

export default function TermsPage() {
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
            Civil Contract &amp; Structural Warranty Terms
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Effective Date: November 2026 &bull; MSME Reg: {companyInfo.licenseNo}
          </p>
        </div>
      </section>

      {/* Terms Body */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-xs sm:text-sm text-slate-700 space-y-8 leading-relaxed">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-neutral-950" />
              1. 10-Year Structural Guarantee Terms
            </h2>
            <p>
              Elite Homes warrants all RCC (Reinforced Cement Concrete) framed components—including isolated/raft foundation footings, plinth beams, columns, suspended roof slabs, and load-transferring lintels—against structural collapse, foundation settlement exceeding permissible IS 1904 limits, and catastrophic shear failure for a duration of ten (10) calendar years from the date of final project handover.
            </p>
            <p className="mt-2 text-slate-600">
              This warranty requires that the owner does not undertake unauthorized structural demolitions, puncture main load-bearing RCC columns, or exceed the approved live load capacity (e.g. adding unapproved overhead water tanks or additional floors without Elite Homes structural engineering sanction).
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2 flex items-center gap-2">
              <Hammer className="w-4 h-4 text-neutral-950" />
              2. Milestone-Based Billing &amp; Work Verification
            </h2>
            <p>
              All turnkey residential 2BHK, 3BHK, and villa contracts operate on stage-wise milestone billing. Payments are due only after the specified structural benchmark has been physically inspected by the assigned Site Engineer and certified against the approved Bill of Quantities (BOQ):
            </p>
            <ul className="space-y-1.5 pl-4 list-disc text-slate-600 mt-2">
              <li><strong className="text-slate-900">Milestone 1 (Mobilization &amp; Foundation):</strong> Excavation, PCC mud-mat, rebar cage footing, and stub columns.</li>
              <li><strong className="text-slate-900">Milestone 2 (Plinth &amp; DPC):</strong> Plinth beam pour, earth backfilling, and damp-proof course sealing.</li>
              <li><strong className="text-slate-900">Milestone 3 (Superstructure Casting):</strong> Column casting, beam-slab centering shuttering, and RMC monolithic pour.</li>
              <li><strong className="text-slate-900">Milestone 4 (Brickwork &amp; MEP Rough-ins):</strong> Solid block/brick masonry, door frames, and concealed CPVC/electrical pipes.</li>
              <li><strong className="text-slate-900">Milestone 5 (Plastering &amp; Waterproofing):</strong> Internal gypsum finish, external 2-coat plaster, and terrace waterproofing membrane.</li>
              <li><strong className="text-slate-900">Milestone 6 (Finishing &amp; Handover):</strong> Tiles, electrical switchgear, sanitary fixtures, painting, and deep clean.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-neutral-950" />
              3. Raw Material Authenticity &amp; Testing
            </h2>
            <p>
              Elite Homes commits to using only primary producer TMT steel rebars (Fe550D grade with batch test certificates) and fresh 53/43 grade cement. Cube compression test results (tested at 7 days and 28 days in our certified laboratory) are furnished to the client as part of the permanent structural dossier.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-neutral-950" />
              4. Change Orders &amp; Customizations
            </h2>
            <p>
              Any client-requested modifications to the architectural floor plans, electrical conduit points, or tile specifications after structural drawing approval will be documented via a formal Change Order (CO) specifying cost and timeline adjustments prior to execution.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Tender &amp; Legal Inquiries</h3>
            <p className="text-xs text-slate-600">
              For contract clarifications or to request a sample standard Turnkey Construction Agreement, please write to{" "}
              <a href={`mailto:${companyInfo.contact.projectEmail}`} className="text-neutral-950 font-semibold underline hover:text-black">
                {companyInfo.contact.projectEmail}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
