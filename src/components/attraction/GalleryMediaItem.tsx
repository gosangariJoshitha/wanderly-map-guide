
import { Play } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

interface GalleryMediaItemProps {
  item: string;
  index: number;
  isVideo: boolean;
}

export function GalleryMediaItem({ item, index, isVideo }: GalleryMediaItemProps) {
  return (
    <CarouselItem key={`media-${index}`}>
      <div className="aspect-[16/9] w-full lg:h-[700px] h-96 overflow-hidden rounded-xl relative">
        {isVideo ? (
          <>
            <video 
              src={item}
              controls
              className="h-full w-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Play className="h-16 w-16 text-white opacity-50" />
            </div>
          </>
        ) : (
          <img
            src={item}
            alt={`Gallery item ${index + 1}`}
            className="h-full w-full object-cover"
          />
        )}
        
        {/* Special case for Gateway of India or other landmarks */}
        {!isVideo && item.includes("Gateway") && (
          <div className="absolute bottom-8 left-8 text-white text-3xl font-semibold">
            Gateway of India
          </div>
        )}
      </div>
    </CarouselItem>
  );
}
