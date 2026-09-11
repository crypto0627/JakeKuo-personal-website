"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Zap, Cpu, Network } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { summary as dict } from "@/lib/i18n";

const TECH_STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Vue 3",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "Docker",
  "Kubernetes",
  "SQL/NoSQL",
];

const CHAINS = [
  "Ethereum",
  "Bitcoin",
  "Hyperledger Fabric",
  "Quorum",
  "Solidity",
  "Web3.js / Ethers.js",
  "IPFS",
  "ERC-20/721/1155",
];

export function SummaryContent() {
  const { locale } = useLanguage();
  const t = dict[locale];

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
          <User className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{t.heading}</h1>
          <p className="text-muted-foreground">{t.subheading}</p>
        </div>
      </div>

      <Card className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="space-y-6">
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <CardTitle>{t.coreStrengths}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <ul className="space-y-2">
              {t.coreStrengthItems.map((item) => (
                <li key={item} className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-secondary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                <Cpu className="h-4 w-4 text-secondary" />
              </div>
              <CardTitle>{t.techStack}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-secondary/10 text-secondary border-secondary/30"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-accent/20 bg-black/60 backdrop-blur-sm overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Network className="h-4 w-4 text-accent" />
              </div>
              <CardTitle>{t.blockchainExpertise}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="flex flex-wrap gap-2">
              {CHAINS.map((chain) => (
                <Badge
                  key={chain}
                  variant="outline"
                  className="bg-accent/10 text-accent border-accent/30"
                >
                  {chain}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
