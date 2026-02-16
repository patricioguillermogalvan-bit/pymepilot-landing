import type { PostMeta } from '@/lib/blog'
import BlogCard from './BlogCard'

export default function RelatedPosts({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null

  return (
    <section className="related-posts">
      <h2 className="related-posts__title">Artículos relacionados</h2>
      <div className="related-posts__grid">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
