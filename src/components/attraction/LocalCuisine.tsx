
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";
import { Cuisine } from "@/types";

interface LocalCuisineProps {
  attractionName: string;
  cuisine: Cuisine[] | undefined;
}

export function LocalCuisine({ attractionName, cuisine }: LocalCuisineProps) {
  if (!cuisine || cuisine.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-travel-blue-600">Local Cuisine</CardTitle>
        <CardDescription>
          Famous food options near {attractionName}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {cuisine.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <Utensils className="h-6 w-6 text-travel-teal-500 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <p className="text-gray-600">{item.description}</p>
                {item.price && (
                  <p className="text-sm font-medium text-travel-teal-600 mt-1">Price Range: {item.price}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
