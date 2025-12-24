import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-32">

      {/* HERO / ABOUT */}
      <section id="about" className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Hi, I'm Kris 👋</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I solve technical problems, build applications, and document what I learn along the way.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Button asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#journey">Read My Journey</a>
          </Button>
        </div>
      </section>

      <Separator />

      {/* SKILLS */}
      <section id="skills" className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Tech Stack</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card className="p-6">
            <h3 className="font-medium mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Next.js</Badge>
              <Badge>Vue 3</Badge>
              <Badge>Tailwind</Badge>
              <Badge>shadcn/ui</Badge>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-medium mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Laravel</Badge>
              <Badge>REST API</Badge>
              <Badge>MySQL</Badge>
            </div>
          </Card>
        </div>
      </section>

      <Separator />

      {/* PROJECTS */}
      <section id="projects" className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Project Subay</h3>
            <p className="text-sm text-muted-foreground">
              A document tracking system for office workflows.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Laravel</Badge>
              <Badge>Next.js</Badge>
            </div>
            <div className="flex gap-3 mt-2">
              <Button size="sm">Live Demo</Button>
              <Button size="sm" variant="outline">Source</Button>
            </div>
          </Card>
        </div>
      </section>

      <Separator />

      {/* JOURNEY */}
      <section id="journey" className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Project Journey</h2>
        <p className="text-center text-muted-foreground">
          Documenting what I learned, challenges I faced, and how I grew as a developer.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Placeholder cards for Markdown-driven entries */}
          <Card className="p-6 space-y-2">
            <h3 className="font-medium">Learning Next.js</h3>
            <p className="text-sm text-muted-foreground">Built static portfolio pages with markdown-driven content.</p>
            <Button size="sm">Read More</Button>
          </Card>
        </div>
      </section>

      <Separator />

      {/* CONTACT */}
      <section id="contact" className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p className="text-muted-foreground">Feel free to reach out via GitHub, LinkedIn, or email.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Button asChild><a href="mailto:youremail@example.com">Email</a></Button>
          <Button asChild variant="outline"><a href="https://github.com/yourusername">GitHub</a></Button>
          <Button asChild variant="outline"><a href="https://linkedin.com/in/yourusername">LinkedIn</a></Button>
        </div>
      </section>

    </main>
  );
}
