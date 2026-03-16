import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../content/siteContent";
import { BrandMark } from "./BrandMark";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[#0f2745]/8 bg-white/92 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="w-[13rem] shrink-0 sm:w-[15.5rem]" aria-label="Lampata home">
            <BrandMark />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-600 transition-colors hover:text-[#00448b]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#00448b] px-5 py-2.5 text-sm text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#00356d]"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full border border-[#0f2745]/10 p-2 text-slate-700 transition-colors hover:text-[#00448b] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="panel-surface mt-4 flex flex-col gap-4 rounded-[1.5rem] p-5 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-[#0f2745]/8 pb-3 text-slate-700 transition-colors hover:text-[#00448b]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00448b] px-5 py-3 text-center text-white"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
