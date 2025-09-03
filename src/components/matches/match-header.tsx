import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Match } from "@/lib/types"

interface MatchHeaderProps {
  match: Match
}

export function MatchHeader({ match }: MatchHeaderProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-red-500 animate-pulse'
      case 'upcoming': return 'bg-blue-500'
      case 'finished': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="text-center space-y-6">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Badge className={getStatusColor(match.status)}>
          {match.status === 'live' ? '● LIVE' : match.status.toUpperCase()}
        </Badge>
        <span className="text-sm text-muted-foreground">
          Premier League • Round {match.round}
        </span>
      </div>

      <div className="flex items-center justify-center space-x-12">
        <div className="text-center">
          <img 
            src={match.homeTeam.logo} 
            alt={`${match.homeTeam.name} logo`}
            className="h-24 w-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold">{match.homeTeam.name}</h2>
          <p className="text-muted-foreground">{match.homeTeam.stadium}</p>
        </div>

        <div className="text-center">
          {match.status === 'live' || match.status === 'finished' ? (
            <div className="text-6xl font-bold">
              {match.score?.home || 0} - {match.score?.away || 0}
            </div>
          ) : (
            <div className="text-2xl text-muted-foreground">
              {match.date.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </div>
          )}
          <div className="text-sm text-muted-foreground mt-2">
            {match.date.toLocaleDateString('en-US', { 
              weekday: 'long',
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>

        <div className="text-center">
          <img 
            src={match.awayTeam.logo} 
            alt={`${match.awayTeam.name} logo`}
            className="h-24 w-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold">{match.awayTeam.name}</h2>
          <p className="text-muted-foreground">Away Team</p>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        {match.status === 'upcoming' && match.availableTickets > 0 && (
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600">
            Buy Tickets (£{match.ticketPrice.standard}+)
          </Button>
        )}
        <Button variant="outline">Share Match</Button>
      </div>
    </div>
  )
}