import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Mail, MessageSquareText } from "lucide-react";
import { useRef } from "react";
import { contactChecklist } from "../content/siteContent";
import { SectionIntro } from "./SectionIntro";

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
    <section id="contact" ref={ref} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Contact"
          title="Bring a dataset, decision, or blocked idea. Lampata can help scope the next move."
          description="No long RFP is required for a first conversation. A short note about the problem, the data, and the timeline is enough to make the exchange useful."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="panel-surface rounded-[2rem] p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00458b]/8 text-[#00458b]">
              <MessageSquareText className="h-5 w-5" />
            </div>
            <h3 className="font-display mt-6 text-3xl leading-tight tracking-[-0.06em] text-[#00458b]">
              Good starting points for a first conversation
            </h3>
            <div className="mt-6 space-y-4">
              {contactChecklist.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#f5d704]" />
                  <p className="text-sm leading-7 text-[#00458b]/76">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#00458b]/8 bg-white/90 p-5">
              <p className="section-eyebrow mb-3">Best fit</p>
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
                    className="rounded-full bg-[#00458b]/6 px-3 py-1 text-xs text-[#00458b]/76"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="mailto:contact@lampata.com"
              className="mt-8 inline-flex items-center gap-2 text-lg text-[#00458b] transition-colors hover:text-[#00458b]/80"
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
            className="panel-surface rounded-[2rem] p-6"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-[#00458b]/84">
                Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="rounded-[1rem] border border-[#00458b]/10 bg-white px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/40 focus:border-[#00458b]/30 focus:outline-none focus:ring-4 focus:ring-[#00458b]/8"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-[#00458b]/84">
                Organization
                <input
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization or team"
                  className="rounded-[1rem] border border-[#00458b]/10 bg-white px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/40 focus:border-[#00458b]/30 focus:outline-none focus:ring-4 focus:ring-[#00458b]/8"
                />
              </label>
            </div>

            <label className="mt-5 flex flex-col gap-2 text-sm text-[#00458b]/84">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@organization.com"
                className="rounded-[1rem] border border-[#00458b]/10 bg-white px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/40 focus:border-[#00458b]/30 focus:outline-none focus:ring-4 focus:ring-[#00458b]/8"
              />
            </label>

            <label className="mt-5 flex flex-col gap-2 text-sm text-[#00458b]/84">
              What are you trying to figure out?
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe the decision, the data, or the workflow that needs help."
                rows={7}
                className="rounded-[1rem] border border-[#00458b]/10 bg-white px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/40 focus:border-[#00458b]/30 focus:outline-none focus:ring-4 focus:ring-[#00458b]/8"
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 border-t border-[#00458b]/8 pt-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-md text-sm leading-6 text-[#00458b]/62">
                Submitting opens your email client with a prefilled message so there is no
                backend dependency and no fake form flow.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00458b] px-6 py-3.5 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#00458b]/90"
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
