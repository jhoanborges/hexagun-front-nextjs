"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLocale } from "@/app/actions";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const newLocale = locale === "es" ? "en" : "es";
    startTransition(async () => {
      await setLocale(newLocale);
      router.refresh();
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      disabled={isPending}
      className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors px-2"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium text-sm">
        {locale === "es" ? "EN" : "ES"}
      </span>
    </Button>
  );
}
