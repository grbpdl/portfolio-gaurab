import Link from "next/link"
import { Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "@/lib/framer-motion"

export function HeroSection() {
  return (
    <section className="container px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Full Stack Developer
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6"
        >
          <span className="block">Creating digital</span>
          <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
            experiences that matter
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[700px] text-muted-foreground text-lg mb-8"
        >
          I'm a passionate developer specializing in creating beautiful, 
          functional, and user-centered digital experiences. With a focus on modern technologies
          and best practices, I build applications that solve real problems.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" asChild>
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
      
      <div className="mt-16 flex justify-center overflow-hidden rounded-lg border bg-background">
        <img
          src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Portfolio showcase"
          className="w-full max-w-[900px] object-cover aspect-video"
        />
      </div>
      
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {[
          { number: "5+", label: "Years Experience" },
          { number: "50+", label: "Projects Completed" },
          { number: "20+", label: "Happy Clients" },
          { number: "3", label: "Industry Awards" },
        ].map((stat, index) => (
          <div key={index}>
            <div className="text-3xl font-bold mb-1">{stat.number}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}