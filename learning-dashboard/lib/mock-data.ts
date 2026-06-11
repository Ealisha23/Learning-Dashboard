// lib/mock-data.ts
// Fallback data when Supabase isn't connected yet
// This makes it easy to develop the UI without a database

import { Course } from "@/types";

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "Advanced React Patterns",
    progress: 75,
    icon_name: "Code2",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "TypeScript Mastery",
    progress: 45,
    icon_name: "FileCode",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Next.js App Router",
    progress: 90,
    icon_name: "Layers",
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Tailwind CSS Deep Dive",
    progress: 30,
    icon_name: "Palette",
    created_at: new Date().toISOString(),
  },
];

// Generate some fake activity data for the last 12 weeks
export function generateMockActivity() {
  const days = [];
  const today = new Date();

  for (let i = 83; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    // Random activity level (0 = no activity, heavier on weekdays)
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const maxCount = isWeekend ? 2 : 5;
    const count = Math.random() > 0.3 ? Math.floor(Math.random() * maxCount) : 0;

    days.push({
      date: date.toISOString().split("T")[0],
      count,
    });
  }

  return days;
}
