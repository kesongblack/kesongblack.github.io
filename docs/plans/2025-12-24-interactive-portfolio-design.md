# Interactive Portfolio Design

**Date:** 2025-12-24
**Author:** Kris
**Purpose:** Full-stack developer portfolio for job applications, showcasing technical problem-solving and documentation skills

---

## Overview

An interactive Next.js portfolio deployed on GitHub Pages that demonstrates full-stack development capabilities (Laravel + Next.js), problem-solving through story-driven case studies, and strong technical communication skills. The portfolio targets full-stack developer positions while highlighting documentation expertise.

---

## Design Goals

1. **Showcase problem-solving process** through deep-dive case studies
2. **Demonstrate technical breadth** with honest context about skill levels
3. **Highlight communication skills** via clear documentation and storytelling
4. **Professional presentation** suitable for job applications
5. **MVP approach** focused on core value, avoiding over-engineering

---

## User Journey

**Primary audience:** Hiring managers and technical recruiters

**Key user flow:**
1. Land on homepage → Hero catches attention with personal, value-driven intro
2. Scroll through Tech Stack → See technical capabilities with honest context
3. Browse Projects → Visual previews draw interest
4. Click into Case Study → Story-driven narrative demonstrates problem-solving
5. Explore Journey posts → See growth mindset and learning process
6. Contact → Simple, direct communication options

---

## Content Structure

### File Organization

```
/content
  /projects
    project-subay.mdx
    another-project.mdx
  /journey
    learning-nextjs.mdx
    debugging-lessons.mdx
    career-reflections.mdx
```

### MDX Frontmatter Schema

**Projects:**
```yaml
---
title: "Project Subay"
description: "Document tracking system for office workflows"
tech: ["Laravel", "Next.js", "MySQL"]
previewImage: "/images/projects/subay-preview.png"
date: "2024-10-15"
liveUrl: "https://example.com"
sourceUrl: "https://github.com/username/project"
---
```

**Journey posts:**
```yaml
---
title: "Learning Next.js Through Building"
date: "2024-11-20"
excerpt: "How I approached learning a new framework"
tags: ["learning", "nextjs", "reflection"]
---
```

### Route Structure

- `/` - Homepage with all sections
- `/projects/[slug]` - Individual case study pages
- `/journey/[slug]` - Individual journey post pages

---

## Homepage Sections

### 1. Hero / About

**Content:**
```
Hi, I'm Kris 👋
I solve technical problems, build applications, and document what I learn along the way.
```

**Design:**
- Centered layout
- Large, friendly typography
- Two CTA buttons: "View Projects" | "Read My Journey"
- No additional about paragraph (hero is sufficient)

**Purpose:** Personal, confident introduction that immediately communicates value proposition

---

### 2. Tech Stack

**Layout:** Card-based grid (Frontend | Backend | Tools)

**Enhancement:** Contextual descriptions for each technology

**Example structure:**
```
[Icon] Laravel
REST API development, business logic, 3+ years experience

[Icon] Next.js
Learning through portfolio and client projects

[Icon] MySQL
Database design and optimization

[Icon] Tailwind CSS
Rapid UI development with utility-first approach
```

**Design considerations:**
- Tech logos/icons using lucide-react or simple-icons
- Honest proficiency context (avoid star ratings or bars)
- Color-coded categories for visual organization
- Responsive: 1 col mobile, 2-3 cols desktop

---

### 3. Projects

**Card layout:** Responsive grid (1 col mobile, 2 cols desktop)

**Each card includes:**
- Preview image (screenshot/diagram)
- Project title
- Brief description (1 line)
- Tech stack badges
- "Read Case Study" button → `/projects/[slug]`

**Design:**
- Preview image in 16:9 or 4:3 aspect ratio container
- Hover effect: subtle lift with shadow
- Focus on visual appeal to draw readers in

**Purpose:** Visual gateway to story-driven case studies

---

### 4. Journey (Personal Growth)

