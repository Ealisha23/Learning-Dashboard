"use client";

// components/dashboard/ActivityTile.tsx
// Shows a GitHub-style activity/contribution graph
// The data is mocked (in a real app it'd come from the DB)

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { generateMockActivity } from "@/lib/mock-data";

// Map activity count to a color class
function getActivityColor(count: number): string {
  if (count === 0) return "bg-white/5";
  if (count === 1) return "bg-accent-purple/30";
  if (count === 2) return "bg-accent-purple/55";
  if (count === 3) return "bg-accent-purple/75";
  return "bg-accent-purple";
}

export default function ActivityTile() {
  const activityData = generateMockActivity();

  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        relative rounded-2xl overflow-hidden
        bg-bg-card border border-border
        hover:border-accent-purple/30
        hover:shadow-[0_0_20px_rgba(124,58,237,0.1)]
        p-5 col-span-2
        transition-shadow duration-300
      "
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Tile header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-accent-cyan" />
            <h2 className="text-text-primary font-medium text-sm">
              Learning Activity
            </h2>
          </div>
          <span className="text-text-muted text-xs">Last 12 weeks</span>
        </div>

        {/* Activity grid */}
        <div className="flex gap-1 overflow-x-auto pb-1">
          {/* Group days into weeks (7 days each) */}
          {Array.from({ length: 12 }, (_, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {activityData
                .slice(weekIndex * 7, weekIndex * 7 + 7)
                .map((day, dayIndex) => (
                  <motion.div
                    key={day.date}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: weekIndex * 0.03 + dayIndex * 0.01,
                      duration: 0.2,
                    }}
                    title={`${day.date}: ${day.count} sessions`}
                    className={`w-3 h-3 rounded-sm ${getActivityColor(day.count)} cursor-pointer hover:opacity-80 transition-opacity`}
                  />
                ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-text-muted text-xs">Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-3 h-3 rounded-sm ${getActivityColor(level)}`}
            />
          ))}
          <span className="text-text-muted text-xs">More</span>
        </div>
      </div>
    </motion.article>
  );
}
