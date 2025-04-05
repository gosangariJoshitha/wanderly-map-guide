
import { Check, Map, Hotel, Coffee, Users } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: <Map className="h-10 w-10 text-travel-teal-500" />,
      title: "Comprehensive City Guides",
      description: "Detailed information about cities across all regions of India, with insider tips and must-visit attractions."
    },
    {
      icon: <Hotel className="h-10 w-10 text-travel-teal-500" />,
      title: "Hotel Recommendations",
      description: "Find the best places to stay near major attractions, with options for all budgets and preferences."
    },
    {
      icon: <Coffee className="h-10 w-10 text-travel-teal-500" />,
      title: "Local Experiences",
      description: "Discover authentic local experiences, from food tours to cultural activities that go beyond the typical tourist spots."
    },
    {
      icon: <Users className="h-10 w-10 text-travel-teal-500" />,
      title: "Community Insights",
      description: "Read reviews and tips from fellow travelers who've visited these destinations recently."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-travel-blue-800">
            Why Choose CityWander
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're more than just a travel guide - we're your companion for discovering the best of India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-travel-blue-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-travel-blue-50 border border-travel-blue-100 rounded-lg p-6 md:p-8">
          <h3 className="text-2xl font-bold text-travel-blue-800 mb-4">The CityWander Advantage</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Categorized by regions for easier navigation",
              "Regularly updated information and seasonal tips",
              "Detailed local insights from native travelers",
              "Responsive customer support for your queries",
              "Personalized recommendations for your travel style",
              "Free travel resources and downloadable guides"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="mt-1 bg-travel-teal-500 rounded-full p-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
