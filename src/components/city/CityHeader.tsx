
import { City } from "@/types";

interface CityHeaderProps {
  city: City;
}

export function CityHeader({ city }: CityHeaderProps) {
  return (
    <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
      {/* City image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${city.imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      
      {/* City info */}
      <div className="absolute bottom-0 left-0 right-0 container p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{city.name}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <span>{city.state}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-travel-teal-400"></span>
              <span>{city.attractionsCount} Attractions</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="bg-travel-blue-800/70 backdrop-blur-sm px-4 py-2 rounded-md flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-travel-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Travel Info</span>
            </div>
            <div className="bg-travel-blue-800/70 backdrop-blur-sm px-4 py-2 rounded-md flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-travel-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span className="text-sm font-medium">Share</span>
            </div>
          </div>
        </div>
        
        <p className="mt-4 text-gray-200 max-w-2xl line-clamp-2 md:line-clamp-none">{city.description}</p>
      </div>
    </div>
  );
}
