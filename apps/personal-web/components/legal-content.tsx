"use client";

import { useLanguage } from "@/components/language-provider";
import { privacyPolicy, termsOfUse } from "@/lib/i18n";

const DOCUMENTS = { privacy: privacyPolicy, terms: termsOfUse };

interface LegalContentProps {
  document: keyof typeof DOCUMENTS;
}

export function LegalContent({ document }: LegalContentProps) {
  const { locale } = useLanguage();
  const doc = DOCUMENTS[document][locale];

  return (
    <article className="max-w-3xl space-y-8">
      <header>
        <h1 className="text-3xl font-bold">{doc.heading}</h1>
        <p className="text-sm text-muted-foreground mt-2">{doc.lastUpdated}</p>
      </header>
      {doc.sections.map((section) => (
        <section key={section.title} className="space-y-2">
          <h2 className="text-lg font-semibold text-primary">
            {section.title}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}
