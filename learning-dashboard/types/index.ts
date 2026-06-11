// Types for data coming from Supabase

export interface Course {
  id: string;
  title: string;
  progress: number; // 0 to 100
  icon_name: string; // Lucide icon name, e.g. "BookOpen"
  created_at: string;
}

// The sidebar nav items
export interface NavItem {
  label: string;
  icon: string;
  href: string;
}

// Activity data for the contribution graph
export interface ActivityDay {
  date: string;
  count: number; // 0 = no activity, 1-4 = levels
}
