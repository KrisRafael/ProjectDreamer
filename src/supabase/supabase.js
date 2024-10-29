import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("https://yudrhsbluzdajvvrfzhu.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1ZHJoc2JsdXpkYWp2dnJmemh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NDQ3ODIsImV4cCI6MjA0NTAyMDc4Mn0.76OMPBmigqdIKbEC0W6wTVupKHo-mh0snEFt5-ikzGc");