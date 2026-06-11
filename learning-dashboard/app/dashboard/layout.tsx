// app/dashboard/layout.tsx
// Layout for the dashboard section
// Handles the sidebar + main content split

import Sidebar from "@/components/dashboard/Sidebar";
import MobileNav from "@/components/dashboard/MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Full screen flex container
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - hidden on mobile, shown on md+ */}
      <Sidebar />

      {/* Main content area - scrollable */}
      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        {children}
      </main>

      {/* Bottom nav - shown on mobile only */}
      <MobileNav />
    </div>
  );
}
