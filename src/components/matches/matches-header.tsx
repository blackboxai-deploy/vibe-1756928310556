import { Badge } from "@/components/ui/badge"
import { getLiveMatches, getUpcomingMatches } from "@/lib/mock-data"

export function MatchesHeader() {
  const liveMatches = getLiveMatches()
  const upcomingMatches = getUpcomingMatches()

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Football Matches</h1>
          <p className="text-muted-foreground">
            Stay updated with live scores, upcoming fixtures, and match results
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          {liveMatches.length > 0 && (
            <Badge variant="default" className="bg-red-500 animate-pulse">
              ● {liveMatches.length} Live
            </Badge>
          )}
          <Badge variant="secondary">
            {upcomingMatches.length} Upcoming
          </Badge>
        </div>
      </div>
      
      {liveMatches.length > 0 && (
        <div className="rounded-lg bg-red-50 dark:bg-red-950/20 p-4 border border-red-200 dark:border-red-800">
          <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">
            🔴 Live Matches Now
          </h3>
          <div className="space-y-2">
            {liveMatches.map((match) => (
              <div key={match.id} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <img src={match.homeTeam.logo} alt="" className="h-4 w-4" />
                  <span>{match.homeTeam.shortName}</span>
                  <span className="font-bold">
                    {match.score?.home || 0} - {match.score?.away || 0}
                  </span>
                  <span>{match.awayTeam.shortName}</span>
                  <img src={match.awayTeam.logo} alt="" className="h-4 w-4" />
                </div>
                <Badge className="bg-red-500 text-white text-xs">LIVE</Badge>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}