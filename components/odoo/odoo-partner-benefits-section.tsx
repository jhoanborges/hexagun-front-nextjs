"use client"
import { motion } from "framer-motion"
import { Check, Sparkles, HeadphonesIcon, Code2, Shield, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

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

export function OdooPartnerBenefitsSection() {
  const t = useTranslations("Odoo.partnerBenefits")

  const partnerBenefits = [
    {
      icon: Users,
      title: t("items.manager.title"),
      description: t("items.manager.description"),
      highlight: t("items.manager.highlight"),
    },
    {
      icon: Phone,
      title: t("items.support.title"),
      description: t("items.support.description"),
      highlight: t("items.support.highlight"),
    },
    {
      icon: Code2,
      title: t("items.custom.title"),
      description: t("items.custom.description"),
      highlight: t("items.custom.highlight"),
    },
    {
      icon: Shield,
      title: t("items.official.title"),
      description: t("items.official.description"),
      highlight: t("items.official.highlight"),
    },
    {
      icon: Sparkles,
      title: t("items.coverage.title"),
      description: t("items.coverage.description"),
      highlight: t("items.coverage.highlight"),
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E46E78]/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#E46E78]/10 border border-[#E46E78]/30 rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4 text-[#E46E78]" />
            <span className="text-[#E46E78] text-sm font-semibold">{t("badge")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t("titlePart1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E46E78] to-[#FF8A93]">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
            <span className="text-white font-semibold"> {t("subtitleHighlight")}</span>
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {partnerBenefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-[#E46E78]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E46E78]/0 to-[#E46E78]/0 group-hover:from-[#E46E78]/5 group-hover:to-transparent rounded-2xl transition-all duration-300" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#E46E78]/10 rounded-xl flex items-center justify-center group-hover:bg-[#E46E78]/20 transition-colors">
                      <Icon className="h-6 w-6 text-[#E46E78]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#E46E78] transition-colors">
                          {benefit.title}
                        </h3>
                      </div>
                      <div className="inline-block bg-[#E46E78]/10 border border-[#E46E78]/20 rounded-full px-3 py-1 mb-3">
                        <span className="text-[#E46E78] text-xs font-semibold">{benefit.highlight}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Comparison highlight */}
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800/60 to-slate-800/40 backdrop-blur-sm border border-[#E46E78]/30 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{t("comparison.title")}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-400 text-sm">✕</span>
                  </div>
                  <span className="text-slate-400">{t("comparison.without.item1")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-400 text-sm">✕</span>
                  </div>
                  <span className="text-slate-400">{t("comparison.without.item2")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-400 text-sm">✕</span>
                  </div>
                  <span className="text-slate-400">{t("comparison.without.item3")}</span>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-[#E46E78]/10 to-transparent border border-[#E46E78]/30 rounded-xl p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E46E78]/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-[#E46E78]" />
                    </div>
                    <span className="text-white font-medium">{t("comparison.with.item1")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E46E78]/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-[#E46E78]" />
                    </div>
                    <span className="text-white font-medium">{t("comparison.with.item2")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E46E78]/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-[#E46E78]" />
                    </div>
                    <span className="text-white font-medium">{t("comparison.with.item3")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E46E78]/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-[#E46E78]" />
                    </div>
                    <span className="text-white font-medium">{t("comparison.with.item4")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              onClick={openCalendly}
              className="bg-[#E46E78] hover:bg-[#d55f6a] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#E46E78]/25 hover:shadow-[#E46E78]/40 transition-all"
            >
              <HeadphonesIcon className="mr-2 h-5 w-5" />
              {t("ctaButton")}
            </Button>
            <p className="text-slate-400 text-sm mt-4">
              {t("ctaSubtext")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OdooPartnerBenefitsSection
