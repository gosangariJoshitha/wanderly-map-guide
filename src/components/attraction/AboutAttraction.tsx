
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket, Clock, Calendar, Tag } from "lucide-react";
import { Attraction } from "@/types";

interface AboutAttractionProps {
  attraction: Attraction;
}

export function AboutAttraction({ attraction }: AboutAttractionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-travel-blue-600">About {attraction.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800">{attraction.description}</p>
        
        <div className="flex flex-wrap gap-5 mt-6">
          {attraction.entryFee && (
            <div className="flex items-center gap-3 text-gray-700">
              <Ticket className="h-6 w-6 text-travel-teal-500" />
              <div>
                <span className="block font-semibold text-lg text-travel-blue-600">Entry Fee</span>
                <span className="text-base">{attraction.entryFee}</span>
              </div>
            </div>
          )}
          
          {attraction.timings && (
            <div className="flex items-center gap-3 text-gray-700">
              <Clock className="h-6 w-6 text-travel-teal-500" />
              <div>
                <span className="block font-semibold text-lg text-travel-blue-600">Timings</span>
                <span className="text-base">{attraction.timings}</span>
              </div>
            </div>
          )}
          
          {attraction.bestTimeToVisit && (
            <div className="flex items-center gap-3 text-gray-700">
              <Calendar className="h-6 w-6 text-travel-teal-500" />
              <div>
                <span className="block font-semibold text-lg text-travel-blue-600">Best Time to Visit</span>
                <span className="text-base">{attraction.bestTimeToVisit}</span>
              </div>
            </div>
          )}
          
          {attraction.popularFor && (
            <div className="flex items-center gap-3 text-gray-700">
              <Tag className="h-6 w-6 text-travel-teal-500" />
              <div>
                <span className="block font-semibold text-lg text-travel-blue-600">Popular For</span>
                <span className="text-base">{attraction.popularFor}</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
