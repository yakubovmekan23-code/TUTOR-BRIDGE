import { en, TranslationKeys } from "./translations/en";
import { ro } from "./translations/ro";
import { tr } from "./translations/tr";
import { ru } from "./translations/ru";

export type Language = "en" | "ro" | "tr" | "ru";

export const languages: Record<Language, { name: string; nativeName: string }> = {
  en: { name: "English", nativeName: "English" },
  ro: { name: "Romanian", nativeName: "Română" },
  tr: { name: "Turkish", nativeName: "Türkçe" },
  ru: { name: "Russian", nativeName: "Русский" },
};

export const translations: Record<Language, TranslationKeys> = {
  en,
  ro,
  tr,
  ru,
};

// Countries that should use Romanian
const romanianCountries = ["RO"];

// Countries that should use Turkish
const turkishCountries = ["TR"];

// Countries that should use Russian (ex-USSR countries + Turkmenistan)
const russianCountries = [
  "RU", // Russia
  "TM", // Turkmenistan
  "KZ", // Kazakhstan
  "UZ", // Uzbekistan
  "KG", // Kyrgyzstan
  "TJ", // Tajikistan
  "AZ", // Azerbaijan
  "AM", // Armenia
  "GE", // Georgia
  "BY", // Belarus
  "UA", // Ukraine
  "MD", // Moldova
  "LV", // Latvia
  "LT", // Lithuania
  "EE", // Estonia
];

export function detectLanguage(): Language {
  // First, check if user has a saved preference
  const savedLanguage = localStorage.getItem("language") as Language | null;
  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }

  // Try to detect from browser language
  const browserLang = navigator.language.split("-")[0].toLowerCase();
  
  if (browserLang === "ro") return "ro";
  if (browserLang === "tr") return "tr";
  if (browserLang === "ru") return "ru";

  // Default to English
  return "en";
}

export function detectLanguageByCountry(countryCode: string): Language {
  const code = countryCode.toUpperCase();
  
  if (romanianCountries.includes(code)) return "ro";
  if (turkishCountries.includes(code)) return "tr";
  if (russianCountries.includes(code)) return "ru";
  
  return "en";
}

export function getTranslation(language: Language): TranslationKeys {
  return translations[language] || translations.en;
}

export type { TranslationKeys };
