
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { City } from "@/types";
import { Link } from "react-router-dom";
import { Share2, ChevronRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { CityCard } from "./CityCard";

interface FeaturedCitiesCarouselProps {
  cities: City[];
}

export function FeaturedCitiesCarousel({ cities }: FeaturedCitiesCarouselProps) {
  const handleShareCity = (city: City) => {
    if (navigator.share) {
      navigator.share({
        title: `Explore ${city.name} with CityWander`,
        text: `Check out ${city.name}, ${city.state} - ${city.description}`,
        url: `${window.location.origin}/city/${city.id}`,
      })
        .then(() => toast({ title: "Shared successfully" }))
        .catch((error) => {
          console.error("Error sharing:", error);
          // Fallback if sharing fails
          copyToClipboard(city);
        });
    } else {
      // Fallback for browsers that don't support Web Share API
      copyToClipboard(city);
    }
  };

  const copyToClipboard = (city: City) => {
    const url = `${window.location.origin}/city/${city.id}`;
    navigator.clipboard.writeText(url)
      .then(() => toast({ 
        title: "Link copied to clipboard", 
        description: "You can now share it manually" 
      }))
      .catch(err => {
        console.error('Failed to copy:', err);
        toast({ 
          title: "Couldn't copy to clipboard", 
          description: "Please try again",
          variant: "destructive"
        });
      });
  };

  return (
    <div className="relative px-4 pb-10">
      <Carousel className="w-full">
        <CarouselContent>
          {cities.map((city) => (
            <CarouselItem key={city.id} className="md:basis-1/2 lg:basis-1/2">
              <div className="h-full p-1">
                <CityCard city={city} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="-left-4 bg-white/80 border-none hover:bg-white" />
          <CarouselNext className="-right-4 bg-white/80 border-none hover:bg-white" />
        </div>
      </Carousel>
      
      <div className="flex justify-center mt-8">
        <Link to="/cities">
          <Button 
            className="bg-travel-teal-500 hover:bg-travel-teal-600 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2"
          >
            View All Cities
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
