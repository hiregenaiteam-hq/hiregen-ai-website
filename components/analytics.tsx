'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
  }
}

function AnalyticsComponent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 measurement ID
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

    if (!GA_MEASUREMENT_ID) return

    const url = pathname + searchParams.toString()

    // Track page views
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_location: url,
      page_title: document.title,
    })
  }, [pathname, searchParams])

  // Don't render anything
  return null
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsComponent />
    </Suspense>
  )
}

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackWaitlistSignup = () => {
  trackEvent('waitlist_signup', {
    event_category: 'engagement',
    event_label: 'waitlist',
    value: 1,
  })
}

export const trackDemoView = () => {
  trackEvent('demo_view', {
    event_category: 'engagement',
    event_label: 'demo_video',
    value: 1,
  })
}

export const trackSectionView = (section: string) => {
  trackEvent('section_view', {
    event_category: 'navigation',
    event_label: section,
  })
}