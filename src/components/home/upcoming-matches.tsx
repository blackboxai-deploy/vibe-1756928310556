import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getUpcomingMatches } from "@/lib/mock-data"

export function UpcomingMatches() {
  const upcomingMatches = getUpcomingMatches().slice(0, 4)

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
        <CardTitle className="text-xl font-bold">Upcoming Matches</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link href="/matches">View All</Link>
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {upcomingMatches.map((match) => (
          <div key={match.id} className="flex items-center justify-between p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors">
            <div className="flex items-center space-x-4 flex-1">
              <div className="flex items-center space-x-3">
                <img 
                  src={match.homeTeam.logo} 
                  alt={`${match.homeTeam.name} logo`}
                  className="h-8 w-8 rounded-full"
                />
                <span className="font-medium text-sm">{match.homeTeam.shortName}</span>
              </div>
              
              <div className="text-center px-4">
                <div className="text-xs text-muted-foreground">VS</div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="font-medium text-sm">{match.awayTeam.shortName}</span>
                <img 
                  src={match.awayTeam.logo} 
                  alt={`${match.awayTeam.name} logo`}
                  className="h-8 w-8 rounded-full"
                />
              </div>
            </div>
            
            <div className="flex flex-col items-end space-y-1">
              <div className="text-sm font-medium">
                {match.date.toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </div>
              <div className="text-xs text-muted-foreground">
                {match.date.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
              {match.availableTickets > 0 && (
                <Badge variant="secondary" className="text-xs">
                  Tickets Available
                </Badge>
              )}
            </div>
          </div>
        ))}
        
        {upcomingMatches.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No upcoming matches scheduled</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}