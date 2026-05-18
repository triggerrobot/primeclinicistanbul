'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'
import { TREATMENT_META } from '@/lib/treatments'

export default function TreatmentPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, language } = useLanguage()

  const meta = TREATMENT_META.find(m => m.slug === slug)
  if (!meta) return notFound()

  const card = t.treatments.cards[meta.index]
  const headingFont = language === 'ar' ? 'var(--font-cairo)' : 'var(--font-poppins)'

  return (
    <div style={{ background: '#050505' }}>

      {/* ── Hero ── */}
      <div className='relative mx-auto max-w-7xl px-4 pt-20 sm:px-6'>
        <div className='relative overflow-hidden rounded-3xl' style={{ minHeight: '75vh' }}>

          <Image
            src={meta.heroImage}
            alt={card.title}
            fill
            className='object-cover'
            priority
          />

          <div
            className='pointer-events-none absolute inset-0'
            style={{ background: 'linear-gradient(to bottom, rgba(5,5,5,0.6) 0%, rgba(5,5,5,0.15) 25%, transparent 45%)' }}
          />
          <div
            className='pointer-events-none absolute inset-0'
            style={{ background: 'linear-gradient(to top, #050505 0%, rgba(5,5,5,0.9) 20%, rgba(5,5,5,0.4) 45%, transparent 65%)' }}
          />

          <div className='relative z-10 flex flex-col justify-end px-8 pb-14 pt-24 lg:min-h-[75vh] lg:px-16 lg:pb-18'>

            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='mb-8'
            >
              <Link
                href='/#treatments'
                className='inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/50 transition-colors hover:text-white'
              >
                <ArrowLeft size={13} />
                {t.treatments.backTo}
              </Link>
            </motion.div>

            {/* Category badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className='mb-5 inline-flex items-center gap-2 self-start rounded-full border px-4 py-1.5 backdrop-blur-sm'
              style={{ borderColor: `${meta.accentColor}35`, background: `${meta.accentColor}0A` }}
            >
              <meta.Icon size={12} style={{ color: meta.accentColor }} />
              <span className='text-xs font-semibold uppercase tracking-[0.18em]' style={{ color: meta.accentColor }}>
                {card.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
              className='mb-3 text-5xl font-bold leading-[1.06] tracking-tight text-white md:text-6xl lg:text-7xl'
              style={{ fontFamily: headingFont }}
            >
              {card.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className='mb-10 text-lg font-light text-white/50'
              style={{ fontFamily: headingFont }}
            >
              {card.subtitle}
            </motion.p>

            {/* Key stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className='grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4'
            >
              {meta.stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.07 }}
                  className='flex flex-col gap-1'
                >
                  <span className='text-xl font-bold text-white ltr-only' style={{ fontFamily: headingFont }}>{s.value}</span>
                  <span className='text-[10px] font-medium uppercase tracking-wider text-white/38'>{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className='mx-auto max-w-7xl px-4 pb-28 sm:px-6'>
        <div className='mt-20 grid gap-12 lg:grid-cols-[1fr_380px]'>

          {/* Left — description + details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/35'>
              {card.category}
            </p>
            <h2 className='mb-6 text-3xl font-bold text-white' style={{ fontFamily: headingFont }}>
              {card.subtitle}
            </h2>

            <p className='mb-4 text-base font-medium leading-relaxed' style={{ color: '#aaaaaa' }}>
              {card.description}
            </p>
            <p className='mb-10 text-base leading-relaxed' style={{ color: '#777777' }}>
              {card.longDescription}
            </p>

            {/* Included features */}
            <h3 className='mb-5 text-sm font-semibold uppercase tracking-wider text-white/50'>
              {t.treatments.included}
            </h3>
            <ul className='mb-10 grid gap-3 sm:grid-cols-2'>
              {card.features.map((feat, i) => (
                <li key={i} className='flex items-start gap-3 text-sm' style={{ color: '#888888' }}>
                  <CheckCircle2 size={15} className='mt-0.5 shrink-0 text-white/50' />
                  {feat}
                </li>
              ))}
            </ul>

            {/* Procedure highlights */}
            <h3 className='mb-5 text-sm font-semibold uppercase tracking-wider text-white/50'>
              {t.treatments.highlights}
            </h3>
            <ul className='grid gap-3 sm:grid-cols-2'>
              {meta.details.map((detail, i) => (
                <li key={i} className='flex items-start gap-3 text-sm' style={{ color: '#888888' }}>
                  <CheckCircle2 size={15} className='mt-0.5 shrink-0 text-white/40' />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — CTA card + stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className='flex flex-col gap-5'
          >
            {/* Stats card */}
            <div
              className='rounded-2xl p-6'
              style={{ background: 'rgba(15,15,15,0.8)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className='mb-5 text-xs font-semibold uppercase tracking-wider text-white/35'>{t.treatments.quickFacts}</p>
              <div className='grid grid-cols-2 gap-5'>
                {meta.stats.map((s, i) => (
                  <div key={i}>
                    <div className='text-lg font-bold text-white ltr-only' style={{ fontFamily: headingFont }}>{s.value}</div>
                    <div className='text-[11px] text-white/35 uppercase tracking-wider'>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div
              className='rounded-2xl p-6'
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <p className='mb-2 text-base font-semibold text-white' style={{ fontFamily: headingFont }}>
                {t.treatments.freeConsultation}
              </p>
              <p className='mb-6 text-sm leading-relaxed text-white/40'>
                {t.treatments.consultationDesc}
              </p>
              <Link
                href='/#contact'
                className='group flex w-full items-center justify-center gap-3 rounded-xl py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02]'
                style={{ background: '#ffffff', color: '#050505', boxShadow: '0 0 30px rgba(255,255,255,0.1)' }}
              >
                {t.nav.cta}
                <ArrowRight size={14} className='transition-transform duration-300 group-hover:translate-x-1' />
              </Link>
            </div>

            {/* Other treatments */}
            <div
              className='rounded-2xl p-6'
              style={{ background: 'rgba(15,15,15,0.8)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className='mb-4 text-xs font-semibold uppercase tracking-wider text-white/35'>
                {t.treatments.otherTreatments}
              </p>
              <div className='flex flex-col gap-2'>
                {TREATMENT_META.filter(m => m.slug !== slug).slice(0, 4).map(m => {
                  const c = t.treatments.cards[m.index]
                  return (
                    <Link
                      key={m.slug}
                      href={`/treatments/${m.slug}`}
                      className='flex items-center justify-between rounded-xl px-4 py-2.5 text-sm transition-all duration-200 hover:bg-white/5'
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      <div className='flex items-center gap-2.5'>
                        <m.Icon size={12} style={{ color: m.accentColor }} />
                        <span>{c.title}</span>
                      </div>
                      <ArrowRight size={12} className='opacity-40' />
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
