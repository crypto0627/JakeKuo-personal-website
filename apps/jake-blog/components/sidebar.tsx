"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Settings,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface SidebarProps {
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

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      {/* 移動端遮罩 */}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`h-full w-80
        border-r border-black/5
        shadow-[0_8px_32px_rgba(0,0,0,0.08)]
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="flex flex-col h-full p-4">
          {/* Sidebar Header */}
          <Link
            className="w-full h-20 relative border-b border-white/10"
            href="/"
          >
            <Image
              src="/JakeKuo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </Link>

          {/* Menu Items */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <div key={item.id}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`
                    group relative flex items-center space-x-3 p-4 rounded-2xl
                    transition-colors duration-200
                    ${
                        isActive
                        ? "bg-linear-to-r from-[#f6d365]/40 to-[#fda085]/40 border border-black/10"
                        : "hover:bg-black/5 border border-transparent"
                    }
                    `}>
                    <div
                      className={`
                        p-2 rounded-xl transition-colors duration-200
                        ${
                        isActive
                            ? "bg-linear-to-r from-[#f6d365] to-[#fda085]"
                            : "bg-black/5 group-hover:bg-black/10"
                        }
                    `}>
                      <Icon className="w-5 h-5 text-black/70" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-black/80 font-medium">
                        {item.label}
                      </h3>
                      <p className="text-black/50 text-sm">
                        {item.description}
                      </p>
                    </div>

                    <div
                      className={`transition-all duration-200 ${
                        hoveredItem === item.id
                          ? "translate-x-1 opacity-100"
                          : "opacity-50"
                      }`}
                    >
                      <ChevronRight className="w-4 h-4 text-white/60" />
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-1/2 w-1 h-8
                        bg-linear-to-b from-[#f6d365] to-[#fda085]
                        rounded-r-full -translate-y-1/2"/>
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
