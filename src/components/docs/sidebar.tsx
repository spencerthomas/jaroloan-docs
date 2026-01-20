"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { docsConfig, type NavItem } from "@/lib/docs.config"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

interface SidebarNavProps {
  items: NavItem[]
}

export function DocsSidebar() {
  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r md:sticky md:block">
      <div className="h-full py-6 pr-6 lg:py-8">
        <SidebarNav items={docsConfig.sidebarNav} />
      </div>
    </aside>
  )
}

function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className="grid gap-2 px-4">
      {items.map((section, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-foreground">
            {section.title}
          </h4>
          {section.items && (
            <div className="grid gap-1 pl-2">
              {section.items.map((item, itemIndex) => (
                <SidebarNavItem
                  key={itemIndex}
                  item={item}
                  pathname={pathname}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

function SidebarNavItem({
  item,
  pathname,
}: {
  item: NavItem
  pathname: string
}) {
  const isActive = pathname === item.href
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = item.items && item.items.length > 0

  if (hasChildren) {
    return (
      <div className="flex flex-col gap-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
            isActive && "bg-accent text-accent-foreground"
          )}
        >
          <span>{item.title}</span>
          <ChevronRight
            className={cn(
              "h-4 w-4 transition-transform",
              isOpen && "rotate-90"
            )}
          />
        </button>
        {isOpen && (
          <div className="ml-3 border-l pl-2">
            {item.items!.map((child, index) => (
              <SidebarNavItem key={index} item={child} pathname={pathname} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href || "#"}
      className={cn(
        "block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        isActive && "bg-accent font-medium text-accent-foreground"
      )}
    >
      {item.title}
      {item.label && (
        <span className="ml-2 rounded-md bg-primary/10 px-1.5 py-0.5 text-xs text-primary">
          {item.label}
        </span>
      )}
    </Link>
  )
}
