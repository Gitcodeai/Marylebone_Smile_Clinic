import type { Metadata } from 'next'

export const siteConfig = {
  name: 'NYL Healing',
  defaultTitle: 'NYL Healing | Ancient Wisdom, Modern Restoration',
  description:
    'Experience the mastery of Qi and meridional alignment at NYL Healing. Premium acupuncture, Sujok, and restorative clinical healing in Kochi and Perumbavoor. Begin your journey to health today.',
  url: 'https://nylhealing.com', // Placeholder URL
  locale: 'en-IN',
  ogLocale: 'en_IN',
  defaultOgImage: '/images/og-primary.jpg',
  keywords: [
    'NYL Healing',
    'Acupuncture Kochi',
    'Sujok Treatment Kerala',
    'Distance Healing',
    'Meridional Alignment',
    'Qi Restoration',
    'Natural Healing Kochi',
    'Clinical Wellness Kerala',
    'Premium Acupuncture',
    'Energy Medicine Kerala'
  ],
  social: {
    twitter: '@nylhealing',
    facebook: 'nylhealing',
    instagram: 'nylhealing',
    linkedin: 'nylhealing',
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
          alt: 'NYL Healing - Premium acupuncture and wellness clinic',
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

