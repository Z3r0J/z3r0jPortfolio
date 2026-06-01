'use client';

import { useContext } from 'react';
import { LangContext } from './LangContext';

interface TextProps {
  tid: string;
}

export default function Text({ tid }: TextProps) {
  const langCtx = useContext(LangContext);
  if (!langCtx) return <>{tid}</>;
  return <>{langCtx.dictionary[tid] || tid}</>;
}
