/**
 * MDX Utilities for processing documentation content
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface DocMeta {
  title: string
  description?: string
  published?: boolean
  date?: string
  author?: string
  tags?: string[]
  [key: string]: unknown
}

export interface Doc {
  slug: string
  slugAsParams: string
  content: string
  meta: DocMeta
}

/**
 * Get all docs paths recursively
 */
export function getAllDocPaths(dir: string = CONTENT_DIR): string[] {
  if (!fs.existsSync(dir)) return []

  const files: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...getAllDocPaths(fullPath))
    } else if (entry.name.endsWith('.mdx')) {
      files.push(fullPath)
    }
  }

  return files
}

/**
 * Get a doc by slug
 */
export function getDocBySlug(slug: string[]): Doc | null {
  const docPath = path.join(CONTENT_DIR, ...slug) + '.mdx'

  if (!fs.existsSync(docPath)) {
    // Try index.mdx in directory
    const indexPath = path.join(CONTENT_DIR, ...slug, 'index.mdx')
    if (!fs.existsSync(indexPath)) {
      return null
    }
    return parseDoc(indexPath, slug)
  }

  return parseDoc(docPath, slug)
}

/**
 * Parse a doc file
 */
function parseDoc(filePath: string, slug: string[]): Doc {
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  return {
    slug: '/' + slug.join('/'),
    slugAsParams: slug.join('/'),
    content,
    meta: data as DocMeta,
  }
}

/**
 * Get all docs for a category
 */
export function getDocsForCategory(category: string): Doc[] {
  const categoryPath = path.join(CONTENT_DIR, category)
  if (!fs.existsSync(categoryPath)) return []

  const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.mdx'))

  return files.map(file => {
    const slug = [category, file.replace('.mdx', '')]
    return parseDoc(path.join(categoryPath, file), slug)
  })
}

/**
 * Generate table of contents from MDX content
 */
export function generateToc(content: string): { id: string; title: string; level: number }[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm
  const toc: { id: string; title: string; level: number }[] = []

  let match
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const title = match[2].trim()
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    toc.push({ id, title, level })
  }

  return toc
}
