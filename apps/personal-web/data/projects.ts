import type { Project } from "@/components/project-card";

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: {
      "zh-TW": "虛擬電廠平台與能源管理系統",
      en: "Virtual power platform & Energy management system",
    },
    description: {
      "zh-TW":
        "VPP/EMS 整合了華城電機所有儲能案場，系統能自動化調度並集中監控各站點的即時運轉狀況。",
      en: "VPP/EMS are integrated all fortune electric energy storage sites. This system can automatic ",
    },
    tags: {
      "zh-TW": ["全端開發", "毫秒級資料整合", "能源案場"],
      en: ["Fullstack development", "ms level data integration", "energy site"],
    },
    image:
      "https://ivory-awake-falcon-554.mypinata.cloud/ipfs/bafybeif34yoffwpv4sjeasvdssxfelvmvwakjfz6wrl7tox4ifvzm3kyy4",
    github: "#",
    demo: "https://behind-ess.fortune-ess.com.tw/etai/web/index.jhp",
  },
  {
    id: 2,
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
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: 3,
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
