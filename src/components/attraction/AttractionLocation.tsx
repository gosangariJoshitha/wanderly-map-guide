
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface AttractionLocationProps {
  address: string;
}

export function AttractionLocation({ address }: AttractionLocationProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-travel-blue-600">Location</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-100 rounded-md p-4 mb-4 text-sm">
          <p>{address}</p>
        </div>
        <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
          {/* Placeholder for a map - would use Google Maps in real app */}
          <div className="h-full w-full flex items-center justify-center bg-travel-blue-100 text-travel-blue-600">
            <MapPin className="h-12 w-12" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
