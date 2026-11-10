import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Ruler, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  PhoneCall
} from "lucide-react";
import { houseProjects } from "@/data/projectsData";
import { companyInfo } from "@/data/companyData";
import PrintButton from "@/components/PrintButton";

export function generateStaticParams() {
  return houseProjects.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = houseProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Related models excluding current
  const relatedModels = houseProjects.filter((p) => p.id !== project.id).slice(0, 2);

  const constructionMilestones = [
    { stage: "Stage 01", title: "Geotechnical Survey & Excavation", duration: "Weeks 1 - 3", desc: "Soil bearing capacity test, boundary coordinates marking, foundation pit digging, and anti-termite chemical soil barrier treatment." },
    { stage: "Stage 02", title: "Reinforced Concrete Foundation & Plinth", duration: "Weeks 4 - 8", desc: `Casting ${project.specs.foundation.slice(0, 30)} with Fe550D rebar cage, damp-proof course (DPC), and underground utility inlets.` },
    { stage: "Stage 03", title: "RCC Superstructure & Slab Casting", duration: "Weeks 9 - 16", desc: "Column casting, beam reinforcement, shuttering inspection, and monolithic concrete pour with automated mechanical vibrators." },
    { stage: "Stage 04", title: "Masonry Walls & MEP Conduit Rough-in", duration: "Weeks 17 - 22", desc: `${project.specs.masonry.slice(0, 35)}, concealed electrical conduits, and CPVC plumbing lines tested under 10-bar hydraulic pressure.` },
    { stage: "Stage 05", title: "Plastering, Waterproofing & Flooring", duration: "Weeks 23 - 28", desc: `3-layer terrace and sunken slab waterproofing, smooth internal plaster, and ${project.specs.flooring.slice(0, 30)} tile laying.` },
    { stage: "Stage 06", title: "Fixtures, Painting & Turnkey Handover", duration: "Final Month", desc: "Sanitary fitting installation, premium weather-coat facade painting, final clean, deep quality inspection, and key handover." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Top Breadcrumb & Actions Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-blue-600 transition-colors">House Models</Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">{project.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <PrintButton />
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-600 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Models</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="py-10 sm:py-14 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Meta */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider bg-slate-950 text-white px-3 py-1 rounded">
                  {project.badge}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-3 py-1 rounded border border-blue-200">
                  {project.type} Model
                </span>
                <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 px-3 py-1 rounded border border-emerald-200">
                  Status: {project.status}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                {project.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                {project.description}
              </p>

              {/* Core Specs Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Super Built-Up Area</p>
                  <p className="text-lg font-black text-blue-700 mt-0.5">{project.builtUpArea}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Carpet Area</p>
                  <p className="text-lg font-black text-slate-900 mt-0.5">{project.carpetArea}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Configuration</p>
                  <p className="text-lg font-black text-slate-900 mt-0.5">
                    {project.bedrooms > 0 ? `${project.bedrooms} BHK` : "Commercial"}
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Est. Handover</p>
                  <p className="text-lg font-black text-emerald-700 mt-0.5">{project.estimatedDuration}</p>
                </div>
              </div>
            </div>

            {/* Right Quick Inquiry CTA Box */}
            <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
                  Turnkey Package Rate
                </span>
                <p className="text-2xl font-black text-white mt-1">{project.baseCost}</p>
                <p className="text-xs text-slate-400 mt-0.5">Includes structure, MEP, and standard finishes</p>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>10-Year Structural Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>IS 456 Seismic Zone-III Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>On-Time Handover Penalty Clause</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <Link
                  href={`/contact?model=${encodeURIComponent(project.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all shadow-md"
                >
                  <span>Book Site Inspection for this Model</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl border border-slate-700 transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                  <span>Call Civil Desk: {companyInfo.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Architectural Blueprint & Dimension Schedule */}
      <section className="py-14 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
                  Architectural Schematic
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">
                  2D Floor Plan Layout &amp; Structural Grid
                </h2>
              </div>
              <span className="text-xs font-bold bg-white text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs hidden sm:inline-block">
                Scale: 1:100 Metric Layout
              </span>
            </div>

            {/* High Resolution Blueprint Canvas */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 sm:p-8 shadow-sm overflow-hidden">
              <div className="relative aspect-[16/10] w-full bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
                <Image
                  src={project.image}
                  alt={`${project.title} Blueprint`}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Room-by-room Schedule */}
          <div>
            <h3 className="text-lg font-bold text-slate-950 mb-4 flex items-center gap-2">
              <Ruler className="w-5 h-5 text-blue-600" />
              Room Dimension Schedule
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                <span className="font-semibold text-slate-600">Living &amp; Dining Hall:</span>
                <span className="font-bold text-slate-950">{project.floorPlanDetails.livingRoom}</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                <span className="font-semibold text-slate-600">Master Bedroom:</span>
                <span className="font-bold text-slate-950">{project.floorPlanDetails.masterBedroom}</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                <span className="font-semibold text-slate-600">Bedroom 2:</span>
                <span className="font-bold text-slate-950">{project.floorPlanDetails.secondBedroom}</span>
              </div>
              {project.floorPlanDetails.thirdBedroom && (
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                  <span className="font-semibold text-slate-600">Bedroom 3 / Study:</span>
                  <span className="font-bold text-slate-950">{project.floorPlanDetails.thirdBedroom}</span>
                </div>
              )}
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                <span className="font-semibold text-slate-600">Kitchen &amp; Utility:</span>
                <span className="font-bold text-slate-950">{project.floorPlanDetails.kitchenUtility}</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                <span className="font-semibold text-slate-600">Balcony &amp; Sit-out:</span>
                <span className="font-bold text-slate-950">{project.floorPlanDetails.balconyArea}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete Civil & Structural Specifications Schedule */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Technical Verification
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">
              Civil Structural &amp; Material Specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              All materials and construction methods adhere strictly to the Bureau of Indian Standards (BIS) and International Building Code (IBC).
            </p>
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-200 text-xs shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 p-4 bg-slate-50/70 font-semibold">
              <span className="font-bold text-slate-900 md:col-span-1">Foundation &amp; Substructure</span>
              <span className="text-slate-700 md:col-span-3">{project.specs.foundation}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 p-4 bg-white">
              <span className="font-bold text-slate-900 md:col-span-1">Superstructure RCC Frame</span>
              <span className="text-slate-700 md:col-span-3">{project.specs.superstructure}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 p-4 bg-slate-50/70">
              <span className="font-bold text-slate-900 md:col-span-1">Masonry &amp; Wall Partitions</span>
              <span className="text-slate-700 md:col-span-3">{project.specs.masonry}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 p-4 bg-white">
              <span className="font-bold text-slate-900 md:col-span-1">Flooring &amp; Dado Work</span>
              <span className="text-slate-700 md:col-span-3">{project.specs.flooring}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 p-4 bg-slate-50/70">
              <span className="font-bold text-slate-900 md:col-span-1">Doors &amp; Fenestration</span>
              <span className="text-slate-700 md:col-span-3">{project.specs.doorsWindows}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 p-4 bg-white">
              <span className="font-bold text-slate-900 md:col-span-1">Plumbing &amp; Sanitary</span>
              <span className="text-slate-700 md:col-span-3">{project.specs.plumbingSanitary}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 p-4 bg-slate-50/70">
              <span className="font-bold text-slate-900 md:col-span-1">Electrical &amp; Switchgear</span>
              <span className="text-slate-700 md:col-span-3">{project.specs.electrical}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 p-4 bg-white">
              <span className="font-bold text-slate-900 md:col-span-1">Waterproofing Barrier</span>
              <span className="text-slate-700 md:col-span-3">{project.specs.waterproofing}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 p-4 bg-slate-50/70">
              <span className="font-bold text-slate-900 md:col-span-1">Exterior Facade &amp; Finish</span>
              <span className="text-slate-700 md:col-span-3">{project.specs.exteriorFinish}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stage-wise Civil Construction Execution Plan */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Execution Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">
              6-Stage Milestone Construction Schedule
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Transparent, milestone-linked payments ensure you only disburse funds after structural milestones are inspected and signed off.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionMilestones.map((m, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {m.stage}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">{m.duration}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{m.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Site Engineer Sign-off Required</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Related Models */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-950">Explore Other House Models</h3>
            <Link href="/projects" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
              <span>View All Models</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedModels.map((rel) => (
              <Link
                key={rel.id}
                href={`/projects/${rel.id}`}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-blue-600 hover:bg-white transition-all group flex flex-col sm:flex-row items-center gap-5"
              >
                <div className="relative w-full sm:w-44 aspect-[4/3] bg-white rounded-xl border border-slate-200 shrink-0 overflow-hidden">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[10px] font-bold uppercase bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    {rel.type}
                  </span>
                  <h4 className="font-bold text-slate-950 text-base group-hover:text-blue-600 transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{rel.subtitle}</p>
                  <p className="text-xs font-bold text-blue-700 pt-1">{rel.builtUpArea} Built-Up Area</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

