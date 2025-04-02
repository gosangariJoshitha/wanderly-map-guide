
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { City } from "@/types";
import { Link } from "react-router-dom";
import { Share2, ChevronRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // Fallback for browsers that don't support Web Share API
      const url = `${window.location.origin}/city/${city.id}`;
      navigator.clipboard.writeText(url);
      toast({ title: "Link copied to clipboard", description: "You can now share it manually" });
    }
  };

  return (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {cities.map((city) => (
            <CarouselItem key={city.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="h-full p-1">
                <div className="relative group h-full overflow-hidden rounded-xl">
                  <img
                    src={city.imageUrl}
                    alt={city.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-2xl font-bold mb-1 animate-fade-in">{city.name}</h3>
                    <p className="text-sm text-gray-200 mb-3 animate-fade-in" style={{ animationDelay: "100ms" }}>{city.state}</p>
                    <p className="line-clamp-2 text-sm mb-4 animate-fade-in" style={{ animationDelay: "200ms" }}>{city.description}</p>
                    <div className="flex justify-between items-center animate-fade-in" style={{ animationDelay: "300ms" }}>
                      <Link to={`/city/${city.id}`} className="group/explore">
                        <Button 
                          variant="default" 
                          className="bg-travel-teal-500 hover:bg-travel-teal-600 text-white flex items-center gap-2 transition-all duration-300 group-hover/explore:pl-6"
                        >
                          Explore
                          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/explore:translate-x-1" />
                        </Button>
                      </Link>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleShareCity(city)}
                        className="text-white hover:bg-white/20"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="-left-4 bg-white/80 border-none hover:bg-white" />
          <CarouselNext className="-right-4 bg-white/80 border-none hover:bg-white" />
        </div>
      </Carousel>
    </div>
  );
}
