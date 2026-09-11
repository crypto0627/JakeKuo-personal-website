"use client";

import type React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { achievements as dict, common, type Localized } from "@/lib/i18n";

interface Achievement {
  id: number;
  title: string;
  description: Localized<string>;
  logo: string; // path to logo image
  year: Localized<string>;
  category: Localized<string>;
  githubUrl?: string;
  demoUrl?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Yaminogemu",
    description: {
      "zh-TW":
        "Yaminogemu 是一個以 BONK 結算並提供流動性的協議，主要包含 GameFi 與 DeFi 兩大功能。",
      en: "Yaminogemu is a protocol that settles in BONK and provides liquidity, primarily consisting of two major functions: GameFi and DeFi.",
    },
    logo: "https://raw.githubusercontent.com/hollow-leaf/Yaminogemu/main/frontend/public/logo.png",
    year: {
      "zh-TW": "2024 台北區塊鏈週 Bonk",
      en: "2024 Taipei Blockchain Week Bonk",
    },
    category: { "zh-TW": "第二名", en: "Second Place" },
    githubUrl: "https://github.com/hollow-leaf/Yaminogemu",
    demoUrl: "https://yaminogemu.pages.dev/",
  },
  {
    id: 2,
    title: "Rating Pro",
    description: {
      "zh-TW":
        "打造去中心化、匿名且可信的評價系統，讓消費者在購買商品或服務後能自由且安全地評價店家，確保評分與留言的真實性，建立透明的消費環境，讓每個人都能安心選擇，也為誠信經營的商家帶來更多價值。",
      en: "Create a decentralized, anonymous and trustworthy rating system, allowing consumers to freely and safely evaluate stores after purchasing goods or services, ensuring the authenticity of ratings and comments, and helping to establish a transparent consumption environment that allows everyone to You can choose with confidence and bring more value to merchants who operate with integrity.",
    },
    logo: "https://raw.githubusercontent.com/crypto0627/Rating_pro/refs/heads/main/frontend/public/favicon.ico",
    year: { "zh-TW": "2024 EthGlobal 曼谷", en: "2024 EthGlobal Bangkok" },
    category: {
      "zh-TW": "參賽獎項：Blockscout、Fhenix、Inco Network",
      en: "Prizes Applied: Blockscout, Fhenix, Inco Network",
    },
    githubUrl: "https://github.com/crypto0627/Rating_pro",
    demoUrl: "https://ethglobal.com/showcase/rating-pro-vo3ia",
  },
  {
    id: 3,
    title: "Konan",
    description: {
      "zh-TW":
        "Konan 是一款創新的 GameFi 遊戲，把去中心化動態 NFT（dNFT）的概念推向新的高度。玩家可透過 OAuth 或 Web3 錢包登入，隨機抽取專屬 NFT，並藉由類似轉蛋的機制逐步解鎖角色的裝備或背景，取得價值各異的 NFT！",
      en: "Konan is an innovative GameFi game that elevates the concept of decentralized dynamic NFTs (dNFTs) to new heights. In this game, players can log in using OAuth or a Web3 wallet to randomly draw a unique NFT. Through a gacha-like mechanism, players gradually unlock equipment or backgrounds for their NFT characters, obtaining NFTs of varying values in the process!",
    },
    logo: "https://camo.githubusercontent.com/3cd7af101428b962e5fa24cac9dc24e64eb15f7946c90ca3b96b3a5f675b73c7/68747470733a2f2f69766f72792d6177616b652d66616c636f6e2d3535342e6d7970696e6174612e636c6f75642f697066732f516d595a374434316b4d4244564b4b707047766153766473646246574d44614a7a4a6958476d72586b4e72776575",
    year: {
      "zh-TW": "2024 Celestia the Infinite Space Bazaar 黑客松",
      en: "2024 Celestia the Infinite Space Bazaar hackathon",
    },
    category: { "zh-TW": "第三名", en: "Third Prize" },
    githubUrl: "https://github.com/hollow-leaf/Konan",
    demoUrl: "https://dorahacks.io/buidl/12654",
  },
  {
    id: 4,
    title: "Shishimaru",
    description: {
      "zh-TW": "為飼主打造安全、透明且免中介的寵物散步媒合平台。",
      en: "Aimed at providing pet owners with a secure, transparent, and intermediary-free platform for pet walking services.",
    },
    logo: "https://taikai.azureedge.net/DUJRxQwhegERhymEEGj3-dEBYd3IRePRARkYesTLmiU/rs:fit:350:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy80YWQyMGFiMC1lOTBkLTExZWUtOWY5YS1kNTY1OGU5NTNjMWZwYXdwb2ludC5wbmc",
    year: { "zh-TW": "2024 ETH Taipei", en: "2024 ETH Taipei" },
    category: { "zh-TW": "Zircuit 賽道第二名", en: "Zircuit Second place" },
    githubUrl: "https://github.com/hollow-leaf/Shishimaru",
    demoUrl:
      "https://taikai.network/ethtaipei/hackathons/hackathon-2024/projects/clu40l9l40irkwc01f2v36xfk/idea",
  },
  {
    id: 5,
    title: "Psyduck",
    description: {
      "zh-TW":
        "本專案以 Chrome 擴充功能實現使用 ERC-1155 代幣抖內，重新定義直播平台上觀眾與實況主的互動方式。藉由區塊鏈技術提升觀眾參與度，並為內容創作者帶來全新且透明的收益來源。",
      en: "Our project envisions revolutionizing viewer-streamer interactions in live streaming platforms through a Chrome extension that enables donations using ERC-1155 tokens. By leveraging blockchain technology, it aims to enhance viewer engagement and provide content creators with a novel and transparent revenue stream.",
    },
    logo: "https://cdn.dorahacks.io/static/files/18c587968415ff7b7172a5f401e91940.png@128h.webp",
    year: {
      "zh-TW": "2023 台北區塊鏈週",
      en: "2023 Taipei Blockchain Week",
    },
    category: { "zh-TW": "BNB Chain 賽道亞軍", en: "BNB Chain Runner-ups" },
    githubUrl: "https://github.com/hollow-leaf/psyduck",
    demoUrl: "https://dorahacks.io/buidl/8344",
  },
  {
    id: 6,
    title: "Inazuma",
    description: {
      "zh-TW":
        "通往去中心化綠能的入口。我們正在翻轉環保能源的分配方式，Inazuma 的目標是鼓勵人們使用綠能、減少二氧化碳排放並守護環境。",
      en: "The gateway to decentralized green energy.We're revolutionizing eco-friendly energy distribution.The purpose of Inazuma is to encourage the use of green energy among humans, reduce CO2 emissions, and protect environment.",
    },
    logo: "https://cdn.buidlbox.io/project/3a8ea8e3-ddcd-4e3f-a931-3bac7b485a16/logo/logo.png",
    year: {
      "zh-TW": "2023 Filecoin Green Fund Public Goods 黑客松",
      en: "2023 Filecoin green Fund Public Goods hackathon",
    },
    category: { "zh-TW": "第二名", en: "Second Place" },
    githubUrl: "https://github.com/hollow-leaf/inazuma",
    demoUrl: "https://app.buidlbox.io/projects/free-food-station",
  },
];

export function AchievementsContent() {
  const { locale } = useLanguage();
  const t = dict[locale];

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Trophy className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{t.heading}</h1>
          <p className="text-muted-foreground">{t.subheading}</p>
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
                      {achievement.category[locale]}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {achievement.year[locale]}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4 flex-1 flex flex-col">
              <p className="mb-4">{achievement.description[locale]}</p>
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
                      {common[locale].github}
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
                      {common[locale].demo}
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
