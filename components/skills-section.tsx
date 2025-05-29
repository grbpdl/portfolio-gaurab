import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SkillsSection() {
  const skillCategories = [
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
      id: "design",
      title: "Design & UI/UX",
      skills: [
        { name: "Figma", proficiency: 85 },
        { name: "UI Design", proficiency: 80 },
        { name: "UX Principles", proficiency: 85 },
        { name: "Prototyping", proficiency: 75 },
        { name: "Wireframing", proficiency: 90 },
        { name: "Design Systems", proficiency: 80 },
        { name: "Accessibility", proficiency: 85 },
        { name: "User Research", proficiency: 70 },
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
  ]
  
  return (
    <div className="container px-4 sm:px-6 lg:px-8">
      <Tabs defaultValue={skillCategories[0].id} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          {skillCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {skillCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.skills.map((skill, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                      <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={skill.proficiency} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Tools & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
            "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST API",
            "HTML5", "CSS3", "Tailwind CSS", "SASS", "Redux",
            "Jest", "Cypress", "Git", "GitHub", "VS Code",
            "Figma", "AWS", "Vercel", "Firebase", "Docker"
          ].map((tool, index) => (
            <div
              key={index}
              className="rounded-md border px-4 py-3 text-center text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}