
import { Images } from "lucide-react";

export function EmptyGallery() {
  return (
    <div className="flex flex-col items-center justify-center h-96 bg-gray-100 rounded-lg">
      <Images className="h-12 w-12 text-gray-400 mb-4" />
      <p className="text-gray-500">No media available</p>
    </div>
  );
}
