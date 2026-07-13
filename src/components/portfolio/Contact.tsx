import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "./data";

const channels = [
  { Icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { Icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s+/g, "")}` },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/abiroy-karmakar", href: PROFILE.linkedin },
  { Icon: Github, label: "GitHub", value: "github.com/AbiroyKarmakar21", href: PROFILE.github },
  { Icon: MapPin, label: "Location", value: PROFILE.location, href: "#" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} <${data.get("email")}>`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's build <span className="gradient-text">together</span></>}
          subtitle="Open to internship opportunities, collaborations, and conversations."
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            {channels.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass-card group flex items-center gap-4 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:border-white/15"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, oklch(0.72 0.2 245 / 0.2), oklch(0.68 0.2 295 / 0.2))" }}>
                  <Icon size={18} className="text-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
                  <div className="truncate text-sm font-medium text-foreground">{value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-3xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field name="name" label="Your name" placeholder="Jane Doe" required />
              <Field name="email" type="email" label="Email" placeholder="jane@company.com" required />
            </div>
            <Field name="subject" label="Subject" placeholder="Internship opportunity" className="mt-4" />
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about what you're working on…"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-white/25 focus:bg-white/[0.06] focus:ring-2 focus:ring-[color:var(--electric-blue)]/30"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow)]"
              style={{ background: "var(--gradient-primary)" }}
            >
              {sent ? (<><CheckCircle2 size={16} /> Opening your mail app…</>) : (<><Send size={16} /> Send Message</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, required, className = "",
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-white/25 focus:bg-white/[0.06] focus:ring-2 focus:ring-[color:var(--electric-blue)]/30"
      />
    </div>
  );
}