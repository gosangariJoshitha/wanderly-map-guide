
export interface City {
  id: string;
  name: string;
  state: string;
  region: string;
  imageUrl: string;
  description: string;
  bestTimeToVisit: string;
  languages: string[];
  currency: string;
  attractionsCount: number;
  population: string;
  famousFor?: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  entryFee?: string;
}

export interface Review {
  id: string;
  user: string;
  username: string; // Adding username field
  rating: number;
  comment: string;
  date: string;
}

export interface BusRoute {
  busNumber: string;
  from: string;
  to: string;
  stops: string[];
  frequency: string;
}

export interface TransportOption {
  car: string;
  bus?: BusRoute[];
}

export interface NearbyHotel {
  id: string;
  name: string;
  rating: number;
  price: string;
  imageUrl: string;
  distance?: string;
  bookingLink?: string;
}

// Add the following types if they don't exist already
export interface Cuisine {
  name: string;
  description: string;
  price?: string;
}

// Update Attraction type
export interface Attraction {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  galleryImages?: string[];
  category: "tourist" | "temple" | "other";
  cityId?: string;
  location: {
    address: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  rating: number;
  reviews: Review[];
  transportOptions: TransportOption;
  timings?: string;
  entryFee?: string;
  bestTimeToVisit?: string;
  popularFor?: string;
  localCuisine?: Cuisine[];
  nearbyHotels?: NearbyHotel[];
}
