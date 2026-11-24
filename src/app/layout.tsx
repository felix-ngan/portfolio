import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Félix Ngankam Kengni — Développeur Full-Stack & Multi-plateforme",
  description:
    "Portfolio de Félix Ngankam Kengni : applications Web, Mobile et Desktop conçues de bout en bout — CAMAROES POS (.NET 8 / Blazor WASM), OmniStock (Next.js / Electron) et KineVision AI (FastAPI / MediaPipe / React Native).",
  keywords: [
    "Félix Ngankam Kengni",
    "Développeur Full-Stack",
    "Développeur Frontend",
    "Software Engineer",
    "Agentic Coding",
    "MCP",
    "Next.js",
    "TypeScript",
    "C# .NET 8",
    "Blazor WebAssembly",
    "Electron",
    "React Native",
    "FastAPI",
    "Computer Vision",
  ],
  authors: [{ name: "Félix Ngankam Kengni", url: "https://github.com/felix-ngan" }],
  openGraph: {
    title: "Félix Ngankam Kengni — Développeur Full-Stack & Multi-plateforme",
    description:
      "Applications Web, Mobile et Desktop conçues de l'architecture métier jusqu'à la production.",
    type: "website",
    locale: "fr_FR",
  },
};

const THEME_INIT_SCRIPT = `
(function() {
  try {
    var stored = localStorage.getItem('felix_portfolio_theme_v1');
    if (stored === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-screen font-sans antialiased selection:bg-emerald-500/25 selection:text-emerald-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
