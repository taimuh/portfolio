import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { PERSONAL_INFO, NAVIGATION, UI_TEXT, SKILLS } from '@/lib/constants';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-stone-100 dark:bg-gray-800 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-indigo-600">{PERSONAL_INFO.name}</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {NAVIGATION.items.map((item) => (
                  <a key={item.href} href={item.href} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    {item.label === 'Source' && (
                      <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {item.label}
                  </a>
                ))}
              </div>
              
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 flex items-center text-gray-500 hover:border-gray-300 hover:text-gray-700  mr-4">
                <ThemeToggle />
            </div>
            <div className="sm:hidden flex items-center">
            <ThemeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">{UI_TEXT.buttons.openMenu}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {NAVIGATION.items.map((item) => (
                    <DropdownMenuItem key={item.href}>
                      <a href={item.href}>{item.label}</a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
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

      {/* Posts Section */}
      <section id="posts" className="bg-stone-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-stone-100">{UI_TEXT.sections.posts}</h2>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <CardTitle>{UI_TEXT.placeholders.postTitle} {item}</CardTitle>
                  <CardDescription>{UI_TEXT.placeholders.shortPostDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{UI_TEXT.placeholders.postDetails}</p>
                </CardContent>
                <CardFooter>
                  <Button>{UI_TEXT.buttons.viewPost}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-neutral-200 dark:bg-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-stone-100">{UI_TEXT.sections.projects}</h2>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <CardTitle>{UI_TEXT.placeholders.projectTitle} {item}</CardTitle>
                  <CardDescription>{UI_TEXT.placeholders.shortProjectDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{UI_TEXT.placeholders.projectDetails}</p>
                </CardContent>
                <CardFooter>
                  <Button>{UI_TEXT.buttons.viewProject}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-stone-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-stone-100">{UI_TEXT.sections.skills}</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skill) => (
              <Card key={skill}>
                <CardHeader>
                  <CardTitle>{skill}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{UI_TEXT.placeholders.shortProjectDescription}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-neutral-200 dark:bg-gray-700 py-16">
         {/* Contact Information */}
        <div className="bg-neutral-200 dark:bg-gray-700 rounded-lg p-8 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-6">{UI_TEXT.sections.contactInfo}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                <svg className="h-6 w-6 text-slate-900"  width="24" height="24" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                  <span>{PERSONAL_INFO.xHandle}</span>
                </div>
              </div>
            </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 dark:bg-gray-800 items-center">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:items-center lg:px-8">
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. {UI_TEXT.footer.allRightsReserved}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;