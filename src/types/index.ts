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
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface TransportOption {
  type: string;
  details: string;
}

export interface Hotel {
  id: string;
  name: string;
  rating: number;
  price: string;
  imageUrl: string;
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
  location: {
    address: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  rating: number;
  reviews: Review[];
  transportOptions: TransportOption[];
  timings?: string;
  entryFee?: string;
  bestTimeToVisit?: string;
  popularFor?: string;
  localCuisine?: Cuisine[];
  nearbyHotels: Hotel[];
}
