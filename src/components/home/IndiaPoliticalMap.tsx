
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Flag, Music, Coffee, Pizza, Palmtree, PartyPopper, Sparkles, BookOpen, Camera, Landmark, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";

// Define a type for state data
interface StateData {
  id: string;
  name: string;
  symbol: "monument" | "temple" | "beach" | "mountain" | "food" | "culture" | "party" | "music" | "education" | "wildlife" | "landmark" | "craft";
  position: { x: number; y: number };
  color: string;
  cityId?: string; // Optional ID of main city in this state
}

export function IndiaPoliticalMap() {
  const [hoveredState, setHoveredState] = useState<StateData | null>(null);
  const navigate = useNavigate();
  
  // Data for Indian states with positions on the SVG map and their famous symbols
  const states: StateData[] = [
    { id: "jammu-kashmir", name: "Jammu & Kashmir", symbol: "mountain", position: { x: 255, y: 130 }, cityId: "srinagar", color: "#FFEB3B" },
    { id: "himachal-pradesh", name: "Himachal Pradesh", symbol: "mountain", position: { x: 260, y: 170 }, color: "#FFCDD2" },
    { id: "punjab", name: "Punjab", symbol: "food", position: { x: 220, y: 180 }, cityId: "amritsar", color: "#B3E5FC" },
    { id: "uttarakhand", name: "Uttarakhand", symbol: "temple", position: { x: 310, y: 180 }, color: "#90CAF9" },
    { id: "haryana", name: "Haryana", symbol: "culture", position: { x: 240, y: 210 }, color: "#81D4FA" },
    { id: "delhi", name: "Delhi", symbol: "landmark", position: { x: 260, y: 220 }, cityId: "delhi", color: "#FF9800" },
    { id: "rajasthan", name: "Rajasthan", symbol: "culture", position: { x: 190, y: 260 }, cityId: "jaipur", color: "#90CAF9" },
    { id: "uttar-pradesh", name: "Uttar Pradesh", symbol: "monument", position: { x: 320, y: 240 }, cityId: "varanasi", color: "#E1BEE7" },
    { id: "bihar", name: "Bihar", symbol: "education", position: { x: 400, y: 260 }, cityId: "patna", color: "#FFEB3B" },
    { id: "sikkim", name: "Sikkim", symbol: "mountain", position: { x: 440, y: 220 }, color: "#B3E5FC" },
    { id: "arunachal-pradesh", name: "Arunachal Pradesh", symbol: "wildlife", position: { x: 520, y: 210 }, color: "#FFCDD2" },
    { id: "assam", name: "Assam", symbol: "wildlife", position: { x: 480, y: 240 }, cityId: null, color: "#FF9800" },
    { id: "meghalaya", name: "Meghalaya", symbol: "mountain", position: { x: 460, y: 260 }, cityId: "meghalaya", color: "#A5D6A7" },
    { id: "manipur", name: "Manipur", symbol: "culture", position: { x: 510, y: 280 }, color: "#81D4FA" },
    { id: "nagaland", name: "Nagaland", symbol: "culture", position: { x: 530, y: 250 }, color: "#FF9800" },
    { id: "tripura", name: "Tripura", symbol: "craft", position: { x: 470, y: 300 }, color: "#90CAF9" },
    { id: "mizoram", name: "Mizoram", symbol: "music", position: { x: 500, y: 320 }, color: "#81D4FA" },
    { id: "west-bengal", name: "West Bengal", symbol: "culture", position: { x: 430, y: 300 }, cityId: "kolkata", color: "#90CAF9" },
    { id: "jharkhand", name: "Jharkhand", symbol: "wildlife", position: { x: 380, y: 300 }, cityId: "ranchi", color: "#80DEEA" },
    { id: "odisha", name: "Odisha", symbol: "temple", position: { x: 380, y: 340 }, color: "#FFCDD2" },
    { id: "chhattisgarh", name: "Chhattisgarh", symbol: "craft", position: { x: 330, y: 330 }, color: "#FF9800" },
    { id: "madhya-pradesh", name: "Madhya Pradesh", symbol: "temple", position: { x: 280, y: 300 }, color: "#FFF9C4" },
    { id: "gujarat", name: "Gujarat", symbol: "culture", position: { x: 180, y: 320 }, cityId: "ahmedabad", color: "#FFCDD2" },
    { id: "maharashtra", name: "Maharashtra", symbol: "landmark", position: { x: 230, y: 370 }, cityId: "mumbai", color: "#FFEB3B" },
    { id: "telangana", name: "Telangana", symbol: "landmark", position: { x: 300, y: 390 }, cityId: "hyderabad", color: "#FFCDD2" },
    { id: "andhra-pradesh", name: "Andhra Pradesh", symbol: "temple", position: { x: 320, y: 430 }, cityId: "vijayawada", color: "#80DEEA" },
    { id: "karnataka", name: "Karnataka", symbol: "landmark", position: { x: 250, y: 430 }, cityId: "banglore", color: "#90CAF9" },
    { id: "goa", name: "Goa", symbol: "beach", position: { x: 220, y: 420 }, color: "#FFCDD2" },
    { id: "kerala", name: "Kerala", symbol: "beach", position: { x: 250, y: 500 }, cityId: null, color: "#A5D6A7" },
    { id: "tamil-nadu", name: "Tamil Nadu", symbol: "temple", position: { x: 290, y: 490 }, cityId: "chennai", color: "#FFEB3B" }
  ];
  
  const handleStateClick = (state: StateData) => {
    if (state.cityId) {
      navigate(`/city/${state.cityId}`);
    }
  };
  
  // Function to render the appropriate symbol for each state
  const renderSymbol = (symbolType: StateData["symbol"], isHovered: boolean) => {
    const size = isHovered ? 24 : 20;
    const color = "white";
    
    switch(symbolType) {
      case "monument":
        return <Landmark size={size} color={color} />;
      case "temple":
        return <Flag size={size} color={color} />;
      case "beach":
        return <Palmtree size={size} color={color} />;
      case "mountain":
        return <Mountain size={size} color={color} />;
      case "food":
        return <Pizza size={size} color={color} />;
      case "culture":
        return <Coffee size={size} color={color} />;
      case "party":
        return <PartyPopper size={size} color={color} />;
      case "music":
        return <Music size={size} color={color} />;
      case "education":
        return <BookOpen size={size} color={color} />;
      case "wildlife":
        return <Camera size={size} color={color} />;
      case "landmark":
        return <MapPin size={size} color={color} />;
      case "craft":
        return <Sparkles size={size} color={color} />;
      default:
        return <Sparkles size={size} color={color} />;
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[600px] my-8">
      <div className="w-full h-full">
        <svg 
          viewBox="0 0 700 600" 
          className="w-full h-full"
        >
          {/* India outline */}
          <defs>
            <filter id="drop-shadow">
              <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.3" />
            </filter>
          </defs>
          
          {/* Define each state as a path */}
          <g filter="url(#drop-shadow)">
            {/* Jammu & Kashmir */}
            <path 
              d="M250,100 C270,90 290,80 310,100 C330,120 330,140 310,150 C290,160 270,150 250,140 C230,130 230,110 250,100z"
              fill="#FFEB3B" 
              stroke="#000000" 
              strokeWidth="1.5" 
              className={cn(
                "cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-200",
                hoveredState?.id === "jammu-kashmir" ? "stroke-2 stroke-white" : ""
              )}
              onClick={() => handleStateClick(states.find(s => s.id === "jammu-kashmir")!)}
              onMouseEnter={() => setHoveredState(states.find(s => s.id === "jammu-kashmir")!)}
              onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* Himachal Pradesh */}
            <path 
              d="M260,150 C280,140 300,150 310,170 C300,190 280,190 260,180 C240,170 240,160 260,150z"
              fill="#FFCDD2" 
              stroke="#000000" 
              strokeWidth="1.5"
              className={cn(
                "cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-200",
                hoveredState?.id === "himachal-pradesh" ? "stroke-2 stroke-white" : ""
              )}
              onClick={() => handleStateClick(states.find(s => s.id === "himachal-pradesh")!)}
              onMouseEnter={() => setHoveredState(states.find(s => s.id === "himachal-pradesh")!)}
              onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* Punjab */}
            <path 
              d="M210,170 C230,160 240,170 250,180 C260,190 250,200 230,200 C210,200 200,190 210,170z"
              fill="#B3E5FC" 
              stroke="#000000" 
              strokeWidth="1.5"
              className={cn(
                "cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-200",
                hoveredState?.id === "punjab" ? "stroke-2 stroke-white" : ""
              )}
              onClick={() => handleStateClick(states.find(s => s.id === "punjab")!)}
              onMouseEnter={() => setHoveredState(states.find(s => s.id === "punjab")!)}
              onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* And so on for other states... */}
            
            {/* Define more state paths here based on the reference image */}
            
            {/* Uttarakhand */}
            <path 
              d="M310,170 C330,160 350,170 350,190 C350,210 330,220 310,210 C290,200 290,180 310,170z"
              fill="#90CAF9" 
              stroke="#000000" 
              strokeWidth="1.5"
              className={cn(
                "cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-200",
                hoveredState?.id === "uttarakhand" ? "stroke-2 stroke-white" : ""
              )}
              onClick={() => handleStateClick(states.find(s => s.id === "uttarakhand")!)}
              onMouseEnter={() => setHoveredState(states.find(s => s.id === "uttarakhand")!)}
              onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* Just showing a few more key states to demonstrate */}
            
            {/* Uttar Pradesh (larger state in the middle) */}
            <path 
              d="M260,200 C290,190 320,190 350,200 C380,210 390,230 380,250 C370,270 340,280 310,270 C280,260 250,250 240,230 C230,210 240,210 260,200z"
              fill="#E1BEE7" 
              stroke="#000000" 
              strokeWidth="1.5"
              className={cn(
                "cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-200",
                hoveredState?.id === "uttar-pradesh" ? "stroke-2 stroke-white" : ""
              )}
              onClick={() => handleStateClick(states.find(s => s.id === "uttar-pradesh")!)}
              onMouseEnter={() => setHoveredState(states.find(s => s.id === "uttar-pradesh")!)}
              onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* Rajasthan */}
            <path 
              d="M150,220 C180,210 210,210 230,230 C250,250 240,280 220,300 C200,320 160,320 140,300 C120,280 120,240 150,220z"
              fill="#90CAF9" 
              stroke="#000000" 
              strokeWidth="1.5"
              className={cn(
                "cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-200",
                hoveredState?.id === "rajasthan" ? "stroke-2 stroke-white" : ""
              )}
              onClick={() => handleStateClick(states.find(s => s.id === "rajasthan")!)}
              onMouseEnter={() => setHoveredState(states.find(s => s.id === "rajasthan")!)}
              onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* Maharashtra (showing a key state in central India) */}
            <path 
              d="M170,330 C210,320 250,330 270,350 C290,370 280,400 250,410 C220,420 180,410 160,390 C140,370 140,340 170,330z"
              fill="#FFEB3B" 
              stroke="#000000" 
              strokeWidth="1.5"
              className={cn(
                "cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-200",
                hoveredState?.id === "maharashtra" ? "stroke-2 stroke-white" : ""
              )}
              onClick={() => handleStateClick(states.find(s => s.id === "maharashtra")!)}
              onMouseEnter={() => setHoveredState(states.find(s => s.id === "maharashtra")!)}
              onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* Karnataka */}
            <path 
              d="M210,410 C240,400 270,410 280,440 C290,470 270,490 240,490 C210,490 190,470 200,440 C200,430 200,420 210,410z"
              fill="#90CAF9" 
              stroke="#000000" 
              strokeWidth="1.5"
              className={cn(
                "cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-200",
                hoveredState?.id === "karnataka" ? "stroke-2 stroke-white" : ""
              )}
              onClick={() => handleStateClick(states.find(s => s.id === "karnataka")!)}
              onMouseEnter={() => setHoveredState(states.find(s => s.id === "karnataka")!)}
              onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* Tamil Nadu */}
            <path 
              d="M260,490 C290,480 310,490 320,520 C330,550 310,570 280,570 C250,570 230,550 240,520 C240,510 250,500 260,490z"
              fill="#FFEB3B" 
              stroke="#000000" 
              strokeWidth="1.5"
              className={cn(
                "cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-200",
                hoveredState?.id === "tamil-nadu" ? "stroke-2 stroke-white" : ""
              )}
              onClick={() => handleStateClick(states.find(s => s.id === "tamil-nadu")!)}
              onMouseEnter={() => setHoveredState(states.find(s => s.id === "tamil-nadu")!)}
              onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* Kerala */}
            <path 
              d="M230,500 C250,490 260,500 260,520 C260,540 250,560 230,560 C210,560 200,540 200,520 C200,510 220,510 230,500z"
              fill="#A5D6A7" 
              stroke="#000000" 
              strokeWidth="1.5"
              className={cn(
                "cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-200",
                hoveredState?.id === "kerala" ? "stroke-2 stroke-white" : ""
              )}
              onClick={() => handleStateClick(states.find(s => s.id === "kerala")!)}
              onMouseEnter={() => setHoveredState(states.find(s => s.id === "kerala")!)}
              onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* Andhra Pradesh */}
            <path 
              d="M280,390 C310,380 340,390 350,420 C360,450 340,470 310,470 C280,470 260,450 270,420 C270,410 270,400 280,390z"
              fill="#80DEEA" 
              stroke="#000000" 
              strokeWidth="1.5"
              className={cn(
                "cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-200",
                hoveredState?.id === "andhra-pradesh" ? "stroke-2 stroke-white" : ""
              )}
              onClick={() => handleStateClick(states.find(s => s.id === "andhra-pradesh")!)}
              onMouseEnter={() => setHoveredState(states.find(s => s.id === "andhra-pradesh")!)}
              onMouseLeave={() => setHoveredState(null)}
            />
          </g>

          {/* State symbols */}
          {states.map((state) => (
            <g
              key={state.id}
              onClick={() => handleStateClick(state)}
              onMouseEnter={() => setHoveredState(state)}
              onMouseLeave={() => setHoveredState(null)}
              className="cursor-pointer transform transition-all duration-300 hover:scale-125"
            >
              {/* Circular background for each state symbol */}
              <circle 
                cx={state.position.x} 
                cy={state.position.y} 
                r={hoveredState?.id === state.id ? 18 : 15} 
                fill={state.color}
                stroke="#000000"
                strokeWidth={0.7}
                className="drop-shadow-md opacity-90 hover:opacity-100"
              />
              
              {/* Symbol position */}
              <foreignObject
                x={state.position.x - 12}
                y={state.position.y - 12}
                width="24"
                height="24"
                className="flex items-center justify-center"
              >
                <div className="flex items-center justify-center h-full">
                  {renderSymbol(state.symbol, hoveredState?.id === state.id)}
                </div>
              </foreignObject>
            </g>
          ))}
          
          {/* Add a filter for glow effect */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
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
            boxShadow: `0 4px 12px ${hoveredState.color}80`
          }}
        >
          <div className="font-poppins font-bold">{hoveredState.name}</div>
          <div className="text-sm text-gray-600">
            Known for: {hoveredState.symbol.charAt(0).toUpperCase() + hoveredState.symbol.slice(1)}
          </div>
          {hoveredState.cityId && (
            <div className="text-xs font-semibold mt-1 text-blue-600">
              Click to explore {hoveredState.cityId}
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
