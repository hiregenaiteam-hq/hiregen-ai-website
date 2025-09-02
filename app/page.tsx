import LandingPageClient from "./_components/LandingPageClient";
import { Metadata } from 'next';

export const dynamic = "force-dynamic"; // optional, avoids static prerendering

export const metadata: Metadata = {
  title: "UmukoziHR - AI-Powered HR Solutions | Get Qualified Candidates in Under 1 Hour",
  description: "Transform your hiring with UmukoziHR's intelligent recruiting platform. AI-powered candidate sourcing, smart ranking, automated outreach. Connect with top HR talent faster than ever. Start your free trial today.",
  keywords: [
    "UmukoziHR", "Umukozi HR", "Umukozi", "AI recruiting", "HR solutions", "talent acquisition",
    "hiring platform", "AI-powered hiring", "candidate sourcing", "HR recruitment",
    "intelligent recruiting", "automated hiring", "HR technology", "recruitment AI",
    "talent sourcing", "HR professionals", "hiring automation", "recruitment platform",
    "AI candidate ranking", "smart hiring", "HR talent pool", "recruitment software",
    "get qualified candidates", "hire HR professionals", "AI HR solutions", "automated outreach"
  ],
  openGraph: {
    title: "UmukoziHR - AI-Powered HR Solutions | Get Qualified Candidates in Under 1 Hour",
    description: "Transform your hiring with UmukoziHR's intelligent recruiting platform. AI-powered candidate sourcing, smart ranking, automated outreach. Connect with top HR talent faster than ever.",
    type: "website",
    url: "https://umukozihr-ai.vercel.app",
    siteName: "UmukoziHR",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "UmukoziHR - AI-Powered HR Solutions | Get Qualified Candidates in Under 1 Hour",
    description: "Transform your hiring with AI-powered candidate sourcing, smart ranking, and automated outreach. Connect with top HR talent faster than ever.",
    creator: "@UmukoziHR",
  },
  alternates: {
    canonical: "https://umukozihr-ai.vercel.app",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://umukozihr-ai.vercel.app/#organization",
      "name": "UmukoziHR",
      "alternateName": ["Umukozi HR", "Umukozi"],
      "url": "https://umukozihr-ai.vercel.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://umukozihr-ai.vercel.app/umukozi-logo.png",
        "width": 400,
        "height": 400
      },
      "description": "AI-powered HR solutions platform that transforms hiring processes with intelligent recruiting, candidate sourcing, and automated outreach.",
      "foundingDate": "2024",
      "industry": "Human Resources Technology",
      "knowsAbout": [
        "AI Recruiting",
        "Talent Acquisition",
        "HR Technology",
        "Candidate Sourcing",
        "Automated Hiring",
        "HR Solutions"
      ],
      "sameAs": [
        "https://linkedin.com/company/umukozihr",
        "https://twitter.com/umukozihr"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does UmukoziHR find HR professionals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our AI searches across millions of HR professional profiles from LinkedIn, industry networks, and professional platforms to find candidates that match your specific HR department requirements and company culture."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can HR teams see qualified candidates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most HR teams see their first qualified HR candidates within 1 hour of posting role requirements. Our AI specifically understands HR competencies and can quickly identify professionals with the right mix of HR expertise and cultural fit."
          }
        },
        {
          "@type": "Question",
          "name": "What HR-specific features are included in the Growth Plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlimited HR talent searches, AI-powered candidate ranking for HR roles, automated outreach to HR professionals, built-in HR competency assessments, interview scheduling tools, and ATS integration for seamless HR workflow management."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is the AI scoring for HR candidates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our AI achieves 85%+ accuracy in predicting HR candidate fit based on HR expertise, people management skills, compliance knowledge, and cultural alignment factors specific to HR departments."
          }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://umukozihr-ai.vercel.app/#website",
      "url": "https://umukozihr-ai.vercel.app",
      "name": "UmukoziHR - AI-Powered HR Solutions",
      "description": "Transform your hiring with UmukoziHR's intelligent recruiting platform. Connect with top talent faster using AI-powered candidate sourcing and assessment tools.",
      "publisher": {
        "@id": "https://umukozihr-ai.vercel.app/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://umukozihr-ai.vercel.app/?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://umukozihr-ai.vercel.app/#webpage",
      "url": "https://umukozihr-ai.vercel.app",
      "name": "UmukoziHR - HR powered by AI Agents | Automate Your entire Hiring Process with AI Agents",
      "isPartOf": {
        "@id": "https://umukozihr-ai.vercel.app/#website"
      },
      "about": {
        "@id": "https://umukozihr-ai.vercel.app/#organization"
      },
      "description": "Transform your hiring with UmukoziHR's intelligent recruiting platform. Get qualified HR candidates in under 1 hour with AI-powered sourcing, smart ranking, and automated outreach.",
      "breadcrumb": {
        "@id": "https://umukozihr-ai.vercel.app/#breadcrumb"
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "UmukoziHR Platform",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Human Resources",
      "operatingSystem": "Web Browser",
      "description": "AI-powered HR recruiting platform with candidate sourcing, smart ranking, automated outreach, and built-in assessments.",
      "offers": [
        {
          "@type": "Offer",
          "name": "Startup Plan",
          "price": "299",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "299",
            "priceCurrency": "USD",
            "billingIncrement": "P1M"
          },
          "description": "20 AI-powered searches per month with basic candidate profiles"
        },
        {
          "@type": "Offer",
          "name": "Scale Plan",
          "price": "399",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "399",
            "priceCurrency": "USD",
            "billingIncrement": "P1M"
          },
          "description": "50 AI-powered searches per month with full candidate profiles and AI insights"
        }
      ],
      "featureList": [
        "AI-powered candidate sourcing",
        "Smart candidate ranking",
        "Automated outreach",
        "Built-in HR assessments",
        "One-click scheduling",
        "Real-time scoring updates"
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingPageClient />
    </>
  );
}