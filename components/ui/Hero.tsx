import { Button } from "@/components/ui/button"
import { PERSONAL_INFO, UI_TEXT } from '@/lib/constants';

export function Hero() {
  return (
    <section className={STYLES.section}>
      <div className={STYLES.container}>
        <div className={STYLES.content}>
          <h1 className={STYLES.title}>
            <span className={STYLES.greeting}>{PERSONAL_INFO.greeting} {PERSONAL_INFO.name}</span>
            <span className={STYLES.tagline}>{PERSONAL_INFO.tagline}</span>
          </h1>
          <p className={STYLES.description}>
            {PERSONAL_INFO.title}
          </p>
          <div className={STYLES.buttonContainer}>
            <Button>{UI_TEXT.buttons.viewMyWork}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const STYLES = {
  section: "bg-neutral-200 dark:bg-gray-700",
  container: "max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8",
  content: "text-center",
  title: "text-4xl font-extrabold tracking-tight text-gray-900 dark:text-stone-100 sm:text-5xl md:text-6xl",
  greeting: "block",
  tagline: "block text-indigo-600 dark:text-indigo-400",
  description: "mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl",
  buttonContainer: "mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8",
} as const;