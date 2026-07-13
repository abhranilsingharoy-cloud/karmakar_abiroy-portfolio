import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, Users, Mic, Heart, TrendingUp } from "lucide-react";
import SectionHeader from "./SectionHeader";

const highlights = [
  { Icon: GraduationCap, title: "B.Tech CSE Student", text: "Pursuing Computer Science Engineering with a strong academic foundation." },
  { Icon: Lightbulb, title: "Passionate Learner", text: "Constantly exploring software engineering, algorithms, and modern web technologies." },
  { Icon: Users, title: "Leadership & Teamwork", text: "Comfortable leading teams, collaborating, and organizing technical and cultural activities." },
  { Icon: Mic, title: "Public Speaking", text: "Experienced in presentations, public speaking and confident communication." },
  { Icon: Heart, title: "Volunteering", text: "Active volunteer in community and college events, contributing time and energy." },
  { Icon: TrendingUp, title: "Continuous Growth", text: "Focused on building real skills and shipping real projects—one step at a time." },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Me"
          title={<>The person <span className="gradient-text">behind the code</span></>}
          subtitle="A computer science student building a foundation for a serious software engineering career."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-white/15"
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="relative">
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, oklch(0.72 0.2 245 / 0.2), oklch(0.68 0.2 295 / 0.2))" }}
                >
                  <Icon size={20} className="text-foreground" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}