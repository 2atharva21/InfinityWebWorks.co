"use client"; // Add this if needed for client-side features

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone } from "lucide-react";

// Define navigation data as constants for better maintainability
const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services", label: "Web Development" },
  { href: "/services", label: "AI-Powered Websites" },
  { href: "/services", label: "UI/UX Design" },
  { href: "/services", label: "SEO Optimization" },
  { href: "/services", label: "Automation" },
];

const socialLinks = [
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                InfinityWebWorks<span className="text-primary">.co</span>
              </span>
            </Link>
            <p className="text-sm text-foreground/70 max-w-xs">
              Building the future of the web with AI & innovation. We create cutting-edge digital experiences that
              transform businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>123 Tech Plaza</li>
              <li>Innovation City, CA 94103</li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:contact@infinitywebworks.co"
                  className="hover:text-primary transition-colors"
                >
                  contact@infinitywebworks.co
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/70">
            © {currentYear} InfinityWebWorks.co. All rights reserved.
          </p>
          <nav className="flex space-x-6">
            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
