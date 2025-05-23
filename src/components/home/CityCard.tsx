
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
  // Set a default rating of 4 if rating is undefined
  const rating = city.rating || 4;
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.01] border-0 rounded-xl">
      <div className="relative h-72 overflow-hidden">
        <img
          src={city.imageUrl}
          alt={city.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
          <div className="absolute bottom-8 left-6">
            <h3 className="text-4xl font-bold text-white">{city.name}</h3>
            <div className="flex mt-2">
              {[...Array(Math.floor(rating))].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
              {!Number.isInteger(rating) && (
                <span className="text-yellow-400 text-2xl">★</span>
              )}
              {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl opacity-40">★</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-xl text-gray-700">{city.description}</p>
        <div className="flex justify-between items-center mt-6">
          <p className="text-travel-teal-500 font-medium">{city.attractionsCount || 24} attractions</p>
          <Link to={`/city/${city.id}`} className="text-travel-teal-500 font-medium flex items-center">
            Login to Explore
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
