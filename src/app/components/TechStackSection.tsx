import { motion, useInView } from "motion/react";
import {
  Activity,
  AppWindow,
  ArrowUpRight,
  BrainCircuit,
  Database,
  HardDrive,
  Network,
  ServerCog,
  ShieldCheck,
  Waypoints,
} from "lucide-react";
import { useRef } from "react";
import airflowLogo from "../../assets/logos/tech/airflow.svg";
import awsLogo from "../../assets/logos/tech/aws.png";
import azureLogo from "../../assets/logos/tech/azure.png";
import daskLogo from "../../assets/logos/tech/dask.png";
import duckdbLogo from "../../assets/logos/tech/duckdb.png";
import geopandasLogo from "../../assets/logos/tech/geopandas.png";
import jupyterhubLogo from "../../assets/logos/tech/jupyterhub.png";
import kubernetesLogo from "../../assets/logos/tech/kubernetes.png";
import leafletLogo from "../../assets/logos/tech/leaflet.png";
import pangeoLogo from "../../assets/logos/tech/pangeo-logo.png";
import postgisLogo from "../../assets/logos/tech/postgis.png";
import pythonLogo from "../../assets/logos/tech/python.png";
import scikitlearnLogo from "../../assets/logos/tech/scikitlearn.svg";
import torchgeoLogo from "../../assets/logos/tech/torchgeo.png";
import xarrayLogo from "../../assets/logos/tech/xarray.png";
import {
  techStackApproach,
  techStackCategories,
  techStackFocus,
  techStackSection,
} from "../content/siteContent";
import { SectionIntro } from "./SectionIntro";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

const categoryIconMap = {
  core: Waypoints,
  raster: HardDrive,
  frontend: AppWindow,
  realtime: Activity,
  apis: ServerCog,
  analysis: BrainCircuit,
  infrastructure: Network,
  devsecops: ShieldCheck,
  databases: Database,
  warehouse: HardDrive,
} as const;

const techLogoMap = {
  airflow: airflowLogo,
  aws: awsLogo,
  azure: azureLogo,
  dask: daskLogo,
  duckdb: duckdbLogo,
  geopandas: geopandasLogo,
  jupyterhub: jupyterhubLogo,
  kubernetes: kubernetesLogo,
  leaflet: leafletLogo,
  pangeo: pangeoLogo,
  postgis: postgisLogo,
  python: pythonLogo,
  scikitlearn: scikitlearnLogo,
  torchgeo: torchgeoLogo,
  xarray: xarrayLogo,
} as const;

const techLogoClassMap = {
  airflow: "max-h-[6.15rem] sm:max-h-[7.3rem]",
  aws: "max-h-[4.35rem] sm:max-h-[5rem]",
  azure: "max-h-[6.15rem] sm:max-h-[7.3rem]",
  dask: "max-h-[6.15rem] sm:max-h-[7.3rem]",
  duckdb: "max-h-[6.15rem] sm:max-h-[7.3rem]",
  geopandas: "max-h-[8.95rem] sm:max-h-[10.45rem]",
  jupyterhub: "max-h-[6.8rem] sm:max-h-[8rem]",
  kubernetes: "max-h-[6.7rem] sm:max-h-[7.85rem]",
  leaflet: "max-h-[6.15rem] sm:max-h-[7.3rem]",
  pangeo: "max-h-[8.75rem] sm:max-h-[10.15rem]",
  postgis: "max-h-[5.3rem] sm:max-h-[6.4rem]",
  python: "max-h-[5.1rem] sm:max-h-[6.2rem]",
  scikitlearn: "max-h-[6.15rem] sm:max-h-[7.3rem]",
  torchgeo: "max-h-[7.2rem] sm:max-h-[8.4rem]",
  xarray: "max-h-[6.8rem] sm:max-h-[8rem]",
} as const;

