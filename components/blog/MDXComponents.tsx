import Image from 'next/image'
import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import type { CSSProperties, ReactNode } from 'react'
import {
  StatGrid,
  StatCard,
  ComparisonTable,
  ComparisonRow,
  ProgressCard,
  ProgressItem,
} from './StatGrid'

const styles: Record<string, CSSProperties> = {
  p: {
    fontSize: '1.125rem',
    lineHeight: 1.7,
    color: '#D1DADC',
    marginBottom: '1.5rem',
  },
  h2: {
    fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
    fontWeight: 700,
    color: '#FFFFFF',
    marginTop: '3rem',
    marginBottom: '1rem',
    lineHeight: 1.3,
    scrollMarginTop: '100px',
  },
  h3: {
    fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
    fontWeight: 600,
    color: '#FFFFFF',
    marginTop: '2rem',
    marginBottom: '0.75rem',
    lineHeight: 1.3,
    scrollMarginTop: '100px',
  },
  a: {
    color: '#81B5A1',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    transition: 'color 0.2s',
  },
  strong: {
    color: '#FFFFFF',
    fontWeight: 600,
  },
  ul: {
    fontSize: '1.125rem',
    lineHeight: 1.7,
    color: '#D1DADC',
    marginBottom: '1.5rem',
    paddingLeft: '1.5rem',
  },
  ol: {
    fontSize: '1.125rem',
    lineHeight: 1.7,
    color: '#D1DADC',
    marginBottom: '1.5rem',
    paddingLeft: '1.5rem',
  },
  li: {
    marginBottom: '0.5rem',
  },
  blockquote: {
    borderLeft: '4px solid #81B5A1',
    paddingLeft: '1.25rem',
    marginLeft: 0,
    marginBottom: '1.5rem',
    fontStyle: 'italic',
    color: '#9AABAE',
  },
  inlineCode: {
    background: 'rgba(129,181,161,0.15)',
    color: '#81B5A1',
    padding: '2px 6px',
    borderRadius: '4px',
    fontSize: '0.9em',
    fontFamily: 'monospace',
  },
  pre: {
    background: '#1A2123',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    padding: '1.25rem',
    overflow: 'auto',
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
    lineHeight: 1.6,
  },
  hr: {
    border: 'none',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    margin: '2.5rem 0',
  },
  tableWrapper: {
    overflowX: 'auto',
    marginBottom: '1.5rem',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontSize: '0.95rem',
  },
  th: {
    textAlign: 'left' as const,
    padding: '12px 16px',
    background: 'rgba(129,181,161,0.08)',
    borderBottom: '2px solid rgba(129,181,161,0.2)',
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: '0.85rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.03em',
  },
  td: {
    padding: '10px 16px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    color: '#D1DADC',
    fontSize: '0.95rem',
    lineHeight: 1.5,
    overflowWrap: 'break-word' as const,
  },
  trEven: {
    background: 'rgba(255,255,255,0.02)',
  },
  figcaption: {
    textAlign: 'center' as const,
    color: '#6B7C7F',
    fontSize: '0.85rem',
    marginTop: '0.75rem',
  },
}

let rowCounter = 0

export const mdxComponents: MDXComponentsType = {
  p: ({ children }) => <p style={styles.p}>{children}</p>,
  h2: ({ children, id }) => (
    <h2 id={id} style={styles.h2}>
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3 id={id} style={styles.h3}>
      {children}
    </h3>
  ),
  a: ({ href, children }) => (
    <a href={href} style={styles.a}>
      {children}
    </a>
  ),
  strong: ({ children }) => <strong style={styles.strong}>{children}</strong>,
  ul: ({ children }) => <ul style={styles.ul}>{children}</ul>,
  ol: ({ children }) => <ol style={styles.ol}>{children}</ol>,
  li: ({ children }) => <li style={styles.li}>{children}</li>,
  blockquote: ({ children }) => (
    <blockquote style={styles.blockquote}>{children}</blockquote>
  ),
  code: ({ children, className }) => {
    if (className) {
      return <code className={className}>{children}</code>
    }
    return <code style={styles.inlineCode}>{children}</code>
  },
  pre: ({ children }) => <pre style={styles.pre}>{children}</pre>,
  hr: () => <hr style={styles.hr} />,
  table: ({ children }) => {
    rowCounter = 0
    return (
      <div style={styles.tableWrapper}>
        <table style={styles.table}>{children}</table>
      </div>
    )
  },
  thead: ({ children }) => <thead>{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }: { children?: ReactNode }) => {
    const idx = rowCounter++
    const isEvenBody = idx > 0 && idx % 2 === 0
    return <tr style={isEvenBody ? styles.trEven : undefined}>{children}</tr>
  },
  th: ({ children }) => <th style={styles.th}>{children}</th>,
  td: ({ children }) => <td style={styles.td}>{children}</td>,
  img: ({ src, alt }) => {
    if (!src) return null
    return (
      <figure style={{ marginBottom: '1.5rem' }}>
        <Image
          src={src}
          alt={alt || ''}
          width={720}
          height={400}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '12px',
          }}
        />
        {alt && <figcaption style={styles.figcaption}>{alt}</figcaption>}
      </figure>
    )
  },
  // Custom metric components for blog posts
  StatGrid,
  StatCard,
  ComparisonTable,
  ComparisonRow,
  ProgressCard,
  ProgressItem,
}
