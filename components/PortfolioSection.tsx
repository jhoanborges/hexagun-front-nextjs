"use client";

import React from "react";
import PortfolioCard from './PortfolioCard';
import { SparklesText } from "@/components/magicui/sparkles-text";

function PortfolioSection() {
    return (
        <section className="py-10 sm:py-20 md:py-32" id="portfolio">
            <div className="text-center ">
            <SparklesText text="Check out our portfolio" className="font-bold" />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <PortfolioCard />
            </div>
        </section>
    );
}

export default PortfolioSection;