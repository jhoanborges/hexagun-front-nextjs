"use client"
import { motion } from "framer-motion"
import { Clock } from "lucide-react"
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

export function OdooUrgencyBanner() {
  const t = useTranslations("Odoo.urgencyBanner")

  return (
    <section className="py-4 bg-gradient-to-r from-[#E46E78] to-[#714B67]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-white" />
            <span className="text-white font-semibold">{t("limitedOffer")}</span>
          </div>
          <span className="text-white/90">{t("onlyFirst")}</span>
          <button
            onClick={openCalendly}
            className="px-6 py-2 bg-white text-[#714B67] rounded-lg font-semibold hover:bg-slate-100 transition-colors"
          >
            {t("reserveNow")}
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default OdooUrgencyBanner
