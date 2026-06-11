-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public INSERT for contact submissions
CREATE POLICY "Allow public insert on contact_submissions"
ON public.contact_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- Create projects table
CREATE TABLE public.projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    live_url TEXT,
    github_url TEXT,
    tags TEXT[] DEFAULT '{}'::TEXT[]
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Allow public SELECT on projects
CREATE POLICY "Allow public read on projects"
ON public.projects
FOR SELECT
TO public
USING (true);

-- Create experience table
CREATE TABLE public.experience (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    role TEXT NOT NULL,
    company TEXT NOT NULL,
    period TEXT NOT NULL,
    description TEXT NOT NULL
);

ALTER TABLE public.experience ENABLE ROW LEVEL SECURITY;

-- Allow public SELECT on experience
CREATE POLICY "Allow public read on experience"
ON public.experience
FOR SELECT
TO public
USING (true);

-- Create skills table
CREATE TABLE public.skills (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    name TEXT NOT NULL,
    icon_name TEXT NOT NULL,
    category TEXT NOT NULL
);

ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;

-- Allow public SELECT on skills
CREATE POLICY "Allow public read on skills"
ON public.skills
FOR SELECT
TO public
USING (true);
