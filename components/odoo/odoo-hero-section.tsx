"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useTranslations } from "next-intl"
import ContactForm from "@/components/ContactForm"

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

export function OdooHeroSection() {
  const t = useTranslations("Odoo.hero")

  const benefits = [
    t("benefits.implementation"),
    t("benefits.roi"),
    t("benefits.support")
  ]

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#714B67]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#017E84]/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E46E78]/20 border border-[#E46E78]/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E46E78] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E46E78]"></span>
              </span>
              <span className="text-[#E46E78] font-semibold text-sm">{t("badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t("title")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#714B67] via-[#E46E78] to-[#017E84]">
                {t("titleHighlight")}
              </span>{" "}
              {t("titleEnd")}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-6 max-w-2xl leading-relaxed">
              {t("description")}{" "}
              <span className="text-[#E46E78] font-semibold">{t("expertImplementation")}</span>{" "}
              {t("speakYourLanguage")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#017E84] flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={openCalendly}
                className="group px-8 py-4 bg-gradient-to-r from-[#714B67] to-[#E46E78] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#714B67]/50 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                {t("scheduleFreeConsultation")}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/odoo/industries"
                className="px-8 py-4 border-2 border-[#017E84] text-[#017E84] rounded-lg font-semibold hover:bg-[#017E84]/10 transition-colors text-center"
              >
                {t("viewIndustries")}
              </Link>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              ✓ {t("noCommitment")} ✓ {t("consultingValue")} ✓ {t("limitedSpots")}
            </p>
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col items-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-[#714B67]/30 to-[#017E84]/30 blur-3xl rounded-xl" />
              <div className="relative z-10 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
                            <motion.div
            className="flex-1 flex flex-col items-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#714B67]/30 to-[#017E84]/30 blur-3xl rounded-full" />
              <Image
                src="/odoo/odoo_learning_partner_rgb.png"
                alt="Odoo Learning Partner"
                width={400}
                height={200}
                className="relative z-10"
              />
            </div>
          </motion.div>
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src="/odoo/SPI_homepage.png"
            alt="Odoo Silver Partner"
            width={800}
            height={267}
            className="w-full opacity-90 hover:opacity-100 transition-opacity border border-slate-600 rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default OdooHeroSection
