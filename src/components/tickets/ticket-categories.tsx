import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const ticketCategories = [
  {
    name: "Standard",
    price: "£45-65",
    features: [
      "Great stadium views",
      "Access to concessions", 
      "Standard seating",
      "Match program included"
    ],
    gradient: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
    border: "border-gray-200 dark:border-gray-700",
    popular: false
  },
  {
    name: "Premium",
    price: "£85-120",
    features: [
      "Premium stadium locations",
      "Padded seating with extra legroom",
      "Priority access to facilities",
      "Complimentary refreshments"
    ],
    gradient: "from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30",
    border: "border-blue-300 dark:border-blue-600",
    popular: true
  },
  {
    name: "VIP Experience",
    price: "£150-250",
    features: [
      "Best seats in the house",
      "VIP lounge access",
      "Premium dining experience",
      "Player meet & greet opportunities",
      "Exclusive merchandise"
    ],
    gradient: "from-amber-100 to-yellow-200 dark:from-amber-900/30 dark:to-yellow-800/30",
    border: "border-amber-300 dark:border-amber-600",
    popular: false
  }
]

export function TicketCategories() {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Choose Your Experience</h2>
        <p className="text-muted-foreground">
          Select the perfect ticket category for your match day experience
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {ticketCategories.map((category) => (
          <Card 
            key={category.name}
            className={`relative ${category.border} bg-gradient-to-br ${category.gradient} hover:shadow-lg transition-shadow`}
          >
            {category.popular && (
              <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary">
                Most Popular
              </Badge>
            )}
            
            <CardHeader className="text-center">
              <CardTitle className="text-xl">{category.name}</CardTitle>
              <div className="text-2xl font-bold text-primary">{category.price}</div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {category.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full" 
                variant={category.popular ? "default" : "outline"}
              >
                View {category.name} Tickets
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}