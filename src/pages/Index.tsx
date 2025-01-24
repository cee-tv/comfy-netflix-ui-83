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

const popularContent = [...trendingContent].reverse();

const Index = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <Hero />
          <div className="mt-4">
            <ContentRow title="Trending Now" items={trendingContent} />
            <ContentRow title="Popular on Netflix" items={popularContent} />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;