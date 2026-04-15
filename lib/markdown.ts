import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { extractSummary } from './utils';
import { WorkItem, PostItem, LabItem } from './types';


const worksDirectory = path.join(process.cwd(), 'content/works');
const postsDirectory = path.join(process.cwd(), 'content/posts');
const labDirectory = path.join(process.cwd(), 'content/lab');

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
          link: matterResult.data.link,
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

export async function getAllLabs(): Promise<LabItem[]> {
  try {
    if (!fs.existsSync(labDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(labDirectory);
    const allLabsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(labDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          id: slug,
          slug,
          title: matterResult.data.title || `Lab ${slug}`,
          description: matterResult.data.description || 'Lab description',
          content: matterResult.content,
          summary: extractSummary(matterResult.content),
          buttonText: matterResult.data.buttonText || 'Explore',
          date: matterResult.data.date,
          tags: matterResult.data.tags || [],
          link: matterResult.data.link,
        } as LabItem;
      });

    return allLabsData.sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
  } catch (error) {
    console.error('Error reading labs:', error);
    return [];
  }
}

export async function getAllPosts(): Promise<PostItem[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          id: slug,
          slug,
          title: matterResult.data.title || `Post ${slug}`,
          description: matterResult.data.description || 'Post description',
          content: matterResult.content,
          summary: extractSummary(matterResult.content),
          buttonText: matterResult.data.buttonText || 'Read Post',
          date: matterResult.data.date,
          tags: matterResult.data.tags || [],
        } as PostItem;
      });

    return allPostsData.sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<PostItem | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id: slug,
      slug,
      title: matterResult.data.title || `Post ${slug}`,
      description: matterResult.data.description || 'Post description',
      content: matterResult.content,
      summary: extractSummary(matterResult.content),
      buttonText: matterResult.data.buttonText || 'Read Post',
      date: matterResult.data.date,
      tags: matterResult.data.tags || [],
    } as PostItem;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}