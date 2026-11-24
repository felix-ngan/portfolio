# Portfolio — Félix Ngankam Kengni

Portfolio développeur moderne construit avec **Next.js (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4** et **Framer Motion**.

## Projets présentés
- **CAMAROES POS** — C# 12 / .NET 8 (Blazor WebAssembly sur Vercel, Avalonia UI, WPF) · 9 captures intégrées + démo live (`https://camaroespos.vercel.app/`)
- **OmniStock Platform** — Monorepo PNPM (Next.js 16 + Electron 33 + Design System partagé + OpenAPI 3.0.3) · 19 captures intégrées
- **KineVision AI** — FastAPI + OpenCV / MediaPipe Pose (WebSocket temps réel) + React Native / Expo · Aperçu biomécanique interactif prêt à basculer sur les captures réelles

## Commandes

```bash
npm run dev        # Serveur de développement local (http://localhost:3000)
npm run typecheck  # Vérification TypeScript stricte
npm run lint       # Lint ESLint / Next.js
npm run build      # Build de production
```

## Ajouter les captures de KineVision AI

1. Copiez vos images dans `public/projects/kinevision/` (ex. `01-dashboard.png`, `02-camera-ai.png`, etc.).
2. Dans `src/data/projects.ts`, renseignez `coverImage` et le tableau `screenshots` du projet `kinevision-ai`.

## Déploiement sur Vercel

Importez ce dépôt sur Vercel (détection automatique Next.js) ou lancez `vercel --prod`.
