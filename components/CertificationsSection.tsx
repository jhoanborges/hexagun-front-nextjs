"use client";

import React from "react";
import CertificationsComponent from "@/components/CertificationsComponent";
import { SparklesText } from "@/components/magicui/sparkles-text";

function CertificationsSection() {
    return (
        <section className="py-10 sm:py-20 md:py-32">
            <div className="text-center ">
                <SparklesText text="Check out my certifications" className="font-bold" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <CertificationsComponent />
            </div>
        </section>
    );
}

export default CertificationsSection;