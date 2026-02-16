import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

export interface PostFrontmatter {
  title: string
  description: string
  date: string
  tags: string[]
  image: string
  imageAlt: string
  author: string
  draft?: boolean
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
  readingTime: string
}

export interface PostMeta {
  slug: string
  frontmatter: PostFrontmatter
  readingTime: string
}

export interface TOCItem {
  id: string
  text: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return []

  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx'))

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const filePath = path.join(postsDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)
      const frontmatter = data as PostFrontmatter

      if (frontmatter.draft) return null

      return {
        slug,
        frontmatter,
        readingTime: readingTime(content).text.replace('read', 'lectura'),
      }
    })
    .filter((post): post is PostMeta => post !== null)

  posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  )

  return posts
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
    readingTime: readingTime(content).text.replace('read', 'lectura'),
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []

  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getRelatedPosts(
  currentSlug: string,
  currentTags: string[],
  limit = 3
): PostMeta[] {
  const allPosts = getAllPosts()

  const scored = allPosts
    .filter((p) => p.slug !== currentSlug)
    .map((post) => {
      const shared = post.frontmatter.tags.filter((t) =>
        currentTags.includes(t)
      ).length
      return { post, score: shared }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, limit).map((item) => item.post)
}

export function extractTOC(content: string): TOCItem[] {
  const headingRegex = /^## (.+)$/gm
  const items: TOCItem[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1].trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
    items.push({ id, text })
  }

  return items
}
