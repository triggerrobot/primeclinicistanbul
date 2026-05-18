import HeroSection from '@/components/blocks/hero-section/hero-section'
import ProcessSection from '@/components/blocks/process/process-section'
import TreatmentsSection from '@/components/blocks/treatments/treatments-section'
import BeforeAfterSection from '@/components/blocks/before-after/before-after-section'
import DoctorsSection from '@/components/blocks/doctors/doctors-section'
import ContactSection from '@/components/blocks/contact/contact-section'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL ?? 'https://primeclinicistanbul.com'}#business`,
      name: 'Prime Clinic Istanbul',
      description:
        'Premium health tourism in Istanbul — VIP transfers, world-class aesthetic surgery, 5-star accommodation.',
      url: process.env.NEXT_PUBLIC_APP_URL ?? 'https://primeclinicistanbul.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Istanbul',
        addressCountry: 'TR'
      },
      medicalSpecialty: [
        'Plastic Surgery',
        'Aesthetic Surgery',
        'Hair Transplantation',
        'Dental Aesthetics'
      ]
    }
  ]
}

const divider = (
  <div
    className='mx-auto h-px w-3/4 max-w-4xl'
    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }}
  />
)

export default function Home() {
  return (
    <div style={{ background: '#050505' }}>
      <HeroSection />
      {divider}
      <ProcessSection />
      {divider}
      <TreatmentsSection />
      {divider}
      <BeforeAfterSection />
      {divider}
      <DoctorsSection />
      {divider}
      <ContactSection />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
    </div>
  )
}
