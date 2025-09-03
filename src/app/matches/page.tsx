import { MatchesHeader } from "@/components/matches/matches-header"
import { MatchesFilter } from "@/components/matches/matches-filter"
import { MatchesList } from "@/components/matches/matches-list"
import { MatchesCalendar } from "@/components/matches/matches-calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MatchesPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <MatchesHeader />
      
      <Tabs defaultValue="list" className="w-full">
        <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto">
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>
          
          <MatchesFilter />
        </div>
        
        <TabsContent value="list" className="mt-6">
          <MatchesList />
        </TabsContent>
        
        <TabsContent value="calendar" className="mt-6">
          <MatchesCalendar />
        </TabsContent>
      </Tabs>
    </div>
  )
}