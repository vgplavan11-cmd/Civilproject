export interface ProjectSpec {
  foundation: string;
  superstructure: string;
  masonry: string;
  flooring: string;
  doorsWindows: string;
  plumbingSanitary: string;
  electrical: string;
  waterproofing: string;
  exteriorFinish: string;
}

export interface HouseModel {
  id: string;
  title: string;
  subtitle: string;
  type: "2BHK" | "3BHK" | "Villa" | "Commercial";
  badge: string;
  carpetArea: string;
  builtUpArea: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  floors: string;
  facing: string;
  status: "Completed" | "Ongoing" | "Ready for Construction";
  estimatedDuration: string;
  baseCost: string;
  description: string;
  keyHighlights: string[];
  specs: ProjectSpec;
  floorPlanDetails: {
    livingRoom: string;
    masterBedroom: string;
    secondBedroom: string;
    thirdBedroom?: string;
    kitchenUtility: string;
    balconyArea: string;
  };
  image: string;
}

export const houseProjects: HouseModel[] = [
  {
    id: "xyz-horizon-2bhk",
    title: "Elite Horizon 2BHK Modern Living",
    subtitle: "Engineered for young families maximizing space efficiency and natural ventilation",
    type: "2BHK",
    badge: "Most Popular 2BHK",
    carpetArea: "895 Sq. Ft.",
    builtUpArea: "1,140 Sq. Ft.",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floors: "G + 1 Provision",
    facing: "East / North Available",
    status: "Ready for Construction",
    estimatedDuration: "7-8 Months",
    baseCost: "From ₹26.5 Lakhs / Turnkey Package",
    description: "The Elite Horizon is an optimized 2BHK residential model designed by our civil structural engineers to deliver zero wasted space, optimum daylight penetration, and structural longevity with high-grade Fe550D reinforcement.",
    keyHighlights: [
      "100% Vastu-aligned layout",
      "Corner master suite with cross-ventilation",
      "Seismic Zone III resistant RCC frame",
      "Rainwater harvesting integrated design"
    ],
    specs: {
      foundation: "Deep Isolated RCC Column Footings with M25 grade concrete",
      superstructure: "Engineered RCC column & beam frame design as per IS 456-2000",
      masonry: "8-inch exterior solid concrete blocks, 4-inch partition walls",
      flooring: "800x800mm premium double-charged vitrified tiles with 4-inch skirting",
      doorsWindows: "Teakwood main door frame; 3-track heavy UPVC sliding windows with bug mesh",
      plumbingSanitary: "Astral concealed CPVC pipes, Jaquar dual-flow chrome fittings",
      electrical: "Finolex fire-retardant wiring with Legrand modular switches",
      waterproofing: "3-Coat elastomeric waterproofing on sunken slabs and terrace",
      exteriorFinish: "Weather-proof acrylic exterior emulsion over 2 coats cement primer"
    },
    floorPlanDetails: {
      livingRoom: "16'0\" x 11'6\"",
      masterBedroom: "12'0\" x 13'6\" (Attached Bath)",
      secondBedroom: "11'0\" x 11'6\"",
      kitchenUtility: "10'0\" x 8'6\" with 6'0\" dry utility",
      balconyArea: "10'0\" x 4'0\" sit-out balcony"
    },
    image: "/images/2bhk-horizon.svg"
  },
  {
    id: "xyz-crest-2bhk",
    title: "Elite Crest 2BHK Deluxe + Work Suite",
    subtitle: "Contemporary 2BHK featuring a dedicated executive workstation and extended sit-out",
    type: "2BHK",
    badge: "Deluxe 2BHK",
    carpetArea: "980 Sq. Ft.",
    builtUpArea: "1,260 Sq. Ft.",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    floors: "G + 2 Permissible",
    facing: "North-East",
    status: "Ready for Construction",
    estimatedDuration: "8 Months",
    baseCost: "From ₹29.8 Lakhs / Turnkey Package",
    description: "Designed for modern professionals needing dedicated home office capabilities without compromising on open-concept civil aesthetics and structural durability.",
    keyHighlights: [
      "Dedicated 8'x6' ergonomic office recess",
      "Twin wide balconies for elevated greenery",
      "High-grade Porotherm clay thermal masonry",
      "Solar rooftop piping provisions included"
    ],
    specs: {
      foundation: "Reinforced Combined Footing anchored into stable bed stratum",
      superstructure: "RCC shear-assisted core with Fe550D TMT reinforcement bars",
      masonry: "Thermally efficient Wienerberger Porotherm hollow clay blocks",
      flooring: "Gloss-finish Italian marble pattern vitrified tiles (1200x600mm)",
      doorsWindows: "Engineered flush doors with veneer finish; German-hardware UPVC windows",
      plumbingSanitary: "Supreme SDR-11 piping, wall-hung Kohler EWC with concealed cisterns",
      electrical: "Schneider Electric AvatarOn switches, smart home automation conduit lines",
      waterproofing: "Polymer-modified cementitious membrane across terrace and roof slab",
      exteriorFinish: "Textured civil grooving with anti-fungal exterior silicate coating"
    },
    floorPlanDetails: {
      livingRoom: "17'6\" x 12'0\"",
      masterBedroom: "13'0\" x 14'0\" (Attached Bath + Walk-in Wardrobe)",
      secondBedroom: "11'6\" x 12'0\"",
      kitchenUtility: "11'0\" x 9'0\" modular layout",
      balconyArea: "Twin balconies totaling 85 Sq. Ft."
    },
    image: "/images/2bhk-crest.svg"
  },
  {
    id: "xyz-royal-3bhk",
    title: "Elite Royal Palm 3BHK Family Manor",
    subtitle: "Spacious architectural floor plan engineered for multi-generational comfort",
    type: "3BHK",
    badge: "Flagship 3BHK",
    carpetArea: "1,320 Sq. Ft.",
    builtUpArea: "1,680 Sq. Ft.",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    floors: "G + 2 Independent",
    facing: "East Facing",
    status: "Ready for Construction",
    estimatedDuration: "9-10 Months",
    baseCost: "From ₹39.5 Lakhs / Turnkey Package",
    description: "Our premier 3BHK blueprint provides wide column spans, acoustic insulation between party walls, expansive dining zones, and a private master bedroom suite.",
    keyHighlights: [
      "Spacious 3-bath layout with dedicated powder room",
      "Spacious 20-foot wide living and dining pavilion",
      "Underground sump and overhead civil RCC water tank included",
      "Automated sensor-ready external lighting provisions"
    ],
    specs: {
      foundation: "Raft cum Column Footing designed for multi-tier vertical expansion",
      superstructure: "M30 Ready-Mix Concrete monolithic pour with mechanized vibrators",
      masonry: "High-density wire-cut red brick masonry in 1:4 cement mortar",
      flooring: "Double-charged 1200x800mm tiles in living & dining; wood-plank finish in master",
      doorsWindows: "Burma teak front door with brass fittings; Fenesta sound-proof UPVC",
      plumbingSanitary: "Grohe German bath fittings with thermostatic mixer diverters",
      electrical: "Fire-survival cabling, dual-source switchgear, full UPS wiring",
      waterproofing: "Fosroc Brushbond multi-coat protective waterproofing",
      exteriorFinish: "Weather-resistant structural cladding combined with textured emulsion"
    },
    floorPlanDetails: {
      livingRoom: "20'4\" x 13'6\"",
      masterBedroom: "14'0\" x 15'0\" (Attached Bath)",
      secondBedroom: "12'0\" x 13'0\" (Attached Bath)",
      thirdBedroom: "11'0\" x 12'0\" (Guest / Study)",
      kitchenUtility: "12'0\" x 9'6\" with separate wet scullery",
      balconyArea: "Covered 14'0\" x 5'0\" landscape balcony"
    },
    image: "/images/3bhk-royal.svg"
  },
  {
    id: "xyz-skyline-3bhk",
    title: "Elite Skyline 3BHK Luxury Duplex",
    subtitle: "Double-height living room duplex house model with private terrace deck",
    type: "3BHK",
    badge: "Luxury Duplex",
    carpetArea: "1,550 Sq. Ft.",
    builtUpArea: "1,980 Sq. Ft.",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    floors: "Duplex (Ground + First)",
    facing: "North Facing",
    status: "Ongoing",
    estimatedDuration: "10-11 Months",
    baseCost: "From ₹47.0 Lakhs / Turnkey Package",
    description: "A stunning architectural duplex model boasting an 18-foot ceiling in the living lounge, cantilevered open staircase with glass railings, and private master deck.",
    keyHighlights: [
      "Dramatic double-height civil void with structural glass facade",
      "Floating cantilever staircase with structural steel core",
      "Open terrace garden slab with root-barrier waterproofing",
      "In-built solar water heater conduits"
    ],
    specs: {
      foundation: "Deep Isolated Pier Footings anchored into non-expansive stratum",
      superstructure: "Heavy-gauge RCC moment-resisting frame with post-tensioned beam options",
      masonry: "Acoustic insulated cellular concrete blockwork",
      flooring: "Imported full-body glazed porcelain tiles and Brazilian teak wood deck",
      doorsWindows: "Slimline thermal-break aluminum architectural framing with toughened glass",
      plumbingSanitary: "Totó & Hansgrohe premium fittings with concealed pipe manifolds",
      electrical: "ABB modular automation components, concealed LED cove trough channels",
      waterproofing: "Sika TopSeal 107 double-coat with geotextile protective membrane",
      exteriorFinish: "High-pressure laminate (HPL) civil exterior accents with white elastomeric paint"
    },
    floorPlanDetails: {
      livingRoom: "22'0\" x 14'6\" (Double Height 18ft Ceiling)",
      masterBedroom: "15'6\" x 14'0\" with private 12' open terrace",
      secondBedroom: "13'0\" x 13'6\" (Attached Bath)",
      thirdBedroom: "12'0\" x 12'0\" (Ground Floor Senior Suite)",
      kitchenUtility: "13'0\" x 10'0\" gourmet island kitchen",
      balconyArea: "Private Master Deck + Sunset Terrace (180 Sq. Ft.)"
    },
    image: "/images/3bhk-skyline.svg"
  },
  {
    id: "xyz-sovereign-villa",
    title: "Elite Sovereign 4BHK Estate Villa",
    subtitle: "Ultra-luxury custom civil estate featuring private courtyard & pool deck",
    type: "Villa",
    badge: "Signature Villa",
    carpetArea: "2,450 Sq. Ft.",
    builtUpArea: "3,150 Sq. Ft.",
    bedrooms: 4,
    bathrooms: 5,
    balconies: 3,
    floors: "G + 2 Custom Villa",
    facing: "East Facing (100% Vastu)",
    status: "Ready for Construction",
    estimatedDuration: "12-14 Months",
    baseCost: "From ₹78.0 Lakhs / Turnkey Package",
    description: "The pinnacle of residential civil engineering. Features bespoke cantilevers, an open-to-sky central courtyard, 2-car covered portico, and structural capacity for a rooftop splash pool.",
    keyHighlights: [
      "Custom cantilever structural design with zero internal obstructive columns",
      "Open internal bio-climatic sky-lit courtyard",
      "Private 2-vehicle heavy-duty paved garage portico",
      "Reinforced roof slab engineered for swimming pool / solar array"
    ],
    specs: {
      foundation: "Engineered Raft Foundation with M35 grade high-performance mix",
      superstructure: "Special Moment-Resisting Frame (SMRF) with Fe550D corrosion-resistant steel",
      masonry: "Natural exposed wire-cut earthen brickwork combined with aerated blocks",
      flooring: "Full-slab Statuario polished marble and slip-resistant outdoor granite",
      doorsWindows: "Bespoke 8-foot solid teak entrance portal with Schuco structural glazing",
      plumbingSanitary: "Geberit concealed frames, Villeroy & Boch sanitary fixtures",
      electrical: "Central distribution panel with integrated surge suppression and EV charger port",
      waterproofing: "Crystalline capillary waterproofing with bitumen-free rubberized coating",
      exteriorFinish: "Exposed architectural fair-face concrete finish & UV-resistant silicone sealer"
    },
    floorPlanDetails: {
      livingRoom: "26'0\" x 16'0\" with central courtyard vista",
      masterBedroom: "17'0\" x 16'6\" (Walk-in Dressing + Luxury Ensuite)",
      secondBedroom: "14'6\" x 14'0\" (Ensuite)",
      thirdBedroom: "14'0\" x 13'6\" (Ensuite)",
      kitchenUtility: "15'0\" x 11'0\" with butler's pantry & staff quarter",
      balconyArea: "Master Balcony, Courtyard Deck, & Penthouse Gazebo"
    },
    image: "/images/villa-sovereign.svg"
  },
  {
    id: "xyz-pinnacle-commercial",
    title: "Elite Pinnacle Commercial Complex",
    subtitle: "Multi-tenant civil commercial tower built for retail showrooms and corporate suites",
    type: "Commercial",
    badge: "Commercial Infrastructure",
    carpetArea: "8,500 Sq. Ft.",
    builtUpArea: "11,200 Sq. Ft.",
    bedrooms: 0,
    bathrooms: 8,
    balconies: 0,
    floors: "B + G + 4 Floors",
    facing: "Main Road Frontage",
    status: "Completed",
    estimatedDuration: "16 Months",
    baseCost: "Custom Turnkey Tender",
    description: "Turnkey commercial civil development featuring open-span structural slabs, post-tensioned beam layouts to eliminate internal pillars, basement parking with dewatering systems, and curtain wall glazing.",
    keyHighlights: [
      "Large column-free spans for flexible showroom layouts",
      "Heavy commercial load rating (5.0 kN/sqm live load design)",
      "Fire safety system with wet risers and external hydrant ring",
      "Dual high-speed elevator shafts and emergency fire exits"
    ],
    specs: {
      foundation: "Deep Bored Cast-in-situ RCC Piles with Pile Cap system",
      superstructure: "Post-tensioned (PT) flat slab system with drop panels",
      masonry: "Lightweight solid autoclaved blocks with fire rating of 4+ hours",
      flooring: "Heavy-traffic industrial vitrified tiles & polished Kota stone staircases",
      doorsWindows: "Double-glazed unit (DGU) structural curtain walls with low-E glass",
      plumbingSanitary: "Commercial multi-tier plumbing lines with STP recycled water loop",
      electrical: "Dedicated transformer yard, 100% DG back-up synchronizing panel",
      waterproofing: "Polyurea spray-applied waterproofing for basement retaining walls",
      exteriorFinish: "Fluoropolymer ACP cladding with structural silicone sealant joints"
    },
    floorPlanDetails: {
      livingRoom: "Open floor plate: 2,200 Sq. Ft. per typical floor",
      masterBedroom: "N/A - Commercial Shell",
      secondBedroom: "N/A - Commercial Shell",
      kitchenUtility: "Pantry & service ducts on each floor",
      balconyArea: "Fire escape utility balconies on rear facade"
    },
    image: "/images/commercial-pinnacle.svg"
  }
];

export const projectFilters = [
  { id: "all", label: "All Projects" },
  { id: "2BHK", label: "2BHK Models" },
  { id: "3BHK", label: "3BHK Models" },
  { id: "Villa", label: "Villas & Luxury" },
  { id: "Commercial", label: "Commercial Infra" }
];

