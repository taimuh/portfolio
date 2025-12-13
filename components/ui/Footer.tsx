"use client";

import { PERSONAL_INFO, UI_TEXT } from "@/lib/constants";

// ビルド時に年を固定してハイドレーションエラーを防ぐ
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={STYLES.footer}>
      <div className={STYLES.container}>
        <div className={STYLES.content}>
          <p className={STYLES.text}>
            © {CURRENT_YEAR} {PERSONAL_INFO.name}.{" "}
            {UI_TEXT.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}

const STYLES = {
  footer: "bg-[#fffcf9] dark:bg-gray-800 items-center",
  container: "max-w-7xl mx-auto py-12 px-4 sm:px-6 md:items-center lg:px-8",
  content: "mt-8 md:mt-0 md:order-1",
  text: "text-center text-base text-gray-400 dark:text-gray-500",
} as const;
