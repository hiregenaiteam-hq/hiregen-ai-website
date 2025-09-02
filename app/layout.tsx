import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UmukoziHR - AI-Powered HR Solutions",
  description: "Transform your hiring with UmukoziHR's intelligent recruiting platform. Connect with top talent faster using AI-powered candidate sourcing and assessment tools.",
  generator: 'UmukoziHR',
  keywords: ['HR solutions', 'AI recruiting', 'talent acquisition', 'hiring platform', 'UmukoziHR'],
  authors: [{ name: 'UmukoziHR' }],
  creator: 'UmukoziHR',
  publisher: 'UmukoziHR',
  openGraph: {
    title: 'UmukoziHR - AI-Powered HR Solutions',
    description: 'Transform your hiring with UmukoziHR\'s intelligent recruiting platform. Connect with top talent faster using AI-powered candidate sourcing and assessment tools.',
    siteName: 'UmukoziHR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UmukoziHR - AI-Powered HR Solutions',
    description: 'Transform your hiring with UmukoziHR\'s intelligent recruiting platform. Connect with top talent faster using AI-powered candidate sourcing and assessment tools.',
    creator: '@UmukoziHR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
