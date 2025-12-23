"use client";

import { useRouter } from "next/navigation";
import { Power, Zap, Menu, X, User, Github, Network } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileMenu } from "./mobile-menu";
import Link from "next/link";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export function Navbar({ isSidebarOpen, toggleSidebar }: NavbarProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      if (res.ok) router.push("/admin");
    } catch (error) {
      console.error("登出失敗:", error);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-40 flex justify-between items-center p-4 lg:p-6
        border-b border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        {/* 左側 - Logo 和菜單按鈕 */}
        <div className="flex items-center space-x-3 lg:space-x-4">
          {/* 移動端菜單按鈕 */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden bg-black/5 hover:bg-black/10 active:bg-black/15 rounded-2xl p-3 border border-black/10 transition-all active:scale-95">
            <AnimatePresence mode="wait">
              {isSidebarOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-black/70" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-black/70" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="bg-linear-to-br from-[#f6d365]/80 to-[#fda085]/80 rounded-2xl p-2 lg:p-3">
              <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-black/80" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-2xl font-bold text-black/85">
                JakeKuo Blog
              </h1>
            </div>
          </div>
        </div>
        {/* 右側 - 用戶信息和登出 */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          {/* 用戶信息 - 桌面版 */}
          <div className="hidden md:flex items-center bg-black/5 rounded-2xl px-4 py-2 border border-black/10">
            <User className="w-4 h-4 text-black/50 mr-2" />
            <p className="text-black/80 text-sm">歡迎回來，JakeKuo</p>
          </div>

          {/* 用戶信息 - 手機版 */}
          <div className="md:hidden bg-white/10 backdrop-blur-sm rounded-2xl px-3 py-2 border border-white/20">
            <User className="w-4 h-4 text-white/60" />
          </div>

          {/* 登出按鈕 */}
          <button
            onClick={handleLogout}
            className="bg-black/5 hover:bg-black/10 active:bg-black/15
                rounded-2xl p-3 border border-black/10
                transition-all group active:scale-95"
            title="登出"
            >
            <Power className="w-4 h-4 lg:w-5 lg:h-5 text-black/60 group-hover:text-red-400 transition-colors" />
          </button>
        </div>
      </nav>

      {/* 手機版選單 */}
      <MobileMenu isOpen={isSidebarOpen} onClose={() => toggleSidebar()} />
    </>
  );
}
