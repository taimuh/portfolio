import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { extractSummary } from './utils';

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  content: string;
  summary: string;
  buttonText: string;
  slug: string;
  date?: string;
  tags?: string[];
}

const worksDirectory = path.join(process.cwd(), 'content/works');

export async function getAllWorks(): Promise<WorkItem[]> {
  try {
    if (!fs.existsSync(worksDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(worksDirectory);
    const allWorksData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(worksDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          id: slug,
          slug,
          title: matterResult.data.title || `Work ${slug}`,
          description: matterResult.data.description || 'Work description',
          content: matterResult.content,
          summary: extractSummary(matterResult.content),
          buttonText: matterResult.data.buttonText || 'View Work',
          date: matterResult.data.date,
          tags: matterResult.data.tags || [],
        } as WorkItem;
      });

    return allWorksData.sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
  } catch (error) {
    console.error('Error reading works:', error);
    return [];
  }
}

export async function getWorkBySlug(slug: string): Promise<WorkItem | null> {
  try {
    const fullPath = path.join(worksDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id: slug,
      slug,
      title: matterResult.data.title || `Work ${slug}`,
      description: matterResult.data.description || 'Work description',
      content: matterResult.content,
      summary: extractSummary(matterResult.content),
      buttonText: matterResult.data.buttonText || 'View Work',
      date: matterResult.data.date,
      tags: matterResult.data.tags || [],
    } as WorkItem;
  } catch (error) {
    console.error(`Error reading work ${slug}:`, error);
    return null;
  }
}