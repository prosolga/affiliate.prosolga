import type { MetadataRoute } from 'next'
import { siteDescription, siteName } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: 'ProSolutions',
    description: siteDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0b1f4b',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
