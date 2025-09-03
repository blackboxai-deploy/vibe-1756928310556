import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { leagueTable } from "@/lib/mock-data"

export function LeagueTable() {
  const getPositionColor = (position: number) => {
    if (position <= 4) return 'text-green-600 dark:text-green-400' // Champions League
    if (position <= 6) return 'text-blue-600 dark:text-blue-400' // Europa League
    if (position >= 18) return 'text-red-600 dark:text-red-400' // Relegation
    return 'text-foreground'
  }

  const getFormResult = (result: 'W' | 'D' | 'L') => {
    switch (result) {
      case 'W': return 'bg-green-500 text-white'
      case 'D': return 'bg-yellow-500 text-white'
      case 'L': return 'bg-red-500 text-white'
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Premier League Table</span>
          <Badge variant="secondary">2023-24 Season</Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Team</TableHead>
                <TableHead className="text-center w-12">P</TableHead>
                <TableHead className="text-center w-12">W</TableHead>
                <TableHead className="text-center w-12">D</TableHead>
                <TableHead className="text-center w-12">L</TableHead>
                <TableHead className="text-center w-12">GF</TableHead>
                <TableHead className="text-center w-12">GA</TableHead>
                <TableHead className="text-center w-12">GD</TableHead>
                <TableHead className="text-center w-16">Pts</TableHead>
                <TableHead className="text-center w-20">Form</TableHead>
              </TableRow>
            </TableHeader>
            
            <TableBody>
              {leagueTable.standings.map((standing) => (
                <TableRow key={standing.team.id} className="hover:bg-muted/50">
                  <TableCell className={`font-medium ${getPositionColor(standing.position)}`}>
                    {standing.position}
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <img 
                        src={standing.team.logo} 
                        alt={`${standing.team.name} logo`}
                        className="h-6 w-6"
                      />
                      <div>
                        <div className="font-medium">{standing.team.name}</div>
                        <div className="text-xs text-muted-foreground">{standing.team.shortName}</div>
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell className="text-center">{standing.played}</TableCell>
                  <TableCell className="text-center">{standing.won}</TableCell>
                  <TableCell className="text-center">{standing.drawn}</TableCell>
                  <TableCell className="text-center">{standing.lost}</TableCell>
                  <TableCell className="text-center">{standing.goalsFor}</TableCell>
                  <TableCell className="text-center">{standing.goalsAgainst}</TableCell>
                  <TableCell className="text-center font-medium">
                    {standing.goalDifference > 0 ? '+' : ''}{standing.goalDifference}
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary">
                    {standing.points}
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex space-x-1 justify-center">
                      {standing.form.map((result, index) => (
                        <Badge 
                          key={index}
                          className={`w-5 h-5 p-0 text-xs rounded-full flex items-center justify-center ${getFormResult(result)}`}
                        >
                          {result}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="p-4 border-t bg-muted/30">
          <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>Champions League</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Europa League</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span>Relegation</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}