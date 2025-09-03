"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface FilterState {
  status: 'all' | 'live' | 'upcoming' | 'finished'
  league: string
  team: string
}

export function MatchesFilter() {
  const [filters, setFilters] = React.useState<FilterState>({
    status: 'all',
    league: 'all',
    team: 'all'
  })

  const statusFilters = [
    { value: 'all', label: 'All Matches', count: 15 },
    { value: 'live', label: 'Live', count: 2 },
    { value: 'upcoming', label: 'Upcoming', count: 8 },
    { value: 'finished', label: 'Finished', count: 5 },
  ]

  const leagueFilters = [
    { value: 'all', label: 'All Leagues' },
    { value: 'premier-league', label: 'Premier League' },
    { value: 'champions-league', label: 'Champions League' },
    { value: 'europa-league', label: 'Europa League' },
  ]

  const teamFilters = [
    { value: 'all', label: 'All Teams' },
    { value: 'manchester-united', label: 'Manchester United' },
    { value: 'liverpool', label: 'Liverpool FC' },
    { value: 'chelsea', label: 'Chelsea FC' },
    { value: 'arsenal', label: 'Arsenal FC' },
  ]

  const clearFilters = () => {
    setFilters({
      status: 'all',
      league: 'all',
      team: 'all'
    })
  }

  const hasActiveFilters = filters.status !== 'all' || filters.league !== 'all' || filters.team !== 'all'

  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
      <div className="flex flex-wrap gap-2">
        {statusFilters.map((filter) => (
          <Button
            key={filter.value}
            variant={filters.status === filter.value ? "default" : "outline"}
            size="sm"
            onClick={() => setFilters(prev => ({ ...prev, status: filter.value as FilterState['status'] }))}
            className="relative"
          >
            {filter.label}
            <Badge variant="secondary" className="ml-2 text-xs">
              {filter.count}
            </Badge>
          </Button>
        ))}
      </div>
      
      <div className="flex items-center space-x-2">
        <Select value={filters.league} onValueChange={(value) => setFilters(prev => ({ ...prev, league: value }))}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {leagueFilters.map((league) => (
              <SelectItem key={league.value} value={league.value}>
                {league.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={filters.team} onValueChange={(value) => setFilters(prev => ({ ...prev, team: value }))}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {teamFilters.map((team) => (
              <SelectItem key={team.value} value={team.value}>
                {team.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear Filters
          </Button>
        )}
      </div>
    </div>
  )
}