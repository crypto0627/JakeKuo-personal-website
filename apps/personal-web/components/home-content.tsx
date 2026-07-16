"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Send } from "lucide-react";
import { CyberAvatar } from "@/components/ui/cyber-avatar";
import { StatsBar } from "@/components/ui/stats-bar";
import { ProjectCard } from "@/components/project-card";
import { allProjects } from "@/data/projects";
import { RESUME_LANGUAGES, type ResumeLanguage } from "@/data/resume-languages";
import Link from "next/link";

export function HomeContent() {
  // Track which badge is hovered: "none" | "company" | "organization"
  const [hovered, setHovered] = useState<"none" | "company" | "organization">(
    "none",
  );

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-black via-black to-primary/20 border border-primary/20 p-8 md:p-12">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 cyberpunk-grid"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="group relative w-full md:w-auto flex flex-col items-center">
            <CyberAvatar
              src="/JakeKuo.png?height=200&width=200"
              alt="Avatar"
              id="jakekuo.eth"
            />
            <span
              className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-primary/20 glow-text pointer-events-none"
              style={{
                opacity: hovered === "none" ? undefined : 0,
                transition: "opacity 0.2s",
              }}
            >
              View on Ethereum
            </span>
            <div
              className="
                mt-3
                flex flex-col
                items-start
                gap-2
                md:absolute md:translate-x-0 md:top-full md:items-start
                md:gap-2
                relative
                z-20
              "
            >
              <div className="flex flex-col sm:flex-row md:flex-col gap-2">
                <Link
                  href="https://www.linkedin.com/company/fortune-electric/posts/?feedView=all"
                  target="_blank"
                  className="w-full sm:w-auto"
                  tabIndex={-1}
                  aria-label="View Fortune on LinkedIn"
                >
                  <div
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 via-black/60 to-accent/20 shadow-lg backdrop-blur-md relative cursor-pointer"
                    onMouseEnter={() => setHovered("company")}
                    onMouseLeave={() => setHovered("none")}
                    style={{
                      pointerEvents:
                        hovered === "organization" ? "none" : undefined,
                      opacity: hovered === "organization" ? 0.5 : 1,
                    }}
                  >
                    <span className="text-xs font-semibold text-primary flex items-center">
                      <svg
                        className="w-3 h-3 mr-1 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                      Company
                    </span>
                    <div className="flex-1 flex justify-end">
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary px-3 py-0.5 text-xs font-medium shadow-sm ml-2"
                      >
                        Fortune
                      </Badge>
                    </div>
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/xuedao/posts/?feedView=all"
                  target="_blank"
                  className="w-full sm:w-auto"
                  tabIndex={-1}
                  aria-label="View XueDAO on LinkedIn"
                >
                  <div
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-accent/20 via-black/60 to-secondary/20 shadow-lg backdrop-blur-md relative cursor-pointer min-w-[140px] w-full sm:w-auto"
                    onMouseEnter={() => {
                      if (hovered !== "company") setHovered("organization");
                    }}
                    onMouseLeave={() => {
                      if (hovered === "organization") setHovered("none");
                    }}
                    style={{
                      pointerEvents: hovered === "company" ? "none" : undefined,
                      opacity: hovered === "company" ? 0.5 : 1,
                    }}
                  >
                    <span className="text-xs font-semibold text-accent flex items-center">
                      <svg
                        className="w-3 h-3 mr-1 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 7H7v6h6V7z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3-9a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Organization
                    </span>
                    <div className="flex-1 flex justify-end">
                      <Badge
                        variant="outline"
                        className="bg-accent/10 text-accent px-3 py-0.5 text-xs font-medium shadow-sm ml-2"
                      >
                        XueDAO
                      </Badge>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
              <span
                className="text-white font-bold text-4xl"
                data-text="CYBER_DEV"
              >
                Jake Kuo 郭來鴻
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent text-center md:text-left">
              Energy FullStack Engineer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center md:text-left">
              I’m a full-stack engineer with experience building
              production-grade web applications, real-time dashboards, and
              blockchain-based systems. I focus on creating reliable products,
              improving performance, and communicating clearly with designers,
              product managers, and cross-functional teams. I’m excited to join
              an international team and contribute to products.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Quick Stats */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6">
              <div className="border-primary/20">
                <h4 className="text-lg font-bold mb-3">Top Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="bg-secondary/10 text-secondary border-secondary/30"
                  >
                    Typescript/HTML/CSS/JavaScript/Tailwindcss
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/30"
                  >
                    React.js/Next.js/Node.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-accent/10 text-accent border-accent/30"
                  >
                    Web3.js/Ether.js/Wagmi
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-secondary/10 text-secondary border-secondary/30"
                  >
                    Docker/Git
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-primary glow-text">
                Connect
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="https://github.com/crypto0627"
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="rounded-3xl border-primary/30 hover:border-primary w-full"
                  >
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/laihong-kuo-83b186245"
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="rounded-3xl border-secondary/30 hover:border-secondary w-full"
                  >
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </Button>
                </Link>
                <Link
                  href="https://t.me/JakeKuo"
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="rounded-3xl border-accent/30 hover:border-accent w-full"
                  >
                    <Send className="mr-2 h-4 w-4" /> Telegram
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Right Column - Portfolio */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Portfolio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
