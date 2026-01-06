"use client"

import { motion } from "framer-motion"
import { GraduationCap, Settings, Users, Layers, Rocket, HeadphonesIcon } from "lucide-react"
import { useTranslations } from "next-intl"

function OdooFeaturesSection() {
  const t = useTranslations("Odoo.features")

  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-[#E46E78]" />,
      title: t("items.training.title"),
      description: t("items.training.description"),
    },
    {
      icon: <Settings className="h-8 w-8 text-[#E46E78]" />,
      title: t("items.implementation.title"),
      description: t("items.implementation.description"),
    },
    {
      icon: <Layers className="h-8 w-8 text-[#E46E78]" />,
      title: t("items.development.title"),
      description: t("items.development.description"),
    },
    {
      icon: <Users className="h-8 w-8 text-[#E46E78]" />,
      title: t("items.consulting.title"),
      description: t("items.consulting.description"),
    },
    {
      icon: <Rocket className="h-8 w-8 text-[#E46E78]" />,
      title: t("items.migration.title"),
      description: t("items.migration.description"),
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-[#E46E78]" />,
      title: t("items.support.title"),
      description: t("items.support.description"),
    },
  ]

  return (
    <section className="py-20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{t("title")}</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6 hover:bg-slate-700/50 hover:border-[#714B67]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 p-3 bg-[#714B67]/20 rounded-lg w-fit">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OdooFeaturesSection
