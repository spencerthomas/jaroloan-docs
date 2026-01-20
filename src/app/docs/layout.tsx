import { DocsHeader } from "@/components/docs/header"
import { DocsSidebar } from "@/components/docs/sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <DocsHeader />
      <div className="container flex-1">
        <div className="flex-1 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <DocsSidebar />
          <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
