import type React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Github, ExternalLink } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  logo: string; // path to logo image
  year: string;
  category: string;
  githubUrl?: string;
  demoUrl?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Yaminogemu",
    description:
      "Yaminogemu is a protocol that settles in BONK and provides liquidity, primarily consisting of two major functions: GameFi and DeFi.",
    logo: "https://raw.githubusercontent.com/hollow-leaf/Yaminogemu/main/frontend/public/logo.png",
    year: "2024 Taipei Blockchain Week Bonk",
    category: "Second Place",
    githubUrl: "https://github.com/hollow-leaf/Yaminogemu",
    demoUrl: "https://yaminogemu.pages.dev/",
  },
  {
    id: 2,
    title: "Rating Pro",
    description:
      "Create a decentralized, anonymous and trustworthy rating system, allowing consumers to freely and safely evaluate stores after purchasing goods or services, ensuring the authenticity of ratings and comments, and helping to establish a transparent consumption environment that allows everyone to You can choose with confidence and bring more value to merchants who operate with integrity.",
    logo: "https://raw.githubusercontent.com/crypto0627/Rating_pro/refs/heads/main/frontend/public/favicon.ico",
    year: "2024 EthGlobal Bangkok",
    category: "Prizes Applied: Blockscout, Fhenix, Inco Network",
    githubUrl: "https://github.com/crypto0627/Rating_pro",
    demoUrl: "https://ethglobal.com/showcase/rating-pro-vo3ia",
  },
  {
    id: 3,
    title: "Konan",
    description:
      "Konan is an innovative GameFi game that elevates the concept of decentralized dynamic NFTs (dNFTs) to new heights. In this game, players can log in using OAuth or a Web3 wallet to randomly draw a unique NFT. Through a gacha-like mechanism, players gradually unlock equipment or backgrounds for their NFT characters, obtaining NFTs of varying values in the process!",
    logo: "https://camo.githubusercontent.com/3cd7af101428b962e5fa24cac9dc24e64eb15f7946c90ca3b96b3a5f675b73c7/68747470733a2f2f69766f72792d6177616b652d66616c636f6e2d3535342e6d7970696e6174612e636c6f75642f697066732f516d595a374434316b4d4244564b4b707047766153766473646246574d44614a7a4a6958476d72586b4e72776575",
    year: "2024 Celestia the Infinite Space Bazaar hackathon",
    category: "Third Prize",
    githubUrl: "https://github.com/hollow-leaf/Konan",
    demoUrl: "https://dorahacks.io/buidl/12654",
  },
  {
    id: 4,
    title: "Shishimaru",
    description:
      "Aimed at providing pet owners with a secure, transparent, and intermediary-free platform for pet walking services.",
    logo: "https://taikai.azureedge.net/DUJRxQwhegERhymEEGj3-dEBYd3IRePRARkYesTLmiU/rs:fit:350:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy80YWQyMGFiMC1lOTBkLTExZWUtOWY5YS1kNTY1OGU5NTNjMWZwYXdwb2ludC5wbmc",
    year: "2024 ETH Taipei",
    category: "Zircuit Second place",
    githubUrl: "https://github.com/hollow-leaf/Shishimaru",
    demoUrl:
      "https://taikai.network/ethtaipei/hackathons/hackathon-2024/projects/clu40l9l40irkwc01f2v36xfk/idea",
  },
  {
    id: 5,
    title: "Psyduck",
    description:
      "Our project envisions revolutionizing viewer-streamer interactions in live streaming platforms through a Chrome extension that enables donations using ERC-1155 tokens. By leveraging blockchain technology, it aims to enhance viewer engagement and provide content creators with a novel and transparent revenue stream.",
    logo: "https://cdn.dorahacks.io/static/files/18c587968415ff7b7172a5f401e91940.png@128h.webp",
    year: "2023 Taipei Blockchain Week",
    category: "BNB Chain Runner-ups",
    githubUrl: "https://github.com/hollow-leaf/psyduck",
    demoUrl: "https://dorahacks.io/buidl/8344",
  },
  {
    id: 6,
    title: "Inazuma",
    description:
      "The gateway to decentralized green energy.We're revolutionizing eco-friendly energy distribution.The purpose of Inazuma is to encourage the use of green energy among humans, reduce CO2 emissions, and protect environment.",
    logo: "https://cdn.buidlbox.io/project/3a8ea8e3-ddcd-4e3f-a931-3bac7b485a16/logo/logo.png",
    year: "2023 Filecoin green Fund Public Goods hackathon",
    category: "Second Place",
    githubUrl: "https://github.com/hollow-leaf/inazuma",
    demoUrl: "https://app.buidlbox.io/projects/free-food-station",
  },
];

export function AchievementsContent() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Trophy className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Achievements</h1>
          <p className="text-muted-foreground">
            Notable accomplishments and recognition
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement) => (
          <Card
            key={achievement.id}
            className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden flex flex-col"
            style={{ minHeight: "320px" }}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src={achievement.logo}
                    alt={`${achievement.title} logo`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/30"
                    >
                      {achievement.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4 flex-1 flex flex-col">
              <p className="mb-4">{achievement.description}</p>
              <div className="flex-1" />
              <div className="flex gap-2 mt-4">
                {achievement.githubUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-primary/30 text-primary hover:bg-primary/10"
                  >
                    <a
                      href={achievement.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
                {achievement.demoUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-accent/30 text-accent hover:bg-accent/10"
                  >
                    <a
                      href={achievement.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
