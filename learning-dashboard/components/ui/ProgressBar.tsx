"use client";

// components/ui/ProgressBar.tsx
// Animated progress bar
// Animates from 0% to the target value on mount

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number; // 0 to 100
  color?: string; // Tailwind gradient classes
}

export default function ProgressBar({
  value,
  color = "from-accent-purple to-accent-blue",
}: ProgressBarProps) {
  // Start at 0, then animate to the real value after mount
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Small delay so the animation is visible when the card loads
    const timer = setTimeout(() => {
      setDisplayValue(value);
    }, 300);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="space-y-1.5">
      {/* Track */}
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        {/* Fill bar */}
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: "0%" }}
          animate={{ width: `${displayValue}%` }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          }}
        />
      </div>

      {/* Percentage text */}
      <p className="text-text-muted text-xs">{value}% complete</p>
    </div>
  );
}
