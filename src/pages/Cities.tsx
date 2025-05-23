
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CityPagination } from "@/components/CityPagination";
import { City } from "@/types";
import { fetchCities } from "@/services/dataService";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, MapPin, Calendar, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Cities = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const citiesPerPage = 6;
  const navigate = useNavigate();
  
  const regions = ["North", "South", "East", "West"];

  useEffect(() => {
    const loadCities = async () => {
      try {
        const data = await fetchCities();
        setCities(data);
        setFilteredCities(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load cities:", error);
        setLoading(false);
      }
    };

    loadCities();
  }, []);

  useEffect(() => {
    let filtered = cities;
    
    // Filter by region if selected
    if (selectedRegion) {
      filtered = filtered.filter(city => city.region === selectedRegion);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const lowercaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        city =>
          city.name.toLowerCase().includes(lowercaseQuery) ||
          city.state.toLowerCase().includes(lowercaseQuery) ||
          city.description.toLowerCase().includes(lowercaseQuery)
      );
    }
    
    setFilteredCities(filtered);
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [searchQuery, cities, selectedRegion]);

  // Get current page cities
  const indexOfLastCity = currentPage * citiesPerPage;
  const indexOfFirstCity = indexOfLastCity - citiesPerPage;
  const currentCities = filteredCities.slice(indexOfFirstCity, indexOfLastCity);
  const totalPages = Math.ceil(filteredCities.length / citiesPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-travel-blue-800 text-white py-16">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Explore Indian Cities
            </h1>
            <p className="text-travel-blue-100 max-w-2xl mx-auto mb-8">
              Discover the beauty, culture, and attractions of India's most vibrant and historic cities.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search cities by name or state..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="container py-8">
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            <Button 
              variant={selectedRegion === null ? "default" : "outline"}
              onClick={() => setSelectedRegion(null)}
              className={selectedRegion === null ? "bg-travel-teal-500 hover:bg-travel-teal-600" : ""}
            >
              All Regions
            </Button>
            {regions.map(region => (
              <Button 
                key={region}
                variant={selectedRegion === region ? "default" : "outline"}
                onClick={() => setSelectedRegion(region)}
                className={selectedRegion === region ? "bg-travel-teal-500 hover:bg-travel-teal-600" : ""}
              >
                {region} India
              </Button>
            ))}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(citiesPerPage)].map((_, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <Skeleton className="h-48 w-full rounded-lg" />
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredCities.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentCities.map((city) => (
                      <Card key={city.id} className="overflow-hidden border rounded-md shadow hover:shadow-md transition-shadow">
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={city.imageUrl || "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"}
                            alt={city.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-lg mb-2 text-black">{city.name}</h3>
                          <div className="text-sm text-gray-600 space-y-2">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-travel-teal-500" />
                              <span>{city.state}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-travel-teal-500" />
                              <span>Best time: {city.bestTimeToVisit}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Globe className="h-4 w-4 text-travel-teal-500" />
                              <span>Languages: {city.languages.slice(0, 2).join(", ")}</span>
                            </div>
                          </div>
                          <div className="mt-3">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full text-travel-blue-600 border-travel-blue-200 hover:border-travel-blue-400 hover:bg-travel-blue-50"
                              onClick={() => navigate(`/city/${city.id}`)}
                            >
                              View Details
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    <CityPagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={paginate}
                    />
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <h2 className="text-2xl font-medium mb-2">No cities found</h2>
                  <p className="text-gray-600">
                    Try adjusting your search query to find what you're looking for.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cities;
