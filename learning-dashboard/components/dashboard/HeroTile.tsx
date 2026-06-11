"use client";

// components/dashboard/HeroTile.tsx
// The big welcome tile at the top of the dashboard
// Shows a greeting + learning streak

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

// Hard-coded for now - in a real app this would come from user auth
const USER_NAME = "Alex";
const STREAK_DAYS = 12;

export default function HeroTile() {
  // Figure out the time of day for a friendly greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <article
      className="
        relative rounded-2xl overflow-hidden
        bg-bg-card border border-border
        p-6 col-span-2
      "
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-purple/10 via-transparent to-transparent pointer-events-none" />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex items-start justify-between flex-wrap gap-4">
        {/* Left: Greeting text */}
        <div>
          <p className="text-text-secondary text-sm mb-1">
            {getGreeting()} 👋
          </p>
          <h1 className="text-text-primary text-2xl font-bold">
            Welcome back, {USER_NAME}
          </h1>
          <p className="text-text-muted text-sm mt-2">
            You have 3 courses in progress. Keep it up!
          </p>
        </div>

        {/* Right: Streak badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="
            flex items-center gap-2 px-4 py-3 rounded-xl
            bg-gradient-to-r from-orange-500/20 to-yellow-500/20
            border border-orange-500/30
          "
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Flame size={20} className="text-orange-400" />
          </motion.div>
          <div>
            <p className="text-text-primary font-bold text-lg leading-none">
              {STREAK_DAYS}
            </p>
            <p className="text-orange-400/80 text-xs">day streak</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom stats row */}
      <div className="relative z-10 grid grid-cols-3 gap-4 mt-6 pt-5 border-t border-border/50">
        {[
          { label: "Courses", value: "4" },
          { label: "Hours this week", value: "6.5" },
          { label: "Completed", value: "2" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-text-primary font-semibold">{stat.value}</p>
            <p className="text-text-muted text-xs mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
