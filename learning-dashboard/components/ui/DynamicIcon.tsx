// components/ui/DynamicIcon.tsx
// Renders a Lucide icon based on a string name (from the database)
// We map each possible icon_name to the actual Lucide component

import {
  Code2,
  FileCode,
  Layers,
  Palette,
  BookOpen,
  Brain,
  Database,
  Globe,
  Cpu,
  Terminal,
  Star,
  Zap,
  LucideProps,
} from "lucide-react";

// Map of icon names (stored in DB) to actual components
// Add more icons here as needed
const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Code2,
  FileCode,
  Layers,
  Palette,
  BookOpen,
  Brain,
  Database,
  Globe,
  Cpu,
  Terminal,
  Star,
  Zap,
};

interface DynamicIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function DynamicIcon({
  name,
  size = 20,
  className = "",
}: DynamicIconProps) {
  // Look up the icon, fall back to BookOpen if not found
  const Icon = iconMap[name] ?? BookOpen;

  return <Icon size={size} className={className} />;
}
