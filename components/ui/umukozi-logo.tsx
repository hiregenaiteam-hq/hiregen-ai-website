import React from 'react'

interface UmukoziLogoProps {
  className?: string
  width?: number
  height?: number
}

export const UmukoziLogo: React.FC<UmukoziLogoProps> = ({ 
  className = "", 
  width = 140, 
  height = 40 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="UmukoziHR - AI-Powered HR Solutions"
    >
      {/* Orange circle background */}
      <circle cx="20" cy="20" r="18" fill="#FF7A00" />
      
      {/* Teal accent elements */}
      <path
        d="M8 20 L20 8 L32 20 L20 32 Z"
        fill="#1E5A5A"
        opacity="0.8"
      />
      
      {/* White "U" letter in center */}
      <path
        d="M14 12 L14 20 Q14 24 18 24 L22 24 Q26 24 26 20 L26 12"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Company name text */}
      <text
        x="45"
        y="16"
        fill="#1E5A5A"
        fontSize="14"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        UmukoziHR
      </text>
      
      {/* Tagline */}
      <text
        x="45"
        y="28"
        fill="#666666"
        fontSize="8"
        fontFamily="Inter, sans-serif"
      >
        AI-Powered HR Solutions
      </text>
    </svg>
  )
}

export default UmukoziLogo