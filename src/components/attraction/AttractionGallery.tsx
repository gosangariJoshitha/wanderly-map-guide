
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { type EmblaCarouselType } from "embla-carousel";

interface AttractionGalleryProps {
  images: string[];
  className?: string;
}

export function AttractionGallery({ images, className }: AttractionGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure there are images to display
  if (!images || images.length === 0) {
    return null;
  }

  // Handler for the carousel index change
  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
        onSelect={(api: EmblaCarouselType) => handleIndexChange(api.selectedScrollSnap())}
      >
        <CarouselContent>
          {images.map((imageUrl, index) => (
            <CarouselItem key={index}>
              <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                <img
                  src={imageUrl}
                  alt={`Attraction image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1 p-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}
