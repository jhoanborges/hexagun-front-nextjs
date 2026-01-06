"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ShoppingCart, Package, DollarSign, Users, Factory, BarChart3, FileText, Building2 } from "lucide-react"
import { useTranslations } from "next-intl"

function OdooModulesSection() {
  const t = useTranslations("Odoo.modules")

  const modules = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      name: t("items.sales.name"),
      description: t("items.sales.description"),
    },
    {
      icon: <Package className="h-6 w-6" />,
      name: t("items.inventory.name"),
      description: t("items.inventory.description"),
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      name: t("items.accounting.name"),
      description: t("items.accounting.description"),
    },
    {
      icon: <Users className="h-6 w-6" />,
      name: t("items.hr.name"),
      description: t("items.hr.description"),
    },
    {
      icon: <Factory className="h-6 w-6" />,
      name: t("items.manufacturing.name"),
      description: t("items.manufacturing.description"),
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      name: t("items.projects.name"),
      description: t("items.projects.description"),
    },
    {
      icon: <FileText className="h-6 w-6" />,
      name: t("items.invoicing.name"),
      description: t("items.invoicing.description"),
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      name: t("items.ecommerce.name"),
      description: t("items.ecommerce.description"),
    },
  ]

  return (
    <section className="py-20 backdrop-blur-sm bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{t("title")}</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-[#E46E78]/50 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-3 rounded-lg bg-[#714B67]/20 text-[#E46E78] group-hover:bg-[#714B67]/40 transition-colors mb-3">
                {module.icon}
              </div>
              <h3 className="text-white font-semibold text-center">{module.name}</h3>
              <p className="text-slate-500 text-sm text-center mt-1">{module.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src="/odoo/hero_image.webp"
            alt="Odoo Modules"
            width={1920}
            height={1080}
            className="w-full rounded-xl border border-slate-600"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default OdooModulesSection
