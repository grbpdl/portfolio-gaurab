"use client";

import { Metadata } from "next";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  FiFile,
  FiCode,
  FiTerminal,
  FiServer,
  FiShare2,
  FiDatabase,
  FiPackage,
  FiSettings,
  FiGitBranch,
  FiGithub,
  FiCloud,
  FiBox,
} from "react-icons/fi";
import { AiOutlineBug } from "react-icons/ai";

export const metadata: Metadata = {
  title: "Skills | Gaurab Paudyal",
  description: "Explore my technical skills, tools, and areas of expertise",
};

interface Tool {
  name: string;
  icon: React.ReactElement;
}

const tools: Tool[] = [
  { name: "JavaScript", icon: <FiFile size={18} /> },
  { name: "TypeScript", icon: <FiCode size={18} /> },
  { name: "React", icon: <FiCode size={18} /> },
  { name: "Next.js", icon: <FiTerminal size={18} /> },
  { name: "Node.js", icon: <FiServer size={18} /> },
  { name: "Express", icon: <FiShare2 size={18} /> },
  { name: "MongoDB", icon: <FiDatabase size={18} /> },
  { name: "PostgreSQL", icon: <FiDatabase size={18} /> },
  { name: "GraphQL", icon: <FiCode size={18} /> },
  { name: "REST API", icon: <FiShare2 size={18} /> },
  { name: "HTML5", icon: <FiFile size={18} /> },
  { name: "CSS3", icon: <FiCode size={18} /> },
  { name: "Tailwind CSS", icon: <FiPackage size={18} /> },
  { name: "SASS", icon: <FiPackage size={18} /> },
  { name: "Redux", icon: <FiSettings size={18} /> },
  { name: "Jest", icon: <AiOutlineBug size={18} /> },
  { name: "Git", icon: <FiGitBranch size={18} /> },
  { name: "GitHub", icon: <FiGithub size={18} /> },
  { name: "VS Code", icon: <FiCode size={18} /> },
  { name: "AWS", icon: <FiCloud size={18} /> },
  { name: "Docker", icon: <FiBox size={18} /> },
];

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "React / Next.js", proficiency: 95 },
      { name: "TypeScript", proficiency: 90 },
      { name: "HTML5 / CSS3", proficiency: 95 },
      { name: "JavaScript", proficiency: 95 },
      { name: "Tailwind CSS", proficiency: 90 },
      { name: "Redux", proficiency: 85 },
      { name: "Responsive Design", proficiency: 95 },
      { name: "Webpack / Vite", proficiency: 80 },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express.js", proficiency: 80 },
      { name: "REST API Design", proficiency: 90 },
      { name: "GraphQL", proficiency: 75 },
      { name: "MongoDB", proficiency: 80 },
      { name: "PostgreSQL", proficiency: 75 },
      { name: "Firebase", proficiency: 85 },
      { name: "Serverless", proficiency: 70 },
    ],
  },
  {
    id: "other",
    title: "Other Skills",
    skills: [
      { name: "Git / GitHub", proficiency: 90 },
      { name: "CI/CD Pipelines", proficiency: 75 },
      { name: "Testing (Jest, Cypress)", proficiency: 80 },
      { name: "Docker", proficiency: 70 },
      { name: "AWS / Vercel / Netlify", proficiency: 80 },
      { name: "Performance Optimization", proficiency: 85 },
      { name: "SEO", proficiency: 75 },
      { name: "Project Management", proficiency: 85 },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-12 pb-16 pt-24 sm:pt-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Skills & Expertise
          </h1>
          <p className="text-muted-foreground text-lg mx-auto max-w-[700px]">
            A comprehensive overview of my technical skills, tools, and areas of
            expertise developed throughout my professional journey.
          </p>
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8">
        <Accordion type="multiple" className="w-full space-y-4">
          {skillCategories.map((category) => (
            <AccordionItem key={category.id} value={category.id}>
              <AccordionTrigger className="text-xl font-semibold">
                {category.title}
              </AccordionTrigger>
              <AccordionContent className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {category.skills.map((skill, idx) => (
                  <Card key={idx}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{skill.name}</CardTitle>
                        <span className="text-sm text-muted-foreground">
                          {skill.proficiency}%
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress value={skill.proficiency} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Tools & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 border rounded-md px-4 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {tool.icon}
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
