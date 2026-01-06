"use client"
import { motion } from "framer-motion"
import { Shield, Award, Headphones, Zap } from "lucide-react"
import { useTranslations } from "next-intl"

export function OdooGuaranteeSection() {
  const t = useTranslations("Odoo.guarantee")

  const guarantees = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: t("items.satisfaction.title"),
      description: t("items.satisfaction.description"),
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: t("items.certification.title"),
      description: t("items.certification.description"),
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: t("items.support.title"),
      description: t("items.support.description"),
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t("items.express.title"),
      description: t("items.express.description"),
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#017E84]/20 border border-[#017E84]/30 mb-6">
            <Shield className="h-4 w-4 text-[#017E84]" />
            <span className="text-[#017E84] font-semibold text-sm">{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("title")}</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 text-center hover:border-[#017E84]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex p-4 bg-[#017E84]/20 rounded-full text-[#017E84] mb-4">{guarantee.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{guarantee.title}</h3>
              <p className="text-slate-400 text-sm">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OdooGuaranteeSection
