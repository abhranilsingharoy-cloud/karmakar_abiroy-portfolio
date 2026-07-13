import { motion } from "framer-motion";
import { Crown, MessageSquare, Mic2, Users, HandHeart, BookOpen } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  { Icon: Crown, title: "Leadership", text: "Taking initiative and guiding teams through projects and events." },
  { Icon: MessageSquare, title: "Communication", text: "Clear, confident written and spoken communication." },
  { Icon: Mic2, title: "Public Speaking", text: "Presenting ideas with poise and structure to diverse audiences." },
  { Icon: Users, title: "Teamwork", text: "Collaborating effectively in technical and non-technical teams." },
  { Icon: HandHeart, title: "Volunteering", text: "Contributing to community and college-level activities." },
  { Icon: BookOpen, title: "Continuous Learning", text: "Always studying, building and improving skills." },
];

export default function Achievements() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Achievements"
          title={<>Beyond the <span className="gradient-text">code</span></>}
          subtitle="The qualities and experiences that shape how I work with people."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {items.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card group rounded-2xl p-5 text-center transition-all hover:-translate-y-1 hover:border-white/15"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, oklch(0.72 0.2 245 / 0.18), oklch(0.68 0.2 295 / 0.18))" }}>
                <a.Icon size={20} className="text-foreground" />
              </div>
              <h3 className="text-sm font-semibold tracking-tight sm:text-base">{a.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}