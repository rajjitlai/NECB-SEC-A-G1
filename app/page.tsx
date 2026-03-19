import BackgroundEffects from "@/components/BackgroundEffects";
import TeamCard from "@/components/TeamCard";
import Logo from "@/components/Logo";
import { Github, Users, Star, GitFork, Code2 } from "lucide-react";

const USERS = [
  "rajjitlai",
  "KelvinLaishram",
  "Nathankeishing",
  "AdiyaTakhell",
  "arishodam",
  "wraikhan",
  "Moniphom",
  "BidyanandaSharma"
];

async function getContributors() {
  const data = await Promise.all(
    USERS.map(async (username) => {
      const res = await fetch(`https://api.github.com/users/${username}`, {
        next: { revalidate: 3600 }
      });
      if (!res.ok) return null;
      return res.json();
    })
  );
  return data.filter(Boolean);
}

async function getRepoStats() {
  const res = await fetch("https://api.github.com/repos/rajjitlai/NECB-SEC-A-G1", {
    next: { revalidate: 3600 }
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function Home() {
  const [contributors, repoStats] = await Promise.all([
    getContributors(),
    getRepoStats()
  ]);

  return (
    <main className="min-h-screen relative overflow-hidden">
      <BackgroundEffects />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Animated SVG Logo */}
        <Logo className="w-24 h-24 mb-10" />

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-sm font-semibold mb-8 float-animation">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          <span>NECB-SEC-A GROUP 1</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-pink glow-text glitch-hover transition-all duration-300 cursor-default">ARCHITECTS</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed mb-8">
          The brilliant minds behind NECB-SEC-A-G1. A synergy of innovation, code, and design.
        </p>

        {/* Live Repo Stats */}
        {repoStats && (
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="font-bold text-white">{repoStats.stargazers_count}</span> Stars
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm">
              <GitFork className="w-4 h-4 text-neon-cyan" />
              <span className="font-bold text-white">{repoStats.forks_count}</span> Forks
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm">
              <Code2 className="w-4 h-4 text-neon-pink" />
              <span className="font-bold text-white">{repoStats.language}</span>
            </div>
          </div>
        )}
        
        <div className="flex flex-col items-center gap-2 text-sm text-gray-500 font-mono">
          <p>Developed under <span className="text-neon-cyan font-bold tracking-widest">NIELIT Imphal (2024)</span></p>
          <p>Guided by <a href="https://www.lamzing.com/" target="_blank" rel="noopener noreferrer" className="text-neon-pink hover:underline decoration-neon-pink/50 underline-offset-4 transition-all hover:text-white">Lamzing Technologies</a></p>
        </div>

        {/* Action Button */}
        <div className="mt-10 flex justify-center">
          <a 
            href="https://github.com/rajjitlai/NECB-SEC-A-G1" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 rounded-xl font-bold transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-blue opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-2 text-black">
              <Github className="w-5 h-5" />
              View Source Repository
            </div>
          </a>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {contributors.map((user, index) => (
            <TeamCard 
              key={user.login} 
              user={user} 
              delay={index * 0.1} 
            />
          ))}
          
          {/* "And more" Placeholder Card */}
          <div className="relative group p-[1px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center min-h-[300px] border-dashed">
            <div className="text-center space-y-2 opacity-40 group-hover:opacity-100 transition-opacity">
              <Users className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-bold text-gray-300 italic">And more...</h3>
              <p className="text-xs text-gray-500 px-6">Non-contributing members & support staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 text-center border-t border-white/5 bg-black/40 backdrop-blur-md">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} NECB-SEC-A Group 1. Crafted with Next.js & Framer Motion.
        </p>
      </footer>
    </main>
  );
}
