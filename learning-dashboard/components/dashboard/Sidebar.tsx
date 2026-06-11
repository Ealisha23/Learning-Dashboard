"use client";

// components/dashboard/Sidebar.tsx
// The collapsible left sidebar with nav items
// It's a Client Component because it has interactive state (collapsed/expanded)

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  User,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";

// Nav items config - easy to add more later
const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "#" },
  { label: "My Courses", icon: BookOpen, href: "#" },
  { label: "Progress", icon: BarChart2, href: "#" },
  { label: "Profile", icon: User, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Track which nav item is active
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <motion.nav
      // Animate width when collapsing/expanding
      animate={{ width: isCollapsed ? 72 : 220 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="
        hidden md:flex flex-col
        bg-bg-card border-r border-border
        h-screen sticky top-0
        overflow-hidden shrink-0
        z-10
      "
    >
      {/* Logo / Brand area */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-border">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center shrink-0">
          <Zap size={16} className="text-white" />
        </div>

        <AnimatePresence>
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-text-primary font-semibold text-sm whitespace-nowrap"
            >
              LearnFlow
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav items */}
      <ul className="flex flex-col gap-1 p-3 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;

          return (
            <li key={item.label}>
              <button
                onClick={() => setActiveItem(item.label)}
                className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors group"
              >
                {/* Active background pill - uses layoutId for smooth transition between items */}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-bg"
                    className="absolute inset-0 bg-accent-purple/20 rounded-lg border border-accent-purple/30"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                {/* Icon */}
                <Icon
                  size={18}
                  className={`relative z-10 shrink-0 ${
                    isActive
                      ? "text-accent-purple"
                      : "text-text-secondary group-hover:text-text-primary transition-colors"
                  }`}
                />

                {/* Label - hidden when sidebar is collapsed */}
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className={`relative z-10 whitespace-nowrap ${
                        isActive ? "text-text-primary font-medium" : "text-text-secondary group-hover:text-text-primary"
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Collapse toggle button */}
      <div className="p-3 border-t border-border">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="
            w-full flex items-center justify-center p-2 rounded-lg
            text-text-muted hover:text-text-primary hover:bg-bg-hover
            transition-colors
          "
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>
    </motion.nav>
  );
}
