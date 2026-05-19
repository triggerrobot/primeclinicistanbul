'use client'

import { useRef, useState } from 'react'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Award, GraduationCap, Star, ChevronLeft, ChevronRight } from 'lucide-react'

import { useLanguage } from '@/lib/i18n/language-context'

const DOCTOR_META = [
  {
    image: '/images/dr1.webp',
    rating: 4.9, cases: '2,400+',
    certifications: ['EBOPRAS', 'ISAPS Member', 'Turkish Board Certified'],
    accentColor: '#FFFFFF'
  },
  {
    image: '/images/dr2.webp',
    rating: 4.8, cases: '3,800+',
    certifications: ['ISHRS Fellow', 'DHI Certified', 'FUE Specialist'],
    accentColor: '#D0D0D0'
  },
  {
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&q=80&fit=crop&crop=faces',
    rating: 4.9, cases: '1,900+',
    certifications: ['ISAPS Member', 'ASPS International', 'Board Certified'],
    accentColor: '#B8B8B8'
  },
  {
    image: '/images/dr3.webp',
    rating: 5.0, cases: '4,200+',
    certifications: ['EAO Member', 'IACD Fellow', 'Invisalign Certified'],
    accentColor: '#E0E0E0'
  },
  {
    image: '/images/dr7.webp',
    rating: 4.8, cases: '1,500+',
    certifications: ['ESPRAS Member', 'ISAPS Fellow', 'Board Certified'],
    accentColor: '#C8C8C8'
  },
  {
    image: '/images/dr6.webp',
    rating: 4.9, cases: '2,100+',
    certifications: ['ISAPS Member', 'ASAPS Fellow', 'Board Certified'],
    accentColor: '#A0A0A0'
  },
  {
    image: '/images/dr4.webp',
    rating: 5.0, cases: '3,100+',
    certifications: ['ISAPS Member', 'ASPS Fellow', 'Columbia Alumni'],
    accentColor: '#E8E8E8'
  },
  {
    image: '/images/pclogo.webp',
    rating: 4.7, cases: '1,200+',
    certifications: ['ISHRS Member', 'AAD Fellow', 'UCL Alumni'],
    accentColor: '#B0B0B0'
  }
]

const TRUST_BADGES = [
  { label: 'JCI Accredited',  sub: 'Joint Commission International' },
  { label: 'ISO 9001:2015',   sub: 'Quality Management' },
  { label: 'ISAPS Partner',   sub: "Int'l Society of Aesthetic Surgery" },
  { label: 'MOH Certified',   sub: 'Turkish Ministry of Health' }
]

const onEnter = (el: HTMLDivElement, accent: string) => {
  el.style.transform   = 'translateY(-6px)'
  el.style.borderColor = `${accent}38`
  el.style.boxShadow   = '0 30px 70px rgba(0,0,0,0.7)'
}

const onLeave = (el: HTMLDivElement) => {
  el.style.transform   = ''
  el.style.borderColor = 'rgba(255,255,255,0.08)'
  el.style.boxShadow   = ''
}

