import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github, ArrowRight, Sparkles, MapPin } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { PROFILE } from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-8">
        {/* Left: Text */}
        <div className="flex flex-col justify-center">
          <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to Internship Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-6 font-[Space_Grotesk] text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Abiroy Karmakar</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-5 text-lg font-medium text-muted-foreground sm:text-xl"
          >
            Aspiring Software Engineer &middot; Computer Science Student &middot; Problem Solver
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[17px]"
          >
            I'm a Computer Science student passionate about software engineering, problem-solving, web
            technologies, and building impactful digital solutions. I enjoy turning ideas into practical
            projects while continuously learning and improving my technical skills.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-glow)]"
              style={{ background: "var(--gradient-primary)" }}
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={PROFILE.resume}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-white/20 hover:bg-white/[0.08]"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={5}
            variants={fadeUp}
            className="mt-10 flex items-center gap-5"
          >
            <div className="flex items-center gap-3">
              {[
                { Icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
                { Icon: Github, href: PROFILE.github, label: "GitHub" },
                { Icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-muted-foreground transition-all hover:scale-110 hover:border-white/20 hover:bg-white/[0.08] hover:text-foreground"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <div className="hidden h-6 w-px bg-white/10 sm:block" />
            <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
              <MapPin size={14} /> {PROFILE.location}
            </div>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none"
        >
          <div className="animate-pulse-glow absolute inset-0 -z-10 rounded-[2rem] blur-3xl"
            style={{ background: "var(--gradient-primary)", opacity: 0.35 }} />

          <div className="relative w-full max-w-[420px] animate-float">
            <div className="glow-border rounded-[2rem] p-1">
              <div className="overflow-hidden rounded-[1.85rem] glass-panel">
                <img
                  src={profileImg}
                  alt="Abiroy Karmakar — Aspiring Software Engineer"
                  width={768}
                  height={896}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="glass-card absolute -left-6 top-10 hidden rounded-2xl p-3 shadow-[var(--shadow-card)] sm:flex"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary)" }}>
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Currently</div>
                  <div className="text-sm font-semibold">Learning JavaScript & DSA</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="glass-card absolute -right-4 bottom-10 hidden rounded-2xl p-3 shadow-[var(--shadow-card)] sm:flex"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-mono text-xs font-bold">
                  CS
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wide text-muted-foreground">B.Tech</div>
                  <div className="text-sm font-semibold">Computer Science</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}