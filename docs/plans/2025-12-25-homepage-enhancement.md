# Homepage Enhancement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Enhance the homepage with finalized hero copy, dynamic MDX-driven content for Projects and Journey sections, enhanced Tech Stack with icons and descriptions, and proper Contact links.

**Architecture:** Convert homepage to Server Component, integrate MDX utility functions to dynamically load project and journey content, add Lucide React icons to Tech Stack section, and update all sections to match the approved design from brainstorming session.

**Tech Stack:** Next.js 16 Server Components, TypeScript, Lucide React icons, MDX utilities from Phase 1

---

## Task 1: Update Hero Section with Finalized Copy

**Files:**
- Modify: `app/page.tsx:12-14`

**Step 1: Update hero text**

Replace the current hero text with the finalized copy from the design:

```typescript
<h1 className="text-5xl font-bold">Hi, I'm Kris 👋</h1>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  I solve technical problems, build applications, and document what I learn along the way.
</p>
```

**Step 2: Update CTA button links**

Update the buttons to link to the proper sections:

```typescript
<div className="flex justify-center gap-4 mt-6">
  <Button asChild>
    <a href="#projects">View Projects</a>
  </Button>
  <Button asChild variant="outline">
    <a href="#journey">Read My Journey</a>
  </Button>
</div>
```

**Step 3: Verify changes**

Run:
```bash
npm run dev
```

Visit http://localhost:3000 and verify:
- Hero text displays correctly
- Clicking "View Projects" scrolls to projects section
- Clicking "Read My Journey" scrolls to journey section

**Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: update hero section with finalized copy and working CTAs"
```

---

## Task 2: Enhance Tech Stack Section with Icons and Descriptions

**Files:**
- Modify: `app/page.tsx:1,25-47`

**Step 1: Import Lucide React icons**

Add icon imports at the top of the file:

```typescript
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code2, Database, Wrench } from "lucide-react";
```

**Step 2: Create tech stack data structure**

Add this before the component (after imports):

```typescript
const techStack = {
  frontend: [
    { name: "Next.js", description: "Learning through portfolio and client projects" },
    { name: "Vue 3", description: "Frontend component development" },
    { name: "Tailwind CSS", description: "Rapid UI development with utility-first approach" },
    { name: "shadcn/ui", description: "Accessible component library" },
  ],
  backend: [
    { name: "Laravel", description: "REST API development, business logic, 3+ years" },
    { name: "MySQL", description: "Database design and optimization" },
    { name: "REST API", description: "API design and implementation" },
  ],
  tools: [
    { name: "Git", description: "Version control and collaboration" },
    { name: "TypeScript", description: "Type-safe JavaScript development" },
    { name: "Docker", description: "Containerization for development" },
  ],
};
```

**Step 3: Update Tech Stack section**

Replace the Tech Stack section (lines 25-47) with:

```typescript
{/* SKILLS */}
<section id="skills" className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Tech Stack</h2>
  <div className="grid md:grid-cols-3 gap-6 mt-6">
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Code2 className="w-5 h-5 text-blue-500" />
        <h3 className="font-semibold">Frontend</h3>
      </div>
      <div className="space-y-3">
        {techStack.frontend.map((tech) => (
          <div key={tech.name}>
            <p className="font-medium">{tech.name}</p>
            <p className="text-sm text-muted-foreground">{tech.description}</p>
          </div>
        ))}
      </div>
    </Card>

    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Database className="w-5 h-5 text-green-500" />
        <h3 className="font-semibold">Backend</h3>
      </div>
      <div className="space-y-3">
        {techStack.backend.map((tech) => (
          <div key={tech.name}>
            <p className="font-medium">{tech.name}</p>
            <p className="text-sm text-muted-foreground">{tech.description}</p>
          </div>
        ))}
      </div>
    </Card>

    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Wrench className="w-5 h-5 text-gray-500" />
        <h3 className="font-semibold">Tools</h3>
      </div>
      <div className="space-y-3">
        {techStack.tools.map((tech) => (
          <div key={tech.name}>
            <p className="font-medium">{tech.name}</p>
            <p className="text-sm text-muted-foreground">{tech.description}</p>
          </div>
        ))}
      </div>
    </Card>
  </div>
