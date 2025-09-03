import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Match } from "@/lib/types"

interface MatchLineupProps {
  match: Match
}

export function MatchLineup({}: MatchLineupProps) {
  const homeLineup = [
    { name: "D. De Gea", position: "GK", number: 1 },
    { name: "A. Wan-Bissaka", position: "RB", number: 29 },
    { name: "H. Maguire", position: "CB", number: 5 },
    { name: "R. Varane", position: "CB", number: 19 },
    { name: "L. Shaw", position: "LB", number: 23 },
  ]

  const awayLineup = [
    { name: "A. Becker", position: "GK", number: 1 },
    { name: "T. Alexander-Arnold", position: "RB", number: 66 },
    { name: "V. van Dijk", position: "CB", number: 4 },
    { name: "I. Matip", position: "CB", number: 32 },
    { name: "A. Robertson", position: "LB", number: 26 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Starting Lineups</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-3">Home Team</h3>
          <div className="space-y-2">
            {homeLineup.map((player) => (
              <div key={player.number} className="flex items-center justify-between p-2 rounded bg-muted/50">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">
                    {player.number}
                  </div>
                  <span className="font-medium">{player.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{player.position}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Away Team</h3>
          <div className="space-y-2">
            {awayLineup.map((player) => (
              <div key={player.number} className="flex items-center justify-between p-2 rounded bg-muted/50">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                    {player.number}
                  </div>
                  <span className="font-medium">{player.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{player.position}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}