"use client";

import type React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { achievements as dict, common } from "@/lib/i18n";
import { achievements } from "@/data/achievements";

export function AchievementsContent() {
  const { locale } = useLanguage();
  const t = dict[locale];

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Trophy className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{t.heading}</h1>
          <p className="text-muted-foreground">{t.subheading}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement) => (
          <Card
            key={achievement.id}
            className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden flex flex-col"
            style={{ minHeight: "320px" }}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src={achievement.logo}
                    alt={`${achievement.title} logo`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/30"
                    >
                      {achievement.category[locale]}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {achievement.year[locale]}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4 flex-1 flex flex-col">
              <p className="mb-4">{achievement.description[locale]}</p>
              <div className="flex-1" />
              <div className="flex gap-2 mt-4">
                {achievement.githubUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-primary/30 text-primary hover:bg-primary/10"
                  >
                    <a
                      href={achievement.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {common[locale].github}
                    </a>
                  </Button>
                )}
                {achievement.demoUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-accent/30 text-accent hover:bg-accent/10"
                  >
                    <a
                      href={achievement.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {common[locale].demo}
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
