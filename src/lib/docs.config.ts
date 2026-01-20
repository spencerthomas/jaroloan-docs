/**
 * Documentation Site Navigation Configuration
 *
 * This file defines the sidebar navigation structure for the docs site.
 */

export interface NavItem {
  title: string
  href?: string
  items?: NavItem[]
  label?: string
}

export interface DocsConfig {
  mainNav: NavItem[]
  sidebarNav: NavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    { title: "Documentation", href: "/docs" },
    { title: "API Reference", href: "/docs/technical/api-reference" },
    { title: "Tutorials", href: "/docs/tutorials" },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", href: "/docs/getting-started/introduction" },
        { title: "Quick Start", href: "/docs/getting-started/quick-start" },
        { title: "Installation", href: "/docs/getting-started/installation" },
      ],
    },
    {
      title: "User Guides",
      items: [
        { title: "Loan Officers", href: "/docs/user-guide/loan-officers" },
        { title: "Processors", href: "/docs/user-guide/processors" },
        { title: "Underwriters", href: "/docs/user-guide/underwriters" },
        { title: "Closers", href: "/docs/user-guide/closers" },
        { title: "Administrators", href: "/docs/user-guide/admins" },
      ],
    },
    {
      title: "Workflows",
      items: [
        { title: "Loan Lifecycle", href: "/docs/workflows/loan-lifecycle" },
        { title: "Underwriting Flow", href: "/docs/workflows/underwriting-flow" },
        { title: "Closing Flow", href: "/docs/workflows/closing-flow" },
        { title: "Document Management", href: "/docs/workflows/document-management" },
      ],
    },
    {
      title: "Features",
      items: [
        { title: "Pipeline", href: "/docs/features/pipeline" },
        { title: "Conditions", href: "/docs/features/conditions" },
        { title: "Disclosures", href: "/docs/features/disclosures" },
        { title: "Verifications", href: "/docs/features/verifications" },
        { title: "Documents", href: "/docs/features/documents" },
        { title: "Audit Trail", href: "/docs/features/audit-trail" },
      ],
    },
    {
      title: "Technical",
      items: [
        { title: "Architecture", href: "/docs/technical/architecture" },
        { title: "API Reference", href: "/docs/technical/api-reference" },
        { title: "Database Schema", href: "/docs/technical/database" },
        { title: "Integrations", href: "/docs/technical/integrations" },
      ],
    },
    {
      title: "Compliance",
      items: [
        { title: "TRID", href: "/docs/compliance/trid" },
        { title: "HMDA", href: "/docs/compliance/hmda" },
        { title: "Security", href: "/docs/compliance/security" },
      ],
    },
    {
      title: "Tutorials",
      items: [
        { title: "Create First Loan", href: "/docs/tutorials/create-first-loan" },
        { title: "Process to Close", href: "/docs/tutorials/process-to-close" },
        { title: "Manage Conditions", href: "/docs/tutorials/manage-conditions" },
      ],
    },
    {
      title: "Resources",
      items: [
        { title: "FAQ", href: "/docs/faq" },
        { title: "Changelog", href: "/docs/changelog" },
      ],
    },
  ],
}

export const siteConfig = {
  name: "JaroLoan LOS Documentation",
  description: "Modern mortgage loan origination system documentation",
  url: "https://docs.jaroloan.com",
  links: {
    github: "https://github.com/jaroloan/los",
    support: "mailto:support@jaroloan.com",
  },
}
