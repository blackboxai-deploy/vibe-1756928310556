"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { matches } from "@/lib/mock-data"

export function MatchesCalendar() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null)
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  // Get matches for the current month
  const monthMatches = matches.filter(match => {
    const matchDate = new Date(match.date)
    return matchDate.getMonth() === currentMonth.getMonth() && 
           matchDate.getFullYear() === currentMonth.getFullYear()
  })

  // Group matches by date
  const matchesByDate = monthMatches.reduce((acc, match) => {
    const dateKey = match.date.toDateString()
    if (!acc[dateKey]) {
      acc[dateKey] = []
    }
    acc[dateKey].push(match)
    return acc
  }, {} as Record<string, typeof matches>)

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())
    
    const days = []
    const currentDate = new Date(startDate)
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }
    
    return days
  }

  const calendarDays = generateCalendarDays()

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev)
      newMonth.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1))
      return newMonth
    })
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth.getMonth()
  }

  const hasMatches = (date: Date) => {
    return !!matchesByDate[date.toDateString()]
  }

  const getDateMatches = (date: Date) => {
    return matchesByDate[date.toDateString()] || []
  }

  const selectedDateMatches = selectedDate ? getDateMatches(selectedDate) : []

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
                ←
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
                →
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((date, index) => {
              const dateMatches = getDateMatches(date)
              const isSelected = selectedDate?.toDateString() === date.toDateString()
              
              return (
                <button
                  key={index}
                  onClick={() => setSelectedDate(date)}
                  className={`
                    relative p-2 text-sm transition-colors rounded-md min-h-[40px] flex flex-col items-center justify-center
                    ${isCurrentMonth(date) ? 'text-foreground' : 'text-muted-foreground'}
                    ${isToday(date) ? 'bg-primary text-primary-foreground font-bold' : ''}
                    ${isSelected ? 'bg-accent' : 'hover:bg-accent/50'}
                    ${hasMatches(date) ? 'font-semibold' : ''}
                  `}
                >
                  <span>{date.getDate()}</span>
                  {hasMatches(date) && (
                    <div className="flex space-x-1 mt-1">
                      {dateMatches.slice(0, 3).map((match, i) => (
                        <div
                          key={i}
                          className={`w-1 h-1 rounded-full ${
                            match.status === 'live' ? 'bg-red-500' : 
                            match.status === 'upcoming' ? 'bg-blue-500' : 'bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>
            {selectedDate ? (
              `Matches on ${selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })}`
            ) : (
              'Select a date'
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedDateMatches.length > 0 ? (
            <div className="space-y-4">
              {selectedDateMatches.map((match) => (
                <div key={match.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={match.homeTeam.logo} 
                      alt={`${match.homeTeam.name} logo`}
                      className="h-6 w-6"
                    />
                    <span className="text-sm font-medium">{match.homeTeam.shortName}</span>
                    <span className="text-xs text-muted-foreground">vs</span>
                    <span className="text-sm font-medium">{match.awayTeam.shortName}</span>
                    <img 
                      src={match.awayTeam.logo} 
                      alt={`${match.awayTeam.name} logo`}
                      className="h-6 w-6"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      className={
                        match.status === 'live' ? 'bg-red-500' : 
                        match.status === 'upcoming' ? 'bg-blue-500' : 'bg-gray-500'
                      }
                    >
                      {match.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {match.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : selectedDate ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>No matches scheduled for this date</p>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>Select a date to view matches</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}