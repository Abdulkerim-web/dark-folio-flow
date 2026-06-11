import * as Supabase from '@supabase/supabase-js'

const supabaseUrl = 'https://bljbqihxahgvthdwxhop.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsamJxaWh4YWhndnRoZHd4aG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExOTE3NTMsImV4cCI6MjA5Njc2Nzc1M30.JsHf5ICe3wE5x8mrpWj1rUuo2mu3JSn2wGoYS8v3uA8';

export const supabase = Supabase.createClient(supabaseUrl, supabaseAnonKey)
