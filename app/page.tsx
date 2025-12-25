import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code2, Database, Wrench } from "lucide-react";
import { getAllProjects, getAllJourneyPosts } from "@/lib/mdx";
import Link from "next/link";

const skills = {
  development: [
    {
      name: "Next.js",
      description: "Modern React framework for production apps",
    },
    { name: "Laravel", description: "PHP framework, for building REST APIs" },
    {
      name: "TypeScript",
      description: "Type-safe development for maintainable code",
    },
  ],
  workflow: [
    {
      name: "AI Pair Programming",
      description: "Claude & Copilot for 3x faster development",
    },
    {
      name: "Documentation",
      description: "Clear READMEs, API docs, inline comments",
    },
    {
      name: "Git Workflows",
      description: "Clean commits, code review, collaboration",
    },
  ],
  infrastructure: [
    { name: "MySQL", description: "Database design and query optimization" },
    { name: "Docker", description: "Containerized development environments" },
    {
      name: "REST APIs",
      description: "Design, implementation, and integration",
    },
  ],
};

export const metadata = {
  title: "Kris | Full-Stack Developer Portfolio",
  description:
    "I solve technical problems, build applications, and document what I learn along the way. Full-stack developer with Laravel and Next.js experience.",
  openGraph: {
    title: "Kris | Full-Stack Developer Portfolio",
    description:
      "I solve technical problems, build applications, and document what I learn along the way.",
    type: "website",
  },
};

export default async function Home() {
  const projects = await getAllProjects();
  const journeyPosts = await getAllJourneyPosts();

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-32">
      {/* HERO */}
      <section
        id="home"
        className="text-center space-y-6 animate-fade-in py-12 scroll-mt-20"
      >
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Ship Your MVP in Weeks, Not Months
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack developer delivering production-ready applications 3x
            faster using AI-assisted workflows—without sacrificing quality or
            documentation.
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            See Recent Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-secondary px-8 py-3 text-sm font-medium text-secondary-foreground shadow hover:bg-primary/90"
          >
            Let&apos;s Talk
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <Badge variant="secondary">Laravel</Badge>
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">2-3 week MVP delivery</Badge>
        </div>
      </section>

      {/* PROJECTS - Immediate proof after value prop */}
      <section
        id="projects"
        className="space-y-6 animate-fade-in animate-delay-100 scroll-mt-20"
      >
        <Separator />
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <p className="text-center text-muted-foreground">
          Real applications built fast, from concept to production.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="p-6 space-y-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.timeline && (
                  <Badge
                    variant="outline"
                    className="text-xs whitespace-nowrap"
                  >
                    ⚡ {project.timeline}
                  </Badge>
                )}
              </div>
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
                  <Link href={`/projects/${project.slug}`}>
                    Read Case Study
                  </Link>
                </Button>
                {project.liveUrl && (
                  <Button asChild size="sm" variant="outline">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
            Projects coming soon! In the meantime,{" "}
            <a href="#contact" className="text-primary hover:underline">
              let&apos;s discuss your project
            </a>
            .
          </p>
        )}
      </section>

      {/* SKILLS & APPROACH */}
      <section
        id="skills"
        className="space-y-6 animate-fade-in animate-delay-200 scroll-mt-20"
      >
        <Separator />
        <h2 className="text-3xl font-semibold text-center">
          Skills & Approach
        </h2>
        <p className="text-center text-muted-foreground">
          How I deliver fast without sacrificing quality or maintainability.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500/50">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold">Development</h3>
            </div>
            <div className="space-y-3">
              {skills.development.map((skill) => (
                <div key={skill.name}>
                  <p className="font-medium">{skill.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-green-500" />
              <h3 className="font-semibold">Workflow & AI</h3>
            </div>
            <div className="space-y-3">
              {skills.workflow.map((skill) => (
                <div key={skill.name}>
                  <p className="font-medium">{skill.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-purple-500/50">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-5 h-5 text-purple-500" />
              <h3 className="font-semibold">Infrastructure</h3>
            </div>
            <div className="space-y-3">
              {skills.infrastructure.map((skill) => (
                <div key={skill.name}>
                  <p className="font-medium">{skill.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* JOURNEY */}
      <section
        id="journey"
        className="space-y-3 animate-fade-in animate-delay-300 scroll-mt-20"
      >
        <Separator />
        <h2 className="text-3xl font-semibold text-center">Journey</h2>
        <p className="text-center text-muted-foreground">
          Lessons learned, experiments, and reflections from my development
          journey.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {journeyPosts.map((post) => (
            <Card
              key={post.slug}
              className="p-6 space-y-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50"
            >
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
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

      {/* CONTACT */}
      <section
        id="contact"
        className="text-center space-y-4 animate-fade-in animate-delay-300 scroll-mt-20"
      >
        <Separator />
        <h2 className="text-3xl font-semibold">Let&apos;s Build Your MVP</h2>
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-muted-foreground">
            Currently available for 2-3 week projects. Whether you need a rapid
            prototype or a production-ready application, let&apos;s discuss
            bringing your idea to life.
          </p>
          <p className="text-sm text-muted-foreground">
            Interested in working together? Drop me an email and let&apos;s talk
            about your project.
            <br />
            Response time: Usually within 24 hours.
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <Button asChild size="lg">
            <a href="mailto:kesongblack@proton.me">Email Me</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://github.com/kesongblack"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-32 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>
          © 2025 Kris (
          <a
            href="https://github.com/kesongblack"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors hover:underline"
          >
            github.com/kesongblack
          </a>
          ) • Built with Next.js & AI-assisted workflows
        </p>
      </footer>
    </main>
  );
}
