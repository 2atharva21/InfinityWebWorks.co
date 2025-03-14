'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServiceProcess() {
  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and requirements through in-depth consultations.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Based on our findings, we develop a comprehensive strategy tailored to your specific needs.",
    },
    {
      number: "03",
      title: "Design",
      description: "Our designers create visually stunning and user-friendly interfaces that align with your brand.",
    },
    {
      number: "04",
      title: "Development",
      description: "Our development team brings the designs to life using the latest technologies and best practices.",
    },
    {
      number: "05",
      title: "Testing",
      description: "Rigorous testing ensures that your solution is bug-free, secure, and performs optimally.",
    },
    {
      number: "06",
      title: "Launch",
      description: "We handle the deployment process and ensure a smooth transition to your new digital solution.",
    },
  ]

  return (
    <section className="py-20 relative">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Process</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We follow a structured approach to ensure that every project is delivered on time, within budget, and
            exceeds expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {process.map((step) => (
            <motion.div
              key={step.number} // Use a unique key here instead of index
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: parseInt(step.number) * 0.1 }} // Delay by step number for sequential animations
              className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 ease-in-out transform hover:scale-105"
              tabIndex={0} // Ensure the card is focusable for accessibility
              role="article" // Role as article for each step
              aria-label={`${step.title} step`} // Accessible label
            >
              <div className="text-4xl font-bold text-primary/30 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
            Ready to start your project? Contact us today to discuss how we can help you achieve your digital goals.
          </p>
          <Button size="lg" className="group" asChild>
            <Link href="/contact" aria-label="Get started with us">
              Get Started
              <span className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
