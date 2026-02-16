import type { PostMeta } from '@/lib/blog'

export default function BlogCard({ post }: { post: PostMeta }) {
  const date = new Date(post.frontmatter.date).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <a href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card__image">
        <div className="blog-card__image-placeholder">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            style={{ opacity: 0.3 }}
          >
            <rect
              x="4"
              y="8"
              width="40"
              height="32"
              rx="4"
              stroke="#81B5A1"
              strokeWidth="2"
            />
            <circle cx="16" cy="20" r="4" stroke="#81B5A1" strokeWidth="2" />
            <path
              d="M4 32l12-8 8 6 8-4 12 6"
              stroke="#81B5A1"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="blog-card__body">
        <div className="blog-card__tags">
          {post.frontmatter.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="blog-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="blog-card__title">{post.frontmatter.title}</h3>
        <p className="blog-card__excerpt">{post.frontmatter.description}</p>
        <div className="blog-card__meta">
          <span>{date}</span>
          <span className="blog-card__dot">·</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </a>
  )
}
