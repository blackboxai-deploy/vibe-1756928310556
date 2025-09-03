import { Hero } from "@/components/home/hero"
import { LiveScores } from "@/components/home/live-scores"
import { QuickAccess } from "@/components/home/quick-access"
import { FeaturedNews } from "@/components/home/featured-news"
import { UpcomingMatches } from "@/components/home/upcoming-matches"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container space-y-8 py-8">
        <LiveScores />
        <QuickAccess />
        <div className="grid gap-8 lg:grid-cols-2">
          <UpcomingMatches />
          <FeaturedNews />
        </div>
      </div>
    </div>
  )
}