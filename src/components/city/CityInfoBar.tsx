
import { City } from "@/types";
import { Calendar, Globe, Users, Tag, MapPin } from "lucide-react";

interface CityInfoBarProps {
  city: City;
}

export function CityInfoBar({ city }: CityInfoBarProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm mb-8">
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-full md:w-1/2 lg:w-1/5 mb-2 lg:mb-0">
          <div className="flex items-center gap-2 text-gray-700">
            <Calendar className="h-5 w-5 text-travel-teal-500 flex-shrink-0" />
            <div>
              <span className="block font-medium">Best Time to Visit</span>
              <span className="text-sm">{city.bestTimeToVisit}</span>
            </div>
          </div>
        </div>
        <div className="px-2 w-full md:w-1/2 lg:w-1/5 mb-2 lg:mb-0">
          <div className="flex items-center gap-2 text-gray-700">
            <Globe className="h-5 w-5 text-travel-teal-500 flex-shrink-0" />
            <div>
              <span className="block font-medium">Languages</span>
              <span className="text-sm">{city.languages.slice(0, 3).join(", ")}</span>
            </div>
          </div>
        </div>
        <div className="px-2 w-full md:w-1/2 lg:w-1/5 mb-2 lg:mb-0">
          <div className="flex items-center gap-2 text-gray-700">
            <Users className="h-5 w-5 text-travel-teal-500 flex-shrink-0" />
            <div>
              <span className="block font-medium">Population</span>
              <span className="text-sm">{city.population}</span>
            </div>
          </div>
        </div>
        <div className="px-2 w-full md:w-1/2 lg:w-1/5 mb-2 lg:mb-0">
          <div className="flex items-center gap-2 text-gray-700">
            <Tag className="h-5 w-5 text-travel-teal-500 flex-shrink-0" />
            <div>
              <span className="block font-medium">Famous For</span>
              <span className="text-sm">{city.famousFor?.slice(0, 2).join(", ")}</span>
            </div>
          </div>
        </div>
        <div className="px-2 w-full md:w-1/2 lg:w-1/5">
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="h-5 w-5 text-travel-teal-500 flex-shrink-0" />
            <div>
              <span className="block font-medium">Region</span>
              <span className="text-sm">{city.region} India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