**Content types:**
- Career milestones & reflections
- Skill progression stories
- Lessons learned (teamwork, communication, dealing with ambiguity)
- Learning experiments

**Card layout:** Similar to Projects section

**Each card includes:**
- Title
- Excerpt (2-3 sentences)
- Date
- Optional category tag ("Learning", "Career", "Reflection")
- "Read More" button → `/journey/[slug]`

**Display:** Show 3-4 recent posts, optional "View All" link if many posts exist

---

### 5. Contact

**Simple approach (GitHub Pages compatible):**
- Brief intro text: "Feel free to reach out via GitHub, LinkedIn, or email"
- Three buttons:
  - Email (mailto link)
  - GitHub (external link)
  - LinkedIn (external link)

**Excluded:**
- Contact form (keeping MVP simple)
- Resume download (no experience to showcase yet; portfolio is the resume)

**Rationale:** For freelance and modern tech jobs, portfolio demonstrates capability better than sparse resume

---

## Case Study Pages

### Story-Driven Format

Chronological narrative structure with technical details woven naturally:

**Flow:**
1. **Opening hook** - Context: what you were building, why it mattered
2. **Challenge emerges** - When/how the problem appeared
3. **Investigation** - First attempts, dead ends, discoveries, debugging process
4. **Solution** - How you solved it, key decisions, implementation
5. **Results** - What happened, impact, metrics if available
6. **Reflection** - What you learned, what you'd do differently

**Writing approach:**
- Natural storytelling voice (not formal sections)
- Capture pivots, "aha" moments, real thinking process
- Be honest about mistakes and learning
- Include code snippets where relevant (not exhaustive)
- Add visuals: screenshots, diagrams, before/after comparisons
- Target length: 800-1500 words

### MDX Component Usage

**Available in MDX:**
- Imported React components (shadcn/ui: Card, Button, Badge)
- Custom components (CodeBlock with syntax highlighting, ImageGallery, etc.)
- Inline JSX for custom layouts

**Example:**
```mdx
I profiled the API and found the bottleneck:

<CodeBlock language="php">
Route::post('/documents', [DocumentController::class, 'store']);
</CodeBlock>

The real issue was N+1 queries loading relationships...

<div className="grid grid-cols-2 gap-4">
  <Card>Before: 5.2s</Card>
  <Card>After: 0.8s</Card>
</div>
```

### Page Elements

**Navigation:**
- Back button/link to homepage Projects section
- Previous/Next case study navigation
- Reading progress indicator (optional)

**Metadata:**
- Published date
- Tech stack badges
- Links to live demo / source code (if applicable)

---

## Journey Post Pages

**Structure:** Simpler than case studies, more personal reflection

**Format:**
- Natural writing voice
- Shorter length (400-1000 words)
- Can still use MDX components for rich formatting
- Same navigation pattern (back, prev/next)

---

## Navigation Structure

### Primary Navigation

**Sticky navbar (recommended):**
- Logo/name on left
- Nav links: About | Tech Stack | Projects | Journey | Contact
- Theme toggle (dark mode)
- Smooth scroll to sections with active highlighting

**Mobile:**
- Hamburger menu
- Same nav structure

**Alternative (minimal):** No navbar, just hero CTAs + back-to-top button when deep scrolling

### Routing Map

```
/ → Homepage
  ↓ View Projects
/projects/[slug] → Case study
  ↓ Back / Next
/projects/another-[slug]

/ → Homepage
  ↓ Read My Journey
/journey/[slug] → Journey post
  ↓ Back / Next
/journey/another-[slug]
```

---

## Technical Architecture

### Technology Stack

**Framework:**
- Next.js 16.1.1 with App Router
- React 19
- TypeScript 5

**Styling:**
- Tailwind CSS v4
- shadcn/ui components
- next-themes (dark mode)
- lucide-react (icons)

**Content Management:**
- next-mdx-remote (MDX parsing)
- gray-matter (frontmatter extraction)
- remark-gfm (GitHub Flavored Markdown)
- rehype-highlight or react-syntax-highlighter (syntax highlighting)

