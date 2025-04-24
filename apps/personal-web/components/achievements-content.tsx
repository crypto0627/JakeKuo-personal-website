import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Target, Award, Zap } from "lucide-react"

interface Achievement {
  id: number
  title: string
  description: string
  icon: React.ElementType
  year: string
  category: string
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Web3 Hackathon Winner",
    description:
      "First place in the Global Web3 Hackathon for developing an innovative DeFi protocol that enables cross-chain liquidity pooling.",
    icon: Trophy,
    year: "2023",
    category: "Competition",
  },
  {
    id: 2,
    title: "Open Source Contribution",
    description:
      "Major contributor to a popular Ethereum development framework with over 5,000 GitHub stars. Implemented key features for smart contract testing.",
    icon: Star,
    year: "2022",
    category: "Open Source",
  },
  {
    id: 3,
    title: "Industry Recognition",
    description:
      "Featured in 'Blockchain Innovators Under 30' by Crypto Magazine for pioneering work in decentralized identity solutions.",
    icon: Award,
    year: "2022",
    category: "Recognition",
  },
  {
    id: 4,
    title: "Protocol Launch",
    description:
      "Successfully launched a DeFi protocol that reached $5M TVL within the first month and currently serves over 10,000 users.",
    icon: Zap,
    year: "2021",
    category: "Project",
  },
  {
    id: 5,
    title: "Research Publication",
    description:
      "Co-authored a research paper on 'Scalability Solutions for Smart Contract Platforms' published in the Journal of Blockchain Technology.",
    icon: Target,
    year: "2020",
    category: "Academic",
  },
]

export function AchievementsContent() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Trophy className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Achievements</h1>
          <p className="text-muted-foreground">Notable accomplishments and recognition</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement) => (
          <Card
            key={achievement.id}
            className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <achievement.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      {achievement.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{achievement.year}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p>{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
