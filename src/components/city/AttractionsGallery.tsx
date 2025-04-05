
import { useState } from "react";
import { Attraction } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

interface AttractionsGalleryProps {
  attractions: Attraction[];
  title: string;
}

export function AttractionsGallery({ attractions, title }: AttractionsGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (attractions.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4 py-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <Carousel
        className="w-full"
        onSelect={(index) => setActiveIndex(index)}
      >
        <CarouselContent>
          {attractions.map((attraction, index) => (
            <CarouselItem key={attraction.id} className="md:basis-1/2 lg:basis-1/3">
              <Link to={`/attraction/${attraction.id}`}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div 
                      className="aspect-video bg-cover bg-center h-48"
                      style={{ backgroundImage: `url(${attraction.imageUrl})` }} 
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-1">{attraction.name}</h4>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1 text-travel-teal-500" />
                        <span>{attraction.location.address.split(',')[0]}</span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{attraction.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
}
