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
  privacy: string;
  terms: string;
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
    privacy: "隱私權政策",
    terms: "使用條款",
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
    privacy: "Privacy Policy",
    terms: "Terms of Use",
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

interface SkillGroup {
  title: string;
  items: string[];
}

interface HomeDictionary {
  avatarTooltip: string;
  companyLabel: string;
  organizationLabel: string;
  role: string;
  tagline: string;
  intro: string;
  focus: string;
  capabilities: string;
  skillGroups: SkillGroup[];
  architecture: string;
  architectureCaption: string;
  featuredWork: string;
  experiments: string;
  caseStudy: string;
  problem: string;
  myRole: string;
  system: string;
  features: string;
  challenges: string;
  selectedAchievements: string;
  achievementsCount: string;
  viewAllAchievements: string;
  connect: string;
  projectCode: string;
  projectDemo: string;
  languageSwitchLabel: string;
}

const SHARED_SKILL_ITEMS = {
  energy: ["EMS", "SCADA", "BESS", "VPP", "Demand Response", "Energy Trading"],
  realtime: ["WebSocket", "MQTT", "High-frequency telemetry", "Time-series data"],
  fullstack: ["React", "Next.js", "TypeScript", "Node.js", "Golang"],
  ai: ["LLM", "RAG", "MCP", "AI Agent", "Tool Calling"],
  infra: ["Docker", "Nginx", "CI/CD", "Redis", "SQL"],
  web3: ["Solidity", "Ethers.js", "Wagmi", "Account Abstraction", "CCTP"],
};

