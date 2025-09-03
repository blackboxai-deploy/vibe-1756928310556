"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getLiveMatches, getUpcomingMatches } from "@/lib/mock-data"

export function LiveScores() {
  const liveMatches = getLiveMatches()
  const upcomingMatches = getUpcomingMatches().slice(0, 2)
  const allMatches = [...liveMatches, ...upcomingMatches]

  const [currentTime, setCurrentTime] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (allMatches.length === 0) {
    return null
  }

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Live Scores & Upcoming</h2>
        <Button variant="outline" size="sm">
          View All Matches
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allMatches.map((match) => (
          <Card key={match.id} className="relative overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {match.status === 'live' ? 'LIVE' : 'UPCOMING'}
                </CardTitle>
                <Badge 
                  variant={match.status === 'live' ? 'default' : 'secondary'}
                  className={match.status === 'live' ? 'bg-red-500 animate-pulse' : ''}
                >
                  {match.status === 'live' ? '● LIVE' : 'Scheduled'}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img 
                    src={match.homeTeam.logo} 
                    alt={`${match.homeTeam.name} logo`}
                    className="h-8 w-8 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm">{match.homeTeam.name}</p>
                    <p className="text-xs text-muted-foreground">{match.homeTeam.shortName}</p>
                  </div>
                </div>
                
                <div className="text-center">
                  {match.status === 'live' && match.score ? (
                    <div className="text-2xl font-bold">
                      {match.score.home} - {match.score.away}
                    </div>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      {match.date.toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="font-semibold text-sm">{match.awayTeam.name}</p>
                    <p className="text-xs text-muted-foreground">{match.awayTeam.shortName}</p>
                  </div>
                  <img 
                    src={match.awayTeam.logo} 
                    alt={`${match.awayTeam.name} logo`}
                    className="h-8 w-8 rounded-full"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                <span>{match.venue}</span>
                {match.status === 'upcoming' && (
                  <span>
                    {Math.ceil((match.date.getTime() - currentTime.getTime()) / (1000 * 60 * 60 * 24))} days left
                  </span>
                )}
              </div>
            </CardContent>
            
            {match.status === 'live' && (
              <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-red-500 to-red-600" />
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}