</section>
```

**Step 4: Test the changes**

Run:
```bash
npm run dev
```

Visit http://localhost:3000 and verify:
- Three columns display (Frontend, Backend, Tools)
- Icons show for each category
- Each tech has name and description
- Responsive layout works (stacks on mobile)

**Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: enhance tech stack with icons and contextual descriptions"
```

---

## Task 3: Convert Homepage to Server Component and Load MDX Data

**Files:**
- Modify: `app/page.tsx:1,6`

**Step 1: Import MDX utilities**

Add imports for MDX data loading:

```typescript
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code2, Database, Wrench } from "lucide-react";
import { getAllProjects, getAllJourneyPosts } from "@/lib/mdx";
import Link from "next/link";
```

**Step 2: Convert to async Server Component**

Change the component signature from:

```typescript
export default function Home() {
```

To:

```typescript
export default async function Home() {
  const projects = await getAllProjects();
  const journeyPosts = await getAllJourneyPosts();
```

**Step 3: Verify TypeScript compilation**

Run:
```bash
npx tsc --noEmit
```

Expected: No errors

**Step 4: Test the component**

Run:
```bash
npm run dev
```

Expected: Page loads without errors (content won't change yet)

**Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "refactor: convert homepage to server component with MDX data loading"
```

---

## Task 4: Make Projects Section Dynamic

**Files:**
- Modify: `app/page.tsx:52-70`

**Step 1: Replace hardcoded projects with dynamic data**

Replace the Projects section (lines 52-70) with:

```typescript
{/* PROJECTS */}
<section id="projects" className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Projects</h2>
  <div className="grid md:grid-cols-2 gap-6 mt-6">
    {projects.map((project) => (
      <Card key={project.slug} className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="flex gap-3 mt-2">
          <Button asChild size="sm">
            <Link href={`/projects/${project.slug}`}>Read Case Study</Link>
          </Button>
          {project.liveUrl && (
            <Button asChild size="sm" variant="outline">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </Card>
    ))}
  </div>

  {projects.length === 0 && (
    <p className="text-center text-muted-foreground">
      No projects yet. Check back soon!
    </p>
  )}
</section>
```

**Step 2: Test the dynamic projects**

Run:
```bash
npm run dev
```

Visit http://localhost:3000 and verify:
- Example project card displays
- "Read Case Study" button links to `/projects/example-project`
- Tech badges show correctly
- Live Demo button only shows if liveUrl exists

**Step 3: Build and verify static generation**

Run:
```bash
npm run build
```

Expected: Build succeeds, projects section pre-rendered

**Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: make projects section dynamic with MDX data"
```

---

## Task 5: Make Journey Section Dynamic

**Files:**
- Modify: `app/page.tsx:75-88`

**Step 1: Replace hardcoded journey with dynamic data**

Replace the Journey section (lines 75-88) with:

```typescript
{/* JOURNEY */}
<section id="journey" className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Journey</h2>
  <p className="text-center text-muted-foreground">
    Documenting what I learned, challenges I faced, and how I grew as a developer.
  </p>
  <div className="grid md:grid-cols-2 gap-6 mt-6">
    {journeyPosts.map((post) => (
      <Card key={post.slug} className="p-6 space-y-2">
        <h3 className="font-semibold">{post.title}</h3>
        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
        <Button asChild size="sm" className="mt-4">
          <Link href={`/journey/${post.slug}`}>Read More</Link>
        </Button>
      </Card>
    ))}
  </div>

  {journeyPosts.length === 0 && (
    <p className="text-center text-muted-foreground">
      No journey posts yet. Check back soon!
    </p>
  )}
</section>
```

**Step 2: Test the dynamic journey section**

Run:
```bash
npm run dev
```

Visit http://localhost:3000 and verify:
- Sample post card displays
- Post title, excerpt, and tags show correctly
- "Read More" button links to `/journey/sample-post`
- Tags have outline variant

**Step 3: Build and verify static generation**

Run:
```bash
npm run build
```

Expected: Build succeeds, journey section pre-rendered

**Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: make journey section dynamic with MDX data"
```

---

## Task 6: Update Contact Section with Real Links

**Files:**
- Modify: `app/page.tsx:93-101`

**Step 1: Update Contact section with proper links**

Replace the Contact section (lines 93-101) with:

```typescript
{/* CONTACT */}
<section id="contact" className="text-center space-y-4">
  <h2 className="text-3xl font-semibold">Contact Me</h2>
  <p className="text-muted-foreground">
    Feel free to reach out via GitHub, LinkedIn, or email.
  </p>
  <div className="flex justify-center gap-4 mt-4">
    <Button asChild>
      <a href="mailto:youremail@example.com">Email</a>
    </Button>
    <Button asChild variant="outline">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </Button>
    <Button asChild variant="outline">
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </Button>
  </div>
</section>
```

**Step 2: Test contact links**

Run:
```bash
npm run dev
```

Visit http://localhost:3000 and verify:
- Email button opens mailto link
- GitHub button opens in new tab with proper security
- LinkedIn button opens in new tab with proper security

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: update contact section with proper external link handling"
```

---

## Task 7: Update Homepage Metadata

**Files:**
- Modify: `app/page.tsx` (add metadata export)

**Step 1: Add metadata export**

Add this export before the component definition:

```typescript
export const metadata = {
  title: "Kris | Full-Stack Developer Portfolio",
  description: "I solve technical problems, build applications, and document what I learn along the way. Full-stack developer with Laravel and Next.js experience.",
  openGraph: {
    title: "Kris | Full-Stack Developer Portfolio",
    description: "I solve technical problems, build applications, and document what I learn along the way.",
    type: "website",
  },
};
```

**Step 2: Verify metadata in build**

Run:
```bash
npm run build
```

Expected: Build succeeds with proper metadata

**Step 3: Test metadata**

Check the HTML source in dev mode to verify meta tags are present

**Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add SEO metadata to homepage"
```

---

## Verification Checklist

After completing all tasks, verify:

- [ ] Hero section shows "Hi, I'm Kris 👋" with finalized copy
- [ ] Hero CTAs link to #projects and #journey
- [ ] Tech Stack has 3 columns with icons and descriptions
- [ ] Projects section loads from MDX (shows example-project)
- [ ] Journey section loads from MDX (shows sample-post)
- [ ] All links work correctly
- [ ] Contact section has proper mailto and external links
- [ ] TypeScript compiles without errors (`npx tsc --noEmit`)
- [ ] Build succeeds (`npm run build`)
- [ ] All commits have descriptive messages

**Final build test:**

```bash
npm run build
npm run start
```

Visit http://localhost:3000 and manually test all sections.

---

## Notes

**Key decisions:**
- Using Server Component for data loading (no client-side fetching)
- Placeholder content uses existing sample MDX files
- External links open in new tabs with security attributes
- Tech Stack expanded to 3 columns for better organization
- Empty state messages for projects/journey if no content exists

**Common issues:**
- If MDX files are missing, empty state messages will show
- Icons require lucide-react (already installed)
- Server Component means no useState/useEffect (all data loaded at build time)
- Link component from next/link for internal navigation

**After Phase 3:**
- Phase 4: Navigation & UX (sticky navbar, theme toggle, smooth scroll)
- Phase 5: Styling & Polish (hover states, transitions, cross-browser testing)
- Phase 6: Deployment (GitHub Actions, GitHub Pages deployment)
