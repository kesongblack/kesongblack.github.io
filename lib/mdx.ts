import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  ProjectFrontmatter,
  JourneyFrontmatter,
  ProjectMetadata,
  JourneyMetadata,
  ProjectData,
  JourneyData,
} from './types/mdx';

const projectsDirectory = path.join(process.cwd(), 'content/projects');
const journeyDirectory = path.join(process.cwd(), 'content/journey');

// Get all project slugs
export function getAllProjectSlugs(): string[] {
  // Check if directory exists, return empty array if not
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

// Get all journey post slugs
export function getAllJourneySlugs(): string[] {
  // Check if directory exists, return empty array if not
  if (!fs.existsSync(journeyDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(journeyDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

// Get all projects with metadata
export async function getAllProjects(): Promise<ProjectMetadata[]> {
  const slugs = getAllProjectSlugs();

  const projects = slugs.map((slug) => {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as ProjectFrontmatter),
    };
  });

  // Sort by date (newest first)
  return projects.sort((a, b) => (a.date > b.date ? -1 : 1));
}

// Get all journey posts with metadata
export async function getAllJourneyPosts(): Promise<JourneyMetadata[]> {
  const slugs = getAllJourneySlugs();

  const posts = slugs.map((slug) => {
    const fullPath = path.join(journeyDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as JourneyFrontmatter),
    };
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

// Get project by slug with full content
export async function getProjectBySlug(slug: string): Promise<ProjectData> {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as ProjectFrontmatter),
  };
}

// Get journey post by slug with full content
export async function getJourneyPostBySlug(slug: string): Promise<JourneyData> {
  const fullPath = path.join(journeyDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as JourneyFrontmatter),
  };
}
