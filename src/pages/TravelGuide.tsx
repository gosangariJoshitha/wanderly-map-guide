
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CITIES } from "@/services/dataService";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, MapPin, Calendar, Globe } from "lucide-react";

const TravelGuide = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const regions = ["North", "South", "East", "West"];
  
  const filteredCities = selectedRegion 
    ? CITIES.filter(city => city.region === selectedRegion)
    : CITIES;
    
  const regionCities = regions.map(region => ({
    region,
    cities: CITIES.filter(city => city.region === region)
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-travel-blue-800 text-white py-16">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              India Travel Guide
            </h1>
            <p className="text-travel-blue-100 max-w-2xl mx-auto mb-8">
              Everything you need to know about traveling to India's most vibrant and historic cities.
            </p>
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
          
          <div className="grid grid-cols-1 gap-8">
            {(selectedRegion ? regionCities.filter(r => r.region === selectedRegion) : regionCities).map(({region, cities}) => (
              <div key={region} className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-travel-blue-800 text-white px-6 py-3">
                  <h2 className="text-xl font-semibold">{region} India</h2>
                </div>
                <div className="p-4">
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {cities.map(city => (
                      <div key={city.id} className="border rounded-md p-4 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-lg mb-2">{city.name}</h3>
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
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TravelGuide;
