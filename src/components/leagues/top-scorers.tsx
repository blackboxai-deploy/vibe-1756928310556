import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { players } from "@/lib/mock-data"

export function TopScorers() {
  const topScorers = [...players]
    .sort((a, b) => b.stats.goals - a.stats.goals)
    .slice(0, 5)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Scorers</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {topScorers.map((player, index) => (
          <div key={player.id} className="flex items-center space-x-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              index === 0 ? 'bg-yellow-500 text-white' :
              index === 1 ? 'bg-gray-400 text-white' :
              index === 2 ? 'bg-orange-600 text-white' :
              'bg-muted text-muted-foreground'
            }`}>
              {index + 1}
            </div>
            
            <img 
              src={player.photo} 
              alt={player.name}
              className="h-10 w-10 rounded-full"
            />
            
            <div className="flex-1">
              <div className="font-medium">{player.name}</div>
              <div className="text-sm text-muted-foreground">{player.position}</div>
            </div>
            
            <div className="text-right">
              <div className="font-bold text-primary">{player.stats.goals}</div>
              <div className="text-xs text-muted-foreground">goals</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}