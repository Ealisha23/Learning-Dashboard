"use client";

// components/dashboard/MobileNav.tsx
// Bottom navigation bar shown on mobile screens
// Shows on < md breakpoint (instead of the sidebar)

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, BarChart2, User, Settings } from "lucide-react";

const navItems = [
  { label: "Home", icon: LayoutDashboard },
  { label: "Courses", icon: BookOpen },
  { label: "Progress", icon: BarChart2 },
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
];

export default function MobileNav() {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-card border-t border-border px-2 pb-safe">
      <ul className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;

          return (
            <li key={item.label}>
              <button
                onClick={() => setActiveItem(item.label)}
                className="flex flex-col items-center gap-1 px-3 py-3 relative"
              >
                {/* Active indicator dot */}
                {isActive && (
                  <motion.div
                    layoutId="mobile-active"
                    className="absolute top-2 w-4 h-0.5 bg-accent-purple rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <Icon
                  size={20}
                  className={isActive ? "text-accent-purple" : "text-text-muted"}
                />
                <span
                  className={`text-xs ${isActive ? "text-accent-purple" : "text-text-muted"}`}
                >
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
