"use client"; // Required for client-side rendering in Next.js

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation"; // To detect route changes

const variants = {
  hidden: {
    opacity: 0,       // Start with hidden content
    y: 30,            // Start slightly below
  },
  enter: {
    opacity: 1,       // Fade in
    y: 0,             // Slide up to original position
    transition: {
      duration: 0.5,  // Simpler duration
      ease: "easeInOut", // Simple easing function for smoothness
    },
  },
  exit: {
    opacity: 0,       // Fade out
    y: -30,           // Slight slide-up on exit
    transition: {
      duration: 0.3,  // Faster exit
      ease: "easeInOut", // Consistent ease-out transition
    },
  },
};

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname(); // Get the current route for key change

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Ensures exit animation triggers on route change
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        className="min-h-screen" // Ensures full height for smooth transitions
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
