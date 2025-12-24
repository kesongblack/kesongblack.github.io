// Project frontmatter schema
export interface ProjectFrontmatter {
  title: string;
  description: string;
  tech: string[];
  previewImage: string;
  date: string;
  liveUrl?: string;
  sourceUrl?: string;
}

// Journey post frontmatter schema
export interface JourneyFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

// Project metadata (frontmatter + slug)
export interface ProjectMetadata extends ProjectFrontmatter {
  slug: string;
}

// Journey metadata (frontmatter + slug)
export interface JourneyMetadata extends JourneyFrontmatter {
  slug: string;
}

// Full project data with compiled content
export interface ProjectData extends ProjectMetadata {
  content: string;
}

// Full journey data with compiled content
export interface JourneyData extends JourneyMetadata {
  content: string;
}
