export interface CivilService {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export const civilServices: CivilService[] = [
  {
    id: "residential-turnkey",
    title: "Turnkey Residential Construction",
    shortDesc: "End-to-end execution of 2BHK, 3BHK, and custom luxury villas from soil excavation to final key handover.",
    description: "Complete building lifecycle management. We handle land contour surveys, structural calculations, foundation pouring, brickwork, MEP rough-ins, flooring, waterproofing, and exterior finishes with milestone-linked transparent billing.",
    icon: "Home",
    deliverables: [
      "Soil investigation & bearing capacity report",
      "Architectural 2D floor plans & 3D elevations",
      "Full RCC framed structure with Fe550D steel",
      "Premium flooring, electrical & sanitary installations",
      "10-Year structural durability warranty"
    ]
  },
  {
    id: "structural-engineering",
    title: "Structural & Civil Engineering",
    shortDesc: "Heavy foundation calculations, shear wall analysis, seismic modeling, and RCC frame drafting.",
    description: "Precision load analysis using advanced computational FEA modeling. We design optimized beam spans, raft footings, retaining walls, and composite steel structures ensuring highest safety factors and economical concrete ratios.",
    icon: "ShieldAlert",
    deliverables: [
      "STAAD.Pro structural load simulations",
      "Bar Bending Schedules (BBS) for zero steel wastage",
      "Seismic Zone compliance certificates",
      "Peer review & municipal sanction drawings"
    ]
  },
  {
    id: "commercial-infrastructure",
    title: "Commercial & Industrial Infra",
    shortDesc: "Retail complexes, corporate headquarters, pre-engineered steel buildings (PEB), and industrial sheds.",
    description: "High-capacity commercial builds engineered for high live loads, maximum column-free floor plates, fire hydrant rings, and heavy equipment vibrations.",
    icon: "Building2",
    deliverables: [
      "Post-tensioned (PT) long-span floor slabs",
      "Heavy-duty concrete flooring & tremix finish",
      "Basement shoring, piling & dewatering systems",
      "HVAC, elevator & electrical substation integration"
    ]
  },
  {
    id: "renovation-retrofitting",
    title: "Structural Retrofitting & Renovation",
    shortDesc: "Column jacketing, seismic retrofitting, beam strengthening, and heritage building rehabilitation.",
    description: "Restoring and enhancing the load-bearing integrity of older buildings. Using carbon-fiber wrapping (CFRP), micro-concreting, and pressure grouting to extend structural lifespans by decades.",
    icon: "Wrench",
    deliverables: [
      "Non-destructive testing (Rebound hammer & UPV)",
      "Structural crack inspection and epoxy injection",
      "Column section enlargement & RC jacketing",
      "Terrace and basement crystalline waterproofing"
    ]
  },
  {
    id: "project-management",
    title: "Civil Project Management & Auditing",
    shortDesc: "On-site quality supervision, third-party material testing, schedule tracking, and cost optimization.",
    description: "Dedicated site engineers and quality controllers stationed on your site. We audit raw materials, verify cube compressive tests, check slump cones, and enforce strict construction milestones.",
    icon: "ClipboardCheck",
    deliverables: [
      "Daily site progress & material reconciliation logs",
      "Slump & 28-day concrete cube compressive tests",
      "Critical Path Method (CPM) milestone schedules",
      "Budget control and vendor rate contracts"
    ]
  },
  {
    id: "architectural-planning",
    title: "Architectural 3D & Vastu Planning",
    shortDesc: "Functional space planning, photorealistic 3D elevations, solar orientation analysis, and Vastu adherence.",
    description: "Fusing clean contemporary architectural aesthetics with civil construction practicality. We optimize natural lighting, cross-ventilation, and privacy while maintaining structural alignment with columns.",
    icon: "Layers",
    deliverables: [
      "Comprehensive 2D working civil blueprints",
      "Photorealistic daylight & twilight 3D elevations",
      "Sun-path and airflow simulation diagrams",
      "Statutory municipal sanction approvals"
    ]
  }
];

