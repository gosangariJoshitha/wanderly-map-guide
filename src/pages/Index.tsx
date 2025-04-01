
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/home/HeroBanner";
import { IndiaPoliticalMap } from "@/components/home/IndiaPoliticalMap";
import { CityCard } from "@/components/home/CityCard";
import { City } from "@/types";
import { fetchCities } from "@/services/dataService";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCities = async () => {
      try {
        const data = await fetchCities();
        setCities(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load cities:", error);
        setLoading(false);
      }
    };

    loadCities();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <HeroBanner />
        
        {/* Political Map Section */}
        <section className="bg-white py-10 md:py-16">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-3 bg-gradient-to-r from-travel-blue-500 via-purple-500 to-travel-teal-500 text-transparent bg-clip-text">
                Map of India
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                View the political map of India displaying all states and union territories.
              </p>
            </div>
            
            <div className="flex justify-center">
              {loading ? (
                <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-lg"></div>
              ) : (
                <IndiaPoliticalMap />
              )}
            </div>
          </div>
        </section>
        
        {/* Featured Cities Section */}
        <section className="bg-gray-50 py-10 md:py-16">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-3">
                Featured Cities
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From historic landmarks to modern metropolises, explore our handpicked selection of must-visit cities across India.
              </p>
            </div>
            
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cities.slice(0, 8).map((city) => (
                  <CityCard key={city.id} city={city} />
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-travel-blue-900 text-white py-16">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-travel-teal-200 max-w-2xl mx-auto mb-8">
              Sign up for free and get access to personalized recommendations, save your favorite places, and connect with fellow travelers.
            </p>
            <a 
              href="/register" 
              className="inline-flex items-center justify-center bg-travel-teal-500 hover:bg-travel-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Join CityWander Today
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default Index;
