"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";

interface AnimatedIconProps {
  icon: React.ReactNode;
  color?: string;
  size?: number | string;
  hoverScale?: number;
  className?: string;
  delay?: number;
  ariaLabel?: string; // Added optional label for accessibility
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon,
  color = "text-primary", // Default color
  size = 48, // Default size
  hoverScale = 1.2, // Default hover scale
  className = "",
  delay = 0, // Default delay is 0
  ariaLabel, // Accessibility label for the icon
}) => {
  // Memoized styles for performance: this will only recompute when size changes
  const computedSize = useMemo(() => ({ width: size, height: size }), [size]);

  return (
    <motion.div
      className={`flex items-center justify-center ${color} ${className}`}
      style={{ ...computedSize, willChange: "transform" }}
      initial={{ scale: 0, rotate: -180, opacity: 0 }} // Initial animation: scale, rotate, and opacity
      animate={{ scale: 1, rotate: 0, opacity: 1 }} // Final animation: scale 1, rotate 0, and full opacity
      whileHover={{
        scale: hoverScale,
        rotate: [0, 10, -8, 0], // Slight bounce effect for a smooth, natural feel
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      whileTap={{ scale: 0.9 }} // Tap effect: scales down when clicked
      transition={{
        type: "spring", // Spring-based animation
        stiffness: 260,
        damping: 20,
        delay, // Animation delay
      }}
      aria-hidden={!ariaLabel} // Ensures accessibility by marking as decorative when there's no label
      role={ariaLabel ? "img" : undefined} // Ensure it's recognized as an image if it has a label
      aria-label={ariaLabel} // If the icon has a function, we provide a label for screen readers
    >
      {icon}
    </motion.div>
  );
};

export default AnimatedIcon;
