import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "UmukoziHR - AI-Powered HR Solutions | Transform Your Hiring Process",
    template: "%s | UmukoziHR"
  },
  description: "Transform your hiring with UmukoziHR's intelligent recruiting platform. Connect with top talent faster using AI-powered candidate sourcing, smart ranking, and automated outreach. Get qualified HR candidates in under 1 hour.",
  generator: 'UmukoziHR',
  applicationName: 'UmukoziHR',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'UmukoziHR', 'Umukozi HR', 'Umukozi', 'AI recruiting', 'HR solutions', 'talent acquisition', 
    'hiring platform', 'AI-powered hiring', 'candidate sourcing', 'HR recruitment', 
    'intelligent recruiting', 'automated hiring', 'HR technology', 'recruitment AI',
    'talent sourcing', 'HR professionals', 'hiring automation', 'recruitment platform',
    'AI candidate ranking', 'smart hiring', 'HR talent pool', 'recruitment software'
  ],
  authors: [{ name: 'UmukoziHR', url: 'https://umukozihr-ai.vercel.app' }],
  creator: 'UmukoziHR',
  publisher: 'UmukoziHR',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://umukozihr-ai.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'UmukoziHR - AI-Powered HR Solutions | Transform Your Hiring Process',
    description: 'Transform your hiring with UmukoziHR\'s intelligent recruiting platform. Connect with top talent faster using AI-powered candidate sourcing, smart ranking, and automated outreach. Get qualified HR candidates in under 1 hour.',
    url: 'https://umukozihr-ai.vercel.app',
    siteName: 'UmukoziHR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UmukoziHR - AI-Powered HR Solutions Platform',
      },
      {
        url: '/og-image-square.png',
        width: 1200,
        height: 1200,
        alt: 'UmukoziHR - Transform Your Hiring Process',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UmukoziHR - AI-Powered HR Solutions | Transform Your Hiring Process',
    description: 'Transform your hiring with UmukoziHR\'s intelligent recruiting platform. Get qualified HR candidates in under 1 hour with AI-powered sourcing and smart ranking.',
    creator: '@UmukoziHR',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'sx6blqhOL6lxGfZmcxCq-fRWfz35RUNQmTVlR33UOm8',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="theme-color" content="#f97316" />
        <meta name="color-scheme" content="light" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="UmukoziHR" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="apple-touch-icon" href="/umukozi-logo.png" />
        <link rel="icon" type="image/png" href="/umukozi-logo.png" />
        <link rel="shortcut icon" href="/umukozi-logo.png" />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_location: window.location.href,
                  page_title: document.title,
                });
              `}
            </Script>
          </>
        )}
        
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
