import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabaseKey = String(process.env.SUPABASE_KEY);
console.log(supabaseKey);

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
