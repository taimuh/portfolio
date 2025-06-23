import { PERSONAL_INFO, UI_TEXT } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-gray-800 items-center">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:items-center lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. {UI_TEXT.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}