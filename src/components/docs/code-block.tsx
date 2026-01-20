"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  children: React.ReactNode
  className?: string
  language?: string
  title?: string
}

export function CodeBlock({
  children,
  className,
  language,
  title,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)
  const preRef = React.useRef<HTMLPreElement>(null)

  const copyToClipboard = React.useCallback(() => {
    if (preRef.current) {
      const text = preRef.current.textContent || ""
      navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [])

  return (
    <div className="relative group my-4">
      {title && (
        <div className="flex items-center justify-between rounded-t-lg border border-b-0 bg-muted px-4 py-2">
          <span className="text-sm font-medium text-muted-foreground">
            {title}
          </span>
          {language && (
            <span className="text-xs text-muted-foreground">{language}</span>
          )}
        </div>
      )}
      <div className="relative">
        <pre
          ref={preRef}
          className={cn(
            "overflow-x-auto rounded-lg border bg-zinc-950 p-4 text-sm",
            title && "rounded-t-none",
            className
          )}
        >
          {children}
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-md border bg-background opacity-0 transition-opacity group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  )
}

// For inline code
export function InlineCode({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
    >
      {children}
    </code>
  )
}
