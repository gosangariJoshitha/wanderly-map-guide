
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
      <h2 className="text-4xl font-bold mb-6">Gallery</h2>
      
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
        // Fix: Use the setApi prop instead of onSelect
        setApi={(api) => {
          api.on("select", () => {
            handleIndexChange(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent>
          {images.map((imageUrl, index) => (
            <CarouselItem key={index}>
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                <img
                  src={imageUrl}
                  alt={`Attraction image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
              {images[currentIndex].includes("Gateway") && (
                <div className="absolute bottom-8 left-8 text-white text-3xl font-semibold">
                  Gateway of India
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1 p-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all ${
                currentIndex === index ? "w-10 bg-white" : "w-3 bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <CarouselPrevious className="left-4 h-12 w-12 rounded-full" />
        <CarouselNext className="right-4 h-12 w-12 rounded-full" />
      </Carousel>
    </div>
  );
}
