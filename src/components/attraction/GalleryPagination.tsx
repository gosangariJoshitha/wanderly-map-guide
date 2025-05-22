
interface GalleryPaginationProps {
  items: string[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export function GalleryPagination({ items, currentIndex, onSelect }: GalleryPaginationProps) {
  if (!items.length) return null;
  
  return (
    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1 p-2">
      {items.map((_, index) => (
        <button
          key={index}
          className={`h-3 rounded-full transition-all ${
            currentIndex === index ? "w-10 bg-white" : "w-3 bg-white/50"
          }`}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
