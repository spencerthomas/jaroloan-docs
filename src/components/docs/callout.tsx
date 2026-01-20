import { cn } from "@/lib/utils"
import { AlertCircle, Info, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react"

interface CalloutProps {
  type?: "info" | "warning" | "danger" | "success" | "tip"
  title?: string
  children: React.ReactNode
}

const icons = {
  info: Info,
  warning: AlertTriangle,
  danger: AlertCircle,
  success: CheckCircle,
  tip: Lightbulb,
}

const styles = {
  info: "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-300",
  warning: "border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300",
  danger: "border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-300",
  success: "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-300",
  tip: "border-purple-500/50 bg-purple-500/10 text-purple-700 dark:text-purple-300",
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const Icon = icons[type]

  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-lg border p-4",
        styles[type]
      )}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <div className="flex-1">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        <div className="text-sm [&>p]:leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
