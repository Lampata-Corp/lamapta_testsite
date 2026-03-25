import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { audienceFeatureImage, whoWeArePillars, whoWeAreSignals } from "../content/siteContent";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionIntro } from "./SectionIntro";

export function AudienceSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="who-we-are" ref={ref} className="bg-[#f5f7fa] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Who we are"
          title="Open geo-spatial transformation, research, training, and delivery in one team."
          description="Lampata helps organisations build capability they keep: open earth-observation workflows, owned infrastructure, research-led methods, and products designed to live beyond a pilot."
          className="mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="h-full"
          >
            <div className="panel-surface h-full overflow-hidden rounded-[0.75rem]">
              <div className="grid h-full lg:grid-rows-[0.48fr_0.52fr]">
                <ImageWithFallback
                  src={audienceFeatureImage}
                  alt="Earth observation imagery from space"
                  className="h-[320px] w-full object-cover sm:h-[420px] lg:h-full lg:min-h-0"
                />

                <div className="flex h-full flex-col border-t border-[#00458b]/10 bg-white px-6 py-6 sm:px-7">
                  <p className="section-eyebrow mb-3">How we work</p>
                  <h3 className="font-display max-w-lg text-[2rem] leading-[0.96] tracking-[-0.06em] text-[#00458b] sm:text-[2.45rem]">
                    Open geo-spatial work that leaves your team owning the stack.
                  </h3>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-[#00458b]/76">
                    We help teams move from proprietary dependence to open, inspectable
                    systems across data, infrastructure, applications, and delivery
                    workflows.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {whoWeAreSignals.map((signal) => (
                      <span key={signal} className="tag-mono text-[#00458b]/82">
                        {signal}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:h-full lg:grid-cols-2 lg:grid-rows-2 lg:auto-rows-fr">
            {whoWeArePillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="brand-gold-border-top panel-surface flex h-full flex-col rounded-[0.75rem] border-t-4 p-6"
              >
                <p className="section-eyebrow mb-4">{pillar.title}</p>
                <h3 className="font-display text-[1.55rem] leading-tight tracking-[-0.05em] text-[#00458b]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#00458b]/76">{pillar.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {pillar.details.map((detail) => (
                    <span key={detail} className="tag-mono text-[#00458b]/82">
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
