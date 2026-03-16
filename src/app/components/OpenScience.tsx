import { motion, useInView } from "motion/react";
import { FlaskConical, GitBranch, Globe2, Workflow } from "lucide-react";
import { useRef } from "react";
import { openScienceItems } from "../content/siteContent";
import { SectionIntro } from "./SectionIntro";

const iconMap = {
  reproducibility: Workflow,
  "open-source": GitBranch,
  standards: Globe2,
  research: FlaskConical,
};

export function OpenScience() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="open-science" ref={ref} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Open science & research"
          title="Open methods are part of the product, not a side note."
          description="Lampata stands out when the work needs to be explainable, reproducible, and useful to more than one specialist on the client side."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="panel-surface rounded-[0.75rem] p-6"
          >
            <p className="section-eyebrow mb-4">What teams receive</p>
            <h3 className="font-display text-3xl leading-tight tracking-[-0.06em] text-[#00458b]">
              Work that can survive scrutiny after the prototype phase.
            </h3>
            <span className="yellow-rule mt-4 w-12" />

            <blockquote className="mt-5 font-display text-2xl font-semibold italic leading-tight tracking-[-0.04em] text-[#00458b]">
              "Documented, reproducible, and ready to hand off — not a model no one can explain."
            </blockquote>

            <p className="mt-5 text-sm leading-7 text-[#00458b]/76">
              That usually means more than a model output. It means documented data choices,
              evaluation notes, reusable code paths, and a handoff that does not force your
              team to reverse engineer the logic later.
            </p>

            <div className="mt-8 space-y-2">
              {[
                "Model notes and assumptions",
                "Reproducible notebooks or pipeline documentation",
                "Metadata and integration guidance",
                "QA checkpoints and review artifacts",
              ].map((item) => (
                <div key={item} className="tag-mono inline-flex w-full items-center">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {openScienceItems.map((item, index) => {
              const Icon = iconMap[item.icon];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="panel-surface rounded-[0.75rem] p-6"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5d704] text-[#00458b]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl leading-tight tracking-[-0.05em] text-[#00458b]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#00458b]/76">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
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
