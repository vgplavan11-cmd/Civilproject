"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  ChevronDown
} from "lucide-react";
import { companyInfo } from "@/data/companyData";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const modelParam = searchParams.get("model");
  const areaParam = searchParams.get("area");

  const [formData, setFormData] = useState(() => ({
    name: "",
    phone: "",
    email: "",
    service: modelParam?.includes("3BHK") ? "3bhk-turnkey" : modelParam?.includes("Villa") ? "villa-turnkey" : "2bhk-turnkey",
    plotArea: areaParam ? `${areaParam} Sq. Ft.` : "",
    plotLocation: "",
    timeline: "1-3-months",
    notes: (modelParam || areaParam) ? `Inquiry regarding: ${modelParam || "House Model"}${areaParam ? ` (Estimated Area: ${areaParam} Sq.Ft)` : ""}. Please provide an itemized civil Bill of Quantities (BOQ).` : ""
  }));

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [refId, setRefId] = useState("EH-492100");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setRefId(`EH-${Math.floor(100000 + Math.random() * 900000)}`);
    // Simulate civil engineering desk dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const faqs = [
    {
      q: "Does Elite Homes handle municipal building permits and sanction drawings?",
      a: "Yes. Our architectural and civil engineering team prepares municipal-compliant sanction blueprints, structural stability certificates, and coordinates with local development authorities for smooth plan approval."
    },
    {
      q: "Can I customize the standard 2BHK or 3BHK house plans to fit my plot?",
      a: "Absolutely. All our 2BHK, 3BHK, and Villa floor plans are fully customizable. Our structural engineers recalculate column loads and beam spans using STAAD.Pro to fit your exact site dimensions and orientation."
    },
    {
      q: "How does the milestone-based payment schedule operate?",
      a: "We never take full upfront payments. Construction is divided into verifiable civil milestones (Foundation, Plinth Beam, Ground Floor Slab, Masonry, Plastering, Finishing). Payment for a stage is released only after your site engineer verifies work completion."
    },
    {
      q: "What is covered under the 10-Year Structural Guarantee?",
      a: "The guarantee legally warrants the RCC superstructure, foundation integrity, absence of differential settlement cracks, and slab waterproofing against water seepage under normal environmental conditions."
    },
    {
      q: "How does Elite Homes verify the quality of steel and cement delivered to my site?",
      a: "Every batch of steel rebars comes with mill test certificates verifying Fe550D grade. For cement and concrete, our in-house lab casts 150mm cubes from every pour and tests them for 7-day and 28-day compressive strength."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 pt-36 sm:pt-44 md:pt-48 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Connect With Our Civil Engineering Team
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Schedule a site inspection, discuss custom 2BHK/3BHK house models, or request an itemized civil Bill of Quantities (BOQ). Our senior structural engineers are ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Form & Office Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-black text-slate-950">
                    Request Project Estimate &amp; Site Visit
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out your site requirements. A licensed civil engineer will review your inputs and respond within 24 business hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-neutral-100 border border-neutral-300 rounded-xl text-center space-y-4">
                    <div className="w-14 h-14 bg-neutral-950 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-950">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Your project reference number is <span className="font-mono font-bold text-neutral-950">{refId}</span>. Our Chief Project Engineer has been notified to schedule your site inspection.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            phone: "",
                            email: "",
                            service: "2bhk-turnkey",
                            plotArea: "",
                            plotLocation: "",
                            timeline: "1-3-months",
                            notes: ""
                          });
                        }}
                        className="text-xs font-bold text-neutral-950 hover:text-black underline underline-offset-4"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Robert Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white text-slate-900 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98421 12345"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white text-slate-900 font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. robert@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white text-slate-900 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-1.5">
                          Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white text-slate-900 font-medium"
                        >
                          <option value="2bhk-turnkey">Turnkey 2BHK House Model</option>
                          <option value="3bhk-turnkey">Turnkey 3BHK House Model</option>
                          <option value="villa-turnkey">Luxury Custom Villa (4BHK+)</option>
                          <option value="commercial">Commercial / Institutional Building</option>
                          <option value="structural-design">Structural Load Design &amp; STAAD FEA</option>
                          <option value="retrofitting">Seismic Retrofitting &amp; Renovation</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-1.5">
                          Plot / Built-Up Area
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 1,500 Sq. Ft. or 30x40 site"
                          value={formData.plotArea}
                          onChange={(e) => setFormData({ ...formData, plotArea: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white text-slate-900 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-1.5">
                          Site / Plot Location
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. KK Nagar / Anna Nagar / Othakadai, Madurai"
                          value={formData.plotLocation}
                          onChange={(e) => setFormData({ ...formData, plotLocation: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white text-slate-900 font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-1.5">
                        Planned Construction Timeline
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "immediate", label: "Immediate (Within 30 Days)" },
                          { id: "1-3-months", label: "1 - 3 Months" },
                          { id: "planning", label: "Planning / Budget Stage" }
                        ].map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: t.id })}
                            className={`py-2 px-2 rounded-lg border text-center transition-all ${
                              formData.timeline === t.id
                                ? "border-neutral-950 bg-neutral-950 font-bold text-white"
                                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-1.5">
                        Project Details or Floor Plan Requests
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe your soil condition, required bedrooms, specific finish preferences, or reference house model..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white text-slate-900 font-medium"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-black/25 active:scale-[0.99] disabled:opacity-70"
                      >
                        {submitting ? (
                          <span>Processing Inquiry...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Civil Engineering Inquiry</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center pt-2">
                      Your details are held under strict client confidentiality. No spam.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Direct Engineering Contacts & Map Placeholder */}
            <div className="lg:col-span-5 space-y-6">
              {/* HQ Office Card */}
              <div className="bg-[#0d0d0d] text-white rounded-2xl p-7 border border-neutral-800">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white border border-neutral-700">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">Elite Homes Office</h3>
                    <p className="text-xs text-neutral-400 font-mono">MSME Reg: {companyInfo.licenseNo}</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">{companyInfo.contact.headOffice}</p>
                      <p className="text-slate-400">{companyInfo.contact.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase font-bold">Helpline</p>
                      <a href={`tel:${companyInfo.contact.phone}`} className="font-bold text-white hover:text-neutral-300">
                        {companyInfo.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase font-bold">Project Tender Email</p>
                      <a href={`mailto:${companyInfo.contact.email}`} className="font-bold text-white hover:text-neutral-300">
                        {companyInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-neutral-800">
                    <Clock className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Engineering Consultation Hours</p>
                      <p className="text-slate-400">{companyInfo.contact.hours}</p>
                      <p className="text-neutral-300 font-semibold">{companyInfo.contact.siteVisits}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Seal Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-xs text-slate-700 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-neutral-950" />
                  <span>On-Site Engineer Protocol</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Every active project site is assigned a dedicated B.Tech Civil Engineer. We do not rely on remote supervision—our engineers manage slump tests, rebar bar-bending schedules, and concrete vibrators in person daily.
                </p>
                <div className="pt-2 flex items-center gap-4 text-slate-500 font-medium">
                  <span>&bull; ISO 9001:2015</span>
                  <span>&bull; OHSAS 18001</span>
                  <span>&bull; IGBC Green</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Civil Construction FAQ Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Frequently Asked Civil Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-4 px-5 text-left text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      openFaq === idx ? "rotate-180 text-neutral-950" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-xs font-bold text-slate-500">Loading Elite Homes Consultation Desk...</p>
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}

