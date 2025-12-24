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
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const project = await getProjectBySlug(slug);
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

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let project;

  try {
    project = await getProjectBySlug(slug);
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
