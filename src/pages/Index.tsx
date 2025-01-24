import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Hero } from "@/components/Hero";
import { ContentRow } from "@/components/ContentRow";

const trendingContent = [
  { id: 1, title: "Show 1", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf" },
  { id: 2, title: "Show 2", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0" },
  { id: 3, title: "Show 3", image: "https://images.unsplash.com/photo-1626814026366-c9a07e9d3f8e" },
  { id: 4, title: "Show 4", image: "https://images.unsplash.com/photo-1626814026369-874c4d8a158d" },
  { id: 5, title: "Show 5", image: "https://images.unsplash.com/photo-1626814026762-ea184a71c3e1" },
  { id: 6, title: "Show 6", image: "https://images.unsplash.com/photo-1626814026773-324f80a9a8b8" },
];

const top10Movies = [
  { id: 7, title: "Top Movie 1", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22" },
  { id: 8, title: "Top Movie 2", image: "https://images.unsplash.com/photo-1527576539890-dfa815648363" },
  { id: 9, title: "Top Movie 3", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
  { id: 10, title: "Top Movie 4", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b" },
  { id: 11, title: "Top Movie 5", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf" },
  { id: 12, title: "Top Movie 6", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0" },
];

const continueWatching = [
  { id: 13, title: "Continue 1", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf" },
  { id: 14, title: "Continue 2", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0" },
  { id: 15, title: "Continue 3", image: "https://images.unsplash.com/photo-1626814026366-c9a07e9d3f8e" },
];

// Reuse the same images for different categories to keep the example simple
const categories = [
  { title: "Trending Now", items: trendingContent },
  { title: "Continue Watching for You", items: continueWatching },
  { title: "Top 10 Movies in Netflix Today", items: top10Movies },
  { title: "Anime", items: trendingContent },
  { title: "Drama", items: top10Movies },
  { title: "TV Thrillers", items: trendingContent },
  { title: "US Movies", items: top10Movies },
  { title: "Action & Adventure Movies", items: trendingContent },
  { title: "Action Anime", items: top10Movies },
  { title: "Blockbuster Movies", items: trendingContent },
  { title: "Romantic TV Shows", items: top10Movies },
  { title: "Korean TV Shows", items: trendingContent },
];

const Index = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <Hero />
          <div className="mt-4">
            {categories.map((category) => (
              <ContentRow 
                key={category.title}
                title={category.title} 
                items={category.items} 
              />
            ))}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
