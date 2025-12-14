import React from "react";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";
import { About } from "@/components/ui/About";
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
      <About />

      <CardGrid
        id="works"
        title={UI_TEXT.sections.works}
        items={worksData}
        className={STYLES.worksSection}
      />

      <CardGrid
        id="posts"
        title={UI_TEXT.sections.posts}
        items={postsData}
        className={STYLES.postsSection}
        showContent={false}
      />

      <Contact />
      <Footer />
    </div>
  );
};

const STYLES = {
  container: "min-h-screen bg-[#fffcf9] dark:bg-[#040F16]",
  postsSection: "bg-[#fffcf9] dark:bg-[#040F16] py-16",
  worksSection: "bg-[#fffcf9] dark:bg-[#040F16]",
} as const;

export default PortfolioPage;
