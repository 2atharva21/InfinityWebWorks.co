"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    title: "Basic",
    price: "$99/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Standard",
    price: "$199/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    title: "Premium",
    price: "$299/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
]

export default function Pricing() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Pricing</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Choose the plan that best suits your needs. We offer flexible pricing options to fit your budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold mb-4">{plan.title}</h3>
              <p className="text-foreground/70 mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-primary text-white px-4 py-2 rounded-md mt-4 hover:bg-primary-dark">Get Started</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
