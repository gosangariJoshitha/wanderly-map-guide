
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bus, Car, Train, Plane, MapPin } from "lucide-react";

const Transportation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-travel-blue-800 text-white py-16">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Transportation in India
            </h1>
            <p className="text-travel-blue-100 max-w-2xl mx-auto">
              Your complete guide to getting around and exploring the cities of India
            </p>
          </div>
        </div>
        
        <div className="container py-10">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 h-auto">
              <TabsTrigger value="overview" className="py-3 flex flex-col items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger value="train" className="py-3 flex flex-col items-center gap-2">
                <Train className="h-5 w-5" />
                <span>Trains</span>
              </TabsTrigger>
              <TabsTrigger value="bus" className="py-3 flex flex-col items-center gap-2">
                <Bus className="h-5 w-5" />
                <span>Buses</span>
              </TabsTrigger>
              <TabsTrigger value="other" className="py-3 flex flex-col items-center gap-2">
                <Car className="h-5 w-5" />
                <span>Other</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-travel-blue-600 flex items-center gap-2">
                      <Plane className="h-5 w-5" />
                      Air Travel
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      India has excellent domestic air connectivity with major airlines like Air India, IndiGo, SpiceJet, and Vistara operating flights between all major cities. Most tourist destinations have airports nearby, making air travel a convenient option for covering long distances.
                    </p>
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Major Airports:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        <li>Indira Gandhi International Airport (Delhi)</li>
                        <li>Chhatrapati Shivaji Maharaj International Airport (Mumbai)</li>
                        <li>Kempegowda International Airport (Bangalore)</li>
                        <li>Chennai International Airport (Chennai)</li>
                        <li>Netaji Subhas Chandra Bose International Airport (Kolkata)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-travel-blue-600 flex items-center gap-2">
                      <Train className="h-5 w-5" />
                      Railway Network
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      The Indian Railways network is one of the largest in the world, connecting nearly every part of the country. It offers various classes of travel from luxury to economy and is an affordable way to experience India's landscape.
                    </p>
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Railway Classes:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li><span className="font-medium">1AC:</span> First Class AC - Most luxurious</li>
                        <li><span className="font-medium">2AC:</span> Two-Tier AC - Comfortable with privacy</li>
                        <li><span className="font-medium">3AC:</span> Three-Tier AC - Economical with AC</li>
                        <li><span className="font-medium">SL:</span> Sleeper Class - Non-AC sleeping berths</li>
                        <li><span className="font-medium">GEN:</span> General - Unreserved seating</li>
                      </ul>
                      <p className="mt-2 text-sm text-gray-700">Book tickets via <a href="https://www.irctc.co.in" target="_blank" rel="noopener noreferrer" className="text-travel-teal-500 hover:underline">IRCTC</a></p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-travel-blue-600 flex items-center gap-2">
                      <Bus className="h-5 w-5" />
                      Bus Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      State-run and private bus services connect cities, towns, and villages across India. Options range from basic to luxury buses with air conditioning, reclining seats, and entertainment systems.
                    </p>
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Bus Types:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li><span className="font-medium">Ordinary:</span> Basic service with frequent stops</li>
                        <li><span className="font-medium">Express:</span> Limited stops between major destinations</li>
                        <li><span className="font-medium">Deluxe:</span> Air-conditioned with comfortable seating</li>
                        <li><span className="font-medium">Volvo/Mercedes:</span> Luxury air-conditioned services</li>
                        <li><span className="font-medium">Sleeper:</span> Overnight buses with sleeping berths</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-travel-blue-600 flex items-center gap-2">
                      <Car className="h-5 w-5" />
                      Local Transportation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Within cities, multiple options exist for getting around, from modern metro systems to traditional cycle rickshaws.
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1">Metro Systems</h4>
                        <p className="text-sm text-gray-600">Delhi, Mumbai, Kolkata, Bangalore, Chennai, and other major cities have efficient metro rail networks - clean, fast, and affordable.</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1">Auto Rickshaws</h4>
                        <p className="text-sm text-gray-600">Three-wheeled vehicles available in most cities. Always ensure the driver uses the meter or negotiate the fare before your journey.</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1">Taxis and Ride-sharing</h4>
                        <p className="text-sm text-gray-600">App-based services like Uber and Ola are widely available in cities, along with traditional taxis.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="train" className="mt-6">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Indian Railways - The Lifeline of India</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    With over 12,000 passenger trains carrying more than 23 million passengers daily, Indian Railways is the world's fourth-largest railway network. It connects over 7,000 stations across the country.
                  </p>
                  
                  <div className="bg-travel-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-travel-blue-700">Popular Train Routes for Tourists</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="bg-travel-blue-100 text-travel-blue-800 p-2 rounded">
                          <Train className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Palace on Wheels</span>
                          <p className="text-sm text-gray-600">A luxury tourist train that takes you through Rajasthan's royal heritage.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <div className="bg-travel-blue-100 text-travel-blue-800 p-2 rounded">
                          <Train className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Darjeeling Himalayan Railway</span>
                          <p className="text-sm text-gray-600">UNESCO World Heritage "Toy Train" offering stunning Himalayan views.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <div className="bg-travel-blue-100 text-travel-blue-800 p-2 rounded">
                          <Train className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Golden Chariot</span>
                          <p className="text-sm text-gray-600">A luxury train exploring South India's cultural heritage.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <div className="bg-travel-blue-100 text-travel-blue-800 p-2 rounded">
                          <Train className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium">Konkan Railway</span>
                          <p className="text-sm text-gray-600">Travels along India's western coast, offering spectacular views of the Arabian Sea.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 border border-travel-blue-200 rounded-lg">
                    <h4 className="font-semibold mb-2">Booking Tips</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Book tickets well in advance (60-90 days) for long-distance trains</li>
                      <li>Consider Tatkal booking for last-minute travel</li>
                      <li>Foreign tourists can book through the Foreign Tourist Quota</li>
                      <li>Download the IRCTC app for convenient booking and tracking</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="bus" className="mt-6">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Bus Travel in India</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    India has an extensive network of buses operated by state transport corporations and private companies. They offer an economical way to travel between cities and reach destinations not connected by rail.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                        <div className="bg-orange-500 p-1.5 rounded text-white">
                          <Bus className="h-4 w-4" />
                        </div>
                        State Transport Services
                      </h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Government-operated bus services cover extensive routes at affordable prices.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        <li>KSRTC (Karnataka)</li>
                        <li>MSRTC (Maharashtra)</li>
                        <li>APSRTC (Andhra Pradesh)</li>
                        <li>TNSTC (Tamil Nadu)</li>
                        <li>HRTC (Himachal Pradesh)</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                        <div className="bg-orange-500 p-1.5 rounded text-white">
                          <Bus className="h-4 w-4" />
                        </div>
                        Private Operators
                      </h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Often offer more comfort and amenities than government services.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        <li>RedBus - Online booking platform</li>
                        <li>AbhiBus - Booking service</li>
                        <li>VRL Travels - Popular in South India</li>
                        <li>SRS Travels - Luxury bus operator</li>
                        <li>KPN Travels - Extensive routes in South</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-travel-blue-200 rounded-lg mt-4">
                    <h4 className="font-semibold mb-2">Tips for Bus Travel</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Book seats in advance during peak travel seasons</li>
                      <li>For overnight journeys, sleeper or semi-sleeper buses are recommended</li>
                      <li>Keep some snacks and water for longer journeys</li>
                      <li>Validate ratings and reviews before booking with private operators</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="other" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plane className="h-5 w-5" />
                      Domestic Flights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Flying is the fastest way to travel across India's vast distances. The country has over 100 operational airports with regular flights.
                    </p>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-medium">Major Domestic Airlines</h4>
                        <ul className="list-disc list-inside mt-1 text-sm text-gray-600">
                          <li>Air India (Full service)</li>
                          <li>IndiGo (Low cost)</li>
                          <li>SpiceJet (Low cost)</li>
                          <li>Vistara (Full service)</li>
                          <li>Air India Express (Low cost)</li>
                        </ul>
                      </div>
                      
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-medium">Booking Tips</h4>
                        <ul className="list-disc list-inside mt-1 text-sm text-gray-600">
                          <li>Book 1-2 months in advance for best rates</li>
                          <li>Compare prices on aggregator websites</li>
                          <li>Check baggage allowances carefully</li>
                          <li>Web check-in opens 48 hours before departure</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Car className="h-5 w-5" />
                      Taxis and Car Rentals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Taxis and rental cars offer flexibility for exploring at your own pace. Self-drive car rentals are increasingly popular in major cities.
                    </p>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-medium">App-Based Services</h4>
                        <ul className="list-disc list-inside mt-1 text-sm text-gray-600">
                          <li>Uber - Available in most major cities</li>
                          <li>Ola - India's leading ride-sharing service</li>
                          <li>Meru - Premium taxi service</li>
                          <li>Rapido - Two-wheeler taxi service</li>
                        </ul>
                      </div>
                      
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-medium">Car Rental Companies</h4>
                        <ul className="list-disc list-inside mt-1 text-sm text-gray-600">
                          <li>Zoomcar - Self-drive rentals</li>
                          <li>Revv - Self-drive car sharing</li>
                          <li>Avis - International car rental</li>
                          <li>Savaari - Intercity cab service</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Unique Transportation Experiences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-2">Cycle Rickshaws</h4>
                        <p className="text-sm text-gray-600">
                          A traditional three-wheeled pedal-powered vehicle, perfect for exploring narrow streets in cities like Varanasi and Old Delhi.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-2">Backwater Houseboats</h4>
                        <p className="text-sm text-gray-600">
                          In Kerala, converted rice barges now serve as floating hotels that cruise the scenic backwaters.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-2">Camel Safaris</h4>
                        <p className="text-sm text-gray-600">
                          In Rajasthan's Thar Desert, camel rides and multi-day safaris provide a unique way to experience the desert landscape.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Transportation;
