
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroBanner() {
  return (
    <div className="relative h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-travel-blue-900/80 via-travel-blue-800/70 to-travel-blue-900/80"></div>
      </div>
      
      <div className="container relative z-10 text-white text-center">
        <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Discover India's <span className="text-travel-teal-400">Breathtaking</span> Cities
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-100">
          Your ultimate guide to exploring the wonders, heritage, and hidden gems of India's most beautiful destinations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/cities">
            <Button size="lg" className="bg-travel-teal-500 hover:bg-travel-teal-600 text-white">
              Explore Cities
            </Button>
          </Link>
          <Link to="/register">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-travel-blue-900">
              Join CityWander
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