**Deployment:**
- GitHub Pages (static export)
- GitHub Actions for auto-deployment

### MDX Implementation

**Utility functions (`/lib/mdx.ts`):**

```typescript
// Read all project MDX files, return metadata array
getAllProjects(): Promise<ProjectMetadata[]>

// Get specific project with compiled MDX
getProjectBySlug(slug: string): Promise<ProjectData>

// Same for journey posts
getAllJourneyPosts(): Promise<JourneyMetadata[]>
getJourneyPostBySlug(slug: string): Promise<JourneyData>
```

**Dynamic routes with static generation:**

`/app/projects/[slug]/page.tsx`:
```typescript
export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map(p => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }) {
  const project = await getProjectBySlug(params.slug)
  return <MDXRemote source={project.content} components={mdxComponents} />
}
```

**Custom MDX components (`/components/mdx-components.tsx`):**
- Styled headings, links, blockquotes
- Code blocks with syntax highlighting
- Image component with optimization
- All shadcn/ui components available

### GitHub Pages Configuration

**next.config.ts:**
```typescript
{
  output: 'export',
  images: {
    unoptimized: true
  }
}
```

**Deployment workflow:**
1. Push to main branch
2. GitHub Actions triggers build
3. Runs `npm run build`
4. Deploys `/out` folder to GitHub Pages
5. Live at `username.github.io` in ~2 minutes

**Static generation requirement:**
- All MDX content processed at build time
- No server-side rendering
- No API routes (Next.js serverless functions)
- All dynamic pages pre-generated via `generateStaticParams`

---

## Styling & Visual Design

### Design System

**Color palette:**
- Tailwind default colors
- Dark mode via CSS variables (next-themes)
- Accent colors for tech categories (optional)

**Typography:**
- Headings: Font weight bold, clear hierarchy
  - h1: text-5xl
  - h2: text-3xl
  - h3: text-xl
- Body: text-lg, comfortable line-height
- Code: Monospace with syntax highlighting theme

**Spacing:**
- Consistent scale using Tailwind (space-y-4, space-y-6, space-y-32)
- Major sections: large gaps (space-y-32)
- Within sections: moderate gaps (space-y-6)

**Components:**
- Leverage existing shadcn/ui: Card, Button, Badge, Separator
- Consistent border radius, shadows
- Subtle hover states for interactive elements

### Responsive Design

