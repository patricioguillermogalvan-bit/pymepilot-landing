import type { ReactNode } from 'react'

export function StatGrid({
  children,
  cols = 3,
}: {
  children: ReactNode
  cols?: number
}) {
  return (
    <>
      <style>{`
        .stat-grid { display: grid; grid-template-columns: repeat(${cols}, 1fr); gap: 16px; margin-bottom: 2rem; }
        @media (max-width: 768px) { .stat-grid { grid-template-columns: 1fr; } }
      `}</style>
      <div className="stat-grid">{children}</div>
    </>
  )
}

export function StatCard({
  value,
  label,
  detail,
  accent = true,
}: {
  value: string
  label: string
  detail?: string
  accent?: boolean
}) {
  return (
    <div
      style={{
        padding: '24px',
        borderRadius: '16px',
        background: accent
          ? 'linear-gradient(135deg, rgba(92,143,131,0.12) 0%, rgba(129,181,161,0.04) 100%)'
          : 'rgba(255,255,255,0.04)',
        border: accent
          ? '1px solid rgba(129,181,161,0.2)'
          : '1px solid rgba(255,255,255,0.08)',
        textAlign: 'center' as const,
      }}
    >
      <div
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
          fontWeight: 700,
          color: '#81B5A1',
          lineHeight: 1.2,
          marginBottom: '6px',
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          color: '#FFFFFF',
          marginBottom: detail ? '4px' : 0,
        }}
      >
        {label}
      </div>
      {detail && (
        <div style={{ fontSize: '0.8rem', color: '#6B7C7F' }}>{detail}</div>
      )}
    </div>
  )
}

export function ComparisonRow({
  label,
  before,
  after,
  change,
  positive = true,
}: {
  label: string
  before: string
  after: string
  change: string
  positive?: boolean
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto auto auto',
        gap: '16px',
        alignItems: 'center',
        padding: '16px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ fontSize: '0.95rem', color: '#D1DADC', lineHeight: 1.4 }}>
        {label}
      </div>
      <div
        style={{
          fontSize: '0.95rem',
          color: '#6B7C7F',
          textAlign: 'right' as const,
          minWidth: '80px',
        }}
      >
        {before}
      </div>
      <div
        style={{
          fontSize: '0.95rem',
          fontWeight: 600,
          color: '#FFFFFF',
          textAlign: 'right' as const,
          minWidth: '80px',
        }}
      >
        {after}
      </div>
      <div
        style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: positive ? '#81B5A1' : '#E17055',
          textAlign: 'right' as const,
          minWidth: '70px',
          background: positive
            ? 'rgba(129,181,161,0.1)'
            : 'rgba(225,112,85,0.1)',
          padding: '4px 10px',
          borderRadius: '6px',
        }}
      >
        {change}
      </div>
    </div>
  )
}

export function ComparisonTable({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{`
        .comparison-table { border-radius: 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); overflow: hidden; margin-bottom: 2rem; }
        .comparison-table__header { display: grid; grid-template-columns: 1fr auto auto auto; gap: 16px; padding: 14px 20px; background: rgba(129,181,161,0.06); border-bottom: 2px solid rgba(129,181,161,0.15); }
        .comparison-table__header span { font-size: 0.75rem; font-weight: 700; color: #6B7C7F; text-transform: uppercase; letter-spacing: 0.05em; }
        .comparison-table__header span:not(:first-child) { text-align: right; min-width: 70px; }
        .comparison-table__header span:nth-child(3) { min-width: 80px; }
        .comparison-table__header span:nth-child(2) { min-width: 80px; }
        @media (max-width: 640px) {
          .comparison-table__header, .comparison-table > div:not(.comparison-table__header) > div { grid-template-columns: 1fr !important; gap: 4px !important; text-align: left !important; }
          .comparison-table__header { display: none; }
          .comparison-table > div:not(.comparison-table__header) > div { padding: 16px 20px !important; display: flex; flex-wrap: wrap; gap: 8px !important; }
        }
      `}</style>
      <div className="comparison-table">
        <div className="comparison-table__header">
          <span>Métrica</span>
          <span>Antes</span>
          <span>Después</span>
          <span>Cambio</span>
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}

export function ProgressItem({
  label,
  value,
  percentage,
}: {
  label: string
  value: string
  percentage: number
}) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '8px',
        }}
      >
        <span style={{ fontSize: '0.9rem', color: '#D1DADC' }}>{label}</span>
        <span
          style={{ fontSize: '1rem', fontWeight: 700, color: '#81B5A1' }}
        >
          {value}
        </span>
      </div>
      <div
        style={{
          width: '100%',
          height: '8px',
          borderRadius: '4px',
          background: 'rgba(255,255,255,0.06)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${Math.min(percentage, 100)}%`,
            height: '100%',
            borderRadius: '4px',
            background:
              'linear-gradient(90deg, #5C8F83, #81B5A1)',
            transition: 'width 0.6s ease',
          }}
        />
      </div>
    </div>
  )
}

export function ProgressCard({
  title,
  children,
}: {
  title?: string
  children: ReactNode
}) {
  return (
    <div
      style={{
        padding: '28px',
        borderRadius: '16px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        marginBottom: '2rem',
      }}
    >
      {title && (
        <div
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#6B7C7F',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.05em',
            marginBottom: '20px',
          }}
        >
          {title}
        </div>
      )}
      {children}
    </div>
  )
}
