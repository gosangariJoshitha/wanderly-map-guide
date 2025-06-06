
import { useState, useEffect } from 'react';
import { ChevronRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Attraction } from '@/types';
import ATTRACTIONS from '@/data/attractions';

// City-specific hero images
const cityImages = {
  mumbai: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=800&auto=format&fit=crop",
  delhi: "https://images.unsplash.com/photo-1586974669615-0c33e98ca27f?q=80&w=800&auto=format&fit=crop",
  bengaluru: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800&auto=format&fit=crop",
  chennai: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
  kolkata: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800&auto=format&fit=crop",
  hyderabad: "https://images.unsplash.com/photo-1629734885899-4b79bce78b5e?q=80&w=800&auto=format&fit=crop"
};

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
        
        // Shuffle and take the top 4 attractions with better images
        const shuffled = allAttractions.sort(() => 0.5 - Math.random());
        const selectedAttractions = shuffled.slice(0, 4).map(attraction => {
          // Use city-specific images if available
          const cityImage = cityImages[attraction.cityId as keyof typeof cityImages];
          return {
            ...attraction,
            imageUrl: cityImage || attraction.imageUrl
          };
        });
        
        setAttractions(selectedAttractions);
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
          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <Skeleton className="h-80 w-full rounded-lg" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {attractions.map((attraction) => (
              <Link key={attraction.id} to={`/attraction/${attraction.id}`}>
                <Card className="overflow-hidden border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={attraction.imageUrl} 
                      alt={attraction.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                      <div className="absolute bottom-6 left-6">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4 text-white" />
                          <p className="text-white text-sm">
                            {attraction.location.address.split(',').slice(-2, -1)[0].trim()}
                          </p>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">{attraction.name}</h3>
                        <div className="flex gap-2">
                          <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                            {attraction.category === 'temple' ? 'Temple' : 
                             attraction.category === 'tourist' ? 'Monument' : 'Landmark'}
                          </Badge>
                          <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                            Tourist Places
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      {attraction.description.length > 200 
                        ? `${attraction.description.substring(0, 200)}...` 
                        : attraction.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
