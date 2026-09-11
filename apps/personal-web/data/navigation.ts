import type React from "react";
import { User, Briefcase, GraduationCap, Trophy } from "lucide-react";

export interface NavItem {
  /** English label; the rendered label is looked up by `href` in `nav` (lib/i18n). */
  title: string;
  href: string;
  icon: React.ElementType;
}

export const navItems: NavItem[] = [
  {
    title: "Summary",
    href: "/",
    icon: User,
  },
  {
    title: "Experience",
    href: "/experience",
    icon: Briefcase,
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
];
