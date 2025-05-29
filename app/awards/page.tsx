import { Metadata } from "next"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Awards & Achievements | Gaurab Paudyal",
  description: "Recognition and milestones in my professional journey",
}

const awards = [
  {
    title: "Best Innovation Award",
    organization: "Tech Summit 2023",
    date: "December 2023",
    description: "Recognized for developing an innovative AI-powered solution that revolutionizes user experience in web applications.",
    image: "https://images.pexels.com/photos/7235679/pexels-photo-7235679.jpeg"
  },
  {
    title: "Outstanding Developer of the Year",
    organization: "Developer's Association",
    date: "September 2023",
    description: "Awarded for exceptional contributions to open-source projects and community development initiatives.",
    image: "https://images.pexels.com/photos/7235680/pexels-photo-7235680.jpeg"
  },
  {
    title: "Hackathon Champion",
    organization: "Global Code Fest",
    date: "July 2023",
    description: "Led a team to victory in developing a sustainable technology solution for environmental monitoring.",
    image: "https://images.pexels.com/photos/7235681/pexels-photo-7235681.jpeg"
  }
]

export default function AwardsPage() {
  return (
    <div className="flex flex-col gap-12 pb-16 pt-24 sm:pt-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Awards & Achievements
          </h1>
          <p className="text-muted-foreground text-lg mx-auto max-w-[700px]">
            Recognition and milestones that mark my journey in technology and innovation.
          </p>
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="text-sm text-primary font-medium">
                        {award.date}
                      </div>
                      <h2 className="text-2xl font-bold">{award.title}</h2>
                      <p className="text-muted-foreground font-medium">
                        {award.organization}
                      </p>
                      <p className="text-muted-foreground">
                        {award.description}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}