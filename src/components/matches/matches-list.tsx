import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { matches } from "@/lib/mock-data"

export function MatchesList() {
  const sortedMatches = [...matches].sort((a, b) => {
    // Live matches first, then by date
    if (a.status === 'live' && b.status !== 'live') return -1
    if (b.status === 'live' && a.status !== 'live') return 1
    return a.date.getTime() - b.date.getTime()
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-red-500 text-white animate-pulse'
      case 'upcoming':
        return 'bg-blue-500 text-white'
      case 'finished':
        return 'bg-gray-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  const formatDate = (date: Date) => {
    const now = new Date()
    const diffInDays = Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    
    if (diffInDays === 0) return 'Today'
    if (diffInDays === 1) return 'Tomorrow'
    if (diffInDays === -1) return 'Yesterday'
    
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          All Matches ({sortedMatches.length})
        </h2>
      </div>
      
      <div className="grid gap-4">
        {sortedMatches.map((match) => (
          <Card key={match.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(match.status)}>
                    {match.status === 'live' ? '● LIVE' : match.status.toUpperCase()}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Premier League • Round {match.round}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{formatDate(match.date)}</div>
                  <div className="text-xs text-muted-foreground">
                    {match.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  {/* Home Team */}
                  <div className="flex items-center space-x-3 flex-1">
                    <img 
                      src={match.homeTeam.logo} 
                      alt={`${match.homeTeam.name} logo`}
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{match.homeTeam.name}</div>
                      <div className="text-sm text-muted-foreground">{match.homeTeam.stadium}</div>
                    </div>
                  </div>
                  
                  {/* Score/Time */}
                  <div className="flex flex-col items-center px-4">
                    {match.status === 'live' || match.status === 'finished' ? (
                      <div className="text-2xl font-bold">
                        {match.score?.home || 0} - {match.score?.away || 0}
                      </div>
                    ) : (
                      <div className="text-lg text-muted-foreground">
                        VS
                      </div>
                    )}
                    {match.status === 'live' && (
                      <div className="text-xs text-red-600 font-medium animate-pulse">
                        {Math.floor(Math.random() * 90) + 1}'
                      </div>
                    )}
                  </div>
                  
                  {/* Away Team */}
                  <div className="flex items-center space-x-3 flex-1 justify-end">
                    <div className="text-right">
                      <div className="font-semibold">{match.awayTeam.name}</div>
                      <div className="text-sm text-muted-foreground">Away</div>
                    </div>
                    <img 
                      src={match.awayTeam.logo} 
                      alt={`${match.awayTeam.name} logo`}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/matches/${match.id}`}>
                      Details
                    </Link>
                  </Button>
                  {match.status === 'upcoming' && match.availableTickets > 0 && (
                    <Button size="sm" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700" asChild>
                      <Link href={`/tickets/purchase/${match.id}`}>
                        Buy Tickets
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              
              {match.status === 'upcoming' && (
                <div className="mt-4 pt-4 border-t flex items-center justify-between text-sm text-muted-foreground">
                  <span>📍 {match.venue}</span>
                  <span>
                    {match.availableTickets > 0 
                      ? `${match.availableTickets.toLocaleString()} tickets available from £${match.ticketPrice.standard}`
                      : 'Sold Out'
                    }
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {sortedMatches.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">No matches found</div>
          <Button variant="outline">Clear Filters</Button>
        </div>
      )}
    </div>
  )
}