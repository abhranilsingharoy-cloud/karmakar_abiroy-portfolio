import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const milestones = [
  { year: "Stage 01", title: "Started Computer Science Engineering", text: "Began the B.Tech journey with curiosity and commitment." },
  { year: "Stage 02", title: "Learning Programming Fundamentals", text: "Built a base with C and Java; understanding logic, structure and problem solving." },
  { year: "Stage 03", title: "Learning Web Development", text: "Exploring HTML, CSS and the broader web platform." },
  { year: "Stage 04", title: "Exploring Software Engineering", text: "Diving into engineering practices, version control and real-world tooling." },
  { year: "Stage 05", title: "Preparing for Internships", text: "Building projects, sharpening DSA, and aiming for high-quality internship roles." },
  { year: "Goal", title: "Becoming a Software Engineer", text: "Joining a strong engineering team and contributing to impactful products." },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Journey"
          title={<>The path so <span className="gradient-text">far</span></>}
          subtitle="A timeline of how I'm growing into a software engineer."
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px sm:left-1/2 sm:-translate-x-1/2"
            style={{ background: "linear-gradient(180deg, transparent, oklch(1 0 0 / 0.15) 10%, oklch(1 0 0 / 0.15) 90%, transparent)" }} />
          <ol className="space-y-10">
            {milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={m.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid grid-cols-[2rem_1fr] gap-4 sm:grid-cols-2 sm:gap-10"
                >
                  <span className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-background sm:left-1/2"
                    style={{ background: "var(--gradient-primary)" }} />
                  <div className={`hidden sm:block ${left ? "" : "order-2"}`} />
                  <div className={`col-start-2 sm:col-auto ${left ? "sm:text-right sm:pr-8" : "sm:order-1 sm:text-left sm:pl-8"}`}>
                    <div className="glass-card inline-block max-w-full rounded-2xl p-5 text-left">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{m.year}</div>
                      <h3 className="mt-1 text-base font-semibold tracking-tight sm:text-lg">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}