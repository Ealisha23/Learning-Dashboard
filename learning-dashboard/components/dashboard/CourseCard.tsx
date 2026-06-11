"use client";

// components/dashboard/CourseCard.tsx
// A single course tile in the bento grid
// Client component because it has hover animations

import { motion } from "framer-motion";
import { Course } from "@/types";
import ProgressBar from "@/components/ui/ProgressBar";
import DynamicIcon from "@/components/ui/DynamicIcon";

// Pick a gradient color per course based on its index
const cardGradients = [
  "from-purple-500/15 to-blue-500/15",
  "from-cyan-500/15 to-teal-500/15",
  "from-pink-500/15 to-rose-500/15",
  "from-amber-500/15 to-orange-500/15",
];

const iconColors = [
  "text-purple-400",
  "text-cyan-400",
  "text-pink-400",
  "text-amber-400",
];

const progressColors = [
  "from-purple-500 to-blue-500",
  "from-cyan-500 to-teal-500",
  "from-pink-500 to-rose-500",
  "from-amber-500 to-orange-500",
];

interface CourseCardProps {
  course: Course;
  index: number; // used for color variations
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const colorIndex = index % 4;

  return (
    <motion.article
      // Hover: scale up slightly + show border glow
      whileHover={{
        scale: 1.02,
        // We can't do CSS glow with transform only, so we use a box shadow approach
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        relative rounded-2xl overflow-hidden
        bg-bg-card border border-border
        hover:border-accent-purple/40
        hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]
        p-5 flex flex-col gap-4
        cursor-pointer
        transition-shadow duration-300
      "
    >
      {/* Subtle gradient background mesh */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${cardGradients[colorIndex]} opacity-60 pointer-events-none`}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Card content */}
      <div className="relative z-10 flex flex-col gap-4 h-full">
        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
          <DynamicIcon
            name={course.icon_name}
            size={18}
            className={iconColors[colorIndex]}
          />
        </div>

        {/* Title */}
        <div className="flex-1">
          <h3 className="text-text-primary font-medium text-sm leading-snug">
            {course.title}
          </h3>
        </div>

        {/* Animated progress bar */}
        <ProgressBar
          value={course.progress}
          color={progressColors[colorIndex]}
        />
      </div>
    </motion.article>
  );
}
