// components/ui/ErrorMessage.tsx
// Shown when the Supabase fetch completely fails
// Gives the user useful information about what went wrong

import { AlertTriangle } from "lucide-react";

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({
  message = "Something went wrong loading your courses.",
}: ErrorMessageProps) {
  return (
    <div className="col-span-2 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-red-500/20 bg-red-500/5 p-8 text-center">
      <AlertTriangle size={24} className="text-red-400" />
      <div>
        <p className="text-text-primary text-sm font-medium">
          Couldn&apos;t load courses
        </p>
        <p className="text-text-muted text-xs mt-1">{message}</p>
      </div>
    </div>
  );
}
