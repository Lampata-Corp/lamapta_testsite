import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import earthcodeLogo from "../../assets/logos/earthcode-logo.png";
import earthcodePlanet from "../../assets/logos/earthcodeplanet.png";
import esaSiteLogo from "../../assets/logos/esa-site-logo.svg";
import { earthcodeSection } from "../content/siteContent";

export function EarthcodeSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="earthcode" ref={ref} className="earthcode-section px-6 py-28 lg:py-32">
      <motion.div
        aria-hidden="true"
        initial={{ x: 140, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-[-7rem] top-[-0.5rem] z-0 h-[24rem] w-[46rem] rounded-full blur-[140px] sm:right-[-8rem] sm:top-[-1rem] sm:h-[34rem] sm:w-[64rem] lg:right-[-10rem] lg:top-[-4rem] lg:h-[50rem] lg:w-[94rem] xl:right-[-12rem] xl:top-[-5rem] xl:h-[58rem] xl:w-[108rem]"
        style={{
          background:
            "radial-gradient(ellipse at 48% 46%, rgba(159, 211, 202, 0.72) 0%, rgba(159, 211, 202, 0.62) 22%, rgba(159, 211, 202, 0.44) 42%, rgba(159, 211, 202, 0.22) 58%, rgba(159, 211, 202, 0.08) 70%, rgba(159, 211, 202, 0) 82%)",
        }}
      />

      <motion.div
        aria-hidden="true"
        initial={{ x: 120, y: -24, scale: 0.96, opacity: 0 }}
        animate={isInView ? { x: 0, y: 0, scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-[-3rem] top-[-3rem] z-0 h-[28rem] w-[56rem] rounded-full blur-[128px] sm:right-[-4rem] sm:top-[-5rem] sm:h-[40rem] sm:w-[72rem] lg:right-[-5rem] lg:top-[-7rem] lg:h-[58rem] lg:w-[108rem] xl:right-[-6rem] xl:top-[-8rem] xl:h-[68rem] xl:w-[120rem]"
        style={{
          background:
            "radial-gradient(ellipse at 44% 40%, rgba(159, 211, 202, 0.74) 0%, rgba(159, 211, 202, 0.66) 18%, rgba(159, 211, 202, 0.5) 34%, rgba(159, 211, 202, 0.28) 50%, rgba(159, 211, 202, 0.12) 64%, rgba(159, 211, 202, 0.04) 74%, rgba(159, 211, 202, 0) 86%)",
        }}
      />

      <motion.img
        src={earthcodePlanet}
        alt=""
        aria-hidden="true"
        initial={{ x: 120, y: -24, scale: 0.96, opacity: 0 }}
        animate={isInView ? { x: 0, y: 0, scale: 1, opacity: 0.14 } : {}}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -right-10 -top-3 z-[1] w-[24rem] max-w-none mix-blend-multiply saturate-[0.82] sm:-right-10 sm:-top-5 sm:w-[35rem] lg:-right-20 lg:-top-[6.5rem] lg:w-[58rem] xl:-right-24 xl:-top-[7.5rem] xl:w-[66rem]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-4xl pr-4 sm:pr-10 lg:min-h-[31rem] lg:pr-28 xl:pr-40">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="pt-1"
          >
            <div className="mb-14 flex max-w-3xl flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.06 }}
                className="flex flex-wrap items-center gap-4 sm:gap-5"
              >
                <span className="section-eyebrow shrink-0 text-[1.12rem] font-bold tracking-[0.18em] sm:text-[1.22rem] lg:text-[1.34rem]">
                  {earthcodeSection.eyebrow}
                </span>
                <img
                  src={earthcodeLogo}
                  alt="EarthCODE logo"
                  className="h-[3.2rem] w-auto object-contain sm:h-[3.7rem] lg:h-[4.25rem]"
                />
                <img
                  src={esaSiteLogo}
                  alt="ESA"
                  className="h-7 w-auto object-contain [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(88%)_saturate(2410%)_hue-rotate(197deg)_brightness(93%)_contrast(102%)] sm:h-8 lg:h-9"
                />
              </motion.div>

              <h2 className="section-title max-w-4xl text-balance">
                {earthcodeSection.title}
              </h2>
              <p className="section-copy">{earthcodeSection.description}</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="mt-8 max-w-2xl"
            >
              <span className="yellow-rule mb-6 w-16" />
              <p className="text-[1.02rem] leading-8 text-[#00458b]/78 sm:text-[1.08rem] sm:leading-8">
                {earthcodeSection.leadership}
              </p>
              <a
                href="https://opensciencedata.esa.int/catalog"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#00458b]/14 bg-white/88 px-4 py-2.5 text-sm font-semibold text-[#00458b] shadow-[0_16px_36px_-28px_rgba(0,69,139,0.34)] transition-colors hover:border-[#00458b]/28 hover:bg-white"
              >
                Check Out EarthCODE
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
