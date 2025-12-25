import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Home, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Journey Post Not Found | Kris',
  description: 'The journey post you are looking for does not exist.',
};

export default function JourneyPostNotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center space-y-6">
        <div className="flex justify-center">
          <BookOpen className="w-24 h-24 text-muted-foreground/30" />
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Journey Post Not Found</h1>
          <p className="text-lg text-muted-foreground">
            This journey post doesn't exist or has been removed.
          </p>
        </div>

        <div className="pt-4 space-y-3">
          <p className="text-sm text-muted-foreground">
            Explore other posts or return home:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/#journey">
                <BookOpen className="w-4 h-4" />
                View All Posts
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
            Questions or feedback?{' '}
            <Link href="/#contact" className="text-primary hover:underline">
              Get in touch
            </Link>
          </p>
        </div>
      </Card>
    </main>
  );
}
