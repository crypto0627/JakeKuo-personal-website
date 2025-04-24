import type { Project } from "@/components/project-card"

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "DeFi Dashboard",
    description: "A comprehensive dashboard for DeFi portfolio tracking with real-time data visualization",
    tags: ["React", "Ethers.js", "The Graph", "Tailwind"],
    image: "/placeholder.svg?height=400&width=600",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "NFT Marketplace",
    description: "A fully functional NFT marketplace with minting, buying, and selling capabilities",
    tags: ["Next.js", "Solidity", "IPFS", "Hardhat"],
    image: "/placeholder.svg?height=400&width=600",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "DAO Governance",
    description: "A decentralized governance platform for DAOs with proposal and voting mechanisms",
    tags: ["TypeScript", "Solidity", "Aragon", "Web3.js"],
    image: "/placeholder.svg?height=400&width=600",
    github: "#",
    demo: "#",
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
