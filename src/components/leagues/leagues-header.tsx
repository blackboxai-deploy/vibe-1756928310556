import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function LeaguesHeader() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">League Tables & Stats</h1>
          <p className="text-muted-foreground">
            Track team standings, player statistics, and league performance
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Select defaultValue="premier-league">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="premier-league">Premier League</SelectItem>
              <SelectItem value="champions-league">Champions League</SelectItem>
              <SelectItem value="europa-league">Europa League</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="2023-24">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023-24">2023-24</SelectItem>
              <SelectItem value="2022-23">2022-23</SelectItem>
              <SelectItem value="2021-22">2021-22</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-950/30">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">20</div>
          <div className="text-sm text-green-700 dark:text-green-300">Teams</div>
        </div>
        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/20 dark:to-cyan-950/30">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">21</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Matches Played</div>
        </div>
        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950/20 dark:to-violet-950/30">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">658</div>
          <div className="text-sm text-purple-700 dark:text-purple-300">Goals Scored</div>
        </div>
        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/20 dark:to-red-950/30">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">17</div>
          <div className="text-sm text-orange-700 dark:text-orange-300">Rounds Remaining</div>
        </div>
      </div>
    </div>
  )
}