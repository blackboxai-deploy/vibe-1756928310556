import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getRecentNews } from "@/lib/mock-data"

export function FeaturedNews() {
  const recentNews = getRecentNews(4)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'transfer':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'match':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'interview':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
        <CardTitle className="text-xl font-bold">Latest News</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link href="/news">View All</Link>
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {recentNews.map((article, index) => (
          <Link 
            key={article.id} 
            href={`/news/${article.slug}`}
            className="block group"
          >
            <div className={`p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors ${index === 0 ? 'border-primary/20' : ''}`}>
              {index === 0 && (
                <div className="mb-3">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge className={`text-xs ${getCategoryColor(article.category)}`}>
                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {article.publishedAt.toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                
                <h3 className={`font-semibold group-hover:text-primary transition-colors ${index === 0 ? 'text-base' : 'text-sm'} line-clamp-2`}>
                  {article.title}
                </h3>
                
                {index === 0 && (
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                )}
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    By {article.author}
                  </span>
                  {article.tags.length > 0 && (
                    <div className="flex space-x-1">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs px-2 py-1 bg-muted rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
        
        {recentNews.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No recent news available</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}