import { motion } from "framer-motion";
import { Github, ExternalLink, Music, Bot } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    Icon: Music,
    title: "Responsive Music Web Application",
    description:
      "Designed and developed a responsive music-themed web application with modern UI components and mobile-friendly layouts. Focused on clean visual hierarchy and a smooth, intuitive listening experience across devices.",
    tech: ["HTML", "CSS", "Responsive Design"],
    accent: "from-[oklch(0.72_0.2_245)] to-[oklch(0.55_0.22_265)]",
    github: "#",
    live: "#",
  },
  {
    Icon: Bot,
    title: "Automated Line-Following Garbage Management Car",
    description:
      "Built an intelligent prototype capable of autonomous line tracking for waste management applications. Combined sensor input with logic-driven control to navigate predefined paths reliably.",
    tech: ["Embedded Systems", "Sensors", "Programming Fundamentals"],
    accent: "from-[oklch(0.55_0.22_265)] to-[oklch(0.68_0.2_295)]",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects"
          title={<>Selected <span className="gradient-text">work</span></>}
          subtitle="A small but growing collection of things I've designed and built."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card group relative overflow-hidden rounded-3xl p-7 transition-all hover:-translate-y-1.5 hover:border-white/15 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className={`relative mb-6 flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 opacity-30"
                  style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-xl ring-1 ring-white/30">
                  <p.Icon size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <Github size={15} /> GitHub
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-[1.03]"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}