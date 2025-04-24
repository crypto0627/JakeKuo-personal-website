"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X, Wallet, Cpu, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navItems } from "@/data/navigation"
import { useMobileDetect } from "@/hooks/use-mobile-detect"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const isMobile = useMobileDetect()
  const pathname = usePathname()

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false)
    } else {
      setIsSidebarOpen(true)
    }
  }, [isMobile])

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen)
  }, [isSidebarOpen])

  return (
    <div className="flex h-screen overflow-hidden bg-background cyberpunk-grid circuit-bg">
      {/* Mobile sidebar toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full p-2 glow"
      >
        {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out bg-black/80 backdrop-blur-md border-r border-primary/20 md:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Profile section */}
          <div className="p-6 border-b border-primary/20">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse-glow"></div>
              <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-center glow-text mb-1">CYBER_DEV</h2>
            <p className="text-xs text-center text-muted-foreground">Web3 Developer</p>
            <div className="flex justify-center mt-3 space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8 bg-muted/50 border-primary/30 hover:border-primary"
              >
                <Wallet className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8 bg-muted/50 border-secondary/30 hover:border-secondary"
              >
                <Layers className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 rounded-3xl transition-all duration-200",
                  pathname === item.href
                    ? "bg-primary/10 text-primary border border-primary/30 glow"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-white",
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                <span>{item.title}</span>
                {pathname === item.href && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-primary/20">
            <div className="text-xs text-center text-muted-foreground">
              <p>v1.0.0</p>
              <p className="mt-1">© 2025 CYBER_DEV</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main
        className={cn(
          "flex-1 overflow-y-auto transition-all duration-300 ease-in-out",
          isSidebarOpen && !isMobile ? "ml-64" : "ml-0",
        )}
      >
        <div className="container py-8 px-4 md:px-8 max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  )
}
