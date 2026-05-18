'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, GripVertical } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'

const CASE_IMAGES = [
  {
    before: 'https://images.unsplash.com/photo-1609919767027-4e144785c9e9?w=600&q=80&fit=crop',
    after:  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80&fit=crop',
    stats:  { duration: '3h', recovery: '10 days', satisfaction: '99%' }
  },
  {
    before: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&fit=crop',
    after:  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&q=80&fit=crop',
    stats:  { duration: '6h', recovery: '5 days', satisfaction: '97%' }
  },
  {
    before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80&fit=crop',
    after:  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&fit=crop',
    stats:  { duration: '5 days', recovery: '1 day', satisfaction: '100%' }
  },
  {
    before: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=600&q=80&fit=crop',
    after:  'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600&q=80&fit=crop',
    stats:  { duration: '4h', recovery: '14 days', satisfaction: '98%' }
  }
]

function ComparisonSlider({ before, after, label, dragHint }: { before: string; after: string; label: string; dragHint: string }) {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100))
    setPosition(pct)
  }, [])

  useEffect(() => {
    const onMove  = (e: MouseEvent) => { if (isDragging) updatePosition(e.clientX) }
    const onTouch = (e: TouchEvent) => { if (isDragging && e.touches[0]) updatePosition(e.touches[0].clientX) }
    const onUp    = () => setIsDragging(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('touchend', onUp)
    }
  }, [isDragging, updatePosition])

  return (
    <div
      ref={containerRef}
      className='relative h-105 w-full cursor-col-resize select-none overflow-hidden rounded-2xl md:h-125'
      style={{ border: '1px solid rgba(255,255,255,0.12)' }}
      onMouseDown={e => { e.preventDefault(); setIsDragging(true) }}
      onTouchStart={() => setIsDragging(true)}
    >
      <div className='absolute inset-0'>
        <Image src={after} alt={`${label} - After`} fill className='object-cover' sizes='(max-width:768px) 100vw,50vw' priority />
        <div className='absolute right-4 bottom-4 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider' style={{ background: 'rgba(255,255,255,0.9)', color: '#050505' }}>After</div>
      </div>

      <div className='absolute inset-0 overflow-hidden' style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={before} alt={`${label} - Before`} fill className='object-cover' sizes='(max-width:768px) 100vw,50vw' />
        <div className='absolute bottom-4 left-4 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider' style={{ background: 'rgba(8,8,8,0.85)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.2)' }}>Before</div>
      </div>

      <div className='absolute inset-y-0 z-20 w-px' style={{ left: `${position}%`, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.8), transparent)', boxShadow: '0 0 12px rgba(255,255,255,0.4)' }} />

      <motion.div
        className='absolute top-1/2 z-30 flex -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full'
        style={{ left: `${position}%`, width: 44, height: 44, background: '#ffffff', boxShadow: isDragging ? '0 0 0 6px rgba(255,255,255,0.2), 0 8px 30px rgba(0,0,0,0.6)' : '0 0 0 2px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.5)' }}
        animate={{ scale: isDragging ? 1.15 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <GripVertical size={18} color='#050505' />
      </motion.div>

      {!isDragging && (
        <div className='pointer-events-none absolute inset-x-0 top-4 flex justify-center text-white/40'>
          <span className='flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1 text-xs backdrop-blur-sm'>
            <ChevronLeft size={12} /> {dragHint} <ChevronRight size={12} />
          </span>
        </div>
      )}
    </div>
  )
}

export default function BeforeAfterSection() {
  const { t, language } = useLanguage()
  const [activeCase, setActiveCase] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const headingFont = language === 'ar' ? 'var(--font-cairo)' : 'var(--font-playfair-display)'
  const current = CASE_IMAGES[activeCase]
  const currentCase = t.beforeAfter.cases[activeCase]

  return (
    <section
      id='results'
      className='relative overflow-hidden py-28'
      style={{ background: 'linear-gradient(180deg, #050505 0%, #0A0A0A 50%, #050505 100%)' }}
    >
      <div className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full' style={{ width: '900px', height: '600px', background: 'radial-gradient(ellipse, rgba(255,255,255,0.02) 0%, transparent 65%)' }} />

      <div ref={ref} className='relative z-10 mx-auto max-w-7xl px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='mb-16 text-center'
        >
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5' style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}>
            <span className='text-xs font-semibold uppercase tracking-[0.2em] text-white/60'>{t.beforeAfter.badge}</span>
          </div>
          <h2 className='mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl' style={{ fontFamily: headingFont }}>
            {t.beforeAfter.headline1}{' '}
            <span className='luxury-text-gradient'>{t.beforeAfter.headline2}</span>
          </h2>
          <p className='mx-auto max-w-xl text-lg leading-relaxed' style={{ color: '#777777' }}>{t.beforeAfter.subtitle}</p>
        </motion.div>

        <div className='grid gap-10 lg:grid-cols-[1fr_340px]'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ComparisonSlider key={activeCase} before={current.before} after={current.after} label={currentCase.label} dragHint={t.beforeAfter.dragHint} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='flex flex-col gap-6'
          >
            <div className='rounded-2xl p-6' style={{ background: 'rgba(18,18,18,0.8)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
              <div className='mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/50'>{currentCase.category}</div>
              <h3 className='mb-3 text-xl font-bold text-white' style={{ fontFamily: headingFont }}>{currentCase.label}</h3>
              <p className='text-sm leading-relaxed' style={{ color: '#777777' }}>{currentCase.description}</p>

              <div className='mt-5 grid grid-cols-3 overflow-hidden rounded-xl' style={{ background: 'rgba(8,8,8,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
                {[
                  { label: t.beforeAfter.duration,     value: current.stats.duration },
                  { label: t.beforeAfter.recovery,     value: current.stats.recovery },
                  { label: t.beforeAfter.satisfaction, value: current.stats.satisfaction }
                ].map((s, si) => (
                  <div key={si} className='flex flex-col items-center px-2 py-3 text-center' style={{ borderRight: si < 2 ? '1px solid rgba(255,255,255,0.06)' : undefined }}>
                    <span className='text-lg font-bold ltr-only text-white' style={{ fontFamily: headingFont }}>{s.value}</span>
                    <span className='text-[10px] uppercase tracking-wider' style={{ color: '#666666' }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              {t.beforeAfter.cases.map((c, ci) => (
                <button
                  key={ci}
                  onClick={() => setActiveCase(ci)}
                  className='group flex items-center gap-4 rounded-xl px-4 py-3 text-left transition-all duration-300'
                  style={{
                    background: activeCase === ci ? 'rgba(255,255,255,0.07)' : 'rgba(18,18,18,0.5)',
                    border: `1px solid ${activeCase === ci ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.07)'}`,
                    backdropFilter: 'blur(6px)'
                  }}
                >
                  <div className='size-2 shrink-0 rounded-full transition-all duration-300' style={{ background: activeCase === ci ? '#ffffff' : 'rgba(255,255,255,0.2)' }} />
                  <div className='flex-1'>
                    <div className='text-xs font-semibold uppercase tracking-wider' style={{ color: activeCase === ci ? 'rgba(255,255,255,0.7)' : '#666666' }}>{c.category}</div>
                    <div className='text-sm font-medium' style={{ color: activeCase === ci ? '#F8F8F8' : '#555555' }}>{c.label}</div>
                  </div>
                  <ChevronRight size={14} className='transition-transform duration-300 group-hover:translate-x-1' style={{ color: activeCase === ci ? 'rgba(255,255,255,0.6)' : '#444444' }} />
                </button>
              ))}
            </div>

            <p className='text-xs leading-relaxed' style={{ color: 'rgba(255,255,255,0.25)' }}>{t.beforeAfter.disclaimer}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
