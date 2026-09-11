export type Locale = "zh-TW" | "en";

export const DEFAULT_LOCALE: Locale = "zh-TW";

export const LOCALES: { key: Locale; label: string; shortLabel: string }[] = [
  { key: "zh-TW", label: "繁體中文", shortLabel: "繁中" },
  { key: "en", label: "English", shortLabel: "EN" },
];

/** A value that has one variant per supported locale. */
export type Localized<T> = Record<Locale, T>;

export function isLocale(value: unknown): value is Locale {
  return value === "zh-TW" || value === "en";
}

/* ------------------------------------------------------------------ */
/* Shared chrome                                                       */
/* ------------------------------------------------------------------ */

interface CommonDictionary {
  loading: string;
  languageSwitchLabel: string;
  github: string;
  demo: string;
  code: string;
  present: string;
}

export const common: Localized<CommonDictionary> = {
  "zh-TW": {
    loading: "載入中…",
    languageSwitchLabel: "切換語言",
    github: "GitHub",
    demo: "線上展示",
    code: "原始碼",
    present: "至今",
  },
  en: {
    loading: "Loading...",
    languageSwitchLabel: "Switch language",
    github: "GitHub",
    demo: "Demo",
    code: "Code",
    present: "Present",
  },
};

interface SidebarDictionary {
  company: string;
  role: string;
  etherscanTooltip: string;
  emailTooltip: string;
  mailMeTitle: string;
  copyright: string;
  openMenu: string;
  closeMenu: string;
}

