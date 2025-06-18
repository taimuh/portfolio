export const PERSONAL_INFO = {
  name: "Taimoon",
  greeting: "Hi, I'm",
  title: "Software developer specializing in React/TypeScript, Node.js and Java",
  tagline: "I build amazing web experiences",
  xHandle: "@taimoon_dev",
} as const;

export const SITE_CONFIG = {
  title: "Taimoon - Homepage",
  description: "Taimoon's Homepage",
} as const;

export const NAVIGATION = {
  items: [
    { href: "#posts", label: "Posts" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
    { href: "#source", label: "Source" },
  ],
} as const;

export const UI_TEXT = {
  buttons: {
    viewMyWork: "View My Work",
    viewPost: "View Post",
    viewProject: "View Project",
    openMenu: "Open menu",
    toggleTheme: "Toggle theme",
  },
  sections: {
    posts: "Posts",
    projects: "Projects",
    skills: "Skills",
    contactInfo: "Contact Information",
  },
  placeholders: {
    postTitle: "Post",
    projectTitle: "Project",
    shortPostDescription: "Short post description",
    shortProjectDescription: "Short project description",
    postDetails: "Post details go here...",
    projectDetails: "Project details go here...",
  },
  footer: {
    allRightsReserved: "All rights reserved.",
  },
} as const;

export const SKILLS = [
  "React",
  "Next.js", 
  "Node.js",
  "TypeScript",
  "Java",
  "Tailwind CSS",
] as const;

export const THEME_CONFIG = {
  attribute: "class",
  defaultTheme: "system",
  values: {
    dark: "dark",
    light: "light",
  },
} as const;