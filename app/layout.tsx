import type { Metadata } from 'next'
import { Playfair_Display, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { LenisProvider } from '@/components/lenis-provider'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Marylebone Smile Clinic | Cosmetic & Family Dentistry London',
  description: 'Premium cosmetic dentistry in Marylebone. Discreet, expert smile transformations. Book your consultation today.',
  keywords: ["cosmetic dentistry", "smile makeover", "Marylebone", "London"],
  openGraph: {
    title: 'Marylebone Smile Clinic | Cosmetic & Family Dentistry London',
    description: 'Premium cosmetic dentistry in Marylebone. Discreet, expert smile transformations. Book your consultation today.',
    images: [{ url: '/images/hero-og.jpg' }],
  },
  alternates: {
    canonical: 'https://marylebone-smile.com',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased selection:bg-accent/30">
        <LenisProvider>
          {children}
        </LenisProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
