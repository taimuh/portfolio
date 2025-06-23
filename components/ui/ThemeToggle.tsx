"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { UI_TEXT, THEME_CONFIG } from "@/lib/constants";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() =>
        setTheme(
          theme === THEME_CONFIG.values.dark
            ? THEME_CONFIG.values.light
            : THEME_CONFIG.values.dark,
        )
      }
      aria-label={UI_TEXT.buttons.toggleTheme}
      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
