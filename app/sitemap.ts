import { MetadataRoute } from 'next';
import { getAllProjects, getAllJourneyPosts } from '@/lib/mdx';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kesongblack.github.io';

  // Get all projects and journey posts
  const projects = await getAllProjects();
  const journeyPosts = await getAllJourneyPosts();

  // Homepage
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
  ];

  // Project pages
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Journey posts
  const journeyRoutes = journeyPosts.map((post) => ({
    url: `${baseUrl}/journey/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes, ...journeyRoutes];
}
