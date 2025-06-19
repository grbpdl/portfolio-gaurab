import { Metadata } from "next";
// import { SkillsSection } from "@/components/skills-section";

export const metadata: Metadata = {
  title: "Skills | Gaurab Paudyal",
  description: "Explore my technical skills, tools, and areas of expertise",
};

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

      {/* <SkillsSection /> */}
    </div>
  );
}
