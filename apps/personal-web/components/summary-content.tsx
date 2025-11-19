import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Zap, Cpu, Network } from "lucide-react";

export function SummaryContent() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
          <User className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Professional Summary</h1>
          <p className="text-muted-foreground">
            A brief overview of my professional background
          </p>
        </div>
      </div>

      <Card className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Innovative Web3 developer with 5+ years of experience building
              decentralized applications and blockchain solutions. Specialized
              in creating secure, scalable, and user-friendly interfaces for
              complex blockchain systems. Passionate about pushing the
              boundaries of what's possible in the decentralized web.
            </p>

            <p className="text-lg leading-relaxed">
              Proven track record of delivering high-quality projects for
              startups, established companies, and DAOs. Experienced in all
              aspects of the development lifecycle, from concept and design to
              testing and deployment.
            </p>
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
              <CardTitle>Core Strengths</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Smart Contract Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>DeFi Protocol Integration</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Web3 Frontend Architecture</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Blockchain Security</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-secondary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                <Cpu className="h-4 w-4 text-secondary" />
              </div>
              <CardTitle>Tech Stack</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="bg-secondary/10 text-secondary border-secondary/30"
              >
                Solidity
              </Badge>
              <Badge
                variant="outline"
                className="bg-secondary/10 text-secondary border-secondary/30"
              >
                React
              </Badge>
              <Badge
                variant="outline"
                className="bg-secondary/10 text-secondary border-secondary/30"
              >
                Next.js
              </Badge>
              <Badge
                variant="outline"
                className="bg-secondary/10 text-secondary border-secondary/30"
              >
                TypeScript
              </Badge>
              <Badge
                variant="outline"
                className="bg-secondary/10 text-secondary border-secondary/30"
              >
                Ethers.js
              </Badge>
              <Badge
                variant="outline"
                className="bg-secondary/10 text-secondary border-secondary/30"
              >
                Web3.js
              </Badge>
              <Badge
                variant="outline"
                className="bg-secondary/10 text-secondary border-secondary/30"
              >
                Hardhat
              </Badge>
              <Badge
                variant="outline"
                className="bg-secondary/10 text-secondary border-secondary/30"
              >
                IPFS
              </Badge>
              <Badge
                variant="outline"
                className="bg-secondary/10 text-secondary border-secondary/30"
              >
                The Graph
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-accent/20 bg-black/60 backdrop-blur-sm overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Network className="h-4 w-4 text-accent" />
              </div>
              <CardTitle>Blockchain Expertise</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="bg-accent/10 text-accent border-accent/30"
              >
                Ethereum
              </Badge>
              <Badge
                variant="outline"
                className="bg-accent/10 text-accent border-accent/30"
              >
                Polygon
              </Badge>
              <Badge
                variant="outline"
                className="bg-accent/10 text-accent border-accent/30"
              >
                Solana
              </Badge>
              <Badge
                variant="outline"
                className="bg-accent/10 text-accent border-accent/30"
              >
                Avalanche
              </Badge>
              <Badge
                variant="outline"
                className="bg-accent/10 text-accent border-accent/30"
              >
                Arbitrum
              </Badge>
              <Badge
                variant="outline"
                className="bg-accent/10 text-accent border-accent/30"
              >
                Optimism
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
