// app/dashboard/loading.tsx
// Next.js automatically shows this while the page is loading
// It mirrors the layout of the actual dashboard but with skeleton placeholders

import { SkeletonGrid } from "@/components/ui/SkeletonCard";

export default function DashboardLoading() {
  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto">
      {/* Header skeleton */}
      <div className="mb-8">
        <div className="h-4 w-32 bg-white/5 rounded animate-pulse mb-2" />
        <div className="h-7 w-48 bg-white/5 rounded animate-pulse" />
      </div>

      {/* Bento grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Hero tile skeleton - spans 2 cols */}
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-bg-card border border-border h-40 animate-pulse" />

        {/* Stats tile skeleton */}
        <div className="rounded-2xl bg-bg-card border border-border h-40 animate-pulse" />

        {/* Empty skeleton */}
        <div className="rounded-2xl bg-bg-card border border-border h-40 animate-pulse" />

        {/* Course card skeletons */}
        <SkeletonGrid />

        {/* Activity tile skeleton - spans 2 cols */}
        <div className="col-span-1 md:col-span-2 rounded-2xl bg-bg-card border border-border h-40 animate-pulse" />
      </div>
    </div>
  );
}
