import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 dark:from-green-950/20 dark:via-blue-950/20 dark:to-indigo-950/20">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="relative">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700">
              ⚽ Live Football Experience
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
              Your Ultimate{" "}
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Soccer
              </span>{" "}
              Destination
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover live matches, buy premium tickets, read breaking news, and explore comprehensive league statistics. 
              Everything you need for the beautiful game, all in one place.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg">
                <Link href="/matches" className="flex items-center gap-2">
                  View Live Matches
                  <span className="text-lg">⚽</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-gray-50 dark:hover:bg-gray-900">
                <Link href="/tickets">
                  Buy Tickets
                </Link>
              </Button>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">150+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Live Matches Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Tickets Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Major Leagues</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/63e6d5bc-773f-4c51-bd99-f91ee3155dbf.png"
            alt="Modern soccer stadium with dramatic lighting"
            className="h-full w-full object-cover opacity-5 dark:opacity-10"
          />
        </div>
      </div>
    </section>
  )
}