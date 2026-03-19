'use client'

import { motion } from 'framer-motion'

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Animated Glowing Nebulas */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-neon-cyan/20 blur-[120px] rounded-full"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 120, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-neon-pink/10 blur-[150px] rounded-full"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
    </div>
  )
}
