import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AttractionHeader } from "@/components/attraction/AttractionHeader";
import { AttractionGallery } from "@/components/attraction/AttractionGallery";
import { NearbyHotels } from "@/components/attraction/NearbyHotels";
import { Attraction } from "@/types";
import { fetchAttractionById } from "@/services/attractionService";
import { AttractionSkeleton } from "@/components/attraction/AttractionSkeleton";
import { AttractionNotFound } from "@/components/attraction/AttractionNotFound";
import { AttractionActions } from "@/components/attraction/AttractionActions";
import { AboutAttraction } from "@/components/attraction/AboutAttraction";
import { LocalCuisine } from "@/components/attraction/LocalCuisine";
import { TransportAndReviews } from "@/components/attraction/TransportAndReviews";
import { AttractionLocation } from "@/components/attraction/AttractionLocation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
    return <AttractionSkeleton />;
  }

  if (error || !attraction) {
    return <AttractionNotFound />;
  }

  // Gallery images for the attraction
  const galleryImages = attraction ? [
    attraction.imageUrl,
    ...(attraction.galleryImages || []),
  ] : [];

  // Example videos - in a real app, these would come from the attraction data
  const galleryVideos = attraction.videos || [
    "https://assets.mixkit.co/videos/preview/mixkit-tourist-looking-at-the-gateway-of-india-in-mumbai-42122-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <AttractionHeader attraction={attraction} />
        
        <div className="container py-6">
          {/* Action Buttons */}
          <AttractionActions attractionName={attraction.name} cityId={attraction.cityId} />
          
          {/* Image Gallery */}
          <div className="mb-8">
            <AttractionGallery images={galleryImages} videos={galleryVideos} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <AboutAttraction attraction={attraction} />
              <LocalCuisine attractionName={attraction.name} cuisine={attraction.localCuisine} />
              <TransportAndReviews 
                attractionName={attraction.name} 
                transport={attraction.transportOptions} 
                reviews={attraction.reviews} 
              />
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <AttractionLocation address={attraction.location.address} />
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
