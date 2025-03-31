
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Attraction } from "@/types";
import { fetchAttractionsByCity } from "@/services/attractionService";
import { AttractionCard } from "./AttractionCard";
import { Skeleton } from "@/components/ui/skeleton";

interface AttractionsListProps {
  cityId: string;
}

export function AttractionsList({ cityId }: AttractionsListProps) {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAttractions = async () => {
      setLoading(true);
      try {
        const data = await fetchAttractionsByCity(cityId);
        setAttractions(data);
      } catch (error) {
        console.error("Failed to fetch attractions:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAttractions();
  }, [cityId]);

  const touristAttractions = attractions.filter(a => a.category === "tourist");
  const temples = attractions.filter(a => a.category === "temple");
  const otherAttractions = attractions.filter(a => a.category === "other");

  const renderSkeletons = (count: number) => {
    return Array(count)
      .fill(null)
      .map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="h-[180px] w-full rounded-lg" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-10 w-full" />
        </div>
      ));
  };

  return (
    <div className="container py-8">
      <h2 className="text-2xl font-poppins font-bold mb-6">Explore Attractions</h2>
      
      <Tabs defaultValue="tourist">
        <TabsList className="mb-6">
          <TabsTrigger value="tourist">Tourist Places</TabsTrigger>
          <TabsTrigger value="temple">Temples</TabsTrigger>
          <TabsTrigger value="other">Other Attractions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tourist">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderSkeletons(3)}
            </div>
          ) : touristAttractions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {touristAttractions.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          ) : (
            <div className="text-center p-10 text-gray-500">
              No tourist attractions found for this city yet.
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="temple">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderSkeletons(3)}
            </div>
          ) : temples.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {temples.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          ) : (
            <div className="text-center p-10 text-gray-500">
              No temples found for this city yet.
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="other">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderSkeletons(3)}
            </div>
          ) : otherAttractions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherAttractions.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          ) : (
            <div className="text-center p-10 text-gray-500">
              No other attractions found for this city yet.
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
