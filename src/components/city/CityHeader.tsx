
import { City } from "@/types";
import { Share2, MapPin } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// City-specific header images
const cityHeaderImages = {
  mumbai: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=1200&auto=format&fit=crop",
  delhi: "https://images.unsplash.com/photo-1586974669615-0c33e98ca27f?q=80&w=1200&auto=format&fit=crop",
  bengaluru: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1200&auto=format&fit=crop",
  chennai: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
  kolkata: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200&auto=format&fit=crop",
  hyderabad: "https://images.unsplash.com/photo-1629734885899-4b79bce78b5e?q=80&w=1200&auto=format&fit=crop"
};

interface CityHeaderProps {
  city: City;
}

export function CityHeader({ city }: CityHeaderProps) {
  const handleShare = async () => {
    const shareData = {
      title: `Visit ${city.name} - CityWander`,
      text: `Check out ${city.name}, ${city.state} on CityWander!`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast({
          title: "Shared successfully!"
        });
      } else {
        // Fallback for browsers that don't support the Web Share API
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied to clipboard!",
          description: "You can now share it with others."
        });
      }
    } catch (error) {
      console.error("Error sharing:", error);
      toast({
        title: "Sharing failed",
        description: "Could not share this page.",
        variant: "destructive"
      });
    }
  };

  // Use city-specific image if available, otherwise fallback to city.imageUrl
  const cityImage = cityHeaderImages[city.id as keyof typeof cityHeaderImages] || city.imageUrl;

  return (
    <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
      {/* City image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${cityImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      
      {/* City info */}
      <div className="absolute bottom-0 left-0 right-0 container p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="text-travel-teal-400 text-sm font-medium mb-1">{city.region} India</div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">{city.name}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <MapPin className="h-4 w-4 text-travel-teal-400" />
              <span>{city.state}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-travel-teal-400"></span>
              <span>{city.attractionsCount} Attractions</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={handleShare}
              className="bg-travel-blue-800/70 backdrop-blur-sm px-4 py-2 rounded-md flex items-center gap-2 hover:bg-travel-blue-700/70 transition-colors"
            >
              <Share2 className="h-5 w-5 text-travel-teal-400" />
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
