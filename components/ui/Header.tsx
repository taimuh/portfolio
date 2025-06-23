"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { PERSONAL_INFO, NAVIGATION, UI_TEXT } from "@/lib/constants";

export function Header() {
  return (
    <header className={STYLES.header}>
      <nav className={STYLES.nav}>
        <div className={STYLES.container}>
          <div className={STYLES.leftSection}>
            <div className={STYLES.logoContainer}>
              <span className={STYLES.logo}>{PERSONAL_INFO.name}</span>
            </div>
            <div className={STYLES.desktopNavigation}>
              {NAVIGATION.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={STYLES.navLink}
                  {...(item.label === "Source" && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {item.label === "Source" && (
                    <svg
                      className={STYLES.githubIcon}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className={STYLES.desktopThemeToggle}>
            <ThemeToggle />
          </div>
          <div className={STYLES.mobileSection}>
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className={STYLES.menuIcon} />
                  <span className={STYLES.srOnly}>
                    {UI_TEXT.buttons.openMenu}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {NAVIGATION.items.map((item) => (
                  <DropdownMenuItem key={item.href}>
                    <a
                      href={item.href}
                      {...(item.label === "Source" && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  );
}

const STYLES = {
  header: "bg-stone-100 dark:bg-gray-800 shadow-sm",
  nav: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  container: "flex justify-between h-16",
  leftSection: "flex",
  logoContainer: "flex-shrink-0 flex items-center",
  logo: "text-2xl font-bold text-indigo-600 dark:text-indigo-400",
  desktopNavigation: "hidden sm:ml-6 sm:flex sm:space-x-8",
  navLink:
    "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
  githubIcon: "h-5 w-5 mr-1",
  desktopThemeToggle:
    "hidden sm:ml-6 sm:flex sm:space-x-8 flex items-center text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-100 mr-4",
  mobileSection: "sm:hidden flex items-center",
  menuIcon: "h-5 w-5",
  srOnly: "sr-only",
} as const;
