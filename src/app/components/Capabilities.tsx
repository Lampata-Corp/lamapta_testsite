import { motion, useInView } from "motion/react";
import { Cloud, GitBranch, Satellite } from "lucide-react";
import { useRef } from "react";
import { capabilityPillars } from "../content/siteContent";
import { SectionIntro } from "./SectionIntro";

const iconMap = {
  sensing: Satellite,
  infrastructure: Cloud,
  delivery: GitBranch,
};

export function Capabilities() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="capabilities" ref={ref} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Capabilities"
          title="Capabilities built for research-heavy, operationally important geo-spatial work."
          description="Lampata focuses on three core service pillars that repeatedly matter in geo-spatial AI/ML work, from analysis and engineering to delivery and handoff."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {capabilityPillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon];

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[1.8rem] border border-[#00458b]/10 bg-white p-6 shadow-[0_22px_50px_-42px_rgba(0,69,139,0.18)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00458b] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="section-eyebrow">{pillar.title}</p>
                </div>

                <h3 className="font-display mt-5 text-3xl leading-tight tracking-[-0.06em] text-[#00458b]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#00458b]/76">{pillar.description}</p>

                <div className="mt-6 space-y-3">
                  {pillar.capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="rounded-[1rem] bg-white px-4 py-3 text-sm leading-6 text-[#00458b]/76 ring-1 ring-[#00458b]/8"
                    >
                      {capability}
                    </div>
                  ))}
                </div>

                <p className="mt-6 border-t border-[#00458b]/10 pt-5 text-sm leading-7 text-[#00458b]/84">
                  {pillar.outcome}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
