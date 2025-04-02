
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CityCard } from "@/components/home/CityCard";
import { CityPagination } from "@/components/CityPagination";
import { City } from "@/types";
import { fetchCities } from "@/services/dataService";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";

const Cities = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const citiesPerPage = 6;

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
    if (searchQuery.trim() === "") {
      setFilteredCities(cities);
    } else {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filtered = cities.filter(
        city =>
          city.name.toLowerCase().includes(lowercaseQuery) ||
          city.state.toLowerCase().includes(lowercaseQuery) ||
          city.description.toLowerCase().includes(lowercaseQuery)
      );
      setFilteredCities(filtered);
    }
    // Reset to first page when search query changes
    setCurrentPage(1);
  }, [searchQuery, cities]);

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
        
        <div className="container py-10">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentCities.map((city) => (
                      <CityCard key={city.id} city={city} />
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