**Breakpoints:**
- Mobile: < 768px (1 column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (2-3 columns)

**Mobile considerations:**
- Touch-friendly button sizes (min 44px)
- Readable text (min 16px base)
- Stacked layouts
- Simplified navigation (hamburger menu)

**Reading experience:**
- Case study pages: max-w-4xl for optimal line length
- Generous margins on mobile
- Large tap targets for navigation

### Tech Stack Visual Enhancements

**Icons:**
- Use lucide-react or simple-icons for tech logos
- Consistent size (24px or 32px)

**Layout per tech item:**
```
[Icon] Technology Name
       Context description in smaller muted text
```

**Cards:**
- Frontend card (blue accent)
- Backend card (green accent)
- Tools card (gray accent)

### Project Card Design

**Structure:**
```
[Preview Image - 16:9 aspect ratio]
---
Project Title
Brief description text
[Badge] [Badge] [Badge]
[Read Case Study Button]
```

**Hover effect:**
- translateY(-4px)
- Increased shadow
- Smooth transition

**Image handling:**
- Next.js Image component with fill
- Object-fit: cover
- Loading: lazy
- Alt text from frontmatter

---

## Performance Optimization

### Image Strategy

**Format:**
- WebP for modern browsers
- Provide fallbacks for compatibility
- Pre-optimize before adding to `/public/images/`

**Sizing:**
- Preview images: 800px wide (max)
- Case study images: responsive sizes
- Use Next.js Image component with static export config

### Bundle Optimization

**Code splitting:**
- Automatic with Next.js App Router
- Lazy load syntax highlighter only on case study pages
- MDX components loaded on demand

**Static generation benefits:**
- No runtime overhead
- Pre-rendered HTML for instant load
- No API calls needed (all data baked in)

### Loading Performance

**Targets:**
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Lighthouse Performance score > 90

**Optimization tactics:**
- Minimize JavaScript bundle
- Efficient image loading
- No unnecessary dependencies

---

## SEO & Metadata

### Homepage Metadata

```typescript
export const metadata = {
  title: 'Kris | Full-Stack Developer Portfolio',
  description: 'I solve technical problems, build applications, and document what I learn along the way. Full-stack developer with Laravel and Next.js experience.',
  openGraph: {
    title: 'Kris | Full-Stack Developer Portfolio',
    description: '...',
    type: 'website',
  }
}
```

### Dynamic Page Metadata

**Case study pages:**
```typescript
export async function generateMetadata({ params }) {
  const project = await getProjectBySlug(params.slug)
  return {
    title: `${project.title} - Kris`,
    description: project.description,
    openGraph: {
      images: [project.previewImage]
    }
  }
}
```

### Additional SEO

**sitemap.xml:**
- Auto-generated at build
- Includes all static pages

**robots.txt:**
- Allow all crawlers
- Point to sitemap

**Structured data:**
- Schema.org TechnicalArticle for case studies
- Person schema for homepage

**Semantic HTML:**
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic elements (nav, main, article, section)
- Descriptive alt text for all images
- ARIA labels where needed

---

## Content Strategy

### Launch MVP Content

**Projects:**
- 1-2 case studies initially
- Start with strongest project (Project Subay)
- Add more over time as you build

**Journey:**
- 2-3 posts to start
- Mix of types:
  - Learning story (e.g., "Learning Next.js Through Building")
  - Technical lesson (e.g., "Debugging Performance Issues")
  - Career reflection (e.g., "From Laravel to Full-Stack")

**Tech Stack:**
- Your actual tech with honest descriptions
- Examples:
  - "Laravel - REST API development, business logic, 3+ years"
  - "Next.js - Learning through portfolio and client projects"
  - "Vue 3 - Frontend component development"
  - "MySQL - Database design and query optimization"
  - "Tailwind CSS - Rapid UI development"

### Writing Guidelines

**Case studies (800-1500 words):**
- Story-driven, chronological flow
- Be honest about mistakes and learning
- Include code snippets strategically (not everything)
- Add visuals to break up text
- Focus on problem-solving process
- Show thinking, not just final solution

**Journey posts (400-1000 words):**
- More personal, reflective tone
- Share learning process
- Broader lessons beyond specific projects
- Authentic voice

**Tone:**
- Professional but personable
- Honest and transparent
- Clear, jargon-free explanations
- Show enthusiasm for learning

---

## Implementation Plan

### Phase 1: MDX Infrastructure
- Install dependencies (next-mdx-remote, gray-matter, remark-gfm)
- Create `/lib/mdx.ts` utility functions
- Set up `/app/projects/[slug]/page.tsx` with static generation
- Set up `/app/journey/[slug]/page.tsx` with static generation
- Create MDX component mappings
- Configure syntax highlighting

### Phase 2: Content Creation
- Create `/content/projects/` and `/content/journey/` directories
- Write first project case study (Project Subay)
- Write 2-3 journey posts
- Gather/optimize preview images

### Phase 3: Homepage Enhancement
- Update hero section with finalized copy
- Enhance Tech Stack section with icons and contextual descriptions
- Update Projects section to pull from MDX files
- Update Journey section to pull from MDX files
- Update Contact section (mailto links)

### Phase 4: Navigation & UX
- Implement sticky navbar with smooth scroll
- Add theme toggle
- Implement back/prev/next navigation on content pages
- Add reading progress indicator (optional)
- Mobile responsive testing

### Phase 5: Styling & Polish
- Consistent spacing and typography
- Hover states and transitions
- Dark mode refinement
- Mobile responsiveness
- Cross-browser testing

### Phase 6: Deployment
- Configure `next.config.ts` for static export
- Set up GitHub Actions workflow
- Test local static build (`npm run build`)
- Deploy to GitHub Pages (`username.github.io`)
- Verify all routes work in production
- Test on multiple devices

---

## Success Metrics

**Technical:**
- All pages load < 3s on 3G
- Lighthouse score > 90
- No console errors
- Works on major browsers (Chrome, Firefox, Safari, Edge)
- Responsive on mobile, tablet, desktop

**Content:**
- 1-2 compelling case studies demonstrating problem-solving
- 2-3 journey posts showing growth mindset
- Clear, honest Tech Stack representation

**User experience:**
- Hiring managers can quickly understand your capabilities
- Case studies are engaging and demonstrate depth
- Portfolio feels professional yet personal
- Easy to navigate and find relevant information

**Job application effectiveness:**
- Portfolio demonstrates technical skills
- Shows communication and documentation ability
- Proves problem-solving approach
- Builds confidence in your capabilities

---

## Future Enhancements (Post-MVP)

**Nice-to-have features (add later):**
- Contact form with Formspree or Next.js API route (if migrating to Vercel)
- Search functionality for case studies/posts
- Tags/categories filtering
- RSS feed for journey posts
- View count or reading analytics
- Testimonials section
- Resume download (once you have experience to showcase)
- More advanced MDX components (interactive demos, embedded CodeSandbox)
- Blog functionality (separate from Journey)
- Project filtering by tech stack

**Don't build these now:** Focus on core value (case studies + journey) first. Add enhancements only if they directly support job applications.

---

## Questions & Decisions Log

**Q: Resume download needed?**
A: No. Portfolio demonstrates capability better than sparse resume. Add later once you have experience.

**Q: Contact form vs mailto?**
A: Mailto for MVP. Form requires backend or external service. Keep simple for GitHub Pages deployment.

**Q: What proficiency indicators for Tech Stack?**
A: Contextual descriptions (safest). Shows what you actually do with each tech without self-rating that could backfire in interviews.

**Q: Dedicated section for case studies or enhance Projects?**
A: Enhanced Projects section. Each project card links to full case study. Cleaner structure.

**Q: Journey section purpose?**
A: Personal growth content (career reflections, learning stories, lessons learned). Complements technical case studies with human side.

**Q: Linear narrative vs story-driven case studies?**
A: Story-driven. More engaging, shows thinking process, captures authenticity. Better for demonstrating communication skills.

**Q: GitHub Pages vs Vercel?**
A: GitHub Pages for portfolio (static), Vercel reserved for project demos. Smart separation of concerns.

**Q: Deploy to root or subpath?**
A: Root (`username.github.io`). More professional for job applications.

---

## Design Validation Checklist

- [ ] Content structure makes sense (projects, journey, MDX-based)
- [ ] Homepage sections align with goals (hero, tech stack, projects, journey, contact)
- [ ] Case study format demonstrates problem-solving effectively
- [ ] Tech stack presentation is honest and compelling
- [ ] Navigation is clear and professional
- [ ] Technical approach works for GitHub Pages deployment
- [ ] MDX setup provides needed flexibility
- [ ] Styling approach is consistent and polished
- [ ] Performance and SEO considerations addressed
- [ ] Content strategy is achievable for MVP
- [ ] Implementation plan is actionable

---

## Notes

**Key principles:**
- MVP approach: core value first, enhancements later
- Honesty: transparent about experience levels
- Problem-solving showcase: case studies are the differentiator
- Communication strength: documentation and clarity matter
- Professional but personal: authentic voice appropriate for job applications

**Target audience reminder:**
- Hiring managers (need to see capabilities quickly)
- Technical recruiters (need to verify skills)
- Potential clients (for freelance work)

**Unique value proposition:**
Full-stack developer who not only builds systems but documents and explains them clearly—demonstrated through story-driven case studies and personal growth reflections.
