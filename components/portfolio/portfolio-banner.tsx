"use client";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function PortfolioBanner() {
  const sectionRef = useRef(null);

  // GSAP gradient animation - Optimized for mobile
  useEffect(() => {
    if (typeof window !== "undefined" && sectionRef.current) {
      const section = sectionRef.current;
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      const getRandomDuration = () => (isMobile ? 8 : Math.random() * 5 + 10); // Fixed 8s on mobile

      const colors = [
        "linear-gradient(120deg, rgba(34, 139, 34, 0.4), rgba(139, 69, 19, 0.3), rgba(75, 0, 130, 0.5))",
        "linear-gradient(120deg, rgba(107, 142, 35, 0.4), rgba(255, 215, 0, 0.3), rgba(0, 128, 255, 0.4))",
        "linear-gradient(120deg, rgba(56, 142, 60, 0.4), rgba(210, 105, 30, 0.3), rgba(147, 112, 219, 0.4))",
      ];

      const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

      const animateBackground = () => {
        gsap.to(section, {
          background: getRandomColor(),
          backgroundSize: "300% 300%", // Reduced for efficiency
          ease: "linear",
          duration: getRandomDuration(),
          keyframes: {
            "0%": { backgroundPosition: "0% 0%" },
            "100%": { backgroundPosition: "100% 100%" },
          },
          onComplete: animateBackground,
        });
      };

      animateBackground();

      // Simplified circle animations for mobile
      if (!isMobile) {
        gsap.to(".bg-purple-circle", {
          background: "radial-gradient(circle, rgba(56, 142, 60, 0.3), rgba(147, 112, 219, 0.4))",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "easeInOut",
        });

        gsap.to(".bg-cyan-circle", {
          background: "radial-gradient(circle, rgba(0, 191, 255, 0.4), rgba(107, 142, 35, 0.3))",
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "easeInOut",
          delay: 0.5,
        });
      }
    }
  }, []);

  const circleVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const smokeVariants = {
    animate: {
      x: [-15, 15, -15],
      y: [-20, 20, -20],
      opacity: [0, 0.2, 0],
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const tendrilVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.15, 0.3, 0.15],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const rippleVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.2, 0.35, 0.2],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const paragraphVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1, duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-16 md:pt-28 pb-16 md:pb-20 bg-background overflow-hidden will-change-transform"
      style={{
        background:
          "linear-gradient(120deg, rgba(34, 139, 34, 0.4), rgba(75, 0, 130, 0.5))",
      }}
    >
      {/* Background Layers - Reduced for Mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-5 md:top-1/4 md:left-1/4 w-32 md:w-48 h-32 md:h-48 bg-purple-circle rounded-full blur-xl md:blur-2xl md:block hidden"
          variants={circleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-10 right-5 md:bottom-1/3 md:right-1/3 w-28 md:w-40 h-28 md:h-40 bg-cyan-circle rounded-full blur-xl md:blur-2xl md:block hidden"
          variants={circleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-20 md:w-24 h-20 md:h-24 bg-gradient-to-br from-green-500/10 to-purple-400/10 rounded-full blur-xl"
          variants={circleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute inset-x-0 top-1/5 h-48 md:h-64 bg-gradient-to-r from-gray-500/10 via-green-600/15 to-gray-500/10 blur-xl opacity-20 md:block hidden"
          variants={smokeVariants}
          animate="animate"
        />
        <motion.div
          className="absolute inset-x-0 top-1/3 h-40 md:h-56 bg-gradient-to-r from-brown-600/10 via-cyan-500/10 to-brown-600/10 -skew-y-2 opacity-25 md:block hidden"
          variants={tendrilVariants}
          animate="animate"
        />
        <motion.div
          className="absolute inset-x-0 bottom-1/4 h-36 md:h-48 bg-gradient-to-r from-green-700/10 via-blue-500/15 to-green-700/10 rounded-t-full opacity-20"
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
          className="text-center max-w-sm md:max-w-2xl mx-auto"
        >
          {/* Desktop Title */}
          <h1
            className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-white"
            aria-label="Our Portfolio"
          >
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
              Portfolio
            </span>
          </h1>

          {/* Mobile Title */}
          <h1
            className="text-xl md:hidden font-semibold mb-3 text-white"
            aria-label="Our Portfolio"
          >
            Explore Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
              Work
            </span>
          </h1>

          <motion.p
            variants={paragraphVariants}
            initial="initial"
            animate="animate"
            className="text-sm md:text-base text-foreground/70 portfolio-description"
          >
            Discover how we’ve transformed businesses with nature-inspired solutions.
          </motion.p>

          {/* Mobile Paragraph */}
          <motion.p
            variants={paragraphVariants}
            initial="initial"
            animate="animate"
            className="text-xs md:hidden text-foreground/70 portfolio-description mt-2"
          >
            See how we've worked with brands to bring their vision to life with a touch of nature.
          </motion.p>
        </motion.div>
      </div>

      {/* Subtle Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-indigo-900/15 mix-blend-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </section>
  );
}
