import type { Metadata } from 'next'
import { Playfair_Display, Outfit } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-sans',
});

const siteUrl = 'https://marylebone-smile.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Marylebone Smile Clinic | Cosmetic & Family Dentistry London',
  description: 'Premium cosmetic dentistry in Marylebone. Discreet, expert smile transformations. Book your consultation today.',
  keywords: ['cosmetic dentistry', 'smile makeover', 'Marylebone', 'London', 'veneers', 'Invisalign', 'teeth whitening', 'dental implants'],
  authors: [{ name: 'Marylebone Smile Clinic', url: siteUrl }],
  creator: 'Marylebone Smile Clinic',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Marylebone Smile Clinic',
    title: 'Marylebone Smile Clinic | Cosmetic & Family Dentistry London',
    description: 'Premium cosmetic dentistry in Marylebone. Discreet, expert smile transformations. Book your consultation today.',
    images: [
      {
        url: '/smile-clinic.png',
        width: 1200,
        height: 630,
        alt: 'Marylebone Smile Clinic - Premium cosmetic dentistry in the heart of London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marylebone Smile Clinic | Cosmetic & Family Dentistry London',
    description: 'Premium cosmetic dentistry in Marylebone. Discreet, expert smile transformations. Book your consultation today.',
    images: ['/smile-clinic.png'],
  },
  alternates: {
    canonical: siteUrl,
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
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
