# LearnFlow – Student Dashboard

A futuristic learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.
## watch live project here - https://learning-dashboard-delta-ten.vercel.app/dashboard

## Getting Started

### 1. Clone and install dependencies

```bash
git clone <your-repo-url>
cd learning-dashboard
npm install
```

### 2. Set up Supabase

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to the SQL editor and run this to create the courses table:

```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0,
  icon_name text not null default 'BookOpen',
  created_at timestamp with time zone default now()
);

-- Add some sample data
insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'Code2'),
  ('TypeScript Mastery', 45, 'FileCode'),
  ('Next.js App Router', 90, 'Layers'),
  ('Tailwind CSS Deep Dive', 30, 'Palette');
```

4. Go to Settings → API and copy your project URL and anon key

### 3. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

> **Note:** If you skip this step, the app still works! It falls back to built-in mock data.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Architecture Notes

### Server vs Client Components

I followed Next.js App Router conventions:

- **Server Components** (no `"use client"`): `DashboardPage`, `CoursesSection` – these run on the server and fetch data from Supabase. The Supabase credentials never reach the browser.
- **Client Components** (have `"use client"`): `Sidebar`, `CourseCard`, `CourseGrid`, `ActivityTile`, etc. – anything that needs browser APIs, `useState`, or Framer Motion animations.

### Data Fetching

`lib/fetch-courses.ts` is the single place where Supabase is called. It:
1. Checks if Supabase is configured
2. Tries to fetch from the database
3. Falls back to mock data if anything fails

This makes local development easy – you don't need Supabase set up to see the UI.

### Animations

All Framer Motion animations use only `opacity`, `scale`, and `transform` (translateY). This avoids layout shifts and keeps animations hardware-accelerated.

Key animations:
- **Staggered entrance**: Course cards animate in one by one using `staggerChildren`
- **Card hover**: Spring physics (`stiffness: 300, damping: 20`) for a natural feel
- **Sidebar**: `layoutId="active-nav-bg"` moves the highlight pill smoothly between nav items
- **Progress bars**: Animate from 0% to actual value on mount

### Responsive Layout

- **Mobile (<768px)**: Single column grid, bottom nav bar replaces sidebar
- **Tablet (768-1024px)**: 2-column grid, sidebar shows icons only (collapsed)  
- **Desktop (>1024px)**: 4-column bento grid, full sidebar

---

## Challenges

The trickiest part was making `CourseGrid` work as a Client Component (for Framer Motion) while keeping the data fetch in a Server Component. The solution was to fetch in the server, pass the data as props, and let the client component handle the animation.

Also, getting the Tailwind custom colors to work with the dark-only theme required carefully setting up `tailwind.config.ts` with the right background and text tokens.

---

## Deployment

1. Push to GitHub
2. Import into [Vercel](https://vercel.com)
3. Add your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel's environment variables settings
4. Deploy!

## Architecture of the dashboard

```text
learning-dashboard/
├── app/
│   ├── layout.tsx          ← root HTML setup, Inter font, dark bg
│   ├── globals.css         ← Tailwind + custom scrollbar + shimmer
│   ├── page.tsx            ← redirects to /dashboard
│   └── dashboard/
│       ├── layout.tsx      ← sidebar + main content split
│       ├── page.tsx        ← SERVER component, fetches Supabase data
│       └── loading.tsx     ← skeleton shown while data loads
├── components/
│   ├── dashboard/
│   │   ├── Sidebar.tsx     ← collapsible nav with layoutId animation
│   │   ├── MobileNav.tsx   ← bottom bar for phones
│   │   ├── HeroTile.tsx    ← greeting + streak badge
│   │   ├── CourseCard.tsx  ← individual course tile
│   │   ├── CourseGrid.tsx  ← stagger container (CLIENT)
│   │   ├── ActivityTile.tsx← contribution graph
│   │   └── StatsTile.tsx   ← quick stats
│   └── ui/
│       ├── ProgressBar.tsx ← animates 0→value on mount
│       ├── SkeletonCard.tsx← pulsing loader placeholders
│       ├── DynamicIcon.tsx ← maps DB string → Lucide icon
│       └── ErrorMessage.tsx← graceful DB error display
├── lib/
│   ├── supabase.ts         ← Supabase client factory
│   ├── fetch-courses.ts    ← tries Supabase, falls back to mock
│   └── mock-data.ts        ← works without a DB connection
└── types/index.ts          ← Course, NavItem, ActivityDay interfaces

