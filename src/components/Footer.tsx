
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-travel-blue-900 text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-travel-teal-400" />
              <span className="font-poppins text-xl font-bold text-white">
                City<span className="text-travel-teal-400">Wander</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300 max-w-xs">
              Your ultimate guide to exploring India's most beautiful cities and attractions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-poppins text-travel-teal-400 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-travel-teal-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cities" className="text-sm text-gray-300 hover:text-travel-teal-400 transition">
                  Cities
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-travel-teal-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-sm text-gray-300 hover:text-travel-teal-400 transition">
                  Log in
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-sm text-gray-300 hover:text-travel-teal-400 transition">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-poppins text-travel-teal-400 text-lg font-semibold">Popular Cities</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/city/mumbai" className="text-sm text-gray-300 hover:text-travel-teal-400 transition">
                  Mumbai
                </Link>
              </li>
              <li>
                <Link to="/city/delhi" className="text-sm text-gray-300 hover:text-travel-teal-400 transition">
                  Delhi
                </Link>
              </li>
              <li>
                <Link to="/city/hyderabad" className="text-sm text-gray-300 hover:text-travel-teal-400 transition">
                  Hyderabad
                </Link>
              </li>
              <li>
                <Link to="/city/bengaluru" className="text-sm text-gray-300 hover:text-travel-teal-400 transition">
                  Bangalore
                </Link>
              </li>
              <li>
                <Link to="/city/kolkata" className="text-sm text-gray-300 hover:text-travel-teal-400 transition">
                  Kolkata
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CityWander. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
