"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Settings, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
    description: "Dashboard",
  },
  {
    id: "post",
    label: "post",
    icon: Settings,
    href: "/admin/post",
    description: "post",
  },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />

          {/* 手機版選單 */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-white/10 backdrop-blur-md border-r border-white/20 z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* 選單標題 */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-2">
                    <LayoutDashboard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">選單</h2>
                    <p className="text-white/60 text-sm">系統功能</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl p-2 border border-white/20 transition-all"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Logo */}
              <div className="p-4 border-b border-white/10">
                <Link
                  className="block w-full h-16 relative"
                  href="/"
                  onClick={onClose}
                >
                  <Image
                    src="/JakeKuo.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </Link>
              </div>

              {/* 選單項目 */}
              <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={onClose}
                      onTouchStart={() => setHoveredItem(item.id)}
                      onTouchEnd={() => setHoveredItem(null)}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`
                        group relative flex items-center space-x-3 p-4 rounded-2xl transition-all duration-200 active:scale-95
                        ${
                          isActive
                            ? "bg-linear-to-r from-[#f6d365]/30 to-[#fda085]/30 border border-white/30"
                            : "hover:bg-white/10 active:bg-white/20 border border-transparent"
                        }
                      `}
                    >
                      <div
                        className={`
                          p-2 rounded-xl transition-colors duration-200
                          ${
                            isActive
                              ? "bg-linear-to-r from-[#f6d365] to-[#fda085]"
                              : "bg-white/20 group-hover:bg-white/30 group-active:bg-white/40"
                          }
                        `}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-white font-medium">{item.label}</h3>
                        <p className="text-white/60 text-sm">
                          {item.description}
                        </p>
                      </div>

                      <motion.div
                        animate={{
                          x: hoveredItem === item.id ? 4 : 0,
                          opacity: hoveredItem === item.id ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-4 h-4 text-white/60" />
                      </motion.div>

                      {/* 活動指示器 */}
                      {isActive && (
                        <motion.div
                          layoutId="mobile-active-indicator"
                          className="absolute left-0 top-1/2 w-1 h-8 bg-linear-to-b from-purple-400 to-blue-400 rounded-r-full -translate-y-1/2"
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* 版本信息 */}
              <div className="p-4 border-t border-white/10">
                <div className="text-center">
                  <p className="text-white/40 text-xs">Jake Kuo Blog</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
