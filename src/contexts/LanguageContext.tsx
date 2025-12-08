import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Language, detectLanguage, getTranslation, TranslationKeys } from "@/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => detectLanguage());
  const [translations, setTranslations] = useState<TranslationKeys>(() => getTranslation(language));

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    setTranslations(getTranslation(lang));
    // Update document language attribute for accessibility
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    // Set initial document language
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
