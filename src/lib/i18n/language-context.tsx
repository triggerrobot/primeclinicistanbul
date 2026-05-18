'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { type Language, type Translations, translations, LANGUAGES } from './translations'

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
  dir: 'ltr'
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('prime-clinic-lang') as Language | null
    if (saved && translations[saved]) setLanguageState(saved)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('prime-clinic-lang', lang)
  }

  const langMeta = LANGUAGES.find(l => l.code === language)!
  const dir = langMeta.dir

  useEffect(() => {
    document.documentElement.setAttribute('dir', dir)
    document.documentElement.setAttribute('lang', language)
    if (language === 'ar') {
      document.documentElement.classList.add('lang-ar')
    } else {
      document.documentElement.classList.remove('lang-ar')
    }
  }, [language, dir])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
