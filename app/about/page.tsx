import { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Timeline } from "@/components/timeline"

export const metadata: Metadata = {
  title: "About | Professional Portfolio",
  description: "Learn more about my background, experience, and expertise",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-16 pt-24 sm:pt-32">
      <section className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                About Me
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                I'm a passionate full-stack developer with 5+ years of experience creating 
                digital solutions that solve real-world problems. My journey in technology 
                started with a curiosity about how things work and evolved into a career 
                building innovative applications.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                I believe in writing clean, maintainable code and creating intuitive, 
                user-centered experiences. When I'm not coding, you can find me hiking, 
                reading sci-fi novels, or experimenting with new technologies.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="overflow-hidden rounded-lg border">
              <img
                src="https://images.pexels.com/photos/5989935/pexels-photo-5989935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="experience" className="space-y-6">
              <Timeline
                items={[
                  {
                    title: "Senior Developer",
                    company: "Tech Innovations Inc.",
                    duration: "2021 - Present",
                    description: "Lead developer on multiple high-profile projects, managing teams and architecting scalable solutions.",
                  },
                  {
                    title: "Full Stack Developer",
                    company: "Digital Solutions Lab",
                    duration: "2018 - 2021",
                    description: "Built and maintained full-stack applications, focusing on clean code and optimal performance.",
                  },
                  {
                    title: "Front-End Developer",
                    company: "WebCraft Studios",
                    duration: "2016 - 2018",
                    description: "Developed responsive and accessible user interfaces for a variety of clients across different industries.",
                  },
                ]}
              />
            </TabsContent>
            
            <TabsContent value="education" className="space-y-6">
              <Timeline
                items={[
                  {
                    title: "Master of Computer Science",
                    company: "Tech University",
                    duration: "2014 - 2016",
                    description: "Specialized in Human-Computer Interaction and Software Engineering.",
                  },
                  {
                    title: "Bachelor of Science in Information Technology",
                    company: "State University",
                    duration: "2010 - 2014",
                    description: "Graduated with honors. Focus on web development and database systems.",
                  },
                  {
                    title: "Professional Certifications",
                    company: "Various Institutions",
                    duration: "2015 - Present",
                    description: "AWS Certified Solutions Architect, Google Cloud Professional, React Certification.",
                  },
                ]}
              />
            </TabsContent>
            
            <TabsContent value="philosophy" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "User-Centered Design",
                    description: "I believe in putting users first, creating intuitive experiences that solve real problems.",
                  },
                  {
                    title: "Clean, Maintainable Code",
                    description: "Writing code that's not just functional but sustainable and easy for others to understand.",
                  },
                  {
                    title: "Continuous Learning",
                    description: "Technology evolves rapidly, and I'm committed to growing my skills and knowledge.",
                  },
                  {
                    title: "Collaborative Development",
                    description: "The best solutions emerge from diverse perspectives and effective teamwork.",
                  },
                  {
                    title: "Performance Matters",
                    description: "Speed and efficiency are crucial to user experience and should never be an afterthought.",
                  },
                  {
                    title: "Accessibility for All",
                    description: "Building inclusive digital experiences that work for everyone, regardless of ability.",
                  },
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-lg bg-primary/5 border border-primary/10 px-6 py-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-6">
              I'm always interested in new challenges and collaborative opportunities. 
              Whether you have a specific project in mind or just want to connect, I'd love to hear from you.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}