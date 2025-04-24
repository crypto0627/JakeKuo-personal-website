import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react"

interface Education {
  id: number
  degree: string
  institution: string
  period: string
  description: string
  courses: string[]
}

const educations: Education[] = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Tech University",
    period: "2016 - 2018",
    description:
      "Specialized in Distributed Systems and Blockchain Technology. Thesis on 'Scalability Solutions for Blockchain Networks'.",
    courses: [
      "Advanced Distributed Systems",
      "Blockchain Architecture",
      "Cryptography",
      "Secure Software Development",
      "Data Structures and Algorithms",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Science in Software Engineering",
    institution: "Digital Institute of Technology",
    period: "2012 - 2016",
    description: "Graduated with honors. Focus on software development methodologies and web technologies.",
    courses: [
      "Object-Oriented Programming",
      "Web Development",
      "Database Systems",
      "Software Engineering Principles",
      "Computer Networks",
    ],
  },
]

const certifications = [
  {
    id: 1,
    name: "Certified Blockchain Developer",
    issuer: "Blockchain Council",
    year: "2021",
  },
  {
    id: 2,
    name: "Smart Contract Security Professional",
    issuer: "Consensys Academy",
    year: "2020",
  },
  {
    id: 3,
    name: "Advanced React Development",
    issuer: "Frontend Masters",
    year: "2019",
  },
]

export function EducationContent() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Education</h1>
          <p className="text-muted-foreground">My academic background and certifications</p>
        </div>
      </div>

      <div className="space-y-6">
        {educations.map((edu) => (
          <Card
            key={edu.id}
            className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden"
          >
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <p className="text-primary font-medium">{edu.institution}</p>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4">{edu.description}</p>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" /> Key Courses
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Award className="h-5 w-5 mr-2 text-secondary" /> Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="rounded-3xl border border-secondary/20 bg-black/60 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-4">
                <div className="flex flex-col h-full">
                  <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                    <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                      {cert.year}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
