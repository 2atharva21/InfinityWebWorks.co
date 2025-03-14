"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    beforeImage: "/ecommerce-before.jpg",
    afterImage: "/ecommerce-after.jpg",
    description: "A modern e-commerce platform with advanced product filtering and seamless checkout experience.",
  },
  {
    title: "AI Content Generator",
    beforeImage: "/ai-before.jpg",
    afterImage: "/ai-after.jpg",
    description: "An AI-powered content generation tool that creates high-quality, SEO-optimized content.",
  },
  {
    title: "Financial Dashboard",
    beforeImage: "/dashboard-before.jpg",
    afterImage: "/dashboard-after.jpg",
    description: "A comprehensive financial dashboard with real-time data visualization and reporting.",
  },
  {
    title: "Social Media Dashboard",
    beforeImage: "/social-before.jpg",
    afterImage: "/social-after.jpg",
    description: "A comprehensive social media dashboard with real-time analytics and reporting.",
  },
]

export default function Portfolio() {
  return (
    <section className="py-20 relative" aria-labelledby="portfolio-heading">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="portfolio-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Portfolio</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore some of our recent work and see the before and after results of our projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6"
              aria-label={`Project titled ${project.title}`}
            >
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              <div className="relative w-full aspect-w-16 aspect-h-9 mb-4">
                <Image src={project.beforeImage} alt={`${project.title} Before`} layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-full aspect-w-16 aspect-h-9">
                <Image src={project.afterImage} alt={`${project.title} After`} layout="fill" objectFit="cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
