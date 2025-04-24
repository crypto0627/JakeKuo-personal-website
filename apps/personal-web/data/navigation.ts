import type React from "react"
import { Home, User, Briefcase, Code2, GraduationCap, Trophy } from "lucide-react"

export interface NavItem {
  title: string
  href: string
  icon: React.ElementType
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Summary",
    href: "/summary",
    icon: User,
  },
  {
    title: "Experience",
    href: "/experience",
    icon: Briefcase,
  },
  {
    title: "Skills",
    href: "/skills",
    icon: Code2,
  },
  {
    title: "Education",
    href: "/education",
    icon: GraduationCap,
  },
  {
    title: "Achievements",
    href: "/achievements",
    icon: Trophy,
  },
]
