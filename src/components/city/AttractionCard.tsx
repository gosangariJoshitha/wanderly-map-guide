
import { Attraction } from "@/types";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AttractionCardProps {
  attraction: Attraction;
}

export function AttractionCard({ attraction }: AttractionCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-44 overflow-hidden">
        <img
          src={attraction.imageUrl}
          alt={attraction.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 right-0 p-2">
          <div className="bg-white/90 rounded-md px-2 py-1 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">{attraction.rating}</span>
          </div>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{attraction.name}</CardTitle>
        <CardDescription className="text-xs">
          {attraction.category === "temple" ? "Religious Site" :
           attraction.category === "other" ? "Attraction" : "Tourist Spot"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm line-clamp-3">{attraction.description}</p>
      </CardContent>
      <CardFooter className="pt-1">
        <Link to={`/attraction/${attraction.id}`} className="w-full">
          <Button className="w-full" size="sm">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
