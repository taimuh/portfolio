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
import { Menu } from 'lucide-react'

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold">My Name</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#projects" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Projects
                </a>
                <a href="#skills" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Skills
                </a>
                <a href="#contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Contact
                </a>
                <a href="#contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Source
                </a>
              </div>
            </div>
            <div className="sm:hidden flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
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
                    <a href="#contact">Source</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm My name</span>
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

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Projects</h2>
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
      <section id="skills" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Skills</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'Tailwind CSS'].map((skill) => (
              <div key={skill} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{skill}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Experienced in building robust applications with {skill}.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Me</h2>
          <div className="mt-12 max-w-lg mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Get in touch</CardTitle>
                <CardDescription>Fill out the form below to send me a message.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Your email" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Send Message</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {['GitHub', 'LinkedIn', 'Twitter'].map((item) => (
              <a key={item} href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item}</span>
                {/* Add appropriate icon here */}
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2024 My name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;