
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/home/HeroBanner";
import { FeaturedCitiesCarousel } from "@/components/home/FeaturedCitiesCarousel";
import { Button } from "@/components/ui/button";
import { City } from "@/types";
import { Link } from "react-router-dom";
import { fetchCities } from "@/services/dataService";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRight } from "lucide-react";
import { HowItWorks } from "@/components/home/HowItWorks";

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
        
        {/* How It Works Section (replacing Why Choose CityWander) */}
        <HowItWorks />
        
        {/* Featured Cities Section */}
        <section className="bg-gray-50 py-10 md:py-16">
          <div className="container">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-3 text-black">
                Featured Cities
              </h2>
              <p className="text-black max-w-2xl mx-auto">
                From historic landmarks to modern metropolises, explore our handpicked selection of must-visit cities across India.
              </p>
            </div>
            
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <Skeleton className="h-80 w-full rounded-lg" />
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <FeaturedCitiesCarousel cities={cities.slice(0, 6)} />
                </div>
                <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
                  <Link to="/cities">
                    <Button 
                      variant="outline" 
                      className="bg-travel-teal-500 hover:bg-travel-teal-600 text-white border-none group flex items-center gap-2"
                    >
                      View All Cities
                      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default Index;
