// app/dashboard/page.tsx
// THE MAIN DASHBOARD PAGE
// This is a Server Component - it runs on the server and fetches data from Supabase
// No "use client" at the top = Server Component by default in Next.js App Router

import { Suspense } from "react";
import { fetchCourses } from "@/lib/fetch-courses";
import HeroTile from "@/components/dashboard/HeroTile";
import CourseGrid from "@/components/dashboard/CourseGrid";
import ActivityTile from "@/components/dashboard/ActivityTile";
import StatsTile from "@/components/dashboard/StatsTile";
import { SkeletonGrid } from "@/components/ui/SkeletonCard";

// This component fetches courses and renders the grid
// We separate it so we can wrap just this part in Suspense
async function CoursesSection() {
  // This runs on the server! The Supabase fetch happens here.
  const courses = await fetchCourses();

  return <CourseGrid courses={courses} />;
}

export default async function DashboardPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">

      {/* Page heading */}
      <header className="mb-6">
        <p className="text-text-muted text-sm">Student Dashboard</p>
        <h1 className="text-text-primary font-bold text-xl mt-0.5">
          Overview
        </h1>
      </header>

      {/* Bento Grid
          - Mobile: single column
          - Tablet: 2 columns
          - Desktop: 4 columns
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Row 1: Hero tile (wide) + Stats */}
        {/* Hero: spans 2 cols on md+, 3 on lg */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <HeroTile />
        </div>

        {/* Stats tile: 1 col */}
        <div className="col-span-1">
          <StatsTile />
        </div>

        {/* Row 2: Course cards - 4 courses = 4 cols on desktop, 2x2 on tablet */}
        {/* 
          Suspense wraps the async data fetch.
          While courses are loading, it shows skeleton cards.
          Once loaded, CourseGrid animates in with stagger.
        */}
        <Suspense fallback={<SkeletonGrid />}>
          <CoursesSection />
        </Suspense>

        {/* Row 3: Activity graph - spans full width (2 cols on tablet, 4 on desktop) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <ActivityTile />
        </div>

      </div>
    </div>
  );
}
