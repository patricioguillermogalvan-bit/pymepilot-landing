'use client'

import { useEffect, useState } from 'react'
import type { TOCItem } from '@/lib/blog'

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-100px 0px -66% 0px', threshold: 0 }
    )

    headings.forEach((heading) => observer.observe(heading))
    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <>
      <style>{`
        .toc { position: sticky; top: 120px; }
        .toc-title { font-size: 0.8rem; font-weight: 700; color: #6B7C7F; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; }
        .toc-list { list-style: none; padding: 0; margin: 0; border-left: 2px solid rgba(255,255,255,0.06); }
        .toc-item { padding: 6px 0 6px 16px; border-left: 2px solid transparent; margin-left: -2px; transition: all 0.2s; }
        .toc-item.active { border-left-color: #81B5A1; }
        .toc-link { font-size: 0.85rem; color: #6B7C7F; text-decoration: none; transition: color 0.2s; display: block; line-height: 1.4; }
        .toc-item.active .toc-link { color: #81B5A1; }
        .toc-link:hover { color: #D1DADC; }
        .toc-toggle { display: none; width: 100%; padding: 12px 16px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #9AABAE; font-size: 0.85rem; font-weight: 600; cursor: pointer; font-family: inherit; text-align: left; }
        .toc-toggle:hover { border-color: rgba(129,181,161,0.3); }
        .toc-toggle-arrow { float: right; transition: transform 0.2s; }
        .toc-toggle-arrow.open { transform: rotate(180deg); }
        .toc-content { display: block; }
        @media (max-width: 1024px) {
          .toc { position: static; margin-bottom: 32px; }
          .toc-toggle { display: block; margin-bottom: 12px; }
          .toc-content { display: none; }
          .toc-content.open { display: block; }
        }
      `}</style>
      <nav className="toc" aria-label="Tabla de contenidos">
        <button
          className="toc-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          Tabla de contenidos
          <span className={`toc-toggle-arrow${isOpen ? ' open' : ''}`}>
            ▼
          </span>
        </button>
        <div className={`toc-content${isOpen ? ' open' : ''}`}>
          <p className="toc-title">En este artículo</p>
          <ul className="toc-list">
            {items.map((item) => (
              <li
                key={item.id}
                className={`toc-item${activeId === item.id ? ' active' : ''}`}
              >
                <a className="toc-link" href={`#${item.id}`}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
