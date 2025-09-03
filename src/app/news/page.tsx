import { NewsHeader } from "@/components/news/news-header"
import { NewsFilters } from "@/components/news/news-filters"
import { NewsFeed } from "@/components/news/news-feed"
import { TrendingNews } from "@/components/news/trending-news"

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <NewsHeader />
      
      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-3 space-y-6">
          <NewsFilters />
          <NewsFeed />
        </div>
        
        <div className="space-y-6">
          <TrendingNews />
        </div>
      </div>
    </div>
  )
}