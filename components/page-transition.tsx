"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation"; // For route change detection

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname(); // Unique key for route changes

  const variants = {
    initial: {
      opacity: 0,
      y: 25,           // Slightly softer slide
      scale: 0.96,     // Subtler zoom-out for smoother start
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,        // Smooth zoom to normal
      transition: {
        duration: 0.5, // Slightly shorter duration
        ease: "easeInOut", // Simple ease for smoothness
      },
    },
    exit: {
      opacity: 0,
      y: -15,          // Softer upward exit
      scale: 0.94,     // Gentler zoom-out
      transition: {
        duration: 0.3, // Quicker exit for faster transition
        ease: "easeInOut", // Consistent ease-out transition
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Trigger exit animation on route change
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen" // Ensure full height for smooth transitions
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
