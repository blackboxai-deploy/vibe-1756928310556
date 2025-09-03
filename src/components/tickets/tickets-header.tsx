import { Card, CardContent } from "@/components/ui/card"

export function TicketsHeader() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Premium Football <span className="text-primary">Tickets</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Secure your seat for the most exciting matches. Experience the passion, 
          atmosphere, and drama of live football.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-2">🎫</div>
            <h3 className="font-semibold text-green-800 dark:text-green-200">Instant Booking</h3>
            <p className="text-sm text-green-700 dark:text-green-300">
              Book your tickets instantly with instant confirmation
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/20 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-2">🏟️</div>
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">Best Seats</h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Choose from premium locations across the stadium
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950/20 dark:to-violet-950/30 border-purple-200 dark:border-purple-800">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">Secure Payment</h3>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              Safe and secure transactions with full buyer protection
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}