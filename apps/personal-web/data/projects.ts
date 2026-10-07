import type { Project } from "@/components/project-card";
import type { Localized } from "@/lib/i18n";

export interface CaseStudy {
  title: Localized<string>;
  subtitle: Localized<string>;
  problem: Localized<string>;
  role: Localized<string>;
  /** Data flow from the field to the operator, top to bottom. */
  flow: string[];
  features: Localized<string[]>;
  challenges: Localized<string[]>;
}

export const emsCaseStudy: CaseStudy = {
  title: {
    "zh-TW": "虛擬電廠與能源管理系統",
    en: "Virtual Power Plant & EMS",
  },
  subtitle: {
    "zh-TW": "華城電機・多儲能案場集中監控與調度平台",
    en: "Fortune Electric · Centralized monitoring and dispatch for energy storage sites",
  },
  problem: {
    "zh-TW":
      "大量儲能案場需要集中監控，但各案場的資料來源、設備協定與操作情境都不相同。",
    en: "A growing fleet of energy storage sites needed centralized monitoring, but each site differs in data sources, device protocols, and operating scenarios.",
  },
  role: {
    "zh-TW": "全端工程師，負責系統架構、前端、後端與資料整合。",
    en: "Full-stack engineer responsible for system architecture, frontend, backend, and data integration.",
  },
  flow: [
    "Energy Site",
    "PCS / EMS / Meter",
    "Data Collector",
    "Backend API / WebSocket",
    "Database / Cache",
    "React Dashboard",
    "Operator / Management",
  ],
  features: {
    "zh-TW": [
      "即時案場監控",
      "儲能 SOC / PCS 狀態",
      "告警監控",
      "充放電排程調度",
      "歷史能源分析",
      "財務 KPI",
      "多案場管理",
    ],
    en: [
      "Real-time site monitoring",
      "ESS SOC / PCS status",
      "Alarm monitoring",
      "Dispatch scheduling",
      "Historical energy analysis",
      "Financial KPIs",
      "Multi-site management",
    ],
  },
  challenges: {
    "zh-TW": [
      "高頻資料更新",
      "大量圖表同時渲染",
      "多案場資料同步",
      "斷線重連",
      "權限架構",
      "大量歷史資料查詢",
    ],
    en: [
      "High-frequency data updates",
      "Rendering many charts at once",
      "Multi-site data synchronization",
      "Connection recovery",
      "Permission architecture",
      "Querying large volumes of history",
    ],
  },
};

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: {
      "zh-TW": "虛擬電廠平台與能源管理系統",
      en: "Virtual Power Plant & Energy Management System",
    },
    description: {
      "zh-TW":
        "VPP/EMS 整合了華城電機所有儲能案場，系統能自動化調度並集中監控各站點的即時運轉狀況。",
      en: "VPP/EMS integrates all of Fortune Electric's energy storage sites, automating dispatch and centrally monitoring each site's real-time operation.",
    },
    tags: {
      "zh-TW": ["EMS / SCADA", "即時資料", "全端開發"],
      en: ["EMS / SCADA", "Real-time data", "Full-stack"],
    },
    image:
      "https://ivory-awake-falcon-554.mypinata.cloud/ipfs/bafybeif34yoffwpv4sjeasvdssxfelvmvwakjfz6wrl7tox4ifvzm3kyy4",
    github: "#",
    demo: "https://behind-ess.fortune-ess.com.tw/etai/web/index.jhp",
  },
  {
    id: 2,
    title: {
      "zh-TW": "AuthenPay 跨鏈 USDC 支付",
      en: "AuthenPay — Wallet-less Cross-chain USDC Payment",
    },
    description: {
      "zh-TW":
        "免錢包的跨鏈 USDC 支付：以 EIP-4337 帳戶抽象與 Passkey 建立智慧錢包，透過 Circle CCTP V2 在多鏈間轉移 USDC，搭配 Paymaster 免 Gas 體驗與 WebSocket 即時交易追蹤。",
      en: "Wallet-less cross-chain USDC payments: EIP-4337 smart wallets created with Passkey, native USDC transfers across chains via Circle CCTP V2, gasless UX through a Paymaster, and real-time transaction tracking over WebSocket.",
    },
    tags: {
      "zh-TW": ["Account Abstraction", "CCTP V2", "Passkey", "Paymaster"],
      en: ["Account Abstraction", "CCTP V2", "Passkey", "Paymaster"],
    },
    image: "https://opengraph.githubassets.com/1/crypto0627/AuthenPay",
    github: "https://github.com/crypto0627/AuthenPay",
    demo: "https://authen-pay.vercel.app",
  },
  {
    id: 3,
    title: {
      "zh-TW": "區塊鏈開發工具包 (BDK)",
      en: "Blockchain Development Kit",
    },
    description: {
      "zh-TW":
        "BDK 透過命令列工具與 npm 套件，把原本繁瑣的區塊鏈建置流程簡化成幾個指令即可完成。",
      en: "BDK streamlines the normally complicated process of creating a blockchain with command-line tools and npm packages",
    },
    tags: {
      "zh-TW": ["Hyperledger Fabric", "Quorum", "Besu", "BlockScout"],
      en: ["Hyperledger Fabric", "Quorum", "Besu", "BlockScout"],
    },
    image:
      "https://opengraph.githubassets.com/376e65a6aeb67110f4a0a19315dfb229bbe61b22cd47bf6adf4d885b4b46a8f8/cathayddt/bdk",
    github: "https://github.com/cathayddt/bdk",
    demo: "https://github.com/crypto0627/bdk/blob/master/docs/vhs/bdk-quorum-network-create.gif?raw=true",
  },
  {
    id: 4,
    title: {
      "zh-TW": "華城儲能官方網站",
      en: "Fortune ESS website",
    },
    description: {
      "zh-TW":
        "華城電機推動在地化的儲能解決方案，降低成本並提升效率，並透過策略合作與大型再生能源專案，支持綠色產業與能源轉型。",
      en: "Fortune Electric advances localized energy storage solutions to lower costs and boost efficiency, supporting green industry and energy transition through strategic partnerships and large-scale renewable energy projects.",
    },
    tags: {
      "zh-TW": [
        "Next.js",
        "Tailwindcss",
        "Typescript",
        "Nginx",
        "Docker Compose",
      ],
      en: ["Next.js", "Tailwindcss", "Typescript", "Nginx", "Docker Compose"],
    },
    image:
      "https://ivory-awake-falcon-554.mypinata.cloud/ipfs/bafybeib5nt5ycmpvmaywpc4un7xxem7ia5c6s43ndrdpvlmmufrwef2n2i",
    github: "#",
    demo: "https://www.fortune-ess.com.tw/",
  },
];

export const experimentProjects: Project[] = [
  {
    id: 5,
    title: { "zh-TW": "Rating Pro", en: "Rating Pro" },
    description: {
      "zh-TW":
        "以 FHE 打造去中心化、匿名且可信的評價系統，於 ETHGlobal 曼谷擔任前端工程師。",
      en: "A decentralized, anonymous, and trustworthy rating system built with FHE — frontend engineer at ETHGlobal Bangkok.",
    },
    tags: {
      "zh-TW": ["FHE", "隱私", "ETHGlobal"],
      en: ["FHE", "Privacy", "ETHGlobal"],
    },
    image: "https://opengraph.githubassets.com/1/crypto0627/Rating_pro",
    github: "https://github.com/crypto0627/Rating_pro",
    demo: "https://rating-pro-six.vercel.app",
  },
];
