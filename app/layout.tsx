import type { Metadata } from 'next'
import { Playfair_Display, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const cormorant = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ur-dubai.com'),
  title: {
    default: 'UR Dubai — Votre écosystème premium à Dubaï',
    template: '%s | UR Dubai',
  },
  description:
    'UR Dubai vous accompagne dans vos projets immobiliers, d\'expériences sur mesure et de création de société à Dubaï. Un écosystème unique, une expertise locale.',
  keywords: [
    'immobilier Dubai',
    'investissement Dubai',
    'création société Dubai',
    'conciergerie Dubai',
    'tourisme luxe Dubai',
    'accompagnement Dubai',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'UR Dubai',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
