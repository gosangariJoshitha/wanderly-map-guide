
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Search, Menu, User, ArrowLeft, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
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
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-2xl font-bold">CityWander</DrawerTitle>
            </DrawerHeader>
            <div className="p-4 space-y-4">
              {isAuthenticated && (
                <div className="p-6 bg-gray-50 rounded-lg space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-travel-teal-100 flex items-center justify-center">
                      <User className="h-6 w-6 text-travel-teal-600" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">Hello, {currentUser?.username || 'Traveler'}</p>
                      <p className="text-sm text-gray-500">{currentUser?.email}</p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-center" 
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              )}

              <div className="border-b pb-4 mb-4">
                <Link to="/" className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-md">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="font-medium">Go Back</span>
                </Link>
              </div>

              <nav className="flex flex-col space-y-1">
                <Link 
                  to="/" 
                  className="text-base font-medium p-3 hover:bg-accent rounded-md flex items-center gap-3"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Home
                </Link>
                <Link 
                  to="/cities" 
                  className="text-base font-medium p-3 hover:bg-accent rounded-md flex items-center gap-3"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 22h20"></path>
                    <path d="M6.87 2l-4.3 4.3a.61.61 0 00.43 1.05h3v7.65a.6.6 0 001.2 0V7.35h3a.61.61 0 00.43-1.05L6.87 2z"></path>
                    <path d="M14.87 15l-4.3 4.3a.61.61 0 00.43 1.05h3v-3a.6.6 0 011.2 0v3h3a.61.61 0 00.43-1.05L14.87 15z"></path>
                  </svg>
                  Explore Cities
                </Link>
                <Link 
                  to="/travel-guide" 
                  className="text-base font-medium p-3 hover:bg-accent rounded-md flex items-center gap-3"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  All Cities Detail
                </Link>
                
                {!isAuthenticated && (
                  <div className="pt-4 flex flex-col space-y-2">
                    <Link to="/login">
                      <Button variant="outline" className="w-full">
                        Log in
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button className="w-full">Sign up</Button>
                    </Link>
                  </div>
                )}
              </nav>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
