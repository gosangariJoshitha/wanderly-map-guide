
import { NearbyHotel } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface NearbyHotelsProps {
  hotels: NearbyHotel[] | undefined;
}

export function NearbyHotels({ hotels }: NearbyHotelsProps) {
  if (!hotels || hotels.length === 0) {
    return (
      <div className="text-center p-6 bg-muted/50 rounded-lg">
        <h3 className="font-medium text-lg">No hotels information available</h3>
        <p className="text-sm text-muted-foreground mt-1">Hotel data for this location is currently being updated.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {hotels.map((hotel) => (
        <Card key={hotel.id} className="overflow-hidden">
          <div className="h-40 overflow-hidden">
            <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-full object-cover" />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{hotel.name}</CardTitle>
            <CardDescription className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{hotel.rating}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>{hotel.distance}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-travel-blue-700">{hotel.price}</span>
              <span className="text-xs text-gray-500">per night</span>
            </div>
            <a href={hotel.bookingLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full flex items-center gap-2">
                <span>Book Now</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
