import { motion, useInView } from "motion/react";
import { Building2, FlaskConical, Landmark, Leaf } from "lucide-react";
import { useRef } from "react";
import { audienceFeatureImage, audienceSegments, audienceSignals } from "../content/siteContent";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionIntro } from "./SectionIntro";

const iconMap = {
  agency: Landmark,
  research: FlaskConical,
  sustainability: Leaf,
  enterprise: Building2,
};

export function AudienceSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="who-we-work-with" ref={ref} className="bg-[#f5f7fa] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Who we work with"
          title="Geo-spatial research and engineering for teams making operational decisions."
          description="Lampata works with organizations that need rigorous methods, useful deliverables, and technical depth beyond a demo."
          className="mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5"
          >
            <div className="panel-surface overflow-hidden rounded-[0.75rem]">
              <ImageWithFallback
                src={audienceFeatureImage}
                alt="Earth observation imagery from space"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[540px]"
              />

              <div className="border-t border-[#00458b]/10 bg-white px-6 py-6 sm:px-7">
                <p className="section-eyebrow mb-3">What Lampata works with</p>
                <p className="max-w-md text-sm leading-7 text-[#00458b]/76">
                  Satellite, aerial, mobility, and built-environment data shaped into
                  dependable products and decision-ready workflows.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {audienceSignals.map((signal) => (
                    <span key={signal} className="tag-mono text-[#00458b]/82">
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {audienceSegments.map((segment) => {
              const Icon = iconMap[segment.icon];

              return (
                <motion.article
                  key={segment.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45 }}
                  className="panel-surface brand-gold-border-top flex h-full flex-col rounded-[0.75rem] border-t-4 p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="brand-gold-fill flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#00458b]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.05em] text-[#00458b]">
                      {segment.title}
                    </h3>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[#00458b]/76">{segment.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {segment.outcomes.map((outcome) => (
                      <span key={outcome} className="tag-mono text-[#00458b]/82">
                        {outcome}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
