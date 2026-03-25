import { motion, useInView } from "motion/react";
import { ArrowUpRight, Building2, FlaskConical, Landmark, Leaf } from "lucide-react";
import { useRef } from "react";
import { audienceSegments, openScienceItems, publications } from "../content/siteContent";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

const audienceIconMap = {
  agency: Landmark,
  research: FlaskConical,
  sustainability: Leaf,
  enterprise: Building2,
};

export function OpenScience() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const researchItem = openScienceItems.find((item) => item.icon === "research");
  const highlightedPublications = publications.slice(0, 4);

  return (
    <section id="open-science" ref={ref} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-0 flex max-w-5xl flex-col gap-4">
          <span className="section-eyebrow self-start">Open science & research</span>
          <h2 className="section-title max-w-5xl text-balance text-left">
            Open methods are part of the product, not a side note.
          </h2>
          <p className="section-copy max-w-4xl text-left">
            Lampata stands out when the work needs to be explainable, reproducible, and
            supported by methods that can hold up beyond a single project.
          </p>
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
            <p className="section-eyebrow mb-5">Where this shows up</p>
            <h3 className="font-display text-2xl leading-tight tracking-[-0.06em] text-[#00458b]">
              Open-science delivery that lands in real programmes, institutions, and operational teams.
            </h3>
            <span className="yellow-rule mt-4 w-12" />

            <p className="mt-6 text-sm leading-7 text-[#00458b]/76">
              The same research standards show up across the client work: space-agency
              programmes, research institutions, public-interest analysis, and commercial
              teams that need delivery to hold up after the first prototype.
            </p>

            <div className="mt-6 grow space-y-2">
              {[
                "Operational earth observation workflows and analyst tooling",
                "Reusable research methods and FAIR publishing patterns",
                "Sustainability, mobility, and built-environment analysis",
                "Prototype-to-production paths with documented handoff",
                "Evidence that can be inspected, reused, and defended",
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
            {audienceSegments.map((segment, index) => {
              const Icon = audienceIconMap[segment.icon];

              return (
                <motion.div
                  key={segment.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="panel-surface flex h-full flex-col rounded-[0.75rem] p-6"
                >
                  <div className="brand-gold-fill mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-[#00458b]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl leading-tight tracking-[-0.05em] text-[#00458b]">
                    {segment.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#00458b]/76">{segment.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {segment.outcomes.map((outcome) => (
                      <span key={outcome} className="tag-mono text-[#00458b]/82">
                        {outcome}
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
