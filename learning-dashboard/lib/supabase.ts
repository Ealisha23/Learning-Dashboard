// lib/supabase.ts
// This creates a Supabase client for use in server components

import { createClient } from "@supabase/supabase-js";

// These env vars are set in .env.local (never commit the actual values!)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create a single Supabase client instance for server usage
export function createSupabaseClient() {
  return createClient(supabaseUrl, supabaseAnonKey);
}
