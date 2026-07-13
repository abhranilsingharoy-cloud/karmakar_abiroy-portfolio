import { motion } from "framer-motion";
import { Code2, Wrench, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";

const groups = [
  { Icon: Code2, label: "Programming", items: ["C", "Java", "HTML", "CSS"] },
  { Icon: Wrench, label: "Tools", items: ["Git", "GitHub", "VS Code"] },
  { Icon: Sparkles, label: "Currently Learning", items: ["JavaScript", "Data Structures & Algorithms", "Web Development"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title={<>Tools of the <span className="gradient-text">craft</span></>}
          subtitle="The languages, tools, and topics I actively use and study."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                  <g.Icon size={18} className="text-foreground" />
                </div>
                <h3 className="text-base font-semibold tracking-tight">{g.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}