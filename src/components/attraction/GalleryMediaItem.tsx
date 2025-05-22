
import { CarouselItem } from "@/components/ui/carousel";

interface GalleryMediaItemProps {
  item: string;
  index: number;
  isVideo: boolean;
}

export function GalleryMediaItem({ item, index }: GalleryMediaItemProps) {
  return (
    <CarouselItem key={`media-${index}`}>
      <div className="aspect-[16/9] w-full lg:h-[700px] h-96 overflow-hidden rounded-xl relative">
        <img
          src={item}
          alt={`Gallery item ${index + 1}`}
          className="h-full w-full object-cover"
        />
        
        {/* Special case for Gateway of India or other landmarks */}
        {item.includes("Gateway") && (
          <div className="absolute bottom-8 left-8 text-white text-3xl font-semibold">
            Gateway of India
          </div>
        )}
      </div>
    </CarouselItem>
  );
}
