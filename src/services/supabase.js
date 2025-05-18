import { createClient } from "@supabase/supabase-js";

//import dotenv from "dotenv";

//dotenv.config();

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabaseKey = String(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

console.log("SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("SUPABASE ANON KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
