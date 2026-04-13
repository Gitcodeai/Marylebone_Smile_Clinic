import { MetadataRoute } from 'next'
import { siteConfig } from './metadata.config'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/our-healers',
    '/testimonials',
    '/courses',
    '/contact',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
