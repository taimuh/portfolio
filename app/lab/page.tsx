import React from "react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { CardGrid } from "@/components/ui/CardGrid";
import { UI_TEXT } from "@/lib/constants";
import { getAllLabs } from "@/lib/markdown";

const LabPage = async () => {
  const labData = await getAllLabs();

  return (
    <div className={STYLES.container}>
      <Header />
      <div className={STYLES.hero}>
        <div className={STYLES.heroInner}>
          <div className={STYLES.badge}>Experimental</div>
          <h1 className={STYLES.title}>Lab</h1>
          <p className={STYLES.description}>実験的なプロトタイプを公開する場所です。</p>
        </div>
      </div>
      <CardGrid
        id="lab"
        title={UI_TEXT.sections.lab}
        items={labData}
        className={STYLES.labSection}
      />
      <Footer />
    </div>
  );
};

const STYLES = {
  container: "min-h-screen bg-[#fffcf9] dark:bg-[#040F16]",
  hero: "py-16 bg-[#fffcf9] dark:bg-[#040F16]",
  heroInner: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
  badge:
    "inline-block px-3 py-1 text-sm font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 mb-4",
  title: "text-4xl font-extrabold text-gray-900 dark:text-stone-100",
  description: "mt-4 text-lg text-gray-500 dark:text-gray-400",
  labSection: "bg-[#fffcf9] dark:bg-[#040F16] py-8",
} as const;

export default LabPage;
