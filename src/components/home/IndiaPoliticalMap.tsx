
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Flag, Music, Coffee, Pizza, Palmtree, PartyPopper, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Define a type for state data
interface StateData {
  id: string;
  name: string;
  symbol: "monument" | "temple" | "beach" | "mountain" | "food" | "culture" | "party" | "music";
  position: { x: number; y: number };
  color: string;
  cityId?: string; // Optional ID of main city in this state
}

export function IndiaPoliticalMap() {
  const [hoveredState, setHoveredState] = useState<StateData | null>(null);
  const navigate = useNavigate();
  
  // Data for Indian states with positions on the SVG map and their famous symbols
  // Now with bold colors for the "shameless" map
  const states: StateData[] = [
    { id: "delhi", name: "Delhi", symbol: "monument", position: { x: 290, y: 200 }, cityId: "delhi", color: "#D946EF" },
    { id: "maharashtra", name: "Maharashtra", symbol: "culture", position: { x: 250, y: 400 }, cityId: "mumbai", color: "#8B5CF6" },
    { id: "telangana", name: "Telangana", symbol: "party", position: { x: 320, y: 420 }, cityId: "hyderabad", color: "#F59E0B" },
    { id: "karnataka", name: "Karnataka", symbol: "culture", position: { x: 280, y: 500 }, cityId: "banglore", color: "#10B981" },
    { id: "west-bengal", name: "West Bengal", symbol: "culture", position: { x: 460, y: 320 }, cityId: "kolkata", color: "#EC4899" },
    { id: "rajasthan", name: "Rajasthan", symbol: "party", position: { x: 220, y: 260 }, cityId: "jaipur", color: "#F97316" },
    { id: "tamil-nadu", name: "Tamil Nadu", symbol: "temple", position: { x: 320, y: 580 }, cityId: "chennai", color: "#1EAEDB" },
    { id: "andhra-pradesh", name: "Andhra Pradesh", symbol: "temple", position: { x: 350, y: 470 }, cityId: "vijayawada", color: "#0EA5E9" },
    { id: "uttar-pradesh", name: "Uttar Pradesh", symbol: "food", position: { x: 350, y: 250 }, cityId: "varanasi", color: "#6366F1" },
    { id: "gujarat", name: "Gujarat", symbol: "food", position: { x: 180, y: 320 }, cityId: "ahmedabad", color: "#EF4444" },
    { id: "jammu-kashmir", name: "Jammu & Kashmir", symbol: "mountain", position: { x: 290, y: 120 }, cityId: "srinagar", color: "#3B82F6" },
    { id: "punjab", name: "Punjab", symbol: "music", position: { x: 250, y: 180 }, cityId: "amritsar", color: "#14B8A6" },
    { id: "jharkhand", name: "Jharkhand", symbol: "party", position: { x: 400, y: 330 }, cityId: "ranchi", color: "#A855F7" },
    { id: "kerala", name: "Kerala", symbol: "beach", position: { x: 280, y: 580 }, cityId: null, color: "#22C55E" },
    { id: "assam", name: "Assam", symbol: "culture", position: { x: 520, y: 270 }, cityId: null, color: "#F43F5E" },
    { id: "bihar", name: "Bihar", symbol: "food", position: { x: 400, y: 290 }, cityId: null, color: "#0284C7" },
    { id: "madhya-pradesh", name: "Madhya Pradesh", symbol: "monument", position: { x: 300, y: 330 }, cityId: null, color: "#8B5CF6" },
    { id: "odisha", name: "Odisha", symbol: "temple", position: { x: 400, y: 380 }, cityId: null, color: "#F59E0B" },
    { id: "meghalaya", name: "Meghalaya", symbol: "mountain", position: { x: 520, y: 240 }, cityId: "meghalaya", color: "#06B6D4" }
  ];
  
  const handleStateClick = (state: StateData) => {
    if (state.cityId) {
      navigate(`/city/${state.cityId}`);
    }
  };
  
  // Function to render the appropriate symbol for each state
  const renderSymbol = (symbolType: StateData["symbol"], isHovered: boolean, color: string) => {
    const size = isHovered ? 30 : 24;
    
    switch(symbolType) {
      case "monument":
        return <Flag size={size} color="white" fill={color} />;
      case "temple":
        return <MapPin size={size} color="white" fill={color} />;
      case "beach":
        return <Palmtree size={size} color="white" fill={color} />;
      case "mountain":
        return <MapPin size={size} color="white" fill={color} />;
      case "food":
        return <Pizza size={size} color="white" fill={color} />;
      case "culture":
        return <Coffee size={size} color="white" fill={color} />;
      case "party":
        return <PartyPopper size={size} color="white" fill={color} />;
      case "music":
        return <Music size={size} color="white" fill={color} />;
      default:
        return <Sparkles size={size} color="white" fill={color} />;
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[600px] my-8">
      <div className="w-full h-full">
        <svg 
          viewBox="0 0 700 700" 
          className="w-full h-full"
        >
          {/* Shameless map of India with vibrant gradient backgrounds */}
          <defs>
            <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          
          <path
            d="M220,120 C300,110 390,100 450,150 C510,190 550,220 580,280 
               C610,340 630,410 590,470 C550,530 530,550 510,580 
               C490,610 450,630 400,640 C350,650 320,630 280,610 
               C240,590 220,580 190,540 C160,500 130,460 150,410 
               C170,360 210,320 200,270 C190,220 170,160 220,120z"
            fill="url(#indiaGradient)"
            stroke="#FFF"
            strokeWidth="4"
            className="india-outline drop-shadow-lg"
            strokeDasharray="10,5"
          />
          
          {/* Fun internal borders for a shameless look */}
          <path d="M220,120 C250,150 290,140 320,160" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5,3" />
          <path d="M320,160 C350,180 380,160 400,200" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5,3" />
          <path d="M400,200 C420,240 470,220 510,250" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5,3" />
          <path d="M200,270 C250,260 300,280 350,270" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5,3" />
          <path d="M350,270 C400,260 450,280 500,270" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5,3" />
          <path d="M200,350 C250,340 300,360 350,350" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5,3" />
          <path d="M350,350 C400,340 450,360 500,350" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5,3" />
          <path d="M190,420 C240,410 290,430 340,420" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5,3" />
          <path d="M340,420 C390,410 440,430 490,420" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5,3" />
          <path d="M240,500 C290,490 340,510 390,500" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5,3" />

          {/* State symbols */}
          {states.map((state) => (
            <g
              key={state.id}
              onClick={() => handleStateClick(state)}
              onMouseEnter={() => setHoveredState(state)}
              onMouseLeave={() => setHoveredState(null)}
              className={cn(
                "cursor-pointer transform transition-all duration-300 hover:scale-125",
                state.cityId ? "opacity-100" : "opacity-90"
              )}
            >
              {/* Circular background for each state symbol */}
              <circle 
                cx={state.position.x} 
                cy={state.position.y} 
                r={hoveredState?.id === state.id ? 22 : 18} 
                fill={state.color}
                className="drop-shadow-md"
                filter="url(#glow)"
              />
              
              {/* Symbol position */}
              <foreignObject
                x={state.position.x - 15}
                y={state.position.y - 15}
                width="30"
                height="30"
                className="flex items-center justify-center"
              >
                <div className="flex items-center justify-center h-full">
                  {renderSymbol(state.symbol, hoveredState?.id === state.id, state.color)}
                </div>
              </foreignObject>
            </g>
          ))}
          
          {/* Add a filter for glow effect */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
      
      {/* State info tooltip */}
      {hoveredState && (
        <div
          className="absolute bg-white p-3 rounded-lg shadow-lg z-10 w-52 border-2"
          style={{
            left: `${(hoveredState.position.x / 700) * 100}%`,
            top: `${(hoveredState.position.y / 700) * 100}%`,
            transform: "translate(-50%, -130%)",
            borderColor: hoveredState.color,
            boxShadow: `0 4px 20px ${hoveredState.color}80`
          }}
        >
          <div className="font-poppins font-bold" style={{ color: hoveredState.color }}>{hoveredState.name}</div>
          <div className="text-sm text-gray-600">
            Known for: {hoveredState.symbol.charAt(0).toUpperCase() + hoveredState.symbol.slice(1)}
          </div>
          {hoveredState.cityId && (
            <div className="text-xs font-semibold mt-1" style={{ color: hoveredState.color }}>
              Click to explore
            </div>
          )}
          {/* Triangle pointer */}
          <div
            className="absolute w-4 h-4 bg-white border-r-2 border-b-2 transform rotate-45"
            style={{
              bottom: "-8px",
              left: "calc(50% - 8px)",
              borderColor: hoveredState.color
            }}
          />
        </div>
      )}
    </div>
  );
}