export const home: Localized<HomeDictionary> = {
  "zh-TW": {
    avatarTooltip: "在 Ethereum 上查看",
    companyLabel: "公司",
    organizationLabel: "組織",
    role: "能源全端工程師",
    tagline: "打造即時能源平台、EMS／SCADA 系統與 AI 驅動的應用。",
    intro:
      "目前於華城電機擔任全端工程師，專注於能源數位化系統開發，負責從能源案場即時監控、EMS／SCADA、BI 分析平台，到後端服務、資料整合與系統部署。\n\n" +
      "具備 React、Next.js、TypeScript、Node.js、Golang 與 Docker 等全端開發經驗，並持續將 LLM、RAG、MCP 與 AI Agent 導入能源管理與企業系統。",
    focus: "我專注的不只是寫軟體，而是把能源數據轉化為可靠、可操作的系統。",
    capabilities: "工程能力",
    skillGroups: [
      { title: "能源系統", items: SHARED_SKILL_ITEMS.energy },
      { title: "即時系統", items: SHARED_SKILL_ITEMS.realtime },
      { title: "全端開發", items: SHARED_SKILL_ITEMS.fullstack },
      { title: "AI 工程", items: SHARED_SKILL_ITEMS.ai },
      { title: "基礎設施", items: SHARED_SKILL_ITEMS.infra },
      { title: "區塊鏈／金融科技", items: SHARED_SKILL_ITEMS.web3 },
    ],
    architecture: "我打造的系統",
    architectureCaption: "從現場數據到決策介面。",
    featuredWork: "精選作品",
    experiments: "實驗作品",
    caseStudy: "案例研究",
    problem: "問題",
    myRole: "我的角色",
    system: "系統架構",
    features: "功能",
    challenges: "技術挑戰",
    selectedAchievements: "精選獲獎",
    achievementsCount: "6+ 國際區塊鏈黑客松獎項",
    viewAllAchievements: "查看所有獲獎紀錄",
    connect: "聯絡方式",
    projectCode: "原始碼",
    projectDemo: "線上展示",
    languageSwitchLabel: "切換語言",
  },
  en: {
    avatarTooltip: "View on Ethereum",
    companyLabel: "Company",
    organizationLabel: "Organization",
    role: "Energy Full-Stack Engineer",
    tagline:
      "Building real-time energy platforms, EMS/SCADA systems and AI-powered applications.",
    intro:
      "I’m a full-stack engineer at Fortune Electric focused on energy digitalization — from real-time energy-site monitoring, EMS/SCADA, and BI analytics platforms to backend services, data integration, and deployment.\n\n" +
      "I work across the stack with React, Next.js, TypeScript, Node.js, Golang, and Docker, and I’m bringing LLMs, RAG, MCP, and AI agents into energy management and enterprise systems.",
    focus:
      "My focus is not only building software, but turning energy data into reliable, actionable systems.",
    capabilities: "Engineering Capabilities",
    skillGroups: [
      { title: "Energy Systems", items: SHARED_SKILL_ITEMS.energy },
      { title: "Real-time Systems", items: SHARED_SKILL_ITEMS.realtime },
      { title: "Full-stack", items: SHARED_SKILL_ITEMS.fullstack },
      { title: "AI Engineering", items: SHARED_SKILL_ITEMS.ai },
      { title: "Infrastructure", items: SHARED_SKILL_ITEMS.infra },
      { title: "Blockchain / FinTech", items: SHARED_SKILL_ITEMS.web3 },
    ],
    architecture: "Systems I've Built",
    architectureCaption: "From field data to decision-making interfaces.",
    featuredWork: "Featured Work",
    experiments: "Selected Experiments",
    caseStudy: "Case Study",
    problem: "Problem",
    myRole: "My Role",
    system: "System",
    features: "Features",
    challenges: "Challenges",
    selectedAchievements: "Selected Achievements",
    achievementsCount: "6+ international blockchain hackathon prizes",
    viewAllAchievements: "View all achievements",
    connect: "Connect",
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

/* ------------------------------------------------------------------ */
/* Legal pages (privacy policy / terms of use)                          */
/* ------------------------------------------------------------------ */

const LEGAL_CONTACT = "jake0627a1@gmail.com";

interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalDocument {
  heading: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const privacyPolicy: Localized<LegalDocument> = {
  "zh-TW": {
    heading: "隱私權政策",
    lastUpdated: "最後更新：2026 年 10 月 7 日",
    sections: [
      {
        title: "1. 適用範圍",
        paragraphs: [
          "本隱私權政策說明郭來鴻（Jake Kuo，以下稱「我」）經營的個人網站（以下稱「本網站」）如何蒐集、使用與保護您的資訊。使用本網站即表示您同意本政策。",
        ],
      },
      {
        title: "2. 我蒐集的資訊",
        paragraphs: [
          "本網站為靜態網站，不提供會員註冊、登入或表單功能，也不會主動要求您提供姓名、電話等個人資料。",
          "本網站使用 Google Analytics 分析流量，Google 可能透過 Cookie 蒐集您的瀏覽資料，例如造訪的頁面、停留時間、裝置與瀏覽器類型、大略地理位置及 IP 位址。這些資料僅用於了解網站使用情形與改善內容。",
          "若您主動寄送電子郵件給我，我會取得您提供的電子郵件地址與信件內容，並僅用於回覆您。",
        ],
      },
      {
        title: "3. 瀏覽器本機儲存",
        paragraphs: [
          "本網站會在您的瀏覽器 localStorage 中儲存語言偏好，以便下次造訪時沿用您的設定。這些資料只存在您的裝置上，不會傳送給我。",
        ],
      },
      {
        title: "4. 第三方服務",
        paragraphs: [
          "本網站由 Cloudflare Pages 託管，並使用 Google Analytics 與 Google Fonts。這些服務可能依其各自的隱私權政策處理您的資料，例如 Google 隱私權政策（https://policies.google.com/privacy）與 Cloudflare 隱私權政策（https://www.cloudflare.com/privacypolicy/）。",
          "本網站包含連往 GitHub、LinkedIn、Telegram 等外部網站的連結，這些網站的隱私權做法不在本政策範圍內。",
        ],
      },
      {
        title: "5. 您的選擇",
        paragraphs: [
          "您可以透過瀏覽器設定封鎖或刪除 Cookie，或安裝 Google Analytics 停用外掛程式（https://tools.google.com/dlpage/gaoptout）拒絕分析追蹤。清除瀏覽器網站資料即可移除本網站儲存的偏好設定。",
        ],
      },
      {
        title: "6. 資料分享",
        paragraphs: [
          "我不會出售、出租或交換您的個人資料。除法律要求外，不會將您的資料提供給第三方。",
        ],
      },
      {
        title: "7. 兒童隱私",
        paragraphs: ["本網站並非針對 13 歲以下兒童設計，也不會刻意蒐集兒童的個人資料。"],
      },
      {
        title: "8. 政策變更",
        paragraphs: [
          "我可能不定期更新本政策，更新後的版本將公布於本頁並修改上方的「最後更新」日期。",
        ],
      },
      {
        title: "9. 聯絡方式",
        paragraphs: [`如對本政策有任何疑問，請寄信至 ${LEGAL_CONTACT}。`],
      },
    ],
  },
  en: {
    heading: "Privacy Policy",
    lastUpdated: "Last updated: October 7, 2026",
    sections: [
      {
        title: "1. Scope",
        paragraphs: [
          "This Privacy Policy explains how Jake Kuo (郭來鴻, “I”, “me”) collects, uses, and protects information on this personal website (the “Site”). By using the Site, you agree to this policy.",
        ],
      },
      {
        title: "2. Information I Collect",
        paragraphs: [
          "The Site is a static website. It has no sign-up, login, or forms, and it never asks you for personal details such as your name or phone number.",
          "The Site uses Google Analytics to understand traffic. Google may use cookies to collect browsing data such as pages visited, time on page, device and browser type, approximate location, and IP address. This data is used only to understand how the Site is used and to improve its content.",
          "If you email me, I receive your email address and the contents of your message, and use them only to reply to you.",
        ],
      },
      {
        title: "3. Local Browser Storage",
        paragraphs: [
          "The Site stores your language preference in your browser’s localStorage so it is remembered on your next visit. This data stays on your device and is never sent to me.",
        ],
      },
      {
        title: "4. Third-Party Services",
        paragraphs: [
          "The Site is hosted on Cloudflare Pages and uses Google Analytics and Google Fonts. These services may process your data under their own privacy policies, including the Google Privacy Policy (https://policies.google.com/privacy) and the Cloudflare Privacy Policy (https://www.cloudflare.com/privacypolicy/).",
          "The Site links to external websites such as GitHub, LinkedIn, and Telegram. Their privacy practices are not covered by this policy.",
        ],
      },
      {
        title: "5. Your Choices",
        paragraphs: [
          "You can block or delete cookies in your browser settings, or opt out of Google Analytics with the Google Analytics Opt-out Browser Add-on (https://tools.google.com/dlpage/gaoptout). Clearing your browser’s site data removes the preferences stored by the Site.",
        ],
      },
      {
        title: "6. Data Sharing",
        paragraphs: [
          "I do not sell, rent, or trade your personal information, and I do not share it with third parties except where required by law.",
        ],
      },
      {
        title: "7. Children’s Privacy",
        paragraphs: [
          "The Site is not directed at children under 13, and I do not knowingly collect personal information from children.",
        ],
      },
      {
        title: "8. Changes to This Policy",
        paragraphs: [
          "I may update this policy from time to time. Updates will be posted on this page with a revised “Last updated” date.",
        ],
      },
      {
        title: "9. Contact",
        paragraphs: [
          `If you have any questions about this policy, email ${LEGAL_CONTACT}.`,
        ],
      },
    ],
  },
};

export const termsOfUse: Localized<LegalDocument> = {
  "zh-TW": {
    heading: "使用條款",
    lastUpdated: "最後更新：2026 年 10 月 7 日",
    sections: [
      {
        title: "1. 接受條款",
        paragraphs: [
          "歡迎造訪郭來鴻（Jake Kuo）的個人網站（以下稱「本網站」）。存取或使用本網站即表示您同意遵守本使用條款；若您不同意，請停止使用本網站。",
        ],
      },
      {
        title: "2. 網站用途",
        paragraphs: [
          "本網站為個人作品集與履歷網站，用於介紹我的工作經歷、專案與技能。網站內容僅供一般參考，不構成任何專業建議或要約。",
        ],
      },
      {
        title: "3. 智慧財產權",
        paragraphs: [
          "除另有標示外，本網站的文字、圖片、設計與程式碼之著作權均屬於我。未經書面同意，請勿重製、散布或用於商業用途。",
          "網站中提及的公司名稱、商標與專案（例如華城電機、國泰金控及各黑客松主辦單位）均屬其各自所有人，僅用於說明我的經歷，不代表任何背書或合作關係。開源專案依其各自授權條款使用。",
        ],
      },
      {
        title: "4. 使用規範",
        paragraphs: [
          "您同意不以任何違法方式使用本網站，亦不得嘗試干擾網站運作、未經授權存取系統，或以自動化方式大量擷取網站內容。",
        ],
      },
      {
        title: "5. 外部連結",
        paragraphs: [
          "本網站包含連往第三方網站與展示專案的連結。這些網站不在我的控制範圍內，我不對其內容、可用性或隱私權做法負責。",
        ],
      },
      {
        title: "6. 免責聲明",
        paragraphs: [
          "本網站依「現況」提供，我不保證內容完全正確、即時或不中斷。在法律允許的最大範圍內，對於因使用或無法使用本網站所產生的任何損害，我概不負責。",
        ],
      },
      {
        title: "7. 隱私權",
        paragraphs: ["您使用本網站時的資料處理方式，請參閱本網站的隱私權政策（/privacy）。"],
      },
      {
        title: "8. 條款變更",
        paragraphs: [
          "我可能不定期修改本條款，修改後的版本公布於本頁即生效。您在條款更新後繼續使用本網站，即視為同意修改後的內容。",
        ],
      },
      {
        title: "9. 準據法",
        paragraphs: ["本條款以中華民國（台灣）法律為準據法。"],
      },
      {
        title: "10. 聯絡方式",
        paragraphs: [`如對本條款有任何疑問，請寄信至 ${LEGAL_CONTACT}。`],
      },
    ],
  },
  en: {
    heading: "Terms of Use",
    lastUpdated: "Last updated: October 7, 2026",
    sections: [
      {
        title: "1. Acceptance of Terms",
        paragraphs: [
          "Welcome to the personal website of Jake Kuo (郭來鴻) (the “Site”). By accessing or using the Site, you agree to these Terms of Use. If you do not agree, please stop using the Site.",
        ],
      },
      {
        title: "2. Purpose of the Site",
        paragraphs: [
          "The Site is a personal portfolio and résumé that presents my work experience, projects, and skills. Its content is for general information only and does not constitute professional advice or an offer of any kind.",
        ],
      },
      {
        title: "3. Intellectual Property",
        paragraphs: [
          "Unless otherwise noted, the text, images, design, and code on the Site are owned by me. Please do not reproduce, distribute, or use them commercially without my written permission.",
          "Company names, trademarks, and projects mentioned on the Site (such as Fortune Electric, Cathay Financial Holdings, and hackathon organizers) belong to their respective owners. They are referenced only to describe my experience and do not imply endorsement or partnership. Open-source projects are used under their respective licenses.",
        ],
      },
      {
        title: "4. Acceptable Use",
        paragraphs: [
          "You agree not to use the Site for any unlawful purpose, attempt to disrupt its operation, gain unauthorized access to its systems, or scrape its content at scale by automated means.",
        ],
      },
      {
        title: "5. External Links",
        paragraphs: [
          "The Site links to third-party websites and project demos. These sites are outside my control, and I am not responsible for their content, availability, or privacy practices.",
        ],
      },
      {
        title: "6. Disclaimer",
        paragraphs: [
          "The Site is provided “as is”. I do not guarantee that its content is accurate, current, or uninterrupted. To the fullest extent permitted by law, I am not liable for any damages arising from your use of, or inability to use, the Site.",
        ],
      },
      {
        title: "7. Privacy",
        paragraphs: [
          "For how your data is handled when you use the Site, see the Privacy Policy (/privacy).",
        ],
      },
      {
        title: "8. Changes to These Terms",
        paragraphs: [
          "I may revise these terms from time to time. Changes take effect when posted on this page, and continuing to use the Site after an update means you accept the revised terms.",
        ],
      },
      {
        title: "9. Governing Law",
        paragraphs: [
          "These terms are governed by the laws of the Republic of China (Taiwan).",
        ],
      },
      {
        title: "10. Contact",
        paragraphs: [
          `If you have any questions about these terms, email ${LEGAL_CONTACT}.`,
        ],
      },
    ],
  },
};
