"use client"

import { motion } from "framer-motion"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"

export default function ContactBanner() {
  const sectionRef = useRef<HTMLDivElement>(null)

  // GSAP gradient animation with enhanced natural colors
  useEffect(() => {
    if (typeof window !== "undefined" && sectionRef.current) {
      const section = sectionRef.current

      const getRandomDuration = () => Math.random() * 5 + 10 // Range: 10-15s

      const colors = [
        "linear-gradient(140deg, rgba(34, 139, 34, 0.5), rgba(139, 69, 19, 0.4), rgba(75, 0, 130, 0.7), rgba(147, 112, 219, 0.6), rgba(0, 191, 255, 0.5))", // Green, brown, indigo, purple, cyan
        "linear-gradient(140deg, rgba(107, 142, 35, 0.5), rgba(255, 215, 0, 0.4), rgba(0, 128, 255, 0.6), rgba(75, 0, 130, 0.7), rgba(56, 142, 60, 0.5))", // Olive, gold, blue, indigo, forest green
        "linear-gradient(140deg, rgba(56, 142, 60, 0.5), rgba(210, 105, 30, 0.4), rgba(147, 112, 219, 0.6), rgba(0, 191, 255, 0.5), rgba(139, 69, 19, 0.4))", // Forest green, chocolate, purple, cyan, brown
      ]

      const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]

      const animateBackground = () => {
        gsap.to(section, {
          background: getRandomColor(),
          backgroundSize: "500% 500%", // Larger for smoother flow
          ease: "linear",
          duration: getRandomDuration(),
          onUpdate: () => {
            const progress = gsap.getProperty(section, "backgroundPosition") || "0% 0%"
            section.style.backgroundPosition = `${progress}`
          },
          keyframes: {
            "0%": { backgroundPosition: "0% 0%" },
            "50%": { backgroundPosition: "100% 100%" },
            "100%": { backgroundPosition: "0% 0%" },
          },
          onComplete: animateBackground,
        })
      }

      animateBackground()
    }
  }, [])

  const circleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const smokeVariants = {
    animate: {
      x: [-30, 30, -30],
      y: [-40, 40, -40],
      opacity: [0, 0.25, 0],
      scale: [1, 1.3, 1],
      transition: {
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const tendrilVariants = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const rippleVariants = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.33, 0.1, 0.25, 1],
      },
    },
  }

  const paragraphVariants = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.7,
        ease: [0.33, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="relative pt-20 sm:pt-32 pb-16 sm:pb-20 bg-background overflow-hidden"
      style={{ background: "linear-gradient(140deg, rgba(34, 139, 34, 0.5), rgba(75, 0, 130, 0.7))" }}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Nature-inspired gradient circles */}
        <motion.div
          className="absolute top-10 left-5 sm:top-1/4 sm:left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-green-600/20 to-purple-500/20 rounded-full blur-3xl"
          variants={circleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-10 right-5 sm:bottom-1/3 sm:right-1/3 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-full blur-3xl"
          variants={circleVariants}
          animate={{
            ...circleVariants.animate,
            transition: { ...circleVariants.animate.transition, duration: 7, delay: 0.5 },
          }}
        />
        {/* Smoke effects */}
        <motion.div
          className="absolute inset-x-0 top-1/5 h-72 sm:h-96 bg-gradient-to-r from-gray-500/15 via-green-600/20 to-gray-500/15 blur-3xl opacity-25"
          variants={smokeVariants}
          animate="animate"
        />
        {/* Tendril pattern (smoke-like wisps) */}
        <motion.div
          className="absolute inset-x-0 top-1/3 h-48 sm:h-72 bg-gradient-to-r from-brown-600/10 via-cyan-500/15 to-brown-600/10 transform -skew-y-2 opacity-30"
          variants={tendrilVariants}
          animate="animate"
        />
        {/* Ripple pattern */}
        <motion.div
          className="absolute inset-x-0 bottom-1/4 h-56 sm:h-80 bg-gradient-to-r from-green-700/15 via-blue-500/20 to-green-700/15 rounded-t-full opacity-25"
          variants={rippleVariants}
          animate="animate"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Get in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Touch</span>
          </h1>
          <motion.p
            variants={paragraphVariants}
            initial="initial"
            animate="animate"
            className="text-lg sm:text-xl text-foreground/70"
          >
            Have a project in mind or want to learn more about our services? We’d love to hear from you. Let’s create
            something amazing together amidst swirling smoke and vibrant hues.
          </motion.p>
        </motion.div>
      </div>

      {/* Subtle overlay with natural tones */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-green-900/15 to-indigo-900/25 mix-blend-overlay opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </section>
  )
}
