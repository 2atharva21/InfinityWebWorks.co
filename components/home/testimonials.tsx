"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "John Doe",
    feedback: "InfinityWebWorks.co transformed our online presence. Their team is highly skilled and professional.",
    company: "TechCorp",
  },
  {
    name: "Jane Smith",
    feedback: "The AI-powered website they built for us is amazing. Our user engagement has increased significantly.",
    company: "AI Innovations",
  },
  {
    name: "Michael Johnson",
    feedback: "Their UI/UX design services are top-notch. Our app looks and feels great thanks to their expertise.",
    company: "Appify",
  },
  {
    name: "Emily Davis",
    feedback: "Their customer support is outstanding. They were always available to help us with any issues.",
    company: "SupportCo",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 relative" aria-labelledby="testimonials-heading">
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
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-4">
            What Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Clients</span>{" "}
            Say
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Hear from some of our satisfied clients about their experience working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6"
              aria-label={`Testimonial from ${testimonial.name} of ${testimonial.company}`}
            >
              <p className="text-foreground/70 mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-lg font-bold">{testimonial.name}</h3>
              <p className="text-foreground/70">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
