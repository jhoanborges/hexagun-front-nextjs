"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Calendar } from "lucide-react"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

const openCalendly = () => {
  if (typeof window !== "undefined" && window.Calendly) {
    window.Calendly.initPopupWidget({ url: "https://calendly.com/hexagun/coffee-talk" })
  }
}

export function OdooPricingSection() {
  const plans = [
    {
      name: "Una aplicación gratis",
      price: "0",
      originalPrice: null,
      color: "cyan",
      borderColor: "border-t-cyan-400",
      priceColor: "text-cyan-400",
      features: [
        "Una aplicación sin límite de usuarios",
        "Odoo en línea",
        "Soporte comunitario",
        "Actualizaciones automáticas",
      ],
      highlighted: false,
    },
    {
      name: "Estándar",
      price: "180",
      originalPrice: "228",
      color: "red",
      borderColor: "border-t-red-400",
      priceColor: "text-red-400",
      features: [
        "Todas las aplicaciones",
        "Odoo en línea",
        "Soporte estándar",
        "Almacenamiento ilimitado",
        "Actualizaciones automáticas",
      ],
      highlighted: true,
    },
    {
      name: "Personalizado",
      price: "274",
      originalPrice: "340",
      color: "emerald",
      borderColor: "border-t-emerald-400",
      priceColor: "text-emerald-400",
      features: [
        "Todas las aplicaciones",
        "Odoo en línea / Odoo.sh** / Local",
        "Studio de Odoo",
        "Multiempresa",
        "API externa",
        "Soporte prioritario 24/7",
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Planes diseñados para cada negocio
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto text-pretty">
            Elige el plan que mejor se adapte a tus necesidades y comienza a transformar tu empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-white border-t-4 ${plan.borderColor} rounded-lg shadow-lg transition-transform hover:scale-105 ${
                plan.highlighted ? "ring-2 ring-emerald-400/50" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MÁS POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{plan.name}</h3>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-sm font-medium ${plan.priceColor}`}>Mex$</span>
                    <span className={`text-6xl font-bold ${plan.priceColor}`}>{plan.price}</span>
                    <span className={`text-2xl font-medium ${plan.priceColor}`}>.00</span>
                  </div>

                  {plan.originalPrice && (
                    <div className="mt-2">
                      <span className="text-slate-500 line-through text-sm">Mex$ {plan.originalPrice}.00</span>
                      <p className="text-slate-600 text-sm mt-1">
                        por usuario al mes
                        <br />
                        (más IVA)
                      </p>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-4">
                    {plan.price === "0" ? "Incluye:" : "Todas las aplicaciones"}
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={openCalendly}
            className="bg-[#714B67] hover:bg-[#5d3f5c] text-white font-semibold py-6 px-12 rounded-lg transition-colors text-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            COMIENZA AHORA
          </Button>
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">
            ** Odoo.sh es nuestra plataforma de desarrollo y hosting. Todos los precios en pesos mexicanos.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            ¿Necesitas más de 100 usuarios?{" "}
            <Link href="/contact" className="text-emerald-400 font-semibold hover:underline">
              Contáctanos para un plan empresarial
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
