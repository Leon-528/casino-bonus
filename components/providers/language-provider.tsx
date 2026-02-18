"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

import { translations, type TranslationDictionary } from "@/lib/translations";
import type { Language } from "@/types/language";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  text: TranslationDictionary;
}

const LANGUAGE_STORAGE_KEY = "leon-528-language";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function isLanguage(value: string | null): value is Language {
  return value === "de" || value === "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("de");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (isLanguage(storedLanguage)) {
      setLanguageState(storedLanguage);
      return;
    }

    if (navigator.language.toLowerCase().startsWith("en")) {
      setLanguageState("en");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const contextValue = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
      text: translations[language]
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
