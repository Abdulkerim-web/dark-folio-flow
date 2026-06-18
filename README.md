# React + Vite + shadcn/ui Starter Template

A modern React starter template built with Vite, TypeScript, Tailwind CSS, and shadcn/ui components with Supabase integration.

## 🚀 Features

- ⚡️ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Latest React with hooks support
- 🎯 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautifully designed components built with Radix UI
- 📦 **Path Mapping** - Clean imports with `@/` prefix

## 📦 Included shadcn/ui Components

- Button
- Card
- Input
- Label
- Badge
- Dialog
- And more...
## 🛠️ Getting Started

1. **Install dependencies**

   ```bash
   bun install
   ```

2. **Start development server**

   ```bash
   bun run dev
   ```

3. **Build for production**

   ```bash
   bun run build
   ```

4. **Preview production build**

   ```bash
   bun run preview
   ```

## 🗄️ Supabase Setup

### 1. Configure Environment Variables

Update the `.env.local` file with your Supabase credentials:

```bash
SUPABASE_URL=https://slozrkqbameojqilqynw.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsb3pya3FiYW1lb2pxaWxxeW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3NjQ2MjgsImV4cCI6MjA5NzM0MDYyOH0.6Cmw2ah9HGLfNOPv95wxRr8nGfHSmm85rKOtAn_Jz88
```

### 2. Create the contact_submissions Table

**Option A: Run the SQL script (Recommended)**

```bash
node create-table.js
```

This will output the SQL you need to run in your Supabase SQL editor.

**Option B: Run the migration script**

```bash
node apply-migration.js
```

This script will:
1. Check if the table exists
2. If not, provide clear instructions on how to create it
3. Insert test data if the table exists

**Option C: Manual SQL**

Run this SQL directly in your Supabase SQL editor:

```sql
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
```

### 3. Test the Connection

Run the migration script to verify the connection:

```bash
node apply-migration.js
```

### 3. Vercel Deployment

Add these environment variables to your Vercel project:

- `VITE_SUPABASE_URL` - `https://slozrkqbameojqilqynw.supabase.co`
- `VITE_SUPABASE_ANON_KEY` - `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (first 50 chars are sufficient)

### 4. Database Setup

The `contact_submissions` table is already created in the migration file (`supabase/migrations/20240520120000_init_portfolio_tables.sql`). If you need to recreate it, run this SQL in your Supabase SQL editor:

```sql
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
```

### 3. Database Setup

The `contact_submissions` table is already created in the migration file (`supabase/migrations/20240520120000_init_portfolio_tables.sql`). If you need to recreate it, run this SQL in your Supabase SQL editor:

```sql
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
```

### 4. Vercel Deployment

Add these environment variables to your Vercel project:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anon key

The project is configured for Vercel deployment with `vercel.json`.

## 📁 Project Structure

```
/src/
  ├── components/
  │   └── ui/              # shadcn/ui components
  ├── lib/
  │   └── utils.ts         # Utility functions
  ├── App.tsx              # Main application component
  ├── index.css            # Global styles with Tailwind
  ├── main.tsx             # Application entry point
  └── integrations/
      └── supabase/         # Supabase integration
          └── client.ts    # Supabase client configuration
```

## 📁 Project Structure

```
src/
├── components/
│   └── ui/              # shadcn/ui components
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main application component
├── index.css            # Global styles with Tailwind
└── main.tsx             # Application entry point
```

## 🎨 Customization

### Adding New shadcn/ui Components

This template is pre-configured with shadcn/ui. You can add more components by creating them in the `src/components/ui/` directory.

### Tailwind Configuration

The Tailwind configuration is set up with shadcn/ui color variables. You can customize colors and other design tokens in:

- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - CSS custom properties for themes

### TypeScript Configuration

Path mapping is configured for clean imports:

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## 🌗 Dark Mode

The template includes dark mode support through Tailwind's `dark:` classes and CSS custom properties.

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

**⚡ Powered by [Dala](https://dala.gebeya.com)** - The AI-powered web development platform that helps you build full-stack applications faster.

## 🔗 Links

- **GitHub Repository**: [dark-folio-flow](https://github.com/Abdulkerim-web/dark-folio-flow)
- **GitHub Profile**: [Abdulkerim-web](https://github.com/Abdulkerim-web)

---

## 🤖 What is Dala?

**[Gebeya Dala](https://dala.gebeya.com)** is an intelligent web development platform that accelerates your React development workflow. Build, preview, and deploy web applications, and instant development environments.

🔗 **Try Dala:** [dala.gebeya.com](https://dala.gebeya.com)

### Why Use Dala?

- **AI-Powered Development** - Get intelligent code suggestions and automated component generation
- **Instant Preview** - See your changes live in real-time sandbox environments
- **Zero Setup** - No local environment configuration needed
- **Collaborative** - Build and share projects with your team
- **Deployment Ready** - One-click deployment to production

---

Built with ❤️ by the Dala team to help developers build faster and smarter.
