"use client";

import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";
import { common, LOCALES } from "@/lib/i18n";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label={common[locale].languageSwitchLabel}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-primary/30 bg-black/60 p-1 backdrop-blur-md",
        className,
      )}
    >
      <Languages
        className="ml-1 h-3.5 w-3.5 text-muted-foreground"
        aria-hidden
      />
      {LOCALES.map(({ key, label, shortLabel }) => (
        <button
          key={key}
          type="button"
          onClick={() => setLocale(key)}
          aria-label={label}
          aria-pressed={locale === key}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200",
            locale === key
              ? "bg-primary/20 text-primary glow-text"
              : "text-muted-foreground hover:text-white",
          )}
        >
          {shortLabel}
        </button>
      ))}
    </div>
  );
}
