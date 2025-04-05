
import { City } from "@/types";
import { MapPin, Share2, Calendar, Users, Tag, Globe } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

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

  return (
    <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
      {/* City image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${city.imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      
      {/* City info */}
      <div className="absolute bottom-0 left-0 right-0 container p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="text-travel-teal-400 text-sm font-medium mb-1">{city.region} India</div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{city.name}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <span>{city.state}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-travel-teal-400"></span>
              <span>{city.attractionsCount} Attractions</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <a href="/travel-guide" className="bg-travel-blue-800/70 backdrop-blur-sm px-4 py-2 rounded-md flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-travel-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Travel Info</span>
            </a>
            <button 
              onClick={handleShare}
              className="bg-travel-blue-800/70 backdrop-blur-sm px-4 py-2 rounded-md flex items-center gap-2 hover:bg-travel-blue-700/70 transition-colors"
            >
              <Share2 className="h-5 w-5 text-travel-teal-400" />
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>
        </div>
        
        <div className="mt-4 text-gray-200">
          <p className="max-w-2xl line-clamp-2 md:line-clamp-none mb-4">{city.description}</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-2 gap-x-4 text-sm mt-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-travel-teal-400" />
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">{city.bestTimeToVisit}</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4 text-travel-teal-400" />
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">{city.languages.slice(0, 2).join(", ")}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-travel-teal-400" />
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">{city.population}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4 text-travel-teal-400" />
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">{city.entryFee || "Varies"}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-travel-teal-400" />
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">{city.state}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
