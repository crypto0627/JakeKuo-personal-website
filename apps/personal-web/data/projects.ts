import type { Project } from "@/components/project-card";

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Virtual power platform & Energy management system",
    description:
      "VPP/EMS are integrated all fortune electric energy storage sites. This system can automatic ",
    tags: ["Fullstack development", "ms level data integration", "energy site"],
    image:
      "https://ivory-awake-falcon-554.mypinata.cloud/ipfs/bafybeif34yoffwpv4sjeasvdssxfelvmvwakjfz6wrl7tox4ifvzm3kyy4",
    github: "#",
    demo: "https://behind-ess.fortune-ess.com.tw/",
  },
  {
    id: 2,
    title: "Blockchain Development Kit",
    description:
      "BDK streamlines the normally complicated process of creating a blockchain with command-line tools and npm packages",
    tags: ["Hyperledger Fabric", "Quorum", "Besu", "BlockScout"],
    image:
      "https://opengraph.githubassets.com/376e65a6aeb67110f4a0a19315dfb229bbe61b22cd47bf6adf4d885b4b46a8f8/cathayddt/bdk",
    github: "https://github.com/cathayddt/bdk",
    demo: "https://github.com/crypto0627/bdk/blob/master/docs/vhs/bdk-quorum-network-create.gif?raw=true",
  }
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: 3,
    title: "Fortune ESS website",
    description:
      "Fortune Electric advances localized energy storage solutions to lower costs and boost efficiency, supporting green industry and energy transition through strategic partnerships and large-scale renewable energy projects.",
    tags: [
      "Next.js",
      "Tailwindcss",
      "Typescript",
      "Nginx",
      "Docker Compose",
    ],
    image: "https://ivory-awake-falcon-554.mypinata.cloud/ipfs/bafybeib5nt5ycmpvmaywpc4un7xxem7ia5c6s43ndrdpvlmmufrwef2n2i",
    github: "#",
    demo: "https://www.fortune-ess.com.tw/",
  },
];
