"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import {CodingAnimation} from './CodingAnimation'

function ExampleSection() {
  return (
    <section className="py-10 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-12 items-center">
 <CodingAnimation/>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4 md:mb-6">
              Innovate with Cutting-Edge Technology
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-6 md:mb-8">
              We help companies grow, reducing costs and increasing profits with the use of technology, inspired by the Hexagonal architecture to solve complex problems, reduce and control costs, increase your profits and and make your business to grow.

              From the development of new applications, through modernization, management and maintenance, we cover all stages of the application lifecycle.
            </p>
            <Button className="bg-sky-500 hover:bg-sky-400 text-white font-semibold h-10 md:h-12 px-4 md:px-6 rounded-lg transition-colors">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExampleSection;