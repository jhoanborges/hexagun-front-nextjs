"use client"
import { motion } from "framer-motion"
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react"
import { useTranslations } from "next-intl"

export function OdooStatsSection() {
  const t = useTranslations("Odoo.stats")

  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: t("items.productivity.value"),
      label: t("items.productivity.label"),
      company: t("items.productivity.company"),
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: t("items.hours.value"),
      label: t("items.hours.label"),
      company: t("items.hours.company"),
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      value: t("items.costs.value"),
      label: t("items.costs.label"),
      company: t("items.costs.company"),
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: t("items.companies.value"),
      label: t("items.companies.label"),
      company: t("items.companies.company"),
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("title")}</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-xl p-6 text-center hover:border-[#E46E78]/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#714B67]/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="inline-flex p-3 bg-[#E46E78]/20 rounded-lg text-[#E46E78] mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-300 font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OdooStatsSection
