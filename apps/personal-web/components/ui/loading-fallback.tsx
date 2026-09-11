"use client";

import { useLanguage } from "@/components/language-provider";
import { common } from "@/lib/i18n";

export function LoadingFallback() {
  const { locale } = useLanguage();

  return (
    <div className="animate-pulse p-8 rounded-3xl bg-muted/20">
      {common[locale].loading}
    </div>
  );
}
