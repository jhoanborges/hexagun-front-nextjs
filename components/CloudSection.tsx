"use client";

import React from "react";
import { Button } from "./ui/button";
import CloudIconsComponent from './CloudIconsComponent';

function CloudSection() {
    return (
        <section className="py-10 sm:py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-12 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4 md:mb-6">
                            Powered by Leading Technologies
                        </h2>
                        <p className="text-base sm:text-lg text-slate-300 mb-6 md:mb-8">
                            At Hexagun, we leverage a robust stack of modern technologies including <strong>TypeScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, and <strong>Docker</strong> to build scalable, high-performance applications. Our expertise in tools like <strong>Git</strong>, <strong>Jira</strong>, and <strong>Figma</strong> ensures seamless collaboration and efficient project management. Whether it’s web development, mobile applications, or microservices, we use these cutting-edge tools to solve complex problems, reduce costs, and drive your business growth.

                        </p>
                        <Button
                            variant="outline"
                            className="hidden text-white md:inline-flex border-slate-700 hover:bg-slate-80 0hover:bg-slate-200 transition-colors dark:bg-white dark:bg-black dark:hover:bg-slate-700"
                        >
                            Build with Us
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