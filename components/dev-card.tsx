import type React from "react"
import { cn } from "@/lib/utils"

interface DevCardProps {
  children: React.ReactNode
  className?: string
  highlighted?: boolean
}

export function DevCard({ children, className, highlighted = false }: DevCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-6 transition-all duration-200",
        highlighted
          ? "bg-[#1A1A1A] border-2 border-[#0AFF9D] shadow-lg shadow-[#0AFF9D]/20 hover:shadow-[#0AFF9D]/40"
          : "bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#0AFF9D]/50 hover:bg-[#242424]",
        className,
      )}
    >
      {children}
    </div>
  )
}
