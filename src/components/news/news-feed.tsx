import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getRecentNews } from "@/lib/mock-data"

export function NewsFeed() {
  const news = getRecentNews()

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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Latest Stories</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Sort by Date
          </Button>
          <Button variant="outline" size="sm">
            Filter
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6">
        {news.map((article, index) => (
          <Card key={article.id} className={`overflow-hidden hover:shadow-lg transition-shadow ${index === 0 ? 'md:col-span-2' : ''}`}>
            <CardContent className="p-0">
              <div className={`grid gap-6 ${index === 0 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                <div className={index === 0 ? 'md:order-1' : ''}>
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className={`w-full object-cover ${index === 0 ? 'h-64' : 'h-48'}`}
                  />
                </div>
                
                <div className={`p-6 space-y-4 ${index === 0 ? 'md:col-span-1 md:order-2' : 'md:col-span-2'}`}>
                  <div className="flex items-center justify-between">
                    <Badge className={`text-xs ${getCategoryColor(article.category)}`}>
                      {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {article.publishedAt.toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className={`font-bold mb-2 hover:text-primary transition-colors ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>By {article.author}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {article.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full justify-start p-0 h-auto text-primary hover:text-primary/80" asChild>
                    <Link href={`/news/${article.slug}`}>
                      Read Full Story →
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center pt-6">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}