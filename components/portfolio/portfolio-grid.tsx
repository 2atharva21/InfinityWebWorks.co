"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("all")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Design" },
    { id: "ai", name: "AI Websites" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "ui", name: "UI/UX Design" },
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "ecommerce",
      tags: ["web", "ecommerce"],
      image: "/E-Commerce Platform.jpg",
      description: "A modern e-commerce platform with advanced product filtering and seamless checkout experience.",
    },
    {
      id: 2,
      title: "AI Content Generator",
      category: "ai",
      tags: ["ai", "web"],
      image: "/AI Content Generator.jpg",
      description: "An AI-powered content generation tool that creates high-quality, SEO-optimized content.",
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "ui",
      tags: ["ui", "web"],
      image: "/UI-UX Design.jpg",
      description: "A comprehensive financial dashboard with real-time data visualization and reporting.",
    },
    {
      id: 4,
      title: "Healthcare Portal",
      category: "web",
      tags: ["web", "ui"],
      image: "/Healthcare Portal.jpg",
      description: "A secure healthcare portal allowing patients to access medical records and schedule appointments.",
    },
    {
      id: 5,
      title: "Smart Home App",
      category: "ai",
      tags: ["ai", "ui"],
      image: "/Smart Home App.jpg",
      description: "An intuitive mobile app for controlling smart home devices with voice commands and automation.",
    },
    {
      id: 6,
      title: "Marketing Analytics",
      category: "ai",
      tags: ["web", "ai"],
      image: "/Marketing Analytics.jpg",
      description: "A marketing analytics platform that provides actionable insights and campaign performance metrics.",
    },
    {
      id: 7,
      title: "Online Learning Platform",
      category: "ecommerce",
      tags: ["web", "ecommerce"],
      image: "/E-Learning.jpg",
      description: "An interactive online learning platform with course management and progress tracking.",
    },
    {
      id: 8,
      title: "Restaurant Ordering System",
      category: "ecommerce",
      tags: ["ecommerce", "ui"],
      image: "/Restaurant Ordering System.jpg",
      description: "A digital ordering system for restaurants with real-time order tracking and payment processing.",
    },
    {
      id: 9,
      title: "Travel Booking Website",
      category: "ecommerce",
      tags: ["web", "ecommerce"],
      image: "/Travel Booking Website.jpg",
      description: "A comprehensive travel booking website with personalized recommendations and trip planning.",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.tags.includes(filter))

  // Helper function to manage button styles based on the selected filter
  const getButtonClass = (itemId: string) =>
    filter === itemId
      ? "bg-primary text-white shadow-lg"
      : "bg-gray-100 dark:bg-background/50 border border-gray-300 dark:border-border/50 hover:border-primary/50 text-gray-700 dark:text-foreground/80 hover:shadow-md"

  return (
    <section className="py-20 relative bg-white text-black dark:bg-background dark:text-foreground">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${getButtonClass(item.id)}`}
            >
              {item.name}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-primary font-medium mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">{project.title}</h3>
                  <p className="text-black/80 dark:text-white/80 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 text-black dark:text-white font-medium bg-primary/80 backdrop-blur-sm rounded-lg py-2 px-4 w-fit hover:bg-primary transition-colors duration-300"
                  >
                    View More
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-700 dark:text-foreground/70 text-lg">
              No projects found for the selected filter. Try another category or filter to explore more projects.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
