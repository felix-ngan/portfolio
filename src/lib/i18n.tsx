"use client";

import { createContext, use, useCallback, useEffect, useState, type ReactNode } from "react";

export type Locale = "fr" | "en";

interface LocaleContextValue {
  state: {
    locale: Locale;
  };
  actions: {
    setLocale: (locale: Locale) => void;
    toggleLocale: () => void;
  };
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "felix_portfolio_locale_v1";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "fr" || saved === "en") {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    document.documentElement.lang = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage errors
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === "fr" ? "en" : "fr";
      document.documentElement.lang = next;
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  }, []);

  return (
    <LocaleContext value={{ state: { locale }, actions: { setLocale, toggleLocale } }}>
      {children}
    </LocaleContext>
  );
}

export function useLocale() {
  const ctx = use(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }
  return ctx;
}
