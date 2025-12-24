# MDX Infrastructure Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Set up MDX infrastructure for story-driven case studies and journey posts with static generation for GitHub Pages deployment.

**Architecture:** File-based content system using next-mdx-remote to parse MDX at build time, with dynamic routes that pre-generate all pages via generateStaticParams for static export compatibility.

**Tech Stack:** Next.js 16.1.1, next-mdx-remote, gray-matter, remark-gfm, react-syntax-highlighter

---

## Task 1: Install MDX Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install required packages**

Run:
```bash
npm install next-mdx-remote gray-matter remark-gfm rehype-highlight
```

Expected: Successfully installed packages, package.json and package-lock.json updated

**Step 2: Verify installation**

Run:
```bash
npm list next-mdx-remote gray-matter remark-gfm rehype-highlight
```

Expected: All packages listed with version numbers

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: add MDX dependencies for content management"
```

---

## Task 2: Create TypeScript Type Definitions

**Files:**
- Create: `lib/types/mdx.ts`

**Step 1: Create types directory**

Run:
```bash
mkdir -p lib/types
```

**Step 2: Write type definitions**

Create `lib/types/mdx.ts`:

```typescript
// Project frontmatter schema
export interface ProjectFrontmatter {
  title: string;
  description: string;
  tech: string[];
  previewImage: string;
  date: string;
  liveUrl?: string;
  sourceUrl?: string;
}

// Journey post frontmatter schema
export interface JourneyFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

// Project metadata (frontmatter + slug)
export interface ProjectMetadata extends ProjectFrontmatter {
  slug: string;
}

// Journey metadata (frontmatter + slug)
export interface JourneyMetadata extends JourneyFrontmatter {
  slug: string;
}

// Full project data with compiled content
export interface ProjectData extends ProjectMetadata {
  content: string;
}

// Full journey data with compiled content
export interface JourneyData extends JourneyMetadata {
  content: string;
}
```

**Step 3: Verify TypeScript compilation**

Run:
```bash
npx tsc --noEmit
```

Expected: No errors

**Step 4: Commit**

```bash
git add lib/types/mdx.ts
git commit -m "feat: add TypeScript definitions for MDX content"
```

---

## Task 3: Create MDX Utility Functions

**Files:**
- Create: `lib/mdx.ts`

**Step 1: Create utility file**

Create `lib/mdx.ts`:

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  ProjectFrontmatter,
  JourneyFrontmatter,
  ProjectMetadata,
  JourneyMetadata,
  ProjectData,
  JourneyData,
} from './types/mdx';

const projectsDirectory = path.join(process.cwd(), 'content/projects');
const journeyDirectory = path.join(process.cwd(), 'content/journey');

// Get all project slugs
export function getAllProjectSlugs(): string[] {
  // Check if directory exists, return empty array if not
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

// Get all journey post slugs
export function getAllJourneySlugs(): string[] {
  // Check if directory exists, return empty array if not
  if (!fs.existsSync(journeyDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(journeyDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

// Get all projects with metadata
export async function getAllProjects(): Promise<ProjectMetadata[]> {
  const slugs = getAllProjectSlugs();

  const projects = slugs.map((slug) => {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as ProjectFrontmatter),
    };
  });

  // Sort by date (newest first)
  return projects.sort((a, b) => (a.date > b.date ? -1 : 1));
}

// Get all journey posts with metadata
export async function getAllJourneyPosts(): Promise<JourneyMetadata[]> {
  const slugs = getAllJourneySlugs();

  const posts = slugs.map((slug) => {
    const fullPath = path.join(journeyDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as JourneyFrontmatter),
    };
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

// Get project by slug with full content
export async function getProjectBySlug(slug: string): Promise<ProjectData> {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as ProjectFrontmatter),
  };
}

// Get journey post by slug with full content
export async function getJourneyPostBySlug(slug: string): Promise<JourneyData> {
  const fullPath = path.join(journeyDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as JourneyFrontmatter),
  };
}
```

**Step 2: Verify TypeScript compilation**

Run:
```bash
npx tsc --noEmit
```

Expected: No errors

**Step 3: Commit**

```bash
git add lib/mdx.ts
git commit -m "feat: add MDX utility functions for content loading"
```

---

## Task 4: Create MDX Component Mappings

**Files:**
- Create: `components/mdx-components.tsx`

**Step 1: Create MDX components file**

Create `components/mdx-components.tsx`:

