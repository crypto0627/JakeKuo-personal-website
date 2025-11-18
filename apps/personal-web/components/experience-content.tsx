import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import { useDuration, formatDuration } from "@/hooks/useDuration"

interface Experience {
  id: number
  role: string
  company: string
  companyLogo?: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Engineer",
    company: "Fortune Electric",
    companyLogo: "https://www.fortune.com.tw/en/images/about/logo-xs.png",
    period: "2025/2/4 - Present",
    description:
      "Leading the development of a next-generation Energy Storage and Management System (EMS) for industrial applications, integrating real-time data visualization, smart scheduling, and secure control interfaces.",
    achievements: [
      "Integrated frontend and backend systems with a unified data flow, enabling real-time monitoring, smart scheduling, and secure control in the EMS microservice architecture.",
      "Led the end-to-end planning, design, and development of the department's official website, EMS, and SCADA systems; established knowledge management platforms by integrating GitHub, open-source projects (e.g., BookStack), and Notion-based KM systems; implemented comprehensive software engineering processes and CI/CD pipelines.",
      "Developed a dashboard demo for solar energy storage scheduling and behind-the-meter energy storage management.",
    ],
    technologies: [
      "TypeScript",
      "React19/Vue3/Next.js",
      "Node.js/Express",
      "Tailwindcss",
      "Model Context Protocol",
      "Microservice",
      "Docker/Docker Compose/Kubernetes/Helm",
      "ORM",
      "SQL/NoSQL",
      "HTML/CSS/JavaScript",
    ],
  },
  {
    id: 2,
    role: "Contributor & Frontend Engineer",
    company: "XueDAO",
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzTKhmOh_ucV2UZ68TGgcKogdPC5gLHhvrA&s",
    period: "2024/4/15 - Present",
    description:
      "Contributed to Web3 education and open-source development by building community tools, organizing workshops, and participating in hackathons to empower blockchain learners in Taiwan.",
    achievements: [
      "Developed and maintained the official XueDAO website.",
      "Co-organized and facilitated Web3 hackathons and workshops for students and early-stage developers.",
      "Participated in 10+ Web3 hackathons and workshops, expanding the organization's visibility.",
    ],
    technologies: [
      "Web3.js/Ether.js/Wagmi",
      "Wallet Provider",
      "Remix/Hardhat IDE",
      "Alchemy/Infura RPC",
      "IPFS",
      "Solidity",
      "ERC-20 721 1155",
    ],
  },
  {
    id: 3,
    role: "Blockchain Research Developer Intern",
    company: "Cathay Financial Holdings",
    companyLogo: "https://media.licdn.com/dms/image/v2/C4D0BAQHf8hdm_7CuuA/company-logo_200_200/company-logo_200_200/0/1631304615081?e=2147483647&v=beta&t=rb-Bn_koGJFExASCrFoyJJs-NEFYlJZvgYI3xxZohWg",
    period: "2023/7/5 - 2024/2/23",
    description:
      "Worked on blockchain R&D and frontend development projects, focusing on usability, performance, and integrating Web3 technologies into enterprise-grade applications.",
    achievements: [
      "Optimized frontend performance by resolving UI stutter and flickering issues, refactoring asynchronous API logic, and applying lazy loading and debouncing techniques.",
      "Built a command-line dashboard tool with React Ink for managing Ethereum Quorum nodes and Docker-based blockchain infrastructure for financial institutions.",
      "Conducted blockchain feasibility studies (Bitcoin, Ethereum, HyperLedger Fabric) for enterprise financial use cases.",
    ],
    technologies: [
      "Blockchain research",
      "Bitcoin",
      "Ethereum",
      "Hyperledger Fabric",
      "React Ink app",
      "Cloudflare",
    ],
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
        {experiences.map((exp) => {
          const duration = useDuration(exp.period)
          return (
            <Card
              key={exp.id}
              className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden"
            >
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    {exp.companyLogo && (
                      <div className="relative h-20 w-20">
                        <Image
                          src={exp.companyLogo}
                          alt={`${exp.company} logo`}
                          fill
                          className="object-contain p-1"
                          sizes="40px"
                        />
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      {/* 顯示完整日期 */}
                      <span>
                        {(() => {
                          // period 可能是 "YYYY/M/D - YYYY/M/D" 或 "YYYY/M/D - Present"
                          // 只顯示 "YYYY/M/D - YYYY/M/D" 或 "YYYY/M/D - Present"
                          const [start, end] = exp.period.split(" - ").map((s) => s.trim())
                          function formatDate(str: string) {
                            const parts = str.split("/")
                            if (parts.length === 3) {
                              return `${parts[0]}/${parts[1]}/${parts[2]}`
                            } else if (parts.length === 2) {
                              return `${parts[0]}/${parts[1]}`
                            }
                            return str
                          }
                          return `${formatDate(start)} - ${end === "Present" ? "Present" : formatDate(end)}`
                        })()}
                      </span>
                    </div>
                    {duration && (
                      <span className="text-xs mt-1">
                        {formatDuration(duration)}
                      </span>
                    )}
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
          )
        })}
      </div>
    </div>
  )
}
