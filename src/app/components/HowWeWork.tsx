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
              className="panel-surface relative overflow-hidden rounded-[0.75rem] border-t-4 border-t-[#f5d704] p-6"
            >
              {/* Massive watermark step number */}
              <span className="font-display pointer-events-none absolute -right-3 -top-6 select-none text-[8rem] leading-none tracking-[-0.08em] text-[#00458b]/5">
                {step.step}
              </span>

              <div className="relative">
                <span className="font-display text-4xl tracking-[-0.08em] text-[#00458b]/30">
                  {step.step}
                </span>
                {/* Yellow connector */}
                <div className="mt-2 h-[3px] w-8 bg-[#f5d704]" />
                <p className="font-display mt-4 text-2xl tracking-[-0.05em] text-[#00458b]">
                  {step.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#00458b]/76">{step.description}</p>
                <div className="mt-6 rounded-[0.375rem] border border-[#f5d704]/40 bg-[#f5d704]/15 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#00458b]/62">
                    Deliverable
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#00458b]/84">{step.deliverable}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
