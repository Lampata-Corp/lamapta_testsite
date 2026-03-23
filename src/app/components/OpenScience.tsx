import { motion, useInView } from "motion/react";
import { ArrowUpRight, FlaskConical, GitBranch, Globe2, Workflow } from "lucide-react";
import { useRef } from "react";
import { openScienceItems, publications } from "../content/siteContent";
import { withBasePath } from "../lib/paths";
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

const iconMap = {
  reproducibility: Workflow,
  "open-source": GitBranch,
  standards: Globe2,
  research: FlaskConical,
};

export function OpenScience() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const radarHref = withBasePath("/earth-observation-tech-radar/");
  const researchItem = openScienceItems.find((item) => item.icon === "research");
  const supportingItems = openScienceItems.filter((item) => item.icon !== "research");
  const highlightedPublications = publications.slice(0, 4);

  return (
    <section id="open-science" ref={ref} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            eyebrow="Open science & research"
            title="Open methods are part of the product, not a side note."
            description="Lampata stands out when the work needs to be explainable, reproducible, and supported by methods that can hold up beyond a single project."
            className="mb-0"
          />

          <motion.a
            href={radarHref}
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="group relative overflow-hidden rounded-[0.75rem] border border-[#00458b]/10 bg-[linear-gradient(135deg,rgba(245,215,4,0.96),rgba(255,249,191,0.9))] p-6 shadow-[0_28px_60px_-42px_rgba(0,69,139,0.28)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-y-0 right-0 w-28 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_70%)]" />
            <div className="relative">
              <p className="section-eyebrow mb-3 border-l-[#00458b] text-[#00458b]/74">
                Earth Observation Tech Radar
              </p>
              <h3 className="font-display max-w-xl text-[1.85rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[#00458b]">
                Explore the tools, standards, and practices shaping downstream earth observation work.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#00458b]/76">
                Browse the radar Lampata maintains to see the open-source ecosystem,
                interoperability patterns, and delivery practices informing modern geo-spatial teams.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#00458b] px-5 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-[#00376f]">
                Explore the Tech Radar
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </motion.a>
        </div>

        {researchItem ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-6 overflow-hidden rounded-[1rem] border border-[#00458b]/10 bg-[linear-gradient(135deg,rgba(245,215,4,0.2),rgba(255,255,255,0.98)_48%,rgba(0,69,139,0.06))] shadow-[0_32px_70px_-52px_rgba(0,69,139,0.24)]"
          >
            <div className="grid gap-8 p-7 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <div className="brand-gold-fill mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-[#00458b]">
                  <FlaskConical className="h-6 w-6" />
                </div>

                <p className="section-eyebrow mb-4">Research archive</p>
                <h3 className="font-display max-w-2xl text-[2rem] leading-[0.96] tracking-[-0.06em] text-[#00458b] sm:text-[2.6rem]">
                  {researchItem.title} that open into the full body of work.
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#00458b]/74">
                  {researchItem.description} Use the archive to browse the full list without
                  turning the homepage into a CV.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {researchItem.details.map((detail) => (
                    <span key={detail} className="tag-mono text-[#00458b]/82">
                      {detail}
                    </span>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="brand-gold-button mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-[#00458b] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Browse all research
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-w-[calc(100%-1.5rem)] gap-0 rounded-[1rem] border-[#00458b]/10 p-0 sm:max-w-4xl">
                    <div className="border-b border-[#00458b]/10 px-6 py-6 sm:px-8">
                      <DialogHeader className="text-left">
                        <p className="section-eyebrow mb-4 w-fit">Research Archive</p>
                        <DialogTitle className="font-display text-[2rem] leading-tight tracking-[-0.06em] text-[#00458b] sm:text-[2.4rem]">
                          Selected research and scientific publications
                        </DialogTitle>
                        <DialogDescription className="max-w-3xl text-sm leading-7 text-[#00458b]/72">
                          A fuller list of the papers, datasets, and reports that inform
                          Lampata's work across urban analytics, mobility data, FAIR open
                          science, and Earth observation.
                        </DialogDescription>
                      </DialogHeader>
                    </div>

                    <ScrollArea className="h-[70vh]">
                      <div className="grid gap-4 px-6 py-6 pr-10 sm:px-8">
                        {publications.map((publication, publicationIndex) => (
                          <article
                            key={publication.title}
                            className="rounded-[0.9rem] border border-[#00458b]/10 bg-[#f8fbff] p-5"
                          >
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                              <div className="flex gap-4 sm:gap-5">
                                <div className="brand-gold-fill flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold text-[#00458b]">
                                  {publicationIndex + 1}
                                </div>

                                <div className="min-w-0">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="tag-mono text-[#00458b]/84">
                                      {publication.kind}
                                    </span>
                                    <p className="text-sm leading-6 text-[#00458b]/56">
                                      {publication.venue} · {publication.year}
                                    </p>
                                  </div>

                                  <h3 className="mt-3 break-words font-display text-[1.25rem] leading-tight tracking-[-0.05em] text-[#00458b] sm:text-[1.4rem]">
                                    {publication.title}
                                  </h3>

                                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#00458b]/74">
                                    {publication.summary}
                                  </p>
                                </div>
                              </div>

                              {publication.href ? (
                                <a
                                  href={publication.href}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#00458b]/12 bg-white px-4 py-2.5 text-sm font-semibold text-[#00458b] transition-colors hover:border-[#00458b]/28 hover:bg-white"
                                >
                                  View publication
                                  <ArrowUpRight className="h-4 w-4" />
                                </a>
                              ) : null}
                            </div>
                          </article>
                        ))}
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="panel-surface rounded-[0.9rem] p-6">
                <p className="section-eyebrow mb-4">Inside the archive</p>
                <div className="space-y-3">
                  {highlightedPublications.map((publication) => (
                    <div
                      key={publication.title}
                      className="brand-gold-border-left border-l-2 pl-3"
                    >
                      <p className="text-sm font-semibold leading-6 text-[#00458b]">
                        {publication.title}
                      </p>
                      <p className="text-sm leading-6 text-[#00458b]/58">
                        {publication.venue} · {publication.year}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-[#00458b]/68">
                  Plus {publications.length - highlightedPublications.length} more outputs
                  spanning journals, reports, datasets, and conference papers.
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="panel-surface flex flex-col rounded-[0.75rem] p-8"
          >
            <p className="section-eyebrow mb-5">What teams receive</p>
            <h3 className="font-display text-2xl leading-tight tracking-[-0.06em] text-[#00458b]">
              Work that can survive scrutiny after the prototype phase.
            </h3>
            <span className="yellow-rule mt-4 w-12" />

            <blockquote className="mt-6 font-display text-xl font-semibold italic leading-tight tracking-[-0.03em] text-[#00458b]">
              "Documented, reproducible, and ready to hand off — not a model no one can explain."
            </blockquote>

            <p className="mt-5 text-sm leading-7 text-[#00458b]/76">
              That usually means more than a model output. It means documented data choices,
              evaluation notes, reusable code paths, selected research outputs, and a
              handoff that does not force your team to reverse engineer the logic later.
            </p>

            <div className="mt-6 grow space-y-2">
              {[
                "Model notes and assumptions",
                "Reproducible notebooks or pipeline documentation",
                "Metadata and integration guidance",
                "QA checkpoints and review artifacts",
                "Selected publications and reports where the work benefits from formal dissemination",
              ].map((item) => (
                <div
                  key={item}
                  className="brand-gold-border-left border-l-2 pl-3 text-sm leading-6 text-[#00458b]/76"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {supportingItems.map((item, index) => {
              const Icon = iconMap[item.icon];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="panel-surface flex h-full flex-col rounded-[0.75rem] p-6"
                >
                  <div className="brand-gold-fill mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-[#00458b]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl leading-tight tracking-[-0.05em] text-[#00458b]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#00458b]/76">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.details.map((detail) => (
                      <span key={detail} className="tag-mono">
                        {detail}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
