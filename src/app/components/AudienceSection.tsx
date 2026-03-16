import { motion, useInView } from "motion/react";
import { Building2, FlaskConical, Landmark, Leaf } from "lucide-react";
import { useRef } from "react";
import { audienceFeatureImage, audienceSegments } from "../content/siteContent";
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
    <section id="who-we-work-with" ref={ref} className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-[2rem] border border-[#00448b]/10 bg-white shadow-[0_28px_70px_-46px_rgba(0,68,139,0.4)]"
        >
          <ImageWithFallback
            src={audienceFeatureImage}
            alt="Earth observation imagery from space"
            className="h-[320px] w-full object-cover md:h-[620px]"
          />
          <div className="border-t border-[#00448b]/10 bg-white px-6 py-5">
            <p className="section-eyebrow mb-2">What Lampata works with</p>
            <p className="text-sm leading-7 text-slate-600">
              Earth observation, remote sensing, aerial imagery, mobility data, building
              footprints, and the engineering needed to turn them into reliable products.
            </p>
          </div>
        </motion.div>

        <div>
          <SectionIntro
            eyebrow="Who we work with"
            title="A geo-spatial research and engineering partner for teams with real decisions to make."
            description="Lampata supports organizations that need technical depth, credible methods, and deliverables that still hold up after the first demo."
            className="mb-10"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {audienceSegments.map((segment, index) => {
              const Icon = iconMap[segment.icon];

              return (
                <motion.div
                  key={segment.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[1.5rem] border border-[#00448b]/10 bg-white p-6 shadow-[0_22px_50px_-42px_rgba(0,68,139,0.25)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00448b] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl tracking-[-0.05em] text-slate-950">
                    {segment.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{segment.summary}</p>

                  <div className="mt-6 space-y-3">
                    {segment.outcomes.map((outcome) => (
                      <div key={outcome} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#c6a34a]" />
                        <p className="text-sm leading-6 text-slate-600">{outcome}</p>
                      </div>
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
