"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import OdooUrgencyBanner from "@/components/odoo/odoo-urgency-banner";
import OdooHeroSection from "@/components/odoo/odoo-hero-section";
import { OdooStatsSection } from "@/components/odoo/odoo-stats-section";
import OdooFeaturesSection from "@/components/odoo/odoo-features-section";
import { OdooComparisonSection } from "@/components/odoo/odoo-comparison-section";
import { OdooPartnerBenefitsSection } from "@/components/odoo/odoo-partner-benefits-section";
import OdooModulesSection from "@/components/odoo/odoo-modules-section";
import { OdooTestimonialsSection } from "@/components/odoo/odoo-testimonials-section";
import { OdooGuaranteeSection } from "@/components/odoo/odoo-guarantee-section";
import OdooCTASection from "@/components/odoo/odoo-cta-section";
import { OdooPricingSection } from "@/components/odoo/odoo-pricing-section";

const AnimatedBackground = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0px 0px", "-200px -200px"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(113, 75, 103, 0.15) 1px, transparent 0)`,
        backgroundSize: "100px 100px",
      }}
      animate={controls}
    />
  );
};

export default function OdooPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-sans relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <SiteHeader />
        <main>
          <OdooUrgencyBanner />
          <OdooHeroSection />
          <OdooStatsSection />
          <OdooFeaturesSection />
          <OdooComparisonSection />
          <OdooPartnerBenefitsSection />
           <OdooPricingSection />
          <OdooModulesSection />
          <OdooTestimonialsSection />
          <OdooGuaranteeSection />
          <OdooCTASection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
