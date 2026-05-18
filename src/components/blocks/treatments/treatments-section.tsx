'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'
import { TREATMENT_META } from '@/lib/treatments'

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const cardVariants      = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

const onEnter = (el: HTMLAnchorElement, accent: string) => {
  el.style.transform   = 'translateY(-6px)'
  el.style.borderColor = `${accent}40`
  el.style.boxShadow   = '0 25px 60px rgba(0,0,0,0.65)'
}
const onLeave = (el: HTMLAnchorElement) => {
  el.style.transform   = ''
  el.style.borderColor = 'rgba(255,255,255,0.08)'
  el.style.boxShadow   = ''
}

export default function TreatmentsSection() {
  const { t, language } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const headingFont = language === 'ar' ? 'var(--font-cairo)' : 'var(--font-poppins)'

  return (
    <section id='treatments' className='relative overflow-hidden py-28' style={{ background: '#050505' }}>
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.012]'
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      <div
        className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full'
        style={{ width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' }}
      />

      <div ref={ref} className='relative z-10 mx-auto max-w-7xl px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='mb-16 text-center'
        >
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5' style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}>
            <span className='text-xs font-semibold uppercase tracking-[0.2em] text-white/60'>{t.treatments.badge}</span>
          </div>
          <h2 className='mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl' style={{ fontFamily: headingFont }}>
            {t.treatments.headline1}
            <span className='luxury-text-gradient'> {t.treatments.headline2}</span>
          </h2>
          <p className='mx-auto max-w-2xl text-lg leading-relaxed' style={{ color: '#777777' }}>{t.treatments.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {t.treatments.cards.map((card, i) => {
            const meta = TREATMENT_META[i]
            return (
              <motion.div key={i} variants={cardVariants} transition={{ duration: 0.6 }}>
                <Link
                  href={`/treatments/${meta.slug}`}
                  className='group relative flex flex-col overflow-hidden rounded-2xl'
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(15,15,15,0.7)',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.28s ease, box-shadow 0.28s ease'
                  }}
                  onMouseEnter={e => onEnter(e.currentTarget as HTMLAnchorElement, meta.accentColor)}
                  onMouseLeave={e => onLeave(e.currentTarget as HTMLAnchorElement)}
                >
                  {/* Card image */}
                  <div className='relative h-44 w-full overflow-hidden'>
                    <Image
                      src={meta.cardImage}
                      alt={card.title}
                      fill
                      className='object-cover'
                      sizes='(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw'
                    />
                    <div className='absolute inset-0' style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(15,15,15,0.9) 100%)' }} />
                    {/* Category tag */}
                    <div className='absolute bottom-3 left-4 flex items-center gap-2'>
                      <div className='flex size-7 items-center justify-center rounded-lg' style={{ background: `${meta.accentColor}18`, border: `1px solid ${meta.accentColor}30` }}>
                        <meta.Icon size={14} style={{ color: meta.accentColor }} />
                      </div>
                      <span className='text-xs font-semibold tracking-[0.12em] uppercase' style={{ color: meta.accentColor }}>{card.category}</span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className='relative flex flex-1 flex-col p-6'>
                    <h3 className='mb-1 text-xl font-bold text-white' style={{ fontFamily: headingFont }}>{card.title}</h3>
                    <p className='mb-3 text-sm font-medium' style={{ color: '#777777' }}>{card.subtitle}</p>
                    <p className='mb-5 flex-1 text-sm leading-relaxed' style={{ color: '#666666' }}>{card.description}</p>

                    <ul className='mb-5 space-y-1.5'>
                      {card.features.map((feat, fi) => (
                        <li key={fi} className='flex items-center gap-2.5 text-xs' style={{ color: '#888888' }}>
                          <span className='size-1.5 shrink-0 rounded-full' style={{ background: meta.accentColor }} />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <div className='flex items-center justify-end border-t pt-4' style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                      <span className='flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white/55'>
                        {t.treatments.learnMore} <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className='mt-14 text-center'
        >
          <p className='mb-6 text-sm' style={{ color: '#666666' }}>{t.treatments.ctaText}</p>
          <a
            href='#contact'
            className='inline-flex items-center gap-2 rounded-full border px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white/5'
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
          >
            {t.treatments.ctaButton} <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
