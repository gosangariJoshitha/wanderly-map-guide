
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AttractionHeader } from "@/components/attraction/AttractionHeader";
import { NearbyHotels } from "@/components/attraction/NearbyHotels";
import { TransportOptions } from "@/components/attraction/TransportOptions";
import { ReviewSection } from "@/components/attraction/ReviewSection";
import { Attraction } from "@/types";
import { fetchAttractionById } from "@/services/attractionService";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AttractionPage = () => {
  const { attractionId } = useParams<{ attractionId: string }>();
  const [attraction, setAttraction] = useState<Attraction | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAttraction = async () => {
      if (!attractionId) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchAttractionById(attractionId);
        if (data) {
          setAttraction(data);
        } else {
          setError("Attraction not found");
        }
      } catch (err) {
        console.error("Failed to load attraction:", err);
        setError("Failed to load attraction data");
      } finally {
        setLoading(false);
      }
    };

    loadAttraction();
  }, [attractionId]);

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
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-12 w-full" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-[180px] w-full rounded-lg" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
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

  if (error || !attraction) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Attraction Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the attraction you're looking for. Please check the URL and try again.
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
        <AttractionHeader attraction={attraction} />
        
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About {attraction.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800">{attraction.description}</p>
                </CardContent>
              </Card>
            
              <Card>
                <CardHeader>
                  <CardTitle>Transportation Options</CardTitle>
                  <CardDescription>
                    How to reach {attraction.name} from different parts of the city
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TransportOptions transport={attraction.transportOptions} />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Reviews & Ratings</CardTitle>
                  <CardDescription>
                    Visitor experiences at {attraction.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ReviewSection reviews={attraction.reviews} />
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 rounded-md p-4 mb-4 text-sm">
                    <p>{attraction.location.address}</p>
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                    {/* Placeholder for a map - would use Google Maps in real app */}
                    <div className="h-full w-full flex items-center justify-center bg-travel-blue-100 text-travel-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Nearby Hotels</CardTitle>
                </CardHeader>
                <CardContent>
                  <NearbyHotels hotels={attraction.nearbyHotels} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AttractionPage;
