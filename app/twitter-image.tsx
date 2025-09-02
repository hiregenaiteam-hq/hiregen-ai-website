import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'UmukoziHR - AI-Powered HR Solutions'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          backgroundImage: 'linear-gradient(135deg, #f97316 0%, #0891b2 100%)',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(8, 145, 178, 0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px',
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '30px',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#f97316',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px',
              }}
            >
              <span
                style={{
                  color: 'white',
                  fontSize: '30px',
                  fontWeight: 'bold',
                }}
              >
                U
              </span>
            </div>
            <span
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#0891b2',
              }}
            >
              UmukoziHR
            </span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '20px',
              lineHeight: 1.1,
              maxWidth: '800px',
            }}
          >
            AI-Powered HR Solutions
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '28px',
              color: '#4b5563',
              marginBottom: '30px',
              maxWidth: '700px',
              lineHeight: 1.3,
            }}
          >
            Get qualified candidates in under 24 hours
          </p>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '30px',
              fontSize: '20px',
              color: '#1f2937',
              fontWeight: '600',
            }}
          >
            <span>🤖 AI Sourcing</span>
            <span>⚡ Smart Ranking</span>
            <span>📧 Auto Outreach</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}