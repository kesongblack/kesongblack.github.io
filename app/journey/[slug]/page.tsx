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
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = await getJourneyPostBySlug(slug);
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

export default async function JourneyPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;

  try {
    post = await getJourneyPostBySlug(slug);
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
