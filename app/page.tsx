import React from "react";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";
import { CardGrid } from "@/components/ui/CardGrid";
import { SkillGrid } from "@/components/ui/SkillGrid";
import { Contact } from "@/components/ui/Contact";
import { Footer } from "@/components/ui/Footer";
import { UI_TEXT } from "@/lib/constants";
import { getAllWorks, getAllSkills } from "@/lib/markdown";

const PortfolioPage = async () => {
  const postsData = [1, 2, 3].map((item) => ({
    id: item,
    title: `${UI_TEXT.placeholders.postTitle} ${item}`,
    description: UI_TEXT.placeholders.shortPostDescription,
    content: UI_TEXT.placeholders.postDetails,
    buttonText: UI_TEXT.buttons.viewPost,
  }));

  const worksData = await getAllWorks();
  const skillsData = await getAllSkills();

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
        id="works"
        title={UI_TEXT.sections.works}
        items={worksData}
        className={STYLES.worksSection}
      />

      <SkillGrid
        id="skills"
        title={UI_TEXT.sections.skills}
        skills={skillsData}
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
  worksSection: "bg-neutral-200 dark:bg-gray-700 py-16",
  skillsSection: "bg-stone-100 dark:bg-gray-800 py-16",
} as const;

export default PortfolioPage;
