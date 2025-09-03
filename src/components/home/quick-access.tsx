import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const quickAccessItems = [
  {
    title: "Live Matches",
    description: "Watch live games and get real-time updates",
    href: "/matches",
    icon: "⚽",
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    title: "Buy Tickets",
    description: "Secure your seat for upcoming matches",
    href: "/tickets",
    icon: "🎫",
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    title: "Latest News",
    description: "Stay updated with breaking football news",
    href: "/news",
    icon: "📰",
    gradient: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    title: "League Tables",
    description: "Check standings and team statistics",
    href: "/leagues",
    icon: "🏆",
    gradient: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
  {
    title: "Events",
    description: "Join exclusive football events and tournaments",
    href: "/events",
    icon: "📅",
    gradient: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
  },
  {
    title: "Player Stats",
    description: "Explore detailed player performance data",
    href: "/leagues",
    icon: "📊",
    gradient: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
  },
]

export function QuickAccess() {
  return (
    <section className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Quick Access</h2>
        <p className="text-muted-foreground">Everything you need at your fingertips</p>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quickAccessItems.map((item) => (
          <Link key={item.href} href={item.href} className="group">
            <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${item.bgColor} border-0`}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}