import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LeagueStats() {
  const stats = [
    { label: "Total Goals", value: "658", icon: "⚽" },
    { label: "Matches Played", value: "210", icon: "📊" },
    { label: "Yellow Cards", value: "489", icon: "🟨" },
    { label: "Red Cards", value: "23", icon: "🟥" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>League Statistics</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div className="flex items-center space-x-3">
              <span className="text-xl">{stat.icon}</span>
              <span className="font-medium">{stat.label}</span>
            </div>
            <span className="font-bold text-primary">{stat.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}