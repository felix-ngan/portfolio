import type { LocalizedText } from "./profile";

export interface ProjectScreenshot {
  src: string;
  title: LocalizedText;
  category: LocalizedText;
  description?: LocalizedText;
}

export interface ProjectArchitectureLayer {
  layer: string;
  tech: string;
  detail: LocalizedText;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  featuredLabel: LocalizedText;
  title: string;
  tagline: LocalizedText;
  summary: LocalizedText;
  year: string;
  role: LocalizedText;
  accent: "sky" | "emerald" | "violet";
  mediaFormat: "desktop" | "mobile";
  platforms: string[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  coverImage?: string;
  metrics: {
    value: string;
    label: LocalizedText;
  }[];
  problem: LocalizedText;
  solution: LocalizedText;
  architectureLayers: ProjectArchitectureLayer[];
  highlights: LocalizedText[];
  screenshots: ProjectScreenshot[];
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "camaroes-pos",
    slug: "camaroes-pos",
    featuredLabel: {
      fr: "Déployé en production · Vercel",
      en: "Live in Production · Vercel",
    },
    title: "CAMAROES POS",
    tagline: {
      fr: "Système POS & ERP Retail multi-plateforme (C# / .NET 8) — Web, Desktop macOS/Linux & Windows",
      en: "Cross-Platform Retail POS & ERP (C# / .NET 8) — Web, macOS/Linux & Windows Desktop",
    },
    summary: {
      fr: "Refonte complète d'un logiciel de point de vente et de gestion commerciale partageant un unique domaine métier C# 12 / .NET 8 sur trois plateformes : Blazor WebAssembly (déployé sur Vercel avec démo 1-clic), Avalonia UI (cross-platform) et WPF Windows.",
      en: "Complete re-architecture of a retail point-of-sale and inventory suite sharing a single C# 12 / .NET 8 domain across three UI targets: Blazor WebAssembly (live on Vercel with 1-click demo), Avalonia UI (cross-platform), and Windows WPF.",
    },
    year: "2026",
    role: {
      fr: "Architecte & Développeur Full-Stack .NET",
      en: "Lead .NET Architect & Full-Stack Developer",
    },
    accent: "sky",
    mediaFormat: "desktop",
    platforms: ["Blazor WebAssembly", "Avalonia (macOS/Linux/Win)", "WPF Windows"],
    stack: [
      "C# 12",
      ".NET 8",
      "Blazor WASM",
      "Avalonia UI",
      "WPF / MVVM",
      "EF Core + SQLite",
      "QuestPDF",
      "xUnit Tests",
      "i18n FR/EN",
      "Vercel",
    ],
    githubUrl: "https://github.com/felix-ngan/CAMAROESPOS",
    liveUrl: "https://camaroespos.vercel.app/",
    coverImage: "/projects/camaroespos/02-dashboard.png",
    metrics: [
      { value: "3 UI", label: { fr: "Moteurs sur 1 domaine C#", en: "Engines on 1 C# domain" } },
      { value: "8", label: { fr: "Graphiques KPI interactifs", en: "Interactive KPI charts" } },
      { value: "7", label: { fr: "Suites de tests xUnit", en: "xUnit test suites" } },
    ],
    problem: {
      fr: "Les commerces ont besoin d'un POS fiable, rapide et bilingue (FR/EN) gérant caisse, stocks, CRM fidélité, dépenses et PDF, tout en restant testable instantanément en ligne par un recruteur ou un client sans serveur à installer.",
      en: "Retail businesses need a fast, reliable bilingual (FR/EN) POS managing checkout, inventory, customer wallets, expenses, and PDF reporting — while remaining instantly testable online with zero server setup.",
    },
    solution: {
      fr: "Architecture découplée autour de CamaroesPOS.Domain : les entités et règles métiers alimentent à la fois la version Desktop SQLite (WPF + Avalonia) et une application Blazor WebAssembly 100 % statique hébergée sur Vercel avec persistance localStorage isolée par visiteur et connexion Démo Admin/Caissier en un clic.",
      en: "Decoupled architecture centered on CamaroesPOS.Domain: shared entities and business rules power both Desktop SQLite apps (WPF + Avalonia) and a 100% static Blazor WebAssembly app hosted on Vercel with isolated visitor localStorage persistence and 1-click Admin/Cashier demo sign-in.",
    },
    architectureLayers: [
      {
        layer: "Domain Core",
        tech: "CamaroesPOS.Domain (.NET 8)",
        detail: {
          fr: "Entités métiers partagées (Product, SoldItem, CustomerWallet, Stock, Expense, User) réutilisées sans duplication entre Desktop et Web.",
          en: "Shared domain entities (Product, SoldItem, CustomerWallet, Stock, Expense, User) reused cleanly across Desktop and Web.",
        },
      },
      {
        layer: "Web Runtime",
        tech: "Blazor WebAssembly + Vercel SPA",
        detail: {
          fr: "Build statique automatisé via vercel-build.sh, routage SPA, 8 graphiques SVG natifs, garde de rôles Admin/Cashier et impression PDF dédiée.",
          en: "Automated static build via vercel-build.sh, SPA fallback routing, 8 custom SVG charts, strict Admin/Cashier RBAC guards, and print-ready PDF receipts.",
        },
      },
      {
        layer: "Desktop & Data",
        tech: "Avalonia UI · WPF · EF Core / SQLite",
        detail: {
          fr: "Pattern MVVM (INotifyPropertyChanged, RelayCommand), base SQLite embarquée zéro-config et génération PDF haute qualité avec QuestPDF.",
          en: "MVVM pattern (INotifyPropertyChanged, RelayCommand), zero-config embedded SQLite database, and high-resolution QuestPDF documents.",
        },
      },
      {
        layer: "Testing",
        tech: "CamaroesPOS.Tests (xUnit)",
        detail: {
          fr: "7 fichiers de tests couvrant caisse, remises, stocks bornés, annulations de commandes, permissions de rôles, sérialisation et parité i18n.",
          en: "7 test suites verifying checkout, discounts, bounded stock updates, order cancellations, role permissions, JSON snapshot serialization, and i18n parity.",
        },
      },
    ],
    highlights: [
      {
        fr: "Accès Démo 1-clic (Admin / Caissier) + bouton Réinitialiser Démo pour tester librement en production sur Vercel.",
        en: "1-click Demo Login (Admin / Cashier) + Reset Demo button for frictionless live testing on Vercel.",
      },
      {
        fr: "Matrice RBAC stricte : le Caissier opère la caisse et les portefeuilles clients, tandis que stocks, dépenses, annulations et paramètres sont protégés côté état.",
        en: "Strict RBAC permission matrix: Cashiers handle checkout and wallets, while inventory adjustments, expenses, cancellations, and settings are enforced at the state layer.",
      },
      {
        fr: "Bilingue Français / Anglais instantané et support complet des paiements Espèces, Mobile Money et Portefeuilles fidélité (FCFA).",
        en: "Instant French / English switching with full support for Cash, Mobile Money, and Loyalty Customer Wallets.",
      },
    ],
    screenshots: [
      {
        src: "/projects/camaroespos/02-dashboard.png",
        title: { fr: "Tableau de bord KPI & 8 Graphiques", en: "Executive KPI Dashboard & 8 Charts" },
        category: { fr: "Analytics", en: "Analytics" },
      },
      {
        src: "/projects/camaroespos/03-pos.png",
        title: { fr: "Caisse / Point de Vente (POS)", en: "Point of Sale (POS) Checkout" },
        category: { fr: "Caisse", en: "POS" },
      },
      {
        src: "/projects/camaroespos/01-login.png",
        title: { fr: "Connexion & Accès Démo 1-clic", en: "Authentication & 1-Click Demo Access" },
        category: { fr: "Sécurité", en: "Auth" },
      },
      {
        src: "/projects/camaroespos/04-inventory.png",
        title: { fr: "Gestion avancée des stocks", en: "Inventory & Stock Management" },
        category: { fr: "Stocks", en: "Inventory" },
      },
      {
        src: "/projects/camaroespos/05-wallets.png",
        title: { fr: "CRM Clients & Portefeuilles Fidélité", en: "Customer CRM & Loyalty Wallets" },
        category: { fr: "CRM", en: "CRM" },
      },
      {
        src: "/projects/camaroespos/06-vendors.png",
        title: { fr: "Gestion des Fournisseurs", en: "Vendor & Supplier Directory" },
        category: { fr: "Achats", en: "Suppliers" },
      },
      {
        src: "/projects/camaroespos/07-reports.png",
        title: { fr: "Rapports, Historique & Export PDF", en: "Sales Reports, Audit & PDF Export" },
        category: { fr: "Rapports", en: "Reports" },
      },
      {
        src: "/projects/camaroespos/08-expenses.png",
        title: { fr: "Suivi des Dépenses & Charges", en: "Expenses & Operating Costs" },
        category: { fr: "Finances", en: "Finance" },
      },
      {
        src: "/projects/camaroespos/09-settings.png",
        title: { fr: "Paramètres, Utilisateurs & Mobile Money", en: "Settings, Roles & Mobile Money Config" },
        category: { fr: "Administration", en: "Admin" },
      },
    ],
  },
  {
    id: "omnistock",
    slug: "omnistock",
    featuredLabel: {
      fr: "Monorepo Web & Desktop · OpenAPI",
      en: "Web & Desktop Monorepo · OpenAPI",
    },
    title: "OmniStock Platform",
    tagline: {
      fr: "Plateforme SaaS modulaire de Gestion de Stock, ERP & POS (Next.js 16 + Electron 33)",
      en: "Modular Stock Management, ERP & POS Platform (Next.js 16 + Electron 33)",
    },
    summary: {
      fr: "Application Web et Desktop construite en monorepo PNPM autour d'un Design System partagé (@gestion-stock/ui), d'un contrat OpenAPI 3.0.3 complet et de 11 modules métiers : onboarding multi-étapes, dashboard financier, caisse, catalogue, achats, CRM, créances, inventaire et journal d'audit.",
      en: "Unified Web and Desktop ERP built as a PNPM monorepo around a shared Design System (@gestion-stock/ui), a complete OpenAPI 3.0.3 contract, and 11 business modules: multi-step onboarding, financial dashboard, POS, catalog, procurement, CRM, customer credits, inventory, and audit logs.",
    },
    year: "2026",
    role: {
      fr: "Développeur Frontend",
      en: "Frontend Developer",
    },
    accent: "emerald",
    mediaFormat: "desktop",
    platforms: ["Web (Next.js 16)", "Desktop (Electron 33)", "Shared UI Package"],
    stack: [
      "TypeScript",
      "Next.js 16",
      "React 19",
      "Electron 33",
      "Vite 8",
      "Tailwind CSS v4",
      "shadcn/ui & Radix",
      "Zustand",
      "Recharts",
      "Zod & Hook Form",
      "MSW",
      "OpenAPI 3.0.3",
      "i18next",
    ],
    githubUrl: "https://github.com/OMNITECH-LIPROGL/frontend",
    coverImage: "/projects/omnistock/06-Dashboard-TableauDeBord.png",
    metrics: [
      { value: "11", label: { fr: "Modules ERP complets", en: "Full ERP modules" } },
      { value: "19", label: { fr: "Écrans conçus & livrés", en: "Designed & shipped views" } },
      { value: "2-in-1", label: { fr: "Web + Electron unifiés", en: "Unified Web + Electron" } },
    ],
    problem: {
      fr: "Les PME commerciales ont besoin d'une interface ERP moderne qui fonctionne aussi bien dans un navigateur que sous forme d'application Desktop installée en boutique, sans maintenir deux bases de code frontend divergentes.",
      en: "Retail SMEs need a modern ERP interface that runs both in the browser and as an installed Desktop app in-store, without maintaining two diverging frontend codebases.",
    },
    solution: {
      fr: "En tant que développeur frontend sur le projet, j'ai développé les interfaces et le Design System partagé (`packages/ui`) au sein d'un monorepo PNPM structuré en 3 workspaces : tous les composants, vues métiers, store Zustand et traductions i18next sont consommés à l'identique par `apps/web` (Next.js 16) et `apps/desktop` (Electron 33 + Vite 8), adossés à un contrat OpenAPI 3.0.3 et des mocks MSW réalistes.",
      en: "As the frontend developer on this project, I built the UI modules and shared Design System (`packages/ui`) within a 3-workspace PNPM monorepo: all components, feature views, Zustand state, and i18next locales are consumed identically by `apps/web` (Next.js 16) and `apps/desktop` (Electron 33 + Vite 8), backed by an OpenAPI 3.0.3 contract and realistic MSW mocks.",
    },
    architectureLayers: [
      {
        layer: "Shared Design System",
        tech: "@gestion-stock/ui (Radix + shadcn/ui)",
        detail: {
          fr: "13 vues métiers modulaires, formulaires validés avec React Hook Form + Zod, graphiques Recharts et gestion d'état globale Zustand.",
          en: "13 modular business views, React Hook Form + Zod validated forms, Recharts visualizations, and centralized Zustand state.",
        },
      },
      {
        layer: "Web App",
        tech: "Next.js 16 · React 19 · Tailwind v4",
        detail: {
          fr: "Routage App Router dédié aux 11 domaines (/pos, /catalogue, /inventaire, /achats, /crm, /credits, /rapports, /audit, /onboarding, /parametres).",
          en: "App Router architecture covering all 11 business domains (/pos, /catalogue, /inventaire, /achats, /crm, /credits, /rapports, /audit, /onboarding, /parametres).",
        },
      },
      {
        layer: "Desktop App",
        tech: "Electron 33 · Vite 8 · Tailwind v4",
        detail: {
          fr: "Exécution desktop native réutilisant 100 % des vues partagées et de l'internationalisation sans duplication de code.",
          en: "Native desktop shell reusing 100% of shared business views and i18n resources with zero code duplication.",
        },
      },
      {
        layer: "API Contract & Specs",
        tech: "OpenAPI 3.0.3 · MSW · PRD & Cahier des charges",
        detail: {
          fr: "Spécification complète de 624 lignes (`openapi.yaml`), serveur mock MSW pour le développement autonome et documentation d'architecture complète.",
          en: "624-line OpenAPI specification (`openapi.yaml`), MSW mock worker for independent frontend velocity, and full PRD/architecture documentation.",
        },
      },
    ],
    highlights: [
      {
        fr: "Parcours d'Onboarding guidé en 4 étapes (Entreprise, Secteur, Finances, Finalisation) adaptant automatiquement la plateforme au métier.",
        en: "4-step guided Onboarding wizard (Company, Industry, Finances, Finalization) dynamically tailoring workspace modules.",
      },
      {
        fr: "Couverture ERP exhaustive : Caisse POS, Catalogue & variantes, Commandes fournisseurs & dépenses, CRM Clients/Fournisseurs, Créances clients, Audit Trail.",
        en: "Comprehensive ERP coverage: POS Checkout, Product Catalog, Purchase Orders & Expenses, Customer/Vendor CRM, Customer Credit Ledger, and Activity Audit Trail.",
      },
      {
        fr: "Démarche produit rigoureuse appuyée par un contrat OpenAPI 3.0.3, un PRD complet et une architecture documentée avant implémentation.",
        en: "Disciplined product engineering backed by an OpenAPI 3.0.3 spec, full PRD, and documented frontend/technical architecture.",
      },
    ],
    screenshots: [
      {
        src: "/projects/omnistock/06-Dashboard-TableauDeBord.png",
        title: { fr: "Tableau de bord financier & ventes", en: "Financial & Sales Overview Dashboard" },
        category: { fr: "Dashboard", en: "Dashboard" },
      },
      {
        src: "/projects/omnistock/07-POS-PointDeVente.png",
        title: { fr: "Point de Vente (POS) & Ticket temps réel", en: "Point of Sale & Live Receipt" },
        category: { fr: "Caisse", en: "POS" },
      },
      {
        src: "/projects/omnistock/08-Catalogue-Produits.png",
        title: { fr: "Catalogue Produits & Filtres", en: "Product Catalog & Filtering" },
        category: { fr: "Catalogue", en: "Catalog" },
      },
      {
        src: "/projects/omnistock/09-Catalogue-NouveauProduit.png",
        title: { fr: "Création Produit (Validation Zod)", en: "New Product Form (Zod Validation)" },
        category: { fr: "Catalogue", en: "Catalog" },
      },
      {
        src: "/projects/omnistock/15-Inventaire-Stocks.png",
        title: { fr: "Inventaire & Niveaux de Stock", en: "Inventory & Stock Control" },
        category: { fr: "Stocks", en: "Inventory" },
      },
      {
        src: "/projects/omnistock/10-Achats-CommandesFournisseurs.png",
        title: { fr: "Achats & Commandes Fournisseurs", en: "Procurement & Purchase Orders" },
        category: { fr: "Achats", en: "Purchases" },
      },
      {
        src: "/projects/omnistock/11-Achats-Depenses.png",
        title: { fr: "Gestion des Dépenses", en: "Operating Expenses Tracking" },
        category: { fr: "Achats", en: "Purchases" },
      },
      {
        src: "/projects/omnistock/12-CRM-Clients.png",
        title: { fr: "CRM — Base Clients", en: "CRM — Customer Directory" },
        category: { fr: "CRM", en: "CRM" },
      },
      {
        src: "/projects/omnistock/13-CRM-Fournisseurs.png",
        title: { fr: "CRM — Répertoire Fournisseurs", en: "CRM — Supplier Directory" },
        category: { fr: "CRM", en: "CRM" },
      },
      {
        src: "/projects/omnistock/14-Credits-CreancesClients.png",
        title: { fr: "Suivi des Crédits & Créances Clients", en: "Customer Credits & Receivables" },
        category: { fr: "Finances", en: "Finance" },
      },
      {
        src: "/projects/omnistock/16-Rapports-Statistiques.png",
        title: { fr: "Rapports & Statistiques Avancées", en: "Analytics & Business Reports" },
        category: { fr: "Rapports", en: "Reports" },
      },
      {
        src: "/projects/omnistock/17-Audit-JournalActivite.png",
        title: { fr: "Journal d'Audit & Traçabilité", en: "Activity Log & Audit Trail" },
        category: { fr: "Audit", en: "Audit" },
      },
      {
        src: "/projects/omnistock/01-Connexion-Login.png",
        title: { fr: "Écran d'Authentification", en: "Sign-in Screen" },
        category: { fr: "Auth", en: "Auth" },
      },
      {
        src: "/projects/omnistock/02-Onboarding-Etape1-Entreprise.png",
        title: { fr: "Onboarding — Étape 1 : Entreprise", en: "Onboarding — Step 1: Company" },
        category: { fr: "Onboarding", en: "Onboarding" },
      },
      {
        src: "/projects/omnistock/03-Onboarding-Etape2-Secteur.png",
        title: { fr: "Onboarding — Étape 2 : Secteur d'activité", en: "Onboarding — Step 2: Industry" },
        category: { fr: "Onboarding", en: "Onboarding" },
      },
      {
        src: "/projects/omnistock/04-Onboarding-Etape3-Finances.png",
        title: { fr: "Onboarding — Étape 3 : Finances & Devise", en: "Onboarding — Step 3: Finances" },
        category: { fr: "Onboarding", en: "Onboarding" },
      },
      {
        src: "/projects/omnistock/05-Onboarding-Etape4-Finalisation.png",
        title: { fr: "Onboarding — Étape 4 : Finalisation", en: "Onboarding — Step 4: Launch" },
        category: { fr: "Onboarding", en: "Onboarding" },
      },
      {
        src: "/projects/omnistock/18-Parametres-Configuration.png",
        title: { fr: "Paramètres généraux de la boutique", en: "Workspace General Settings" },
        category: { fr: "Paramètres", en: "Settings" },
      },
      {
        src: "/projects/omnistock/19-Parametres-FacturationTaxes.png",
        title: { fr: "Paramètres Facturation & Taxes", en: "Billing & Tax Configuration" },
        category: { fr: "Paramètres", en: "Settings" },
      },
    ],
  },
  {
    id: "kinevision-ai",
    slug: "kinevision-ai",
    featuredLabel: {
      fr: "IA Computer Vision · Mobile & FastAPI",
      en: "Computer Vision AI · Mobile & FastAPI",
    },
    title: "KineVision AI",
    tagline: {
      fr: "Copilote clinique B2B2C de kinésithérapie assistée par IA et vision par ordinateur temps réel",
      en: "B2B2C Clinical Physiotherapy Copilot powered by Real-Time Computer Vision",
    },
    summary: {
      fr: "Plateforme mobile connectant patients et kinésithérapeutes : analyse biomécanique en direct depuis la caméra smartphone via MediaPipe Pose & OpenCV sur flux WebSocket FastAPI, programmes d'exercices prescrits, messagerie sécurisée, gamification et bilans cliniques PDF.",
      en: "Mobile health platform connecting patients and physiotherapists: live biomechanical movement analysis from a smartphone camera via MediaPipe Pose & OpenCV over FastAPI WebSockets, prescribed exercise plans, secure chat, gamification, and PDF clinical reports.",
    },
    year: "2026",
    role: {
      fr: "Créateur & Ingénieur Full-Stack / IA",
      en: "Creator & Full-Stack / AI Engineer",
    },
    accent: "violet",
    mediaFormat: "mobile",
    platforms: ["iOS & Android (Expo)", "API Python / FastAPI", "WebSocket IA"],
    stack: [
      "Python",
      "FastAPI",
      "OpenCV",
      "MediaPipe Pose",
      "WebSockets",
      "SQLAlchemy",
      "JWT & RBAC",
      "React Native",
      "Expo 58",
      "TypeScript",
      "NativeWind",
      "Zustand",
    ],
    githubUrl: "https://github.com/felix-ngan/kine-vision-IA",
    coverImage: "/projects/kinevision/01-analyse-ia-temps-reel.jpg",
    metrics: [
      { value: "33 pts", label: { fr: "Repères squelette MediaPipe", en: "MediaPipe pose landmarks" } },
      { value: "WS", label: { fr: "Feedback biomécanique live", en: "Live biomechanical stream" } },
      { value: "2 Rôles", label: { fr: "Patient & Kinésithérapeute", en: "Patient & Therapist apps" } },
    ],
    problem: {
      fr: "Entre deux séances au cabinet, les patients abandonnent souvent leurs exercices ou les exécutent mal faute de guidage, tandis que les kinésithérapeutes manquent de visibilité objective sur l'amplitude articulaire à domicile.",
      en: "Between clinic visits, patients frequently drop their home rehab plans or perform exercises with poor form, while physiotherapists lack objective visibility into joint range-of-motion progress.",
    },
    solution: {
      fr: "Un copilote mobile en deux espaces (Patient & Praticien) reliés par code d'invitation sécurisé : la caméra transmet les images à un moteur Python OpenCV/MediaPipe qui calcule les angles articulaires (élévation des bras, flexion squat), détecte les asymétries et renvoie un guidage temps réel + un bilan PDF partageable.",
      en: "A dual-role mobile copilot (Patient & Therapist) linked via secure invitation codes: the phone camera streams frames to a Python OpenCV/MediaPipe engine that computes 2D joint angles (arm elevation, squat flexion), detects left/right asymmetry, and returns real-time guidance plus shareable PDF clinical reports.",
    },
    architectureLayers: [
      {
        layer: "Computer Vision Engine",
        tech: "Python · OpenCV · Google MediaPipe Pose",
        detail: {
          fr: "Extraction des articulations (hanche, épaule, coude, genou, cheville), calcul trigonométrique d'angles 3 points, détection d'asymétrie (>15°) et scoring Posture/Mobilité/Équilibre/Stabilité.",
          en: "Joint landmark extraction (hip, shoulder, elbow, knee, ankle), 3-point trigonometric angle calculation, asymmetry detection (>15°), and 0–100 clinical scoring.",
        },
      },
      {
        layer: "Realtime API & Security",
        tech: "FastAPI · WebSocket /ws/rehab · SQLAlchemy · JWT/RBAC",
        detail: {
          fr: "Endpoints sécurisés par JWT avec vérification stricte de propriété praticien-patient sur les exercices et données de santé, liaison par code d'invitation régénérable et upload média chat.",
          en: "JWT-secured REST & WebSocket API with strict therapist-patient ownership checks on health records, regenerable invite codes, and chat media uploads.",
        },
      },
      {
        layer: "Mobile Application",
        tech: "React Native · Expo 58 · NativeWind · Zustand",
        detail: {
          fr: "11 écrans complets (Caméra Analyse & Rééducation, Copilote Patient, Gestion Patients, Progression graphique, Chat temps réel, synthèse vocale Expo Speech et génération PDF Expo Print).",
          en: "11 complete screens (AI Camera & Rehab, Patient Copilot, Therapist Patient List, Progress Charts, Realtime Chat, Expo Speech voice cues, and Expo Print PDF generation).",
        },
      },
    ],
    highlights: [
      {
        fr: "Flux WebSocket `/ws/rehab` analysant chaque frame en direct avec guidage vocal (`expo-speech`) et analyse vidéo complète asynchrone.",
        en: "Real-time `/ws/rehab` WebSocket pipeline analyzing live camera frames with voice coaching (`expo-speech`) alongside full video diagnostic analysis.",
      },
      {
        fr: "Sécurité médicale pensée dès le MVP : RBAC strict (`patient` vs `therapist`), vérification d'appartenance avant tout accès aux exercices ou dossiers patients.",
        en: "Healthcare-minded security from MVP: strict RBAC (`patient` vs `therapist`) and ownership verification before reading or assigning any patient record.",
      },
      {
        fr: "Système de gamification intégré (streaks quotidiens, niveaux, badges débloquables) couplé à des graphiques de progression pour lutter contre l'abandon thérapeutique.",
        en: "Built-in gamification engine (daily streaks, levels, unlockable badges) paired with progress charts to boost therapy adherence.",
      },
    ],
    screenshots: [
      {
        src: "/projects/kinevision/01-analyse-ia-temps-reel.jpg",
        title: {
          fr: "Analyse biomécanique temps réel (164°)",
          en: "Real-Time Biomechanical Analysis (164°)",
        },
        category: { fr: "Computer Vision", en: "Computer Vision" },
        description: {
          fr: "Détection en direct des 33 repères anatomiques avec MediaPipe Pose sur la caméra smartphone, calcul trigonométrique de l'angle d'élévation des bras (164°) et guidage postural immédiat.",
          en: "Live detection of 33 anatomical landmarks via MediaPipe Pose on the smartphone camera, computing exact arm-elevation joint angle (164°) with instant posture coaching.",
        },
      },
      {
        src: "/projects/kinevision/02-diagnostic-vocalise.jpg",
        title: {
          fr: "Diagnostic vocalisé & synthèse clinique",
          en: "Voice Diagnostic & Clinical Summary",
        },
        category: { fr: "Computer Vision", en: "Computer Vision" },
        description: {
          fr: "Calcul automatisé des scores cliniques sur 100 (Global, Posture, Mobilité, Équilibre, Stabilité) avec détection d'amplitude limitée et lecture vocale via Expo Speech.",
          en: "Automated 0–100 clinical scoring (Overall, Posture, Mobility, Balance, Stability) with mobility deficit alerts and spoken feedback via Expo Speech.",
        },
      },
      {
        src: "/projects/kinevision/03-bilan-pdf-clinique.jpg",
        title: {
          fr: "Bilan biomécanique automatisé (PDF)",
          en: "Automated Biomechanical Report (PDF)",
        },
        category: { fr: "Rapports PDF", en: "PDF Reports" },
        description: {
          fr: "Génération native d'un document clinique PDF horodaté (#KV-00002) rassemblant la mesure angulaire principale et la synthèse biomécanique, prêt à être partagé avec le praticien.",
          en: "Native PDF clinical report generation (#KV-00002) with timestamp, primary joint angle measurement, and clinical breakdown ready to share.",
        },
      },
      {
        src: "/projects/kinevision/04-espace-praticien-dashboard.jpg",
        title: {
          fr: "Tableau de bord Praticien",
          en: "Physiotherapist Dashboard",
        },
        category: { fr: "Praticien", en: "Therapist" },
        description: {
          fr: "Espace dédié au kinésithérapeute permettant de filmer une évaluation patient, lancer une séance de coaching vocal temps réel et suivre ses patients actifs.",
          en: "Dedicated clinician home screen to start real-time patient evaluations, launch voice-guided rehab sessions, and monitor active patients.",
        },
      },
      {
        src: "/projects/kinevision/05-gestion-patients-praticien.jpg",
        title: {
          fr: "Suivi patients & code d'invitation",
          en: "Patient Directory & Invite Code",
        },
        category: { fr: "Praticien", en: "Therapist" },
        description: {
          fr: "Répertoire filtrable des patients rattachés au cabinet, leur niveau d'engagement et le code d'invitation sécurisé (A9FD4A4E) à partager pour lier un nouveau patient.",
          en: "Searchable list of linked patients with progress level, streak status, and unique clinic invitation code (A9FD4A4E) for secure onboarding.",
        },
      },
      {
        src: "/projects/kinevision/06-accueil-patient-gamification.jpg",
        title: {
          fr: "Accueil Patient, Gamification & Historique",
          en: "Patient Home, Gamification & History",
        },
        category: { fr: "Patient", en: "Patient" },
        description: {
          fr: "Vue patient réunissant le compteur d'analyses, les jours consécutifs, les badges débloquables (Premier Pas, Squat Master) et l'historique horodaté des bilans articulaires.",
          en: "Patient hub displaying completed AI scans, streak days, unlockable badges (First Step, Squat Master), and timestamped joint-angle history.",
        },
      },
      {
        src: "/projects/kinevision/07-programme-exercices.jpg",
        title: {
          fr: "Programme d'exercices prescrit",
          en: "Prescribed Rehab Program",
        },
        category: { fr: "Patient", en: "Patient" },
        description: {
          fr: "Liste structurée des exercices assignés par le kinésithérapeute (séries, répétitions, consignes techniques détaillées) avec validation rapide.",
          en: "Structured list of therapist-assigned exercises with sets, reps, posture cues, and one-tap completion tracking.",
        },
      },
      {
        src: "/projects/kinevision/08-suivi-exercices-termines.jpg",
        title: {
          fr: "Validation & avancement de séance",
          en: "Session Completion Tracking",
        },
        category: { fr: "Patient", en: "Patient" },
        description: {
          fr: "Feedback visuel clair sur les exercices terminés et restants, synchronisé avec le backend FastAPI pour calculer le taux d'adhérence en temps réel.",
          en: "Clear visual progress separating completed and remaining exercises, synced with the FastAPI backend to update therapy adherence.",
        },
      },
      {
        src: "/projects/kinevision/09-liaison-code-invitation.jpg",
        title: {
          fr: "Appairage Patient–Kiné par code",
          en: "Patient–Therapist Code Pairing",
        },
        category: { fr: "Sécurité", en: "Security" },
        description: {
          fr: "Modale sécurisée permettant au patient de saisir le code de son kinésithérapeute afin d'autoriser le suivi des exercices et bilans (contrôle d'appartenance côté API).",
          en: "Secure pairing modal where patients enter their therapist's code to link records under strict API ownership checks.",
        },
      },
      {
        src: "/projects/kinevision/10-progression-graphiques.jpg",
        title: {
          fr: "Graphiques de progression & adhérence",
          en: "Progress Charts & Adherence",
        },
        category: { fr: "Progression", en: "Analytics" },
        description: {
          fr: "Courbe d'évolution du score fonctionnel IA et histogramme comparatif des exercices assignés, terminés et restants (React Native Gifted Charts).",
          en: "Functional AI score trend line and bar chart comparing assigned, completed, and remaining rehab exercises.",
        },
      },
      {
        src: "/projects/kinevision/11-messagerie-telereeducation.jpg",
        title: {
          fr: "Messagerie de télérééducation",
          en: "Tele-Rehab Direct Messaging",
        },
        category: { fr: "Télérééducation", en: "Tele-rehab" },
        description: {
          fr: "Chat intégré avec statut en ligne, accusés de lecture et envoi de pièces jointes permettant au praticien d'adapter le protocole suite aux asymétries détectées.",
          en: "Built-in chat with online status, read receipts, and media attachments so therapists can adapt protocols based on detected asymmetries.",
        },
      },
      {
        src: "/projects/kinevision/12-capture-video-prete.jpg",
        title: {
          fr: "Validation de capture vidéo",
          en: "Video Capture Confirmation",
        },
        category: { fr: "Computer Vision", en: "Computer Vision" },
        description: {
          fr: "Écran intermédiaire après l'enregistrement du mouvement pour déclencher l'envoi vers le moteur OpenCV/MediaPipe ou refilmer la séquence.",
          en: "Post-recording checkpoint allowing users to trigger OpenCV/MediaPipe analysis or retake the movement clip.",
        },
      },
      {
        src: "/projects/kinevision/13-inscription-roles-rbac.jpg",
        title: {
          fr: "Inscription multi-rôles (RBAC)",
          en: "Role-Based Sign-Up (RBAC)",
        },
        category: { fr: "Sécurité", en: "Security" },
        description: {
          fr: "Création de compte avec sélection du profil (Patient ou Praticien), activant dynamiquement la navigation, les écrans et les droits API associés.",
          en: "Account creation with explicit Patient or Therapist role selection driving navigation flows and backend RBAC rules.",
        },
      },
      {
        src: "/projects/kinevision/14-connexion-jwt.jpg",
        title: {
          fr: "Connexion sécurisée JWT",
          en: "JWT Secure Sign-In",
        },
        category: { fr: "Sécurité", en: "Security" },
        description: {
          fr: "Écran d'authentification épuré connecté à l'API FastAPI OAuth2 / JWT avec persistance de session Zustand.",
          en: "Clean dark-mode login screen connected to FastAPI OAuth2 / JWT endpoints with Zustand auth state.",
        },
      },
      {
        src: "/projects/kinevision/15-reglages-praticien-code.jpg",
        title: {
          fr: "Réglages Praticien & régénération de code",
          en: "Therapist Settings & Code Rotation",
        },
        category: { fr: "Praticien", en: "Therapist" },
        description: {
          fr: "Gestion du compte kinésithérapeute avec copie en 1 clic ou régénération sécurisée du code d'invitation cabinet et contrôle des notifications.",
          en: "Clinician profile management with 1-tap copy or rotation of the clinic invite code plus notification preferences.",
        },
      },
      {
        src: "/projects/kinevision/16-reglages-rgpd-hds.jpg",
        title: {
          fr: "Sécurité & confidentialité RGPD / HDS",
          en: "GDPR & Health Data Privacy",
        },
        category: { fr: "Sécurité", en: "Security" },
        description: {
          fr: "Centre de sécurité dédié aux données de santé : gestion du mot de passe, conformité RGPD/HDS, déconnexion et suppression de compte.",
          en: "Health-data privacy controls covering password updates, GDPR/HDS compliance notices, sign-out, and account deletion.",
        },
      },
    ],
  },
];
