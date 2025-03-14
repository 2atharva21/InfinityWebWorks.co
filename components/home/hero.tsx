'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Added for lazy loading

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Hero() {
  const fullText = 'Building the Future of Web with AI & Innovation';
  const mobileText = 'Building the Web with AI'; // Shorter text for mobile
  const containerRef = useRef(null);

  // GSAP Typing Effect
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    gsap.fromTo(
      '.gsap-typing-text',
      { text: '' },
      {
        text: isMobile ? mobileText : fullText,
        duration: isMobile ? 1.5 : 3, // Faster on mobile
        ease: 'none',
      }
    );
  }, []);

  // GSAP Scroll Animations
  useEffect(() => {
    if (containerRef.current) {
      // Fade-in elements
      gsap.fromTo(
        (containerRef.current as HTMLElement).querySelectorAll('.gsap-hero-element'),
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%', // Adjusted for smoother mobile scroll
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Rotate background elements (180° on mobile)
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      gsap.to('.animate-rotate', {
        rotation: isMobile ? 180 : 360,
        repeat: isMobile ? 0 : -1, // No infinite loop on mobile
        duration: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      // Gradient transition (reduced intensity on mobile)
      gsap.to('.animate-glow', {
        background: 'linear-gradient(to right, #FF7F50, #9B4D96, #3A86FF)',
        repeat: -1,
        duration: 6,
        ease: 'linear',
        yoyo: true,
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-16 px-4 md:px-6" aria-labelledby="hero-heading">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-xl md:blur-3xl animate-glow animate-rotate gsap-hero-element md:block hidden"
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-48 h-48 md:w-80 md:h-80 bg-cyan-500/20 rounded-full blur-xl md:blur-3xl animate-glow animate-rotate gsap-hero-element md:block hidden"
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-blue-500/20 rounded-full blur-xl md:blur-3xl animate-glow animate-rotate gsap-hero-element"
        />
      </div>

      <div className="container mx-auto relative z-10 min-h-[80vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <motion.div className="space-y-4 md:space-y-8 gsap-hero-element">
            <h1
              id="hero-heading"
              className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-center md:text-left max-w-md"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 gsap-typing-text" />
            </h1>

            <motion.p className="text-sm md:text-lg text-foreground/80 max-w-sm md:max-w-xl text-center md:text-left">
              We craft cutting-edge digital experiences that transform businesses.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center md:justify-start">
              <Button size="lg" className="py-4 px-6 group" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="py-4 px-6" asChild>
                <Link href="/portfolio">Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-cyan-500/40 rounded-2xl backdrop-blur-lg animate-glow" />
            <motion.div className="absolute inset-4 bg-background/40 backdrop-blur-lg rounded-xl overflow-hidden">
              <Image
                src="/favicon.ico"
                alt="Hero Image"
                fill
                className="object-cover border-8 border-transparent rounded-xl neon-border"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}