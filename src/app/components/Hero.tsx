import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { heroImages, heroMetrics, heroProofPoints } from "../content/siteContent";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TrustStrip } from "./TrustStrip";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-32 md:pb-24 md:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="section-eyebrow mb-5"
          >
            Geo-spatial AI/ML for good
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-balance text-5xl leading-[0.96] tracking-[-0.08em] text-[#00458b] sm:text-6xl lg:text-7xl"
          >
            Turn complex geo-spatial data into intelligence people can actually use.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-7 text-lg leading-8 text-[#00458b]/76 md:text-xl"
          >
            Lampata helps space agencies, research institutions, sustainability
            analysts, and enterprises work with satellite imagery, aerial footage,
            mobility data, and building footprints through rigorous research,
            practical engineering, and open methods.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00458b] px-6 py-3.5 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#00458b]/90"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#featured-outcomes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00458b]/16 bg-white px-6 py-3.5 text-[#00458b] transition-colors duration-200 hover:border-[#00458b] hover:bg-[#f5d704]/10"
            >
              View featured work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-10 space-y-3"
          >
            {heroProofPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 text-[#00458b]/76">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#00458b]" />
                <p className="text-sm leading-7 md:text-base">{point}</p>
              </div>
            ))}
          </motion.div>

          <TrustStrip className="mt-10 border-t border-[#00458b]/8 pt-6" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] border border-[#00458b]/10 bg-white shadow-[0_30px_80px_-42px_rgba(0,69,139,0.32)]">
            <ImageWithFallback
              src={heroImages.primary}
              alt="Satellite earth observation imagery"
              className="h-[460px] w-full object-cover md:h-[560px]"
            />
          </div>

          <div className="absolute bottom-5 right-5 rounded-[1.4rem] bg-white/95 p-4 shadow-[0_24px_55px_-34px_rgba(0,69,139,0.34)] backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="min-w-[9rem]">
                  <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#00458b]/72">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#00458b]">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-10 left-6 hidden w-[42%] overflow-hidden rounded-[1.5rem] border-4 border-white shadow-[0_26px_55px_-34px_rgba(0,69,139,0.34)] md:block">
            <ImageWithFallback
              src={heroImages.secondary}
              alt="Geo-spatial data visualization"
              className="h-48 w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
