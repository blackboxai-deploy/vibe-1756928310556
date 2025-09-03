import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Match } from "@/lib/types"

interface MatchTimelineProps {
  match: Match
}

export function MatchTimeline({}: MatchTimelineProps) {
  const events = [
    { minute: 15, type: "goal", team: "home", player: "M. Rashford", description: "Goal" },
    { minute: 28, type: "card", team: "away", player: "V. van Dijk", description: "Yellow Card" },
    { minute: 42, type: "goal", team: "away", player: "M. Salah", description: "Goal" },
    { minute: 67, type: "substitution", team: "home", player: "A. Martial", description: "Substitution" },
  ]

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'goal': return '⚽'
      case 'card': return '🟨'
      case 'substitution': return '🔄'
      default: return '📝'
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Match Events</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 rounded-lg border">
            <Badge variant="outline" className="min-w-[40px]">
              {event.minute}'
            </Badge>
            
            <div className="text-xl">{getEventIcon(event.type)}</div>
            
            <div className="flex-1">
              <div className="font-medium">{event.player}</div>
              <div className="text-sm text-muted-foreground">{event.description}</div>
            </div>
            
            <Badge variant={event.team === 'home' ? 'default' : 'secondary'}>
              {event.team === 'home' ? 'Home' : 'Away'}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}