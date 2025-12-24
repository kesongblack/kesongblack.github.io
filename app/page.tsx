import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code2, Database, Wrench } from "lucide-react";
import { getAllProjects, getAllJourneyPosts } from "@/lib/mdx";
import Link from "next/link";

const techStack = {
  frontend: [
    { name: "Next.js", description: "Learning through portfolio and client projects" },
    { name: "Vue 3", description: "Frontend component development" },
    { name: "Tailwind CSS", description: "Rapid UI development with utility-first approach" },
    { name: "shadcn/ui", description: "Accessible component library" },
  ],
  backend: [
    { name: "Laravel", description: "REST API development, business logic, 3+ years" },
    { name: "MySQL", description: "Database design and optimization" },
    { name: "REST API", description: "API design and implementation" },
  ],
  tools: [
    { name: "Git", description: "Version control and collaboration" },
    { name: "TypeScript", description: "Type-safe JavaScript development" },
    { name: "Docker", description: "Containerization for development" },
  ],
};

export default async function Home() {
  const projects = await getAllProjects();
  const journeyPosts = await getAllJourneyPosts();

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-32">

      {/* HERO / ABOUT */}
      <section id="about" className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Hi, I&apos;m Kris 👋</h1>
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
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold">Frontend</h3>
            </div>
            <div className="space-y-3">
              {techStack.frontend.map((tech) => (
                <div key={tech.name}>
                  <p className="font-medium">{tech.name}</p>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-5 h-5 text-green-500" />
              <h3 className="font-semibold">Backend</h3>
            </div>
            <div className="space-y-3">
              {techStack.backend.map((tech) => (
                <div key={tech.name}>
                  <p className="font-medium">{tech.name}</p>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-gray-500" />
              <h3 className="font-semibold">Tools</h3>
            </div>
            <div className="space-y-3">
              {techStack.tools.map((tech) => (
                <div key={tech.name}>
                  <p className="font-medium">{tech.name}</p>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
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
