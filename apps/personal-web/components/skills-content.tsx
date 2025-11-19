import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Server, Layers, Cpu, Palette, Database } from "lucide-react";

interface SkillCategory {
  id: number;
  name: string;
  icon: React.ElementType;
  skills: {
    name: string;
    level: number;
    color: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: "Frontend Development",
    icon: Palette,
    skills: [
      { name: "React", level: 95, color: "primary" },
      { name: "TypeScript", level: 90, color: "primary" },
      { name: "Next.js", level: 85, color: "primary" },
      { name: "CSS/Tailwind", level: 90, color: "primary" },
    ],
  },
  {
    id: 2,
    name: "Blockchain Development",
    icon: Cpu,
    skills: [
      { name: "Solidity", level: 90, color: "secondary" },
      { name: "Smart Contracts", level: 85, color: "secondary" },
      { name: "Web3.js/Ethers.js", level: 90, color: "secondary" },
      { name: "Hardhat/Truffle", level: 80, color: "secondary" },
    ],
  },
  {
    id: 3,
    name: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 85, color: "accent" },
      { name: "Express", level: 80, color: "accent" },
      { name: "GraphQL", level: 75, color: "accent" },
      { name: "RESTful APIs", level: 90, color: "accent" },
    ],
  },
  {
    id: 4,
    name: "Database & Storage",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 80, color: "primary" },
      { name: "PostgreSQL", level: 75, color: "primary" },
      { name: "IPFS", level: 85, color: "primary" },
      { name: "The Graph", level: 80, color: "primary" },
    ],
  },
  {
    id: 5,
    name: "Web3 Ecosystems",
    icon: Layers,
    skills: [
      { name: "Ethereum", level: 90, color: "secondary" },
      { name: "Polygon", level: 85, color: "secondary" },
      { name: "Solana", level: 70, color: "secondary" },
      { name: "DeFi Protocols", level: 80, color: "secondary" },
    ],
  },
];

export function SkillsContent() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Code2 className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Technical Skills</h1>
          <p className="text-muted-foreground">
            My expertise in various technologies and frameworks
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <Card
            key={category.id}
            className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <category.icon className="h-4 w-4 text-primary" />
                </div>
                <CardTitle>{category.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      className={`h-2 ${
                        skill.color === "primary"
                          ? "bg-muted"
                          : skill.color === "secondary"
                            ? "bg-muted"
                            : "bg-muted"
                      }`}
                      indicatorClassName={`${
                        skill.color === "primary"
                          ? "bg-primary"
                          : skill.color === "secondary"
                            ? "bg-secondary"
                            : "bg-accent"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
