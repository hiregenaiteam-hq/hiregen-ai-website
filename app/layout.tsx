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
    default: "UmukoziHR - HR powered by AI Agents | Automate Your entire Hiring Process with AI Agents",
    template: "%s | UmukoziHR"
  },
  description: "Transform your hiring with UmukoziHR's intelligent recruiting platform. Connect with top talent faster using AI-powered candidate sourcing, smart ranking, and automated outreach. Get qualified candidates in under 24 hours.",
  generator: 'UmukoziHR',
  applicationName: 'UmukoziHR',
  referrer: 'origin-when-cross-origin',
  keywords: [
    // 1. Brand & Variations
    'UmukoziHR', 'Umukozi HR', 'Umukozi', 'UmukoziAI', 'Umukozi HR AI', 'Umukozi recruiting',
    'Umukozi hiring', 'Umukozi talent', 'Umukozi HR software', 'Umukozi HR platform',
    'Umukozi HR tech', 'Umukozi HR agents', 'Umukozi HR automation', 'Umukozi systems',
    'UmukoziHR AI platform', 'UmukoziHR app', 'UmukoziHR SaaS', 'UmukoziHR software',
    'UmukoziHR solutions', 'UmukoziHR recruiting', 'UmukoziHR hiring', 'UmukoziHR AI agents',
    'UmukoziHR AI software', 'UmukoziHR AI hiring', 'UmukoziHR candidate sourcing',
    'UmukoziHR automated hiring', 'UmukoziHR platform AI', 'UmukoziHR jobs', 'UmukoziHR careers',
    'UmukoziHR future of work', 'UmukoziHR automation', 'UmukoziHR intelligent recruiting',
    'UmukoziHR digital hiring', 'UmukoziHR SaaS HR', 'UmukoziHR system', 'UmukoziHR ATS',
    'UmukoziHR HRM', 'UmukoziHR recruitment AI', 'UmukoziHR HR solutions', 'UmukoziHR hiring agents',
    'UmukoziHR next gen HR', 'UmukoziHR workforce automation', 'UmukoziHR hiring software',
    'UmukoziHR employee software', 'UmukoziHR recruitment tools', 'UmukoziHR AI technology',
    'UmukoziHR machine learning HR', 'UmukoziHR smart hiring', 'UmukoziHR cloud HR',
  
    // 2. HR + Recruiting Core
    'AI recruiting', 'AI recruitment', 'AI hiring', 'AI in HR', 'AI recruitment platform',
    'AI candidate sourcing', 'AI candidate ranking', 'AI recruitment software', 'AI recruitment solutions',
    'AI for HR managers', 'AI HR tools', 'AI interview software', 'AI interview scheduling',
    'AI-powered HR platform', 'AI hiring platform', 'AI recruiting SaaS', 'AI HR system',
    'AI recruitment system', 'AI for recruitment agencies', 'AI HR recruitment', 'AI HR hiring',
    'intelligent recruiting', 'intelligent hiring', 'intelligent HR solutions', 'intelligent HR software',
    'smart recruiting', 'smart hiring', 'smart HR solutions', 'smart HR software', 'smart HR system',
    'automated recruiting', 'automated hiring', 'automated HR', 'automated HR platform',
    'digital recruiting', 'digital HR solutions', 'digital HR software', 'digital hiring platform',
    'AI job platform', 'AI career software', 'AI workforce platform', 'AI talent sourcing',
    'AI staffing solutions', 'HR AI recruiting', 'HR AI hiring', 'HR AI platform', 'HR AI software',
    'next gen recruiting', 'next gen HR software', 'next gen hiring platform',
  
    // 3. Wider HR Tech / Systems
    'applicant tracking system', 'ATS software', 'ATS platform', 'ATS HR software', 'ATS HR tech',
    'ATS SaaS', 'cloud ATS', 'best ATS software', 'ATS automation', 'ATS for HR managers',
    'talent management system', 'talent management SaaS', 'talent management software',
    'employee management system', 'employee management SaaS', 'employee management software',
    'workforce management system', 'workforce automation', 'workforce SaaS', 'workforce technology',
    'HR SaaS platform', 'HR SaaS software', 'HR SaaS automation', 'HR SaaS solutions', 'HR SaaS system',
    'HR technology software', 'HR technology system', 'HR digital tools', 'HR digital platforms',
    'HR cloud software', 'HR cloud systems', 'HR enterprise software', 'HR enterprise system',
    'people analytics software', 'people analytics platform', 'people analytics SaaS',
    'onboarding automation', 'onboarding system', 'onboarding software', 'onboarding SaaS',
    'HR onboarding tools', 'HR onboarding automation', 'HR SaaS onboarding',
    'HRIS software', 'HRIS system', 'HRIS SaaS', 'HRIS platform', 'HR cloud HRIS', 'HR ERP',
    'HR management software', 'HR management platform', 'HR automation platform',
  
    // 4. Problem / Benefit Keywords
    'reduce time to hire', 'cut hiring costs', 'improve retention', 'improve hiring',
    'speed up recruitment', 'faster hiring process', 'faster candidate sourcing',
    'faster recruitment', 'better hiring outcomes', 'better candidates', 'better recruiting process',
    'reduce bias in hiring', 'reduce HR workload', 'reduce HR admin tasks', 'reduce HR costs',
    'reduce hiring mistakes', 'reduce bad hires', 'improve HR productivity',
    'improve candidate experience', 'improve candidate journey', 'improve recruitment process',
    'automated candidate screening', 'automated candidate shortlisting',
    'automated interview scheduling', 'automated recruitment pipeline',
    'automated resume screening', 'automated CV parsing', 'automated HR tasks',
    'AI-powered screening', 'AI-powered candidate shortlisting', 'AI-powered hiring workflows',
    'AI-powered onboarding', 'AI-powered employee selection', 'AI-powered recruitment efficiency',
    'AI-powered bias reduction', 'AI-powered HR automation', 'AI-powered staff retention',
    'AI-powered hiring productivity', 'AI-powered recruitment success',
    'AI saves HR time', 'AI saves hiring costs', 'AI makes recruitment smarter',
    'AI makes HR efficient', 'AI improves HR decision making', 'AI improves hiring outcomes',
    'smart CV screening', 'smart resume parsing', 'smart hiring automation',
  
    // 5. Broader Recruiting & Jobs Terms
    'jobs platform', 'job board', 'job marketplace', 'job software', 'job SaaS',
    'job management system', 'job posting platform', 'job posting software',
    'job search engine', 'job search app', 'job recruitment platform', 'job marketplace AI',
    'career platform', 'career software', 'career management system', 'career app',
    'career development software', 'career tracking platform', 'career AI system',
    'recruitment platform', 'recruitment software', 'recruitment SaaS', 'recruitment system',
    'recruitment CRM', 'recruitment CRM software', 'recruitment CRM system', 'recruitment CRM SaaS',
    'staffing software', 'staffing platform', 'staffing system', 'staffing SaaS',
    'staffing automation', 'staffing technology', 'staffing AI', 'staffing CRM',
    'talent pool platform', 'talent pool software', 'talent pool SaaS', 'talent pool system',
    'candidate tracking system', 'candidate CRM', 'candidate SaaS', 'candidate pipeline software',
    'candidate management system', 'candidate SaaS platform', 'candidate automation tools',
  
    // 6. Future of Work / Vision Keywords
    'future of work', 'AI future of work', 'HR future of work', 'AI future workforce',
    'AI Agents', 'HR agents', 'digital HR agents', 'intelligent HR agents',
    'HR automation', 'HR automation AI', 'HR automation system', 'HR automation software',
    'AI workforce automation', 'AI HR workforce', 'AI workforce management',
    'AI workforce software', 'AI workforce system', 'AI workforce SaaS',
    'AI employee management', 'AI employee software', 'AI employee system',
    'AI career management', 'AI career software', 'AI job system', 'AI job software',
    'next gen HR', 'next gen HR software', 'next gen workforce software',
    'cloud HR future', 'cloud HR automation', 'cloud HR AI', 'cloud HR SaaS',
    'enterprise HR AI', 'enterprise HR SaaS', 'enterprise HR automation',
    'AI SaaS HR', 'AI SaaS hiring', 'AI SaaS recruiting', 'AI SaaS talent',
    'AI SaaS HR software', 'AI SaaS HR platform', 'SaaS future of HR', 'SaaS HR future',
    'AI SaaS employee management', 'AI SaaS ATS', 'AI SaaS onboarding'
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
    title: 'UmukoziHR - HR powered by AI Agents | Automate Your entire Hiring Process with AI Agents',
    description: 'Automate Your entire Hiring Process with AI Agents. Get qualified candidates in under 24 hours.',
    url: 'https://umukozihr-ai.vercel.app',
    siteName: 'UmukoziHR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UmukoziHR - HR powered by AI Agents',
      },
      {
        url: '/og-image-square.png',
        width: 1200,
        height: 1200,
        alt: 'UmukoziHR - Automate Your entire Hiring Process with AI Agents',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UmukoziHR - HR powered by AI Agents | Automate Your entire Hiring Process with AI Agents',
    description: 'Transform your hiring with UmukoziHR\'s intelligent recruiting platform. Get qualified candidates in under 24 hours with AI-powered sourcing and smart ranking.',
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
