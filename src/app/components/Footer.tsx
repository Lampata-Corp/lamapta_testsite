import { ArrowUpRight } from "lucide-react";
import { navItems } from "../content/siteContent";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00458b]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-xl">
            <BrandMark variant="light" className="mb-5 w-[22rem] sm:w-[27rem]" />
            <p className="text-base leading-7 text-white/60">
              We help teams turn geo-spatial data into decision-ready intelligence using
              earth observation, open-science methods, and production-minded engineering.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p
                className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/50"
                style={{ borderLeft: "3px solid #f5d704", paddingLeft: "0.6rem" }}
              >
                Navigate
              </p>
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p
                className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/50"
                style={{ borderLeft: "3px solid #f5d704", paddingLeft: "0.6rem" }}
              >
                Start with a problem statement
              </p>
              <a
                href="mailto:contact@lampata.com"
                className="inline-flex items-center gap-2 text-lg text-white transition-colors hover:text-white/80"
              >
                contact@lampata.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-sm leading-6 text-white/50">
                A concise note about the decision, data, and timeline is enough for a first
                conversation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/40">
            © {currentYear} Lampata. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Built for light, credible storytelling around geo-spatial research and engineering.
          </p>
        </div>
      </div>
    </footer>
  );
}
