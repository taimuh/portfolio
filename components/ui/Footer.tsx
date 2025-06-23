import { PERSONAL_INFO, UI_TEXT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className={STYLES.footer}>
      <div className={STYLES.container}>
        <div className={STYLES.content}>
          <p className={STYLES.text}>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}.{" "}
            {UI_TEXT.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}

const STYLES = {
  footer: "bg-stone-100 dark:bg-gray-800 items-center",
  container: "max-w-7xl mx-auto py-12 px-4 sm:px-6 md:items-center lg:px-8",
  content: "mt-8 md:mt-0 md:order-1",
  text: "text-center text-base text-gray-400 dark:text-gray-500",
} as const;
