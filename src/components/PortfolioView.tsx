"use client";

import { useCallback, useState } from "react";
import {
  ArrowDownRight,
  Check,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  ENGINEERING_PILLARS,
  PROFILE,
  PROOF_METRICS,
  SKILL_GROUPS,
  UI_COPY,
  t,
} from "@/data/profile";
import { PROJECTS, type ProjectCaseStudy } from "@/data/projects";
import { useLocale } from "@/lib/i18n";
import { Navbar } from "./Navbar";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";
import { FloatingDock } from "./FloatingDock";

export function PortfolioView() {
  const {
    state: { locale },
  } = useLocale();

  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);
  const [initialShotIndex, setInitialShotIndex] = useState<number>(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleOpenCaseStudy = useCallback(
    (project: ProjectCaseStudy, screenshotIndex = 0) => {
      setInitialShotIndex(screenshotIndex);
      setActiveProject(project);
    },
    []
  );

  const handleCloseCaseStudy = useCallback(() => {
    setActiveProject(null);
    setInitialShotIndex(0);
  }, []);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  }, []);

  return (
    <div id="top" className="relative min-h-screen bg-[var(--bg-page)]">
      {/* Subtle Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="bg-engineering-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_80%)]" />
        <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/12 blur-[120px] dark:bg-emerald-500/10" />
        <div className="absolute top-24 right-0 h-[320px] w-[420px] rounded-full bg-sky-500/10 blur-[120px] dark:bg-sky-500/8" />
      </div>

      <Navbar />

      <main id="main-content" className="mx-auto max-w-6xl px-4 pb-32 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <section className="pt-14 pb-16 sm:pt-20 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{t(PROFILE.availability, locale)}</span>
            </div>

            {/* Identity & Role */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-[var(--text-secondary)]">
              <span className="font-semibold text-[var(--text-primary)]">{PROFILE.name}</span>
              <span aria-hidden="true">·</span>
              <span>{t(PROFILE.role, locale)}</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance text-[var(--text-primary)] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              {t(PROFILE.heroHeadline, locale)}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              {t(PROFILE.heroSubheadline, locale)}
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--text-primary)] px-5 py-3 text-sm font-semibold text-[var(--bg-page)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span>{t(UI_COPY.hero.exploreProjects, locale)}</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.camaroesLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-emerald-300"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span>{t(UI_COPY.hero.liveDemo, locale)}</span>
              </a>

              <a
                href={PROFILE.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-emerald-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FileText className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                <span>{t(UI_COPY.hero.viewCv, locale)}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{t(UI_COPY.hero.contactMe, locale)}</span>
              </a>
            </div>
          </motion.div>

          {/* Recruiter Proof Strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          >
            {PROOF_METRICS.map((metric) => (
              <div
                key={metric.value + metric.label.fr}
                className="surface-card rounded-2xl p-4 sm:p-5"
              >
                <p className="font-mono text-2xl font-bold tracking-tight text-[var(--text-primary)] tabular-nums sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                  {t(metric.label, locale)}
                </p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                  {t(metric.detail, locale)}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24 py-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
              {t(UI_COPY.sections.projectsEyebrow, locale)}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance text-[var(--text-primary)] sm:text-4xl">
              {t(UI_COPY.sections.projectsTitle, locale)}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              {t(UI_COPY.sections.projectsSubtitle, locale)}
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenCaseStudy={handleOpenCaseStudy}
              />
            ))}
          </div>
        </section>

        {/* ENGINEERING DNA BENTO GRID */}
        <section id="engineering" className="scroll-mt-24 py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
              {t(UI_COPY.sections.engineeringEyebrow, locale)}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance text-[var(--text-primary)] sm:text-4xl">
              {t(UI_COPY.sections.engineeringTitle, locale)}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              {t(UI_COPY.sections.engineeringSubtitle, locale)}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {ENGINEERING_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`surface-card surface-card-hover flex flex-col justify-between rounded-2xl p-6 ${
                  pillar.featured
                    ? "border-emerald-500/35 bg-gradient-to-br from-emerald-500/[0.06] via-[var(--bg-card)] to-[var(--bg-card)] md:col-span-2"
                    : ""
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {pillar.featured ? (
                        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : null}
                      <span>{pillar.badge}</span>
                    </span>
                    <span className="rounded-md border border-[var(--border-hairline)] bg-[var(--bg-card-subtle)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--text-muted)]">
                      {t(pillar.proof, locale)}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                    {t(pillar.title, locale)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {t(pillar.description, locale)}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-hairline)]">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-md px-2 py-0.5 font-mono text-[11px] ${
                        pillar.featured
                          ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                          : "border border-[var(--border-hairline)] bg-[var(--bg-page)] text-[var(--text-secondary)]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TECHNICAL SKILLS MATRIX */}
        <section id="skills" className="scroll-mt-24 py-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
              {t(UI_COPY.sections.skillsEyebrow, locale)}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance text-[var(--text-primary)] sm:text-4xl">
              {t(UI_COPY.sections.skillsTitle, locale)}
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <div key={group.id} className="surface-card rounded-2xl p-6">
                <div className="flex items-center gap-2.5">
                  <Terminal className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    {t(group.title, locale)}
                  </h3>
                </div>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  {t(group.subtitle, locale)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-card-subtle)]/70 px-3 py-1.5 font-mono text-xs text-[var(--text-primary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24 pt-12 pb-6 sm:pt-16">
          <div className="surface-card relative overflow-hidden rounded-3xl p-7 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <p className="font-mono text-xs font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
                {t(UI_COPY.sections.contactEyebrow, locale)}
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance text-[var(--text-primary)] sm:text-4xl">
                {t(UI_COPY.sections.contactTitle, locale)}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                {t(UI_COPY.sections.contactSubtitle, locale)}
              </p>

              <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-page)] p-2 pl-4">
                <span className="font-mono text-sm font-medium text-[var(--text-primary)]">
                  {PROFILE.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--text-primary)] px-3.5 py-2 text-xs font-semibold text-[var(--bg-page)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                      <span>{t(UI_COPY.contact.copied, locale)}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{t(UI_COPY.contact.copyEmail, locale)}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>{t(UI_COPY.contact.sendEmail, locale)}</span>
                </a>
                <a
                  href={PROFILE.cvUrl}
                  download={PROFILE.cvDownloadName}
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-emerald-300"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>{t(UI_COPY.hero.downloadCv, locale)}</span>
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-sky-500/40 bg-sky-500/10 px-5 py-2.5 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-sky-300"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  <span>{t(UI_COPY.contact.viewLinkedin, locale)}</span>
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-emerald-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>{t(UI_COPY.contact.viewGithub, locale)}</span>
                </a>
                <a
                  href={PROFILE.camaroesLiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-page)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <ExternalLink className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                  <span>{t(UI_COPY.contact.testLiveApp, locale)}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border-hairline)] py-8 pb-24 text-center">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 font-mono text-xs text-[var(--text-muted)] sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}
          </p>
          <p>{t(UI_COPY.footer.builtWith, locale)}</p>
        </div>
      </footer>

      <FloatingDock />

      <CaseStudyModal
        project={activeProject}
        initialScreenshotIndex={initialShotIndex}
        onClose={handleCloseCaseStudy}
      />
    </div>
  );
}
