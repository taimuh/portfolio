export const PERSONAL_INFO = {
  name: "Taimoon",
  greeting: "Hi, I'm",
  title:
    "Software developer specializing in React/TypeScript, Node.js and Java",
  tagline: "Turning ideas into reality, one line at a time",
  xHandle: "@taimoon_dev",
  about:
    "I am a software developer with expertise in modern web technologies. I specialize in building scalable and performant applications using React, TypeScript, Node.js, and Java. With a passion for clean code and user-centered design, I strive to create solutions that are both technically robust and delightful to use.",
} as const;

export const SITE_CONFIG = {
  title: "Taimoon - Homepage",
  description: "Taimoon's Homepage",
} as const;

export const NAVIGATION = {
  items: [
    { href: "#about", label: "About" },
    { href: "#posts", label: "Posts" },
    { href: "#works", label: "Works" },
    { href: "#contact", label: "Contact" },
    { href: "https://github.com/taimuh", label: "Source" },
  ],
} as const;

export const UI_TEXT = {
  buttons: {
    viewMyWork: "View My Works",
    viewPost: "View Post",
    viewWork: "View Work",
    openMenu: "Open menu",
    toggleTheme: "Toggle theme",
  },
  sections: {
    about: "About",
    posts: "Posts",
    works: "Works",
    contactInfo: "Contact Information",
  },
  placeholders: {
    postTitle: "Post",
    workTitle: "Work",
    shortPostDescription: "Short post description",
    shortWorkDescription: "Short work description",
    postDetails: "Post details go here...",
    workDetails: "Work details go here...",
  },
  footer: {
    allRightsReserved: "All rights reserved.",
  },
} as const;

export const THEME_CONFIG = {
  attribute: "class",
  defaultTheme: "system",
  values: {
    dark: "dark",
    light: "light",
  },
} as const;
