import type { ReactNode } from 'react'

import { Geist_Mono, Poppins, Cairo } from 'next/font/google'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'

import { cn } from '@/lib/utils'

import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: {
    template: '%s | Prime Clinic Istanbul',
    default: 'Prime Clinic Istanbul — VIP Health Tourism & Aesthetic Surgery'
  },
  description:
    'Premium health tourism in Istanbul. VIP transfers, 5-star accommodation, world-class aesthetic surgery and medical procedures. Trusted by 5,000+ international patients.',
  robots: 'index,follow',
  keywords: [
    'health tourism Istanbul',
    'VIP medical tourism Turkey',
    'aesthetic surgery Istanbul',
    'rhinoplasty Turkey',
    'hair transplant Istanbul',
    'medical tourism',
    'Prime Clinic Istanbul'
  ],
  icons: {
    icon: [
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`),
  openGraph: {
    title: 'Prime Clinic Istanbul — VIP Health Tourism & Aesthetic Surgery',
    description:
      'Premium health tourism in Istanbul. VIP transfers, 5-star accommodation, world-class aesthetic surgery trusted by 5,000+ international patients.',
    type: 'website',
    siteName: 'Prime Clinic Istanbul',
    url: `${process.env.NEXT_PUBLIC_APP_URL}`
  }
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='en'
      className={cn(
        poppins.variable,
        geistMono.variable,
        cairo.variable,
        'flex min-h-full w-full scroll-smooth antialiased'
      )}
      suppressHydrationWarning
    >
      <body className='flex min-h-full w-full flex-auto flex-col'>
        <ThemeProvider attribute='class' enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
