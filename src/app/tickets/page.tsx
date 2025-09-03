import { TicketsHeader } from "@/components/tickets/tickets-header"
import { AvailableMatches } from "@/components/tickets/available-matches"
import { TicketCategories } from "@/components/tickets/ticket-categories"

export default function TicketsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <TicketsHeader />
      <TicketCategories />
      <AvailableMatches />
    </div>
  )
}