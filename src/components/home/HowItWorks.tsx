
import { MapPin, Clock, Star } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black mb-3">How It Works</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Plan your perfect trip with our simple 3-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-travel-teal-500" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">1. Discover</h3>
            <p className="text-black text-sm">
              Browse cities and explore the top attractions in each destination
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-travel-teal-500" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">2. Plan</h3>
            <p className="text-black text-sm">
              Create an itinerary based on your interests and time
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-travel-teal-500" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">3. Experience</h3>
            <p className="text-black text-sm">
              Enjoy your trip and discover the beauty of India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
