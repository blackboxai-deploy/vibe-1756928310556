import { notFound } from "next/navigation"
import { MatchHeader } from "@/components/matches/match-header"
import { MatchStats } from "@/components/matches/match-stats"
import { MatchLineup } from "@/components/matches/match-lineup"
import { MatchTimeline } from "@/components/matches/match-timeline"
import { getMatchById } from "@/lib/mock-data"

interface MatchPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function MatchPage({ params }: MatchPageProps) {
  const { id } = await params
  const match = getMatchById(id)

  if (!match) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <MatchHeader match={match} />
      
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <MatchStats match={match} />
          {(match.status === 'live' || match.status === 'finished') && (
            <MatchTimeline match={match} />
          )}
        </div>
        
        <div className="space-y-6">
          <MatchLineup match={match} />
        </div>
      </div>
    </div>
  )
}