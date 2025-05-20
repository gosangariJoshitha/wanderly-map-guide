
import { Attraction } from "@/types";
import { useNavigate } from "react-router-dom";
import { Share2, Info } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface AttractionHeaderProps {
  attraction: Attraction;
}

export function AttractionHeader({ attraction }: AttractionHeaderProps) {
  const navigate = useNavigate();

  const handleShare = async () => {
    const shareData = {
      title: `${attraction.name} - CityWander`,
      text: `Check out ${attraction.name} on CityWander!`,
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

  const handleTravelInfo = () => {
    navigate("/travel-guide");
  };

  return (
    <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
      {/* Attraction image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${attraction.imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>
      </div>
      
      {/* Attraction info */}
      <div className="absolute bottom-0 left-0 right-0 container p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider bg-travel-teal-500/80 px-2 py-1 rounded-sm">
                {attraction.category === "temple" ? "Religious Site" :
                 attraction.category === "other" ? "Attraction" : "Tourist Spot"}
              </span>
              <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-md px-2 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium">{attraction.rating}</span>
                <span className="text-xs text-gray-300">({attraction.reviews.length} reviews)</span>
              </div>
            </div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-1 text-white">{attraction.name}</h1>
            <div className="flex items-center gap-1 text-sm text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{attraction.location.address}</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={handleTravelInfo}
              className="bg-travel-blue-800/70 backdrop-blur-sm px-4 py-2 rounded-md flex items-center gap-2 hover:bg-travel-blue-700/70 transition-colors"
            >
              <Info className="h-5 w-5 text-travel-teal-400" />
              <span className="text-sm font-medium">Travel Info</span>
            </button>
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
