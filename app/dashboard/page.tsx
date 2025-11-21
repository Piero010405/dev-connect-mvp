"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { DevCard } from "@/components/dev-card"
import { DevButton } from "@/components/dev-button"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#D4D4D4] mb-2 font-sans">Bienvenido a DevConnect</h2>
          <p className="text-[#888888] font-sans">Mejora tus habilidades técnicas con evaluaciones desafiantes</p>
        </div>

        {/* Welcome Card */}
        <DevCard highlighted className="mb-8 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#0AFF9D] font-sans mb-2">Bienvenido a DevConnect</h3>
              <p className="text-[#D4D4D4] font-sans mb-4">
                Comienza tu viaje para convertirte en un desarrollador excepcional. Realiza evaluaciones técnicas,
                mejora tu perfil y conecta con la comunidad.
              </p>
              <DevButton variant="primary" size="lg">
                Ver Tutorial
              </DevButton>
            </div>
            <div className="text-6xl opacity-10 font-sans">{"<>"}</div>
          </div>
        </DevCard>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Comenzar Evaluación */}
          <DevCard className="cursor-pointer hover:shadow-[0_0_20px_rgba(10,255,157,0.1)] transition-all">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-[#0AFF9D] font-sans">→</div>
              <h4 className="text-xl font-bold text-[#D4D4D4] font-sans">Comenzar Evaluación</h4>
              <p className="text-[#888888] text-sm font-sans">
                Inicia una nueva evaluación técnica y demuestra tus habilidades en programación.
              </p>
              <DevButton variant="secondary" size="md" className="w-full">
                Comenzar Ahora
              </DevButton>
            </div>
          </DevCard>

          {/* Mi Progreso */}
          <DevCard className="cursor-pointer hover:shadow-[0_0_20px_rgba(10,255,157,0.1)] transition-all">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-[#0AFF9D] font-sans">📊</div>
              <h4 className="text-xl font-bold text-[#D4D4D4] font-sans">Mi Progreso</h4>
              <p className="text-[#888888] text-sm font-sans">
                Visualiza tu avance en evaluaciones y mejora continua como desarrollador.
              </p>
              <DevButton variant="secondary" size="md" className="w-full">
                Ver Progreso
              </DevButton>
            </div>
          </DevCard>

          {/* Novedades */}
          <DevCard className="cursor-pointer hover:shadow-[0_0_20px_rgba(10,255,157,0.1)] transition-all">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-[#0AFF9D] font-sans">✨</div>
              <h4 className="text-xl font-bold text-[#D4D4D4] font-sans">Novedades</h4>
              <p className="text-[#888888] text-sm font-sans">
                Mantente actualizado con nuevas evaluaciones y características de la plataforma.
              </p>
              <DevButton variant="secondary" size="md" className="w-full">
                Explorar
              </DevButton>
            </div>
          </DevCard>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Evaluaciones Completadas", value: "12" },
            { label: "Habilidades Certificadas", value: "8" },
            { label: "Posición en Ranking", value: "#487" },
            { label: "Tiempo Invertido", value: "42h 15m" },
          ].map((stat) => (
            <DevCard key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-[#0AFF9D] font-sans mb-1">{stat.value}</p>
              <p className="text-sm text-[#888888] font-sans">{stat.label}</p>
            </DevCard>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
