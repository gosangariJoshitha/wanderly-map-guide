import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AttractionHeader } from "@/components/attraction/AttractionHeader";
import { AttractionGallery } from "@/components/attraction/AttractionGallery";
import { NearbyHotels } from "@/components/attraction/NearbyHotels";
import { TransportOptions } from "@/components/attraction/TransportOptions";
import { ReviewSection } from "@/components/attraction/ReviewSection";
import { Attraction } from "@/types";
import { fetchAttractionById } from "@/services/attractionService";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Calendar, Utensils, Tag, Ticket, Share2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const AttractionPage = () => {
  const { attractionId } = useParams<{ attractionId: string }>();
  const [attraction, setAttraction] = useState<Attraction | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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

  const handleShare = async () => {
    if (!attraction) return;
    
    const shareData = {
      title: `${attraction.name} - CityWander`,
      text: `Check out ${attraction.name} on CityWander!`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast({
          title: "Shared successfully!"
        });
      } else {
        // Fallback for browsers that don't support the Web Share API
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied to clipboard!",
          description: "You can now share it with others."
        });
      }
    } catch (error) {
      console.error("Error sharing:", error);
      toast({
        title: "Sharing failed",
        description: "Could not share this page.",
        variant: "destructive"
      });
    }
  };

  const handleTravelInfo = () => {
    navigate('/travel-guide', { state: { cityId: attraction?.cityId } });
  };

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

  // Gallery images for the attraction
  const galleryImages = attraction ? [
    attraction.imageUrl,
    ...(attraction.galleryImages || []),
  ] : [];

  // Example videos - in a real app, these would come from the attraction data
  const galleryVideos = attraction?.videos || [
    "https://assets.mixkit.co/videos/preview/mixkit-tourist-looking-at-the-gateway-of-india-in-mumbai-42122-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {attraction && <AttractionHeader attraction={attraction} />}
        
        <div className="container py-6">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Button 
              variant="outline" 
              className="flex items-center gap-2" 
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 bg-travel-teal-50 text-travel-teal-600 hover:bg-travel-teal-100 border-travel-teal-200"
              onClick={handleTravelInfo}
            >
              <Info className="h-4 w-4" />
              Travel Guide
            </Button>
          </div>
          
          {/* Image Gallery */}
          {attraction && (
            <div className="mb-8">
              <AttractionGallery images={galleryImages} videos={galleryVideos} />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-travel-blue-600">About {attraction.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800">{attraction.description}</p>
                  
                  <div className="flex flex-wrap gap-5 mt-6">
                    {attraction.entryFee && (
                      <div className="flex items-center gap-3 text-gray-700">
                        <Ticket className="h-6 w-6 text-travel-teal-500" />
                        <div>
                          <span className="block font-semibold text-lg text-travel-blue-600">Entry Fee</span>
                          <span className="text-base">{attraction.entryFee}</span>
                        </div>
                      </div>
                    )}
                    
                    {attraction.timings && (
                      <div className="flex items-center gap-3 text-gray-700">
                        <Clock className="h-6 w-6 text-travel-teal-500" />
                        <div>
                          <span className="block font-semibold text-lg text-travel-blue-600">Timings</span>
                          <span className="text-base">{attraction.timings}</span>
                        </div>
                      </div>
                    )}
                    
                    {attraction.bestTimeToVisit && (
                      <div className="flex items-center gap-3 text-gray-700">
                        <Calendar className="h-6 w-6 text-travel-teal-500" />
                        <div>
                          <span className="block font-semibold text-lg text-travel-blue-600">Best Time to Visit</span>
                          <span className="text-base">{attraction.bestTimeToVisit}</span>
                        </div>
                      </div>
                    )}
                    
                    {attraction.popularFor && (
                      <div className="flex items-center gap-3 text-gray-700">
                        <Tag className="h-6 w-6 text-travel-teal-500" />
                        <div>
                          <span className="block font-semibold text-lg text-travel-blue-600">Popular For</span>
                          <span className="text-base">{attraction.popularFor}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {/* Local Cuisine Section */}
              {attraction.localCuisine && attraction.localCuisine.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-travel-blue-600">Local Cuisine</CardTitle>
                    <CardDescription>
                      Famous food options near {attraction.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {attraction.localCuisine.map((cuisine, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                          <Utensils className="h-6 w-6 text-travel-teal-500 mt-1" />
                          <div>
                            <h4 className="font-semibold text-lg">{cuisine.name}</h4>
                            <p className="text-gray-600">{cuisine.description}</p>
                            {cuisine.price && (
                              <p className="text-sm font-medium text-travel-teal-600 mt-1">Price Range: {cuisine.price}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-travel-blue-600">Transportation Options</CardTitle>
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
                  <CardTitle className="text-2xl text-travel-blue-600">Reviews & Ratings</CardTitle>
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
                  <CardTitle className="text-2xl text-travel-blue-600">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 rounded-md p-4 mb-4 text-sm">
                    <p>{attraction.location.address}</p>
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                    {/* Placeholder for a map - would use Google Maps in real app */}
                    <div className="h-full w-full flex items-center justify-center bg-travel-blue-100 text-travel-blue-600">
                      <MapPin className="h-12 w-12" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-travel-blue-600">Nearby Hotels</CardTitle>
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
