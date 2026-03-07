import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Marylebone Smile Clinic',
  defaultTitle: 'Marylebone Smile Clinic | Cosmetic & Family Dentistry London',
  description:
    'Premium cosmetic dentistry in Marylebone. Discreet, expert smile transformations. Book your consultation today.',
  url: 'https://marylebone-smile-clinic-cpml.vercel.app',
  locale: 'en-GB',
  ogLocale: 'en_GB',
  defaultOgImage: '/og-home.jpg',
  keywords: [
    'cosmetic dentistry',
    'smile makeover',
    'Marylebone',
    'London',
    'veneers',
    'Invisalign',
    'teeth whitening',
    'dental implants',
  ],
  social: {
    // TODO: Replace placeholders with real profile URLs / handles
    twitter: '@clinic_twitter_handle',
    facebook: '',
    instagram: '',
    linkedin: '',
  },
}

export type PageMetaOptions = {
  title?: string
  description?: string
  image?: string
  canonicalPath?: string
  noIndex?: boolean
}

export function createPageMetadata(options: PageMetaOptions = {}): Metadata {
  const { title, description, image, canonicalPath, noIndex } = options

  const metadataBase = new URL(siteConfig.url)
  const resolvedTitle = title ?? siteConfig.defaultTitle
  const resolvedDescription = description ?? siteConfig.description
  const imageUrl = new URL(image ?? siteConfig.defaultOgImage, metadataBase)

  const twitter: Metadata['twitter'] = {
    card: 'summary_large_image',
    title: resolvedTitle,
    description: resolvedDescription,
    images: [imageUrl.toString()],
  }

  if (siteConfig.social.twitter) {
    twitter.site = siteConfig.social.twitter
    twitter.creator = siteConfig.social.twitter
  }

  return {
    metadataBase,
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    openGraph: {
      type: 'website',
      locale: siteConfig.ogLocale,
      url: canonicalPath
        ? new URL(canonicalPath, metadataBase).toString()
        : siteConfig.url,
      siteName: siteConfig.name,
      title: resolvedTitle,
      description: resolvedDescription,
      images: [
        {
          url: imageUrl.toString(),
          width: 1200,
          height: 630,
          alt: 'Marylebone Smile Clinic - Premium cosmetic dentistry in the heart of London',
        },
      ],
    },
    twitter,
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    alternates: {
      canonical: canonicalPath
        ? new URL(canonicalPath, metadataBase).toString()
        : siteConfig.url,
    },
  }
}

