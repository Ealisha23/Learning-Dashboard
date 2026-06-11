// lib/fetch-courses.ts
// This runs on the server (inside a Server Component)
// It tries Supabase first. If that fails, it returns mock data so the app still works.

import { createSupabaseClient } from "./supabase";
import { mockCourses } from "./mock-data";
import { Course } from "@/types";

export async function fetchCourses(): Promise<Course[]> {
  // If Supabase env vars aren't set properly, just use mock data
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL === "https://placeholder.supabase.co"
  ) {
    console.log("Supabase not configured - using mock data");
    return mockCourses;
  }

  try {
    const supabase = createSupabaseClient();

    // Fetch all courses, ordered by when they were created
    const { data, error } = await supabase
      .from("courses")
      .select("id, title, progress, icon_name, created_at")
      .order("created_at", { ascending: true });

    if (error) {
      // Log the error but don't crash the app
      console.error("Supabase error:", error.message);
      return mockCourses;
    }

    // If the table is empty, use mock data
    if (!data || data.length === 0) {
      return mockCourses;
    }

    return data as Course[];
  } catch (err) {
    // Network errors, etc.
    console.error("Failed to connect to Supabase:", err);
    return mockCourses;
  }
}
