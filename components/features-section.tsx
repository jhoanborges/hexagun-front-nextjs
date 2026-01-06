"use client";

import { motion } from 'framer-motion';
import {
  Hexagon,
  Server,
  Monitor,
  Globe,
  BarChart2,
  Smartphone
} from 'lucide-react';
import React from 'react';
import { useTranslations } from 'next-intl';

function FeaturesSection() {
  const t = useTranslations("Features");

  const features = [
    {
      icon: <Hexagon className="h-8 w-8 text-sky-500" />,
      titleKey: "hexagonalArchitecture",
    },
    {
      icon: <Server className="h-8 w-8 text-sky-500" />,
      titleKey: "microservices",
    },
    {
      icon: <Monitor className="h-8 w-8 text-sky-500" />,
      titleKey: "responsiveDesign",
    },
    {
      icon: <Globe className="h-8 w-8 text-sky-500" />,
      titleKey: "webDevelopment",
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-sky-500" />,
      titleKey: "businessAnalysis",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-sky-500" />,
      titleKey: "mobileDevelopment",
    }
  ];

  return (
    <section className="py-5 lg:py-20 pb-20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-lg shadow-lg p-6 hover:bg-slate-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t(`${feature.titleKey}.title`)}
              </h3>
              <p className="text-slate-400">{t(`${feature.titleKey}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
