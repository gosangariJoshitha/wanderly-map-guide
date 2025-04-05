
import { MapPin, Hotel, Calendar, Building } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Why Choose CityWander?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your comprehensive guide to exploring India's incredible destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <MapPin className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Discover Cities</h3>
            <p className="text-gray-600 text-center">
              Explore detailed guides for India's most popular cities and hidden gems
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Building className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Iconic Attractions</h3>
            <p className="text-gray-600 text-center">
              Learn about famous landmarks, temples, and cultural experiences
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Calendar className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Travel Planning</h3>
            <p className="text-gray-600 text-center">
              Get insights on the best times to visit and what to expect
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Hotel className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Accommodation</h3>
            <p className="text-gray-600 text-center">
              Find the perfect places to stay near your favorite attractions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
