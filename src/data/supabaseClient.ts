import type { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

export const createPublicClient = () => {

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error("MISSING: NEXT_PUBLIC_SUPABASE_URL");
  }
  if (!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
    throw new Error("MISSING: NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
  }

  return (createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL, 
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  ));
}

export const createSecretClient = () => {

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error("MISSING: NEXT_PUBLIC_SUPABASE_URL");
  }
  if (!process.env.SUPABASE_SECRET_KEY) {
    throw new Error("MISSING: SUPABASE_SECRET_KEY");
  }

  return (createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL, 
    process.env.SUPABASE_SECRET_KEY
  ));
}