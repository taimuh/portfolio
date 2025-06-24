// 共通のスタイル定数

export const COMMON_STYLES = {
  // コンテナ
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  
  // セクションタイトル
  sectionTitle: "text-3xl font-extrabold text-gray-900 dark:text-stone-100",
  
  // テキストスタイル
  text: {
    small: "text-sm",
    muted: "text-gray-500 dark:text-gray-400",
    primary: "text-gray-900 dark:text-stone-100",
    secondary: "text-gray-700 dark:text-gray-300",
  },
  
  // スペーシング
  spacing: {
    section: "py-16",
    gridTop: "mt-12",
    gridGap: "gap-5",
  },
  
  // グリッドレイアウト
  grid: {
    base: "grid",
    responsive: "grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
    centered: "justify-items-center",
  },
} as const;