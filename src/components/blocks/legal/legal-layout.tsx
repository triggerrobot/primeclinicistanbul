'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'

export interface LegalSection {
  heading: string
  body: string | string[]
}

export interface LegalContent {
  title: string
  subtitle: string
  lastUpdated: string
  sections: LegalSection[]
}

export default function LegalLayout({ content }: { content: Record<string, LegalContent> }) {
  const { language } = useLanguage()
  const page = content[language] ?? content.en
  const headingFont = language === 'ar' ? 'var(--font-cairo)' : 'var(--font-poppins)'

  return (
    <div style={{ background: '#050505', minHeight: '100vh' }}>
      <div className='mx-auto max-w-3xl px-6 pb-28 pt-32'>
        <Link
          href='/'
          className='mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/40 transition-colors hover:text-white'
        >
          <ArrowLeft size={13} />
          Prime Clinic Istanbul
        </Link>

        <p className='mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/25'>
          {page.lastUpdated}
        </p>
        <h1
          className='mb-4 text-4xl font-bold text-white md:text-5xl'
          style={{ fontFamily: headingFont }}
        >
          {page.title}
        </h1>
        <p className='mb-16 text-base leading-relaxed text-white/40'>{page.subtitle}</p>

        <div className='flex flex-col gap-10'>
          {page.sections.map((section, i) => (
            <div
              key={i}
              className='rounded-2xl p-6'
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h2
                className='mb-4 text-base font-semibold text-white/80'
                style={{ fontFamily: headingFont }}
              >
                {section.heading}
              </h2>
              {Array.isArray(section.body) ? (
                <ul className='flex flex-col gap-2.5'>
                  {section.body.map((item, j) => (
                    <li key={j} className='flex items-start gap-3 text-sm leading-relaxed text-white/45'>
                      <span className='mt-2 size-1 shrink-0 rounded-full bg-white/30' />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className='text-sm leading-relaxed text-white/45'>{section.body}</p>
              )}
            </div>
          ))}
        </div>

        <div
          className='mt-10 rounded-2xl p-5 text-xs leading-relaxed text-white/25'
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          Prime Clinic Istanbul · Nişantaşı, Istanbul, Turkey ·{' '}
          <a href='https://wa.me/905359156434' className='underline underline-offset-2 hover:text-white/50 transition-colors'>
            +90 535 915 6434
          </a>
        </div>
      </div>
    </div>
  )
}
