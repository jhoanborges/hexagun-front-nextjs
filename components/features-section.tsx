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

function FeaturesSection() {
  return (
    <section className="py-5 lg:py-20 pb-20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Hexagon className="h-8 w-8 text-sky-500" />,
              title: "Hexagonal Architecture",
              description: "Explicit separation of user-side, server-side, and business logic for scalable and maintainable applications."
            },
            {
              icon: <Server className="h-8 w-8 text-sky-500" />,
              title: "Microservices",
              description: "Build microservices that communicate via well-defined APIs for flexible and efficient systems."
            },
            {
              icon: <Monitor className="h-8 w-8 text-sky-500" />,
              title: "Responsive Design",
              description: "Adaptive design ensuring compatibility across all devices and browsers."
            },
            {
              icon: <Globe className="h-8 w-8 text-sky-500" />,
              title: "Web Development",
              description: "High-quality web solutions using the latest technologies and frameworks."
            },
            {
              icon: <BarChart2 className="h-8 w-8 text-sky-500" />,
              title: "Business Analysis",
              description: "Tools and analytics to identify strengths, detect potential clients, and gain insights from data."
            },
            {
              icon: <Smartphone className="h-8 w-8 text-sky-500" />,
              title: "Mobile Development",
              description: "Build mobile applications with the best UX/UI experience for Android and iOS."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-lg shadow-lg p-6 hover:bg-slate-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;