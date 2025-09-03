import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getUpcomingMatches } from "@/lib/mock-data"

export function AvailableMatches() {
  const upcomingMatches = getUpcomingMatches().filter(match => match.availableTickets > 0)

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Available Matches</h2>
          <p className="text-muted-foreground">
            Book your tickets for these upcoming fixtures
          </p>
        </div>
        <Button variant="outline">View All Matches</Button>
      </div>
      
      <div className="grid gap-6">
        {upcomingMatches.map((match) => (
          <Card key={match.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Premier League</Badge>
                  <span className="text-sm text-muted-foreground">Round {match.round}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">
                    {match.date.toLocaleDateString('en-US', { 
                      weekday: 'long',
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {match.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <img 
                    src={match.homeTeam.logo} 
                    alt={`${match.homeTeam.name} logo`}
                    className="h-16 w-16 rounded-full mx-auto mb-2"
                  />
                  <h3 className="font-semibold">{match.homeTeam.name}</h3>
                  <p className="text-sm text-muted-foreground">Home</p>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground mb-2">VS</div>
                  <div className="text-sm text-muted-foreground">
                    {match.date.toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
                
                <div className="text-center">
                  <img 
                    src={match.awayTeam.logo} 
                    alt={`${match.awayTeam.name} logo`}
                    className="h-16 w-16 rounded-full mx-auto mb-2"
                  />
                  <h3 className="font-semibold">{match.awayTeam.name}</h3>
                  <p className="text-sm text-muted-foreground">Away</p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-medium">📍 {match.venue}</h4>
                    <p className="text-sm text-muted-foreground">
                      {match.availableTickets.toLocaleString()} tickets available
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-xl font-bold text-primary">£{match.ticketPrice.standard}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 border rounded-lg">
                    <div className="text-sm font-medium">Standard</div>
                    <div className="text-lg font-bold text-green-600">£{match.ticketPrice.standard}</div>
                  </div>
                  <div className="text-center p-3 border rounded-lg">
                    <div className="text-sm font-medium">Premium</div>
                    <div className="text-lg font-bold text-blue-600">£{match.ticketPrice.premium}</div>
                  </div>
                  <div className="text-center p-3 border rounded-lg">
                    <div className="text-sm font-medium">VIP</div>
                    <div className="text-lg font-bold text-purple-600">£{match.ticketPrice.vip}</div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700" 
                  size="lg"
                  asChild
                >
                  <Link href={`/tickets/purchase/${match.id}`}>
                    Book Tickets Now
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {upcomingMatches.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">No tickets available at the moment</div>
            <Button variant="outline">Check Back Later</Button>
          </div>
        )}
      </div>
    </section>
  )
}