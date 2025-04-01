
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Flag } from "lucide-react";
import { cn } from "@/lib/utils";

// Define a type for state data
interface StateData {
  id: string;
  name: string;
  symbol: "monument" | "temple" | "beach" | "mountain" | "food" | "culture";
  position: { x: number; y: number };
  cityId?: string; // Optional ID of main city in this state
}

export function IndiaPoliticalMap() {
  const [hoveredState, setHoveredState] = useState<StateData | null>(null);
  const navigate = useNavigate();
  
  // Data for Indian states with positions on the SVG map and their famous symbols
  const states: StateData[] = [
    { id: "delhi", name: "Delhi", symbol: "monument", position: { x: 290, y: 200 }, cityId: "delhi" },
    { id: "maharashtra", name: "Maharashtra", symbol: "culture", position: { x: 250, y: 400 }, cityId: "mumbai" },
    { id: "telangana", name: "Telangana", symbol: "monument", position: { x: 320, y: 420 }, cityId: "hyderabad" },
    { id: "karnataka", name: "Karnataka", symbol: "culture", position: { x: 280, y: 500 }, cityId: "banglore" },
    { id: "west-bengal", name: "West Bengal", symbol: "culture", position: { x: 460, y: 320 }, cityId: "kolkata" },
    { id: "rajasthan", name: "Rajasthan", symbol: "culture", position: { x: 220, y: 260 }, cityId: "jaipur" },
    { id: "tamil-nadu", name: "Tamil Nadu", symbol: "temple", position: { x: 320, y: 580 }, cityId: "chennai" },
    { id: "andhra-pradesh", name: "Andhra Pradesh", symbol: "temple", position: { x: 350, y: 470 }, cityId: "vijayawada" },
    { id: "uttar-pradesh", name: "Uttar Pradesh", symbol: "monument", position: { x: 350, y: 250 }, cityId: "varanasi" },
    { id: "gujarat", name: "Gujarat", symbol: "culture", position: { x: 180, y: 320 }, cityId: "ahmedabad" },
    { id: "jammu-kashmir", name: "Jammu & Kashmir", symbol: "mountain", position: { x: 290, y: 120 }, cityId: "srinagar" },
    { id: "punjab", name: "Punjab", symbol: "culture", position: { x: 250, y: 180 }, cityId: "amritsar" },
    { id: "jharkhand", name: "Jharkhand", symbol: "culture", position: { x: 400, y: 330 }, cityId: "ranchi" },
    { id: "kerala", name: "Kerala", symbol: "beach", position: { x: 280, y: 580 }, cityId: null },
    { id: "assam", name: "Assam", symbol: "culture", position: { x: 520, y: 270 }, cityId: null },
    { id: "bihar", name: "Bihar", symbol: "culture", position: { x: 400, y: 290 }, cityId: null },
    { id: "madhya-pradesh", name: "Madhya Pradesh", symbol: "monument", position: { x: 300, y: 330 }, cityId: null },
    { id: "odisha", name: "Odisha", symbol: "temple", position: { x: 400, y: 380 }, cityId: null },
    { id: "meghalaya", name: "Meghalaya", symbol: "mountain", position: { x: 520, y: 240 }, cityId: "meghalaya" }
  ];
  
  const handleStateClick = (state: StateData) => {
    if (state.cityId) {
      navigate(`/city/${state.cityId}`);
    }
  };
  
  // Function to render the appropriate symbol for each state
  const renderSymbol = (symbolType: StateData["symbol"], isHovered: boolean) => {
    const size = isHovered ? 26 : 22;
    const color = isHovered ? "#00d7c8" : "#0073f1";
    
    switch(symbolType) {
      case "monument":
        return <Flag size={size} color={color} fill={isHovered ? "#e6fbfa" : "transparent"} />;
      case "temple":
        return <MapPin size={size} color={color} fill={isHovered ? "#e6fbfa" : "transparent"} />;
      case "beach":
        return <MapPin size={size} color={color} fill={isHovered ? "#e6fbfa" : "transparent"} />;
      case "mountain":
        return <MapPin size={size} color={color} fill={isHovered ? "#e6fbfa" : "transparent"} />;
      case "food":
        return <MapPin size={size} color={color} fill={isHovered ? "#e6fbfa" : "transparent"} />;
      case "culture":
        return <MapPin size={size} color={color} fill={isHovered ? "#e6fbfa" : "transparent"} />;
      default:
        return <MapPin size={size} color={color} fill={isHovered ? "#e6fbfa" : "transparent"} />;
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[600px] my-8">
      <div className="w-full h-full">
        <svg 
          viewBox="0 0 700 700" 
          className="w-full h-full"
        >
          {/* Political map of India with state borders */}
          <path
            d="M220,120 C300,110 390,100 450,150 C510,190 550,220 580,280 
               C610,340 630,410 590,470 C550,530 530,550 510,580 
               C490,610 450,630 400,640 C350,650 320,630 280,610 
               C240,590 220,580 190,540 C160,500 130,460 150,410 
               C170,360 210,320 200,270 C190,220 170,160 220,120z"
            fill="#e6f2ff"
            stroke="#0073f1"
            strokeWidth="2"
            className="india-outline"
          />
          
          {/* Northern state borders */}
          <path d="M220,120 C250,150 290,140 320,160" fill="none" stroke="#0073f1" strokeWidth="1" />
          <path d="M320,160 C350,180 380,160 400,200" fill="none" stroke="#0073f1" strokeWidth="1" />
          <path d="M400,200 C420,240 470,220 510,250" fill="none" stroke="#0073f1" strokeWidth="1" />
          
          {/* Central state borders */}
          <path d="M200,270 C250,260 300,280 350,270" fill="none" stroke="#0073f1" strokeWidth="1" />
          <path d="M350,270 C400,260 450,280 500,270" fill="none" stroke="#0073f1" strokeWidth="1" />
          <path d="M200,350 C250,340 300,360 350,350" fill="none" stroke="#0073f1" strokeWidth="1" />
          <path d="M350,350 C400,340 450,360 500,350" fill="none" stroke="#0073f1" strokeWidth="1" />
          
          {/* Southern state borders */}
          <path d="M190,420 C240,410 290,430 340,420" fill="none" stroke="#0073f1" strokeWidth="1" />
          <path d="M340,420 C390,410 440,430 490,420" fill="none" stroke="#0073f1" strokeWidth="1" />
          <path d="M240,500 C290,490 340,510 390,500" fill="none" stroke="#0073f1" strokeWidth="1" />

          {/* State symbols */}
          {states.map((state) => (
            <g
              key={state.id}
              onClick={() => handleStateClick(state)}
              onMouseEnter={() => setHoveredState(state)}
              onMouseLeave={() => setHoveredState(null)}
              className={cn(
                "cursor-pointer transform transition-transform duration-300 hover:scale-110",
                state.cityId ? "opacity-100" : "opacity-80"
              )}
            >
              {/* Symbol position */}
              <foreignObject
                x={state.position.x - 15}
                y={state.position.y - 15}
                width="30"
                height="30"
                className="flex items-center justify-center"
              >
                <div className="flex items-center justify-center h-full">
                  {renderSymbol(state.symbol, hoveredState?.id === state.id)}
                </div>
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>
      
      {/* State info tooltip */}
      {hoveredState && (
        <div
          className="absolute bg-white p-3 rounded-lg shadow-lg z-10 w-52 border-2 border-travel-teal-500"
          style={{
            left: `${(hoveredState.position.x / 700) * 100}%`,
            top: `${(hoveredState.position.y / 700) * 100}%`,
            transform: "translate(-50%, -130%)"
          }}
        >
          <div className="font-poppins font-bold text-travel-blue-700">{hoveredState.name}</div>
          <div className="text-sm text-gray-600">
            Known for: {hoveredState.symbol.charAt(0).toUpperCase() + hoveredState.symbol.slice(1)}
          </div>
          {hoveredState.cityId && (
            <div className="text-xs font-semibold text-travel-teal-600 mt-1">
              Click to explore
            </div>
          )}
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