export const sidebar: Localized<SidebarDictionary> = {
  "zh-TW": {
    company: "華城電機",
    role: "全端工程師",
    etherscanTooltip: "在 Etherscan 上查看",
    emailTooltip: "寄信給我",
    mailMeTitle: "寄信給我",
    copyright: "© 2025 JakeKuo 版權所有。",
    openMenu: "開啟選單",
    closeMenu: "關閉選單",
  },
  en: {
    company: "Fortune electric",
    role: "Fullstack engineer",
    etherscanTooltip: "View on Etherscan",
    emailTooltip: "Send Email",
    mailMeTitle: "Mail me",
    copyright: "© 2025 JakeKuo All right reserved.",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};

/** Sidebar navigation labels, keyed by route. */
export const nav: Localized<Record<string, string>> = {
  "zh-TW": {
    "/": "個人簡介",
    "/experience": "工作經歷",
    "/education": "學歷",
    "/achievements": "獲獎紀錄",
  },
  en: {
    "/": "Summary",
    "/experience": "Experience",
    "/education": "Education",
    "/achievements": "Achievements",
  },
};

/* ------------------------------------------------------------------ */
/* Home page                                                           */
/* ------------------------------------------------------------------ */

interface HomeDictionary {
  avatarTooltip: string;
  companyLabel: string;
  organizationLabel: string;
  role: string;
  intro: string;
  topSkills: string;
  skills: string[];
  connect: string;
  portfolio: string;
  projectCode: string;
  projectDemo: string;
  languageSwitchLabel: string;
}

export const home: Localized<HomeDictionary> = {
  "zh-TW": {
    avatarTooltip: "在 Ethereum 上查看",
    companyLabel: "公司",
    organizationLabel: "組織",
    role: "能源產業全端工程師",
    intro:
      "我是一名全端工程師，具備開發正式上線的網頁應用程式、即時監控儀表板與區塊鏈系統的經驗。我專注於打造穩定可靠的產品、持續優化效能，並與設計師、產品經理及跨部門團隊保持清楚的溝通。期待加入國際團隊，一起把產品做得更好。",
    topSkills: "核心技能",
    skills: [
      "網頁開發",
      "React.js / Next.js / Node.js",
      "Web3.js / Ether.js / Wagmi",
      "Docker / Git",
    ],
    connect: "聯絡方式",
    portfolio: "作品集",
    projectCode: "原始碼",
    projectDemo: "線上展示",
    languageSwitchLabel: "切換語言",
  },
  en: {
    avatarTooltip: "View on Ethereum",
    companyLabel: "Company",
    organizationLabel: "Organization",
    role: "Energy FullStack Engineer",
    intro:
      "I’m a full-stack engineer with experience building production-grade web applications, real-time dashboards, and blockchain-based systems. I focus on creating reliable products, improving performance, and communicating clearly with designers, product managers, and cross-functional teams. I’m excited to join an international team and contribute to products.",
    topSkills: "Top Skills",
    skills: [
      "Web-development",
      "React.js/Next.js/Node.js",
      "Web3.js/Ether.js/Wagmi",
      "Docker/Git",
    ],
    connect: "Connect",
    portfolio: "Portfolio",
    projectCode: "Code",
    projectDemo: "Demo",
    languageSwitchLabel: "Switch language",
  },
};

/* ------------------------------------------------------------------ */
/* Experience page                                                     */
/* ------------------------------------------------------------------ */

interface ExperienceDictionary {
  heading: string;
  subheading: string;
  keyAchievements: string;
  technologies: string;
}

export const experience: Localized<ExperienceDictionary> = {
  "zh-TW": {
    heading: "工作經歷",
    subheading: "我在能源與區塊鏈領域的職涯歷程",
    keyAchievements: "主要成果",
    technologies: "使用技術",
  },
  en: {
    heading: "Professional Experience",
    subheading: "My career journey in Energy and Blockchain development",
    keyAchievements: "Key Achievements",
    technologies: "Technologies",
  },
};

/* ------------------------------------------------------------------ */
/* Education page                                                      */
/* ------------------------------------------------------------------ */

interface EducationDictionary {
  heading: string;
  subheading: string;
  keyCourses: string;
}

export const education: Localized<EducationDictionary> = {
  "zh-TW": {
    heading: "學歷",
    subheading: "我的求學背景",
    keyCourses: "主要修習課程",
  },
  en: {
    heading: "Education",
    subheading: "My academic background",
    keyCourses: "Key Courses",
  },
};

/* ------------------------------------------------------------------ */
/* Achievements page                                                   */
/* ------------------------------------------------------------------ */

interface AchievementsDictionary {
  heading: string;
  subheading: string;
}

export const achievements: Localized<AchievementsDictionary> = {
  "zh-TW": {
    heading: "獲獎紀錄",
    subheading: "值得一提的成果與肯定",
  },
  en: {
    heading: "Achievements",
    subheading: "Notable accomplishments and recognition",
  },
};

/* ------------------------------------------------------------------ */
/* Summary page                                                        */
/* ------------------------------------------------------------------ */

interface SummaryDictionary {
  heading: string;
  subheading: string;
  paragraphs: string[];
  coreStrengths: string;
  coreStrengthItems: string[];
  techStack: string;
  blockchainExpertise: string;
}

export const summary: Localized<SummaryDictionary> = {
  "zh-TW": {
    heading: "專業簡介",
    subheading: "我的專業背景概述",
    paragraphs: [
      "能源產業的全端工程師，目前在華城電機負責虛擬電廠（VPP）與能源管理系統（EMS）的開發，將公司旗下的儲能案場整合到同一套平台，處理毫秒級的資料整合、即時監控與智慧排程，並主導部門官網、EMS 與 SCADA 系統從規劃、設計到上線的完整流程。",
      "投入能源領域之前，曾在國泰金控從事區塊鏈研發，並持續以 XueDAO 貢獻者的身分參與 Web3 教育與開源開發，累積 6 座以上國際黑客松獎項。熟悉從需求規劃、設計、開發到部署與 CI/CD 的完整開發流程。",
    ],
    coreStrengths: "核心優勢",
    coreStrengthItems: [
      "全端網頁開發（React / Next.js / Node.js）",
      "能源管理系統（EMS / VPP / SCADA）",
      "即時資料視覺化與儀表板",
      "微服務架構與 CI/CD",
      "區塊鏈與智慧合約開發",
    ],
    techStack: "技術棧",
    blockchainExpertise: "區塊鏈專長",
  },
  en: {
    heading: "Professional Summary",
    subheading: "A brief overview of my professional background",
    paragraphs: [
      "Full-stack engineer in the energy industry. At Fortune Electric I build the Virtual Power Plant (VPP) and Energy Management System (EMS) that bring the company's energy storage sites onto a single platform, handling millisecond-level data integration, real-time monitoring, and smart scheduling — and I led the department's official website, EMS, and SCADA systems end to end, from planning and design through to launch.",
      "Before moving into energy I worked on blockchain R&D at Cathay Financial Holdings, and I still contribute to Web3 education and open-source development with XueDAO, with 6+ international hackathon prizes along the way. I'm comfortable across the whole development lifecycle, from requirements and design through deployment and CI/CD.",
    ],
    coreStrengths: "Core Strengths",
    coreStrengthItems: [
      "Full-Stack Web Development (React / Next.js / Node.js)",
      "Energy Management Systems (EMS / VPP / SCADA)",
      "Real-Time Data Visualization & Dashboards",
      "Microservice Architecture & CI/CD",
      "Blockchain & Smart Contract Development",
    ],
    techStack: "Tech Stack",
    blockchainExpertise: "Blockchain Expertise",
  },
};

/* ------------------------------------------------------------------ */
/* Skills page (component is not currently routed)                     */
/* ------------------------------------------------------------------ */

interface SkillsDictionary {
  heading: string;
  subheading: string;
  categories: string[];
}

export const skills: Localized<SkillsDictionary> = {
  "zh-TW": {
    heading: "技術能力",
    subheading: "我在各項技術與框架上的專長",
    categories: [
      "前端開發",
      "區塊鏈開發",
      "後端開發",
      "資料庫與儲存",
      "Web3 生態系",
    ],
  },
  en: {
    heading: "Technical Skills",
    subheading: "My expertise in various technologies and frameworks",
    categories: [
      "Frontend Development",
      "Blockchain Development",
      "Backend Development",
      "Database & Storage",
      "Web3 Ecosystems",
    ],
  },
};
