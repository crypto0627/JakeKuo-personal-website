import type { Project } from "@/components/project-card";

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Blockchain Development Kit",
    description:
      "BDK streamlines the normally complicated process of creating a blockchain with command-line tools and npm packages",
    tags: ["Hyperledger Fabric", "Quorum", "Besu", "BlockScout"],
    image:
      "https://opengraph.githubassets.com/376e65a6aeb67110f4a0a19315dfb229bbe61b22cd47bf6adf4d885b4b46a8f8/cathayddt/bdk",
    github: "https://github.com/cathayddt/bdk",
    demo: "https://github.com/crypto0627/bdk/blob/master/docs/vhs/bdk-quorum-network-create.gif?raw=true",
  },
  {
    id: 2,
    title: "AuthenPay",
    description:
      "A wallet-less USDC payment across multiple chains—delivering smooth, secure, seamless Web3 payments.",
    tags: [
      "2025 Ethglobal Taipei",
      "Circle CCTP-V2",
      "USDC payment",
      "EIP-4337",
      "Alchemy",
    ],
    image:
      "https://github.com/crypto0627/AuthenPay/blob/main/apps/frontend/public/logo.jpg?raw=true",
    github: "https://github.com/crypto0627/AuthenPay",
    demo: "https://www.youtube.com/watch?v=o-FmgGV4sMw",
  },
  {
    id: 3,
    title: "Yaminogemu",
    description: "A GameFi x DeFi in BONK and provides liquidity",
    tags: ["Solana", "GameFi", "DeFi", "Bonk"],
    image:
      "https://github.com/hollow-leaf/Yaminogemu/blob/main/frontend/public/logo.png?raw=true",
    github: "https://github.com/hollow-leaf/Yaminogemu",
    demo: "https://www.youtube.com/shorts/cVRBoSA7kPo",
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: 5,
    title: "Luwei e-commerce platform",
    description:
      "A responsive e-commerce web app for selling Luwei, supporting both mobile and desktop users with online ordering and payment features.",
    tags: [
      "Next.js",
      "Tailwindcss",
      "Zustand",
      "Cloudflare hono d1 kv",
      "Drizzle ORM",
      "PWA",
    ],
    image: "https://www.xiaoliangkouluwei.com/images/logo.webp",
    github: "https://github.com/crypto0627/luwei",
    demo: "https://www.xiaoliangkouluwei.com/",
  },
  {
    id: 6,
    title: "Fortune ESS website",
    description:
      "Huacheng Electric advances localized energy storage solutions to lower costs and boost efficiency, supporting green industry and energy transition through strategic partnerships and large-scale renewable energy projects.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Nginx",
      "Docker Compose",
      "Cloudflare Proxy",
    ],
    image: "https://www.fortune-ess.com.tw/images/logo01.png",
    github: "#",
    demo: "https://www.fortune-ess.com.tw/",
  },
];
