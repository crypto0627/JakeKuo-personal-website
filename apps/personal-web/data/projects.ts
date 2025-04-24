import type { Project } from "@/components/project-card"

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "AuthenPay",
    description: "A web2-like USDC cross-chain payment wallet",
    tags: ["Ethglobal Taipei", "Circle CCTP-V2", "USDC payment", "Wallet"],
    image: "https://github.com/crypto0627/AuthenPay/blob/main/apps/frontend/public/logo.jpg?raw=true",
    github: "https://github.com/crypto0627/AuthenPay",
    demo: "https://www.youtube.com/watch?v=o-FmgGV4sMw",
  },
  {
    id: 2,
    title: "Yaminogemu",
    description: "A GameFi x DeFi in BONK and provides liquidity",
    tags: ["Solana", "GameFi", "DeFi", "Bonk"],
    image: "https://github.com/hollow-leaf/Yaminogemu/blob/main/frontend/public/logo.png?raw=true",
    github: "https://github.com/hollow-leaf/Yaminogemu",
    demo: "https://www.youtube.com/shorts/cVRBoSA7kPo",
  },
  {
    id: 3,
    title: "Blockchain Development Kit",
    description: "BDK streamlines the normally complicated process of creating a blockchain with command-line tools and npm packages",
    tags: ["Hyperledger Fabric", "Quorum", "Besu", "BlockScout"],
    image: "https://opengraph.githubassets.com/376e65a6aeb67110f4a0a19315dfb229bbe61b22cd47bf6adf4d885b4b46a8f8/cathayddt/bdk",
    github: "https://github.com/cathayddt/bdk",
    demo: "https://github.com/crypto0627/bdk/blob/master/docs/vhs/bdk-quorum-network-create.gif?raw=true",
  },
]

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: 4,
    title: "Crypto Portfolio Tracker",
    description: "A mobile-first application for tracking cryptocurrency investments and performance",
    tags: ["React Native", "Redux", "CoinGecko API"],
    image: "/placeholder.svg?height=400&width=600",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Smart Contract Auditor",
    description: "An automated tool for auditing Solidity smart contracts for common vulnerabilities",
    tags: ["Python", "Solidity", "Security"],
    image: "/placeholder.svg?height=400&width=600",
    github: "#",
    demo: "#",
  },
]
