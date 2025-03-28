"use client";

import React from "react";
import PortfolioCard from './PortfolioCard';

function PortfolioSection() {
    return (
        <section className="py-10 sm:py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <PortfolioCard />
            </div>
        </section>
    );
}

export default PortfolioSection;