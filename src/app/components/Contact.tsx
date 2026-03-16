import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Mail, MessageSquareText } from "lucide-react";
import { useRef } from "react";
import { contactChecklist } from "../content/siteContent";

export function Contact() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subjectSource = formData.organization || formData.name || "New enquiry";
    const subject = `Lampata enquiry - ${subjectSource}`;
    const body = [
      `Name: ${formData.name || "Not provided"}`,
      `Organization: ${formData.organization || "Not provided"}`,
      `Email: ${formData.email || "Not provided"}`,
      "",
      "Project summary:",
      formData.message || "Not provided",
    ].join("\n");

    window.location.href = `mailto:contact@lampata.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" ref={ref} className="bg-[#00458b] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section intro — white text on dark bg */}
        <div className="mb-14 flex max-w-3xl flex-col gap-4">
          <span
            className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/60"
            style={{ borderLeft: "3px solid #f5d704", paddingLeft: "0.6rem" }}
          >
            Contact
          </span>
          <h2
            className="font-display text-balance leading-[0.96] tracking-[-0.06em] text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 4.8rem)" }}
          >
            Bring a dataset, decision, or blocked idea. Lampata can help scope the next move.
          </h2>
          <p className="max-w-[48rem] text-[1.1rem] leading-[1.75] text-white/70">
            No long RFP is required for a first conversation. A short note about the problem,
            the data, and the timeline is enough to make the exchange useful.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="flex flex-col"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5d704] text-[#00458b]">
              <MessageSquareText className="h-5 w-5" />
            </div>
            <h3 className="font-display mt-6 text-3xl leading-tight tracking-[-0.06em] text-white">
              Good starting points for a first conversation
            </h3>
            <div className="mt-6 space-y-4">
              {contactChecklist.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f5d704]" />
                  <p className="text-sm leading-7 text-white/80">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[0.5rem] border border-white/15 bg-white/10 p-5">
              <p
                className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/60"
                style={{ borderLeft: "3px solid #f5d704", paddingLeft: "0.6rem" }}
              >
                Best fit
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "EO pilots",
                  "Data audits",
                  "Monitoring products",
                  "Open-source tooling",
                  "Research-to-production",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[3px] border border-white/20 bg-white/10 px-2 py-0.5 font-mono text-[0.7rem] tracking-[0.08em] text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="mailto:contact@lampata.com"
              className="mt-8 inline-flex items-center gap-2 text-lg text-white transition-colors hover:text-white/80"
            >
              <Mail className="h-4 w-4" />
              contact@lampata.com
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.08 }}
            onSubmit={handleSubmit}
            className="rounded-[0.75rem] border border-white/15 bg-white/8 p-6 backdrop-blur"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-white/80">
                Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="rounded-[0.5rem] border border-white/20 bg-white px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/40 focus:border-white/40 focus:outline-none focus:ring-4 focus:ring-white/10"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-white/80">
                Organization
                <input
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization or team"
                  className="rounded-[0.5rem] border border-white/20 bg-white px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/40 focus:border-white/40 focus:outline-none focus:ring-4 focus:ring-white/10"
                />
              </label>
            </div>

            <label className="mt-5 flex flex-col gap-2 text-sm text-white/80">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@organization.com"
                className="rounded-[0.5rem] border border-white/20 bg-white px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/40 focus:border-white/40 focus:outline-none focus:ring-4 focus:ring-white/10"
              />
            </label>

            <label className="mt-5 flex flex-col gap-2 text-sm text-white/80">
              What are you trying to figure out?
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe the decision, the data, or the workflow that needs help."
                rows={7}
                className="rounded-[0.5rem] border border-white/20 bg-white px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/40 focus:border-white/40 focus:outline-none focus:ring-4 focus:ring-white/10"
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-md text-sm leading-6 text-white/50">
                Submitting opens your email client with a prefilled message so there is no
                backend dependency and no fake form flow.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5d704] px-6 py-3.5 font-semibold text-[#00458b] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Start the email
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
