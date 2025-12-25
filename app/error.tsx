'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            <AlertTriangle className="w-24 h-24 text-destructive/30" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Something Went Wrong</h1>
          <p className="text-lg text-muted-foreground">
            An unexpected error occurred while loading this page.
          </p>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <div className="bg-muted p-4 rounded-lg text-left">
            <p className="text-sm font-mono text-destructive break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-muted-foreground mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="pt-4 space-y-3">
          <p className="text-sm text-muted-foreground">
            This error has been logged. Please try again.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={reset}>
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Button>
            <Button asChild variant="outline">
              <a href="/">
                <Home className="w-4 h-4" />
                Go Home
              </a>
            </Button>
          </div>
        </div>

        <div className="pt-6 border-t">
          <p className="text-sm text-muted-foreground">
            If this problem persists,{' '}
            <a
              href="mailto:kesongblack@proton.me"
              className="text-primary hover:underline"
            >
              contact me
            </a>
          </p>
        </div>
      </Card>
    </main>
  );
}
