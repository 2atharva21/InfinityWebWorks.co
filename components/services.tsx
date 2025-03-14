"use client"

import { motion } from "framer-motion"
import { Code, Palette, Rocket, Search, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Development",
      description:
        "We build responsive and high-performance websites that help businesses create a strong online presence. Whether it's a simple landing page or a complex eCommerce platform, we deliver tailored solutions.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "AI-Powered Websites",
      description:
        "Leverage the power of AI to enhance user experience with smart features such as personalized recommendations, chatbots, and intelligent content generation.",
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Automation",
      description:
        "Streamline your processes with cutting-edge automation solutions. From workflow automation to task management systems, we help you reduce manual work and increase productivity.",
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "SEO Optimization",
      description:
        "We optimize your website to rank higher in search engines. Our SEO strategies focus on on-page, off-page, and technical SEO to drive organic traffic and increase visibility.",
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "UI/UX Design",
      description:
        "Our design team creates intuitive and user-centric interfaces. We focus on user research, wireframing, and prototyping to ensure a seamless experience across all devices.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      rotate: -5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  }

  return (
    <section id="services" className="py-20 relative bg-gradient-to-r from-purple-700 to-cyan-600">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Services</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape. From web
            development to AI-powered solutions, we’re here to help you stay ahead of the competition.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div
                  className="mb-4 text-primary group-hover:text-primary/80 transition-colors duration-300"
                  whileHover={{ rotate: 10, transition: { duration: 0.3 } }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
