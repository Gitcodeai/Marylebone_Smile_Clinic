import type { Metadata } from 'next'
import { Playfair_Display, Outfit } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { createPageMetadata, siteConfig } from './metadata.config'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-sans',
});

const baseMetadata = createPageMetadata()

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  icons: {
    icon: '/favicon-32x32.png',
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

