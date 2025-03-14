"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function About() {
  const features = [
    "Expert team of developers and designers",
    "Cutting-edge technologies and frameworks",
    "Agile development methodology",
    "Focus on performance and scalability",
    "Dedicated support and maintenance",
    "Continuous innovation and improvement",
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-white/10 transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 transform -rotate-3" />
              <div className="absolute inset-4 bg-background/40 backdrop-blur-md rounded-xl overflow-hidden">
                <div className="w-full h-full bg-[url('/placeholder.svg?height=600&width=600')] bg-cover bg-center" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                InfinityWebWorks.co
              </span>
            </h2>

            <p className="text-foreground/80">
              InfinityWebWorks.co is a forward-thinking web development agency dedicated to creating exceptional digital
              experiences. We combine technical expertise with creative innovation to deliver websites and applications
              that exceed expectations.
            </p>

            <p className="text-foreground/80">
              Our mission is to empower businesses with cutting-edge web solutions that drive growth and enhance user
              engagement. We believe in pushing the boundaries of what's possible in web development, constantly
              exploring new technologies and methodologies to stay ahead of the curve.
            </p>

            <p className="text-foreground/80">
              Our team is composed of seasoned professionals who are passionate about technology and design. We work
              collaboratively with our clients to understand their unique needs and deliver tailored solutions that
              align with their goals. Whether you're a startup looking to establish an online presence or an enterprise
              seeking to optimize your digital strategy, InfinityWebWorks.co is here to help you succeed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

