"use client"

import type React from "react"

import { useState } from "react"
import { DevButton } from "@/components/dev-button"
import { DevInput } from "@/components/dev-input"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      window.location.href = "/dashboard"
      setIsLoading(false)
    }, 600)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#0AFF9D] mb-2 font-sans tracking-tight">DevConnect</h1>
          <p className="text-[#888888] font-sans">Plataforma de Evaluaciones Técnicas</p>
        </div>

        {/* Login Form */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#D4D4D4] mb-2 font-sans">Correo Electrónico</label>
              <DevInput
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#D4D4D4] mb-2 font-sans">Contraseña</label>
              <DevInput
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <DevButton type="submit" variant="primary" size="lg" className="w-full" disabled={isLoading}>
              {isLoading ? "Iniciando sesión..." : "Inicia Sesión"}
            </DevButton>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#888888] text-sm font-sans">
              ¿No tienes cuenta? <span className="text-[#0AFF9D] cursor-pointer hover:underline">Regístrate aquí</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-[#666666] text-xs mt-6 font-sans">
          © 2025 DevConnect. Todos los derechos reservados.
        </p>
      </div>
    </div>
  )
}
