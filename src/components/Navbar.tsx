
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Search, Menu, User } from "lucide-react";
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
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader>
            <div className="p-4 space-y-4">
              <nav className="flex flex-col space-y-3">
                <Link 
                  to="/" 
                  className="text-sm font-medium p-2 hover:bg-accent rounded-md flex items-center"
                >
                  Home
                </Link>
                <Link 
                  to="/cities" 
                  className="text-sm font-medium p-2 hover:bg-accent rounded-md flex items-center"
                >
                  Cities
                </Link>
                <Link 
                  to="/travel-guide" 
                  className="text-sm font-medium p-2 hover:bg-accent rounded-md flex items-center"
                >
                  Travel Guide
                </Link>
                {isAuthenticated ? (
                  <>
                    <div className="p-2 flex items-center border rounded-md">
                      <User className="h-4 w-4 mr-2" />
                      <div>
                        <p className="text-sm font-medium">Hello, {currentUser?.username || 'Traveler'}</p>
                        <p className="text-xs text-gray-500">{currentUser?.email}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start" 
                      onClick={handleLogout}
                    >
                      Log out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button variant="outline" className="w-full">
                        Log in
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button className="w-full">Sign up</Button>
                    </Link>
                  </>
                )}
              </nav>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
