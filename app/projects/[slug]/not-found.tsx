import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FolderOpen, Home, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Project Not Found | Kris',
  description: 'The project you are looking for does not exist.',
};

export default function ProjectNotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center space-y-6">
        <div className="flex justify-center">
          <FolderOpen className="w-24 h-24 text-muted-foreground/30" />
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="text-lg text-muted-foreground">
            This project doesn't exist or has been removed from the portfolio.
          </p>
        </div>

        <div className="pt-4 space-y-3">
          <p className="text-sm text-muted-foreground">
            Explore other projects or return home:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/#projects">
                <FolderOpen className="w-4 h-4" />
                View All Projects
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
          </div>
        </div>

        <div className="pt-6 border-t">
          <p className="text-sm text-muted-foreground">
            Have a project in mind?{' '}
            <Link href="/#contact" className="text-primary hover:underline">
              Let's talk
            </Link>
          </p>
        </div>
      </Card>
    </main>
  );
}
