"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  if (!items.length) return null

  return (
    <aside className="hidden text-sm xl:block">
      <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] pt-4">
        <div className="space-y-2">
          <p className="font-medium">On This Page</p>
          <nav className="grid gap-1">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "block py-1 text-muted-foreground hover:text-foreground transition-colors",
                  item.level === 3 && "pl-4",
                  item.level === 4 && "pl-8",
                  activeId === item.id && "text-foreground font-medium"
                )}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
}
