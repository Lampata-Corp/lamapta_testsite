import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { partnerLogos } from "../content/siteContent";
import esaSiteLogo from "../../assets/logos/esa-site-logo.svg";
import esaTitleLogo from "../../assets/logos/esa-title-logo.svg";
import ogcSiteLogo from "../../assets/logos/ogc-site-logo.svg";
import { cn } from "./ui/utils";

interface TrustStripProps {
  className?: string;
}

export function TrustStrip({ className }: TrustStripProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45 }}
      className={cn("flex flex-wrap items-center gap-x-4 gap-y-2.5 lg:flex-nowrap", className)}
    >
      <p className="font-brand text-[1.45rem] font-bold uppercase leading-none tracking-[-0.06em] text-[#00448b] sm:text-[1.55rem]">
        Trusted <span className="text-[#c6a34a]">By:</span>
      </p>

      {partnerLogos.map((partner, index) => (
        <motion.div
          key={partner.id}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: index * 0.08 }}
          className="shrink-0"
          aria-label={partner.label}
        >
          {partner.id === "esa" ? (
            <div className="flex h-[4.8rem] w-[10.75rem] flex-col items-center justify-center gap-1.5 text-center sm:h-[5rem] sm:w-[11.5rem]">
              <img
                src={esaSiteLogo}
                alt="ESA"
                className="h-7 w-auto object-contain [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(88%)_saturate(2410%)_hue-rotate(197deg)_brightness(93%)_contrast(102%)] sm:h-8"
                loading="lazy"
              />
              <img
                src={esaTitleLogo}
                alt="European Space Agency"
                className="h-2.5 w-auto object-contain [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(88%)_saturate(2410%)_hue-rotate(197deg)_brightness(93%)_contrast(102%)] sm:h-2.5"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="flex h-[4.8rem] w-[10.75rem] items-center justify-center sm:h-[5rem] sm:w-[11.5rem]">
              <img
                src={ogcSiteLogo}
                alt={partner.label}
                className="h-8 w-auto object-contain [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(88%)_saturate(2410%)_hue-rotate(197deg)_brightness(93%)_contrast(102%)] sm:h-9"
                loading="lazy"
              />
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
