import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface UmukoziLogoProps {
  className?: string
  width?: number
  height?: number
  responsive?: boolean
}

export function UmukoziLogo({ 
  className = "", 
  width = 140, 
  height = 40, 
  responsive = true
}: UmukoziLogoProps) {
  const [imageError, setImageError] = React.useState(false)

  if (imageError) {
    return <UmukoziLogoFallback className={className} />
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/umukozihr-logo-flat.svg"
        alt="UmukoziHR - AI-Powered HR Solutions"
        width={width}
        height={height}
        className={responsive ? "w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-auto max-w-full" : "h-auto max-w-full"}
        priority
        onError={() => setImageError(true)}
      />
    </Link>
  )
}

// Fallback text-based logo component for error states
export function UmukoziLogoFallback({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="flex items-center space-x-1 sm:space-x-2">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-umukozi-orange rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xs sm:text-sm">U</span>
        </div>
        <span className="text-lg sm:text-xl font-bold text-umukozi-teal">UmukoziHR</span>
      </div>
    </Link>
  )
}