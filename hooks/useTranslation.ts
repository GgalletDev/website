"use client";
import { useState, useEffect } from "react";
import { translations, TranslationDict } from "../lib/translations";

export type Language = "en" | "fr";

export function useTranslation() {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Determine language on mount (client-side only)
    const storedLang = localStorage.getItem("gg_lang") as Language | null;
    if (storedLang === "en" || storedLang === "fr") {
      setLang(storedLang);
    } else {
      const browserLang = navigator.language.substring(0, 2).toLowerCase();
      if (browserLang === "fr") {
        setLang("fr");
        localStorage.setItem("gg_lang", "fr");
      } else {
        setLang("en");
        localStorage.setItem("gg_lang", "en");
      }
    }
    setMounted(true);
  }, []);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("gg_lang", newLang);
  };

  const t = (key: keyof TranslationDict): string => {
    // If not mounted yet, render English by default to prevent hydration mismatch
    const activeLang = mounted ? lang : "en";
    const dict = translations[activeLang];
    const value = dict[key];
    
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    return value || (translations.en[key] as string) || "";
  };

  // Helper for arrays (like bootSteps)
  const tArray = (key: keyof TranslationDict): string[] => {
    const activeLang = mounted ? lang : "en";
    const dict = translations[activeLang];
    const value = dict[key];
    
    if (Array.isArray(value)) {
      return value;
    }
    return [];
  };

  return {
    lang,
    t,
    tArray,
    changeLanguage,
    mounted
  };
}
