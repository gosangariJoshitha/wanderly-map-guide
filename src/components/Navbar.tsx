
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Search, Menu, X, BookOpen } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Detailed Guide</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>India Travel Guide</SheetTitle>
                <SheetDescription>
                  Essential information for traveling in India
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Best Time to Visit</h3>
                  <p className="text-sm text-muted-foreground">
                    October to March is generally the best time to visit most of India, when the weather is cooler and more pleasant. Avoid the monsoon season (June to September) in most regions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Visa Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Most visitors need a tourist visa to enter India. E-visas are available for many nationalities. Apply online at least 4 days before travel through the official Indian government website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Transportation</h3>
                  <p className="text-sm text-muted-foreground">
                    India has an extensive rail network which is an affordable way to travel between cities. Domestic flights are recommended for longer distances. Within cities, use ride-sharing apps, auto-rickshaws, or the metro systems where available.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Safety Tips</h3>
                  <p className="text-sm text-muted-foreground">
                    - Keep your belongings secure and be aware of your surroundings<br />
                    - Dress modestly, especially at religious sites<br />
                    - Only drink bottled water<br />
                    - Use registered taxis or ride-sharing services<br />
                    - Store emergency contacts and your embassy details
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Local Customs</h3>
                  <p className="text-sm text-muted-foreground">
                    - Remove shoes before entering homes and places of worship<br />
                    - Greet people with "Namaste" with palms together<br />
                    - Ask permission before taking photos of people<br />
                    - Eat with your right hand if dining traditionally<br />
                    - Haggling is expected in markets
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Log out
              </Button>
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

        {/* Mobile Navigation */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-background border-b space-y-4">
          <form onSubmit={handleSearch} className="relative mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search cities or attractions..."
              className="w-full pl-8 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-sm font-medium p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/cities" 
              className="text-sm font-medium p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Cities
            </Link>
            <Link 
              to="/travel-guide" 
              className="text-sm font-medium p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Travel Guide
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="justify-start" onClick={() => setIsMenuOpen(false)}>
                  <BookOpen className="h-4 w-4 mr-2" />
                  Detailed Guide
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>India Travel Guide</SheetTitle>
                  <SheetDescription>
                    Essential information for traveling in India
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Best Time to Visit</h3>
                    <p className="text-sm text-muted-foreground">
                      October to March is generally the best time to visit most of India, when the weather is cooler and more pleasant. Avoid the monsoon season (June to September) in most regions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Visa Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Most visitors need a tourist visa to enter India. E-visas are available for many nationalities. Apply online at least 4 days before travel through the official Indian government website.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Transportation</h3>
                    <p className="text-sm text-muted-foreground">
                      India has an extensive rail network which is an affordable way to travel between cities. Domestic flights are recommended for longer distances. Within cities, use ride-sharing apps, auto-rickshaws, or the metro systems where available.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Safety Tips</h3>
                    <p className="text-sm text-muted-foreground">
                      - Keep your belongings secure and be aware of your surroundings<br />
                      - Dress modestly, especially at religious sites<br />
                      - Only drink bottled water<br />
                      - Use registered taxis or ride-sharing services<br />
                      - Store emergency contacts and your embassy details
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Local Customs</h3>
                    <p className="text-sm text-muted-foreground">
                      - Remove shoes before entering homes and places of worship<br />
                      - Greet people with "Namaste" with palms together<br />
                      - Ask permission before taking photos of people<br />
                      - Eat with your right hand if dining traditionally<br />
                      - Haggling is expected in markets
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <div className="flex flex-col gap-2 pt-2">
              {isAuthenticated ? (
                <Button variant="outline" className="w-full" onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}>
                  Log out
                </Button>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Log in
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full">Sign up</Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
