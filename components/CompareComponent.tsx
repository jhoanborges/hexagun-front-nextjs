import React from "react";
import { Compare } from "@/components/ui/compare";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function CompareComponent() {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 py-40">
      <SparklesText text="We use the best practices" className="font-bold" />
      <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800">
        <Compare
          firstImage="/messy-code.png"
          secondImage="/better-code.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[300px] md:h-[500px] md:w-[800px]"
          slideMode="hover"
        />
      </div>
    </div>
  );
}
