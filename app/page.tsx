import LandingPageClient from "./_components/LandingPageClient";
import { Metadata } from 'next';

export const dynamic = "force-dynamic"; // optional, avoids static prerendering

export const metadata: Metadata = {
  title: "UmukoziHR - AI-Powered HR Solutions | Get Qualified Candidates in Under 1 Hour",
  description: "Transform your hiring with UmukoziHR's intelligent recruiting platform. AI-powered candidate sourcing, smart ranking, automated outreach. Connect with top HR talent faster than ever. Start your free trial today.",
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