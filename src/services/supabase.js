import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xcoqcnkvmsfttacrpyrn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhjb3Fjbmt2bXNmdHRhY3JweXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzNTQ3NzcsImV4cCI6MjAyNjkzMDc3N30.c0_zBptN8_RuEzmfXa4p33f14iKBrUpwJpGN4v-X3nA";
const supabase = createClient(supabaseUrl, supabaseKey);

// export const supabaseAuthUrl = "https://ulyslilezssptwyntsdw.supabase.co";

// const supabaseAuthKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVseXNsaWxlenNzcHR3eW50c2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMzQ4NzIsImV4cCI6MjAzMjkxMDg3Mn0.GAs9PoaAIG9oSQZzZFSlPp7H30WZ2LHDslj0cZRI7UM"

// export const supabaseAuth = createClient(supabaseAuthUrl, supabaseAuthKey)
export default supabase;
