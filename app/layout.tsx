import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider"

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
          disableTransitionOnChange
          >

          <header className="sticky top-0 z-50 bg-background/90 backdrop-blur shadow-sm border-b">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-bold text-xl">DevTech</div>
            <ul className="flex gap-6">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#journey" className="hover:underline">Journey</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        </ThemeProvider>
      </body>
    </html>
  );
}
