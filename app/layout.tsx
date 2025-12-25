import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import "highlight.js/styles/github-dark.css";

export const metadata = {
  metadataBase: new URL('https://kesongblack.github.io'),
  title: "Kris | Full-Stack Developer Portfolio",
  description:
    "Full-stack developer delivering production-ready applications 3x faster using AI-assisted workflows.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "AI-Assisted Development", "Web Development", "Portfolio"],
  authors: [{ name: "Kris", url: "https://kesongblack.github.io" }],
  creator: "Kris",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kesongblack.github.io",
    siteName: "Kris | Full-Stack Developer",
    title: "Kris | Full-Stack Developer Portfolio",
    description: "Full-stack developer delivering production-ready applications 3x faster using AI-assisted workflows.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kris - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kris | Full-Stack Developer Portfolio",
    description: "Full-stack developer delivering production-ready applications 3x faster using AI-assisted workflows.",
    images: ["/images/og-image.png"],
    creator: "@kesongblack",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logo.svg"
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
