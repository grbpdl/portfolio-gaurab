import { Metadata } from "next"
import { ProjectFilter } from "@/components/project-filter"
import { ProjectGrid } from "@/components/project-grid"

export const metadata: Metadata = {
  title: "Projects | Professional Portfolio",
  description: "Explore my portfolio of web development and design projects",
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12 pb-16 pt-24 sm:pt-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Projects & Case Studies
          </h1>
          <p className="text-muted-foreground text-lg mx-auto max-w-[700px]">
            Explore my recent work across various industries and technologies.
            Each project represents a unique challenge and solution.
          </p>
        </div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ProjectFilter />
          <ProjectGrid />
        </div>
      </div>
    </div>
  )
}