
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CityHeader } from "@/components/city/CityHeader";
import { AttractionsList } from "@/components/city/AttractionsList";
import { City } from "@/types";
import { fetchCityById } from "@/services/dataService";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Globe, Users, Tag, MapPin } from "lucide-react";

const CityPage = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const [city, setCity] = useState<City | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCity = async () => {
      if (!cityId) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchCityById(cityId);
        if (data) {
          setCity(data);
        } else {
          setError("City not found");
        }
      } catch (err) {
        console.error("Failed to load city:", err);
        setError("Failed to load city data");
      } finally {
        setLoading(false);
      }
    };

    loadCity();
  }, [cityId]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Skeleton className="h-80 w-full" />
          <div className="container py-8">
            <Skeleton className="h-10 w-1/3 mb-6" />
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-[180px] w-full rounded-lg" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !city) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the city you're looking for. Please check the URL and try again.
          </p>
          <a href="/" className="text-travel-blue-600 hover:underline">
            Back to Homepage
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <CityHeader city={city} />
        
        <div className="container py-6">
          <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm mb-8">
            <p className="text-lg text-gray-800 mb-6">{city.description}</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-4 text-sm mt-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="h-5 w-5 text-travel-teal-500" />
                <div>
                  <span className="block font-medium">Best Time to Visit</span>
                  <span>{city.bestTimeToVisit}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Globe className="h-5 w-5 text-travel-teal-500" />
                <div>
                  <span className="block font-medium">Languages</span>
                  <span>{city.languages.slice(0, 3).join(", ")}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="h-5 w-5 text-travel-teal-500" />
                <div>
                  <span className="block font-medium">Population</span>
                  <span>{city.population}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Tag className="h-5 w-5 text-travel-teal-500" />
                <div>
                  <span className="block font-medium">Famous For</span>
                  <span>{city.famousFor?.slice(0, 2).join(", ")}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-5 w-5 text-travel-teal-500" />
                <div>
                  <span className="block font-medium">Region</span>
                  <span>{city.region} India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <AttractionsList cityId={cityId as string} />
      </main>
      
      <Footer />
    </div>
  );
};

export default CityPage;
