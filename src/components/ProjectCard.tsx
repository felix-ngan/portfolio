"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink, Github, Images, Layers, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import type { ProjectCaseStudy } from "@/data/projects";
import { UI_COPY, t } from "@/data/profile";
import { useLocale } from "@/lib/i18n";
import { KineVisionPreview } from "./KineVisionPreview";

const ACCENT_STYLES: Record<
  ProjectCaseStudy["accent"],
  {
    badge: string;
    dot: string;
    ringHover: string;
    ctaBg: string;
  }
> = {
  sky: {
    badge: "border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-300",
    dot: "bg-sky-500",
    ringHover: "hover:border-sky-500/40",
    ctaBg: "bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:text-zinc-950 dark:hover:bg-sky-400",
  },
  emerald: {
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
    ringHover: "hover:border-emerald-500/40",
    ctaBg:
      "bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400",
  },
  violet: {
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300",
    dot: "bg-violet-500",
    ringHover: "hover:border-violet-500/40",
    ctaBg:
      "bg-violet-600 text-white hover:bg-violet-500 dark:bg-violet-500 dark:text-zinc-950 dark:hover:bg-violet-400",
  },
};

interface ProjectCardProps {
  project: ProjectCaseStudy;
  index: number;
  onOpenCaseStudy: (project: ProjectCaseStudy, initialScreenshotIndex?: number) => void;
}

