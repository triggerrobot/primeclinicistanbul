'use client'

import Link from 'next/link'
import Image from 'next/image'

import { Instagram, Phone, MapPin } from 'lucide-react'

import { useLanguage } from '@/lib/i18n/language-context'

export default function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    [t.footer.treatmentsTitle]: [
      { label: t.treatments.cards[0].title, href: '#treatments' },
      { label: t.treatments.cards[1].title, href: '#treatments' },
      { label: t.treatments.cards[2].title, href: '#treatments' },
      { label: t.treatments.cards[3].title, href: '#treatments' },
      { label: t.treatments.cards[4].title, href: '#treatments' },
      { label: t.treatments.cards[5].title, href: '#treatments' }
    ],
    [t.footer.servicesTitle]: [
      { label: t.process.steps[0].title, href: '#process' },
      { label: t.process.steps[1].title, href: '#process' },
      { label: t.process.steps[2].title, href: '#process' },
      { label: t.process.steps[4].title, href: '#process' },
      { label: t.nav.cta,                href: '#contact' }
    ],
    [t.footer.companyTitle]: [
      { label: t.nav.doctors,  href: '#doctors' },
      { label: t.nav.results,  href: '#results' },
      { label: t.nav.process,  href: '#process' }
    ]
  }

  return (
    <footer style={{ background: '#020202', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className='mx-auto max-w-7xl px-6 py-16'>
        <div className='grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]'>
          {/* Brand */}
          <div>
            <div className='mb-5 flex items-center gap-3'>
              <div className='relative size-10 overflow-hidden rounded-xl'>
                <Image src='/images/pclogo.webp' alt='Prime Clinic Istanbul' fill className='object-cover' sizes='40px' />
              </div>
              <div className='flex flex-col leading-none'>
                <span className='text-base font-bold text-white' style={{ fontFamily: 'var(--font-poppins)' }}>Prime Clinic</span>
                <span className='text-[9px] font-bold uppercase tracking-[0.2em] text-white/35'>Istanbul</span>
              </div>
            </div>

            <p className='mb-6 max-w-xs text-sm leading-relaxed text-white/40'>{t.footer.tagline}</p>

            <div className='mb-6 flex flex-col gap-2.5'>
              {[
                { Icon: Phone,  href: 'https://wa.me/905359156434', text: '+90 535 915 6434' },
                { Icon: MapPin, href: '#',                         text: 'Nişantaşı, Istanbul, Turkey' }
              ].map(({ Icon, href, text }, i) => (
                <a key={i} href={href} className='flex items-center gap-2.5 text-sm transition-colors hover:text-white ltr-only text-white/40'>
                  <Icon size={13} className='text-white/50' />{text}
                </a>
              ))}
            </div>

            <div className='flex items-center gap-3'>
              <a href='https://www.instagram.com/primeclinicistanbul' target='_blank' rel='noopener noreferrer' className='flex size-9 items-center justify-center rounded-xl transition-all duration-300 hover:scale-110' style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Instagram size={15} className='text-white/50' />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className='mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50'>{section}</h4>
              <ul className='flex flex-col gap-2.5'>
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className='text-sm transition-colors duration-200 hover:text-white text-white/35'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5'>
          <p className='text-xs ltr-only text-white/25'>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className='flex items-center gap-5'>
            {([
              { label: t.footer.privacy, href: '/privacy' },
              { label: t.footer.terms,   href: '/terms' },
              { label: t.footer.cookies, href: '/cookies' }
            ] as const).map(item => (
              <Link key={item.href} href={item.href} className='text-xs transition-colors hover:text-white text-white/20'>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
