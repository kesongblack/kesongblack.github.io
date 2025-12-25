import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import 'highlight.js/styles/github-dark.css';

export const metadata = {
  title: "DevTech Portfolio",
  description: "Interactive portfolio and project journey",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          >

          <header className="sticky top-0 z-50 bg-background/90 backdrop-blur shadow-sm border-b">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-bold text-xl">DevTech</div>
            <div className="flex items-center gap-6">
              <ul className="flex gap-6">
                <li><a href="#about" className="transition-colors hover:text-primary hover:underline underline-offset-4">Home</a></li>
                <li><a href="#projects" className="transition-colors hover:text-primary hover:underline underline-offset-4">Projects</a></li>
                <li><a href="#skills" className="transition-colors hover:text-primary hover:underline underline-offset-4">Skills</a></li>
                <li><a href="#journey" className="transition-colors hover:text-primary hover:underline underline-offset-4">Journey</a></li>
                <li><a href="#contact" className="transition-colors hover:text-primary hover:underline underline-offset-4">Contact</a></li>
              </ul>
              <ThemeToggle />
            </div>
          </nav>
        </header>

        <main>{children}</main>

        </ThemeProvider>
      </body>
    </html>
  );
}
