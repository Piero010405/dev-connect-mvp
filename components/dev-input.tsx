import type React from "react"
import { cn } from "@/lib/utils"

interface DevInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function DevInput({ className, ...props }: DevInputProps) {
  return (
    <input
      className={cn(
        "w-full px-4 py-2.5 rounded-lg",
        "bg-[#1A1A1A] text-[#D4D4D4]",
        "border border-[#2A2A2A] focus:border-[#0AFF9D]",
        "focus:outline-none focus:ring-2 focus:ring-[#0AFF9D]/30",
        "placeholder:text-[#888888]",
        "transition-all duration-200",
        "font-sans",
        className,
      )}
      {...props}
    />
  )
}
