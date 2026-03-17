import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { heroImages, heroMetrics } from "../content/siteContent";
import { AnimatedHeadline } from "./AnimatedHeadline";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TrustStrip } from "./TrustStrip";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-24 pt-32 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-16">

        {/* Left column */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="font-display text-balance leading-[0.94] tracking-[-0.08em] text-[#00458b]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            <AnimatedHeadline />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-7 max-w-lg text-lg leading-8 text-[#00458b]/70 md:text-xl"
          >
            Lampata helps space agencies, research institutions, sustainability
            analysts, and enterprises work with satellite imagery, aerial footage,
            and geo-spatial data through rigorous research and practical engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#00458b] px-6 py-3.5 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#00458b]/90"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#featured-outcomes"
              className="inline-flex items-center gap-2 rounded-full border border-[#00458b]/16 bg-white px-6 py-3.5 text-[#00458b] transition-colors duration-200 hover:border-[#00458b] hover:bg-[var(--brand-gold-soft)]"
            >
              View featured work
            </a>
          </motion.div>

          {/* Metrics row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-[#00458b]/10 pt-8"
          >
            {heroMetrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#00458b]/50">
                  {metric.label}
                </p>
                <p className="font-display mt-2 text-sm font-bold leading-snug tracking-[-0.02em] text-[#00458b]">
                  {metric.value}
                </p>
              </div>
            ))}
          </motion.div>

          <TrustStrip className="mt-8 border-t border-[#00458b]/8 pt-6" />
        </div>

        {/* Right column — image with yellow offset frame */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative lg:pr-5 lg:pt-5"
        >
          {/* Yellow frame — peeks out top-right, only visible on desktop */}
          <div className="brand-gold-fill absolute right-0 top-0 hidden h-[78%] w-[78%] rounded-[1rem] lg:block" />

          {/* Image — sits above the yellow via z-index */}
          <div className="relative z-[1] overflow-hidden rounded-[0.75rem] shadow-[0_40px_80px_-24px_rgba(0,69,139,0.35)]">
            <ImageWithFallback
              src={heroImages.primary}
              alt="Satellite earth observation imagery"
              className="h-[480px] w-full object-cover md:h-[560px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
