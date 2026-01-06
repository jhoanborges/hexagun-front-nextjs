"use client"
import { motion } from "framer-motion"
import { X, Check } from "lucide-react"
import { useTranslations } from "next-intl"

export function OdooComparisonSection() {
  const t = useTranslations("Odoo.comparison")

  const comparisons = [
    {
      feature: t("items.systems.without"),
      without: true,
      with: t("items.systems.with"),
    },
    {
      feature: t("items.processes.without"),
      without: true,
      with: t("items.processes.with"),
    },
    {
      feature: t("items.data.without"),
      without: true,
      with: t("items.data.with"),
    },
    {
      feature: t("items.costs.without"),
      without: true,
      with: t("items.costs.with"),
    },
    {
      feature: t("items.training.without"),
      without: true,
      with: t("items.training.with"),
    },
  ]

  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("title")}</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="text-center p-4">
              <h3 className="text-xl font-bold text-red-400 mb-2">{t("withoutOdoo")}</h3>
            </div>
            <div className="text-center p-4">
              <h3 className="text-xl font-bold text-[#E46E78] mb-2">{t("withOdoo")}</h3>
            </div>
          </div>
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-slate-800/30 border border-red-900/30 rounded-lg p-6 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <X className="h-6 w-6 text-red-400" />
                </div>
                <p className="text-slate-300">{item.feature}</p>
              </div>
              <div className="bg-slate-800/30 border border-[#E46E78]/30 rounded-lg p-6 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-[#E46E78]" />
                </div>
                <p className="text-slate-300">{item.with}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OdooComparisonSection
