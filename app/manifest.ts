import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UmukoziHR - HR powered by AI Agents',
    short_name: 'UmukoziHR',
    description: 'Transform your hiring with UmukoziHR\'s intelligent recruiting platform. Get qualified candidates in under 24 hours.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f97316',
    icons: [
      {
        src: '/umukozi-logo.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/umukozi-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/umukozi-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}