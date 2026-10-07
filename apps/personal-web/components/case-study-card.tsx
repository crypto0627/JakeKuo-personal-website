"use client";

import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";
import { home } from "@/lib/i18n";
import type { CaseStudy } from "@/data/projects";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const { locale } = useLanguage();
  const t = home[locale];

  return (
    <Card className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-6 space-y-6">
        <div>
          <Badge
            variant="outline"
            className="bg-accent/10 text-accent border-accent/30 mb-2"
          >
            {t.caseStudy}
          </Badge>
          <h3 className="text-xl font-bold text-white">
            {study.title[locale]}
          </h3>
          <p className="text-sm text-muted-foreground">
            {study.subtitle[locale]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Section title={t.problem}>
              <p className="text-sm text-muted-foreground">
                {study.problem[locale]}
              </p>
            </Section>
            <Section title={t.myRole}>
              <p className="text-sm text-muted-foreground">
                {study.role[locale]}
              </p>
            </Section>
            <Section title={t.features}>
              <BulletList items={study.features[locale]} />
            </Section>
            <Section title={t.challenges}>
              <BulletList items={study.challenges[locale]} />
            </Section>
          </div>

          <Section title={t.system}>
            <div className="flex flex-col items-center">
              {study.flow.map((step, i) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-xs text-white text-center">
                    {step}
                  </div>
                  {i < study.flow.length - 1 && (
                    <ArrowDown className="h-3.5 w-3.5 my-1 text-primary/70" />
                  )}
                </div>
              ))}
            </div>
          </Section>
        </div>
      </CardContent>
    </Card>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-primary mb-1.5">{title}</h4>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 text-sm text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="text-primary">▸</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
