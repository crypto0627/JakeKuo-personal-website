import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

interface Experience {
  id: number
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Blockchain Developer",
    company: "CryptoFuture Labs",
    period: "2022 - Present",
    description: "Leading the development of decentralized finance applications and NFT marketplaces.",
    achievements: [
      "Architected and implemented a cross-chain DeFi protocol that processed over $10M in transactions",
      "Led a team of 5 developers to deliver a high-performance NFT marketplace",
      "Optimized smart contracts resulting in 40% reduction in gas costs",
    ],
    technologies: ["Solidity", "React", "TypeScript", "Ethers.js", "The Graph", "IPFS"],
  },
  {
    id: 2,
    role: "Blockchain Engineer",
    company: "Web3 Innovations",
    period: "2020 - 2022",
    description: "Developed smart contracts and frontend interfaces for various blockchain applications.",
    achievements: [
      "Built a decentralized identity solution used by 3 enterprise clients",
      "Implemented ERC-20 and ERC-721 token contracts for multiple projects",
      "Created a custom wallet integration library adopted by 10+ projects",
    ],
    technologies: ["Solidity", "JavaScript", "Web3.js", "Truffle", "React", "Node.js"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "TechSolutions Inc.",
    period: "2018 - 2020",
    description: "Developed responsive web applications with focus on user experience and performance.",
    achievements: [
      "Migrated legacy applications to modern React architecture",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Developed reusable component library used across multiple projects",
    ],
    technologies: ["React", "JavaScript", "CSS", "Redux", "Jest", "Webpack"],
  },
]

export function ExperienceContent() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Professional Experience</h1>
          <p className="text-muted-foreground">My career journey in Web3 and blockchain development</p>
        </div>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <Card
            key={exp.id}
            className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden"
          >
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4">{exp.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span className="flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
