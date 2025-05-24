
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Search, Menu, User, X, Home, Map, Building } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, logout, currentUser } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    toast({ title: "Logged out successfully" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-travel-blue-500" />
            <span className="font-poppins text-xl font-bold text-travel-blue-600">
              City<span className="text-travel-teal-500">Wander</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <form onSubmit={handleSearch} className="relative w-60">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search cities or attractions..."
              className="w-full pl-8 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link to="/cities" className="text-sm font-medium hover:text-primary">
            Cities
          </Link>
          <Link to="/travel-guide" className="text-sm font-medium hover:text-primary">
            Travel Guide
          </Link>
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <User className="h-5 w-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-60 p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-travel-teal-100 flex items-center justify-center">
                          <User className="h-5 w-5 text-travel-teal-600" />
                        </div>
                        <div>
                          <p className="font-medium">Hello, {currentUser?.username || 'Traveler'}</p>
                          <p className="text-xs text-gray-500">{currentUser?.email}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={handleLogout} className="w-full">
                        Log out
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    Log in
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">Sign up</Button>
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button / Drawer Trigger */}
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-full w-80 max-w-[80vw]">
            <DrawerHeader className="border-b">
              <div className="flex items-center justify-between">
                <DrawerTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-travel-blue-500" />
                  <span className="font-poppins text-lg font-bold text-travel-blue-600">
                    City<span className="text-travel-teal-500">Wander</span>
                  </span>
                </DrawerTitle>
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                  </Button>
                </DrawerClose>
              </div>
            </DrawerHeader>
            
            <div className="p-6 space-y-6">
              <nav className="space-y-4">
                <DrawerClose asChild>
                  <Link to="/" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors">
                    <Home className="h-5 w-5" />
                    Home
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link to="/cities" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors">
                    <Building className="h-5 w-5" />
                    Cities
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link to="/travel-guide" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors">
                    <Map className="h-5 w-5" />
                    Travel Guide
                  </Link>
                </DrawerClose>
              </nav>

              <div className="border-t pt-6">
                {isAuthenticated ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-travel-teal-100 flex items-center justify-center">
                        <User className="h-4 w-4 text-travel-teal-600" />
                      </div>
                      <div>
                        <p className="font-medium">{currentUser?.username || 'Traveler'}</p>
                        <p className="text-xs text-gray-500">{currentUser?.email}</p>
                      </div>
                    </div>
                    <DrawerClose asChild>
                      <Button variant="outline" onClick={handleLogout} className="w-full">
                        Log out
                      </Button>
                    </DrawerClose>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <DrawerClose asChild>
                      <Link to="/login" className="block">
                        <Button variant="outline" className="w-full">
                          Log in
                        </Button>
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link to="/register" className="block">
                        <Button className="w-full">
                          Sign up
                        </Button>
                      </Link>
                    </DrawerClose>
                  </div>
                )}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
