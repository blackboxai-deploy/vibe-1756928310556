import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Match } from "@/lib/types"

interface MatchStatsProps {
  match: Match
}

export function MatchStats({}: MatchStatsProps) {
  const stats = [
    { home: "65%", label: "Possession", away: "35%" },
    { home: "12", label: "Shots", away: "8" },
    { home: "6", label: "On Target", away: "3" },
    { home: "4", label: "Corners", away: "2" },
    { home: "2", label: "Yellow Cards", away: "3" },
    { home: "0", label: "Red Cards", away: "0" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Match Statistics</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{stat.home}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <span className="font-semibold">{stat.away}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-muted rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all"
                  style={{ width: `${parseInt(stat.home)}%` }}
                />
              </div>
              <div className="flex-1 bg-muted rounded-full h-2">
                <div 
                  className="bg-red-500 h-2 rounded-full ml-auto transition-all"
                  style={{ width: `${parseInt(stat.away)}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}