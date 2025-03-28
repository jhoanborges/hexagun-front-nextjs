import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";
export function LaptopSection() {
  return (
    <div className="overflow-hidden bg-slate-900 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <MacbookScroll
        title={
          <span>
            <h1 className="text-white text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              We build amazing apps using the latest features at <Cover>warp speed</Cover>
            </h1>
          </span>
        }
        badge={
          <Image
            src="/logo-white-full200x200.png"
            width={60}
            height={60}
            alt="Hexagun logo"
          />
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}