export default function DoctorsSection() {
  const { t, language } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const headingFont = language === 'ar' ? 'var(--font-cairo)' : 'var(--font-poppins)'

  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragScrollLeft = useRef(0)
  const [dragging, setDragging] = useState(false)

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    isDragging.current = true
    dragStartX.current = e.pageX
    dragScrollLeft.current = scrollRef.current.scrollLeft
    scrollRef.current.style.scrollSnapType = 'none'
    setDragging(true)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    scrollRef.current.scrollLeft = dragScrollLeft.current - (e.pageX - dragStartX.current) * 1.4
  }

  const onMouseUp = () => {
    isDragging.current = false
    setDragging(false)

    if (scrollRef.current) {
      setTimeout(() => {
        if (scrollRef.current) scrollRef.current.style.scrollSnapType = 'x mandatory'
      }, 80)
    }
  }

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 300 : -300, behavior: 'smooth' })
  }

  return (
    <section id='doctors' className='relative overflow-hidden py-28' style={{ background: '#050505' }}>
      <div
        className='pointer-events-none absolute top-0 right-0 rounded-full'
        style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />

      <div ref={ref} className='relative z-10'>
        {/* Header */}
        <div className='mx-auto max-w-7xl px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className='mb-12 flex items-end justify-between'
          >
            <div>
              <div className='mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5' style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}>
                <span className='text-xs font-semibold uppercase tracking-[0.2em] text-white/60'>{t.doctors.badge}</span>
              </div>
              <h2 className='mb-3 text-4xl font-bold text-white md:text-5xl lg:text-6xl' style={{ fontFamily: headingFont }}>
                {t.doctors.headline1 && <>{t.doctors.headline1} </>}
                <span className='luxury-text-gradient'>{t.doctors.headline2}</span>
                {t.doctors.headline3 && <> {t.doctors.headline3}</>}
              </h2>
              <p className='max-w-2xl text-lg leading-relaxed' style={{ color: '#777777' }}>{t.doctors.subtitle}</p>
            </div>

            {/* Arrow buttons */}
            <div className='hidden shrink-0 items-center gap-2 md:flex'>
              <button
                onClick={() => scroll('left')}
                className='flex size-11 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10'
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <ChevronLeft size={18} className='text-white/60' />
              </button>
              <button
                onClick={() => scroll('right')}
                className='flex size-11 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10'
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <ChevronRight size={18} className='text-white/60' />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scrollable row — bleeds to edges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className='relative'
        >
          {/* Left fade */}
          <div className='pointer-events-none absolute left-0 top-0 z-10 h-full w-16'
            style={{ background: 'linear-gradient(to right, #050505, transparent)' }} />
          {/* Right fade */}
          <div className='pointer-events-none absolute right-0 top-0 z-10 h-full w-16'
            style={{ background: 'linear-gradient(to left, #050505, transparent)' }} />

          <div
            ref={scrollRef}
            className='flex gap-5 overflow-x-auto px-6'
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingBottom: '8px',
              cursor: dragging ? 'grabbing' : 'grab',
              userSelect: 'none'
            }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {t.doctors.doctors.map((doc, i) => {
              const meta = DOCTOR_META[i]

              if (!meta) return null

              return (
                <div
                  key={i}
                  className='shrink-0'
                  style={{ width: '272px', scrollSnapAlign: 'start', pointerEvents: dragging ? 'none' : 'auto' }}
                >
                  <div
                    className='group relative overflow-hidden rounded-3xl'
                    style={{
                      background: 'rgba(15,15,15,0.8)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(12px)',
                      transition: 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.28s ease, box-shadow 0.28s ease'
                    }}
                    onMouseEnter={e => onEnter(e.currentTarget as HTMLDivElement, meta.accentColor)}
                    onMouseLeave={e => onLeave(e.currentTarget as HTMLDivElement)}
                  >
                    <div className='relative h-72 overflow-hidden'>
                      <Image
                        src={meta.image}
                        alt={doc.name}
                        fill
                        className='object-cover'
                        sizes='272px'
                      />
                      <div className='absolute inset-0' style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.3) 50%, transparent 100%)' }} />

                      <div className='absolute top-4 right-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 ltr-only' style={{ background: 'rgba(5,5,5,0.85)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)' }}>
                        <Star size={12} fill='#ffffff' color='#ffffff' />
                        <span className='text-xs font-bold text-white'>{meta.rating}</span>
                      </div>

                      <div className='absolute top-4 left-4 rounded-full px-3 py-1.5 text-xs font-semibold ltr-only' style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: meta.accentColor }}>
                        {meta.cases} {t.doctors.cases}
                      </div>
                    </div>

                    <div className='p-5'>
                      <h3 className='mb-1 text-lg font-bold text-white' style={{ fontFamily: headingFont }}>{doc.name}</h3>
                      <p className='mb-1 text-sm font-semibold' style={{ color: meta.accentColor }}>{doc.specialty}</p>
                      <p className='mb-4 text-xs ltr-only' style={{ color: '#666666' }}>{doc.experience} {t.doctors.experience}</p>

                      <div className='mb-4 flex items-center gap-2 text-xs' style={{ color: '#777777' }}>
                        <GraduationCap size={13} className='shrink-0 text-white/50' />
                        <span>{doc.education}</span>
                      </div>

                      <div className='flex flex-wrap gap-1.5'>
                        {meta.certifications.map((cert, ci) => (
                          <span key={ci} className='rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide' style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                            <Award size={8} className='mr-1 inline' />{cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Trust badges */}
        <div className='mx-auto max-w-7xl px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className='mt-14 flex flex-wrap items-center justify-center gap-10'
          >
            {TRUST_BADGES.map((badge, bi) => (
              <div key={bi} className='flex flex-col items-center text-center'>
                <div className='mb-1 text-sm font-bold text-white/80'>{badge.label}</div>
                <div className='text-xs' style={{ color: 'rgba(255,255,255,0.35)' }}>{badge.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
