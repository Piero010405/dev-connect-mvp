import type React from "react"
import { cn } from "@/lib/utils"

interface DevButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export function DevButton({ variant = "primary", size = "md", className, children, ...props }: DevButtonProps) {
  const baseStyles = "font-medium transition-all duration-200 rounded-lg font-sans cursor-pointer"

  const variants = {
    primary: "bg-[#0AFF9D] text-[#0A0A0A] hover:bg-[#08E88A] hover:shadow-lg hover:shadow-[#0AFF9D]/30",
    secondary: "bg-[#1A1A1A] text-[#D4D4D4] border border-[#2A2A2A] hover:border-[#0AFF9D] hover:bg-[#2A2A2A]",
    ghost: "text-[#D4D4D4] hover:bg-[#1A1A1A] hover:text-[#0AFF9D]",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
