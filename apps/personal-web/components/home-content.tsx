"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Globe, Github } from "lucide-react"
import { CyberAvatar } from "@/components/ui/cyber-avatar"
import { StatsBar } from "@/components/ui/stats-bar"
import { ProjectCard } from "@/components/project-card"
import { featuredProjects, allProjects } from "@/data/projects"

export function HomeContent() {
  const [activeTab, setActiveTab] = useState<string>("featured")

  const displayedProjects = useMemo(() => {
    return activeTab === "featured" ? featuredProjects : allProjects
  }, [activeTab])

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-black via-black to-primary/20 border border-primary/20 p-8 md:p-12">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 cyberpunk-grid"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <CyberAvatar src="/placeholder.svg?height=200&width=200" alt="CYBER_DEV Avatar" id="0xC7B3R" />

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
              <span className="glitch" data-text="CYBER_DEV">
                CYBER_DEV
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent text-center md:text-left">
              Web3 Developer & Blockchain Engineer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center md:text-left">
              Building the decentralized future with cutting-edge Web3 technologies. Specialized in smart contracts,
              DeFi protocols, and immersive dApp experiences.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="rounded-3xl bg-primary hover:bg-primary/80 text-white glow">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="rounded-3xl border-secondary/50 hover:border-secondary text-secondary hover:text-secondary glow-cyan"
                >
                  <FileText className="mr-2 h-4 w-4" /> 繁體中文
                </Button>
                <Button
                  variant="outline"
                  className="rounded-3xl border-accent/50 hover:border-accent text-accent hover:text-accent glow-pink"
                >
                  <FileText className="mr-2 h-4 w-4" /> 简体中文
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Quick Stats */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-primary glow-text">Quick Stats</h3>

              <div className="space-y-4">
                <StatsBar label="Experience" value="5+ Years" percentage={85} color="primary" />
                <StatsBar label="Projects" value="20+" percentage={75} color="secondary" />
                <StatsBar label="Clients" value="15+" percentage={65} color="accent" />
              </div>

              <div className="mt-6 pt-6 border-t border-primary/20">
                <h4 className="text-lg font-bold mb-3">Top Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    Solidity
                  </Badge>
                  <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                    React
                  </Badge>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                    Web3.js
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    Smart Contracts
                  </Badge>
                  <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                    DeFi
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-primary glow-text">Connect</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="rounded-3xl border-primary/30 hover:border-primary">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
                <Button variant="outline" className="rounded-3xl border-secondary/30 hover:border-secondary">
                  <Globe className="mr-2 h-4 w-4" /> Website
                </Button>
                <Button variant="outline" className="rounded-3xl border-accent/30 hover:border-accent col-span-2">
                  <Download className="mr-2 h-4 w-4" /> Download Full CV
                </Button>
              </div>
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

          <Button variant="outline" className="w-full rounded-3xl border-primary/30 hover:border-primary mt-4">
            View All Projects
          </Button>
        </div>
      </div>
    </div>
  )
}
