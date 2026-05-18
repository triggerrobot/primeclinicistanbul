'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'

const CONTACT_ICONS  = [Phone, Mail, MapPin]
const CONTACT_HREFS  = ['tel:+902120000000', 'mailto:info@primeclinicistanbul.com', '#']
const CONTACT_VALUES = ['+90 (212) 000 00 00', 'info@primeclinicistanbul.com', 'Nişantaşı, Istanbul']
const LANGUAGES_LIST = ['🇬🇧 English', '🇩🇪 German', '🇫🇷 French', '🇸🇦 Arabic', '🇷🇺 Russian', '🇹🇷 Turkish']

type FormState = 'idle' | 'loading' | 'success'

const INPUT_STYLE = {
  background: 'rgba(5,5,5,0.7)',
  border: '1px solid rgba(255,255,255,0.1)',
  caretColor: '#ffffff'
} as React.CSSProperties

export default function ContactSection() {
  const { t, language } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', treatment: '', message: '' })
  const headingFont = language === 'ar' ? 'var(--font-cairo)' : 'var(--font-playfair-display)'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    await new Promise(r => setTimeout(r, 1500))
    setFormState('success')
  }

  const contactInfo = [
    { ...t.contact.infoPhone,    value: CONTACT_VALUES[0], href: CONTACT_HREFS[0], Icon: CONTACT_ICONS[0] },
    { ...t.contact.infoEmail,    value: CONTACT_VALUES[1], href: CONTACT_HREFS[1], Icon: CONTACT_ICONS[1] },
    { ...t.contact.infoLocation, value: CONTACT_VALUES[2], href: CONTACT_HREFS[2], Icon: CONTACT_ICONS[2] }
  ]

  return (
    <section
      id='contact'
      className='relative overflow-hidden py-28'
      style={{ background: 'linear-gradient(180deg, #050505 0%, #0A0A0A 60%, #050505 100%)' }}
    >
      <div className='pointer-events-none absolute inset-0' style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,255,255,0.03) 0%, transparent 60%)' }} />

      <div ref={ref} className='relative z-10 mx-auto max-w-7xl px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='mb-16 text-center'
        >
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5' style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}>
            <span className='text-xs font-semibold uppercase tracking-[0.2em] text-white/60'>{t.contact.badge}</span>
          </div>
          <h2 className='mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl' style={{ fontFamily: headingFont }}>
            {t.contact.headline1}{' '}
            <span className='luxury-text-gradient'>{t.contact.headline2}</span>
          </h2>
          <p className='mx-auto max-w-xl text-lg leading-relaxed' style={{ color: '#777777' }}>{t.contact.subtitle}</p>
        </motion.div>

        <div className='grid gap-10 lg:grid-cols-[1fr_420px]'>
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='rounded-3xl p-8 md:p-10'
            style={{ background: 'rgba(12,12,12,0.8)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}
          >
            {formState === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className='flex flex-col items-center justify-center py-12 text-center'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className='mb-6 flex size-20 items-center justify-center rounded-full bg-white'
                >
                  <CheckCircle size={40} color='#050505' />
                </motion.div>
                <h3 className='mb-3 text-2xl font-bold text-white' style={{ fontFamily: headingFont }}>{t.contact.form.successTitle}</h3>
                <p className='mb-6 max-w-sm text-sm leading-relaxed' style={{ color: '#777777' }}>{t.contact.form.successMessage}</p>
                <button onClick={() => setFormState('idle')} className='text-sm font-semibold text-white/60 underline underline-offset-4'>
                  {t.contact.form.successRetry}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <div className='grid gap-5 sm:grid-cols-2'>
                  {[
                    { name: 'name',  label: t.contact.form.name,  type: 'text',  placeholder: t.contact.form.namePlaceholder },
                    { name: 'email', label: t.contact.form.email, type: 'email', placeholder: t.contact.form.emailPlaceholder }
                  ].map(f => (
                    <div key={f.name} className='flex flex-col gap-2'>
                      <label className='text-xs font-semibold uppercase tracking-wider text-white/40'>{f.label} *</label>
                      <input name={f.name} type={f.type} value={form[f.name as keyof typeof form]} onChange={handleChange} required placeholder={f.placeholder}
                        className='rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:ring-1 focus:ring-white/20'
                        style={INPUT_STYLE} />
                    </div>
                  ))}
                </div>
                <div className='grid gap-5 sm:grid-cols-2'>
                  {[
                    { name: 'phone',   label: t.contact.form.phone,   type: 'tel',  placeholder: t.contact.form.phonePlaceholder },
                    { name: 'country', label: t.contact.form.country, type: 'text', placeholder: t.contact.form.countryPlaceholder }
                  ].map(f => (
                    <div key={f.name} className='flex flex-col gap-2'>
                      <label className='text-xs font-semibold uppercase tracking-wider text-white/40'>{f.label}</label>
                      <input name={f.name} type={f.type} value={form[f.name as keyof typeof form]} onChange={handleChange} placeholder={f.placeholder}
                        className='rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:ring-1 focus:ring-white/20'
                        style={INPUT_STYLE} />
                    </div>
                  ))}
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='text-xs font-semibold uppercase tracking-wider text-white/40'>{t.contact.form.treatment} *</label>
                  <div className='relative'>
                    <select name='treatment' value={form.treatment} onChange={handleChange} required
                      className='w-full appearance-none rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:ring-1 focus:ring-white/20'
                      style={INPUT_STYLE}
                    >
                      <option value='' disabled style={{ background: '#0F0F0F' }}>{t.contact.form.treatmentPlaceholder}</option>
                      {t.contact.treatments.map(tr => (
                        <option key={tr} value={tr} style={{ background: '#0F0F0F' }}>{tr}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40' />
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/40'>
                    <MessageSquare size={12} />{t.contact.form.message}
                  </label>
                  <textarea name='message' value={form.message} onChange={handleChange} rows={4} placeholder={t.contact.form.messagePlaceholder}
                    className='resize-none rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:ring-1 focus:ring-white/20'
                    style={INPUT_STYLE}
                  />
                </div>

                <p className='text-xs leading-relaxed text-white/25'>{t.contact.form.privacy}</p>

                <motion.button
                  type='submit'
                  disabled={formState === 'loading'}
                  className='group flex items-center justify-center gap-3 rounded-2xl py-4 text-sm font-bold uppercase tracking-widest'
                  style={{ background: '#ffffff', color: '#050505', boxShadow: '0 0 30px rgba(255,255,255,0.12)' }}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formState === 'loading' ? (
                    <motion.div className='size-5 rounded-full border-2 border-current border-t-transparent' animate={{ rotate: 360 }} transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }} />
                  ) : (
                    <>{t.contact.form.submit}<Send size={15} className='transition-transform duration-300 group-hover:translate-x-1' /></>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='flex flex-col gap-6'
          >
            {contactInfo.map((info, i) => (
              <a key={i} href={info.href}
                className='group flex items-center gap-5 rounded-2xl p-5 transition-all duration-300'
                style={{ background: 'rgba(15,15,15,0.8)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
              >
                <div className='flex size-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110' style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <info.Icon size={20} className='text-white/70' />
                </div>
                <div>
                  <div className='text-xs font-semibold uppercase tracking-wider text-white/40'>{info.label}</div>
                  <div className='text-sm font-semibold text-white transition-colors group-hover:text-white/80 ltr-only'>{info.value}</div>
                  <div className='text-xs text-white/30'>{info.sub}</div>
                </div>
              </a>
            ))}

            <div className='rounded-2xl p-5' style={{ background: 'rgba(15,15,15,0.8)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}>
              <p className='mb-3 text-xs font-semibold uppercase tracking-wider text-white/40'>{t.contact.languagesTitle}</p>
              <div className='flex flex-wrap gap-2'>
                {LANGUAGES_LIST.map(lang => (
                  <span key={lang} className='rounded-full px-3 py-1 text-xs font-medium text-white/60' style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className='rounded-2xl p-5 text-center' style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className='mb-1 text-2xl font-bold ltr-only text-white' style={{ fontFamily: headingFont }}>{t.contact.responseValue}</div>
              <div className='text-xs font-semibold uppercase tracking-wider text-white/70'>{t.contact.responseLabel}</div>
              <div className='mt-2 text-xs text-white/35'>{t.contact.responseSub}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
