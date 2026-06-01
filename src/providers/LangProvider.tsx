'use client';

import { useState, useEffect, useMemo } from 'react';
import { LangContext } from '@/i18n/LangContext';
import { lang } from '@/i18n/lang';

export default function LangProvider({ children }: { children: React.ReactNode }) {
  const [actualLanguage, setActualLanguage] = useState('en');

  useEffect(() => {
    const stored = localStorage.getItem('Lang');
    if (stored && (stored === 'en' || stored === 'es')) {
      setActualLanguage(stored);
    }
  }, []);

  const handleChangeLanguages = (newLang: string) => {
    localStorage.setItem('Lang', newLang);
    setActualLanguage(newLang);
  };

  const value = useMemo(
    () => ({
      actualLanguage,
      dictionary: lang[actualLanguage],
      handleChangeLanguages,
    }),
    [actualLanguage]
  );

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
}
