"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger)

export default function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/E-Commerce Platform.jpg?height=600&width=800",
    },
    {
      title: "AI Content Generator",
      category: "AI Solutions",
      image: "/AI Content Generator.jpg?height=600&width=800",
    },
    {
      title: "Financial Dashboard",
      category: "UI/UX Design",
      image: "/UI-UX Design.jpg?height=600&width=800",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  useEffect(() => {
    // GSAP animation for project cards on scroll
    gsap.utils.toArray(".gsap-project-card").forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })

    // GSAP hover effect for project card images
    gsap.utils.toArray(".gsap-project-card").forEach((card: any) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card.querySelector("img"), { scale: 1.1, duration: 0.3 })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(card.querySelector("img"), { scale: 1, duration: 0.3 })
      })
    })
  }, [])

  return (
    <section className="py-20 relative" aria-labelledby="projects-heading">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Projects</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore some of our recent work and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="gsap-project-card group relative overflow-hidden rounded-xl aspect-[4/3]"
              aria-label={`Project titled ${project.title}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <Image
                src={project.image || "/images/placeholder.png"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm text-primary font-medium mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-white font-medium bg-primary/80 backdrop-blur-sm rounded-lg py-2 px-4 w-fit hover:bg-primary transition-colors duration-300"
                >
                  View More
                  <ArrowUpRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <Button size="lg" asChild>
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
