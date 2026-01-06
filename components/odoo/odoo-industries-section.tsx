"use client"

import { motion } from "framer-motion"
import Image from "next/image"
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

const categoryKeys = [
  "realEstate",
  "homeServices",
  "foodBeverage",
  "cultureArts",
  "education",
  "eventsNonprofit",
  "hospitality",
  "manufacturing",
  "healthWellness",
  "businessServices",
  "retailEcommerce",
] as const

const industryIconSlugs: Record<string, string[]> = {
  realEstate: ["architects", "condominium", "construction", "hvac_services", "industry_real_estate", "real_estate", "solar_installation"],
  homeServices: ["bike_leasing", "bike_shop", "cleaning_services", "electrician", "gardening", "handyman", "shoe_maker", "surveyor"],
  foodBeverage: ["bakery", "bar_industry", "beverage_distributor", "cake_shop", "candy_shop", "fast_food", "food_trucks", "industry_restaurant", "takeaway_restaurant"],
  cultureArts: ["art_craft", "concert_halls", "gallery", "library", "museum", "photography", "tattoo_shop", "theater"],
  education: ["diy_workshops", "driving_school", "elearning_platform", "student_organization"],
  eventsNonprofit: ["coworking", "event_management", "members_club", "non_profit_organization", "sport_events", "sports_club", "summer_camps", "team_sports_club", "wedding_planner"],
  hospitality: ["bowling", "campsite", "escape_rooms", "guest_house", "guided_tours", "holiday_house", "hotel", "night_clubs", "outdoor_activities", "spa_resort", "yoga_pilates"],
  manufacturing: ["3pl_logistic_company", "carpenter", "corporate_gifts", "custom_furniture", "food_distribution", "metal_fabricator", "micro_brewery", "textile_manufacturing"],
  healthWellness: ["climbing_gym", "eyewear_shop", "fitness", "hair_salon", "personal_trainer", "pharmacy_retail", "veterinary_clinic", "wellness_practitioner"],
  businessServices: ["accounting_firm", "billboard_rental", "certification_organism", "coal_petroleum", "environmental_agency", "headhunter", "industry_lawyer", "it_hardware", "marketing_agency", "odoo_partner", "software_reseller"],
  retailEcommerce: ["agriculture_shop", "automobile", "bookstore", "clothing_boutique", "cosmetics_store", "dropshipping", "electronic_store", "florist", "fmcg_store", "furniture_store", "hardware_shop", "toy_store", "wine_merchant"],
}

const getIconUrl = (slug: string) => `https://download.odoocdn.com/icons/${slug}/static/description/icon.png`

export function OdooIndustriesSection() {
  const t = useTranslations("Odoo.industries")

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="space-y-16">
          {categoryKeys.map((categoryKey, categoryIndex) => (
            <motion.div
              key={categoryKey}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-slate-700">
                {t(`categories.${categoryKey}.name`)}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {industryIconSlugs[categoryKey].map((iconSlug, index) => (
                  <motion.div
                    key={iconSlug}
                    className="group p-5 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-[#714B67]/50 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    whileHover={{ y: -3 }}
                    onClick={openCalendly}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-white flex-shrink-0">
                        <Image
                          src={getIconUrl(iconSlug)}
                          alt={t(`categories.${categoryKey}.industries.${iconSlug}.name`)}
                          width={48}
                          height={48}
                          className="rounded"
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">
                          {t(`categories.${categoryKey}.industries.${iconSlug}.name`)}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {t(`categories.${categoryKey}.industries.${iconSlug}.description`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OdooIndustriesSection
