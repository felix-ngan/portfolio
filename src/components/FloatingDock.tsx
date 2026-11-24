"use client";

import {
  Code2,
  Cpu,
  ExternalLink,
  FileText,
  FolderGit2,
  Github,
  Home,
  Languages,
  Linkedin,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import { motion } from "framer-motion";
import { PROFILE, UI_COPY, t } from "@/data/profile";
import { useLocale } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

interface DockItemProps {
  label: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

function DockItem({ label, href, external, onClick, children }: DockItemProps) {
  const baseClass =
    "group relative flex h-10 w-10 items-center justify-center rounded-xl text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-card-subtle)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500";

  const tooltip = (
    <span
      role="tooltip"
      className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--border-strong)] bg-[var(--bg-card)] px-2 py-1 font-mono text-[11px] text-[var(--text-primary)] opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
    >
      {label}
    </span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={label}
        whileHover={{ y: -4, scale: 1.12 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 420, damping: 24 }}
        className={baseClass}
      >
        {children}
        {tooltip}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      whileHover={{ y: -4, scale: 1.12 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      className={baseClass}
    >
      {children}
      {tooltip}
    </motion.button>
  );
}

export function FloatingDock() {
  const {
    state: { locale },
    actions: { toggleLocale },
  } = useLocale();
  const {
    state: { theme },
    actions: { toggleTheme },
  } = useTheme();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-30 flex justify-center px-4 print:hidden">
      <nav
        aria-label={locale === "fr" ? "Navigation rapide" : "Quick dock navigation"}
        className="pointer-events-auto flex items-center gap-1 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-card)]/90 px-2 py-1.5 shadow-2xl shadow-black/25 backdrop-blur-xl"
      >
        <DockItem label={locale === "fr" ? "Accueil" : "Home"} href="#top">
          <Home className="h-4 w-4" aria-hidden="true" />
        </DockItem>
        <DockItem label={t(UI_COPY.nav.projects, locale)} href="#projects">
          <FolderGit2 className="h-4 w-4" aria-hidden="true" />
        </DockItem>
        <DockItem label={t(UI_COPY.nav.engineering, locale)} href="#engineering">
          <Cpu className="h-4 w-4" aria-hidden="true" />
        </DockItem>
        <DockItem label={t(UI_COPY.nav.skills, locale)} href="#skills">
          <Code2 className="h-4 w-4" aria-hidden="true" />
        </DockItem>
        <DockItem label={t(UI_COPY.nav.contact, locale)} href="#contact">
          <Mail className="h-4 w-4" aria-hidden="true" />
        </DockItem>

        <span className="mx-1 h-5 w-px bg-[var(--border-hairline)]" aria-hidden="true" />

        <DockItem
          label={locale === "fr" ? "CAMAROES POS (Live)" : "CAMAROES POS (Live)"}
          href={PROFILE.camaroesLiveUrl}
          external
        >
          <ExternalLink className="h-4 w-4 text-emerald-500" aria-hidden="true" />
        </DockItem>
        <DockItem label={locale === "fr" ? "CV (PDF)" : "Resume (PDF)"} href={PROFILE.cvUrl} external>
          <FileText className="h-4 w-4 text-emerald-500" aria-hidden="true" />
        </DockItem>
        <DockItem label="GitHub" href={PROFILE.github} external>
          <Github className="h-4 w-4" aria-hidden="true" />
        </DockItem>
        <DockItem label="LinkedIn" href={PROFILE.linkedin} external>
          <Linkedin className="h-4 w-4" aria-hidden="true" />
        </DockItem>
        <DockItem
          label={locale === "fr" ? "Langue : FR → EN" : "Language: EN → FR"}
          onClick={toggleLocale}
        >
          <Languages className="h-4 w-4" aria-hidden="true" />
        </DockItem>
        <DockItem
          label={
            theme === "dark"
              ? locale === "fr"
                ? "Mode clair"
                : "Light mode"
              : locale === "fr"
                ? "Mode sombre"
                : "Dark mode"
          }
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Moon className="h-4 w-4" aria-hidden="true" />
          )}
        </DockItem>
      </nav>
    </div>
  );
}
