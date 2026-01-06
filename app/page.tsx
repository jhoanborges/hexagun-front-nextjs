"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SiteHeader from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ExampleSection from "@/components/example-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import SiteFooter from "@/components/site-footer";
import InnovateSection from "@/components/innovate-section";
import { LaptopSection } from "@/components/laptop-section";
import ReviewsComponent from "@/components/ReviewsComponent";
import CompareComponent from "@/components/CompareComponent";
import CloudSection from "@/components/CloudSection";
import PortfolioSection from "@/components/PortfolioSection";
import CertificationsSection from "@/components/CertificationsSection";
import { BackgroundGradientAnimationDemo } from "@/components/BackgroundGradientAnimationDemo";

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
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
        backgroundSize: "100px 100px",
      }}
      animate={controls}
    />
  );
};

export default function Component() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-sans relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">

        {/* Site Header */}
        <SiteHeader />

        <main>

          {/* Hero Section */}
          <HeroSection />

          <ReviewsComponent />

          <LaptopSection />

          {/* Features Section */}
          <FeaturesSection />

          {/* Example Section */}
          <InnovateSection />

          {/*<ExampleSection />*/}

          <CompareComponent />
          <CloudSection />
          <PortfolioSection />
          <CertificationsSection/>
          {/* Testimonials Section */}
          {/*<TestimonialsSection />*/}

          {/* CTA Section */}
          <CTASection />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
