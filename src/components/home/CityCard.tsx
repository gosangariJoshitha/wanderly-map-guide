
import { City } from "@/types";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronRight } from "lucide-react";

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={city.imageUrl}
          alt={city.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/70 to-transparent">
          <Badge variant="outline" className="bg-white/90 text-travel-blue-700">
            {city.attractionsCount} Attractions
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2 text-white">
          {city.name}
        </CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" />
          {city.state}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm line-clamp-3">{city.description}</p>
      </CardContent>
      <CardFooter className="pt-1">
        <Link to={`/city/${city.id}`} className="w-full">
          <Button 
            className="w-full bg-travel-teal-500 text-white hover:bg-travel-teal-600 group flex items-center justify-center gap-2" 
            variant="default"
          >
            Explore
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
