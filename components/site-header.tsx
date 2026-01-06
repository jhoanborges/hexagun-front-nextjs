"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react";
import Image from 'next/image'
import { Separator } from "@/components/ui/separator";
import Link from "next/link"
import { useTranslations } from "next-intl";
import LanguageToggle from "@/components/LanguageToggle";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Header");

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-none rounded-full w-50 py-5 px-4">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 border-slate-900 rounded-full border shadow-xl border-gray-800">
        {/* Logo */}
        <div className="flex items-center ml-5">
          <Link href="/">
            <Image
              src="/logo-white.png"
              width={120}
              height={120}
              alt="Hexagun logo"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors">
            {t("home")}
          </Link>
          <Link href="/about-us" className="text-slate-400 hover:text-white transition-colors">
            {t("aboutUs")}
          </Link>
          <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
            {t("services")}
          </Link>
          <Link href="/odoo" className="text-slate-400 hover:text-white transition-colors">
            {t("odoo")}
          </Link>
          <Link href="/portfolio" className="text-slate-400 hover:text-white transition-colors">
            {t("portfolio")}
          </Link>
          <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
            {t("contact")}
          </Link>

          <Separator orientation="vertical" className="h-6" />
        </div>

        {/* Right-side Buttons */}
        <div className="flex items-center space-x-2">
          <LanguageToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Link href="/contact">
            <Button
              variant="outline"
              className="hidden text-white md:inline-flex border-slate-700 hover:bg-slate-80 0hover:bg-slate-200 transition-colors dark:bg-white dark:bg-black dark:hover:bg-slate-700"
            >
              {t("contactUs")}
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 bg-slate-900 rounded-lg border border-gray-800">
          <div className="flex flex-col space-y-3">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t("home")}
            </Link>
            <Link href="/about-us" className="text-slate-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t("aboutUs")}
            </Link>
            <Link href="/services" className="text-slate-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t("services")}
            </Link>
            <Link href="/odoo" className="text-slate-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t("odoo")}
            </Link>
            <Link href="/portfolio" className="text-slate-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t("portfolio")}
            </Link>
            <Link href="/contact" className="text-slate-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t("contact")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
