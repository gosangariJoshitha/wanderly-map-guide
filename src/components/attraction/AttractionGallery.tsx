
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { GalleryMediaItem } from "./GalleryMediaItem";
import { GalleryPagination } from "./GalleryPagination";
import { EmptyGallery } from "./EmptyGallery";

interface AttractionGalleryProps {
  images: string[];
  className?: string;
}

export function AttractionGallery({ images, className }: AttractionGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Process images to handle empty URLs
  const enrichedImages = processImages(images);
  const mediaItems = [...enrichedImages];

  // Ensure there are media items to display
  if (mediaItems.length === 0) {
    return <EmptyGallery />;
  }

  // Handler for the carousel index change
  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };
  
  return (
    <div className={cn("space-y-6", className)}>
      <h2 className="text-4xl font-bold mb-6">Gallery</h2>
      
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
        setApi={(api) => {
          api.on("select", () => {
            handleIndexChange(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent>
          {mediaItems.map((item, index) => (
            <GalleryMediaItem 
              key={`item-${index}`}
              item={item} 
              index={index} 
              isVideo={false} 
            />
          ))}
        </CarouselContent>
        
        <GalleryPagination 
          items={mediaItems} 
          currentIndex={currentIndex} 
          onSelect={setCurrentIndex} 
        />
        
        {/* Hiding arrows by setting className to hidden */}
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
    </div>
  );
}

// Helper function to process images (handle empty URLs etc.)
function processImages(images: string[]): string[] {
  return images.map(img => {
    // If the image URL is empty or doesn't look valid, replace with a placeholder
    if (!img || img.trim() === '') {
      return 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e';
    }
    return img;
  });
}
