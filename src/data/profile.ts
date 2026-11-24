import type { Locale } from "@/lib/i18n";

export interface LocalizedText {
  fr: string;
  en: string;
}

export const PROFILE = {
  name: "Félix Ngankam Kengni",
  shortName: "Félix Ngan",
  initials: "FN",
  handle: "felix-ngan",
  email: "felixngankamkengni@gmail.com",
  github: "https://github.com/felix-ngan",
  linkedin: "https://lnkd.in/p/dUm6RzHq",
  camaroesLiveUrl: "https://camaroespos.vercel.app/",
  cvUrl: "/CV_Felix.pdf",
  cvDownloadName: "CV_Felix_Ngankam_Kengni.pdf",
  role: {
    fr: "Développeur Full-Stack & Multi-plateforme",
    en: "Full-Stack & Cross-Platform Software Engineer",
  } satisfies LocalizedText,
  availability: {
    fr: "Ouvert aux opportunités · CDI, Stage & Missions",
    en: "Open to opportunities · Full-Time, Internship & Projects",
  } satisfies LocalizedText,
  heroHeadline: {
    fr: "Je conçois des logiciels complets — du Web au Mobile, jusqu'au Desktop.",
    en: "I engineer end-to-end software — across Web, Mobile, and Desktop.",
  } satisfies LocalizedText,
  heroSubheadline: {
    fr: "De l'architecture métier jusqu'à la mise en production, je bâtis des applications fiables, testées et maintenables : systèmes ERP/POS multi-plateformes (.NET 8, Next.js & Electron) et plateforme mobile temps réel avec vision par ordinateur.",
    en: "From domain architecture to production delivery, I build reliable, tested, and maintainable software: cross-platform ERP/POS systems (.NET 8, Next.js & Electron) and a real-time mobile platform with computer vision.",
  } satisfies LocalizedText,
};

export interface ProofMetric {
  value: string;
  label: LocalizedText;
  detail: LocalizedText;
}

export const PROOF_METRICS: ProofMetric[] = [
  {
    value: "3",
    label: {
      fr: "Produits end-to-end",
      en: "End-to-end products",
    },
    detail: {
      fr: "ERP/POS, SaaS Monorepo & Santé Mobile",
      en: "ERP/POS, SaaS Monorepo & Mobile Health",
    },
  },
  {
    value: "5+",
    label: {
      fr: "Plateformes cibles",
      en: "Target platforms",
    },
    detail: {
      fr: "Web, iOS/Android, Windows, macOS, Linux",
      en: "Web, iOS/Android, Windows, macOS, Linux",
    },
  },
  {
    value: "44",
    label: {
      fr: "Écrans réels documentés",
      en: "Real screens documented",
    },
    detail: {
      fr: "Web, Desktop & Mobile livrés",
      en: "Shipped Web, Desktop & Mobile UIs",
    },
  },
  {
    value: "100%",
    label: {
      fr: "Cycle produit maîtrisé",
      en: "Full-cycle ownership",
    },
    detail: {
      fr: "Architecture, API, Tests, Agentic Coding & Deploy",
      en: "Architecture, APIs, Tests, Agentic Coding & Deploy",
    },
  },
];

