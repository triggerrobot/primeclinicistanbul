'use client'

import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'/>
    </svg>
  )
}

import { useLanguage } from '@/lib/i18n/language-context'
import { LANGUAGES, type Language } from '@/lib/i18n/translations'
import { TREATMENT_META } from '@/lib/treatments'

export default function Header() {
  const { t, language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const anchor = (hash: string) => isHome ? `#${hash}` : `/#${hash}`

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [treatmentsOpen, setTreatmentsOpen] = useState(false)
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const treatmentsRef = useRef<HTMLDivElement>(null)

  const otherNavItems = [
    { label: t.nav.home,    href: anchor('home') },
    { label: t.nav.process, href: anchor('process') },
    { label: t.nav.results, href: anchor('results') },
    { label: t.nav.doctors, href: anchor('doctors') }
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }

    document.addEventListener('mousedown', handleClick)

    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const currentLang = LANGUAGES.find(l => l.code === language)!

  return (
    <>
      <header
        className='fixed top-0 left-0 right-0 z-50 transition-all duration-500'
        style={{
          background: scrolled ? 'rgba(5,5,5,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none'
        }}
      >
        <div className='mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-6'>
          {/* Logo */}
          <Link href={isHome ? '#home' : '/'} className='group flex items-center gap-3'>
            <div className='relative size-9 overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-110'>
              <Image
                src='/images/pclogo.webp'
                alt='Prime Clinic Istanbul'
                fill
                className='object-cover'
                sizes='36px'
              />
            </div>
            <div className='flex flex-col leading-none'>
              <span className='text-sm font-bold tracking-wide text-white' style={{ fontFamily: 'var(--font-poppins)' }}>Prime Clinic</span>
              <span className='text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40'>Istanbul</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className='hidden items-center gap-7 md:flex'>
            {/* Home */}
            <Link
              href={anchor('home')}
              className='group relative text-sm font-medium text-white/55 transition-colors duration-300 hover:text-white'
            >
              {t.nav.home}
              <span className='absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
            </Link>

            {/* Treatments dropdown */}
            <div
              ref={treatmentsRef}
              className='relative'
              onMouseEnter={() => setTreatmentsOpen(true)}
              onMouseLeave={() => setTreatmentsOpen(false)}
            >
              <Link
                href={anchor('treatments')}
                className='group relative flex items-center gap-1 text-sm font-medium text-white/55 transition-colors duration-300 hover:text-white'
              >
                {t.nav.treatments}
                <ChevronDown
                  size={12}
                  className='transition-transform duration-200'
                  style={{ transform: treatmentsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
                <span className='absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
              </Link>

              <AnimatePresence>
                {treatmentsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className='absolute top-full left-1/2 mt-3 w-52 overflow-hidden rounded-2xl py-2'
                    style={{
                      background: 'rgba(8,8,8,0.97)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(20px)',
                      transform: 'translateX(-50%)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
                    }}
                  >
                    <div className='px-4 pb-2 pt-1'>
                      <span className='text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30'>
                        {t.treatments.badge}
                      </span>
                    </div>
                    {TREATMENT_META.map(meta => {
                      const card = t.treatments.cards[meta.index]

                      return (
                        <Link
                          key={meta.slug}
                          href={`/treatments/${meta.slug}`}
                          onClick={() => setTreatmentsOpen(false)}
                          className='flex items-center gap-3 px-4 py-2.5 text-sm text-white/55 transition-colors duration-150 hover:bg-white/5 hover:text-white'
                        >
                          <meta.Icon size={13} style={{ color: meta.accentColor }} />
                          <span>{card.title}</span>
                        </Link>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other nav items */}
            {otherNavItems.slice(1).map(item => (
              <Link
                key={item.label}
                href={item.href}
                className='group relative text-sm font-medium text-white/55 transition-colors duration-300 hover:text-white'
              >
                {item.label}
                <span className='absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className='flex items-center gap-3'>
            {/* Language Switcher */}
            <div ref={langRef} className='relative'>
              <button
                onClick={() => setLangOpen(o => !o)}
                className='flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold text-white/70 transition-all duration-300 hover:bg-white/5'
                style={{ borderColor: 'rgba(255,255,255,0.18)' }}
              >
                <span>{currentLang.flag}</span>
                <span className='hidden sm:inline'>{currentLang.code.toUpperCase()}</span>
                <ChevronDown size={12} className='transition-transform duration-200' style={{ transform: langOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className='absolute top-full mt-2 min-w-35 overflow-hidden rounded-xl py-1'
                    style={{ background: 'rgba(8,8,8,0.97)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)', right: 0 }}
                  >
                    {LANGUAGES.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code as Language); setLangOpen(false) }}
                        className='flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-white/5'
                        style={{ color: language === lang.code ? '#ffffff' : 'rgba(255,255,255,0.5)', fontWeight: language === lang.code ? 600 : 400 }}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                        {language === lang.code && <span className='ml-auto size-1.5 rounded-full bg-white' />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Phone */}
            <a
              href='https://wa.me/905359156434'
              className='hidden items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white/5 lg:flex'
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <WhatsAppIcon size={14} />
            </a>

            {/* CTA */}
            <Link
              href={anchor('contact')}
              className='hidden rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 md:block'
              style={{ background: '#ffffff', color: '#050505', boxShadow: '0 0 20px rgba(255,255,255,0.15)' }}
            >
              {t.nav.cta}
            </Link>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className='flex size-10 items-center justify-center rounded-xl md:hidden'
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              {menuOpen ? <X size={18} className='text-white' /> : <Menu size={18} className='text-white' />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className='fixed inset-x-0 top-18 z-40 md:hidden'
            style={{ background: 'rgba(5,5,5,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            <nav className='flex flex-col gap-1 px-6 py-6'>
              {/* Home */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0 }}>
                <Link
                  href={anchor('home')}
                  onClick={() => setMenuOpen(false)}
                  className='flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/5'
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {t.nav.home}
                  <span className='size-1.5 rounded-full bg-white/40' />
                </Link>
              </motion.div>

              {/* Treatments with toggle */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 }}>
                <button
                  onClick={() => setMobileTreatmentsOpen(o => !o)}
                  className='flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/5'
                  style={{ borderBottom: mobileTreatmentsOpen ? 'none' : '1px solid rgba(255,255,255,0.06)' }}
                >
                  {t.nav.treatments}
                  <ChevronDown
                    size={14}
                    className='text-white/40 transition-transform duration-200'
                    style={{ transform: mobileTreatmentsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                <AnimatePresence>
                  {mobileTreatmentsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className='overflow-hidden'
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      {TREATMENT_META.map(meta => {
                        const card = t.treatments.cards[meta.index]

                        return (
                          <Link
                            key={meta.slug}
                            href={`/treatments/${meta.slug}`}
                            onClick={() => { setMenuOpen(false); setMobileTreatmentsOpen(false) }}
                            className='flex items-center gap-3 py-2.5 pl-8 pr-4 text-sm text-white/55 transition-colors hover:text-white'
                          >
                            <meta.Icon size={12} style={{ color: meta.accentColor }} />
                            {card.title}
                          </Link>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Other items */}
              {[
                { label: t.nav.process, href: anchor('process'), delay: 0.1 },
                { label: t.nav.results, href: anchor('results'), delay: 0.15 },
                { label: t.nav.doctors, href: anchor('doctors'), delay: 0.2 }
              ].map(item => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: item.delay }}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className='flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/5'
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {item.label}
                    <span className='size-1.5 rounded-full bg-white/40' />
                  </Link>
                </motion.div>
              ))}

              <Link
                href={anchor('contact')}
                onClick={() => setMenuOpen(false)}
                className='mt-4 rounded-2xl py-4 text-center text-sm font-bold uppercase tracking-widest'
                style={{ background: '#ffffff', color: '#050505' }}
              >
                {t.nav.cta}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
