import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import "highlight.js/styles/github-dark.css";

export const metadata = {
  title: "Kris | Full-Stack Developer Portfolio",
  description:
    "Full-stack developer delivering production-ready applications 3x faster using AI-assisted workflows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground"
          >
            Skip to main content
          </a>

          <header className="sticky top-0 z-50 bg-background/90 backdrop-blur shadow-sm border-b">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
              {/* <div className="font-bold text-xl">DevTech</div>
               */}

              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="KesongBlack Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
                <span className="font-bold text-xl">kesongblack</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <ul className="flex gap-6">
                  <li>
                    <a
                      href="#home"
                      className="transition-colors hover:text-primary hover:underline underline-offset-4 focus:text-primary focus:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="transition-colors hover:text-primary hover:underline underline-offset-4 focus:text-primary focus:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="transition-colors hover:text-primary hover:underline underline-offset-4 focus:text-primary focus:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#journey"
                      className="transition-colors hover:text-primary hover:underline underline-offset-4 focus:text-primary focus:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Journey
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="transition-colors hover:text-primary hover:underline underline-offset-4 focus:text-primary focus:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <ThemeToggle />
              </div>

              {/* Mobile Navigation */}
              <div className="flex md:hidden items-center gap-4">
                <ThemeToggle />
                <MobileNav />
              </div>
            </nav>
          </header>

          <main id="main-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
