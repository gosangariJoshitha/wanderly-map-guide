
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { UserProfile } from "@/components/auth/UserProfile";
import { MapPin } from "lucide-react";

export function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/50 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-travel-blue-600" />
          <span className="text-xl font-bold">CityWander</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="font-medium hover:text-travel-blue-600 transition-colors">Home</Link>
          <Link to="/cities" className="font-medium hover:text-travel-blue-600 transition-colors">Cities</Link>
          <Link to="/travel-guide" className="font-medium hover:text-travel-blue-600 transition-colors">Travel Guide</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <UserProfile />
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link to="/register">
                <Button>Sign up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
