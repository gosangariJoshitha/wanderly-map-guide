
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Attraction } from '@/types';
import ATTRACTIONS from '@/data/attractions';

export function PopularPlaces() {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get a few popular attractions from across different cities
    const fetchPopularAttractions = () => {
      try {
        // Combine attractions from different cities and filter for variety
        const allAttractions: Attraction[] = [];
        
        // Get 1-2 attractions from each city
        Object.values(ATTRACTIONS).forEach(cityAttractions => {
          if (cityAttractions.length > 0) {
            // Sort by rating to get the highest-rated attractions
            const sortedAttractions = [...cityAttractions].sort((a, b) => b.rating - a.rating);
            // Add 1-2 top attractions from this city
            allAttractions.push(...sortedAttractions.slice(0, 2));
          }
        });
        
        // Shuffle and take the top 4 attractions
        const shuffled = allAttractions.sort(() => 0.5 - Math.random());
        setAttractions(shuffled.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popular attractions:", error);
        setLoading(false);
      }
    };

    fetchPopularAttractions();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Popular Places to Visit in India</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover India's most iconic and beloved destinations that showcase the country's rich heritage and natural beauty
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <Skeleton className="h-64 w-full rounded-lg" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.map((attraction) => (
              <Card key={attraction.id} className="overflow-hidden border-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={attraction.imageUrl} 
                    alt={attraction.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-3xl font-bold text-white">{attraction.name}</h3>
                      <p className="text-white/90 flex items-center mt-1">
                        {attraction.location.address.split(',').slice(-2).join(', ')}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                          {attraction.category === 'temple' ? 'Temple' : 
                           attraction.category === 'tourist' ? 'Tourist Place' : 'Landmark'}
                        </Badge>
                        {attraction.category === 'tourist' && (
                          <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                            Tourist Places
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    {attraction.description.length > 150 
                      ? `${attraction.description.substring(0, 150)}...` 
                      : attraction.description}
                  </p>
                  
                  <Link to={`/attraction/${attraction.id}`}>
                    <Button variant="outline" className="mt-4 w-full border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500">
                      View Details <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
        
        <div className="flex justify-center mt-10">
          <Link to="/cities">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 text-base rounded-full flex items-center">
              View All Cities
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
