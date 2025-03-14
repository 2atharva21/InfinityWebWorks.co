"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Briefcase, FolderOpen, Users, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="h-6 w-6" /> },
    { name: "Services", href: "/services", icon: <Briefcase className="h-6 w-6" /> },
    { name: "Portfolio", href: "/portfolio", icon: <FolderOpen className="h-6 w-6" /> },
    { name: "About", href: "/about", icon: <Users className="h-6 w-6" /> },
    { name: "Contact", href: "/contact", icon: <Mail className="h-6 w-6" /> },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glassmorphism shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold text-gradient"
              >
                InfinityWebWorks<span className="text-primary">.co</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`transition-colors duration-300 text-sm lg:text-base hover-lift ${
                      pathname === link.href
                        ? "text-primary font-medium"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="h-0.5 bg-primary mt-0.5"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <ThemeToggle />
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-4 text-foreground focus:outline-none mobile-friendly-touch"
                aria-label="Toggle menu"
                aria-expanded={isOpen ? "true" : "false"}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 py-4 glassmorphism rounded-lg"
              >
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-4 py-2 hover:bg-primary/10 transition-colors duration-300 mobile-friendly-touch ${
                        pathname === link.href
                          ? "text-primary font-medium"
                          : "text-foreground/80 hover:text-primary"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden mobile-bottom-nav">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`mobile-bottom-nav-item ${pathname === link.href ? "active" : ""}`}
          >
            {link.icon}
            <span className="mt-1">{link.name}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
