import { withBasePath } from "../lib/paths";

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
  id: "esa" | "ogc" | "pangeo";
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

export interface CaseStudy {
  visual: "ogc" | "urban" | "antarctica";
  badge: string;
  metric: string;
  title: string;
  description: string[];
  outcomes: string[];
  client: string;
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

export interface Publication {
  title: string;
  venue: string;
  year: number;
  kind: "Journal" | "Dataset" | "Conference" | "Report" | "Thesis";
  href?: string;
  summary: string;
}

export interface EarthcodeSectionContent {
  eyebrow: string;
  title: string;
  description: string;
  leadership: string;
}

export interface TrainingTrack {
  title: string;
  purpose: string;
  audience: string;
  topics: string[];
}

export interface TrainingFormat {
  title: string;
  description: string;
  note: string;
}

export interface TrainingVideo {
  title: string;
  source: string;
  url: string;
  youtubeId: string;
  date: string;
  summary: string;
}

export interface TrainingEvent {
  title: string;
  date: string;
  format: string;
  status: "upcoming" | "past";
  link?: string;
}

export interface TrainingRoadmapCourse {
  label: string;
  title: string;
  summary: string;
}

export const trainingRoadmapCourse: TrainingRoadmapCourse = {
  label: "Flagship roadmap",
  title: "Cloud-Native Geospatial Data Science Roadmap",
  summary:
    "The roadmap renderer is intentionally small; edit the concepts and technologies in trainingRoadmap.json.",
};

export const navItems: NavItem[] = [
  { label: "Who We Work With", href: withBasePath("/#who-we-work-with") },
  { label: "Case Studies", href: withBasePath("/#case-studies") },
  { label: "Research", href: withBasePath("/#open-science") },
  { label: "Teaching", href: withBasePath("/training/") },
  { label: "Tech Radar", href: withBasePath("/earth-observation-tech-radar/") },
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

export const audienceSignals = [
  "Earth observation",
  "Remote sensing",
  "Aerial imagery",
  "Mobility data",
  "Building footprints",
  "Geo-spatial engineering",
];

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
  {
    id: "pangeo",
    label: "Pangeo",
  },
];

export const audienceSegments: AudienceSegment[] = [
  {
    icon: "agency",
    title: "Space agencies",
    summary:
      "Mission pilots, earth observation workflows, and analyst tooling built to move into operations.",
    outcomes: [
      "Operational imagery pipelines",
      "Confidence-aware analyst outputs",
    ],
  },
  {
    icon: "research",
    title: "Research institutions",
    summary:
      "Reproducible tooling and benchmarkable methods that outlast a single paper or pilot.",
    outcomes: [
      "Versioned model workflows",
      "Prototype-to-production paths",
    ],
  },
  {
    icon: "sustainability",
    title: "Sustainability analysts",
    summary:
      "Decision support across land use, climate, mobility, and infrastructure with explainable evidence.",
    outcomes: [
      "Auditable monitoring indicators",
      "Scenario-ready geo-spatial products",
    ],
  },
  {
    icon: "enterprise",
    title: "Enterprises seeking an edge",
    summary:
      "Geo-spatial intelligence systems for planning, risk, and product differentiation.",
    outcomes: [
      "Cloud-ready data products",
      "Models tied to business decisions",
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

export const caseStudies: CaseStudy[] = [
  {
    visual: "ogc",
    badge: "Agentic AI",
    metric: "Open Geospatial Consortium",
    title: "GeoAI Reusable Workflows for the OGC OSPD",
    description: [
      "Lampata built an agentic AI system to package research code into re-executable, containerised workflows and generate OGC-compliant metadata across geospatial tools covering coastal vulnerability, flood estimation, and sea ice risk.",
      "A neuro-symbolic approach maps each workflow's execution graph before generating packages and metadata, preventing hallucinations and producing output that is containerised, OGC-validated, and ready to reuse.",
    ],
    outcomes: ["OGC-validated", "Agentic AI", "FAIR Workflows"],
    client: "Applied research · AI engineering · Open science",
  },
  {
    visual: "urban",
    badge: "Urban Analytics",
    metric: "European Union",
    title: "Urban Analytics for the European Union",
    description: [
      "Lampata used AI and Earth Observation data to analyse and map urban development across Europe, producing a classification layer that works from city block to continental scale.",
      "The work supports sustainable urban planning and policy-making across the European Union, turning fragmented national datasets into a consistent evidence base.",
    ],
    outcomes: ["EU-scale", "Policy-ready", "AI + EO"],
    client: "Earth observation · AI classification · Urban policy",
  },
  {
    visual: "antarctica",
    badge: "Geospatial Data Engineering",
    metric: "ESA Polar Sciences Cluster",
    title: "Building Ice Data Cubes for the Antarctic",
    description: [
      "Lampata built an AI-ready data cube for the polar sciences community, harmonising datasets covering basal melt, ice velocity, calving fronts, subglacial lakes, and more into a single Zarr store.",
      "By bringing these data together, researchers gained immediate access to data that previously required significant preprocessing.",
    ],
    outcomes: ["Zarr data cube", "Analysis-ready", "Polar science"],
    client: "Earth Sciences · Cloud-native infrastructure · Open science",
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
    icon: "research",
    title: "Selected publications",
    description:
      "Published papers, datasets, and reports back up Lampata's work in mobility data, urban analytics, FAIR workflows, and Earth observation.",
    details: ["9 research outputs", "EGU 2025", "Population, Space and Place", "Alan Turing report"],
  },
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
];

export const publications: Publication[] = [
  {
    title: "EarthCODE - a FAIR and Open Environment for collaborative research in Earth System Science",
    venue: "EGU General Assembly",
    year: 2025,
    kind: "Conference",
    href: "https://doi.org/10.5194/egusphere-egu25-7070",
    summary:
      "Shows Lampata's direct role in FAIR, open, and collaborative Earth observation infrastructure rather than treating open science as a side note.",
  },
  {
    title: "Advancing Cloud-Native Data Analysis and Publishing with Pangeo Tools in EarthCODE",
    venue: "EGU General Assembly",
    year: 2025,
    kind: "Conference",
    href: "https://doi.org/10.5194/egusphere-egu25-21279",
    summary:
      "Connects Lampata's EarthCODE work to cloud-native analysis, publishing workflows, and the Pangeo tooling stack shaping modern EO delivery.",
  },
  {
    title:
      "Urban exodus? Understanding human mobility in Britain during the COVID-19 pandemic using Meta-Facebook data",
    venue: "Population, Space and Place",
    year: 2023,
    kind: "Journal",
    href: "https://doi.org/10.1002/psp.2637",
    summary:
      "Supports Lampata's mobility and urban analytics positioning with a concrete example of large-scale human movement analysis using new data.",
  },
  {
    title: "Functional Signatures in Great Britain: A dataset",
    venue: "Data in Brief",
    year: 2022,
    kind: "Dataset",
    href: "https://doi.org/10.1016/j.dib.2022.108335",
    summary:
      "Gives Lampata a reusable urban function dataset story that fits decision-ready place intelligence and built-environment analysis.",
  },
  {
    title:
      "Inequalities in experiencing urban functions. An exploration of human digital (geo-)footprints",
    venue: "Environment and Planning B: Urban Analytics and City Science",
    year: 2024,
    kind: "Journal",
    href: "https://doi.org/10.1177/23998083231208507",
    summary:
      "Demonstrates how mobility traces and urban context can be combined to study inequality in how people actually experience cities.",
  },
  {
    title: "Workshop on mobility data in urban science - Report",
    venue: "The Alan Turing Institute",
    year: 2021,
    kind: "Report",
    href: "https://www.turing.ac.uk/news/publications/workshop-mobility-data-urban-science-workshop-report",
    summary:
      "Shows Lampata's role in convening methodological discussion around mobility data, privacy, bias, and practical urban science use.",
  },
  {
    title: "Characterising urban processes using new forms of data and analysis",
    venue: "University of Liverpool",
    year: 2023,
    kind: "Thesis",
    summary:
      "Provides the broader research foundation behind Lampata's urban analytics work and the shift toward new data forms and methods.",
  },
  {
    title: "The productivity effects of polycentricity: A systematic analysis of urban regions in Europe",
    venue: "Papers in Regional Science",
    year: 2023,
    kind: "Journal",
    href: "https://doi.org/10.1111/pirs.12765",
    summary:
      "Adds a stronger regional science and city-systems perspective to Lampata's work on spatial structure, productivity, and polycentric urban regions.",
  },
  {
    title: "Learning Neural Word Salience Scores",
    venue: "Proceedings of the Seventh Joint Conference on Lexical and Computational Semantics",
    year: 2018,
    kind: "Conference",
    href: "https://doi.org/10.18653/v1/S18-2004",
    summary:
      "Signals deeper machine learning experience that underpins present geo-spatial AI work, while remaining secondary to the site's core themes.",
  },
];

export const earthcodeSection: EarthcodeSectionContent = {
  eyebrow: "EarthCODE",
  title: "Making Earth Observation FAIR and Open",
  description:
    "EarthCODE is part of ESA's open-science mission for earth observation, built to help data, workflows, and results become more FAIR, collaborative, and durable across the research community.",
  leadership:
    "Lampata is helping lead that mission into practice by building momentum around the platform, shaping how teams onboard to it, and turning the open-science ambition into something researchers can actually use.",
};

export const contactChecklist = [
  "A concise statement of the question you are trying to answer",
  "What data you already have access to and what remains uncertain",
  "Whether you need a prototype, a production workflow, or an expert audit",
];

export const trainingTracks: TrainingTrack[] = [
  {
    title: "Earth Observation Foundations",
    purpose:
      "Build a practical grounding in earth observation data, sensors, formats, and analysis choices before teams move into delivery work.",
    audience: "For analysts, researchers, and technical teams entering EO workflows.",
    topics: [
      "Mission types, sensor tradeoffs, and spatial-temporal resolution",
      "Raster and vector fundamentals for analysis-ready workflows",
      "Data quality, cloud masking, and uncertainty-aware interpretation",
      "Working with EO outputs in decision support contexts",
    ],
  },
  {
    title: "Geo-spatial AI & ML Workflows",
    purpose:
      "Show how machine learning actually fits into remote sensing production, from labelled data to model review and operational outputs.",
    audience: "For ML practitioners, data scientists, and remote sensing teams building models.",
    topics: [
      "Training data design for detection, segmentation, and change workflows",
      "Evaluation patterns for geo-spatial models and analyst trust",
      "Model error analysis with map-based review loops",
      "Packaging inference outputs for downstream products and teams",
    ],
  },
  {
    title: "FAIR, Open Science & EarthCODE",
    purpose:
      "Teach teams how to turn exploratory EO work into reproducible, FAIR, and shareable science and engineering outputs.",
    audience: "For research groups, open-science practitioners, and public-interest programs.",
    topics: [
      "FAIR principles in applied geo-spatial projects",
      "EarthCODE workflows, reproducibility, and reusable artifacts",
      "Publishing code, methods, and metadata for reuse",
      "Open-science patterns that support institutional adoption",
    ],
  },
  {
    title: "Cloud-Native Geo-spatial Delivery",
    purpose:
      "Bridge the gap between prototypes and production with delivery patterns suited to modern geo-spatial infrastructure.",
    audience: "For engineering teams operationalizing EO or geo-spatial intelligence products.",
    topics: [
      "Cloud-native storage and access patterns for geo-spatial data",
      "Batch and near-real-time pipeline design",
      "Serving analysis outputs through APIs, dashboards, or internal tools",
      "Operational handoff, governance, and support readiness",
    ],
  },
];

export const trainingFormats: TrainingFormat[] = [
  {
    title: "Private team workshops",
    description:
      "Focused sessions for a single organization, tailored to the data, tools, and decisions your team actually works with.",
    note: "Best for in-house capability building and project kickoffs.",
  },
  {
    title: "Live online training",
    description:
      "Remote delivery for distributed teams, with hands-on walkthroughs, Q&A, and practical examples drawn from earth observation work.",
    note: "Best for mixed technical audiences across locations.",
  },
  {
    title: "Tailored training programs",
    description:
      "Multi-session programs designed around a curriculum arc, from foundations through delivery and adoption.",
    note: "Best for teams moving from research into repeatable delivery.",
  },
];

export const trainingVideos: TrainingVideo[] = [
  {
    title: "Creating FAIR Workflows with Agentic AI",
    source: "Dean Summers",
    url: "https://youtu.be/2LVGWiQ2TWs",
    youtubeId: "2LVGWiQ2TWs",
    date: "March 17, 2026",
    summary:
      "A practical session on using agentic AI to support FAIR workflows, with an emphasis on reproducibility, reusable process design, and open-science delivery.",
  },
  {
    title: "FAIR and Open Science in Action An Introduction to EarthCODE - BiDS'25",
    source: "Big Data From Space",
    url: "https://www.youtube.com/watch?v=sLcdFd_iTLg",
    youtubeId: "sLcdFd_iTLg",
    date: "January 30, 2026",
    summary:
      "An introductory session on EarthCODE, FAIR principles, and reproducible Earth observation workflows for teams building open, reusable methods.",
  },
  {
    title: "FAIR and Open Science for Earth Sciences with ESA EarthCODE",
    source: "FOSS4G:UK",
    url: "https://www.youtube.com/watch?v=lqIPHpNGL2U",
    youtubeId: "lqIPHpNGL2U",
    date: "October 9, 2025",
    summary:
      "A practical talk on ESA EarthCODE and the open-science patterns that support reproducible Earth science delivery beyond one-off pilots.",
  },
];

export const trainingEvents: TrainingEvent[] = [
  {
    title: "Earth Observation Open Science Bootcamp",
    date: "September 17, 2026",
    format: "Virtual live workshop",
    status: "upcoming",
    link: "#request-training",
  },
  {
    title: "Geo-spatial AI for Sustainability Teams",
    date: "November 12, 2026",
    format: "Cambridge, UK + online",
    status: "upcoming",
    link: "#request-training",
  },
  {
    title: "FAIR and Open Science in Action: Introduction to EarthCODE",
    date: "January 30, 2026",
    format: "BiDS'25 conference session",
    status: "past",
    link: "https://www.youtube.com/watch?v=sLcdFd_iTLg",
  },
  {
    title: "FAIR and Open Science for Earth Sciences with ESA EarthCODE",
    date: "October 9, 2025",
    format: "FOSS4G:UK, Leeds",
    status: "past",
    link: "https://www.youtube.com/watch?v=lqIPHpNGL2U",
  },
  {
    title: "Reproducible EO Workflows for Research Teams",
    date: "June 12, 2025",
    format: "Private team workshop, Cambridge",
    status: "past",
  },
];
