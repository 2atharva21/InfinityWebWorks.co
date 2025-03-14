'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedServices() {
  const servicesRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Code className="h-6 w-6 md:h-8 md:w-8" />,
      title: 'Web Development',
      description: 'Custom websites built with cutting-edge tech for top performance.',
    },
    {
      icon: <Zap className="h-6 w-6 md:h-8 md:w-8" />,
      title: 'AI-Powered Websites',
      description: 'Smart solutions with AI for dynamic, personalized experiences.',
    },
    {
      icon: <Palette className="h-6 w-6 md:h-8 md:w-8" />,
      title: 'UI/UX Design',
      description: 'Stunning, intuitive designs to boost engagement.',
    },
  ];

  useEffect(() => {
    if (servicesRef.current) {
      const items = servicesRef.current.querySelectorAll('.service-item');
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15, // Slightly faster stagger
          duration: 0.6, // Shorter duration for snappiness
          ease: 'power2.out', // Lighter easing for mobile
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 90%', // Later trigger for smoother entry
            toggleActions: 'play none none reset',
          },
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up all triggers
    };
  }, []);

  return (
    <section className="py-10 md:py-16 relative" aria-labelledby="services-heading">
      {/* Background Elements - Minimal and GPU-friendly */}
      <div className="absolute inset-0 overflow-hidden z-0 will-change-transform">
        <div className="absolute top-1/3 left-1/3 w-48 h-48 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-xl md:blur-2xl md:block hidden" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-56 md:h-56 bg-blue-500/5 rounded-full blur-xl md:blur-2xl md:block hidden" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }} // Trigger earlier for smooth entry
          transition={{ duration: 0.4, ease: 'easeOut' }} // Faster, lighter transition
          className="text-center mb-8 md:mb-12"
        >
          <h2 id="services-heading" className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 max-w-sm mx-auto">
            Our{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Services</span>
          </h2>
          <p className="text-foreground/70 max-w-sm md:max-w-lg mx-auto text-sm md:text-base">
            Digital solutions to elevate your business.
          </p>
        </motion.div>

        <div
          ref={servicesRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 will-change-transform"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item group relative bg-background/70 border border-border/30 rounded-lg p-4 md:p-6 hover:border-primary/40 transition-all duration-200 will-change-transform"
              whileTap={{ scale: 0.98 }} // Subtle tap feedback for mobile
              aria-label={`Service: ${service.title}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative z-10">
                <div className="mb-3 text-primary transition-colors duration-200">
                  {service.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-1 max-w-[90%]">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-xs md:text-sm max-w-[90%]">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="py-3 px-5 md:py-4 md:px-6 active:scale-95 transition-transform duration-100"
            asChild
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}