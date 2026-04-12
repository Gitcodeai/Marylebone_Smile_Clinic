import type { Metadata } from 'next'

export const siteConfig = {
  name: 'NYL Healing',
  defaultTitle: 'NYL Healing | Acupuncture & Wellness Clinic',
  description:
    'Premium acupuncture and holistic wellness clinic. Experience restorative healing and transformative care. Book your consultation today.',
  url: 'https://nyl-healing.vercel.app',
  locale: 'en-US',
  ogLocale: 'en_US',
  defaultOgImage: '/og-home.jpg',
  keywords: [
    'acupuncture',
    'holistic wellness',
    'healing',
    'traditional chinese medicine',
    'cupping',
    'wellness clinic',
    'natural healing',
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

