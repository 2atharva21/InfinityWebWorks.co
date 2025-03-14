"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

// Register ScrollTrigger plugin with GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TeamSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      // Fade-in animation for content with responsiveness
      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6, // Faster for mobile
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".fade-in",
            start: "top 90%", // Start triggering earlier for mobile
            end: "bottom 75%",
            scrub: 1,
            // Adjust markers for debugging (optional)
            // markers: true,
            onEnter: () => console.log("Entered the section"),
          },
        }
      )
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 md:py-20 relative bg-background">
      {/* Static background circles, hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-56 md:w-80 h-56 md:h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Team Title and Description */}
        <div className="text-center mb-8 md:mb-16 fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Meet Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Team</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Our talented team of experts is passionate about creating exceptional digital experiences that drive
            results. We’re a dedicated group of professionals committed to delivering the best for our clients.
          </p>
        </div>
        
        {/* Team Member List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example of team member */}
          <div className="fade-in bg-white p-6 rounded-xl shadow-md">
            <img src="/team-member1.jpg" alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-center">John Doe</h3>
            <p className="text-center text-foreground/70">Lead Developer</p>
          </div>
          <div className="fade-in bg-white p-6 rounded-xl shadow-md">
            <img src="/team-member2.jpg" alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-center">Jane Smith</h3>
            <p className="text-center text-foreground/70">UI/UX Designer</p>
          </div>
          <div className="fade-in bg-white p-6 rounded-xl shadow-md">
            <img src="/team-member3.jpg" alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-center">Alex Johnson</h3>
            <p className="text-center text-foreground/70">Project Manager</p>
          </div>
        </div>
      </div>
    </section>
  )
}
