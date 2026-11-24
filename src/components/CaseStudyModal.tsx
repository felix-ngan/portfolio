"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Layers,
  Maximize2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectCaseStudy } from "@/data/projects";
import { UI_COPY, t } from "@/data/profile";
import { useLocale } from "@/lib/i18n";
import { KineVisionPreview } from "./KineVisionPreview";

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  initialScreenshotIndex?: number;
  onClose: () => void;
}

export function CaseStudyModal({
  project,
  initialScreenshotIndex = 0,
  onClose,
}: CaseStudyModalProps) {
  const {
    state: { locale },
  } = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Reset filters when opening a different project
  useEffect(() => {
    setSelectedCategory("ALL");
    setLightboxIndex(null);
  }, [project?.id]);

  // Open lightbox directly if user clicked a non-zero thumbnail
  useEffect(() => {
    if (project && initialScreenshotIndex > 0 && initialScreenshotIndex < project.screenshots.length) {
      setLightboxIndex(initialScreenshotIndex);
    }
  }, [project, initialScreenshotIndex]);

  const categories = useMemo(() => {
    if (!project) return [];
    const seen = new Set<string>();
    const list: string[] = [];
    for (const shot of project.screenshots) {
      const cat = t(shot.category, locale);
      if (!seen.has(cat)) {
        seen.add(cat);
        list.push(cat);
      }
    }
    return list;
  }, [project, locale]);

  const filteredScreenshots = useMemo(() => {
    if (!project) return [];
    if (selectedCategory === "ALL") return project.screenshots;
    return project.screenshots.filter((s) => t(s.category, locale) === selectedCategory);
  }, [project, selectedCategory, locale]);

  // Lock body scroll and handle keyboard shortcuts
  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else {
          onClose();
        }
      } else if (lightboxIndex !== null && filteredScreenshots.length > 0) {
        if (e.key === "ArrowRight") {
          setLightboxIndex((prev) =>
            prev === null ? 0 : (prev + 1) % filteredScreenshots.length
          );
        } else if (e.key === "ArrowLeft") {
          setLightboxIndex((prev) =>
            prev === null
              ? 0
              : (prev - 1 + filteredScreenshots.length) % filteredScreenshots.length
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, lightboxIndex, filteredScreenshots.length, onClose]);

  const activeLightboxShot =
    lightboxIndex !== null && filteredScreenshots[lightboxIndex]
      ? filteredScreenshots[lightboxIndex]
      : null;

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          key="case-study-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          onClick={onClose}
        >
          <motion.div
            key="case-study-panel"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-page)] shadow-2xl"
          >
            {/* Modal Sticky Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[var(--border-hairline)] bg-[var(--bg-card)] px-5 py-4 sm:px-7 sm:py-5">
              <div>
                <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
                  {t(project.featuredLabel, locale)} · {project.year}
                </p>
                <h2
                  id="case-study-title"
                  className="mt-1 text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl"
                >
                  {project.title}
                </h2>
                <p className="mt-0.5 text-sm text-[var(--text-secondary)]">
                  {t(project.role, locale)}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center gap-1.5 rounded-xl bg-emerald-500 px-3.5 py-2 text-xs font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 sm:inline-flex"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{t(UI_COPY.projectActions.liveDemo, locale)}</span>
                  </a>
                ) : null}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-page)] px-3.5 py-2 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-emerald-500/50 sm:inline-flex"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t(UI_COPY.projectActions.close, locale)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-page)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto px-5 py-6 sm:px-7 sm:py-7">
              {/* Mobile Action Buttons */}
              <div className="mb-6 flex flex-wrap gap-2 sm:hidden">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3.5 py-2 text-xs font-semibold text-zinc-950"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{t(UI_COPY.projectActions.liveDemo, locale)}</span>
                  </a>
                ) : null}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3.5 py-2 text-xs font-medium text-[var(--text-primary)]"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{t(UI_COPY.projectActions.sourceCode, locale)}</span>
                </a>
              </div>

              {/* Problem & Solution */}
              <section>
                <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
                  {t(UI_COPY.projectActions.overview, locale)}
                </h3>
                <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="surface-card rounded-2xl p-5">
                    <p className="font-mono text-xs font-semibold text-amber-600 dark:text-amber-400">
                      {locale === "fr" ? "PROBLÉMATIQUE" : "PROBLEM"}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {t(project.problem, locale)}
                    </p>
                  </div>
                  <div className="surface-card rounded-2xl p-5">
                    <p className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {locale === "fr" ? "SOLUTION D'INGÉNIERIE" : "ENGINEERING SOLUTION"}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {t(project.solution, locale)}
                    </p>
                  </div>
                </div>
              </section>

              {/* Architecture Layers */}
              <section className="mt-8">
                <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
                  {t(UI_COPY.projectActions.architecture, locale)}
                </h3>
                <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {project.architectureLayers.map((layer) => (
                    <div key={layer.layer} className="surface-card rounded-2xl p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
                          <Layers className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                          {layer.layer}
                        </span>
                        <span className="font-mono text-[11px] text-[var(--text-muted)]">
                          {layer.tech}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                        {t(layer.detail, locale)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Engineering Highlights */}
              <section className="mt-8">
                <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
                  {t(UI_COPY.projectActions.highlights, locale)}
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {project.highlights.map((item) => (
                    <li
                      key={item.fr}
                      className="flex items-start gap-3 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--text-secondary)]"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                        aria-hidden="true"
                      />
                      <span>{t(item, locale)}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Screen Gallery */}
              <section className="mt-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-mono text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
                      {t(UI_COPY.projectActions.gallery, locale)}
                      {project.screenshots.length > 0 ? ` (${project.screenshots.length})` : ""}
                    </h3>
                    {project.screenshots.length > 0 ? (
                      <p className="mt-1 text-xs text-[var(--text-muted)]">
                        {t(UI_COPY.projectActions.zoomHint, locale)}
                      </p>
                    ) : null}
                  </div>

                  {categories.length > 1 ? (
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCategory("ALL");
                          setLightboxIndex(null);
                        }}
                        className={`rounded-lg px-2.5 py-1 font-mono text-[11px] transition-colors ${
                          selectedCategory === "ALL"
                            ? "bg-emerald-500 font-semibold text-zinc-950"
                            : "border border-[var(--border-hairline)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        {locale === "fr" ? "Tous" : "All"} ({project.screenshots.length})
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(cat);
                            setLightboxIndex(null);
                          }}
                          className={`rounded-lg px-2.5 py-1 font-mono text-[11px] transition-colors ${
                            selectedCategory === cat
                              ? "bg-emerald-500 font-semibold text-zinc-950"
                              : "border border-[var(--border-hairline)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>

                {filteredScreenshots.length > 0 ? (
                  <div
                    className={`mt-4 grid grid-cols-1 gap-4 ${
                      project.mediaFormat === "mobile"
                        ? "sm:grid-cols-2 lg:grid-cols-3"
                        : "sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {filteredScreenshots.map((shot, idx) => {
                      const isMobile = project.mediaFormat === "mobile";
                      return (
                        <button
                          key={shot.src}
                          type="button"
                          onClick={() => setLightboxIndex(idx)}
                          className="group surface-card flex flex-col overflow-hidden rounded-2xl text-left transition-all hover:border-emerald-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        >
                          <div
                            className={`relative w-full overflow-hidden ${
                              isMobile
                                ? "flex aspect-[4/5] items-center justify-center bg-gradient-to-b from-zinc-950 via-slate-950 to-zinc-900 p-3"
                                : "aspect-[16/10] bg-zinc-950"
                            }`}
                          >
                            {isMobile ? (
                              <div className="relative h-full aspect-[9/19.5] overflow-hidden rounded-[18px] border border-white/15 bg-zinc-950 shadow-xl">
                                <Image
                                  src={shot.src}
                                  alt={t(shot.title, locale)}
                                  fill
                                  sizes="(max-width: 640px) 60vw, 240px"
                                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                              </div>
                            ) : (
                              <Image
                                src={shot.src}
                                alt={t(shot.title, locale)}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                              />
                            )}
                            <span className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-950/75 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                              <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="flex-1 px-4 py-3">
                            <p className="font-mono text-[10px] text-emerald-600 uppercase dark:text-emerald-400">
                              {t(shot.category, locale)}
                            </p>
                            <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                              {t(shot.title, locale)}
                            </p>
                            {shot.description ? (
                              <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-secondary)]">
                                {t(shot.description, locale)}
                              </p>
                            ) : null}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--border-strong)]">
                    <div className="aspect-[16/9] w-full">
                      <KineVisionPreview />
                    </div>
                    <div className="border-t border-[var(--border-hairline)] bg-[var(--bg-card)] p-4">
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        {t(UI_COPY.projectActions.kineScreensPendingTitle, locale)}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                        {t(UI_COPY.projectActions.kineScreensPendingDesc, locale)}
                      </p>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </motion.div>

          {/* Full-screen Scrollable Lightbox */}
          <AnimatePresence>
            {activeLightboxShot && lightboxIndex !== null ? (
              <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(null);
                }}
                className="fixed inset-0 z-[60] flex flex-col bg-zinc-950/95 p-4 backdrop-blur-xl sm:p-6"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="mx-auto flex w-full max-w-6xl items-start justify-between gap-4 pb-3 text-white"
                >
                  <div className="max-w-3xl">
                    <p className="font-mono text-xs text-emerald-400">
                      {lightboxIndex + 1} / {filteredScreenshots.length} ·{" "}
                      {t(activeLightboxShot.category, locale)}
                    </p>
                    <p className="text-sm font-semibold sm:text-base">
                      {t(activeLightboxShot.title, locale)}
                    </p>
                    {activeLightboxShot.description ? (
                      <p className="mt-1 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                        {t(activeLightboxShot.description, locale)}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {filteredScreenshots.length > 1 ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setLightboxIndex(
                              (lightboxIndex - 1 + filteredScreenshots.length) %
                                filteredScreenshots.length
                            )
                          }
                          aria-label={locale === "fr" ? "Capture précédente" : "Previous screenshot"}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white/15"
                        >
                          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setLightboxIndex((lightboxIndex + 1) % filteredScreenshots.length)
                          }
                          aria-label={locale === "fr" ? "Capture suivante" : "Next screenshot"}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white/15"
                        >
                          <ChevronRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(null)}
                      aria-label={t(UI_COPY.projectActions.close, locale)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white hover:bg-white/20"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div
                  onClick={(e) => e.stopPropagation()}
                  className={`mx-auto flex-1 w-full max-w-6xl overflow-y-auto rounded-2xl border border-white/10 bg-zinc-900/80 p-3 sm:p-5 ${
                    project.mediaFormat === "mobile"
                      ? "flex items-center justify-center"
                      : ""
                  }`}
                >
                  <Image
                    src={activeLightboxShot.src}
                    alt={t(activeLightboxShot.title, locale)}
                    width={project.mediaFormat === "mobile" ? 1179 : 1600}
                    height={project.mediaFormat === "mobile" ? 2556 : 1200}
                    className={
                      project.mediaFormat === "mobile"
                        ? "mx-auto max-h-[76vh] w-auto rounded-[24px] border border-white/15 object-contain shadow-2xl"
                        : "mx-auto h-auto w-full rounded-xl object-contain"
                    }
                    priority
                  />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
