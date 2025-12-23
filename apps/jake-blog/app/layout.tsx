import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { FullscreenButton } from "@/components/fullscreen-button";

const inter = Inter({subsets: ['latin'], variable: '--font-inter'});
const orbitron = Orbitron({subsets: ['latin'], variable: '--font-orbitron'});

export const metadata: Metadata = {
  title: "JakeKuo Blog",
  description: "Welcome to JakeKuo's personal blog!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}
      >
        {children}
        <FullscreenButton />
      </body>
    </html>
  );
}