export interface EngineeringPillar {
  id: string;
  badge: string;
  featured?: boolean;
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
  proof: LocalizedText;
}

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    id: "agentic-coding",
    badge: "01",
    featured: true,
    title: {
      fr: "Codage Agentique & Ingénierie Augmentée (Harness, MCP, Skills)",
      en: "Agentic Coding & AI-Augmented Engineering (Harness, MCP, Skills)",
    },
    description: {
      fr: "Maîtrise avancée des workflows de développement agentique modernes : configuration d'agent harnesses, intégration de serveurs MCP (Model Context Protocol), création et orchestration de Skills métier, Spec-Driven Development (specs d'architecture, AGENTS.md) et vérification rigoureuse (tests, lint, revues de code) pour livrer plus vite sans sacrifier la qualité.",
      en: "Hands-on mastery of modern agentic engineering workflows: configuring agent harnesses, integrating MCP (Model Context Protocol) servers, designing reusable domain Skills, Spec-Driven Development (design specs, AGENTS.md), and strict verification gates (tests, linting, human code review) to accelerate delivery without compromising quality.",
    },
    tags: ["Agent Harnesses", "MCP Servers", "Skills", "Spec-Driven Dev", "Context Engineering"],
    proof: {
      fr: "Specs · Serena MCP · Workflows Superpowers",
      en: "Design Specs · Serena MCP · Agentic Workflows",
    },
  },
  {
    id: "clean-architecture-ddd",
    badge: "02",
    title: {
      fr: "Clean Architecture, DDD & Pattern MVVM",
      en: "Clean Architecture, DDD & MVVM Pattern",
    },
    description: {
      fr: "Séparation stricte entre noyau métier, persistance et interfaces : un unique domaine C# (.NET 8) découplé alimente trois moteurs UI (WPF, Avalonia, Blazor WASM), garantissant maintenabilité, évolutivité et testabilité.",
      en: "Strict separation between domain logic, persistence, and presentation: a single decoupled C# (.NET 8) domain powers three UI engines (WPF, Avalonia, Blazor WASM), maximizing maintainability and testability.",
    },
    tags: ["Clean Architecture", "Domain-Driven Design", "MVVM", "SOLID"],
    proof: {
      fr: "CAMAROES POS (.NET 8)",
      en: "CAMAROES POS (.NET 8)",
    },
  },
  {
    id: "monorepo-contract-first",
    badge: "03",
    title: {
      fr: "Monorepo, Design System & API Contract-First",
      en: "Monorepo, Design System & Contract-First API",
    },
    description: {
      fr: "Architecture PNPM monorepo mutualisant un Design System typé (Radix UI / shadcn/ui, Zod) entre Web (Next.js) et Desktop (Electron), pilotée par un contrat OpenAPI 3.0.3 et des mocks MSW pour un développement frontend autonome et rapide.",
      en: "PNPM monorepo sharing a typed Design System (Radix UI / shadcn/ui, Zod) across Web (Next.js) and Desktop (Electron), driven by an OpenAPI 3.0.3 contract and MSW mocks for independent frontend velocity.",
    },
    tags: ["PNPM Monorepo", "OpenAPI 3.0.3", "MSW Mocking", "Design System"],
    proof: {
      fr: "OmniStock Frontend",
      en: "OmniStock Frontend",
    },
  },
  {
    id: "security-testing",
    badge: "04",
    title: {
      fr: "Security by Design (RBAC / JWT) & Tests Automatisés",
      en: "Security by Design (RBAC / JWT) & Automated Testing",
    },
    description: {
      fr: "Contrôle d'accès par rôles strict (Admin/Caissier, Patient/Praticien), vérification d'appartenance sur les données sensibles, validation de schémas (Zod / Pydantic) et suites de tests unitaires xUnit couvrant la logique métier critique.",
      en: "Strict Role-Based Access Control (Admin/Cashier, Patient/Therapist), ownership enforcement on sensitive health records, schema validation (Zod / Pydantic), and xUnit test suites guarding critical business rules.",
    },
    tags: ["RBAC & JWT", "xUnit Testing", "Zod / Pydantic", "Audit Trail"],
    proof: {
      fr: "CAMAROES POS · KineVision",
      en: "CAMAROES POS · KineVision",
    },
  },
  {
    id: "realtime-delivery",
    badge: "05",
    title: {
      fr: "Temps Réel, Multi-plateforme & Livraison Continue (CI/CD, i18n)",
      en: "Real-Time, Cross-Platform & Continuous Delivery (CI/CD, i18n)",
    },
    description: {
      fr: "WebSockets FastAPI faible latence (`/ws/rehab`) pour l'analyse vidéo temps réel (OpenCV / MediaPipe), déploiements automatisés sur Vercel, internationalisation complète Français / Anglais (i18next & ressources dynamiques) et état réactif (Zustand / Local-First).",
      en: "Low-latency FastAPI WebSockets (`/ws/rehab`) for real-time video analysis (OpenCV / MediaPipe), automated Vercel deployments, full French / English i18n (i18next & dynamic resources), and reactive Local-First state (Zustand / SQLite).",
    },
    tags: ["WebSockets", "CI/CD Vercel", "i18n FR/EN", "Computer Vision", "Local-First"],
    proof: {
      fr: "KineVision · CAMAROES · OmniStock",
      en: "KineVision · CAMAROES · OmniStock",
    },
  },
];

