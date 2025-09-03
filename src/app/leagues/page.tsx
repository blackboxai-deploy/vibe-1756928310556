import { LeaguesHeader } from "@/components/leagues/leagues-header"
import { LeagueTable } from "@/components/leagues/league-table"
import { TopScorers } from "@/components/leagues/top-scorers"
import { LeagueStats } from "@/components/leagues/league-stats"

export default function LeaguesPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <LeaguesHeader />
      
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LeagueTable />
        </div>
        
        <div className="space-y-6">
          <TopScorers />
          <LeagueStats />
        </div>
      </div>
    </div>
  )
}