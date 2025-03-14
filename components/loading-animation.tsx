"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Image from 'next/image'
import logo from '../public/logo.png'

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef(null)
  const innerRef = useRef(null)
  const logoWrapperRef = useRef(null)

  useEffect(() => {
    // Register GSAP 3D transform properties
    gsap.registerEffect({
      name: "3dTransform",
      extendTimeline: true,
    })

    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false),
    })

    // Container: Fade out at the end
    tl.fromTo(containerRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 1.2, ease: "power3.inOut", delay: 2.5 }, // Adjusted for 3D timing
      0
    )

    // Main element: 3D zoom-in, flip, and zoom-out
    tl.fromTo(innerRef.current,
      {
        scale: 0.4, // Start smaller for dramatic zoom-in
        rotationX: -90, // Start flipped back in 3D space
        rotationY: 0,
        z: -100, // Start far in depth
        rotation: 0, // rotationZ
        borderRadius: "25%",
        background: "linear-gradient(135deg, #7F00FF, #00BFFF)",
      },
      {
        scale: 1, // Zoom to full size
        rotationX: 0, // Flip forward to flat
        rotationY: 180, // Half spin on Y-axis
        z: 50, // Move closer in depth
        rotation: 360, // Full Z rotation
        borderRadius: "30%",
        background: "linear-gradient(135deg, #FF6A00, #FFD700)",
        duration: 1.2,
        ease: "expo.out", // Smooth, natural 3D entrance
      },
      0
    ).to(innerRef.current,
      {
        scale: 1.15, // Slight overshoot
        rotationX: 20, // Tilt forward slightly
        rotationY: 360, // Full Y spin
        z: 80, // Peak depth
        rotation: 720, // Two Z rotations
        borderRadius: "35%",
        background: "linear-gradient(135deg, #00FF7F, #00CED1)",
        duration: 1.3,
        ease: "power3.inOut", // Smooth mid-phase
      },
      1.2
    ).to(innerRef.current,
      {
        scale: 0.3, // Zoom out
        rotationX: -45, // Flip back as it exits
        rotationY: 540, // Extra Y spin
        z: -150, // Move far back
        rotation: 900, // Final Z flair
        duration: 1.2,
        ease: "expo.in", // Natural 3D exit
      },
      2.5
    )

    // Inner logo: Counter-rotation in 3D with depth
    tl.fromTo(logoWrapperRef.current,
      {
        scale: 0.7, // Start smaller
        rotationX: 90, // Start flipped up
        rotationY: 0,
        z: -50, // Slightly behind
        rotation: 0,
      },
      {
        scale: 1, // Match outer zoom
        rotationX: 0, // Flatten out
        rotationY: -180, // Counter Y spin
        z: 20, // Move forward
        rotation: -360, // Counter Z rotation
        duration: 1.2,
        ease: "expo.out",
      },
      0
    ).to(logoWrapperRef.current,
      {
        scale: 1.05, // Slight overshoot
        rotationX: -10, // Subtle tilt
        rotationY: -360, // Full counter Y spin
        z: 30,
        rotation: -720,
        duration: 1.3,
        ease: "power3.inOut",
      },
      1.2
    ).to(logoWrapperRef.current,
      {
        scale: 0.5, // Zoom out
        rotationX: 60, // Flip up as it exits
        rotationY: -540,
        z: -80,
        rotation: -900,
        duration: 1.2,
        ease: "expo.in",
      },
      2.5
    )

    // Fallback timeout
    const timeout = setTimeout(() => {
      if (isLoading) setIsLoading(false)
    }, 5000)

    return () => {
      tl.kill()
      clearTimeout(timeout)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      style={{ perspective: "1000px" }} // Adds 3D perspective to container
    >
      <div
        ref={innerRef}
        className="w-20 h-20 flex items-center justify-center rounded-full"
        style={{
          background: "linear-gradient(135deg, #7F00FF, #00BFFF)",
          transformStyle: "preserve-3d", // Enable 3D transforms
        }}
      >
        <div
          ref={logoWrapperRef}
          className="w-16 h-16"
          style={{ transformStyle: "preserve-3d" }} // Enable 3D for logo
        >
          <Image
            src={logo}
            alt="Website Logo"
            className="w-full h-full object-contain"
            priority
            width={64}
            height={64}
          />
        </div>
      </div>
    </div>
  )
}