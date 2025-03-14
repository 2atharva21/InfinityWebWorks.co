"use client";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef, useCallback } from "react";

export default function ServicesBanner() {
  const sectionRef = useRef(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const colors = [
    "radial-gradient(circle, rgba(34, 139, 34, 0.3), rgba(139, 69, 19, 0.4), rgba(75, 0, 130, 0.5))",
    "radial-gradient(circle, rgba(107, 142, 35, 0.3), rgba(255, 215, 0, 0.4), rgba(0, 191, 255, 0.4))",
    "radial-gradient(circle, rgba(34, 139, 34, 0.3), rgba(210, 105, 30, 0.4), rgba(147, 112, 219, 0.4))",
  ];

  const animateBackground = useCallback(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const duration = isMobile ? 8 : Math.random() * 5 + 10;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    animationRef.current = gsap.to(section, {
      background: randomColor,
      backgroundSize: "300% 300%",
      duration,
      ease: "linear",
      keyframes: {
        "0%": { backgroundPosition: "0% 0%" },
        "100%": { backgroundPosition: "100% 100%" },
      },
      onComplete: () => {
        gsap.to(section, {
          backgroundPosition: "0% 0%",
          duration,
          ease: "linear",
          onComplete: animateBackground,
        });
      },
    });
  }, []);

  useEffect(() => {
    animateBackground();

    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [animateBackground]);

  // Animation variants remain the same as in your original code
  const circleVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const paragraphVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-12 md:pt-20 pb-12 md:pb-16 bg-background overflow-hidden will-change-transform"
      style={{
        background: colors[0], // Use first color as initial state
      }}
    >
      {/* Rest of your JSX remains the same */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-5 md:top-1/4 md:left-1/4 w-32 md:w-48 h-32 md:h-48 bg-gradient-to-br from-green-600/15 to-purple-500/15 rounded-full blur-xl md:blur-2xl md:block hidden"
          variants={circleVariants}
          animate="animate"
        />
        {/* You can repeat the same for other elements like the smoke and tendril if needed */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-center max-w-sm md:max-w-2xl mx-auto"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-primary">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
              Services
            </span>
          </h1>
          <motion.p
            variants={paragraphVariants}
            initial="initial"
            animate="animate"
            className="text-sm md:text-base text-foreground/70"
          >
            Comprehensive digital services blending nature’s harmony with innovation.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-indigo-900/15 mix-blend-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </section>
  );
}
