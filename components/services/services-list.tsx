'use client';

import { useState, useEffect, useRef, memo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Lazy load icons
const Code = lazy(() => import('lucide-react').then(module => ({ default: module.Code })));
const Zap = lazy(() => import('lucide-react').then(module => ({ default: module.Zap })));
const Rocket = lazy(() => import('lucide-react').then(module => ({ default: module.Rocket })));
const Search = lazy(() => import('lucide-react').then(module => ({ default: module.Search })));
const Palette = lazy(() => import('lucide-react').then(module => ({ default: module.Palette })));
const ArrowRight = lazy(() => import('lucide-react').then(module => ({ default: module.ArrowRight })));

import AnimatedIcon from "@/components/animated-icon";

// Register GSAP plugin on client-side only
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Service interface for type safety
interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
}

const ServicesList = memo(() => {
  const [activeService, setActiveService] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);

  const services: Service[] = [
    {
      icon: <Suspense fallback={<div>Loading...</div>}><Code className="h-10 w-10" /></Suspense>,
      title: "Web Development",
      description: "Custom websites built with cutting-edge technologies for optimal performance and user experience.",
      features: [
        "Responsive design for all devices",
        "Fast loading times and optimized performance",
        "Custom functionality and integrations",
        "Content management systems",
        "E-commerce solutions",
        "Progressive Web Apps (PWAs)",
      ],
    },
    // ... other services remain the same, just update their icon imports similarly
    {
      icon: <Suspense fallback={<div>Loading...</div>}><Zap className="h-10 w-10" /></Suspense>,
      title: "AI-Powered Websites",
      description: "Intelligent solutions that leverage AI to create dynamic, personalized user experiences.",
      features: [
        "Personalized user experiences",
        "AI-driven content recommendations",
        "Chatbots and virtual assistants",
        "Predictive analytics",
        "Natural language processing",
        "Machine learning integrations",
      ],
    },
    {
      icon: <Suspense fallback={<div>Loading...</div>}><Rocket className="h-10 w-10" /></Suspense>,
      title: "Automation",
      description: "Streamline your business processes with custom automation solutions that save time and resources.",
      features: [
        "Workflow automation",
        "Business process optimization",
        "Custom API integrations",
        "Data synchronization",
        "Automated reporting",
        "Task scheduling and management",
      ],
    },
    {
      icon: <Suspense fallback={<div>Loading...</div>}><Search className="h-10 w-10" /></Suspense>,
      title: "SEO Optimization",
      description: "Boost your online visibility with our comprehensive SEO strategies tailored to your business.",
      features: [
        "Keyword research and optimization",
        "On-page and off-page SEO",
        "Technical SEO audits",
        "Content strategy",
        "Local SEO",
        "Performance monitoring and reporting",
      ],
    },
    {
      icon: <Suspense fallback={<div>Loading...</div>}><Palette className="h-10 w-10" /></Suspense>,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to engage users and enhance brand perception.",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Interaction design",
        "Usability testing",
        "Design systems",
      ],
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    const section = servicesSectionRef.current;

    try {
      if (container) {
        gsap.fromTo(
          container.children,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              once: true,
            },
          }
        );
      }

      if (section) {
        gsap.to(section, {
          background: 'linear-gradient(45deg, #000000, #FF7F50, #000000, #9B4D96, #000000, #FF007F, #000000, #FFFFFF, #000000, #3A86FF, #000000, #003366, #000000, #FF5733, #000000, #C70039, #000000, #900C3F, #000000, #581845)',
          backgroundSize: "400% 400%",
          backgroundPosition: "0% 0%",
          duration: 5,
          repeat: -1,
          ease: "linear",
          yoyo: true,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      }
    } catch (error) {
      console.error('Animation setup error:', error);
    }

    setIsLoading(false);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (container) gsap.killTweensOf(container.children);
      if (section) gsap.killTweensOf(section);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  if (isLoading) {
    return (
      <div className="animate-pulse text-center py-20 text-foreground/70">
        Loading services...
      </div>
    );
  }

  return (
    <section 
      className="py-10 sm:py-20 relative" 
      ref={servicesSectionRef}
      data-testid="services-section"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12">
          <div className="xl:col-span-1">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
              ref={containerRef}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`cursor-pointer p-6 rounded-xl transition-all duration-300 service-card ${
                    activeService === index
                      ? "bg-gradient-to-r from-purple-500 to-cyan-400 border border-primary/50"
                      : "bg-background/50 border border-border/50 hover:border-primary/30"
                  }`}
                  onClick={() => setActiveService(index)}
                  onKeyPress={(e) => e.key === 'Enter' && setActiveService(index)}
                  role="button"
                  aria-label={`View details for ${service.title}`}
                  tabIndex={0}
                  data-testid={`service-card-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <AnimatedIcon
                      icon={service.icon}
                      color={activeService === index ? "text-primary" : "text-primary/70"}
                    />
                    <div>
                      <h3
                        className={`text-xl font-bold mb-1 ${
                          activeService === index ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-foreground/70 text-sm line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="xl:col-span-2" aria-live="polite">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-8"
              data-testid="service-details"
            >
              <div className="flex items-center gap-4 mb-6">
                <AnimatedIcon icon={services[activeService].icon} />
                <h2 className="text-3xl font-bold">{services[activeService].title}</h2>
              </div>

              <p className="text-foreground/80 text-lg mb-8">{services[activeService].description}</p>

              <h3 className="text-xl font-semibold mb-4">Key Features</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services[activeService].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <Suspense fallback={<div>Loading...</div>}>
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                    </Suspense>
                    <span className="text-foreground/80">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="text-lg font-semibold mb-2">
                  Why Choose Our {services[activeService].title} Service?
                </h4>
                <p className="text-foreground/80">
                  Our team of experts brings years of experience and cutting-edge knowledge to every project. We focus
                  on delivering solutions that not only meet your current needs but are also scalable and future-proof.
                  With a commitment to quality and innovation, we ensure that your digital presence stands out in
                  today's competitive landscape.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

ServicesList.displayName = 'ServicesList';

export default ServicesList;