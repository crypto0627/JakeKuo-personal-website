import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "JakeKuo 郭來鴻",
  description: "Personal resume website",
  authors: [{ name: 'JakeKuo', url: 'https://github.com/crypto0627' }],
  keywords: [
    "JakeKuo",
    "郭來鴻",
    "Web3",
    "Blockchain",
    "Full Stack",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Personal Website",
    "Developer",
    "Portfolio",
    "Frontend",
    "Backend",
    "DApp",
    "Ethereum",
    "Stellar",
    "Pi Network",
    "Smart Contract",
    "Taiwan",
    "NKUST",
    "Cathay Financial Holdings",
    "Fortune Electric",
    "XueDAO"
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-mono bg-black text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-VS5WGZP3LN"/>
      </body>
    </html>
  )
}