```typescript
import { MDXComponents } from 'mdx/types';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

// Custom code block component with syntax highlighting
function CodeBlock({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const language = className?.replace('language-', '') || 'text';

  return (
    <pre className="rounded-lg bg-muted p-4 overflow-x-auto my-6">
      <code className={className} {...props}>
        {children}
      </code>
    </pre>
  );
}

// Custom components for MDX
export const mdxComponents: MDXComponents = {
  // Override default elements with styled versions
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-semibold mt-8 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-lg leading-7 mb-4">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-primary underline hover:no-underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-6">
      {children}
    </blockquote>
  ),
  code: CodeBlock,
  pre: ({ children }) => <>{children}</>, // Let CodeBlock handle pre

  // Make shadcn/ui components available in MDX
  Card,
  Button,
  Badge,
};
```

**Step 2: Verify TypeScript compilation**

Run:
```bash
npx tsc --noEmit
```

Expected: No errors

**Step 3: Commit**

```bash
git add components/mdx-components.tsx
git commit -m "feat: add MDX component mappings for styled content"
```

---

## Task 5: Set Up Projects Dynamic Route

**Files:**
- Create: `app/projects/[slug]/page.tsx`

**Step 1: Create directory structure**

Run:
```bash
mkdir -p app/projects/[slug]
```

**Step 2: Create project page component**

Create `app/projects/[slug]/page.tsx`:

```typescript
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from '@/lib/mdx';
import { mdxComponents } from '@/components/mdx-components';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const project = await getProjectBySlug(params.slug);
    return {
      title: `${project.title} - Kris`,
      description: project.description,
      openGraph: {
        title: `${project.title} - Kris`,
        description: project.description,
        images: [project.previewImage],
      },
    };
  } catch {
    return {
      title: 'Project Not Found',
    };
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  let project;

  try {
    project = await getProjectBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Back navigation */}
      <Link href="/#projects">
        <Button variant="outline" className="mb-8">
          ← Back to Projects
        </Button>
      </Link>

      {/* Project header */}
      <article>
        <header className="mb-8">
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">{project.description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </Button>
            )}
            {project.sourceUrl && (
              <Button asChild variant="outline">
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  View Source
                </a>
              </Button>
            )}
          </div>
        </header>

        {/* MDX content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote
            source={project.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight],
              },
            }}
          />
        </div>
      </article>
    </main>
  );
}
```

**Step 3: Verify TypeScript compilation**

Run:
```bash
npx tsc --noEmit
```

Expected: No errors

**Step 4: Commit**

```bash
git add app/projects/[slug]/page.tsx
git commit -m "feat: add dynamic route for project case studies"
```

---

## Task 6: Set Up Journey Dynamic Route

**Files:**
- Create: `app/journey/[slug]/page.tsx`

**Step 1: Create directory structure**

Run:
```bash
mkdir -p app/journey/[slug]
```

**Step 2: Create journey post page component**

Create `app/journey/[slug]/page.tsx`:

```typescript
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import {
  getAllJourneySlugs,
  getJourneyPostBySlug,
} from '@/lib/mdx';
import { mdxComponents } from '@/components/mdx-components';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Generate static params for all journey posts
export async function generateStaticParams() {
  const slugs = getAllJourneySlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = await getJourneyPostBySlug(params.slug);
    return {
      title: `${post.title} - Kris`,
      description: post.excerpt,
      openGraph: {
        title: `${post.title} - Kris`,
        description: post.excerpt,
      },
    };
  } catch {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function JourneyPostPage({ params }: { params: { slug: string } }) {
  let post;

  try {
    post = await getJourneyPostBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Back navigation */}
      <Link href="/#journey">
        <Button variant="outline" className="mb-8">
          ← Back to Journey
        </Button>
      </Link>

      {/* Post header */}
      <article>
        <header className="mb-8">
          <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-muted-foreground mb-4">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        </header>

        {/* MDX content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight],
              },
            }}
          />
        </div>
      </article>
    </main>
  );
}
```

**Step 3: Verify TypeScript compilation**

Run:
```bash
npx tsc --noEmit
```

Expected: No errors

**Step 4: Commit**

```bash
git add app/journey/[slug]/page.tsx
git commit -m "feat: add dynamic route for journey posts"
```

---

## Task 7: Configure Next.js for Static Export

**Files:**
- Modify: `next.config.ts`

**Step 1: Read current config**

Run:
```bash
cat next.config.ts
```

**Step 2: Update Next.js config for GitHub Pages**

