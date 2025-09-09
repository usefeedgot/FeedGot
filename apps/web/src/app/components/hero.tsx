import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-4 relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat opacity-20" />
      <div className="container flex flex-col items-center justify-center gap-6 py-16 relative z-10">
        <h1
          className={cn(
            "inline-flex tracking-tight flex-col gap-1 transition text-center",
            "font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-none lg:text-[4rem]",
            "bg-gradient-to-r from-20% bg-clip-text text-transparent",
            "from-white to-gray-50"
          )}
        >
          <span>Coming Soon</span>
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl text-center max-w-2xl">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </main>
  )
}