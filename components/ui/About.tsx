import { PERSONAL_INFO, UI_TEXT } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className={STYLES.section}>
      <div className={STYLES.container}>
        <h2 className={STYLES.title}>{UI_TEXT.sections.about}</h2>
        <div className={STYLES.content}>
          <p className={STYLES.text}>{PERSONAL_INFO.about}</p>
        </div>
      </div>
    </section>
  );
}

const STYLES = {
  section: "bg-[#fffcf9] dark:bg-[#040F16] py-2",
  container: "max-w-7xl mx-auto px-2 sm:px-2 lg:px-4",
  title:
    "text-3xl font-bold tracking-tight text-gray-900 dark:text-stone-100 sm:text-4xl mb-8 text-center",
  content: "max-w-3xl mx-auto",
  text: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed",
} as const;
