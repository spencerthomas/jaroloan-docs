import Link from "next/link"
import { ArrowRight, BookOpen, Code, FileText, Users, Shield, Workflow, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg">JaroLoan</span>
            <span className="rounded bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
              Docs
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/docs" className="text-foreground/60 hover:text-foreground">
              Documentation
            </Link>
            <Link href="/docs/technical/api-reference" className="text-foreground/60 hover:text-foreground">
              API Reference
            </Link>
            <Link href="/docs/tutorials" className="text-foreground/60 hover:text-foreground">
              Tutorials
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container flex flex-col items-center justify-center gap-6 py-24 text-center">
        <div className="flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
          <Zap className="h-4 w-4 text-primary" />
          <span>Modern Mortgage LOS Documentation</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          JaroLoan LOS
          <br />
          <span className="text-muted-foreground">Documentation</span>
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground">
          Everything you need to know about using JaroLoan, the modern mortgage
          loan origination system built for efficiency and compliance.
        </p>
        <div className="flex gap-4">
          <Link
            href="/docs/getting-started/introduction"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/docs/technical/api-reference"
            className="inline-flex items-center justify-center rounded-md border bg-background px-6 py-3 text-sm font-medium hover:bg-accent"
          >
            API Reference
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={BookOpen}
            title="Getting Started"
            description="Quick start guide and introduction to the system"
            href="/docs/getting-started/introduction"
          />
          <FeatureCard
            icon={Users}
            title="User Guides"
            description="Role-specific guides for LOs, processors, and UWs"
            href="/docs/user-guide/loan-officers"
          />
          <FeatureCard
            icon={Workflow}
            title="Workflows"
            description="Understanding the loan lifecycle and processes"
            href="/docs/workflows/loan-lifecycle"
          />
          <FeatureCard
            icon={FileText}
            title="Features"
            description="Pipeline, conditions, disclosures, and more"
            href="/docs/features/pipeline"
          />
          <FeatureCard
            icon={Code}
            title="API Reference"
            description="Complete REST API documentation"
            href="/docs/technical/api-reference"
          />
          <FeatureCard
            icon={Shield}
            title="Compliance"
            description="TRID, HMDA, and security documentation"
            href="/docs/compliance/trid"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} JaroLoan. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/docs/faq" className="hover:text-foreground">FAQ</Link>
            <a href="mailto:support@jaroloan.com" className="hover:text-foreground">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group relative rounded-lg border p-6 hover:border-foreground/50 hover:bg-accent/50 transition-all"
    >
      <Icon className="mb-4 h-10 w-10 text-primary" />
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <ArrowRight className="absolute bottom-6 right-6 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  )
}
