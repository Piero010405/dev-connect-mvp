"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", label: "Home" },
    { href: "/dashboard/evaluations", label: "Evaluaciones Técnicas" },
    { href: "/dashboard/profile", label: "Mi Perfil" },
  ]

  return (
    <aside className="w-64 bg-[#1A1A1A] border-r border-[#2A2A2A] h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#2A2A2A]">
        <h1 className="text-2xl font-bold text-[#0AFF9D] font-sans tracking-tight">DevConnect</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "block px-4 py-2.5 rounded-lg transition-all duration-200 font-sans text-sm font-medium",
              pathname === item.href
                ? "bg-[#0AFF9D] text-[#0A0A0A]"
                : "text-[#D4D4D4] hover:bg-[#2A2A2A] hover:text-[#0AFF9D]",
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#2A2A2A]">
        <button className="w-full px-4 py-2.5 rounded-lg bg-[#2A2A2A] text-[#D4D4D4] hover:bg-[#333333] transition-all font-sans text-sm font-medium">
          Cerrar Sesión
        </button>
      </div>
    </aside>
  )
}
