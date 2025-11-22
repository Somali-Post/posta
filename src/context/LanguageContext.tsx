'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Language, TranslationContent } from '@/lib/translations';
import { languageLocales, translations } from '@/lib/translations';

interface LanguageContextValue {
  language: Language;
  direction: 'ltr' | 'rtl';
  setLanguage: (language: Language) => void;
  translations: TranslationContent;
  locale: string;
}

const STORAGE_KEY = 'posta-language';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const isLanguage = (value: string | null): value is Language => {
  return value === 'en' || value === 'so' || value === 'ar';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLanguage(stored)) {
        return stored;
      }
    }
    return 'en';
  });

  const updateLanguage = (next: Language) => {
    setLanguage(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'so' ? 'so' : language;
    document.documentElement.dir = dir;
    document.body?.setAttribute('dir', dir);
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    return {
      language,
      direction: dir,
      setLanguage: updateLanguage,
      translations: translations[language],
      locale: languageLocales[language],
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useTranslations = () => {
  return useLanguage().translations;
};
