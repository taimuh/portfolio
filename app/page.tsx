import React from 'react';
import { Header } from '@/components/ui/Header';
import { Hero } from '@/components/ui/Hero';
import { CardGrid } from '@/components/ui/CardGrid';
import { SkillGrid } from '@/components/ui/SkillGrid';
import { Contact } from '@/components/ui/Contact';
import { Footer } from '@/components/ui/Footer';
import { UI_TEXT, SKILLS } from '@/lib/constants';

const PortfolioPage = () => {
  const postsData = [1, 2, 3].map((item) => ({
    id: item,
    title: `${UI_TEXT.placeholders.postTitle} ${item}`,
    description: UI_TEXT.placeholders.shortPostDescription,
    content: UI_TEXT.placeholders.postDetails,
    buttonText: UI_TEXT.buttons.viewPost
  }));

  const projectsData = [1, 2, 3].map((item) => ({
    id: item,
    title: `${UI_TEXT.placeholders.projectTitle} ${item}`,
    description: UI_TEXT.placeholders.shortProjectDescription,
    content: UI_TEXT.placeholders.projectDetails,
    buttonText: UI_TEXT.buttons.viewProject
  }));

  return (
    <div className={STYLES.container}>
      <Header />
      <Hero />

      <CardGrid 
        id="posts"
        title={UI_TEXT.sections.posts}
        items={postsData}
        className={STYLES.postsSection}
      />

      <CardGrid 
        id="projects"
        title={UI_TEXT.sections.projects}
        items={projectsData}
        className={STYLES.projectsSection}
      />

      <SkillGrid 
        id="skills"
        title={UI_TEXT.sections.skills}
        skills={SKILLS}
        className={STYLES.skillsSection}
      />

      <Contact />
      <Footer />
    </div>
  );
};

const STYLES = {
  container: "min-h-screen bg-stone-100 dark:bg-gray-900",
  postsSection: "bg-stone-100 dark:bg-gray-800 py-16",
  projectsSection: "bg-neutral-200 dark:bg-gray-700 py-16",
  skillsSection: "bg-stone-100 dark:bg-gray-800 py-16",
} as const;

export default PortfolioPage;