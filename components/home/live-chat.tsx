"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Cat } from "lucide-react"

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Cat className="h-6 w-6" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 mt-4 shadow-lg"
        >
          <h3 className="text-lg font-bold mb-4">Live Chat</h3>
          <p className="text-foreground/70 mb-4">How can we help you today?</p>
          <textarea
            className="w-full p-2 border border-border/50 rounded-md mb-4"
            rows={4}
            placeholder="Type your message here..."
          ></textarea>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">Send</button>
        </motion.div>
      )}
    </div>
  )
}
