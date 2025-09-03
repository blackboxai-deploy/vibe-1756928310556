import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getRecentNews } from "@/lib/mock-data"

export function NewsHeader() {
  const recentNews = getRecentNews()
  const categories = ['Transfer', 'Match', 'Interview', 'General']
  const breakingNews = recentNews.slice(0, 1)[0]

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Football News</h1>
          <p className="text-muted-foreground">
            Stay updated with the latest breaking news, transfers, and match reports
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Subscribe to Updates
          </Button>
        </div>
      </div>
      
      {breakingNews && (
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 p-6 border border-red-200 dark:border-red-800">
          <div className="flex items-start space-x-4">
            <Badge className="bg-red-500 text-white animate-pulse">
              🚨 BREAKING
            </Badge>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-red-900 dark:text-red-100 mb-2">
                {breakingNews.title}
              </h2>
              <p className="text-red-800 dark:text-red-200 text-sm mb-4">
                {breakingNews.excerpt}
              </p>
              <div className="flex items-center space-x-4 text-xs text-red-700 dark:text-red-300">
                <span>By {breakingNews.author}</span>
                <span>•</span>
                <span>{breakingNews.publishedAt.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary" className="bg-muted">
          📰 All Categories
        </Badge>
        {categories.map((category) => (
          <Badge key={category} variant="outline" className="cursor-pointer hover:bg-muted">
            {category}
          </Badge>
        ))}
      </div>
    </div>
  )
}