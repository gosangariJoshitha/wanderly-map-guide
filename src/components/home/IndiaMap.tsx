
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { City } from "@/types";

interface IndiaMapProps {
  cities: City[];
}

export function IndiaMap({ cities }: IndiaMapProps) {
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // India's map bounds for proper positioning
  const indiaBounds = {
    minLat: 8.4,
    maxLat: 37.6,
    minLng: 68.7,
    maxLng: 97.25,
  };

  // Convert geographic coordinates to SVG coordinates
  const mapWidth = 800;
  const mapHeight = 800;
  
  const geoToSvgX = (lng: number) => {
    return ((lng - indiaBounds.minLng) / (indiaBounds.maxLng - indiaBounds.minLng)) * mapWidth;
  };
  
  const geoToSvgY = (lat: number) => {
    return mapHeight - ((lat - indiaBounds.minLat) / (indiaBounds.maxLat - indiaBounds.minLat)) * mapHeight;
  };
  
  const handleCityClick = (cityId: string) => {
    navigate(`/city/${cityId}`);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[600px] my-8">
      <div ref={mapContainerRef} className="w-full h-full">
        <svg
          viewBox={`0 0 ${mapWidth} ${mapHeight}`}
          style={{ width: "100%", height: "100%" }}
          className="india-map"
        >
          {/* Simplified India map outline */}
          <path
            d="M400,120 C500,150 650,200 700,300 C750,400 750,500 700,600 C650,700 550,750 450,750 C350,750 250,700 175,650 C100,600 50,500 100,400 C150,300 200,200 300,150 C350,125 380,110 400,120 Z"
            fill="#e6f2ff"
            stroke="#0073f1"
            strokeWidth="2"
            className="india-outline"
          />
          
          {/* City markers */}
          {cities.map((city) => (
            <g
              key={city.id}
              onClick={() => handleCityClick(city.id)}
              onMouseEnter={() => setHoveredCity(city)}
              onMouseLeave={() => setHoveredCity(null)}
              className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
            >
              <circle
                cx={geoToSvgX(city.coordinates.lng)}
                cy={geoToSvgY(city.coordinates.lat)}
                r={city === hoveredCity ? 15 : 10}
                fill={city === hoveredCity ? "#00d7c8" : "#0073f1"}
                className="drop-shadow-md transition-all duration-300"
              />
            </g>
          ))}
        </svg>
      </div>
      
      {/* City info tooltip */}
      {hoveredCity && (
        <div
          className="absolute bg-white p-3 rounded-lg shadow-lg z-10 w-52 border-2 border-travel-teal-500"
          style={{
            left: `${geoToSvgX(hoveredCity.coordinates.lng) / mapWidth * 100}%`,
            top: `${geoToSvgY(hoveredCity.coordinates.lat) / mapHeight * 100}%`,
            transform: "translate(-50%, -130%)"
          }}
        >
          <div className="font-poppins font-bold text-travel-blue-700">{hoveredCity.name}</div>
          <div className="text-sm text-gray-600">{hoveredCity.state}</div>
          <div className="text-xs mt-1">{hoveredCity.attractionsCount} attractions</div>
          <div className="text-xs font-semibold text-travel-teal-600 mt-1">Click to explore</div>
          {/* Triangle pointer */}
          <div
            className="absolute w-4 h-4 bg-white border-r-2 border-b-2 border-travel-teal-500 transform rotate-45"
            style={{
              bottom: "-8px",
              left: "calc(50% - 8px)"
            }}
          />
        </div>
      )}
    </div>
  );
}
