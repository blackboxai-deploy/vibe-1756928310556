import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getRecentNews } from "@/lib/mock-data"

export function TrendingNews() {
  const trendingNews = getRecentNews(5)

  return (
    <Card>
      <CardHeader>
        <CardTitle>🔥 Trending Now</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {trendingNews.map((article, index) => (
          <Link 
            key={article.id} 
            href={`/news/${article.slug}`}
            className="block group"
          >
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
              <div className="text-lg font-bold text-muted-foreground min-w-[24px]">
                {index + 1}
              </div>
              
              <div className="flex-1 space-y-2">
                <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h4>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{article.author}</span>
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}