import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...['privacy', 'terms', 'contact'].map((path) => ({ url: `${siteUrl}/${path}`, lastModified: new Date('2026-10-29'), changeFrequency: 'yearly' as const, priority: 0.3 })),
  ]
}
