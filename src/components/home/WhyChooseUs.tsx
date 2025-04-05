
import { Check } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    "Authentic local experiences curated by experts",
    "Detailed guides with hidden gems and local favorites",
    "Personalized trip planning assistance",
    "Real traveler reviews and recommendations",
    "Regularly updated information on attractions",
    "Offline maps and guides for convenience"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-travel-blue-600">
              Why Choose CityWander?
            </h2>
            <p className="text-gray-600 mb-8">
              We're passionate about helping travelers discover the authentic heart of India's cities.
              With CityWander, you'll experience destinations like a local, finding hidden gems
              and creating unforgettable memories.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="bg-travel-blue-600 rounded-full p-1 text-white mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800" 
                  alt="Mumbai street" 
                  className="rounded-lg shadow-md aspect-[3/4] object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&q=80&w=800" 
                  alt="Taj Mahal" 
                  className="rounded-lg shadow-md aspect-[3/4] object-cover"
                />
              </div>
              <div className="space-y-4 md:space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800" 
                  alt="Delhi market" 
                  className="rounded-lg shadow-md aspect-[3/4] object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=800" 
                  alt="Varanasi ghats" 
                  className="rounded-lg shadow-md aspect-[3/4] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
