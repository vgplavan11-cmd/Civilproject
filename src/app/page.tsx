"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  HardHat, 
  ShieldCheck, 
  Ruler, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Hammer, 
  Truck, 
  PhoneCall, 
  Compass,
  Zap,
  BarChart2,
  Calculator,
  BookOpen
} from "lucide-react";
import { civilServices } from "@/data/servicesData";
import { companyInfo } from "@/data/companyData";
import JournalSpreadCarousel from "@/components/ui/journal-spread-carousel";
import { CIVIL_JOURNAL_SPREADS } from "@/data/journalData";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-14 sm:pt-24 sm:pb-28 bg-white border-b border-slate-200 overflow-hidden">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />
        
        {/* Subtle ambient gradient */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 sm:space-y-6">
          {/* Elite Homes Official Brand Identity - Displayed Separately on Home Screen */}
          <div className="inline-flex flex-col items-center justify-center space-y-2.5 sm:space-y-3 mb-1 sm:mb-2">
            <div className="w-16 h-16 sm:w-24 sm:h-24 relative bg-white rounded-2xl shadow-md border border-slate-200/90 p-1.5 sm:p-2 overflow-hidden mx-auto transition-transform hover:scale-105 duration-300">
              <Image
                src="/images/elite-homes-logo.jpg"
                alt="Elite Homes Logo"
                fill
                className="object-contain p-0.5 sm:p-1"
                priority
              />
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 font-sans">
                  ELITE HOMES
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-200 shadow-2xs">
                  Madurai
                </span>
              </div>
              <p className="text-[11px] sm:text-sm uppercase tracking-widest text-slate-500 font-semibold mt-1">
                Building Spaces, Elevating Lives.
              </p>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.18] sm:leading-[1.14]">
            Building Modern Homes With <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Fresh Passion</span> &amp; Structural Precision.
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Elite Homes delivers turnkey residential homes (2BHK, 3BHK, Custom Villas) with direct founder site supervision, transparent milestone pricing, and IS 456-compliant RCC framing.
          </p>

          {/* Trust Badges Bar */}
          <div className="pt-6 sm:pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-3.5 sm:gap-6 md:gap-10 text-[11px] sm:text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>10-Year Structural Warranty</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>100% In-house Lab Testing</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Award className="w-4 h-4 text-blue-600 shrink-0" />
              <span>IS 456 &amp; IS 1893 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & CIVIL METRICS STRIP */}
      <section className="bg-slate-900 text-white py-8 sm:py-10 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="pt-2 md:pt-0">
            <div className="text-2xl sm:text-4xl font-black text-white tracking-tight">{companyInfo.stats.yearsOfExcellence}</div>
            <p className="text-[10px] sm:text-xs uppercase font-semibold text-slate-400 mt-1">Dedicated Civil Excellence</p>
          </div>
          <div className="pt-2 md:pt-0">
            <div className="text-2xl sm:text-4xl font-black text-blue-400 tracking-tight">{companyInfo.stats.completedProjects}</div>
            <p className="text-[10px] sm:text-xs uppercase font-semibold text-slate-400 mt-1">Homes &amp; Active Sites</p>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-2xl sm:text-4xl font-black text-white tracking-tight">{companyInfo.stats.squareFeetBuilt}</div>
            <p className="text-[10px] sm:text-xs uppercase font-semibold text-slate-400 mt-1">Sq. Ft. Built &amp; In-Progress</p>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-2xl sm:text-4xl font-black text-blue-400 tracking-tight">{companyInfo.stats.clientSatisfactionRate}</div>
            <p className="text-[10px] sm:text-xs uppercase font-semibold text-slate-400 mt-1">Direct Founder Oversight</p>
          </div>
        </div>
      </section>

      {/* 2.5 DEMO SITES JOURNAL */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Interactive Project Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Demo Sites &amp; Architectural Showcases
          </h2>
          <p className="text-xs sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
            Drag, swipe, or flip through our live interactive architectural spreads and construction models.
          </p>
        </div>

        <div className="w-full relative px-1 sm:px-4">
          <JournalSpreadCarousel 
            spreads={CIVIL_JOURNAL_SPREADS}
            title="Demo Sites"
            height="clamp(480px, 75vh, 680px)"
            autoPlay={4500}
          />
        </div>
      </section>

      {/* 3. CORE CIVIL DISCIPLINES & SERVICES */}
      <section id="services" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200 mb-3">
              <HardHat className="w-3.5 h-3.5" />
              <span>Full-Scope Civil Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Our Comprehensive Civil Capabilities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              From geotechnical soil investigations and structural calculations to heavy RCC superstructure casting and turnkey interior finishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {civilServices.map((service) => (
              <div
                key={service.id}
                className="p-7 rounded-2xl border border-slate-200 bg-white hover:border-blue-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="border-t border-slate-100 pt-4">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-2">
                    Key Deliverables:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COST & MATERIAL ESTIMATOR SPOTLIGHT */}
      <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-sm relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl space-y-3 sm:space-y-4 relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                <Calculator className="w-3.5 h-3.5" />
                <span>Dedicated Civil Estimator Desk</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Calculate Turnkey Civil Costs &amp; Raw Material Requirements
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Determine your construction budget, Fe550D TMT steel tonnage, cement bag counts, and project timelines with our dedicated engineering calculator based on IS 456-2000 standards.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-2 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  Real-time Cost per Sq.Ft
                </span>
                <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  Steel &amp; Cement Thumb Rules
                </span>
                <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  Fixed-Price BOQ Guarantee
                </span>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full sm:w-auto">
              <Link
                href="/estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
              >
                <Calculator className="w-4 h-4" />
                <span>Launch Full Civil Estimator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING RIGOR & QUALITY STANDARDS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>The Civil Engineering Standard</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Zero Compromise on Steel, Cement &amp; Structural Safety.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                A building is only as reliable as its geotechnical foundation and concrete matrix. At Elite Homes, we treat every residential and commercial project with the mathematical rigor of heavy infrastructure.
              </p>

              <div className="space-y-4 pt-2">
                {companyInfo.standards.map((std, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{std.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{std.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-900 text-white rounded-2xl p-6 sm:p-10 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
                    Elite Homes On-Site Laboratory Protocol
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                    IS: 516 Testing Method
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-slate-800/70 p-5 rounded-xl border border-slate-700">
                    <h4 className="font-bold text-sm text-white flex items-center gap-2">
                      <BarChart2 className="w-4 h-4 text-blue-400" />
                      Compressive Cube Test
                    </h4>
                    <p className="text-xs text-slate-400 mt-2">
                      150mm concrete cubes cast from every batch and crushed at 7-day (67% target) and 28-day (100% target) intervals using digital compression presses.
                    </p>
                  </div>

                  <div className="bg-slate-800/70 p-5 rounded-xl border border-slate-700">
                    <h4 className="font-bold text-sm text-white flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-blue-400" />
                      Slump Cone Consistency
                    </h4>
                    <p className="text-xs text-slate-400 mt-2">
                      Real-time workability and water-cement ratio auditing prior to pour ensures no segregated honeycombs in dense rebar areas.
                    </p>
                  </div>

                  <div className="bg-slate-800/70 p-5 rounded-xl border border-slate-700">
                    <h4 className="font-bold text-sm text-white flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-400" />
                      Fe550D High Ductility Steel
                    </h4>
                    <p className="text-xs text-slate-400 mt-2">
                      Superior elongation percentage absorbs ground seismic waves, safeguarding your family against unexpected earth tremors.
                    </p>
                  </div>

                  <div className="bg-slate-800/70 p-5 rounded-xl border border-slate-700">
                    <h4 className="font-bold text-sm text-white flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-400" />
                      3-Tier Waterproofing Barrier
                    </h4>
                    <p className="text-xs text-slate-400 mt-2">
                      Elastomeric coatings on sunken slabs, polymer screeds on terraces, and crystalline capillary injections guarantee zero seepage.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">
                    Need a structural audit or soil testing for your land parcel?
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>Request Site Engineer Visit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CIVIL INSTRUMENTS & QUALITY TESTING EQUIPMENT */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-slate-950 tracking-tight">
              Modern Digital Instruments &amp; Quality Tools
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              At Elite Homes, we utilize precision digital instruments and dedicated testing equipment to ensure zero structural guesswork on your site.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <Compass className="w-7 h-7 text-blue-600 mx-auto mb-2" />
              <p className="text-xs font-bold text-slate-900">Digital Total Stations</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Sub-Millimeter Plot Survey</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <Building2 className="w-7 h-7 text-blue-600 mx-auto mb-2" />
              <p className="text-xs font-bold text-slate-900">Digital Cube Testing Press</p>
              <p className="text-[10px] text-slate-500 mt-0.5">IS:516 Compressive Strength</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <Truck className="w-7 h-7 text-blue-600 mx-auto mb-2" />
              <p className="text-xs font-bold text-slate-900">Certified Batching Partners</p>
              <p className="text-[10px] text-slate-500 mt-0.5">M25/M30 Mix Consistency</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <Hammer className="w-7 h-7 text-blue-600 mx-auto mb-2" />
              <p className="text-xs font-bold text-slate-900">High-Frequency Vibrators</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Zero-Void Honeycomb Free</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-600/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/40">
                <HardHat className="w-3.5 h-3.5" />
                <span>Begin Your Construction Journey</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight">
                Ready to Lay the Foundation of Your Dream Home?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
                Schedule a complimentary site inspection with our senior civil engineer. We analyze soil profiles, boundary coordinates, and provide an itemized Bill of Quantities.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30"
                >
                  <span>Book Free Site Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3.5 rounded-xl border border-slate-700 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-blue-400" />
                  <span>Call {companyInfo.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
