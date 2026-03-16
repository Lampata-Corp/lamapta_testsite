import { ArrowUpRight } from "lucide-react";
import { navItems } from "../content/siteContent";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#00458b]/8 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-xl">
            <BrandMark className="mb-5 w-[22rem] sm:w-[27rem]" />
            <p className="text-base leading-7 text-[#00458b]/76">
              We help teams turn geo-spatial data into decision-ready intelligence using
              earth observation, open-science methods, and production-minded engineering.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="section-eyebrow mb-4">Navigate</p>
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-[#00458b]/84 transition-colors hover:text-[#00458b]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="section-eyebrow mb-4">Start with a problem statement</p>
              <a
                href="mailto:contact@lampata.com"
                className="inline-flex items-center gap-2 text-lg text-[#00458b] transition-colors hover:text-[#00458b]/80"
              >
                contact@lampata.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-sm leading-6 text-[#00458b]/62">
                A concise note about the decision, data, and timeline is enough for a first
                conversation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#00458b]/8 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#00458b]/62">
            © {currentYear} Lampata. All rights reserved.
          </p>
          <p className="text-sm text-[#00458b]/62">
            Built for light, credible storytelling around geo-spatial research and engineering.
          </p>
        </div>
      </div>
    </footer>
  );
}
