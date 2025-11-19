import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { useDuration, formatDuration } from "@/hooks/useDuration";

interface Education {
  id: number;
  degree: string;
  institution: string;
  institutionLogo?: string;
  period: string;
  description: string;
  courses: string[];
}

const educations: Education[] = [
  {
    id: 1,
    degree: "Master of Computer and Communication Engineering",
    institution: "National Kaohsiung University of Science and Technology",
    institutionLogo:
      "https://www.nkust.edu.tw/var/file/0/1000/img/513/176957439.png",
    period: "2022/9 - 2024/1",
    description:
      "Completed advanced coursework in Blockchain Architecture & Smart Contract, Information Security, Mobile Application Development (Android), and Advanced Algorithms. Developed DApps and conducted research on blockchain technologies including Bitcoin and Ethereum. Specialized in blockchain technology, culminating in a thesis on 'Assessing the Feasibility of the Stellar Consensus Protocol in Pi Network and Business Model Analysis'.",
    courses: [
      "Blockchain Architecture & Smart Contract",
      "Information Security",
      "Mobile Application Development(Android)",
      "Advanced Algorithms",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Computer and Communication Engineering",
    institution: "National Kaohsiung University of Science and Technology",
    institutionLogo:
      "https://www.nkust.edu.tw/var/file/0/1000/img/513/176957439.png",
    period: "2018/9 - 2022/6",
    description:
      "Focus on computer science basic, software development methodologies and web technologies.",
    courses: [
      "Introduction to Computer Science",
      "Programming (C/C++)",
      "Data Structures",
      "Algorithms",
      "Discrete Mathematics",
      "Computer Organization",
      "Operating Systems",
      "Database Systems",
      "Computer Networks",
      "Web Development",
      "Digital Logic Design",
      "Computer Architecture",
      "Probability and Statistics",
      "Linear Algebra",
      "Calculus",
    ],
  },
];

export function EducationContent() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Education</h1>
          <p className="text-muted-foreground">My academic background</p>
        </div>
      </div>

      <div className="space-y-6">
        {educations.map((edu) => {
          const duration = useDuration(edu.period);
          return (
            <Card
              key={edu.id}
              className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden"
            >
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    {edu.institutionLogo && (
                      <div className="relative h-12 w-12">
                        <Image
                          src={edu.institutionLogo}
                          alt={`${edu.institution} logo`}
                          fill
                          className="object-contain p-1 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20"
                          sizes="48px"
                        />
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <p className="text-primary font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
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
                <p className="mb-4">{edu.description}</p>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" /> Key Courses
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/30"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
