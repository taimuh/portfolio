import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Github, Mail, Menu, Moon, Sun } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-stone-100 dark:bg-gray-800 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-indigo-600">My Name</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#posts" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Posts
                </a>
                <a href="#projects" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Projects
                </a>
                <a href="#skills" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Skills
                </a>
                <a href="#contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Contact
                </a>
                <a href="#source" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg><div>&nbsp;Source</div>
                </a>
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
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <a href="#posts">Posts</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#projects">Projects</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#skills">Skills</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#contact">Contact</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#source">Source</a>
                  </DropdownMenuItem>
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
              <span className="block">Hi, Im My name</span>
              <span className="block text-indigo-600">I build amazing web experiences</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Full-stack developer specializing in React, Next.js, and Node.js
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Button>View My Work</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section id="posts" className="bg-stone-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-stone-100">Posts</h2>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <CardTitle>Post {item}</CardTitle>
                  <CardDescription>Short post description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Post details go here...</p>
                </CardContent>
                <CardFooter>
                  <Button>View Post</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-neutral-200 dark:bg-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-stone-100">Projects</h2>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <CardTitle>Project {item}</CardTitle>
                  <CardDescription>Short project description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Project details go here...</p>
                </CardContent>
                <CardFooter>
                  <Button>View Project</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-stone-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-stone-100">Skills</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'Tailwind CSS'].map((skill) => (
              <Card key={skill}>
                <CardHeader>
                  <CardTitle>{skill}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Short project description</CardDescription>
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
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-slate-900" />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                <svg className="h-6 w-6 text-slate-900"  width="24" height="24" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                  <span>@YourXHandle</span>
                </div>
              </div>
            </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 dark:bg-gray-800 items-center">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:items-center lg:px-8">
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
            © {new Date().getFullYear()} My name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;