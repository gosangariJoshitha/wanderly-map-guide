
import { Button } from "@/components/ui/button";
import { Share2, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

interface AttractionActionsProps {
  attractionName: string;
  cityId?: string;
}

export function AttractionActions({ attractionName, cityId }: AttractionActionsProps) {
  const navigate = useNavigate();

  const handleShare = async () => {
    const shareData = {
      title: `${attractionName} - CityWander`,
      text: `Check out ${attractionName} on CityWander!`,
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
    navigate('/travel-guide', { state: { cityId } });
  };

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <Button 
        variant="outline" 
        className="flex items-center gap-2" 
        onClick={handleShare}
      >
        <Share2 className="h-4 w-4" />
        Share
      </Button>
      <Button 
        variant="outline" 
        className="flex items-center gap-2 bg-travel-teal-50 text-travel-teal-600 hover:bg-travel-teal-100 border-travel-teal-200"
        onClick={handleTravelInfo}
      >
        <Info className="h-4 w-4" />
        Travel Guide
      </Button>
    </div>
  );
}
