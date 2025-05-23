
import { MapPin, Clock, Star } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plan your perfect trip with our simple 3-step process
          </p>
        </div>

        <div className="flex flex-col space-y-20 max-w-3xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <MapPin className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">1. Discover</h3>
            <p className="text-gray-600 text-xl max-w-md mx-auto">
              Browse cities and explore the top attractions in each destination
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <Clock className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">2. Plan</h3>
            <p className="text-gray-600 text-xl max-w-md mx-auto">
              Create an itinerary based on your interests and time
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <Star className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">3. Experience</h3>
            <p className="text-gray-600 text-xl max-w-md mx-auto">
              Enjoy your trip and discover the beauty of India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
