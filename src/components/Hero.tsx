import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>
      <div className="relative h-full flex items-end pb-20 px-12">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-4">Stranger Things</h1>
          <p className="text-lg text-gray-200 mb-6">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              <Play className="mr-2" /> Play
            </Button>
            <Button size="lg" variant="secondary">
              <Info className="mr-2" /> More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};