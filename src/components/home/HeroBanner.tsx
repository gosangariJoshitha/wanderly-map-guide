
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";

export function HeroBanner() {
  const { isAuthenticated } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526711657229-e7e080ed7aa1?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1532664189809-02133fee698d?q=80&w=1600&auto=format&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay and fade effect */}
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
        </div>
      ))}
      
      <div className="container relative z-10 text-white text-center">
        <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          <span className="text-white">Discover India's</span> <span className="text-travel-teal-400">Breathtaking</span> Cities
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-100 animate-fade-in" style={{ animationDelay: "200ms" }}>
          Your ultimate guide to exploring the wonders, heritage, and hidden gems of India's most beautiful destinations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Link to="/cities" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="bg-travel-teal-500 hover:bg-travel-teal-600 text-white w-full sm:w-auto flex items-center gap-2"
            >
              Explore Cities
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
