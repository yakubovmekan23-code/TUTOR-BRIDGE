import React, { useState, useEffect, useCallback } from "react";
import { Language, detectLanguage, getTranslation } from "@/i18n";
import { LanguageContext } from "@/hooks/use-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => detectLanguage());
  const [translations, setTranslations] = useState(() => getTranslation(language));

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