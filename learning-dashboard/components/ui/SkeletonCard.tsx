// components/ui/SkeletonCard.tsx
// Shown while courses are loading from Supabase
// Has a pulsing animation to signal that content is coming

export default function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-bg-card border border-border p-5 space-y-4">
      {/* Icon placeholder */}
      <div className="w-10 h-10 rounded-lg bg-white/5 animate-pulse" />

      {/* Title placeholder */}
      <div className="space-y-2">
        <div className="h-4 w-3/4 bg-white/5 rounded animate-pulse" />
        <div className="h-3 w-1/2 bg-white/5 rounded animate-pulse" />
      </div>

      {/* Progress bar placeholder */}
      <div className="space-y-1.5">
        <div className="h-1.5 w-full bg-white/5 rounded-full animate-pulse" />
        <div className="h-3 w-16 bg-white/5 rounded animate-pulse" />
      </div>
    </div>
  );
}

// Show multiple skeleton cards at once
export function SkeletonGrid() {
  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </>
  );
}
