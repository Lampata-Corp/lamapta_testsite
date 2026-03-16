import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { processSteps } from "../content/siteContent";
import { SectionIntro } from "./SectionIntro";

export function HowWeWork() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="How we work"
          title="A four-step engagement model that keeps geo-spatial work grounded."
          description="The process is simple on purpose: frame the decision, inspect the data, prove the method, then either operationalize it or hand it over cleanly."
        />

        <div className="grid gap-6 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="panel-surface rounded-[1.9rem] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl tracking-[-0.08em] text-[#00458b]/18">
                  {step.step}
                </span>
                <span className="rounded-full bg-[#f5d704]/18 px-3 py-1 text-xs text-[#00458b]">
                  {step.title}
                </span>
              </div>
              <p className="font-display mt-6 text-2xl tracking-[-0.05em] text-[#00458b]">
                {step.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#00458b]/76">{step.description}</p>
              <div className="mt-6 rounded-[1.2rem] border border-[#00458b]/8 bg-white/85 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-[#00458b]/62">
                  Deliverable
                </p>
                <p className="mt-2 text-sm leading-6 text-[#00458b]/84">{step.deliverable}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
