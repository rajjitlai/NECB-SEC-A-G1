'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface Contributor {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
}

export default function TeamCard({ user, delay }: { user: Contributor, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-card-border to-transparent hover:from-neon-cyan/50 hover:to-neon-pink/50 transition-all duration-500"
    >
      <div className="relative bg-card-bg backdrop-blur-xl p-6 rounded-2xl h-full flex flex-col items-center gap-4 text-center">
        {/* Avatar with Glow */}
        <div className="relative w-24 h-24 rounded-full p-[2px] bg-gradient-to-r from-neon-cyan to-neon-pink group-hover:scale-110 transition-transform duration-500">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
            <Image 
              src={user.avatar_url} 
              alt={user.login} 
              fill 
              className="object-cover"
            />
          </div>
          {/* Animated Glow behind avatar */}
          <div className="absolute inset-0 rounded-full blur-lg bg-neon-cyan/30 group-hover:bg-neon-cyan/50 -z-10 transition-all" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold glow-text tracking-wider">{user.name || user.login}</h3>
          <p className="text-sm text-gray-400 line-clamp-2 min-h-[40px] italic">
            {user.bio || "No bio available"}
          </p>
        </div>

        <div className="mt-auto pt-4 flex gap-4">
          <a 
            href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-neon-cyan/20 transition-colors border border-white/10 group/btn"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5 group-hover/btn:text-neon-cyan transition-colors" />
          </a>
          <a 
            href={user.login === "rajjitlai" ? "http://rajjitlaishram.netlify.app/" : user.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan text-sm font-medium border border-neon-cyan/30 transition-all"
          >
            {user.login === "rajjitlai" ? "Website" : "Profile"} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
