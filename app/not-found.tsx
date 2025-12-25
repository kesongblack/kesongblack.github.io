import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: '404 - Page Not Found | Kris',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            <FileQuestion className="w-24 h-24 text-muted-foreground/30" />
            <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
              404
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Page Not Found</h1>
          <p className="text-lg text-muted-foreground">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="pt-4 space-y-3">
          <p className="text-sm text-muted-foreground">
            Here's what you can do:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/#projects">
                <ArrowLeft className="w-4 h-4" />
                View Projects
              </Link>
            </Button>
          </div>
        </div>

        <div className="pt-6 border-t">
          <p className="text-sm text-muted-foreground">
            Looking for something specific?{' '}
            <Link href="/#contact" className="text-primary hover:underline">
              Contact me
            </Link>
          </p>
        </div>
      </Card>
    </main>
  );
}
