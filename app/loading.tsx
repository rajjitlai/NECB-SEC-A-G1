import BackgroundEffects from "@/components/BackgroundEffects";

export default function Loading() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center space-y-8 animate-pulse">
        <div className="w-48 h-10 mx-auto rounded-full bg-white/5 shimmer" />
        <div className="w-3/4 h-20 mx-auto rounded-xl bg-white/5 shimmer" />
        <div className="w-1/2 h-8 mx-auto rounded-lg bg-white/5 shimmer" />
      </div>

      <div className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-[300px] rounded-2xl bg-white/5 border border-white/10 shimmer" />
        ))}
      </div>
    </main>
  );
}
