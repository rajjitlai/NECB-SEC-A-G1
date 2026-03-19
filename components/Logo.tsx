'use client'

import { motion } from 'framer-motion'

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ rotate: 10, scale: 1.1 }}
      className={`${className} relative group`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]"
      >
        {/* Hexagon Frame */}
        <motion.path
          d="M50 5L90 25V75L50 95L10 75V25L50 5Z"
          stroke="url(#logo-gradient)"
          strokeWidth="4"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Stylized "G1" */}
        <motion.path
          d="M35 40H65V60H50V50"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
        <motion.path
          d="M50 35V65"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />

        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f3ff" />
            <stop offset="100%" stopColor="#ff00ff" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full -z-10 group-hover:bg-neon-pink/20 transition-colors duration-500" />
    </motion.div>
  )
}
