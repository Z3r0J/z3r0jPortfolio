'use client';

import { createContext } from 'react';

export interface LangContextType {
  actualLanguage: string;
  dictionary: Record<string, string>;
  handleChangeLanguages: (lang: string) => void;
}

export const LangContext = createContext<LangContextType | null>(null);
