'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Users, MapPin, Award, ShieldCheck, Globe, Clock, BadgeCheck } from 'lucide-react'

import { useLanguage } from '@/lib/i18n/language-context'

const STAT_ICONS = [Users, MapPin, Star, Award]

export default function HeroSection() {
  const { t, language } = useLanguage()
  const [currentWord, setCurrentWord] = useState(0)
  const headingFont = language === 'ar' ? 'var(--font-cairo)' : 'var(--font-poppins)'

  const STATS = [
    { value: '5,000+', label: t.hero.stats.patients,    icon: STAT_ICONS[0] },
    { value: '40+',    label: t.hero.stats.countries,   icon: STAT_ICONS[1] },
    { value: '98%',    label: t.hero.stats.satisfaction, icon: STAT_ICONS[2] },
    { value: '15+',    label: t.hero.stats.experience,  icon: STAT_ICONS[3] }
  ]

  useEffect(() => { setCurrentWord(0) }, [language])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % t.hero.words.length)
    }, 2800)

    return () => clearInterval(interval)
  }, [t.hero.words.length])

  return (
    <section id='home' className='relative' style={{ background: '#050505' }}>
      {/* Hero card — inset with rounded corners */}
      <div className='relative mx-auto max-w-7xl px-4 pt-20 sm:px-6'>
        <div
          className='relative overflow-hidden rounded-3xl'
          style={{ minHeight: '88vh' }}
        >
          {/* Background image — no hover scale */}
          <Image
            src='/images/hht1.webp'
            alt='Prime Clinic Istanbul — VIP Health Tourism'
            fill
            className='object-cover'
            priority
          />

          {/* Subtle top vignette for badge readability */}
          <div
            className='pointer-events-none absolute inset-0'
            style={{ background: 'linear-gradient(to bottom, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.15) 25%, transparent 45%)' }}
          />

          {/* Main bottom-fade to dark */}
          <div
            className='pointer-events-none absolute inset-0'
            style={{ background: 'linear-gradient(to top, #050505 0%, rgba(5,5,5,0.88) 18%, rgba(5,5,5,0.45) 42%, transparent 62%)' }}
          />

          {/* Subtle grid overlay */}
          <div
            className='pointer-events-none absolute inset-0 opacity-[0.012]'
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }}
          />

          {/* ── Content ── */}
          <div className='relative z-10 flex flex-col justify-end px-8 pb-14 pt-28 lg:min-h-[88vh] lg:px-16 lg:pb-20'>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className='mb-7 inline-flex items-center gap-3 self-start rounded-full border px-5 py-2 backdrop-blur-sm'
              style={{ borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.08)' }}
            >
              <span className='relative flex size-2'>
                <span className='absolute inline-flex size-full animate-ping rounded-full bg-white opacity-60' />
                <span className='relative inline-flex size-2 rounded-full bg-white' />
              </span>
              <span className='text-xs font-semibold tracking-[0.2em] uppercase text-white/90'>{t.hero.badge}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
              className='mb-4 max-w-3xl text-5xl font-bold leading-[1.06] tracking-tight text-white md:text-6xl lg:text-7xl'
              style={{ fontFamily: headingFont }}
            >
              {t.hero.headline1}
              <br />
              <span className='text-white/75'>{t.hero.headline2}</span>
            </motion.h1>

            {/* Rotating word */}
            <div className='mb-5 flex h-12 items-center overflow-hidden'>
              <AnimatePresence mode='wait'>
                <motion.p
                  key={`${language}-${currentWord}`}
                  initial={{ y: 32, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -32, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
                  className='text-xl font-light italic text-white md:text-2xl'
                  style={{ fontFamily: headingFont }}
                >
                  {t.hero.words[currentWord]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className='mb-8 max-w-lg text-base leading-relaxed text-white md:text-lg'
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className='mb-10 flex flex-wrap items-center gap-4'
            >
              <Link
                href='#contact'
                className='group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:scale-105'
                style={{ background: '#ffffff', color: '#050505', boxShadow: '0 0 40px rgba(255,255,255,0.18), 0 4px 20px rgba(0,0,0,0.4)' }}
              >
                {t.hero.cta1}
                <ArrowRight size={15} className='transition-transform duration-300 group-hover:translate-x-1' />
              </Link>
              <Link
                href='#treatments'
                className='inline-flex items-center gap-3 rounded-full border px-8 py-4 text-sm font-semibold tracking-wide uppercase text-white transition-all duration-300 hover:bg-white/10'
                style={{ borderColor: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.05)' }}
              >
                {t.hero.cta2}
              </Link>
            </motion.div>

            {/* Thin divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className='mb-10 h-px max-w-2xl origin-left'
              style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.2), transparent)' }}
            />

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className='grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4'
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 + i * 0.08 }}
                  className='flex flex-col gap-1'
                >
                  <stat.icon size={14} className='text-white/40' />
                  <span className='text-2xl font-bold leading-none text-white ltr-only' style={{ fontFamily: headingFont }}>{stat.value}</span>
                  <span className='text-[10px] font-medium tracking-wider uppercase text-white/38'>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Floating badges — right side */}
          {[
            { Icon: ShieldCheck, title: 'JCI Accredited',    sub: 'International Standard',   delay: 1.2 },
            { Icon: BadgeCheck,  title: 'ISO 9001:2015',     sub: 'Quality Certified',         delay: 1.35 },
            { Icon: Globe,       title: '40+ Countries',     sub: 'Patients Worldwide',        delay: 1.5 },
            { Icon: Clock,       title: '24/7 Support',      sub: 'Dedicated Coordinators',    delay: 1.65 },
          ].map(({ Icon, title, sub, delay }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay }}
              className='absolute right-8 flex items-center gap-3 rounded-2xl px-4 py-3 lg:right-16'
              style={{
                top: `${7 + i * 5.5}rem`,
                background: 'rgba(5,5,5,0.65)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.12)'
              }}
            >
              <Icon size={17} className='text-white/75 shrink-0' />
              <div>
                <div className='text-xs font-bold text-white'>{title}</div>
                <div className='text-[10px] text-white/40'>{sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Seamless blend into next section */}
      <div className='h-16' style={{ background: '#050505' }} />
    </section>
  )
}
