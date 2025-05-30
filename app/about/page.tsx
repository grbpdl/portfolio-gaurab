import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Timeline } from "@/components/timeline";

export const metadata: Metadata = {
  title: "About | Gaurab Paudyal",
  description: "Learn more about my background, experience, and expertise",
};

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
                Full Stack Web Developer and Computer Engineering graduate with
                a strong focus on building scalable web applications and
                dynamic, user-friendly interfaces.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Passionate about crafting clean, maintainable code and intuitive
                digital solutions. When not coding, I enjoy exploring new
                technologies, hiking, and contributing to open-source
                communities.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="overflow-hidden rounded-lg border">
              <img
                src="https://res.cloudinary.com/dazmdsylh/image/upload/v1748616541/gaurab_hult_ceuk2c.jpg"
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
                    title: "Full Stack Developer",
                    company: "Tootle (Nepal's First Ride Sharing Company)",
                    duration: "August 2024 - Present",
                    description:
                      "Implemented microservice architecture and monorepo structure to scale systems handling thousands of concurrent users and millions of API requests.",
                  },
                  {
                    title: "Full Stack Developer",
                    company: "Lyara Innovations (Remote Work)",
                    duration: "Feb 2024 - June 2024",
                    description:
                      "Used MERN stack to develop and Dockerize projects, and conducted QA testing to ensure high reliability.",
                  },
                  {
                    title: "Freelance Developer",
                    company: "Upwork",
                    duration: "July 2023 - Feb 2024",
                    description:
                      "Built an e-commerce platform, integrated APIs, optimized databases, and designed modern, responsive UIs for various client projects.",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              <Timeline
                items={[
                  {
                    title: "Bachelors in Computer Engineering",
                    company:
                      "Nepal College of Information Technology, Lalitpur",
                    duration: "2019 - 2024",
                    description:
                      "Graduated with an SGPA of 3.95/4. Specialized in full stack development and backend architecture.",
                  },
                  {
                    title: "Higher Secondary Education (XII)",
                    company: "Kalika Manvagyan Secondary School, Butwal",
                    duration: "2017 - 2019",
                    description:
                      "Completed with GPA of 3.10/4. Focused on science and technology subjects.",
                  },
                  {
                    title: "Secondary Education (SEE)",
                    company: "Kalika Manvagyan Secondary School, Butwal",
                    duration: "2015 - 2016",
                    description:
                      "Achieved GPA of 3.65/4 in final national board exams.",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="philosophy" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Clean Code & Maintainability",
                    description:
                      "I prioritize writing code that's efficient, readable, and easy to maintain.",
                  },
                  {
                    title: "Scalable Architecture",
                    description:
                      "My work focuses on designing scalable systems using microservices and modular monorepo setups.",
                  },
                  {
                    title: "Continuous Learning",
                    description:
                      "I'm dedicated to expanding my technical skills through hands-on work and community involvement.",
                  },
                  {
                    title: "User-Focused Interfaces",
                    description:
                      "Every design decision I make is grounded in enhancing the user experience.",
                  },
                  {
                    title: "Collaborative Development",
                    description:
                      "Open-source participation and team-based projects are central to my professional growth.",
                  },
                  {
                    title: "Performance Optimization",
                    description:
                      "I strive to build systems that are not only functional but also fast and responsive.",
                  },
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
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
              Open to new challenges and collaborative opportunities. Whether
              it's a freelance gig, startup idea, or full-time project, feel
              free to reach out.
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
  );
}
