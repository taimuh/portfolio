import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { extractSummary } from './utils';
import { WorkItem, SkillItem } from './types';


const worksDirectory = path.join(process.cwd(), 'content/works');
const skillsDirectory = path.join(process.cwd(), 'content/skills');

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

export async function getAllSkills(): Promise<SkillItem[]> {
  try {
    if (!fs.existsSync(skillsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(skillsDirectory);
    const allSkillsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(skillsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          id: slug,
          slug,
          name: matterResult.data.name || `Skill ${slug}`,
          description: matterResult.data.description || 'Skill description',
          content: matterResult.content,
          experience: matterResult.data.experience,
          level: matterResult.data.level,
          tags: matterResult.data.tags || [],
        } as SkillItem;
      });

    return allSkillsData.sort((a, b) => {
      if (a.level && b.level) {
        const levelOrder = { 'expert': 3, 'intermediate': 2, 'beginner': 1 };
        return (levelOrder[b.level as keyof typeof levelOrder] || 0) - (levelOrder[a.level as keyof typeof levelOrder] || 0);
      }
      return 0;
    });
  } catch (error) {
    console.error('Error reading skills:', error);
    return [];
  }
}

export async function getSkillBySlug(slug: string): Promise<SkillItem | null> {
  try {
    const fullPath = path.join(skillsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id: slug,
      slug,
      name: matterResult.data.name || `Skill ${slug}`,
      description: matterResult.data.description || 'Skill description',
      content: matterResult.content,
      experience: matterResult.data.experience,
      level: matterResult.data.level,
      tags: matterResult.data.tags || [],
    } as SkillItem;
  } catch (error) {
    console.error(`Error reading skill ${slug}:`, error);
    return null;
  }
}