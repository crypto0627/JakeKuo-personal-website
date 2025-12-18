"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Send } from "lucide-react";
import { CyberAvatar } from "@/components/ui/cyber-avatar";
import { StatsBar } from "@/components/ui/stats-bar";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects, allProjects } from "@/data/projects";
import { RESUME_LANGUAGES, type ResumeLanguage } from "@/data/resume-languages";
import Link from "next/link";

export function HomeContent() {
  const [activeTab, setActiveTab] = useState<string>("featured");
  // Track which badge is hovered: "none" | "company" | "organization"
  const [hovered, setHovered] = useState<"none" | "company" | "organization">(
    "none",
  );
  const displayedProjects = useMemo(() => {
    return activeTab === "featured" ? featuredProjects : allProjects;
  }, [activeTab]);

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
              Energy & web3 FullStack Engineer
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
                    Typescript/HTML/CSS/JavaScript
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/30"
                  >
                    React/Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-accent/10 text-accent border-accent/30"
                  >
                    Web3.js/Ether.js/Wagmi
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/30"
                  >
                    Tailwindcss
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
                <Link
                  href="https://t.me/JakeKuo"
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="rounded-3xl border-green-400/30 hover:border-green-400 w-full"
                  >
                    <svg
                      className="mr-2 h-4 w-4 bi bi-discord"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                    </svg>
                    Discord
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-primary glow-text">
                My Blog
              </h3>
              <Link href="https://blog.jakekuo.com/" target="_blank" className="w-full">
                <Button
                  variant="outline"
                  className="rounded-3xl border-accent/30 hover:border-accent w-full"
                >
                  <Send className="mr-2 h-4 w-4" /> Jake Blog
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Portfolio */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Portfolio</h2>
            <div className="flex space-x-2">
              <Button
                variant={activeTab === "featured" ? "default" : "outline"}
                onClick={() => setActiveTab("featured")}
                className="rounded-3xl"
              >
                Featured
              </Button>
              <Button
                variant={activeTab === "all" ? "default" : "outline"}
                onClick={() => setActiveTab("all")}
                className="rounded-3xl"
              >
                All Projects
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
