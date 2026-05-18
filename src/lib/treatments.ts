import { Scissors, Sparkles, Activity, Smile, Eye, Stethoscope, type LucideIcon } from 'lucide-react'

export interface TreatmentMeta {
  slug:        string
  index:       number
  heroImage:   string
  cardImage:   string
  accentColor: string
  Icon:        LucideIcon
  stats:       { label: string; value: string }[]
  details:     string[]
}

export const TREATMENT_META: TreatmentMeta[] = [
  {
    slug: 'rhinoplasty',
    index: 0,
    heroImage: '/images/tts1.webp',
    cardImage: '/images/tts1.webp',
    accentColor: '#FFFFFF',
    Icon: Scissors,
    stats: [
      { label: 'Recovery',    value: '7–14 days' },
      { label: 'Duration',    value: '2–3 hrs' },
      { label: 'Anaesthesia', value: 'General' },
      { label: 'Stay',        value: '5–7 nights' }
    ],
    details: [
      'Closed or open technique tailored to individual anatomy',
      'Septoplasty combined when breathing improvement is needed',
      '3D digital simulation and morphing before surgery',
      'Specialised post-op compression kit included'
    ]
  },
  {
    slug: 'hair-transplant',
    index: 1,
    heroImage: '/images/tts2.webp',
    cardImage: '/images/tts2.webp',
    accentColor: '#D0D0D0',
    Icon: Sparkles,
    stats: [
      { label: 'Recovery',  value: '3–5 days' },
      { label: 'Duration',  value: '6–8 hrs' },
      { label: 'Grafts',    value: 'Up to 5,000' },
      { label: 'Stay',      value: '3–4 nights' }
    ],
    details: [
      'FUE and DHI techniques for maximum graft survival',
      'Sapphire blade micro-channels for natural density',
      'PRP therapy included for accelerated healing',
      'Lifetime warranty on transplanted grafts'
    ]
  },
  {
    slug: 'liposuction-bbl',
    index: 2,
    heroImage: '/images/tts3.webp',
    cardImage: '/images/tts3.webp',
    accentColor: '#B8B8B8',
    Icon: Activity,
    stats: [
      { label: 'Recovery',    value: '10–14 days' },
      { label: 'Duration',    value: '3–5 hrs' },
      { label: 'Anaesthesia', value: 'General' },
      { label: 'Stay',        value: '6–8 nights' }
    ],
    details: [
      '360° contouring of abdomen, flanks, back and arms',
      'VASER ultrasonic-assisted lipo for smooth results',
      'BBL fat transfer with high-density survival technique',
      'Custom compression garments included'
    ]
  },
  {
    slug: 'hollywood-smile',
    index: 3,
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1800&h=1000&q=85&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=320&q=80&fit=crop',
    accentColor: '#E8E8E8',
    Icon: Smile,
    stats: [
      { label: 'Treatment',  value: '5–7 days' },
      { label: 'Per session', value: '2–3 hrs' },
      { label: 'Veneers',    value: 'Up to 20' },
      { label: 'Longevity',  value: '15–20 yrs' }
    ],
    details: [
      'Ultra-thin E-Max porcelain veneers at 0.3 mm thickness',
      'Same-day CEREC crowns for implant cases',
      'Digital smile design preview before any preparation',
      'Implants placed and loaded within a single trip'
    ]
  },
  {
    slug: 'facelift-eyelid',
    index: 4,
    heroImage: '/images/tts5.webp',
    cardImage: '/images/tts5.webp',
    accentColor: '#C8C8C8',
    Icon: Eye,
    stats: [
      { label: 'Recovery',    value: '10–14 days' },
      { label: 'Duration',    value: '3–4 hrs' },
      { label: 'Anaesthesia', value: 'General / Local' },
      { label: 'Stay',        value: '5–7 nights' }
    ],
    details: [
      'Deep-plane facelift for long-lasting natural results',
      'Upper and lower blepharoplasty combined where needed',
      'Scarless or minimal-scar techniques where applicable',
      'Fat repositioning for volumised youthful contours'
    ]
  },
  {
    slug: 'breast-surgery',
    index: 5,
    heroImage: '/images/tts6.webp',
    cardImage: '/images/tts6.webp',
    accentColor: '#A8A8A8',
    Icon: Stethoscope,
    stats: [
      { label: 'Recovery',  value: '7–10 days' },
      { label: 'Duration',  value: '1.5–3 hrs' },
      { label: 'Implants',  value: 'Motiva / Mentor' },
      { label: 'Stay',      value: '4–6 nights' }
    ],
    details: [
      'Cohesive gel implants with lifetime manufacturer warranty',
      'Dual-plane placement for the most natural profile',
      'Augmentation, reduction and lift all available',
      'Detailed 3D sizer simulation before confirmation'
    ]
  }
]