export interface SkillGroup {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    title: { fr: "Frontend & Design Systems", en: "Frontend & Design Systems" },
    subtitle: { fr: "Interfaces réactives, accessibles et bilingues", en: "Responsive, accessible & bilingual UIs" },
    skills: [
      "TypeScript",
      "React 19",
      "Next.js (App Router)",
      "Tailwind CSS v4",
      "shadcn/ui & Radix UI",
      "Zustand",
      "React Hook Form + Zod",
      "Recharts",
      "i18next (FR/EN)",
      "Framer Motion",
    ],
  },
  {
    id: "backend",
    title: { fr: "Backend, APIs & Données", en: "Backend, APIs & Data" },
    subtitle: { fr: "Architecture métier, persistance et sécurité", en: "Business logic, persistence & security" },
    skills: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "WebSockets",
      "C# 12 & .NET 8",
      "Entity Framework Core",
      "SQLite",
      "OpenAPI 3.0.3",
      "JWT & RBAC",
      "REST API Design",
    ],
  },
  {
    id: "multiplatform",
    title: { fr: "Mobile & Desktop", en: "Mobile & Desktop" },
    subtitle: { fr: "Applications natives et cross-platform", en: "Native & cross-platform apps" },
    skills: [
      "React Native",
      "Expo",
      "NativeWind",
      "Electron 33 & Vite",
      "Blazor WebAssembly",
      "Avalonia UI",
      "WPF / MVVM",
      "QuestPDF & Export PDF",
    ],
  },
  {
    id: "agentic-quality",
    title: { fr: "Codage Agentique, Qualité & Vision", en: "Agentic Coding, Quality & Vision" },
    subtitle: { fr: "Workflows agents modernes, tests et livraison", en: "Modern agent workflows, testing & delivery" },
    skills: [
      "Agentic Coding",
      "Agent Harnesses",
      "MCP (Model Context Protocol)",
      "Agent Skills & AGENTS.md",
      "Spec-Driven Development",
      "Tests unitaires xUnit",
      "MSW (Mock Service Worker)",
      "OpenCV & MediaPipe",
      "PNPM Monorepo",
      "Git, GitHub & Vercel",
    ],
  },
];

