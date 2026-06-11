"use client";

// components/dashboard/StatsTile.tsx
// A small tile showing quick summary stats

import { motion } from "framer-motion";
import { Clock, Trophy, Target } from "lucide-react";

const stats = [
  {
    icon: Clock,
    label: "Hours Learned",
    value: "48h",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Trophy,
    label: "Certificates",
    value: "3",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Target,
    label: "Weekly Goal",
    value: "85%",
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
];

export default function StatsTile() {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        relative rounded-2xl overflow-hidden
        bg-bg-card border border-border
        hover:border-accent-blue/30
        hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]
        p-5 flex flex-col gap-4
        transition-shadow duration-300
      "
    >
      <h2 className="text-text-primary font-medium text-sm">Your Stats</h2>

      <div className="flex flex-col gap-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div key={stat.label} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center shrink-0`}>
                <Icon size={15} className={stat.color} />
              </div>
              <div className="flex-1 flex items-center justify-between">
                <span className="text-text-secondary text-xs">{stat.label}</span>
                <span className="text-text-primary font-semibold text-sm">
                  {stat.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </motion.article>
  );
}
