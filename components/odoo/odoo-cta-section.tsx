"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
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

function OdooCTASection() {
  const t = useTranslations("Odoo.cta")
  return (
    <section className="py-20 sm:py-32 px-4">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#714B67] to-[#017E84] p-8 md:p-12 lg:p-16">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                {t("title")}
              </h2>
              <p className="text-lg text-white/90 mb-6 max-w-xl leading-relaxed">
                {t("description")} <span className="font-bold">{t("descriptionBold")}</span> {t("descriptionValue")} {t("descriptionEnd")}
              </p>
              <ul className="text-white/90 mb-8 space-y-2 text-left max-w-xl">
                <li className="flex items-start gap-2">
                  <span className="text-[#E46E78] mt-1">✓</span>
                  <span>{t("benefits.costs")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E46E78] mt-1">✓</span>
                  <span>{t("benefits.time")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E46E78] mt-1">✓</span>
                  <span>{t("benefits.visibility")}</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={openCalendly}
                  className="group px-8 py-4 bg-white text-[#714B67] rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 flex items-center gap-2 justify-center shadow-lg"
                >
                  <Calendar className="h-5 w-5" />
                  {t("scheduleButton")}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://www.odoo.com/es/blog/customer-reviews-6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  {t("downloadCase")}
                </a>
              </div>
              <p className="text-sm text-white/70 mt-4">⏰ {t("limitedSpots")}</p>
            </div>
            <div className="flex-shrink-0">
              <Image src="/odoo/odoo_logo_inverted.png" alt="Odoo" width={180} height={60} className="opacity-90" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default OdooCTASection
