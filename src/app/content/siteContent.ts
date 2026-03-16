export interface NavItem {
  label: string;
  href: string;
}

export interface HeroMetric {
  label: string;
  value: string;
  detail: string;
}

export interface PartnerLogo {
  id: "esa" | "ogc";
  label: string;
}

export interface AudienceSegment {
  icon: "agency" | "research" | "sustainability" | "enterprise";
  title: string;
  summary: string;
  outcomes: string[];
}

export interface CapabilityPillar {
  icon: "sensing" | "infrastructure" | "delivery";
  title: string;
  description: string;
  outcome: string;
  capabilities: string[];
}

export interface ProofStory {
  visual: "response" | "footprint" | "mobility";
  image: string;
  title: string;
  context: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
}

export interface OpenScienceItem {
  icon: "reproducibility" | "open-source" | "standards" | "research";
  title: string;
  description: string;
  details: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export const navItems: NavItem[] = [
  { label: "Who We Work With", href: "#who-we-work-with" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Outcomes", href: "#featured-outcomes" },
  { label: "Research", href: "#open-science" },
  { label: "Contact", href: "#contact" },
];

export const heroProofPoints = [
  "Remote sensing, earth observation, and AI/ML in one delivery team.",
  "Open-science workflows built to be inspectable, reusable, and interoperable.",
  "From rapid pilots to analyst-ready products and production pipelines.",
];

export const heroImages = {
  primary:
    "https://images.unsplash.com/photo-1722083854891-7324e80ad2ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  secondary:
    "https://images.unsplash.com/photo-1736117703416-f260ee174bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

export const audienceFeatureImage =
  "https://images.unsplash.com/photo-1722083854891-7324e80ad2ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export const heroMetrics: HeroMetric[] = [
  {
    label: "Signal sources",
    value: "4+ data layers",
    detail: "Satellite imagery, aerial footage, mobility data, and building footprints.",
  },
  {
    label: "Delivery mode",
    value: "Research to production",
    detail: "Prototype quickly, then harden workflows for operational use.",
  },
  {
    label: "Output shape",
    value: "Maps, models, decisions",
    detail: "Briefings, dashboards, QA-ready layers, and documented methods.",
  },
];

export const partnerLogos: PartnerLogo[] = [
  {
    id: "esa",
    label: "ESA",
  },
  {
    id: "ogc",
    label: "Open Geospatial Consortium",
  },
];

export const audienceSegments: AudienceSegment[] = [
  {
    icon: "agency",
    title: "Space agencies",
    summary:
      "Design mission pilots, earth observation workflows, and analyst tooling that can move from research into operations.",
    outcomes: [
      "Operational pipelines for imagery and derived layers",
      "Reusable evaluation frameworks for model confidence",
      "Delivery formats that support analysts and partner teams",
    ],
  },
  {
    icon: "research",
    title: "Research institutions",
    summary:
      "Turn methods and datasets into reproducible tooling, benchmarkable experiments, and outputs that travel well beyond a paper or pilot.",
    outcomes: [
      "Versioned data and model workflows",
      "Reproducible notebooks and method notes",
      "Deployment paths for prototypes worth operationalizing",
    ],
  },
  {
    icon: "sustainability",
    title: "Sustainability analysts",
    summary:
      "Build decision support around land use, climate, mobility, and infrastructure signals with evidence that can be explained to stakeholders.",
    outcomes: [
      "Auditable indicators and monitoring layers",
      "Scenario-ready geospatial intelligence products",
      "Explainable outputs for policy and ESG reporting",
    ],
  },
  {
    icon: "enterprise",
    title: "Enterprises seeking an edge",
    summary:
      "Translate geo-spatial data into internal intelligence systems that sharpen planning, risk analysis, and product differentiation.",
    outcomes: [
      "Cloud-ready data products and APIs",
      "Domain-specific models tuned to business questions",
      "Delivery that supports internal teams after handoff",
    ],
  },
];

export const capabilityPillars: CapabilityPillar[] = [
  {
    icon: "sensing",
    title: "Geo-spatial AI & remote sensing",
    description:
      "Model, detect, segment, compare, and interpret features across imagery and vector context without losing scientific rigor.",
    outcome: "Outcome: decision-ready layers with documented confidence and analyst context.",
    capabilities: [
      "Feature detection, segmentation, and change analysis",
      "Multi-source fusion across satellite, aerial, and vector datasets",
      "Model evaluation, uncertainty notes, and QA workflows",
      "Analyst-ready outputs for maps, alerts, and downstream tools",
    ],
  },
  {
    icon: "infrastructure",
    title: "Data engineering & cloud infrastructure",
    description:
      "Engineer reliable geo-spatial pipelines that can handle large collections, evolving schemas, and production-grade delivery.",
    outcome: "Outcome: resilient processing systems that move beyond ad hoc scripts and manual fixes.",
    capabilities: [
      "STAC, COG, GeoParquet, and interoperable data pipelines",
      "Batch and near-real-time processing for large areas of interest",
      "GPU-enabled training and inference where the workload demands it",
      "Cloud or hybrid deployment patterns matched to team constraints",
    ],
  },
  {
    icon: "delivery",
    title: "Open-science products & decision support",
    description:
      "Package methods into usable tools, prototypes, and handover materials so client teams can trust, extend, and adopt the work.",
    outcome: "Outcome: products that are explainable to technical teams, decision-makers, and partners alike.",
    capabilities: [
      "Reusable open-source tooling and method documentation",
      "Standards-aware services, metadata, and exchange formats",
      "Dashboards, digital products, and monitoring prototypes",
      "Structured handoff for teams that will run or maintain the work",
    ],
  },
];

export const proofStories: ProofStory[] = [
  {
    visual: "response",
    image:
      "https://images.unsplash.com/photo-1759044420896-f947fa7505c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Rapid flood intelligence for emergency mapping",
    context: "Earth observation response workflow",
    challenge:
      "Analysts were spending too long comparing scenes by hand before they could publish usable situation layers.",
    approach:
      "Lampata combined satellite change cues, quality masks, and analyst review layers into a same-day triage workflow.",
    outcome:
      "The result was a faster first-pass mapping process with clearer confidence notes for briefings, follow-on review, and field coordination.",
    tags: ["Change detection", "Analyst review", "Earth observation"],
  },
  {
    visual: "footprint",
    image:
      "https://images.unsplash.com/photo-1702600002248-3ae3149ee1cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Building footprint harmonisation for urban observatories",
    context: "City-scale data engineering",
    challenge:
      "Municipal footprint data arrived in inconsistent schemas, mixed quality, and uneven geographic coverage.",
    approach:
      "Lampata designed a harmonisation pipeline that aligned source layers, applied QA rules, and prepared a shared footprint product.",
    outcome:
      "Planning and research teams received a consistent building layer, quality flags, and documentation they could extend across jurisdictions.",
    tags: ["Building footprints", "Quality assurance", "Urban analytics"],
  },
  {
    visual: "mobility",
    image:
      "https://images.unsplash.com/photo-1713016601597-ffac0b81bb6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Mobility and land-use signals for sustainability strategy",
    context: "Decision support for analysts",
    challenge:
      "Teams needed to connect movement patterns, land use, and built-environment context without relying on opaque black-box summaries.",
    approach:
      "Lampata fused mobility traces, parcel context, and geo-spatial indicators into interpretable analysis layers and scenario views.",
    outcome:
      "The engagement produced auditable indicators that supported site assessment, policy reasoning, and stakeholder communication.",
    tags: ["Mobility data", "Land use", "Scenario analysis"],
  },
];

export const openScienceItems: OpenScienceItem[] = [
  {
    icon: "reproducibility",
    title: "Reproducible by default",
    description:
      "We structure data, code, and model workflows so another technical team can inspect what happened and rerun it.",
    details: ["Versioned methods", "Documented assumptions", "Portable artifacts"],
  },
  {
    icon: "open-source",
    title: "Open-source where it helps",
    description:
      "Lampata builds reusable tooling and lightweight product foundations instead of locking value inside one-off consulting deliverables.",
    details: ["Reusable libraries", "Practical notebooks", "Clear packaging"],
  },
  {
    icon: "standards",
    title: "Standards-aware integration",
    description:
      "Interoperability matters in geo-spatial work, so we design around formats and interfaces that travel well across teams.",
    details: ["Metadata discipline", "OGC-friendly patterns", "Interchangeable outputs"],
  },
  {
    icon: "research",
    title: "Research collaboration mindset",
    description:
      "We help turn exploratory work into pilot-ready methods, benchmarkable outputs, and materials that can support publication or adoption.",
    details: ["Benchmark design", "Pilot studies", "Method notes"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Clarify the decision to support, the geo-spatial signals that matter, and the operational constraints around data, time, and team capacity.",
    deliverable: "Scoped problem statement and success criteria",
  },
  {
    step: "02",
    title: "Data audit",
    description:
      "Inspect source quality, coverage, metadata, and access patterns to determine what is usable now and what needs engineering work.",
    deliverable: "Data readiness assessment and technical approach",
  },
  {
    step: "03",
    title: "Prototype",
    description:
      "Build and evaluate the model, workflow, or product slice that proves the idea in a way stakeholders can judge quickly.",
    deliverable: "Working prototype with evidence, QA, and review notes",
  },
  {
    step: "04",
    title: "Production or handoff",
    description:
      "Harden the pipeline, document the method, and transfer enough context for your team to operate, extend, or govern the outcome.",
    deliverable: "Operational workflow, documentation, and handover plan",
  },
];

export const contactChecklist = [
  "A concise statement of the question you are trying to answer",
  "What data you already have access to and what remains uncertain",
  "Whether you need a prototype, a production workflow, or an expert audit",
];