Modify `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

**Step 3: Test static build**

Run:
```bash
npm run build
```

Expected: Build completes successfully, creates `/out` directory

Note: Build may show warnings about missing content directories - this is expected and will be resolved in Phase 2

**Step 4: Verify out directory exists**

Run:
```bash
ls -la out
```

Expected: Directory exists with static HTML files

**Step 5: Commit**

```bash
git add next.config.ts
git commit -m "feat: configure Next.js for static export to GitHub Pages"
```

---

## Task 8: Create Content Directories

**Files:**
- Create: `content/projects/.gitkeep`
- Create: `content/journey/.gitkeep`

**Step 1: Create content directories**

Run:
```bash
mkdir -p content/projects content/journey
touch content/projects/.gitkeep content/journey/.gitkeep
```

**Step 2: Verify directories exist**

Run:
```bash
ls -la content/
```

Expected: Both `projects` and `journey` directories exist

**Step 3: Commit**

```bash
git add content/
git commit -m "feat: create content directories for MDX files"
```

---

## Task 9: Add Syntax Highlighting Styles

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Read current layout**

Run:
```bash
cat app/layout.tsx
```

**Step 2: Add highlight.js CSS import**

Modify `app/layout.tsx` to import syntax highlighting styles. Add this import at the top of the file:

```typescript
import 'highlight.js/styles/github-dark.css';
```

**Step 3: Verify build still works**

Run:
```bash
npm run build
```

Expected: Build completes successfully

**Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add syntax highlighting styles for code blocks"
```

---

## Task 10: Create Sample MDX Content for Testing

**Files:**
- Create: `content/projects/sample-project.mdx`
- Create: `content/journey/sample-post.mdx`

**Step 1: Create sample project**

Create `content/projects/sample-project.mdx`:

```mdx
---
title: "Sample Project"
description: "A test project to verify MDX infrastructure"
tech: ["Next.js", "TypeScript", "Tailwind"]
previewImage: "/images/placeholder.png"
date: "2024-12-24"
---

# Sample Project Case Study

This is a **sample project** to test the MDX infrastructure.

## The Challenge

Here's how I would describe a technical challenge...

## The Solution

And here's how I solved it:

```typescript
function solveProblem() {
  return "success";
}
```

## Results

The project was successful!
```

**Step 2: Create sample journey post**

Create `content/journey/sample-post.mdx`:

```mdx
---
title: "Sample Journey Post"
date: "2024-12-24"
excerpt: "A test post to verify MDX infrastructure for journey content"
tags: ["learning", "reflection"]
---

# My Learning Journey

This is a sample journey post to test the infrastructure.

## What I Learned

- MDX is powerful
- Static generation works great
- Content is easy to manage

## Next Steps

Keep building and learning!
```

**Step 3: Test dev server**

Run:
```bash
npm run dev
```

Then visit:
- http://localhost:3000/projects/sample-project
- http://localhost:3000/journey/sample-post

Expected: Both pages load successfully with styled MDX content

**Step 4: Commit**

```bash
git add content/
git commit -m "feat: add sample MDX content for testing"
```

---

## Verification Checklist

After completing all tasks, verify:

- [ ] All dependencies installed successfully
- [ ] TypeScript types compile without errors
- [ ] MDX utility functions created
- [ ] Project dynamic route renders MDX content
- [ ] Journey dynamic route renders MDX content
- [ ] Next.js configured for static export
- [ ] Static build completes successfully (`npm run build`)
- [ ] Sample pages accessible in dev mode
- [ ] Syntax highlighting styles applied
- [ ] All changes committed to git

**Test the build:**

```bash
npm run build
npm run start
```

Visit http://localhost:3000 and verify homepage loads.

---

## Next Steps

After Phase 1 completion:
- **Phase 2**: Content Creation (write real case studies and journey posts)
- **Phase 3**: Homepage Enhancement (update sections to pull from MDX)
- **Phase 4**: Navigation & UX
- **Phase 5**: Styling & Polish
- **Phase 6**: Deployment

---

## Notes

**Key decisions:**
- Using next-mdx-remote for maximum flexibility
- Static generation for GitHub Pages compatibility
- File-system based content management (simple, no database)
- Syntax highlighting via rehype-highlight
- All content directories created upfront to avoid build errors

**Common issues:**
- If build fails, check TypeScript errors with `npx tsc --noEmit`
- If MDX doesn't render, verify remark/rehype plugins are configured
- If routes 404, ensure generateStaticParams is implemented
- If styles missing, check highlight.js CSS import in layout
