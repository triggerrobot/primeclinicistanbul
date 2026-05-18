import type { ReactNode } from 'react'

import { LanguageProvider } from '@/lib/i18n/language-context'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const PagesLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <LanguageProvider>
      <div className='relative' style={{ background: '#060B14' }}>
        <Header />
        <main className='flex flex-col'>{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default PagesLayout
