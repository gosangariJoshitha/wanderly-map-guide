
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
                <FeaturedCitiesCarousel cities={cities.slice(0, 6)} />
                <div className="text-center mt-8">
                  <Link to="/cities">
                    <Button variant="outline" className="bg-travel-teal-500 hover:bg-travel-teal-600 text-white border-none">
                      View All Cities
                    </Button>
                  </Link>
                </div>
              </>
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
