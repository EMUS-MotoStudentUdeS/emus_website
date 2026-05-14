/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import translationsEn from "./translations-en.json";
import translationsFr from "./translations-fr.json";

export type Language = "en" | "fr";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const STORAGE_KEY = "emus-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getNestedValue(source: unknown, key: string): string | undefined {
  if (!source || typeof source !== "object") {
    return undefined;
  }

  const result = key.split(".").reduce<unknown>((value, part) => {
    if (value && typeof value === "object" && part in value) {
      return (value as Record<string, unknown>)[part];
    }
    return undefined;
  }, source);

  return typeof result === "string" ? result : undefined;
}

function getFlatValue(source: unknown, key: string): string | undefined {
  if (!source || typeof source !== "object") {
    return undefined;
  }
  const value = (source as Record<string, unknown>)[key];
  return typeof value === "string" ? value : undefined;
}

function flattenKeys(source: unknown, prefix = ""): string[] {
  if (!source || typeof source !== "object") {
    return [];
  }

  const entries = Object.entries(source as Record<string, unknown>);
  const keys: string[] = [];

  for (const [k, v] of entries) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (typeof v === "string") {
      keys.push(path);
    } else if (v && typeof v === "object") {
      keys.push(...flattenKeys(v, path));
    }
  }

  return keys;
}

const dictionaries = {
  en: translationsEn as Record<string, unknown>,
  fr: translationsFr as Record<string, unknown>
};

const isDevRuntime =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

if (isDevRuntime) {
  const enKeys = new Set(flattenKeys(dictionaries.en));
  const frKeys = new Set(flattenKeys(dictionaries.fr));

  const onlyInEn = [...enKeys].filter((k) => !frKeys.has(k));
  const onlyInFr = [...frKeys].filter((k) => !enKeys.has(k));

  if (onlyInEn.length || onlyInFr.length) {
    console.warn("[i18n] Translation key mismatch detected", {
      onlyInEn,
      onlyInFr
    });
  }
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "fr") {
    return stored;
  }

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      toggleLanguage: () =>
        setLanguage((current) => (current === "en" ? "fr" : "en")),
      t: (key: string) => {
        const activeDict = dictionaries[language];
        const fallbackDict = dictionaries.en;
        return (
          getNestedValue(activeDict, key) ??
          getNestedValue(fallbackDict, key) ??
          getFlatValue(activeDict, key) ??
          getFlatValue(fallbackDict, key) ??
          ""
        );
      }
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return value;
}
