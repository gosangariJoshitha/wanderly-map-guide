
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/home/HeroBanner";
import { PopularPlaces } from "@/components/home/PopularPlaces";
import { Button } from "@/components/ui/button";
import { City } from "@/types";
import { Link } from "react-router-dom";
import { fetchCities } from "@/services/dataService";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ChevronRight } from "lucide-react";

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
        
        {/* How It Works Section */}
        <HowItWorks />
        
        {/* Popular Places Section */}
        <PopularPlaces />
        
        {/* View All Cities Button */}
        <div className="flex justify-center mt-10 mb-16">
          <Link to="/cities">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 text-base rounded-full flex items-center">
              View All Cities
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default Index;
