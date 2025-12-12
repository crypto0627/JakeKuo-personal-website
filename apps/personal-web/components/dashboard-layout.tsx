"use client";

import type React from "react";
import {
  useState,
  useEffect,
  useCallback,
  useRef,
  createContext,
  useContext,
} from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Wallet, Bitcoin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

// Context for modal state
interface ModalContextType {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export const useModal = () => useContext(ModalContext);

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-background cyberpunk-grid circuit-bg">
      {/* Mobile sidebar toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full p-2 glow"
      >
        {isSidebarOpen ? (
          <X className="h-5 w-5" onClick={() => setIsSidebarOpen(false)} />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
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
                <Bitcoin className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-center glow-text mb-1">
              Jake Kuo
            </h2>
            <p className="text-xs text-center text-muted-foreground">
              XuoDAO Builder Team
            </p>
            <p className="text-xs text-center text-muted-foreground">
              Fullstack engineer
            </p>
            <div className="flex justify-center mt-3 space-x-2">
              <Link
                href="https://etherscan.io/address/0x314d66D77AD35e65D1D7CdB5c82F51B2792b91c4"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-8 w-8 bg-muted/50 border-primary/30 hover:border-primary group"
                  title="View on Etherscan"
                >
                  <Wallet className="h-4 w-4" />
                  <span className="absolute -top-8 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-primary/20 glow-text">
                    View on Etherscan
                  </span>
                </Button>
              </Link>

              <Link href="mailto:jake0627a1@gmail.com" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-8 w-8 bg-muted/50 border-secondary/30 hover:border-secondary group"
                  title="Send Email"
                >
                  <Mail className="h-4 w-4" />
                  <span className="absolute -top-8 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-secondary/20 glow-text">
                    Send Email
                  </span>
                </Button>
              </Link>
            </div>
            <div className="flex justify-center text-center mt-3">
              <a
                href="mailto:jake0627a1@gmail.com"
                className="text-primary hover:underline"
                title="Mail me"
              >
                jake0627a1@gmail.com
              </a>
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
          <div className="p-4 border-t border-primary/20 mb-10 lg:mb-0">
            <div className="text-xs text-center text-muted-foreground">
              <p>© 2025 JakeKuo All right reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile: 點擊非sidebar區域會關閉 */}
      {isSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          aria-label="Sidebar overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        <main
          className={cn(
            "flex-1 transition-all duration-300 ease-in-out",
            isSidebarOpen && !isMobile ? "ml-64" : "ml-0",
            isModalOpen ? "overflow-hidden" : "overflow-y-auto",
          )}
        >
          <div className="container py-8 px-4 md:px-8 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </ModalContext.Provider>
    </div>
  );
}
