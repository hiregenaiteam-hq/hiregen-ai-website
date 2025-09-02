import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UmukoziHR - AI-Powered HR Solutions',
    short_name: 'UmukoziHR',
    description: 'Transform your hiring with UmukoziHR\'s intelligent recruiting platform. Get qualified HR candidates in under 1 hour.',
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