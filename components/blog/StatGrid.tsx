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
    <div className="comparison-row">
      <div className="comparison-row__label">
        {label}
      </div>
      <div className="comparison-row__before">
        {before}
      </div>
      <div className="comparison-row__after">
        {after}
      </div>
      <div
        className="comparison-row__change"
        style={{
          color: positive ? '#81B5A1' : '#E17055',
          background: positive
            ? 'rgba(129,181,161,0.1)'
            : 'rgba(225,112,85,0.1)',
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
        .comparison-row { display: grid; grid-template-columns: 1fr auto auto auto; gap: 16px; align-items: center; padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .comparison-row__label { font-size: 0.95rem; color: #D1DADC; line-height: 1.4; }
        .comparison-row__before { font-size: 0.95rem; color: #6B7C7F; text-align: right; min-width: 80px; }
        .comparison-row__after { font-size: 0.95rem; font-weight: 600; color: #FFFFFF; text-align: right; min-width: 80px; }
        .comparison-row__change { font-size: 0.85rem; font-weight: 700; text-align: right; min-width: 70px; padding: 4px 10px; border-radius: 6px; }
        @media (max-width: 640px) {
          .comparison-table__header { display: none; }
          .comparison-row { display: flex; flex-wrap: wrap; gap: 8px; padding: 16px; }
          .comparison-row__label { width: 100%; font-weight: 600; }
          .comparison-row__before, .comparison-row__after, .comparison-row__change { text-align: left; min-width: auto; font-size: 0.85rem; }
          .comparison-row__before::before { content: 'Antes: '; color: #6B7C7F; font-size: 0.75rem; }
          .comparison-row__after::before { content: 'Después: '; color: #6B7C7F; font-size: 0.75rem; }
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