export function TechStackSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="tech-stack" ref={ref} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start xl:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="lg:pr-8 lg:pt-4 xl:pt-5"
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-3 sm:gap-x-9 sm:gap-y-8 lg:grid-cols-2 xl:grid-cols-3">
              {techStackFocus.map((tech) => (
                <a
                  key={tech.id}
                  href={tech.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={tech.label}
                  className="group inline-flex min-w-0 items-center justify-center"
                >
                  <div className="flex h-[8.45rem] items-center justify-center sm:h-[9.7rem]">
                    <img
                      src={techLogoMap[tech.id]}
                      alt={`${tech.label} logo`}
                      loading="lazy"
                      className={`w-auto max-w-full object-contain transition duration-200 group-hover:-translate-y-0.5 ${techLogoClassMap[tech.id]}`}
                    />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <SectionIntro
              eyebrow={techStackSection.eyebrow}
              title={techStackSection.title}
              description={techStackSection.description}
              className="mb-3"
            />

            <div className="rounded-[1rem] border border-[#00458b]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,251,255,0.94))] p-4 sm:p-5">
              <h3 className="font-display text-[1.18rem] leading-[1.02] tracking-[-0.05em] text-[#00458b] sm:text-[1.32rem]">
                {techStackApproach.title}
              </h3>
              <p className="mt-1.5 max-w-2xl text-[0.92rem] leading-6 text-[#00458b]/74">
                {techStackApproach.description}
              </p>

              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {techStackApproach.steps.map((step, index) => {
                  const isGold = index % 2 === 0;
                  const isLargeLayer =
                    step.stackLabel === "APIs" ||
                    step.stackLabel === "AI & Geospatial Analytics" ||
                    step.stackLabel === "Infrastructure & Platform";

                  return (
                    <div
                      key={step.stackLabel}
                      className={`group relative ${isLargeLayer ? "sm:col-span-2" : ""}`}
                    >
                      <button
                        type="button"
                        className={`w-full rounded-[0.85rem] border-2 px-3.5 py-2.5 text-center font-display text-[0.9rem] leading-tight tracking-[-0.04em] text-[#00458b] shadow-[0_10px_24px_-18px_rgba(0,69,139,0.22)] transition duration-200 hover:-translate-y-1 hover:bg-[linear-gradient(135deg,rgba(255,195,41,0.18),rgba(255,255,255,0.98)_48%,rgba(0,69,139,0.06))] hover:shadow-[0_24px_52px_-24px_rgba(0,69,139,0.38)] focus-visible:-translate-y-1 focus-visible:bg-[linear-gradient(135deg,rgba(255,195,41,0.18),rgba(255,255,255,0.98)_48%,rgba(0,69,139,0.06))] focus-visible:shadow-[0_24px_52px_-24px_rgba(0,69,139,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00458b]/18 sm:text-[0.94rem] ${
                          isGold ? "border-[var(--brand-gold-strong)]" : "border-[#00458b]"
                        }`}
                      >
                        {step.stackLabel}
                      </button>

                      <div className="pointer-events-none absolute left-1/2 top-0 z-20 w-[min(17rem,calc(100vw-4rem))] -translate-x-1/2 -translate-y-[calc(100%+0.55rem)] opacity-0 transition duration-150 group-hover:opacity-100 group-hover:-translate-y-[calc(100%+0.75rem)] group-focus-within:opacity-100 group-focus-within:-translate-y-[calc(100%+0.75rem)]">
                        <div className="rounded-[0.85rem] border border-[#00458b]/14 bg-white px-4 py-3 text-left shadow-[0_24px_64px_-28px_rgba(0,69,139,0.32)]">
                          <p className="font-semibold text-[#00458b]">{step.title}</p>
                          <p className="mt-1 text-sm leading-6 text-[#00458b]/78">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group mt-6 flex w-full items-center justify-between gap-4 rounded-[1rem] border border-[var(--brand-gold-strong)]/60 bg-[linear-gradient(135deg,rgba(255,195,41,0.2),rgba(255,255,255,0.98)_54%,rgba(0,69,139,0.08))] px-5 py-4 text-left shadow-[0_22px_54px_-34px_rgba(0,69,139,0.42)] transition-transform duration-200 hover:-translate-y-0.5 sm:px-6 sm:py-5"
                >
                  <div className="min-w-0">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#00458b]/62">
                      Full stack view
                    </p>
                    <p className="mt-1 font-display text-[1.2rem] leading-tight tracking-[-0.05em] text-[#00458b] sm:text-[1.45rem]">
                      {techStackSection.ctaLabel}
                    </p>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-[#00458b]/74">
                      Open the full Lampata stack across data platforms, analytics, APIs,
                      applications, and infrastructure.
                    </p>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00458b] text-white transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </button>
              </DialogTrigger>

              <DialogContent className="max-h-[calc(100vh-1rem)] max-w-[calc(100%-1.5rem)] grid-rows-[auto_minmax(0,1fr)] gap-0 overflow-hidden rounded-[1rem] border-[#00458b]/10 p-0 sm:max-h-[90vh] sm:max-w-6xl">
                <div className="border-b border-[#00458b]/10 px-6 py-6 sm:px-8">
                  <DialogHeader className="text-left">
                    <p className="section-eyebrow mb-4 w-fit">Lampata - Tech Stack</p>
                    <DialogTitle className="font-display text-[2rem] leading-tight tracking-[-0.06em] text-[#00458b] sm:text-[2.4rem]">
                      Open geo-spatial delivery across analytics, APIs, applications, and infrastructure
                    </DialogTitle>
                    <DialogDescription className="max-w-4xl text-sm leading-7 text-[#00458b]/72">
                      The stack below brings together the technologies Lampata uses across open
                      geo-spatial analysis, cloud-native earth observation, APIs, applications,
                      and infrastructure.
                    </DialogDescription>
                  </DialogHeader>
                </div>

                <ScrollArea className="min-h-0">
                  <div className="grid gap-4 px-6 py-6 pr-10 sm:grid-cols-2 sm:px-8">
                    {techStackCategories.map((category) => {
                      const Icon = categoryIconMap[category.id];

                      return (
                        <article
                          key={category.title}
                          className="rounded-[0.9rem] border border-[#00458b]/10 bg-[#f8fbff] p-5"
                        >
                          <div className="flex items-start gap-4">
                            <div className="brand-gold-fill flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#00458b]">
                              <Icon className="h-5 w-5" />
                            </div>

                            <div className="min-w-0">
                              <h3 className="font-display text-[1.35rem] leading-tight tracking-[-0.05em] text-[#00458b]">
                                {category.title}
                              </h3>
                              <p className="mt-3 text-sm leading-7 text-[#00458b]/74">
                                {category.description}
                              </p>
                            </div>
                          </div>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {category.items.map((item) => (
                              <span key={item} className="tag-mono text-[#00458b]/82">
                                {item}
                              </span>
                            ))}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
