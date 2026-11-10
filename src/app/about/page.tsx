import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  FlaskConical, 
  CalendarCheck
} from "lucide-react";
import { companyInfo } from "@/data/companyData";

export const metadata = {
  title: "About Elite Homes | Building Spaces, Elevating Lives",
  description: "Learn about Elite Homes. Dedicated civil construction and turnkey home building in Madurai with transparent pricing and direct founder site supervision.",
};

export default function AboutPage() {
  const milestones = [
    { year: "2023", title: "Inception & Founding", desc: "Founded in Madurai by ambitious civil engineers aiming to eliminate construction opacity, contractor delays, and hidden costs." },
    { year: "2024", title: "First 10 Turnkey Homes Handover", desc: "Successfully delivered precision 2BHK and 3BHK turnkey houses across Anna Nagar & KK Nagar on-time and exactly within the agreed budget." },
    { year: "2025", title: "Tech-Driven Digital Site Management", desc: "Integrated digital daily progress logs, 3D structural modeling, and direct founder supervision across 4 active residential sites." },
    { year: "2026", title: "35,000+ Sq. Ft. Milestone & Model Catalog", desc: "Crossed 35,000 sq.ft. of constructed area and launched standardized, transparent turnkey house packages for Madurai families." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 pt-28 sm:pt-32 pb-14 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Building Spaces, Elevating Lives With Passion &amp; Precision.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
              Elite Homes is an engineering-first civil construction firm. Founded by passionate civil engineers, we replace traditional contracting opacity with real-time digital communication, transparent fixed BOQs, and daily founder site supervision.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Pillars */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-neutral-950 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-neutral-950 text-white flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Direct Founder Site Supervision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No middleman subcontractors. Our founding civil engineers personally supervise every footing excavation, rebar binding, and concrete casting on your site.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-neutral-950 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-neutral-950 text-white flex items-center justify-center mb-5">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Strict Batch Cube Testing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We test concrete cubes for 7-day and 28-day compressive strength on every slab pour, ensuring strictly verified IS 456-2000 structural load compliance.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-neutral-950 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-neutral-950 text-white flex items-center justify-center mb-5">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Zero Cost-Overrun Guarantee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our itemized Bills of Quantities (BOQ) are fixed before excavation begins. Milestone payments occur only after verified site milestone sign-offs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership & Senior Civil Engineers */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-slate-950 tracking-tight">
              Guided by Licensed Civil Engineers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Meet the licensed structural consultants and construction directors steering Elite Homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo.leadership.map((leader, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-neutral-950 mb-5 font-black text-xl">
                    {leader.name.split(" ")[0][0]}{leader.name.split(" ")[1]?.[0] || "Z"}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">{leader.name}</h3>
                  <p className="text-xs font-semibold text-neutral-700 mt-0.5">{leader.role}</p>
                  <p className="text-[11px] font-mono text-slate-400 mt-1">{leader.education}</p>
                  <p className="text-xs text-slate-600 mt-4 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-950" />
                    Board Certified Engineer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Company Journey / Milestones */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-950 tracking-tight">
              Our Journey &amp; Milestones
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From our first blueprint to 35,000+ sq.ft. of delivered residential homes in Madurai.
            </p>
          </div>

          <div className="relative border-l-2 border-neutral-300 ml-4 sm:ml-32 space-y-10">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Year Badge on Left for screens >= sm */}
                <span className="hidden sm:block absolute -left-28 top-0 text-right w-20 font-black text-lg text-neutral-950">
                  {item.year}
                </span>

                {/* Bullet node on line */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-neutral-950 group-hover:scale-125 transition-transform" />

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 group-hover:border-neutral-950 transition-colors">
                  <span className="sm:hidden text-xs font-black text-neutral-950 block mb-1">{item.year}</span>
                  <h4 className="text-base font-bold text-slate-950">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Health, Safety & Environmental Statement */}
      <section className="py-16 bg-[#0d0d0d] text-white border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Safety First Protocol
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
                OHSAS 18001 Zero-Incident Civil Standard
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                Civil construction sites demand rigorous safety vigilance. We enforce mandatory PPE, safety harness netting, weekly scaffolding load inspections, and daily morning safety toolbox briefings on every project.
              </p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-3 text-xs">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Mandatory Hardhat, Steel-Toe Boots &amp; Hi-Vis Vests</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full Scaffolding Load Certification by Third-Party Safety Auditors</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Rainwater Harvesting &amp; Zero-Slurry Runoff Environmental Protocols</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Workers&apos; Insurance and Comprehensive Group Medical Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-black text-slate-950">
            Work With an Engineering Firm You Can Rely On
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Schedule an appointment at our engineering headquarters or arrange a site inspection with a principal civil engineer.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white text-xs font-bold px-6 py-3 rounded-lg shadow-sm"
            >
              <span>Contact Engineering Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold px-6 py-3 rounded-lg"
            >
              <span>View House Models &amp; Specs</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

