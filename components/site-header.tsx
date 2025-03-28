"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import Image from 'next/image'
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-none rounded-full w-50 py-5 px-4">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 border-slate-900 rounded-full border shadow-xl border-gray-800">
        {/* Logo */}
        <div className="flex items-center ml-5">

          <Image
            src="/logo-white.png"
            width={120}
            height={120}
            alt="Hexagun logo"
          />

        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="#" className="text-slate-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#" className="text-slate-400 hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="#" className="text-slate-400 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#" className="text-slate-400 hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link href="#" className="text-slate-400 hover:text-white transition-colors">
            Contact
          </Link>
{/*}
          <Separator orientation="vertical" className="h-full py-2" />

          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
          */}

        </div>

        {/* Right-side Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white transition-colors">
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            className="hidden text-white md:inline-flex border-slate-700 hover:bg-slate-80 0hover:bg-slate-200 transition-colors dark:bg-white dark:bg-black dark:hover:bg-slate-700"
          >
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;