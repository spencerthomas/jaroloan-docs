"use client"

import Link from "next/link"
import { docsConfig, siteConfig } from "@/lib/docs.config"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Menu, Search, Moon, Sun, Github } from "lucide-react"
import { useState } from "react"

export function DocsHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Mobile menu button */}
        <button
          className="mr-2 px-2 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </button>

        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg">JaroLoan</span>
          <span className="rounded bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
            Docs
          </span>
        </Link>

        {/* Main nav */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {docsConfig.mainNav.map((item, index) => (
            <Link
              key={index}
              href={item.href || "#"}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                pathname?.startsWith(item.href || "")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Search */}
          <button className="inline-flex items-center rounded-md border bg-background px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent">
            <Search className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Search docs...</span>
            <kbd className="ml-2 hidden rounded bg-muted px-1.5 text-xs sm:inline">
              ⌘K
            </kbd>
          </button>

          {/* GitHub */}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-foreground/60 hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>

          {/* Theme toggle */}
          <button className="text-foreground/60 hover:text-foreground">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <div className="border-t p-4 md:hidden">
          <nav className="grid gap-2">
            {docsConfig.mainNav.map((item, index) => (
              <Link
                key={index}
                href={item.href || "#"}
                className="text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
