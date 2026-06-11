// app/page.tsx
// Root page - just redirects to the dashboard
// In a real app this would be a login/landing page

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
}
