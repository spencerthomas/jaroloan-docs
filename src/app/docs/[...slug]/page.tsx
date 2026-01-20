import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getDocBySlug, generateToc } from "@/lib/mdx/mdx-utils"
import { mdxComponents } from "@/components/docs/mdx-components"
import { TableOfContents } from "@/components/docs/toc"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkGfm from "remark-gfm"

interface DocPageProps {
  params: Promise<{
    slug: string[]
  }>
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params
  const doc = getDocBySlug(slug)

  if (!doc) {
    notFound()
  }

  const toc = generateToc(doc.content)

  return (
    <>
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4">
          <h1 className="text-4xl font-bold tracking-tight">
            {doc.meta.title || slug[slug.length - 1]}
          </h1>
          {doc.meta.description && (
            <p className="mt-2 text-lg text-muted-foreground">
              {doc.meta.description}
            </p>
          )}
        </div>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <MDXRemote
            source={doc.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "wrap" }],
                ],
              },
            }}
          />
        </div>
      </div>
      <TableOfContents items={toc} />
    </>
  )
}
