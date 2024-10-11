import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gkvsnmcywgascekueyme.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrdnNubWN5d2dhc2Nla3VleW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyNDg4MzMsImV4cCI6MjAxODgyNDgzM30.1UxAl1wiO8lmjm_z9OCP5mz0NipEIvtrH52aSC336VA";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
