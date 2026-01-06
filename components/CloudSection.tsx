"use client";

import React from "react";
import { Button } from "./ui/button";
import CloudIconsComponent from './CloudIconsComponent';
import { useTranslations } from "next-intl";

function CloudSection() {
  const t = useTranslations("Cloud");

  return (
    <section className="py-10 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4 md:mb-6">
              {t("title")}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-6 md:mb-8">
              {t("description")}
            </p>
            <Button
              variant="outline"
              className="hidden text-white md:inline-flex border-slate-700 hover:bg-slate-80 0hover:bg-slate-200 transition-colors dark:bg-white dark:bg-black dark:hover:bg-slate-700"
            >
              {t("buildWithUs")}
            </Button>
          </div>
          <div className="relative flex size-full items-center justify-center overflow-hidden">
            <CloudIconsComponent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloudSection;
