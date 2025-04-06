
import { City } from "@/types";
import { Calendar, Globe, Users, Tag, MapPin } from "lucide-react";

interface CityInfoBarProps {
  city: City;
}

export function CityInfoBar({ city }: CityInfoBarProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm mb-8">
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-full md:w-1/2 lg:w-1/5 mb-4 lg:mb-0">
          <div className="flex items-center gap-3 text-gray-700">
            <Calendar className="h-6 w-6 text-travel-teal-500 flex-shrink-0" />
            <div>
              <span className="block font-semibold text-lg text-travel-blue-600">Best Time to Visit</span>
              <span className="text-base">{city.bestTimeToVisit}</span>
            </div>
          </div>
        </div>
        <div className="px-2 w-full md:w-1/2 lg:w-1/5 mb-4 lg:mb-0">
          <div className="flex items-center gap-3 text-gray-700">
            <Globe className="h-6 w-6 text-travel-teal-500 flex-shrink-0" />
            <div>
              <span className="block font-semibold text-lg text-travel-blue-600">Languages</span>
              <span className="text-base">{city.languages.slice(0, 3).join(", ")}</span>
            </div>
          </div>
        </div>
        <div className="px-2 w-full md:w-1/2 lg:w-1/5 mb-4 lg:mb-0">
          <div className="flex items-center gap-3 text-gray-700">
            <Users className="h-6 w-6 text-travel-teal-500 flex-shrink-0" />
            <div>
              <span className="block font-semibold text-lg text-travel-blue-600">Population</span>
              <span className="text-base">{city.population}</span>
            </div>
          </div>
        </div>
        <div className="px-2 w-full md:w-1/2 lg:w-1/5 mb-4 lg:mb-0">
          <div className="flex items-center gap-3 text-gray-700">
            <Tag className="h-6 w-6 text-travel-teal-500 flex-shrink-0" />
            <div>
              <span className="block font-semibold text-lg text-travel-blue-600">Famous For</span>
              <span className="text-base">{city.famousFor?.slice(0, 2).join(", ")}</span>
            </div>
          </div>
        </div>
        <div className="px-2 w-full md:w-1/2 lg:w-1/5">
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="h-6 w-6 text-travel-teal-500 flex-shrink-0" />
            <div>
              <span className="block font-semibold text-lg text-travel-blue-600">Region</span>
              <span className="text-base">{city.region} India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
