import { Scissors, Sparkles, Activity, Smile, Eye, Stethoscope, type LucideIcon } from 'lucide-react'

export interface TreatmentMeta {
  slug:        string
  index:       number
  heroImage:   string
  cardImage:   string
  accentColor: string
  Icon:        LucideIcon
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
    details: [
      'Cohesive gel implants with lifetime manufacturer warranty',
      'Dual-plane placement for the most natural profile',
      'Augmentation, reduction and lift all available',
      'Detailed 3D sizer simulation before confirmation'
    ]
  }
]
