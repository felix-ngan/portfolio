"use client";

import { useState } from "react";
import { Activity, Camera, Radio, ShieldCheck } from "lucide-react";
import { useLocale } from "@/lib/i18n";

type ExerciseMode = "arms" | "squat";

export function KineVisionPreview() {
  const {
    state: { locale },
  } = useLocale();
  const [mode, setMode] = useState<ExerciseMode>("arms");

  const isArms = mode === "arms";

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-zinc-950 via-slate-950 to-indigo-950/80 p-4 text-zinc-100 sm:p-5">
      {/* Subtle diagnostic grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(167,139,250,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(167,139,250,0.18) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top telemetry bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/15 px-2.5 py-1 font-mono text-[11px] text-violet-200">
          <Radio className="h-3 w-3 animate-pulse text-emerald-400" aria-hidden="true" />
          <span>ws://api/ws/rehab · MediaPipe Pose</span>
        </div>
        <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-zinc-900/80 p-0.5 font-mono text-[11px]">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMode("arms");
            }}
            className={`rounded-md px-2 py-1 transition-colors ${
              isArms ? "bg-violet-500 text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {locale === "fr" ? "Épaules" : "Shoulders"}
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMode("squat");
            }}
            className={`rounded-md px-2 py-1 transition-colors ${
              !isArms ? "bg-violet-500 text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Squat
          </button>
        </div>
      </div>

      {/* Center interactive skeleton & metrics */}
      <div className="relative z-10 my-3 grid grid-cols-1 items-center gap-4 sm:grid-cols-12">
        {/* Pose Skeleton Visual */}
        <div className="flex items-center justify-center rounded-xl border border-white/10 bg-zinc-900/60 p-3 backdrop-blur-sm sm:col-span-5">
          <svg
            viewBox="0 0 140 155"
            className="h-32 w-28 sm:h-36 sm:w-32"
            role="img"
            aria-label={
              locale === "fr"
                ? "Aperçu squelette biomécanique MediaPipe"
                : "MediaPipe biomechanical pose skeleton preview"
            }
          >
            {/* Head */}
            <circle cx="70" cy="22" r="10" fill="none" stroke="#c4b5fd" strokeWidth="2.2" />
            {/* Spine */}
            <line x1="70" y1="32" x2="70" y2="86" stroke="#a78bfa" strokeWidth="2.5" />
            {/* Shoulders */}
            <line x1="44" y1="46" x2="96" y2="46" stroke="#a78bfa" strokeWidth="2.5" />
            {/* Arms */}
            {isArms ? (
              <>
                <line x1="44" y1="46" x2="22" y2="18" stroke="#34d399" strokeWidth="2.8" />
                <line x1="96" y1="46" x2="118" y2="20" stroke="#34d399" strokeWidth="2.8" />
                <path
                  d="M 44 62 A 16 16 0 0 1 32 34"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.8"
                  strokeDasharray="3 2"
                />
              </>
            ) : (
              <>
                <line x1="44" y1="46" x2="24" y2="62" stroke="#c4b5fd" strokeWidth="2.4" />
                <line x1="96" y1="46" x2="116" y2="62" stroke="#c4b5fd" strokeWidth="2.4" />
              </>
            )}
            {/* Hips */}
            <line x1="54" y1="86" x2="86" y2="86" stroke="#a78bfa" strokeWidth="2.5" />
            {/* Legs */}
            {isArms ? (
              <>
                <line x1="54" y1="86" x2="48" y2="118" stroke="#a78bfa" strokeWidth="2.5" />
                <line x1="48" y1="118" x2="46" y2="146" stroke="#a78bfa" strokeWidth="2.5" />
                <line x1="86" y1="86" x2="92" y2="118" stroke="#a78bfa" strokeWidth="2.5" />
                <line x1="92" y1="118" x2="94" y2="146" stroke="#a78bfa" strokeWidth="2.5" />
              </>
            ) : (
              <>
                <line x1="54" y1="86" x2="34" y2="112" stroke="#34d399" strokeWidth="2.8" />
                <line x1="34" y1="112" x2="50" y2="144" stroke="#34d399" strokeWidth="2.8" />
                <line x1="86" y1="86" x2="106" y2="112" stroke="#34d399" strokeWidth="2.8" />
                <line x1="106" y1="112" x2="90" y2="144" stroke="#34d399" strokeWidth="2.8" />
                <path
                  d="M 45 102 A 14 14 0 0 0 43 124"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.8"
                  strokeDasharray="3 2"
                />
              </>
            )}
            {/* Landmarks */}
            {[
              [44, 46],
              [96, 46],
              [54, 86],
              [86, 86],
              isArms ? [22, 18] : [34, 112],
              isArms ? [118, 20] : [106, 112],
            ].map(([cx, cy], idx) => (
              <circle
                key={idx}
                cx={cx}
                cy={cy}
                r="4"
                fill="#10b981"
                stroke="#09090b"
                strokeWidth="1.5"
              />
            ))}
          </svg>
        </div>

        {/* Biomechanical Readout */}
        <div className="space-y-2.5 sm:col-span-7">
          <div className="rounded-xl border border-white/10 bg-zinc-900/75 p-3">
            <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400">
              <span>
                {isArms
                  ? locale === "fr"
                    ? "AMPLITUDE ÉLÉVATION"
                    : "ARM ELEVATION ROM"
                  : locale === "fr"
                    ? "FLEXION GENOU"
                    : "KNEE FLEXION ROM"}
              </span>
              <span className="text-emerald-400">
                {isArms ? "156°" : "98°"}
              </span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 font-mono text-xs">
              <div className="rounded-lg bg-white/5 px-2.5 py-1.5">
                <span className="block text-[10px] text-zinc-400">
                  {locale === "fr" ? "Gauche / Droite" : "Left / Right"}
                </span>
                <span className="font-semibold text-zinc-100 tabular-nums">
                  {isArms ? "154° / 156°" : "96° / 98°"}
                </span>
              </div>
              <div className="rounded-lg bg-white/5 px-2.5 py-1.5">
                <span className="block text-[10px] text-zinc-400">
                  {locale === "fr" ? "Score Mobilité" : "Mobility Score"}
                </span>
                <span className="font-semibold text-emerald-400 tabular-nums">
                  {isArms ? "96 / 100" : "92 / 100"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
            <span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-emerald-300">
              <Activity className="h-3 w-3" aria-hidden="true" />
              {locale === "fr" ? "Symétrie validée (<15°)" : "Symmetry verified (<15°)"}
            </span>
            <span className="inline-flex items-center gap-1 rounded-md border border-sky-500/30 bg-sky-500/10 px-2 py-1 text-sky-300">
              <ShieldCheck className="h-3 w-3" aria-hidden="true" />
              JWT + RBAC
            </span>
          </div>
        </div>
      </div>

      {/* Bottom notice for upcoming real mobile screenshots */}
      <div className="relative z-10 flex items-center justify-between gap-2 border-t border-white/10 pt-2.5 font-mono text-[11px] text-zinc-400">
        <span className="inline-flex items-center gap-1.5 truncate">
          <Camera className="h-3.5 w-3.5 shrink-0 text-violet-400" aria-hidden="true" />
          <span className="truncate">
            {locale === "fr"
              ? "Aperçu interactif · Captures mobiles bientôt"
              : "Interactive preview · Mobile shots soon"}
          </span>
        </span>
        <span className="shrink-0 text-violet-300">Expo · FastAPI</span>
      </div>
    </div>
  );
}
