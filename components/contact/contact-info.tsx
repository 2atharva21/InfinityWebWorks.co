'use client'

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react"

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Gmail",
      value: "atharavzare@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=atharavzare@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+918459297080",
      link: "tel:8459297080",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      value: "Pune, Maharashtra, India",
      link: "https://maps.google.com",
    },
  ]

  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com", icon: <Twitter className="w-6 h-6" /> },
    { name: "Facebook", url: "https://facebook.com", icon: <Facebook className="w-6 h-6" /> },
    { name: "Instagram", url: "https://instagram.com", icon: <Instagram className="w-6 h-6" /> },
    { name: "LinkedIn", url: "https://linkedin.com", icon: <Linkedin className="w-6 h-6" /> },
    { name: "GitHub", url: "https://github.com", icon: <Github className="w-6 h-6" /> },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold mb-4">
          Contact{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Information
          </span>
        </h2>
        <p className="text-foreground/80 mb-6">
          We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our
          team is ready to answer all your questions.
        </p>
      </div>

      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start gap-4 p-4 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300"
            aria-label={`Contact via ${item.title}`}
          >
            <div className="p-3 bg-primary/10 rounded-lg text-primary">{item.icon}</div>
            <div>
              <h3 className="font-medium text-foreground">{item.title}</h3>
              <p className="text-foreground/70">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">Connect With Us</h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-3 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center gap-2"
              aria-label={`Follow us on ${social.name}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="pt-6">
        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.86296739999999!3d18.52461645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin&zoom=12"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Google Map showing Pune, Maharashtra"
          ></iframe>
        </div>
      </div>
    </motion.div>
  )
}