export const UI_COPY = {
  nav: {
    projects: { fr: "Projets", en: "Projects" },
    engineering: { fr: "Ingénierie", en: "Engineering" },
    skills: { fr: "Compétences", en: "Skills" },
    contact: { fr: "Contact", en: "Contact" },
    skipToContent: { fr: "Aller au contenu principal", en: "Skip to main content" },
  },
  hero: {
    exploreProjects: { fr: "Explorer les projets", en: "Explore projects" },
    liveDemo: { fr: "Tester CAMAROES POS", en: "Try CAMAROES POS Live" },
    viewCv: { fr: "Voir mon CV (PDF)", en: "View Resume (PDF)" },
    downloadCv: { fr: "Télécharger mon CV", en: "Download Resume" },
    contactMe: { fr: "Me contacter", en: "Get in touch" },
  },
  sections: {
    projectsEyebrow: { fr: "ÉTUDES DE CAS", en: "CASE STUDIES" },
    projectsTitle: {
      fr: "Projets conçus et livrés de bout en bout",
      en: "Projects engineered from architecture to production",
    },
    projectsSubtitle: {
      fr: "Chaque projet répond à un vrai besoin métier avec une architecture soignée. Cliquez sur une étude de cas pour explorer l'architecture technique et toutes les captures d'écran.",
      en: "Each project solves a real business problem with clean engineering. Open any case study to inspect technical architecture and full-resolution screenshots.",
    },
    engineeringEyebrow: { fr: "APPROCHE D'INGÉNIERIE", en: "ENGINEERING APPROACH" },
    engineeringTitle: {
      fr: "Principes modernes & codage agentique appliqués sur le terrain",
      en: "Modern engineering principles & agentic coding in practice",
    },
    engineeringSubtitle: {
      fr: "Des standards d'ingénierie recherchés par les équipes produit — Clean Architecture, Contract-First, Security by Design et workflows de codage agentique (Harness, MCP, Skills) — directement illustrés dans mes dépôts.",
      en: "Industry-standard practices valued by modern product teams — Clean Architecture, Contract-First APIs, Security by Design, and Agentic Coding workflows (Harness, MCP, Skills) — applied directly across my repositories.",
    },
    skillsEyebrow: { fr: "STACK TECHNIQUE", en: "TECHNICAL STACK" },
    skillsTitle: {
      fr: "Technologies éprouvées sur des projets concrets",
      en: "Battle-tested across real shipped projects",
    },
    contactEyebrow: { fr: "CONTACT", en: "CONTACT" },
    contactTitle: {
      fr: "Discutons de votre équipe et de vos projets",
      en: "Let's talk about your team and product",
    },
    contactSubtitle: {
      fr: "À la recherche d'une opportunité en développement Full-Stack, Frontend, Mobile ou Multi-plateforme. Réponse rapide garantie par email ou LinkedIn.",
      en: "Looking for a Full-Stack, Frontend, Mobile or Cross-Platform software engineering role. Fast response via email or LinkedIn.",
    },
  },
  projectActions: {
    caseStudy: { fr: "Étude de cas", en: "Case study" },
    screenshots: { fr: "captures", en: "screens" },
    liveDemo: { fr: "Démo live", en: "Live demo" },
    sourceCode: { fr: "Code GitHub", en: "GitHub code" },
    close: { fr: "Fermer", en: "Close" },
    overview: { fr: "Contexte & Problème", en: "Context & Problem" },
    architecture: { fr: "Architecture & Choix techniques", en: "Architecture & Technical Decisions" },
    highlights: { fr: "Points forts d'ingénierie", en: "Engineering Highlights" },
    gallery: { fr: "Galerie d'écrans", en: "Screen Gallery" },
    kineScreensPendingTitle: {
      fr: "Captures mobiles en cours d'ajout",
      en: "Mobile screenshots coming soon",
    },
    kineScreensPendingDesc: {
      fr: "L'architecture complète (FastAPI + MediaPipe WebSocket + React Native Expo) est déjà sur GitHub. Les captures iOS/Android réelles seront ajoutées ici très prochainement.",
      en: "The complete codebase (FastAPI + MediaPipe WebSocket + React Native Expo) is live on GitHub. Real iOS/Android screenshots will be plugged in here shortly.",
    },
    zoomHint: {
      fr: "Cliquez sur une capture pour l'agrandir en plein écran",
      en: "Click any screenshot to inspect in full screen",
    },
  },
  contact: {
    copyEmail: { fr: "Copier l'email", en: "Copy email" },
    copied: { fr: "Email copié !", en: "Email copied!" },
    sendEmail: { fr: "Envoyer un email", en: "Send an email" },
    viewLinkedin: { fr: "LinkedIn", en: "LinkedIn" },
    viewGithub: { fr: "GitHub", en: "GitHub" },
    testLiveApp: { fr: "Ouvrir CAMAROES POS (Vercel)", en: "Open CAMAROES POS (Vercel)" },
  },
  footer: {
    builtWith: {
      fr: "Conçu & développé avec Next.js, React 19, TypeScript & Tailwind CSS v4",
      en: "Designed & built with Next.js, React 19, TypeScript & Tailwind CSS v4",
    },
  },
};

export function t(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
