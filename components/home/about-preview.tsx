'use client'

import { useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import Image from 'next/image'

export default function AboutPreview() {
  const features = [
    "Expert team of developers and designers",
    "Cutting-edge technologies and frameworks",
    "Agile development methodology",
    "Focus on performance and scalability",
  ]

  useEffect(() => {
    // GSAP animation for the image container
    gsap.fromTo(
      ".about-preview-image",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" }
    )

    // GSAP animation for the text section
    gsap.fromTo(
      ".about-preview-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.2 }
    )

    // GSAP animation for feature list items
    gsap.fromTo(
      ".about-preview-feature",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, stagger: 0.2, duration: 1, ease: "power4.out", delay: 0.3 }
    )

    // GSAP animation for button hover effect
    gsap.fromTo(
      ".about-preview-button",
      { scale: 1, backgroundColor: "rgba(124, 58, 237, 0.1)" },
      {
        scale: 1.05,
        backgroundColor: "rgba(124, 58, 237, 0.2)",
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        paused: false,
        scrollTrigger: {
          trigger: ".about-preview-button",
          start: "top bottom",
        }
      }
    )
  }, [])

  return (
    <section className="py-20 relative">
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
            className="relative about-preview-image"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-white/10 transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 transform -rotate-3" />
              <div className="absolute inset-4 bg-background/40 backdrop-blur-md rounded-xl overflow-hidden">
                <Image
                  src="/infinity-work-2.jpg"
                  alt="Infinity Work"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 about-preview-text"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2 about-preview-feature"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="mt-4 about-preview-button" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
