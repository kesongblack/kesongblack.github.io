# Portfolio

A modern, performant portfolio website built with Next.js 16 and React 19, featuring MDX-powered case studies and blog posts with full static site generation.

## Live Demo

[View Live Site](#) <!-- Add your GitHub Pages URL once deployed -->

## Features

- **MDX Content System** - Write project case studies and journey posts in MDX with full markdown support
- **Dark/Light Theme** - Persistent theme switching with next-themes
- **Static Site Generation** - Pre-rendered pages for optimal performance and SEO
- **Responsive Design** - Mobile-first design that works on all devices
- **Syntax Highlighting** - Code blocks with automatic language detection
- **Type-Safe** - Full TypeScript coverage for improved developer experience
- **Accessible** - WCAG-compliant with semantic HTML and ARIA labels

## Tech Stack

### Core
- **Next.js 16.1** - React framework with App Router
- **React 19.2** - UI library
- **TypeScript 5** - Type safety and better DX

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Content & Markdown
- **next-mdx-remote** - MDX rendering with RSC support
- **gray-matter** - Frontmatter parsing
- **remark-gfm** - GitHub Flavored Markdown
- **rehype-highlight** - Syntax highlighting

### Developer Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kesongblack/portfolio.git
cd portfolio/nextjs/portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Homepage with sections
│   ├── projects/[slug]/     # Dynamic project case studies
│   └── journey/[slug]/      # Dynamic journey posts
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── theme-provider.tsx   # Theme context provider
│   ├── theme-toggle.tsx     # Dark/light mode toggle
│   ├── mobile-nav.tsx       # Mobile navigation menu
│   └── mdx-components.tsx   # Custom MDX component mappings
├── content/                 # MDX content files
│   ├── projects/            # Project case studies
│   └── journey/             # Blog-style posts
├── lib/
│   ├── mdx.ts              # MDX utilities and loaders
│   └── types/              # TypeScript type definitions
├── public/
│   └── images/             # Static images and assets
└── styles/
    └── globals.css         # Global styles and Tailwind imports
```

## Content Management

### Adding a New Project

1. Create a new MDX file in `content/projects/`:

```bash
content/projects/my-awesome-project.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "My Awesome Project"
description: "A brief description of what this project does"
date: "2025-12-25"
tags: ["React", "TypeScript", "Next.js"]
image: "/images/projects/my-awesome-project.jpg"
---

# My Awesome Project

Your project case study content here...
```

3. The project will automatically appear on the homepage and be accessible at `/projects/my-awesome-project`

### Adding a Journey Post

1. Create a new MDX file in `content/journey/`:

```bash
content/journey/my-learning-experience.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "My Learning Experience"
description: "What I learned building this feature"
date: "2025-12-25"
tags: ["learning", "development"]
---

Your journey post content here...
```

3. The post will be accessible at `/journey/my-learning-experience`

### Frontmatter Fields

**Projects:**
- `title` (required) - Project name
- `description` (required) - Short description
- `date` (required) - Publication date (YYYY-MM-DD)
- `tags` (optional) - Array of tech stack tags
- `image` (optional) - Path to project preview image

**Journey Posts:**
- `title` (required) - Post title
- `description` (required) - Short description
- `date` (required) - Publication date (YYYY-MM-DD)
- `tags` (optional) - Array of topic tags

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (requires build first)
npm start

# Run linter
npm run lint
```

### Building for Production

The site uses static export for deployment to GitHub Pages:

```bash
npm run build
```

This generates static files in the `out/` directory.

## Deployment

This project is configured for automated deployment to GitHub Pages via GitHub Actions.

### Automatic Deployment

On every push to the `main` branch:
1. GitHub Actions runs the build
2. Generates static files
3. Deploys to GitHub Pages

### Manual Deployment

```bash
# Build the static site
npm run build

# The ./out directory contains the static files
# Upload to any static hosting provider
```

## Customization

### Updating Contact Information

Edit the contact section in `app/page.tsx`:

```tsx
const contactEmail = "your-email@example.com";
const githubUrl = "https://github.com/yourusername";
```

### Changing Theme Colors

Modify theme variables in `app/globals.css`:

```css
:root {
  --background: ...
  --foreground: ...
  /* Add your custom colors */
}
```

### Updating Navigation

Edit the navigation links in `app/layout.tsx`:

```tsx
const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  // Add or remove items
];
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Static Generation** - All pages pre-rendered at build time
- **Optimized Bundles** - Automatic code splitting by Next.js
- **Fast Navigation** - Client-side routing with prefetching

## License

MIT License - feel free to use this project as a template for your own portfolio.

## Contact

- Email: kesongblack@proton.me
- GitHub: [@kesongblack](https://github.com/kesongblack)

---

Built with Next.js and deployed on GitHub Pages.
