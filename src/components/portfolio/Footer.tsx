import { Linkedin, Github, Mail } from "lucide-react";
import { PROFILE, NAV_LINKS } from "./data";

export default function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg" style={{ background: "var(--gradient-primary)" }} />
              <div>
                <div className="text-base font-semibold tracking-tight">{PROFILE.name}</div>
                <div className="text-xs text-muted-foreground">Aspiring Software Engineer</div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm italic text-muted-foreground">
              "Building skills today for the opportunities of tomorrow."
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Quick Links</div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.filter((l) => ["#about", "#skills", "#projects", "#contact"].includes(l.href)).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Connect</div>
            <div className="mt-4 flex gap-3">
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
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-muted-foreground transition-all hover:scale-110 hover:border-white/20 hover:text-foreground"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="mt-4 text-xs text-muted-foreground">{PROFILE.email}</div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div>Crafted with care · Kolkata, India</div>
        </div>
      </div>
    </footer>
  );
}