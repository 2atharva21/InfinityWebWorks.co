"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { CheckCircle } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

// Register GSAP ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutContent() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Reduce parallax intensity on mobile
  const yImage1 = useTransform(scrollYProgress, [0, 1], [30, -30]) // Less movement on mobile
  const yImage2 = useTransform(scrollYProgress, [0, 1], [20, -20])

  const features = [
    "Expert team of developers and designers",
    "Cutting-edge technologies and frameworks",
    "Agile development methodology",
    "Focus on performance and scalability",
    "Dedicated support and maintenance",
    "Continuous innovation and improvement",
  ]

  // GSAP animations optimized for mobile
  useEffect(() => {
    if (sectionRef.current) {
      // Title fade-in
      gsap.fromTo(
        ".title-fade",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6, // Faster for mobile
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".title-fade",
            start: "top 90%", // Trigger earlier on mobile
            end: "bottom 75%",
            scrub: 1,
            // Adjust for responsiveness
            markers: false,
          },
        }
      )

      // Description fade-in
      gsap.fromTo(
        ".description-fade",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".description-fade",
            start: "top 90%",
            end: "bottom 75%",
            scrub: 1,
            markers: false,
          },
        }
      )

      // Image fade-in
      gsap.fromTo(
        ".image-container",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".image-container",
            start: "top 90%",
            end: "bottom 75%",
            scrub: 1,
            markers: false,
          },
        }
      )
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 md:py-20 relative bg-background">
      {/* Static background circles, smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-1/3 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-56 md:w-80 h-56 md:h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-6 title-fade">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                Mission
              </span>
            </h2>

            <p className="text-base md:text-lg text-foreground/80 description-fade">
              InfinityWebWorks.co is a forward-thinking web development agency dedicated to creating exceptional digital
              experiences. We combine technical expertise with creative innovation to deliver websites and applications
              that exceed expectations.
            </p>

            <p className="text-base md:text-lg text-foreground/80 description-fade">
              Our mission is to empower businesses with cutting-edge web solutions that drive growth and enhance user
              engagement. We believe in pushing the boundaries of what's possible in web development.
            </p>

            <div className="grid grid-cols-1 gap-2 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            style={{ y: yImage1 }}
            className="relative image-container mt-6 md:mt-0"
          >
            <div className="relative w-full aspect-square max-w-[300px] md:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-white/10 transform rotate-2" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 transform -rotate-2" />
              <div className="absolute inset-3 bg-background/40 backdrop-blur-md rounded-xl overflow-hidden">
                <div className="w-full h-full bg-[url('/infinity-work-3.jpg?height=600&width=600')] bg-cover bg-center" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision Section */}
        <div className="mt-12 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <motion.div
            style={{ y: yImage2 }}
            className="relative order-2 lg:order-1 image-container mt-6 md:mt-0"
          >
            <div className="relative w-full aspect-video max-w-[300px] md:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10" />
              <div className="absolute inset-3 bg-background/40 backdrop-blur-md rounded-xl overflow-hidden">
                <div className="w-full h-full bg-[url('/image.jpg?height=400&width=600')] bg-cover bg-center" />
              </div>
            </div>
          </motion.div>

          <div className="space-y-6 order-1 lg:order-2 title-fade">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Vision</span>
            </h2>

            <p className="text-base md:text-lg text-foreground/80 description-fade">
              We envision a digital landscape where businesses of all sizes can harness the power of technology to
              connect with their audience in meaningful ways. Our goal is to lead with innovative solutions.
            </p>

            <p className="text-base md:text-lg text-foreground/80 description-fade">
              By combining creativity with technical excellence, we aim to create digital experiences that meet current
              needs and adapt to future advancements, helping our clients stay ahead of the curve.
            </p>

            <div className="p-4 md:p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-lg md:text-xl font-bold mb-2">Our Core Values</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-1"></div>
                  <span className="text-sm md:text-base text-foreground/80">
                    Innovation: Exploring new technologies and methodologies
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-1"></div>
                  <span className="text-sm md:text-base text-foreground/80">
                    Excellence: Delivering high-quality solutions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-1"></div>
                  <span className="text-sm md:text-base text-foreground/80">
                    Collaboration: Working closely with clients
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-1"></div>
                  <span className="text-sm md:text-base text-foreground/80">Integrity: Building trust through honesty</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