export function ProjectCard({ project, index, onOpenCaseStudy }: ProjectCardProps) {
  const {
    state: { locale },
  } = useLocale();
  const accent = ACCENT_STYLES[project.accent];
  const hasScreenshots = project.screenshots.length > 0;
  const isMobile = project.mediaFormat === "mobile";
  const previewThumbs = project.screenshots.slice(0, 4);
  const remainingCount = Math.max(0, project.screenshots.length - previewThumbs.length);

  const windowTitle = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : `${project.slug} · ${project.platforms[0]}`;

  const mobileStageShots = isMobile && project.screenshots.length >= 3
    ? [
        project.screenshots[3] ?? project.screenshots[1],
        project.screenshots[0],
        project.screenshots[1],
      ]
    : project.screenshots.slice(0, 3);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`surface-card surface-card-hover overflow-hidden rounded-3xl ${accent.ringHover}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Visual Preview Column */}
        <div className="flex flex-col justify-between border-b border-[var(--border-hairline)] bg-[var(--bg-card-subtle)]/50 p-4 sm:p-6 lg:col-span-6 lg:border-r lg:border-b-0">
          {/* App Window Frame */}
          <div className="overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-zinc-950 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/95 px-3.5 py-2.5">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                {isMobile ? (
                  <Smartphone className="h-3.5 w-3.5 text-violet-400" />
                ) : (
                  <>
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                  </>
                )}
              </div>
              <span className="truncate font-mono text-[11px] text-zinc-400">
                {windowTitle}
              </span>
              <span className="w-8" aria-hidden="true" />
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
              {hasScreenshots && isMobile ? (
                <button
                  type="button"
                  onClick={() => onOpenCaseStudy(project, 0)}
                  className="group absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-950 via-slate-950 to-violet-950/60 px-4 pt-4 pb-10 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500"
                  aria-label={`${t(UI_COPY.projectActions.caseStudy, locale)} — ${project.title}`}
                >
                  {/* Subtle ambient glow behind phones */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 left-1/2 h-44 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-3xl"
                  />

                  {/* 3-Phone Studio Showcase */}
                  <div className="relative flex h-full w-full items-center justify-center gap-3 sm:gap-4">
                    {mobileStageShots.map((shot, idx) => {
                      const isCenter = idx === 1;
                      return (
                        <div
                          key={shot.src}
                          className={`relative overflow-hidden rounded-[18px] border bg-zinc-950 shadow-2xl transition-transform duration-500 ${
                            isCenter
                              ? "z-10 h-[96%] aspect-[9/19.5] border-emerald-400/50 shadow-emerald-950/60 group-hover:scale-[1.04]"
                              : "h-[82%] aspect-[9/19.5] border-white/15 opacity-85 group-hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={shot.src}
                            alt={`${project.title} — ${t(shot.title, locale)}`}
                            fill
                            sizes={isCenter ? "180px" : "140px"}
                            className="object-cover object-top"
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent px-4 pt-8 pb-3">
                    <span className="truncate pr-2 font-mono text-xs font-medium text-white">
                      {t(project.screenshots[0].title, locale)}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur-md">
                      <Images className="h-3 w-3" aria-hidden="true" />
                      {project.screenshots.length} {t(UI_COPY.projectActions.screenshots, locale)}
                    </span>
                  </div>
                </button>
              ) : hasScreenshots && project.coverImage ? (
                <button
                  type="button"
                  onClick={() => onOpenCaseStudy(project, 0)}
                  className="group absolute inset-0 block h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500"
                  aria-label={`${t(UI_COPY.projectActions.caseStudy, locale)} — ${project.title}`}
                >
                  <Image
                    src={project.coverImage}
                    alt={`${project.title} — ${t(project.screenshots[0].title, locale)}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent px-4 pt-10 pb-3 opacity-95 transition-opacity group-hover:opacity-100">
                    <span className="font-mono text-xs font-medium text-white">
                      {t(project.screenshots[0].title, locale)}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur-md">
                      <Images className="h-3 w-3" aria-hidden="true" />
                      {project.screenshots.length} {t(UI_COPY.projectActions.screenshots, locale)}
                    </span>
                  </div>
                </button>
              ) : (
                <KineVisionPreview />
              )}
            </div>
          </div>

          {/* Mini Screenshot Strip OR Platform Pills */}
          {hasScreenshots ? (
            <div className="mt-4 grid grid-cols-4 gap-2">
              {previewThumbs.map((shot, shotIdx) => {
                const isLastWithMore = shotIdx === previewThumbs.length - 1 && remainingCount > 0;
                return (
                  <button
                    key={shot.src}
                    type="button"
                    onClick={() => onOpenCaseStudy(project, shotIdx)}
                    className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-[var(--border-hairline)] bg-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    title={t(shot.title, locale)}
                  >
                    <Image
                      src={shot.src}
                      alt={t(shot.title, locale)}
                      fill
                      sizes="140px"
                      className={
                        isMobile
                          ? "object-contain p-0.5 transition-transform duration-300 group-hover:scale-105"
                          : "object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      }
                    />
                    {isLastWithMore ? (
                      <span className="absolute inset-0 flex items-center justify-center bg-zinc-950/75 font-mono text-xs font-semibold text-white backdrop-blur-[1px]">
                        +{remainingCount}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.platforms.map((platform) => (
                <span
                  key={platform}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-card)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-secondary)]"
                >
                  <Layers className="h-3 w-3 text-violet-400" aria-hidden="true" />
                  {platform}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Content Column */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-6">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] font-medium ${accent.badge}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
                {t(project.featuredLabel, locale)}
              </span>
              <span className="font-mono text-xs text-[var(--text-muted)]">{project.year}</span>
            </div>

            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                {project.title}
              </h3>
              <span className="rounded-md border border-[var(--border-hairline)] bg-[var(--bg-card-subtle)] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[var(--text-secondary)]">
                {t(project.role, locale)}
              </span>
            </div>
            <p className="mt-1.5 text-sm font-medium text-[var(--text-secondary)]">
              {t(project.tagline, locale)}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
              {t(project.summary, locale)}
            </p>

            {/* Key Project Metrics */}
            <div className="mt-5 grid grid-cols-3 gap-2.5">
              {project.metrics.map((metric) => (
                <div
                  key={metric.value + metric.label.fr}
                  className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-card-subtle)]/60 p-3"
                >
                  <p className="font-mono text-base font-bold text-[var(--text-primary)] tabular-nums sm:text-lg">
                    {metric.value}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-[var(--text-muted)]">
                    {t(metric.label, locale)}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[var(--border-hairline)] bg-[var(--bg-page)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-[var(--border-hairline)] pt-5">
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project, 0)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${accent.ctaBg}`}
            >
              <span>
                {t(UI_COPY.projectActions.caseStudy, locale)}
                {hasScreenshots ? ` (${project.screenshots.length})` : ""}
              </span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-emerald-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <ExternalLink className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                <span>{t(UI_COPY.projectActions.liveDemo, locale)}</span>
              </a>
            ) : null}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-page)] px-3.5 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span>{t(UI_COPY.projectActions.sourceCode, locale)}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
