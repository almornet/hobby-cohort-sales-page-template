import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Clarity } from '@/components/Clarity'
import { MetaPixel } from '@/components/MetaPixel'
import { DevTimerControl } from '@/components/DevTimerControl'
import { PageFooter } from '@/components/PageFooter'
import { CountdownProvider } from '@/contexts/CountdownContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Hairdryer Canvas Course  — Create Stunning Abstract Art With Just a Hairdryer',
  description: 'The step-by-step system that takes complete beginners from blank canvas to stunning abstract artwork in a single afternoon. No art experience needed.',
  icons: {
    icon: '/assets/almor-creatives-logo.png',
    apple: '/assets/almor-creatives-logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DevTimerControl />
        <CountdownProvider>
          {children}
        </CountdownProvider>
        <Clarity />
        <MetaPixel />
        <PageFooter />
      </body>
    </html>
  )
}
