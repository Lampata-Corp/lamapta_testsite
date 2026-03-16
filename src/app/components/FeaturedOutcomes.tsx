import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { proofStories } from "../content/siteContent";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionIntro } from "./SectionIntro";

export function FeaturedOutcomes() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="featured-outcomes" ref={ref} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Featured outcomes"
          title="Representative geo-spatial engagements with clearer visual proof."
          description="Image-led examples of how Lampata applies geo-spatial research and engineering to operational questions across earth observation, urban data, and sustainability analysis."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {proofStories.map((story, index) => (
            <motion.article
              key={story.title}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-[1.8rem] border border-[#00448b]/10 bg-white shadow-[0_26px_60px_-46px_rgba(0,68,139,0.3)]"
            >
              <ImageWithFallback
                src={story.image}
                alt={story.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <p className="section-eyebrow mb-3">{story.context}</p>
                <h3 className="font-display text-3xl leading-tight tracking-[-0.06em] text-slate-950">
                  {story.title}
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#00448b]/72">
                      Challenge
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{story.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#00448b]/72">
                      Approach
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{story.approach}</p>
                  </div>
                  <div className="border-l-4 border-[#c6a34a] bg-[#fff8df] px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#8b6b1f]">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{story.outcome}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#00448b]/6 px-3 py-1 text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
