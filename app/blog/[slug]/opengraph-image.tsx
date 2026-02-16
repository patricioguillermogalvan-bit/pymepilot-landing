import { ImageResponse } from 'next/og'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  const title = post?.frontmatter.title ?? 'Blog | PymePilot'
  const description = post?.frontmatter.description ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #1A2123 0%, #252E30 50%, #1A2123 100%)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #5C8F83, #81B5A1, #5C8F83)',
            display: 'flex',
          }}
        />

        {/* Logo area */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '40px',
              height: '40px',
              gap: '2px',
            }}
          >
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '4px',
                background: '#5C8F83',
                display: 'flex',
              }}
            />
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '4px',
                background: '#81B5A1',
                display: 'flex',
              }}
            />
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '4px',
                background: '#293E40',
                display: 'flex',
              }}
            />
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '4px',
                background: '#3D6362',
                display: 'flex',
              }}
            />
          </div>
          <span
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#FFFFFF',
              display: 'flex',
            }}
          >
            PymePilot
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? '42px' : '52px',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '24px',
            display: 'flex',
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description && (
          <div
            style={{
              fontSize: '22px',
              color: '#9AABAE',
              lineHeight: 1.5,
              maxWidth: '900px',
              display: 'flex',
            }}
          >
            {description.length > 140
              ? description.slice(0, 140) + '...'
              : description}
          </div>
        )}

        {/* Bottom gradient glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-50px',
            width: '400px',
            height: '400px',
            background:
              'radial-gradient(circle, rgba(129,181,161,0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
