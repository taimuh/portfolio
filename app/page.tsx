import React from "react";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";
import { CardGrid } from "@/components/ui/CardGrid";
import { Contact } from "@/components/ui/Contact";
import { Footer } from "@/components/ui/Footer";
import { UI_TEXT } from "@/lib/constants";
import { getAllWorks, getAllPosts } from "@/lib/markdown";

const PortfolioPage = async () => {
  const postsData = await getAllPosts();
  const worksData = await getAllWorks();

  return (
    <div className={STYLES.container}>
      <Header />
      <Hero />

      <CardGrid
        id="posts"
        title={UI_TEXT.sections.posts}
        items={postsData}
        className={STYLES.postsSection}
        showContent={false}
      />

      <CardGrid
        id="works"
        title={UI_TEXT.sections.works}
        items={worksData}
        className={STYLES.worksSection}
      />

      <Contact />
      <Footer />
    </div>
  );
};

const STYLES = {
  container: "min-h-screen bg-[#fffcf9] dark:bg-gray-900",
  postsSection: "bg-[#fffcf9] dark:bg-gray-800 py-16",
  worksSection: "bg-[#fffcf9] dark:bg-gray-700 py-16",
} as const;

export default PortfolioPage;
