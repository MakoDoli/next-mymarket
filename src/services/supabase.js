import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xcoqcnkvmsfttacrpyrn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhjb3Fjbmt2bXNmdHRhY3JweXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzNTQ3NzcsImV4cCI6MjAyNjkzMDc3N30.c0_zBptN8_RuEzmfXa4p33f14iKBrUpwJpGN4v-X3nA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
