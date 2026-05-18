'use client'

import { useRef } from 'react'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Plane, Building2, Stethoscope, Heart, Car, CheckCircle2 } from 'lucide-react'

import { useLanguage } from '@/lib/i18n/language-context'

const STEP_ICONS   = [Plane, Building2, Stethoscope, Heart, Car, CheckCircle2]
const STEP_NUMBERS = ['01', '02', '03', '04', '05', '06']

const STEP_IMAGES  = [
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=280&q=80&fit=crop',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=280&q=80&fit=crop',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=280&q=80&fit=crop',
  'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=280&q=80&fit=crop',
  '/images/st5.webp',
  '/images/st6.webp'
]

const CARD_STYLE = {
  background: 'rgba(18,18,18,0.7)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(8px)',
  transition: 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.28s ease, box-shadow 0.28s ease'
} as React.CSSProperties

const onEnter = (el: HTMLDivElement) => {
  el.style.transform   = 'translateY(-4px)'
  el.style.borderColor = 'rgba(255,255,255,0.2)'
  el.style.boxShadow   = '0 15px 40px rgba(0,0,0,0.5)'
}

const onLeave = (el: HTMLDivElement) => {
  el.style.transform   = ''
  el.style.borderColor = 'rgba(255,255,255,0.08)'
  el.style.boxShadow   = ''
}

export default function ProcessSection() {
  const { t, language } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const headingFont = language === 'ar' ? 'var(--font-cairo)' : 'var(--font-poppins)'

  return (
    <section
      id='process'
      className='relative overflow-hidden py-28'
      style={{ background: 'linear-gradient(180deg, #050505 0%, #0F0F0F 50%, #050505 100%)' }}
    >
      <div
        className='pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 rounded-full'
        style={{ width: '500px', height: '800px', background: 'radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div ref={ref} className='relative z-10 mx-auto max-w-7xl px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='mb-20 text-center'
        >
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5' style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}>
            <span className='text-xs font-semibold uppercase tracking-[0.2em] text-white/60'>{t.process.badge}</span>
          </div>
          <h2 className='mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl' style={{ fontFamily: headingFont }}>
            {t.process.headline1 && <>{t.process.headline1} </>}
            <span className='luxury-text-gradient'>{t.process.headline2}</span>
            <br />{t.process.headline3}
          </h2>
          <p className='mx-auto max-w-2xl text-lg leading-relaxed' style={{ color: '#777777' }}>{t.process.subtitle}</p>
        </motion.div>

        <div className='relative'>
          <div
            className='pointer-events-none absolute top-0 bottom-0 hidden w-px lg:block'
            style={{ left: '50%', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.12) 10%, rgba(255,255,255,0.12) 90%, transparent)' }}
          />

          <div className='flex flex-col gap-12 lg:gap-0'>
            {t.process.steps.map((step, i) => {
              const Icon = STEP_ICONS[i]
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
                  className={`flex items-center gap-0 lg:mb-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-0`}
                >
                  {/* Content card */}
                  <div className={`w-full lg:w-[calc(50%-2.5rem)] ${isLeft ? 'lg:pr-10 lg:text-right' : 'lg:pl-10'}`}>
                    <div
                      className='group overflow-hidden rounded-2xl'
                      style={CARD_STYLE}
                      onMouseEnter={e => onEnter(e.currentTarget as HTMLDivElement)}
                      onMouseLeave={e => onLeave(e.currentTarget as HTMLDivElement)}
                    >
                      {/* Step image */}
                      <div className='relative h-40 w-full overflow-hidden'>
                        <Image
                          src={STEP_IMAGES[i]}
                          alt={step.title}
                          fill
                          className='object-cover'
                          sizes='(max-width:1024px) 100vw,50vw'
                        />
                        <div className='absolute inset-0' style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(18,18,18,0.85) 100%)' }} />
                        {/* Step number overlay */}
                        <div className={`absolute bottom-3 flex items-center gap-2 ${isLeft ? 'lg:right-4 lg:left-auto left-4' : 'left-4'}`}>
                          <span className='text-xs font-bold uppercase tracking-[0.2em] text-white/40'>{t.process.step} {STEP_NUMBERS[i]}</span>
                        </div>
                      </div>

                      {/* Text content */}
                      <div className='p-6'>
                        <h3 className='mb-2 text-xl font-bold text-white' style={{ fontFamily: headingFont }}>{step.title}</h3>
                        <p className='mb-4 text-sm leading-relaxed' style={{ color: '#777777' }}>{step.description}</p>
                        <div className='rounded-lg px-3 py-2 text-xs ltr-only' style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
                          {step.detail}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center icon — desktop */}
                  <div className='relative z-10 hidden lg:flex lg:w-20 lg:shrink-0 lg:justify-center'>
                    <motion.div
                      className='flex size-16 items-center justify-center rounded-full shadow-lg'
                      style={{ background: '#ffffff', boxShadow: '0 0 0 4px rgba(5,5,5,1), 0 0 0 6px rgba(255,255,255,0.15), 0 8px 25px rgba(0,0,0,0.5)' }}
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
                    >
                      <Icon size={24} color='#050505' />
                    </motion.div>
                  </div>

                  {/* Mobile icon */}
                  <div className='mb-4 flex size-12 items-center justify-center rounded-full bg-white lg:hidden'>
                    <Icon size={20} color='#050505' />
                  </div>

                  <div className='hidden lg:block lg:w-[calc(50%-2.5rem)]' />
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className='mt-20 flex flex-wrap items-center justify-center gap-8 rounded-2xl px-8 py-6'
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          {t.process.guarantee.map((item, i) => (
            <div key={i} className='flex items-center gap-2.5 text-sm font-medium text-white/60'>
              <CheckCircle2 size={16} className='text-white/80' />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
