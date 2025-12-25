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

export const metadata = {
  title: "Kris | Full-Stack Developer Portfolio",
  description: "I solve technical problems, build applications, and document what I learn along the way. Full-stack developer with Laravel and Next.js experience.",
  openGraph: {
    title: "Kris | Full-Stack Developer Portfolio",
    description: "I solve technical problems, build applications, and document what I learn along the way.",
    type: "website",
  },
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
          {projects.map((project) => (
            <Card key={project.slug} className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <div className="flex gap-3 mt-2">
                <Button asChild size="sm">
                  <Link href={`/projects/${project.slug}`}>Read Case Study</Link>
                </Button>
                {project.liveUrl && (
                  <Button asChild size="sm" variant="outline">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-center text-muted-foreground">
            No projects yet. Check back soon!
          </p>
        )}
      </section>

      <Separator />

      {/* JOURNEY */}
      <section id="journey" className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Journey</h2>
        <p className="text-center text-muted-foreground">
          Documenting what I learned, challenges I faced, and how I grew as a developer.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {journeyPosts.map((post) => (
            <Card key={post.slug} className="p-6 space-y-2">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              <Button asChild size="sm" className="mt-4">
                <Link href={`/journey/${post.slug}`}>Read More</Link>
              </Button>
            </Card>
          ))}
        </div>

        {journeyPosts.length === 0 && (
          <p className="text-center text-muted-foreground">
            No journey posts yet. Check back soon!
          </p>
        )}
      </section>

      <Separator />

      {/* CONTACT */}
      <section id="contact" className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p className="text-muted-foreground">
          Feel free to reach out via GitHub, LinkedIn, or email.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Button asChild>
            <a href="mailto:youremail@example.com">Email</a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
        </div>
      </section>

    </main>
  );
}
