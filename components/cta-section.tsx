import React from "react";
import { Button } from "./ui/button";
import Link from "next/link"

function CTASection() {
  return (
    <section className="py-20 sm:py-32 mb-20 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Ready to build the future of your business?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Contact us today to discuss how our expertise in hexagonal architecture, web development, and mobile applications can help your business grow and thrive in the digital age.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Contact Us
            </button>
          </Link>
          <Button
            variant="outline"
            className="text-white border-slate-600 hover:bg-slate-200 h-12 px-8 rounded-lg transition-colors dark:hover:bg-slate-700"
          >
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;