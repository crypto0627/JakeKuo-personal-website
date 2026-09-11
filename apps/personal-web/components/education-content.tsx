"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { useDuration, formatDuration } from "@/hooks/useDuration";
import { useLanguage } from "@/components/language-provider";
import { education as dict, type Localized } from "@/lib/i18n";

interface Education {
  id: number;
  degree: Localized<string>;
  institution: Localized<string>;
  institutionLogo?: string;
  period: string;
  description: Localized<string>;
  courses: Localized<string[]>;
}

const NKUST: Localized<string> = {
  "zh-TW": "國立高雄科技大學",
  en: "National Kaohsiung University of Science and Technology",
};

const NKUST_LOGO =
  "https://www.nkust.edu.tw/var/file/0/1000/img/513/176957439.png";

const educations: Education[] = [
  {
    id: 1,
    degree: {
      "zh-TW": "電腦與通訊工程碩士",
      en: "Master of Computer and Communication Engineering",
    },
    institution: NKUST,
    institutionLogo: NKUST_LOGO,
    period: "2022/9 - 2024/1",
    description: {
      "zh-TW":
        "修習區塊鏈架構與智慧合約、資訊安全、行動應用程式開發（Android）與進階演算法等進階課程。開發 DApp 並研究 Bitcoin、Ethereum 等區塊鏈技術，專攻區塊鏈領域，並完成碩士論文《評估 Stellar 共識協議於 Pi Network 之可行性與商業模式分析》。",
      en: "Completed advanced coursework in Blockchain Architecture & Smart Contract, Information Security, Mobile Application Development (Android), and Advanced Algorithms. Developed DApps and conducted research on blockchain technologies including Bitcoin and Ethereum. Specialized in blockchain technology, culminating in a thesis on 'Assessing the Feasibility of the Stellar Consensus Protocol in Pi Network and Business Model Analysis'.",
    },
    courses: {
      "zh-TW": [
        "區塊鏈架構與智慧合約",
        "資訊安全",
        "行動應用程式開發（Android）",
        "進階演算法",
      ],
      en: [
        "Blockchain Architecture & Smart Contract",
        "Information Security",
        "Mobile Application Development(Android)",
        "Advanced Algorithms",
      ],
    },
  },
  {
    id: 2,
    degree: {
      "zh-TW": "電腦與通訊工程學士",
      en: "Bachelor of Computer and Communication Engineering",
    },
    institution: NKUST,
    institutionLogo: NKUST_LOGO,
    period: "2018/9 - 2022/6",
    description: {
      "zh-TW": "聚焦於資訊科學基礎、軟體開發方法論與網頁技術。",
      en: "Focus on computer science basic, software development methodologies and web technologies.",
    },
    courses: {
      "zh-TW": [
        "計算機概論",
        "程式設計（C/C++）",
        "資料結構",
        "演算法",
        "離散數學",
        "計算機組織",
        "作業系統",
        "資料庫系統",
        "計算機網路",
        "網頁開發",
        "數位邏輯設計",
        "計算機架構",
        "機率與統計",
        "線性代數",
        "微積分",
      ],
      en: [
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
  },
];

export function EducationContent() {
  const { locale } = useLanguage();
  const t = dict[locale];

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{t.heading}</h1>
          <p className="text-muted-foreground">{t.subheading}</p>
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
                          alt={`${edu.institution[locale]} logo`}
                          fill
                          className="object-contain p-1 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20"
                          sizes="48px"
                        />
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-xl">
                        {edu.degree[locale]}
                      </CardTitle>
                      <p className="text-primary font-medium">
                        {edu.institution[locale]}
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
                        {formatDuration(duration, locale)}
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="mb-4">{edu.description[locale]}</p>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" /> {t.keyCourses}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses[locale].map((course, index) => (
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
