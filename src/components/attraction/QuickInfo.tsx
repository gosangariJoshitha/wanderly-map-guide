
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Clock, IndianRupee } from "lucide-react";
import { Attraction } from "@/types";

interface QuickInfoProps {
  attraction: Attraction;
}

export function QuickInfo({ attraction }: QuickInfoProps) {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-gray-900">Quick Info</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
            <MapPin className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">Location</h3>
            <p className="text-gray-600">{attraction.location.address}</p>
          </div>
        </div>

        {attraction.bestTimeToVisit && (
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <Calendar className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">Best Time to Visit</h3>
              <p className="text-gray-600">{attraction.bestTimeToVisit}</p>
            </div>
          </div>
        )}

        {attraction.timings && (
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <Clock className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">Timings</h3>
              <p className="text-gray-600">{attraction.timings}</p>
            </div>
          </div>
        )}

        {attraction.entryFee && (
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <IndianRupee className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">Entry Fee</h3>
              <p className="text-gray-600">{attraction.entryFee}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
