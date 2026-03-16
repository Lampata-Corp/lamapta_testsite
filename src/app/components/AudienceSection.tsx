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
    <section id="who-we-work-with" ref={ref} className="bg-[#f5f7fa] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="relative lg:pb-4 lg:pl-4"
        >
          <div className="brand-gold-fill absolute bottom-0 left-0 hidden h-[68%] w-[68%] rounded-[0.75rem] lg:block" />

          <div className="relative z-[1] overflow-hidden rounded-[0.75rem] border border-[#00458b]/10 bg-white shadow-[0_28px_70px_-46px_rgba(0,69,139,0.28)]">
            <ImageWithFallback
              src={audienceFeatureImage}
              alt="Earth observation imagery from space"
              className="h-[320px] w-full object-cover md:h-[580px]"
            />
            <div className="border-t border-[#00458b]/10 bg-white px-6 py-5">
              <p className="section-eyebrow mb-2">What Lampata works with</p>
              <p className="text-sm leading-7 text-[#00458b]/76">
                Earth observation, remote sensing, aerial imagery, mobility data, building
                footprints, and the engineering needed to turn them into reliable products.
              </p>
            </div>
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
                  className="brand-gold-border-top relative overflow-hidden rounded-[0.75rem] border border-[#00458b]/10 border-t-4 bg-white p-6 shadow-[0_22px_50px_-42px_rgba(0,69,139,0.2)]"
                >
                  {/* Watermark step number */}
                  <span className="font-display pointer-events-none absolute -right-2 -top-4 select-none text-[6rem] leading-none tracking-[-0.08em] text-[#00458b]/5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <div className="brand-gold-fill mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-[#00458b]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.05em] text-[#00458b]">
                      {segment.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#00458b]/76">{segment.summary}</p>
                    <div className="mt-5 space-y-2.5">
                      {segment.outcomes.map((outcome) => (
                        <div key={outcome} className="flex gap-3">
                          <span className="brand-gold-dot mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                          <p className="text-sm leading-6 text-[#00458b]/70">{outcome}</p>
                        </div>
                      ))}
                    </div>
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
