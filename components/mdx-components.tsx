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
