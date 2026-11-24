"use client";

import { FileText, Github, Languages, Linkedin, Moon, Sun } from "lucide-react";
import { PROFILE, UI_COPY, t } from "@/data/profile";
import { useLocale } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export function Navbar() {
  const {
    state: { locale },
    actions: { toggleLocale },
  } = useLocale();
  const {
    state: { theme },
    actions: { toggleTheme },
  } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-hairline)] bg-[var(--bg-page)]/80 backdrop-blur-xl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950"
      >
        {t(UI_COPY.nav.skipToContent, locale)}
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] font-mono text-sm font-bold tracking-tight text-[var(--text-primary)] shadow-sm transition-colors group-hover:border-emerald-500/60">
            {PROFILE.initials}
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-none text-[var(--text-primary)]">
              {PROFILE.shortName}
            </p>
            <p className="mt-1 font-mono text-[11px] leading-none text-[var(--text-muted)]">
              @{PROFILE.handle}
            </p>
          </div>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {[
            { href: "#projects", label: t(UI_COPY.nav.projects, locale) },
            { href: "#engineering", label: t(UI_COPY.nav.engineering, locale) },
            { href: "#skills", label: t(UI_COPY.nav.skills, locale) },
            { href: "#contact", label: t(UI_COPY.nav.contact, locale) },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-card-subtle)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={locale === "fr" ? "Switch language to English" : "Passer en français"}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-card)] px-2.5 font-mono text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <Languages className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{locale.toUpperCase()}</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? locale === "fr"
                  ? "Activer le thème clair"
                  : "Switch to light mode"
                : locale === "fr"
                  ? "Activer le thème sombre"
                  : "Switch to dark mode"
            }
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <a
            href={PROFILE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t(UI_COPY.hero.viewCv, locale)}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-emerald-500/35 bg-emerald-500/10 px-2.5 font-mono text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-emerald-300"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            <span>CV</span>
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-colors hover:border-sky-500/50 hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-card)] px-3 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-emerald-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
