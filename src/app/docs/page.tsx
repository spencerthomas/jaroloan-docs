import Link from "next/link"
import { ArrowRight, BookOpen, Code, FileText, Users, Shield, Workflow } from "lucide-react"

const features = [
  {
    title: "Getting Started",
    description: "Learn the basics and get up and running quickly",
    href: "/docs/getting-started/introduction",
    icon: BookOpen,
  },
  {
    title: "User Guides",
    description: "Role-specific guides for LOs, processors, UWs, and more",
    href: "/docs/user-guide/loan-officers",
    icon: Users,
  },
  {
    title: "Workflows",
    description: "Understand the loan lifecycle and key processes",
    href: "/docs/workflows/loan-lifecycle",
    icon: Workflow,
  },
  {
    title: "Features",
    description: "Explore pipeline, conditions, disclosures, and more",
    href: "/docs/features/pipeline",
    icon: FileText,
  },
  {
    title: "Technical Docs",
    description: "Architecture, API reference, and database schema",
    href: "/docs/technical/architecture",
    icon: Code,
  },
  {
    title: "Compliance",
    description: "TRID, HMDA, and security documentation",
    href: "/docs/compliance/trid",
    icon: Shield,
  },
]

export default function DocsPage() {
  return (
    <div className="mx-auto w-full min-w-0">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to the JaroLoan LOS documentation. Learn how to use our modern
          mortgage loan origination system.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Link
              key={feature.href}
              href={feature.href}
              className="group relative rounded-lg border p-6 hover:border-foreground/50 hover:bg-accent transition-colors"
            >
              <Icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
              <ArrowRight className="absolute bottom-6 right-6 h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
          )
        })}
      </div>

      <div className="mt-12 rounded-lg border bg-muted/50 p-6">
        <h2 className="mb-2 text-xl font-semibold">Need Help?</h2>
        <p className="text-muted-foreground">
          Can&apos;t find what you&apos;re looking for? Check out our{" "}
          <Link href="/docs/faq" className="font-medium underline underline-offset-4">
            FAQ
          </Link>{" "}
          or{" "}
          <a
            href="mailto:support@jaroloan.com"
            className="font-medium underline underline-offset-4"
          >
            contact support
          </a>
          .
        </p>
      </div>
    </div>
  )
}
