"use client"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export function OdooTestimonialsSection() {
  const t = useTranslations("Odoo.testimonials")

  const testimonials = [
    {
      name: t("items.carlos.name"),
      role: t("items.carlos.role"),
      company: t("items.carlos.company"),
      image: "/placeholder.svg?height=80&width=80",
      quote: t("items.carlos.quote"),
      rating: 5,
    },
    {
      name: t("items.maria.name"),
      role: t("items.maria.role"),
      company: t("items.maria.company"),
      image: "/placeholder.svg?height=80&width=80",
      quote: t("items.maria.quote"),
      rating: 5,
    },
    {
      name: t("items.juan.name"),
      role: t("items.juan.role"),
      company: t("items.juan.company"),
      image: "/placeholder.svg?height=80&width=80",
      quote: t("items.juan.quote"),
      rating: 5,
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#714B67]/5 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-[#E46E78]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Quote className="h-8 w-8 text-[#E46E78]/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#E46E78] text-[#E46E78]" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">
                    {testimonial.role} - {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-600">
            <iframe
              src="https://www.youtube.com/embed/nbso3NVz3p8"
              title="Odoo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OdooTestimonialsSection
