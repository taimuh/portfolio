import { Button } from "@/components/ui/button"
import { PERSONAL_INFO, UI_TEXT } from '@/lib/constants';

export function Hero() {
  return (
    <section className="bg-neutral-200 dark:bg-gray-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-stone-100 sm:text-5xl md:text-6xl">
            <span className="block">{PERSONAL_INFO.greeting} {PERSONAL_INFO.name}</span>
            <span className="block text-indigo-600">{PERSONAL_INFO.tagline}</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {PERSONAL_INFO.title}
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Button>{UI_TEXT.buttons.viewMyWork}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}